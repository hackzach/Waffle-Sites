<?php

$scope = "read_stream,publish_stream";

$authorize = $_GET['code'];

	if(isset($authorize)) {
	
	 		$oauth = "https://graph.facebook.com/oauth/access_token?".
				"client_id=&".
				"redirect_uri=$domain/$page&".
				"client_secret=&".
				"code=$authorize";

		//get access token
		define("ACCESS_TOKEN", file_get_contents($oauth));

	}
	else {
		header("Location: $domain/authorize?ref=$page");
	}
?>