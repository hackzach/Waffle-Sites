<?php
 
if(!$auth->isUser()) {
	$page = "login";
	$pageTitle = "Please Login.";
}

?>