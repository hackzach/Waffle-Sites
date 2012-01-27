<?php

$pageTitle = "Music";

$pid = (isset($_REQUEST['pid']) ? addslashes($_REQUEST['pid']) : NULL);
$sid = (isset($_REQUEST['sid']) ? addslashes($_REQUEST['sid']) : NULL);

$play = (isset($_REQUEST['play']) ? true : false);
$edit = (isset($_REQUEST['edit']) ? true : false);
$save = (isset($_REQUEST['save']) ? true : false);
$new  = (isset($_REQUEST['new']) ? true : false);

$pos = (isset($_REQUEST['pos']) ? addslashes($_REQUEST['pos']) : NULL);
$songTitle = (isset($_REQUEST['title']) ? addslashes($_REQUEST['title']) : NULL);
$artist = (isset($_REQUEST['artist']) ? addslashes($_REQUEST['artist']) : NULL);
$album = (isset($_REQUEST['album']) ? addslashes($_REQUEST['album']) : NULL);
$genre = (isset($_REQUEST['genre']) ? addslashes($_REQUEST['genre']) : NULL);
$loop = (isset($_REQUEST['loop']) ? "&loop" : "");
$start =(isset($_REQUEST['start']) ? "&start" : "");

if(isset($sid) &&isset($save)) {
	$result = $query->update("music", 
"title='$songTitle',artist='$artist',album='$album',genre='$genre'",  "WHERE owner='$id' AND id='$sid'");
	if($result) {
		echo "<script>window.location=\"playlists\"</script>";
	}
}	



?>