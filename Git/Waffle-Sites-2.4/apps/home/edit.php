<?php

if(!$auth->isUser()) {
	$page = "login";
	$pageTitle = "Please Login.";
}
else {
		
	if(isset($you) && $auth->isAdmin()) {
		//$user = $query->select("users", "*", "WHERE id='".$you."'", $debug);
		$user = $profile_data;
	}		

$pageTitle = "Edit Account";
$page = "home/edit";

}
?>