<?php
/**
* Generate dynamic XSPF playlist by uploading mp3 files in a folder.
*
* Developed by Majid Khosravi
* http://www.majidkhosravi.com
* 
* This file is released under GNU GPL v3 license - http://www.gnu.org/licenses/gpl.html
*/

// set file header to xml
header ("Content-Type:text/xml");

// Set this to the folder path where you keep your mp3 files
$music_dir = "/var/www/upload/share/A Tribe Called Quest/A Tribe Called Quest-Anthology";

// allowed extensions in the playlist
$allowed_ext = array("mp3", "flv", "mp4");

// get music absolute URL
$music_url = "http://".$_SERVER["HTTP_HOST"].substr($_SERVER["PHP_SELF"],0,strlen($_SERVER["PHP_SELF"])-17)."upload/share/A%20Tribe%20Called%20Quest/A Tribe Called Quest-Anthology";


// Directory separator
if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
        define('DS','\\');
}else{
        define('DS','/');
} 

// playlist starting tags
echo '<?xml version="1.0" encoding="UTF-8"?>
<playlist xmlns="http://xspf.org/ns/0/" version="1">
<date>2012-01-10T21:51:05-06:00</date>
<title>XSPF.PHP</title>
<creator>Created By: XSPF.PHP v0.0.8a-svn</creator>
<location>http://adelle.rwavechicago.com/xspf/playlist.php</location>
<info>http://www.trbailey.net/xspf/</info>
<license>http://www.trbailey.net/xspf/terms.txt</license>';
echo '  <trackList>';

// if  music_dir is a directory
if (is_dir($music_dir)) 
{
        
        // read music folder contents
    if ($dh = opendir($music_dir)) 
    {
        
        
        while (($file = readdir($dh)) !== false) 
        {
                // file path
                $file_path = $music_dir .DS. $file;
                
                if (filetype($file_path) == "file")
                {
                        
                        $file_info = pathinfo($file_path);
                if( in_array($file_info["extension"], $allowed_ext))
                {
                        echo '          <track>';
                                echo '                  <location>'.$music_url."/".$file.'</location>';
                                echo '                  <annotation>'.$file_info["filename"].'</annotation>';
				echo '                  <image>http://adelle.rwavechicago.com/images/-noimage.jpg</image>';
                                echo '          </track>';
                }
                }
        }
        closedir($dh);
    }
}

echo '  </trackList>';
echo '</playlist>';
?>
