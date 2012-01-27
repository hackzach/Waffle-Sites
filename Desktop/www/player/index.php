<?php

include "/var/www/modules/settings.php";

$pageTitle = "Web Player";

$you = (isset($_REQUEST['id']) ? addslashes($_REQUEST['id']) : NULL);
$sid = (isset($_REQUEST['sid']) ?addslashes($_REQUEST['sid']) : NULL);
$mount = (isset($_REQUEST['mount']) ? addslashes($_REQUEST['mount']) : NULL);
$comments = (isset($_REQUEST['comments']) ? addslashes($_REQUEST['comments']) : NULL);

$ices = "http://storage:8000";

	if(isset($mount) && $mount != "") {
		$playlist = $ices."/".$mount;
	}

	else if(isset($pid) && $pid != "") {
		$playlist = "xspf/?pid=".$pid;
	}

	else if(isset($sid) && $sid != "") {
		$playlist = "xspf/?sid=".$sid;
	}

	else {
		$playlist = "xspf/";
}

// Parse ini file.
$ini_array = parse_ini_file("player.ini", true);

$repeat = (isset($_REQUEST['loop']) ? "single" : $ini_array['player']['repeat']);
$autostart = (isset($_REQUEST['start']) ? "true" : $ini_array['player']['autostart']);


if (!$ini_array['player']['local']) {
  $rawurl = $ini_array['player']['path'];
  } else {
  $rawurl   = $domain;
  }
if (isset($you) && $you != "")  {
	$flashvar = "'&amp;file=".$rawurl."/".$ini_array['player']['list']."/?id=".$you;
}
else if(isset($sid) && $sid != "") {
	$flashvar = "'&amp;file=".$rawurl."/".$ini_array['player']['list']."/?sid=".$sid;
}
else if(isset($mount) && $mount != "") {
	$flashvar = "'&amp;file=".$ices."/".$mount.".xspf&amp;type=sound";
}
else if(isset($_REQUEST['recent'])) {
	$flashvar = "'&amp;file=".$rawurl."/".$ini_array['player']['list']."/?recent";
}
else {
	$flashvar = "'&amp;file=".$rawurl."/".$ini_array['player']['list'];
}

if (isset($sid) && $sid != "") $flashvar         .= '&amp;item='.$sid; 
else if ($ini_array['player']['item']) $flashvar         .= '&amp;item='.$ini_array['player']['item'];
if ($ini_array['player']['displayclick']) $flashvar .= '&amp;displayclick='.$ini_array['player']['displayclick'];
$flashvar    .= '&amp;autostart='.$autostart;
if ($ini_array['player']['backcolor']) $flashvar    .= '&amp;backcolor='.$ini_array['player']['backcolor'];
if ($ini_array['player']['frontcolor']) $flashvar   .= '&amp;frontcolor='.$ini_array['player']['frontcolor'];
if ($ini_array['player']['lightcolor']) $flashvar   .= '&amp;lightcolor='.$ini_array['player']['lightcolor'];
if ($ini_array['player']['screencolor']) $flashvar  .= '&amp;screencolor='.$ini_array['player']['screencolor'];
if ($ini_array['player']['bar']) $flashvar          .= '&amp;controlbar='.$ini_array['player']['bar'];
if ($ini_array['player']['playlist']) $flashvar     .= '&amp;playlist='.$ini_array['player']['playlist'];
if ($ini_array['player']['playwidth']) $flashvar    .= '&amp;playlistsize='.$ini_array['player']['playwidth'];
if ($ini_array['player']['volume']) $flashvar       .= '&amp;volume='.$ini_array['player']['volume'];
if ($ini_array['player']['fullscreen']) $flashvar   .= '&amp;fullscreen='.$ini_array['player']['fullscreen'];
if ($ini_array['player']['icons']) $flashvar        .= '&amp;icons='.$ini_array['player']['icons'];
if ($ini_array['player']['targetlink']) $flashvar   .= '&amp;targetlink='.$ini_array['player']['targetlink'];
if ($ini_array['player']['logo']) $flashvar         .= '&amp;logo='.$ini_array['player']['logo'];
if ($ini_array['player']['mute']) $flashvar         .= '&amp;mute='.$ini_array['player']['mute'];
if ($ini_array['player']['quality']) $flashvar      .= '&amp;quality='.$ini_array['player']['quality'];
if ($ini_array['player']['repeat']) $flashvar       .= '&amp;repeat='.$ini_array['player']['repeat'];
if ($ini_array['player']['resizing']) $flashvar     .= '&amp;resizing='.$ini_array['player']['resizing'];
if ($ini_array['player']['shuffle']) $flashvar      .= '&amp;shuffle='.$ini_array['player']['shuffle'];
if ($ini_array['player']['stretching']) $flashvar   .= '&amp;stretching='.$ini_array['player']['stretching'];
if ($ini_array['player']['skin']) $flashvar         .= '&amp;skin='.$rawurl.'/player/'.$ini_array['player']['skin'];
$flashvar                  .= "'";

include "/var/www/main/header.html";
include "/var/www/player/player.html";
?>