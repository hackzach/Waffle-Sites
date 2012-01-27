<?php

/*
                         XSPF.PHP
                  An xspf MP3 playlist generator.
 Version 0.08a 02/24/2009
 Creates XSPF from ID3v1 tags
 Based on data at: http://www.xspf.org/xspf-v0.html#playlist
 Written by Thomas R. Bailey
 With the exception of the GETID3() Library noted below
 This software is Public Domain software
 You can use it any way you desire
 
 Based on works by:
 getID3() by James Heinrich <info@getid3.org>               
  available at http://getid3.sourceforge.net                 
            or http://www.getid3.org                         
*/

	
//Insert Hash maker here.. Crypt time into session, if >8 sec exit(0);





//First things first, require version > 5 but < 6
if( phpversion() < '5') die('Woops, sorry. xspfphp requires php version > 5.0'."\n");
if( substr(phpversion(),0,1) == '6') die('Woops, Sorry. xspfphp does not support php version 6.x'."\n");


//Uncomment the next line if you have issues with tags not displaying your language correctly
//mb_internal_encoding('UTF-16');

// include settings file
require_once('xspf.settings.php');
if (!file_exists($DirFile)) die("Can't find directory list file ". $DirFile);
if (isset($_GET['reset'])) $getID3->clear_cache();
$this_dir = $_SERVER['SCRIPT_FILENAME'];
if (strpos($this_dir, basename($_SERVER['REQUEST_URI'])) !== false) $this_dir = reset(explode(basename($_SERVER['REQUEST_URI']), $this_dir));
// If debug is set, turn off html and enable comments
If ($debug) { 
    $comments = true;
    $html = false;
    }
// Create new string for xml header
$xmltext = "<?xml version=\"1.0\" encoding=\"$encoding\"?>\n";

// If html is requested, add stylesheet enttry
if ($html) $xmltext .= '<?xml-stylesheet type="text/xsl" href="'.$htmlref.'"?>'."\n";

// Add playlist element beginning
$xmltext .= "<playlist version='1' xmlns='http://xspf.org/ns/0/'>";
// If comments are enabled add regular comment
if ($comments) {
      $xmltext .= "\r\n<!--";
      $xmltext .= "This playlist generator produces valid XSPF\r\n";
      $xmltext .= "Validation can be done at: http://validator.xspf.org/\r\n";
      $xmltext .= "To use a static version of this list select 'view source' and save it as playlist.xspf\r\n";

      //  If debug is set Write some variables for debugging
      if ($debug) {
      $xmltext .= "\r\nD E B U G  I N F O : \r\n";
      $xmltext .= "To change these values, edit -> ".$this_dir."xspf.settings.php\r\n";
      $xmltext .= "Playlist regex: ".$ft."\r\n";
      $xmltext .= "Server path: ".$this_dir."\r\n";
      $xmltext .= "Server ID3 Path = ". realpath($id3path) ."\r\n";
      $xmltext .= "Html is " . (!empty($html) ? "On" : "Off") . "\r\n";
      $xmltext .= "Comments are " . (!empty($comments) ? "On" : "Off") . "\r\n";
      $xmltext .= "Caching is " . (!empty($cached) ? "On" : "Off") . "\r\n";
      $xmltext .= "Encoding is $encoding \r\n";
      $xmltext .= "Link is " . (!empty($link) ? "On" : "Off") . "\r\n";
      $xmltext .= "Debug is " . (!empty($debug) ? "On" : "Off") . "\r\n";
      }
      
      $xmltext .= "-->\r\n";
    }
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
    
    $Dirhandle = fopen($DirFile, "r");             // Open xspf.dir path list
    //                       Top of Path Loop      //
    while (!feof($Dirhandle)) {                    // For Each directory name listed in xspf.dir
      $DE = explode(" ",fgets($Dirhandle));        // Read directory file
        if (!(strpbrk($DE[0],'#'))) {              // if NOT comment line...
        $url = trim($DE[1]);
        $DirList = trim($DE[0]);
        $dir = @opendir($DirList);                  // Open Directories one at a time
        $farray = array();                          // clear array for sorting filenames

          while (($file = @readdir($dir)) !== false) {
            if (eregi($ft, $file)) {
              $farray [] = realpath($DirList.'/'.$file);
            }
          }
          if ($sort) sort($farray,SORT_STRING);
            foreach($farray as $FullFileName) {
              //start xml read/ID3
                $id3 = $getID3->analyze($FullFileName);
                getid3_lib::CopyTagsToComments($id3);
      // Begin Track element
      $xmltrack = $xmltracklist->addChild("track");
      // Add track elements
      $xmltrack->addChild("title", (!empty($id3['comments_html']['title']) ? implode('<BR>',safe_child($id3['comments_html']['title'])) : substr(basename($FullFileName),0,-4))."  " );
      $xmltrack->addChild("creator", (!empty($id3['comments_html']['artist']) ? safe_child(implode('<BR>',$id3['comments_html']['artist'])) : substr(basename($FullFileName),0,-4))."  " );
      $xmltrack->addChild("album", (!empty($id3['comments_html']['album']) ? implode('<BR>', $id3['comments_html']['album']) : 'No Album'));
      $xmltrack->addChild("trackNum", (!empty($id3['comments_html']['track']) ? implode('<BR>',$id3['comments_html']['track']) : '9999'));
      $xmltrack->addChild("duration", (!empty($id3['playtime_seconds'])  ? round($id3['playtime_seconds']) : '9999'));

      if ($annotate) {
      //getid3_lib::CopyTagsToComments($id3);
        $annotation = '';
        $annotation .= (!empty($id3['comments_html']['artist']) ? implode('<BR>', $id3['comments_html']['artist']) : substr(basename($FullFileName),0,-4))."  ";
        $annotation .= (!empty($id3['comments_html']['album']) ? implode('<BR>', $id3['comments_html']['album']) : 'No Album')."  ";
        $annotation .= "Track: ".(!empty($id3['comments_html']['track']) ? implode('<BR>', $id3['comments_html']['track']) : '0')."  "; 
        $annotation .= (!empty($id3['playtime_string'])         ? $id3['playtime_string']                          : '1')."  ";
        $annotation .=(!empty($id3['audio']['bitrate'])        ? round($id3['audio']['bitrate'] / 1000).' kbps'   : '0');
        if (empty($annotation)) $annotation = $url.$id3['filename'];
      $xmltrack->addChild("annotation", $annotation);
      }
      //$xmltrack->addChild("location", $url.rawurlencode($id3['filename']));
      $xmltrack->addChild("location", $url.rawurlencode(basename($FullFileName)));
      
      $imgfile = substr(basename($FullFileName,"/"),0,-4).".jpg";     // Assemble image file name alone, for future id3 image extract
      $imgurl = $url.rawurlencode($imgfile); //Assemble image file url
    
      $imgfull = $DirList.$imgfile;                         // Assemble full image file name from name and path
                  if (file_exists($imgfull)) {             
                   $xmltrack->addChild("image", $imgurl); 
                  } else {
                  $xmltrack->addChild("image", $url . '-noimage.jpg');
                  }
       if ($link) {
       $xmltrack->addChild('info', $url.rawurlencode(basename($FullFileName)));
       $xmllink = $xmltrack->addChild('link', $url.rawurlencode(basename($FullFileName)));
       $xmllink->addAttribute( 'rel', $url.rawurlencode(basename($FullFileName)));  
       }
     }
    @closedir($dir);  // End of this directory
   }
 }

fclose($Dirhandle);   // End of xspf.dir
    print header("Content-Type: text/xml") . $xmlplaylist->asXML();

// String replace hack for illegal characters =>  &(?!\w+;)
function safe_child($sxml) {
return  preg_replace('/&(?!\w+;)/', '&amp;', $sxml);

}
?>  