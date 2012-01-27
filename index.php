<?php

define("SITE_PATH" , realpath(dirname(__FILE__)) );

require_once SITE_PATH."/modules/connect.php";
require_once SITE_PATH."/modules/site_include.php";

require_once SITE_PATH."/modules/debug.php"; //Debug Console

require_once SITE_PATH."/modules/template.php";
		
require_once SITE_PATH."/modules/foot.php";
			
?>