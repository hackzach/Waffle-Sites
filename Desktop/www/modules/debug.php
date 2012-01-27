<?php

	if($auth->isSuper() && $debug) {
		
		if (file_exists(SITE_PATH."/apps/$page.php")) $app = "$page.php"; else $app = "(none)";

		$errorHandler .= "
			Debug Console<br>\n
			<pre>
			include	    $app
			content	    $page.html
			vars        ";


			foreach ( $_REQUEST as $key=>$value ){
     				$errorHandler .= "$key=$value&";
			}

			$errorHandler .= "
			app_id	    ".APP_ID."
			user_id	    ".ID."
			provider    ".PROVIDER."
			provider_id ".PROVIDER_ID."
			</pre>
			";
	}

?>