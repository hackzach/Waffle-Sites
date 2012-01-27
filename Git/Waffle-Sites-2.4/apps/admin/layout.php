<?php


if(!$auth->isAdmin()) { //is not super
	if(!$auth->isUser()) { //is not admin
		 $pageTitle = "Please Login.";
		 $page = "login"; //redirect unauthorized; is artist
		//do user stuff here
		
	}

	else {

		$pageTitle = "Not Authorized.";
		 $page = "block";
		//do public stuff here
	}
}
else {

$edit = (isset($_GET['edit']) ? true : false);
$save = (isset($_GET['save']) ? true : false);
$delete  = (isset($_GET['del']) ? true : false);
$new  = (isset($_GET['new']) ? true : false);

$blacklist_dir = array("home", "admin", "styles", "i");
$blacklist_file = array("admin.html", "admin.bak.html", "navbar.html", "navbar.bak.html", "index.html");

$filename = (isset($_REQUEST['p']) ? addslashes(strip_tags($_REQUEST['p'])) : "default");
$dirname = (isset($_REQUEST['d']) && !in_array($_REQUEST['d'], $blacklist_dir) ? addslashes(strip_tags($_REQUEST['d'])) : NULL);

if(!$edit && !$save && !$new) {
	$pageTitle = "Layout";
}
else {
	$pageTitle = "$filename - Layout"; 
}

$dirlist = $dir->read_dir(SITE_PATH."/main/".$dirname, false, $blacklist_dir, $blacklist_file); /* allowing recursive mode is insecure and often process intensive to run, use at own risk */

$cnt = 0;
$col = 0;
	$count = count($dirlist);


	$show = 20;
	$pages = ceil($count/$show);

	$limit = (isset($_GET['pg']) ? addslashes($_GET['pg']) : 1);

	$min = ($limit-1) * $show; 
	$max = $limit * $show; 


			$list = "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"10\" border=\"0\">
						<tr>";
		for($i=0;$i < $count;$i++) {
			$filename = (!is_dir(SITE_PATH."/main/".$dirlist[$i]) ? substr($dirlist[$i], 0, (strlen($dirlist[$i])-5) ) : $dirlist[$i]);
			$fileInfo = $query->select("pages", "*", "WHERE id='$filename'", $debug);
			//if($fileInfo['id'] == "") $query->insert("pages", "id,title,description,permissions,owner", "'".$filename."','".$filename."','','".$auth->getLevel()."','".ID."'", $debug);
					if($filename != "index" && ($fileInfo['permissions'] <= $auth->getLevel() || $fileInfo['owner'] == ID) && (($cnt <= $max) && (($i <= $max) && ($i >= $min)) || (($i >= $min) && ($i <= $max)))) {
						if($col == 0) {
										$list .= "<td width=\"50%\" valign=\"top\">
													<p>";
						}
						if(is_dir(SITE_PATH."/main/".$dirlist[$i])) {
							$list .= "<a href=\"layout?d=".$dirlist[$i]."\" title=\"".$dirlist[$i]." folder.\">
								<img 
								src=\"$domain/images/gnome/folder.png								\">
								</img><br>
								<b>".$dirlist[$i]."</b>
								</a>
								<br>
								";
						}
						else if (file_exists(SITE_PATH."/images/gnome/$filename.png")) {
							$list .= "
								<a href=\"layout?p=".
								$filename."&".(isset($dirname) ? "d=".$dirname."&" : "")."edit&ui&KeepThis=true&TB_iframe=true&height=550&width=900\" class=\"thickbox\" title=\"".$fileInfo['description']."\">
								<img 
								src=\"$domain/images/gnome/$filename.png								\">
								</img><br>
								<b>".$fileInfo['title']."</b>
								</a>
								<br>
								";
						}
						else {
							$list .= "
								<a href=\"layout?p=".
								$filename."&".(isset($dirname) ? "d=".$dirname."&" : "")."edit&ui&KeepThis=true&TB_iframe=true&height=550&width=900\" class=\"thickbox\" title=\"".$fileInfo['description']."\">
								<img 
								src=\"$domain/images/gnome/default/text-x-script.png								\">
								</img><br>
								<b>".$fileInfo['title']."</b>
								</a>
								<br>
								";
				
						}
							$list .= "
									<small>
<a href=\"javascript:uiConfirm('layout?p=".$filename."&".(isset($dirname) ? "d=".$dirname."&" : "")."del', '".$filename."');\">delete</a>
									</small>
									<br>
									<br>
									";
						
						$col++;
						$cnt++;
						
						if($col > 7) {
							$list .= "</p>
									</td>";
							$col = 0;
						}
					}
		}
			$list .= "</tr>
					</table>";

}

?>