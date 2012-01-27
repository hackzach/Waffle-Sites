<?php

if(!$auth->isUser()) { //is not admin
	$page = "login";
	$pageTitle = "Please Login.";
}
else {
//is super
//do super stuff here

$pageTitle = "Administration Home";

include SITE_PATH."/modules/version.php"; //check for updates

$dirlist = $dir->read_dir(SITE_PATH."/pages/admin", $recursive='false'); /* allowing recursive mode is insecure and often process intensive to run, use at own risk */
//sort($dirlist);

$item = 0;
$cnt = 0;
$col = 0;
$break = 3;

	$count = count($dirlist);


	$show = 12;
	$pages = ceil($count/$show);

	$limit = (isset($_GET['pg']) ? addslashes($_GET['pg']) : 1);

	$min = ($limit-1) * $show; 
	$max = $limit * $show; 


			$list = "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"10\" border=\"0\">
						<tr>";
		for($i=0;$i < count($dirlist);$i++) {
					$fileName = substr($dirlist[$i], 0, (strlen($dirlist[$i])-5) );
					$fileInfo = $query->select("pages", "*", "WHERE id='$fileName'", $debug);
					if($fileName != "index" && ($fileInfo['permissions'] <= $auth->getLevel()) && (($cnt <= $max) && (($i <= $max) && ($i >= $min)) || (($i >= $min) && ($i <= $max)))) {
						$item++;
						if($col == 0) {
										$list .= "<td width=\"50%\" valign=\"top\">
													<p>";
						} 
						if (file_exists(SITE_PATH."/images/gnome/admin/$fileName.png")) {
							$list .= "<a href=\"".
								$domain."/admin/".
								$fileInfo['id']."\">
								<img 
									src=\"$domain/images/gnome/admin/".$fileName.".png\" title=\"".$fileInfo['description']."\">
								</img>
								</a>
								<br>";
						}
						else if($fileName == "update") {
							if($uptodate) {
								$list .= "<a href=\"".
								$domain."/admin/".
								$fileName."\">
								<img 
									src=\"$domain/images/gnome/admin/update-available.png\" title=\"An update is available.\">
								</img>
								</a>
								<br>";
							}
							else {
								$list .= "<a href=\"".
								$domain."/admin/".
								$fileName."\">
								<img 
									src=\"$domain/images/gnome/admin/update-latest.png\" title=\"Your software is up to date.\" >
								</img>
								</a>
								<br>";
							}


						}
	
							$list .= "<a href=\"".
								$domain."/admin/".
								$fileName."\" title=\"".$fileInfo['description']."\">".
								$fileInfo['title']."</a><br> <br>";

						$col++;
						$cnt++;
						
						if($col > $break) {
							$list .= "</p>
									</td>";
							$col = 0;
						}
					}
		}
			$list .= "</tr>
					</table>";
$count--;

}

?>