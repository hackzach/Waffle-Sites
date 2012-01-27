<?php

$back = strlen("upload/");
$back = $back-(2*$back);


$file = addslashes($_REQUEST['file']);

$title = addslashes($_REQUEST['title']);
$artist = addslashes($_REQUEST['artist']);
$album = addslashes($_REQUEST['album']);
$genre = addslashes($_REQUEST['genre']);
$permission = $id;

	$result = q("SELECT * FROM music");
	$count = dbcount($result)+1;

				
		$result = q("SELECT * FROM music WHERE filename='$file' ");

		if(dbcount($result) == 0) {
		
				$result = q("INSERT INTO music (id, 
				filename,
 				track, 
				title,
 				artist,
 				album,
				genre,
 				date,
 				permission,
 				playcount,
 				owner)

 			VALUES (
				'$count',
				'".$file_name.$file_ext."',
				'$track',
				'$title',
				'$artist',
				'$album',
				'$genre',
				'".time()."',
				'$permission',
				'0',
				'$id')

				");
		}

				
				
?>