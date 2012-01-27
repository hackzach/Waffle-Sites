<?php

$pageTitle = "Artists";

$artist = $_REQUEST['artist'];
$pid = $_REQUEST['pid'];
$query = $_REQUEST['query'];
$type = $_REQUEST['type'];

if(isset($pid)) {
	if($query == '*') $query = '_';

	if($type == '') $type = 'title';

	$type = addslashes($type);
	$query = addslashes($query);

	$result = q("SELECT * FROM music WHERE $type LIKE '%$query%'");
		if(dbcount($result)) $info = dbarray($result); 

$playlist = explode('.', $info['data']);

for($i=0;$i<count($playlist);$i++) {
$result = q("SELECT * FROM music WHERE id='$playlist[$i]'");
if(dbcount($result)) $info = dbarray($result);
echo $info['title'] . "<br />";
}

}

?>
