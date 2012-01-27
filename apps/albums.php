<?php

$pageTitle = "Albums";

if(!$auth->isUser()) {
	$page = "login";
}

$artist = (isset($_REQUEST['artist']) ? addslashes($_REQUEST['artist']) : NULL);
$pid = (isset($_REQUEST['pid']) ? addslashes($_REQUEST['pid']) : NULL);
$remove = (isset($_REQUEST['remove']) ? addslashes($_REQUEST['remove']) : NULL);
$add = (isset($_REQUEST['add']) ? addslashes($_REQUEST['add']) : NULL);
$position = (isset($_REQUEST['pos']) ? addslashes($_REQUEST['pos']) : NULL);
$songid = (isset($_REQUEST['sid']) ? addslashes($_REQUEST['sid']) : NULL);
$type = (isset($_REQUEST['type']) ? addslashes($_REQUEST['type']) : NULL);
$q = (isset($_REQUEST['query']) ? addslashes($_REQUEST['query']) : NULL);
$edit = (isset($_REQUEST['edit']) ? addslashes($_REQUEST['edit']) : NULL);
$new = (isset($_REQUEST['new']) ? addslashes($_REQUEST['new']) : NULL);
$data = (isset($_REQUEST['data']) ? addslashes(base64_decode($_REQUEST['data'])) : NULL);


if($new && isset($title)) {
 $result = newplaylist($id,$title,$data,$friends=0);
}

if(isset($remove) && !isset($sid) && isset($pid)) {
	if(!isset($sid) && isset($pid)) {
		removeplaylist($id,$pid);
	}
	else if(isset($sid) && isset($pid)) {
		//How to turn a playlist into an array
		$data = getplaylist($id, $pid); //1.2.3
		$data = explodot($data); //Array by the dot
		$loss = remove($sid, $data); //remove $songid from array

		$result = $query->update("playlists", "data='$loss'", "WHERE owner='$id' AND id='$pid'"); //save
	}
}

else if(isset($add)) {
	if(!isset($sid) && !getplaylist($id,$pid)) {
		$result = newplaylist($id,$id);
	}
	else if(isset($sid) && isset($pid)) {
		//How to turn a playlist into an array
		$data = getplaylist($id, $pid); //1.2.3
		echo "<pre>";
			$data = explodot($data); //Array by the dot
			$loss = add($sid, $data); //place $songid at $position
			echo $loss;
		echo "</pre>";
		$result = $query->update("playlists", "data='$loss' WHERE owner='$id' AND id='$pid'"); //save
	}
}

?> 
