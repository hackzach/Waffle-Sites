<?php

if(!$auth->isSuper()) { //is not super
	if(!$auth->isAdmin()) { //is not admin
		if(!$auth->isArtist()) { //is not artist
			if(!$auth->isUser()) { //is not logged in
				$pageTitle = "Please Login.";
				$page = "login"; //redirect login; not public
				//is public
				//do public stuff here
			}
			else $page = "block"; //redirect unauthorized; not admin
			//is user
			//do user stuff here
		}
		else $page = "block"; //redirect unauthorized; not super
		//is artist
		//do artist stuff here
		
	}
	else $page = "block"; //redirect unauthorized; not super
	 //is admin
	 //do admin stuff here

}
//is super
//do super stuff here

$pageTitle = "Software Update";

include SITE_PATH."/modules/version.php"; //check for updates

$get = (isset($_REQUEST['install']) ? true : false);

if($get && $uptodate) {
	$fp = fopen (SITE_PATH."/temp/update.tar.gz", "w+");//This is the file where we save the information
	$ch = curl_init("$get_software_update/update.tar.gz");//Here is the file we are downloading
	curl_setopt($ch, CURLOPT_TIMEOUT, 50);
	curl_setopt($ch, CURLOPT_FILE, $fp);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_exec($ch);
	curl_close($ch);
	fclose($fp);
}


$update_file = SITE_PATH."/temp/update.tar.gz";
$temp_dir = SITE_PATH."/temp/update";


 ?> 