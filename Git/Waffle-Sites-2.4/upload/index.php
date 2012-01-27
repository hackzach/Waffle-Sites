<?php

$site_path = realpath(dirname(__FILE__));

$page = (isset($_REQUEST['page']) ? addslashes($_REQUEST['page']) : "index"); 

$sid = (isset($_GET['sid']) ? addslashes($_GET['sid']) : NULL);

$domain = $_SERVER['SERVER_NAME'];

$debug = (isset($_REQUEST['debug']) ? true : false);


	if($page == "swfupload") {
		header("Location: /flash/swfupload.swf");
	}


		if(file_exists("$site_path/apps/$page.php")) {
			require "$site_path/apps/$page.php";
		}

		if(file_exists("$site_path/pages/$page.html")) {
			require "$site_path/pages/$page.html";
		}
			
?>