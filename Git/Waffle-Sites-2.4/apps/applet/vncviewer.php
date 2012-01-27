<?php

$pageTitle = "VNC Viewer";

if(!$auth->isSuper()) { //is not super
	$page = "block"; //redirect unauthorized; not super
	 //is admin
	 //do admin stuff here

}
//is super
//do super stuff here

?>