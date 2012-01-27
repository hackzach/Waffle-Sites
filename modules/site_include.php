<?php

$errorHandler = NULL; //No Errors yet :D

$page = (isset($_REQUEST['page']) ? 
//any page requests?
(substr($_REQUEST['page'], strlen($_REQUEST['page'])-1, strlen($_REQUEST['page'])) == "/" ? 
//do they want index?
 addslashes(strip_tags($_REQUEST['page']))."index" : addslashes(strip_tags($_REQUEST['page']))) : "index"); 
//Take them where they want to go(index of folder, specific page, or homepage)

$debug = (isset($_GET['debug']) ? true : false); //triggers debugging when a page has ?debug at the end


include SITE_PATH."/modules/auth.php"; //AUTH 

$you = (isset($_GET['id']) ? addslashes($_GET['id']) : ID); //gets a users id(not the current logged in user)
$ui = (isset($_GET['ui']) ? true : false); //allows pages to be shown sans templates


	/* hiearchy of user permissions
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
					else {
						//is super
						//do super stuff here
					}

		$auth->isPrivate($id); //return true if a profile is private. 

	*/

//create new objects
$auth = new auth;
$file = new file;
$site = new site;
$dir  = new dir;

//update last visit
$query->update("users", "lastvisit='" . time() . "'", "WHERE id='".ID."'");

	//-Get user data into an array-
		$user = $query->select("users", "*", "WHERE id='".ID."'", $debug);
	//--------------------------------

		//Toggle user data for custom profiles
				if(isset($you)) {
					if(is_numeric($you)) {
						$profile_data = $query->select("users", "*", "WHERE id='".$you."'", $debug);
						
						if(!$profile_data) {
							$profile_data = $query->select("users", "*", "WHERE id='".APP_ID."'", $debug);
						}
					}
					else {
						$profile_data = str_replace("-", " ", $you);
						$profile_data = $query->select("users", "*", "WHERE name='".$profile_data."'", $debug);
						
						if(!$profile_data) {
							$profile_data = $query->select("users", "*", "WHERE id='".APP_ID."'", $debug);
						}
						
					}
				}
		//-------------------------------------

	//-Variable defines for profile info-

	$bgcolor = $user['theme_bgcolor'];
	$font = $user['theme_font'];
	$fontcolor = $user['theme_fontcolor'];
	$fontsize = $user['theme_fontsize'];
	$status = $user['status'];
?>