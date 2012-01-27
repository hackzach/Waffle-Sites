<?php
if(!$auth->isUser()) {

$page = "block";

}
$pageTitle = "Site Navigation";
$save = (isset($_POST['save']) ? true : false);
$revert = (isset($_POST['revert']) ? true : false);


if($save) {

$navbar = ($_POST['navbar']);
$nav = NULL;

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

	if(copy(SITE_PATH."/pages/home/i/".ID."/main/navbar.html", SITE_PATH."/pages/home/i/".ID."/main/navbar.bak.html") === FALSE) 
		exit("Could not backup topbar.");
	
	if($file->write($nav,SITE_PATH."/pages/home/i/".ID."/main/navbar.html") === FALSE) 
		exit("File was not saved.");
	
}


else if($revert) {


	if(copy(SITE_PATH."/pages/home/i/".ID."/main/navbar.bak.html", SITE_PATH."/pages/home/i/".ID."/main/navbar.html") === FALSE) 
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

$navfile = $file->line(SITE_PATH."/pages/home/i/".ID."/main/navbar.html");


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


$top = str_replace("<?>", "", preg_replace($php, "", $top));

?>