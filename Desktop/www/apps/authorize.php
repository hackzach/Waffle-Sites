<?php
ob_start();
$pageTitle = "Please wait..";

if(!$auth->isUser()) {
	$page = "login";
}
else {
	$scope = "read_stream,publish_stream";
	ob_flush();
	header("Location: https://www.facebook.com/dialog/oauth?client_id=177894922232847&client_secret=6e987ae3f1172c066b7f67f631c5e01c&redirect_uri=".$domain."/".addslashes(strip_tags($_REQUEST['ref']))."&scope=$scope");
	ob_end_flush();
}

?>
