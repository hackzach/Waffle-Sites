<?php
ob_start();

$pageTitle = "Home";

if(!$auth->isUser()) {

	$page = "login";

}

$name = (isset($_REQUEST['name']) ? addslashes($_REQUEST['name']) : NULL);
$email = (isset($_REQUEST['email']) ? addslashes($_REQUEST['email']) : NULL);
$location = (isset($_REQUEST['location']) ? addslashes($_REQUEST['location']) : NULL);
$hide_email = (isset($_REQUEST['hide_email']) ? addslashes($_REQUEST['hide_email']) : NULL);
$isprivate = (isset($_REQUEST['isprivate']) ? addslashes($_REQUEST['isprivate']) : NULL);
$birthdate = (isset($_REQUEST['birthdate']) ? addslashes($_REQUEST['birthdate']) : NULL);
$gender = (isset($_REQUEST['gender']) ? addslashes($_REQUEST['gender']) : NULL);
$status = (isset($_REQUEST['status']) ? addslashes($_REQUEST['status']) : NULL);
$pic = (isset($_REQUEST['pic']) ? addslashes($_REQUEST['pic']) : NULL);
$get_bgcolor = (isset($_REQUEST['bgcolor']) ? addslashes($_REQUEST['bgcolor']) : NULL);
$get_fontcolor = (isset($_REQUEST['fontcolor']) ? addslashes($_REQUEST['fontcolor']) : NULL);
$get_fontsize = (isset($_REQUEST['fontsize']) ? addslashes($_REQUEST['fontsize']) : NULL);
$get_font = (isset($_REQUEST['font']) ? addslashes($_REQUEST['font']) : NULL);

$webpage = (isset($_REQUEST['index']) && $_REQUEST['index'] != "" ? addslashes($_REQUEST['index']) : "index");

$bgcolor = $user['theme_bgcolor'];
$fontcolor = $user['theme_fontcolor'];
$fontsize = $user['theme_fontsize'];
$font =     $user['theme_font'];

		if(isset($_REQUEST['index'])) { 
					if($auth->isPrivate($profile_data['id']) && !$auth->isAdmin()) {
						$page = "private"; //Profile is set to private
						$pageTitle = "Private Page.";
					}
					else if(file_exists(SITE_PATH."/pages/home/i/".$profile_data['id']."/".$webpage.".html")) {
						$page = "home/i/".$profile_data['id']."/".$webpage;
					}
					else {
						$pageTitle = "File Not Found";
						if(file_exists(SITE_PATH."/pages/home/i/".$profile_data['id']."/404.html")) {
							$page = "home/i/".$profile_data['id']."/404";
						}
						else {
							$page = "404";
						}
					}
		}




	if(isset($_REQUEST['save'])) {
			if(!$auth->isUser()) {
				$page = "login"; //You are not logged in
			}
			//Save updated profile
	if(isset($name) && isset($isprivate)) {
	$result = $query->update("users", "
	name='$name',
	email='$email',
	location='$location',
	hide_email='$hide_email',
	profile_pic='$pic',
 	profile='$isprivate',
	birthdate='$birthdate',
	gender='$gender',
	theme_bgcolor='$get_bgcolor',
	theme_fontcolor='$get_fontcolor',
 	theme_fontsize='$get_fontsize',
	theme_font='$get_font',
 	status='$status'", 

	"WHERE id='".($auth->isAdmin() ? (isset($profile_data['id']) ? $profile_data['id'] : ID) : ID)."'"); 

	ob_flush();
		header("Location: ".$domain."/i/".(isset($profile_data['id']) ? $profile_data['id'] : ID)."/");
	ob_end_flush();
	}
}

else {

$dirlist = $dir->read_dir(SITE_PATH."/pages/home",false, array("i")); /* allowing recursive mode is insecure and often process intensive to run, use at own risk */
//sort($dirlist);

$item = 0;
$cnt = 0;
$col = 0;
$break = 1;

	$count = count($dirlist);


	$show = 9;
	$pages = ceil($count/$show);

	$limit = (isset($_GET['pg']) ? addslashes($_GET['pg']) : 1);

	$min = ($limit-1) * $show; 
	$max = $limit * $show; 
	$list = NULL;

	if(!file_exists(SITE_PATH."/pages/home/i/".ID) || $debug) {
		$list = "<div style=\"display: none;\" id=\"dialog\" title=\"No Website Found\">
			<p>There has not been set a default website folder for you. (mkdir folder block here).
				Check that they didn't already get asked this, and said no. It will show up
				on other websites if they don't have a folder yet.</p>
		</div>";
	}	


			$list .= "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"10\" border=\"0\">
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
								$domain."/home/".
								$fileInfo['id']."\">
								<img 
									src=\"$domain/images/gnome/admin/".$fileName.".png\" title=\"".$fileInfo['description']."\">
								</img>
								</a>
								<br>";
						}
						else {
								$list .= "<a href=\"".
								$domain."/home/".
								$fileInfo['id']."\">
								<img 
									src=\"$domain/images/gnome/admin/default.png\" title=\"".$fileInfo['description']."\" >
								</img>
								</a>
								<br>";
							}

	
							$list .= "<a href=\"".
								$domain."/home/".
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