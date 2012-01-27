<?php 
$you =    (isset($_REQUEST['id']) ? addslashes($_REQUEST['id']) : NULL);
$sid =    (isset($_REQUEST['sid']) ? addslashes($_REQUEST['sid']) : NULL);
$recent = (isset($_REQUEST['recent']) ? addslashes($_REQUEST['recent']) : NULL);

define("SITE_PATH", substr(realpath(dirname(__FILE__)), 0, strlen(realpath(dirname(__FILE__)))-strlen("/xspf")) );
require_once SITE_PATH.'/modules/connect.php';
require_once SITE_PATH.'/modules/site_include.php';
require_once SITE_PATH.'/xspf/xspf.settings.php';


if (!file_exists($DirFile)) die("Can't find directory list file ". $DirFile);
if (isset($_GET['reset'])) $getID3->clear_cache();
$this_dir = $_SERVER['SCRIPT_FILENAME'];
if (strpos($this_dir, basename($_SERVER['REQUEST_URI'])) !== false) $this_dir = reset(explode(basename($_SERVER['REQUEST_URI']), $this_dir));


// Create new string for xml header
$xmltext = "<?xml version=\"1.0\" encoding=\"$encoding\"?>\n
<playlist version='1' xmlns='http://xspf.org/ns/0/'>";


// finish playlist element and header
$xmltext .= "</playlist>\n";


// Begin a new simplexml array
$xmlplaylist = simplexml_load_string($xmltext);


// Get current time
$time = time();
$main_date = date("c", $time);



 // Add date, title, creator, location, image, info and license to <playlist> element
  $xmlplaylist->addChild("date", $main_date);
  $xmlplaylist->addChild("title", "XSPF.PHP");
  $xmlplaylist->addChild("creator", "Created By: XSPF.PHP v0.0.8a-svn");
  $xmlplaylist->addChild("location", "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
  $xmlplaylist->addChild("image", "-noimage.jpg");
  $xmlplaylist->addChild("info", "http://www.trbailey.net/xspf/");
  $xmlplaylist->addChild("license", "http://www.trbailey.net/xspf/terms.txt");



// Begin tracklist
    $xmltracklist = $xmlplaylist->addchild("trackList");

/*
//File Image
$imgfile = substr(basename($FullFileName,"/"),0,-4).".jpg";     // Assemble image file name alone, for future id3 image extract
      $imgurl = $url.rawurlencode($imgfile); //Assemble image file url
    
      $imgfull = $DirList.$imgfile;                         // Assemble full image file name from name and path
                  if (file_exists($imgfull)) {             
                   $xmltrack->addChild("image", $imgurl); 
                  } else {
                  $xmltrack->addChild("image", $url . '-noimage.jpg');
                  }

//file link. This will trigger when user clicks the title. 
$xmltrack->addChild('info', $url.rawurlencode(basename($FullFileName)));
       $xmllink = $xmltrack->addChild('link', $url.rawurlencode(basename($FullFileName)));
      $xmllink->addAttribute( 'rel', $url.rawurlencode(basename($FullFileName)));  

*/


if(isset($you)) {

	//query the db
	$result = $query->query("SELECT filename FROM music WHERE owner='".$you ."' AND permission <> '1'"); //based on playlist id

	//$up = $query['playcount'] + 1;
	//$result = $query->query("UPDATE playlists SET playcount='$up' WHERE id='$pid'");
	
	//loop through array
	while($row = dbrows($result)) {

				//start xml read/ID3
                $id3 = $getID3->analyze($site_path."/uploads/".$row['filename']);
                getid3_lib::CopyTagsToComments($id3);
			// Begin Track element
				$xmltrack = $xmltracklist->addChild("track");

				$xmltrack->addChild("title", (!empty($id3['comments_html']['title']) ? implode('<BR>',safe_child($id3['comments_html']['title'])) : substr(basename($row['filename']),0,-4))."  " );
				$xmltrack->addChild("creator", (!empty($id3['comments_html']['artist']) ? safe_child(implode('<BR>',$id3['comments_html']['artist'])) : substr(basename($row['filename']),0,-4))."  " );
				$xmltrack->addChild("album", (!empty($id3['comments_html']['album']) ? implode('<BR>', $id3['comments_html']['album']) : 'No Album'));
				$xmltrack->addChild("trackNum", (!empty($id3['comments_html']['track']) ? implode('<BR>',$id3['comments_html']['track']) : '9999'));
				$xmltrack->addChild("duration", (!empty($id3['playtime_seconds'])  ? round($id3['playtime_seconds']) : '9999'));


				//File Location on server in url form
				$xmltrack->addChild("location", "http://www.rwavechicago.com/upload/".$row['filename']);
      
	
	//rattle off each song with the correct XML tags for a playlist with $query['stuff']
	
	}


}

else if(isset($sid)) {

	//query the db
	$result = $query->select("music", "*", "WHERE id='".$sid ."' AND permission <> '1' "); //based on playlist id
	$up = $result['playcount'] + 1;
	$up = $query->update("music", "playcount='$up'", "WHERE id='$sid'");
		
						//start xml read/ID3
                $id3 = $getID3->analyze(SITE_PATH."/uploads/".$result['filename']);
                getid3_lib::CopyTagsToComments($id3);
			// Begin Track element
				$xmltrack = $xmltracklist->addChild("track");

				$xmltrack->addChild("title", (!empty($id3['comments_html']['title']) ? implode('<BR>',safe_child($id3['comments_html']['title'])) : substr(basename($result['filename']),0,-4))."  " );
				$xmltrack->addChild("creator", (!empty($id3['comments_html']['artist']) ? safe_child(implode('<BR>',$id3['comments_html']['artist'])) : substr(basename($result['filename']),0,-4))."  " );
				$xmltrack->addChild("album", (!empty($id3['comments_html']['album']) ? implode('<BR>', $id3['comments_html']['album']) : 'No Album'));
				$xmltrack->addChild("trackNum", (!empty($id3['comments_html']['track']) ? implode('<BR>',$id3['comments_html']['track']) : '9999'));
				$xmltrack->addChild("duration", (!empty($id3['playtime_seconds'])  ? round($id3['playtime_seconds']) : '9999'));


				//File Location on server in url form
				$xmltrack->addChild("location", "http://www.rwavechicago.com/upload/".$result['filename']);
      
	
		
	//rattle off each song with the correct XML tags for a playlist with $query['stuff']
	

}

else if(isset($recent)) {
	
	$offset = 25; //default 25 most recent uploads
	//query the db
	$count = $query->dbcount("music", "*"); //based on playlist id
	$start = ($count > $offset ? ($count-$offset) : 0);
	$offset = ($start == 0 ? $offset = $count : $offset);

	$result = $query->query("SELECT * FROM music WHERE permission <> '1' LIMIT $start,$offset ");

	//$up = $query['playcount'] + 1;
	//$result = q("UPDATE playlists SET playcount='$up' WHERE id='$pid'");
	
	//loop through array
	while($row = $query->dbrows($result)) {

				//start xml read/ID3
                $id3 = $getID3->analyze(SITE_PATH."/upload/".$row['filename']);
                getid3_lib::CopyTagsToComments($id3);
			// Begin Track element
				$xmltrack = $xmltracklist->addChild("track");

				$xmltrack->addChild("title", (!empty($id3['comments_html']['title']) ? implode('<BR>',safe_child($id3['comments_html']['title'])) : substr(basename($row['filename']),0,-4))."  " );
				$xmltrack->addChild("creator", (!empty($id3['comments_html']['artist']) ? safe_child(implode('<BR>',$id3['comments_html']['artist'])) : substr(basename($row['filename']),0,-4))."  " );
				$xmltrack->addChild("album", (!empty($id3['comments_html']['album']) ? implode('<BR>', $id3['comments_html']['album']) : 'No Album'));
				$xmltrack->addChild("trackNum", (!empty($id3['comments_html']['track']) ? implode('<BR>',$id3['comments_html']['track']) : '9999'));
				$xmltrack->addChild("duration", (!empty($id3['playtime_seconds'])  ? round($id3['playtime_seconds']) : '9999'));


				//File Location on server in url form
				$xmltrack->addChild("location", "http://www.rwavechicago.com/upload/".$row['filename']);
      }
	
}

else {
	//query the db
	$result = $query->query("SELECT filename FROM music WHERE owner='".ID ."' AND permission <> '1'"); //based on playlist id
	
	//$up = $query['playcount'] + 1;
	//$result = q("UPDATE playlists SET playcount='$up' WHERE id='$pid'");
	
	//loop through array
	while($row = dbrows($result)) {

				//start xml read/ID3
                $id3 = $getID3->analyze(SITE_PATH."/upload/".$row['filename']);
                getid3_lib::CopyTagsToComments($id3);
			// Begin Track element
				$xmltrack = $xmltracklist->addChild("track");

				$xmltrack->addChild("title", (!empty($id3['comments_html']['title']) ? implode('<BR>',safe_child($id3['comments_html']['title'])) : substr(basename($row['filename']),0,-4))."  " );
				$xmltrack->addChild("creator", (!empty($id3['comments_html']['artist']) ? safe_child(implode('<BR>',$id3['comments_html']['artist'])) : substr(basename($row['filename']),0,-4))."  " );
				$xmltrack->addChild("album", (!empty($id3['comments_html']['album']) ? implode('<BR>', $id3['comments_html']['album']) : 'No Album'));
				$xmltrack->addChild("trackNum", (!empty($id3['comments_html']['track']) ? implode('<BR>',$id3['comments_html']['track']) : '9999'));
				$xmltrack->addChild("duration", (!empty($id3['playtime_seconds'])  ? round($id3['playtime_seconds']) : '9999'));


				//File Location on server in url form
				$xmltrack->addChild("location", $domain."/upload/".$row['filename']);
      
	
	//rattle off each song with the correct XML tags for a playlist with $query['stuff']
	
	}
}

print header("Content-Type: text/xml") . $xmlplaylist->asXML();

// String replace hack for illegal characters =>  &(?!\w+;)
function safe_child($sxml) {
return  preg_replace('/&(?!\w+;)/', '&amp;', $sxml);

}

mysql_close();
?>
