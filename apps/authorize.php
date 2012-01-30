<?php
ob_start();
$pageTitle = "Please wait..";

if(!$auth->isUser()) {
	$page = "login";
}
else {
	$scope = "read_stream,publish_stream";
	ob_flush();
	header("Location: https://www.facebook.com/dialog/oauth?client_id=&client_secret=&redirect_uri=".$domain."/".addslashes(strip_tags($_REQUEST['ref']))."&scope=$scope");
	ob_end_flush();
}

?>
