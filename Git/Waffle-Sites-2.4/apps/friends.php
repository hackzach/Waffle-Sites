<?php
include SITE_PATH."/modules/facebook.php"; //Facebook Social Graph(access_token)

	$result = json_decode(file_get_contents("https://graph.facebook.com/me/friends?".ACCESS_TOKEN), true);

	$friend = "<select name=\"id\">";
	foreach($result as $key=>$value) {
    		foreach ($value as $fkey=>$fvalue) {
				$friend .= "<option value=\"".$fvalue['id']."\">".$fvalue['name']."</option>";

		}
	}
	$friend .= "</select>";

?>

