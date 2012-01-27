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


$pageTitle = "Site Navigation";
$save = (isset($_POST['save']) ? true : false);
$revert = (isset($_POST['revert']) ? true : false);


if($save) {

$nav = NULL;
$side = NULL;

$navbar = ($_POST['navbar']);
$sidebar = ($_POST['sidebar']);

for($i = 0;$i<sizeof($navbar);$i++) {

	if($navbar[$i]['access'] == "super") { $append = '<?php if($auth->isSuper()) { ?>'; $foot = '<?php } ?>'; }
	else if($navbar[$i]['access'] == "admin") { $append = '<?php if($auth->isAdmin()) { ?>'; $foot = '<?php } ?>'; }
	else if($navbar[$i]['access'] == "artist") { $append = '<?php if($auth->isArtist()) { ?>'; $foot = '<?php } ?>'; }
	else if($navbar[$i]['access'] == "login") { $append = '<?php if($auth->isUser()) { ?>'; $foot = '<?php } ?>'; }
	else { $append = ""; $foot = ""; }

	if(($navbar[$i]['link'] != "Link Path" && $navbar[$i]['link'] != "") && ($navbar[$i]['access'] != "del")) {
		$nav .= $append."<?php if(\"/\".\$page == \"".strip_tags($navbar[$i]['link'])."\") { ?><li><b>".strip_tags($navbar[$i]['title'])."</b></li><?php } else { ?><li><a href=\"".strip_tags($navbar[$i]['link'])."\">".strip_tags($navbar[$i]['title'])."</a></li><?php } ?>".$foot."\n";
	}
}

for($i = 0;$i<sizeof($sidebar);$i++) {

	if($sidebar[$i]['access'] == "super") { $append = '<?php if($auth->isSuper()) { ?>'; $foot = '<?php } ?>'; }
	else if($sidebar[$i]['access'] == "admin") { $append = '<?php if($auth->isAdmin()) { ?>'; $foot = '<?php } ?>'; }
	else if($sidebar[$i]['access'] == "artist") { $append = '<?php if($auth->isArtist()) { ?>'; $foot = '<?php } ?>'; }
	else if($sidebar[$i]['access'] == "login") { $append = '<?php if($auth->isUser()) { ?>'; $foot = '<?php } ?>'; }
	else { $append = ""; $foot = ""; }
	
	if(($sidebar[$i]['link'] != "Link Path" && $sidebar[$i]['link'] != "") && ($sidebar[$i]['access'] != "del")) {
		$side .= $append."<?php if(\"/\".\$page == \"".strip_tags($sidebar[$i]['link'])."\") { ?><li><b>".strip_tags($sidebar[$i]['title'])."</b></li><?php } else { ?><li><a href=\"".strip_tags($sidebar[$i]['link'])."\">".strip_tags($sidebar[$i]['title'])."</a></li><?php } ?>".$foot."\n";
	}
}

	if(copy(SITE_PATH."/main/navbar.html", SITE_PATH."/main/navbar.bak.html") === FALSE) 
		exit("Could not backup navbar.(".SITE_PATH."/main/navbar.html)");
	if(copy(SITE_PATH."/main/admin.html", SITE_PATH."/main/admin.bak.html") === FALSE)
		exit("Could not backup admin.");

	if($file->write($nav, SITE_PATH."/main/navbar.html") === FALSE) 
		exit("File was not saved.");
	if($file->write($side, SITE_PATH."/main/admin.html") === FALSE) 
		exit("File was not saved.");
}


else if($revert) {

	if(copy(SITE_PATH."/main/admin.bak.html", SITE_PATH."/main/admin.html") === FALSE) 
		exit("Could not revert admin.");

	if(copy(SITE_PATH."/main/navbar.bak.html", SITE_PATH."/main/navbar.html") === FALSE) 
		exit("Could not revert navbar.");

		header("Location: links");

}

$html = "#([<]a href=[\"])(.*)([\"]>(.*)</a[>])#e";
$php = "#([<]?php )(.*)( [?>])#e";
$isSuper= '$auth->isSuper()';
$isAdmin = '$auth->isAdmin()';
$isArtist = '$auth->isArtist()';
$isLogin = '$auth->isUser()';


$top = NULL;
$left = NULL;

$navfile = $file->line(SITE_PATH."/main/navbar.html");

	for($i=0;$i<sizeof($navfile);$i++) {
	
	$ifSuper = (strpos($navfile[$i], $isSuper) ? " checked" : "");
	$ifAdmin = (strpos($navfile[$i], $isAdmin) ? " checked" : "");
	$ifArtist = (strpos($navfile[$i], $isArtist) ? " checked" : "");
	$ifLogin = (strpos($navfile[$i], $isLogin) ? " checked" : "");
	$ifPublic =(($ifLogin != " checked" && $ifAdmin != " checked" && $ifSuper != " checked" && $ifArtist != " checked" ) ? " checked" : "");
	
	$top .= preg_replace($html,"'<input type=\"text\" name=\"navbar[$i][title]\" value=\"$4\">
									<input type=\"text\" name=\"navbar[$i][link]\" value=\"$2\">
									Public<input type=\"radio\" name=\"navbar[$i][access]\" value=\"public\"".$ifPublic.
									"> Login<input type=\"radio\" name=\"navbar[$i][access]\" value=\"login\"".$ifLogin.
									"> Artist<input type=\"radio\" name=\"navbar[$i][access]\" value=\"artist\"".$ifArtist.
									"> Admin<input type=\"radio\" name=\"navbar[$i][access]\" value=\"admin\"".$ifAdmin.
									"> Super<input type=\"radio\" name=\"navbar[$i][access]\" value=\"super\"".$ifSuper.
									"> Delete?<input type=\"radio\" name=\"navbar[$i][access]\" value=\"del\">'",$navfile[$i]); 
	} 
	$top .= "<li><input type=\"text\" name=\"navbar[".(sizeof($navfile))."][title]\" value=\"Link Title\">
				<input type=\"text\" name=\"navbar[".(sizeof($navfile))."][link]\" value=\"Link Path\"> Public<input type=\"radio\" name=\"navbar[$i][access]\" value=\"public\" checked> Login<input type=\"radio\" name=\"navbar[$i][access]\" value=\"login\"> Artist<input type=\"radio\" name=\"navbar[$i][access]\" value=\"artist\"> Admin<input type=\"radio\" name=\"navbar[$i][access]\" value=\"admin\"> Super<input type=\"radio\" name=\"navbar[$i][access]\" value=\"super\"> <b>*New*</b></li>'";
									
$sidefile = $file->line(SITE_PATH."/main/admin.html");

for($i=0;$i<sizeof($sidefile);$i++) {

	$ifSuper = (strpos($sidefile[$i], $isSuper) ? " checked" : "");
	$ifAdmin = (strpos($sidefile[$i], $isAdmin) ? " checked" : "");
	$ifArtist = (strpos($sidefile[$i], $isArtist) ? " checked" : "");
	$ifLogin = (strpos($sidefile[$i], $isLogin) ? " checked" : "");
	$ifPublic =(($ifLogin != " checked" && $ifAdmin != " checked" && $ifSuper != " checked" && $ifArtist != " checked" ) ? " checked" : "");
	
	
	$left .= preg_replace($html,"'<input type=\"text\" name=\"sidebar[$i][title]\" value=\"$4\">
									<input type=\"text\" name=\"sidebar[$i][link]\" value=\"$2\"> Public<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"public\"".$ifPublic.
									"> Login<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"login\"".$ifLogin.
									"> Artist<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"artist\"".$ifArtist.
									"> Admin<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"admin\"".$ifAdmin.
									"> Super<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"super\"".$ifSuper.
									"> Delete?<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"del\">'",$sidefile[$i]);
	}
	
	$left .= "<li><input type=\"text\" name=\"sidebar[".(sizeof($sidefile))."][title]\" value=\"Link Title\">
				<input type=\"text\" name=\"sidebar[".(sizeof($sidefile))."][link]\" value=\"Link Path\"> Public<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"public\" checked> Login<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"login\"> Artist<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"artist\"> Admin<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"admin\"> Super<input type=\"radio\" name=\"sidebar[$i][access]\" value=\"super\"> <b>*New*</b></li>";

$top = str_replace("<?>", "", preg_replace($php, "", $top));
$left = str_replace("<?>", "", preg_replace($php, "", $left));

}

?>