<?php

require SITE_PATH."/modules/settings.php";

require SITE_PATH."/modules/filefunc.php";

//require SITE_PATH."/modules/facebook.php"; //Facebook access_token


define("APP_ID", $rpx_api_id); //used for auth functions determines if default user


	/*Connect to DB*/
	$query = new db;
	$conn = $query->connect($mysql_host, $mysql_user, $mysql_password, $mysql_database);

 	switch($conn) {
		case 'DB_ERR':
			$errorHandler .= "<pre><b><span style=\"color: red\">
			Could not find database. You will not be able to login or manage content :(
			</span></b></pre>";
			define("MYSQL_OK", false);
		break;
		case 'CONN_ERR':
			$errorHandler .= "<pre><b><span style=\"color: red\">
			Could not connect to database. You will not be able to log in ormanage content X(
			</span></b></pre>";
			define("MYSQL_OK", false);
		break;
		case 'SUCCESS':
			define("MYSQL_OK", true);
		break;
	}
	/*-------------*/

?>