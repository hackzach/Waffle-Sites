<?php

include SITE_PATH."/modules/settings.php";

// Edit the values below to reflect your setup
// You'll probably only need to edit the cached variable 
// and database info unless you have a library directory for id3
// Set cached = true and edit db* to reflect your database.
// Tables will be created in database.
$cached   =   true;              // cacheing is OFF by default
$comments =   false;              // Display comments in playlist
$id3path  =   SITE_PATH.'/xspf/getid3/';      // the path must end in a "/"
$encoding =   'UTF-8';            // This is sufficient for most languages. UTF-16 might be necessary for katana or other asian variants
$link     =   true;              // include a link element to the location reference (not working in 08a)
$html     =   true;               // Attach html stylesheet for viewing in browser
$htmlref  =   SITE_PATH.'/modules/xspf/xspf.xsl';         // URL or path to html.xsl                                  
$annotate =   true;               // Add <annotation> element with comments, track, title 
                                  // Annotation is useful for players or player theme's that do not use the  album or track elements
          
$debug    = false;                // Debug mode turns off html output and enables comments
$sort     = false;                 // Sort Full Filename array before output



$dbhost = $mysql_host;
$dbname = $mysql_database;
$dbuser = $mysql_user;
$dbpass = $mysql_password;

// This Version (<0.06) requires a separate text file describing each directory to be scanned.
// first parameter is the directory, second is the URL for that directory separated by a space
// EX: 
//     /home/thomas/public_html/music/ http://www.trbailey.net/~thomas/music/
//     /var/www/music/ http://www.trbailey.net/music/

$DirFile = SITE_PATH.'/xspf/xspf.dir';

/* 
Note that each of the items below are identical.

$DirFile = "./xspf.dir";
$DirFile = 'xspf.dir';
$DirFile = './xspf.dir';
$DirFile = "xspf.dir";

This is preferable:
$DirFile = 'xspf.dir';

This won't work!
$DirFile = '/xspf.dir';
*/

// File types to add to playlist, keep this list short
// To match file name endings use the extension followed by a "$"
// A bar "|" means "OR"
// To match all files ending in mp3, flv or wma
// Use: "mp3$|flv$|wma$"
// This string can adversely effect playlist generation time
// valid values are either "jpg$" OR any combination of "mp3$, flv$, mov$, wma$, wmv$ etc)
// You can use this script to generate a jpg only playlist but not in combination with other types
// Uncomment the option you want
$ft = "mp3$|flv$|mp4$";           // scan for mp3 files
//$ft = "flv$";         // scan for flv files
//$ft = "wma$|mp3$";    // scan for wma and mp3 files
//
// This program uses POSIX style regex matching
// see: http://us3.php.net/regex

//////////////////////////////////////////////////////
// DO NOT EDIT BELOW THIS LINE OR THINGS WILL BREAK //
//////////////////////////////////////////////////////

if ($cached == true) {
/////////// Cached includes 
require_once($id3path.'getid3.php');
require_once($id3path.'extension.cache.mysql.php');
$getID3->encoding = $encoding;
/// uncached includes
$getID3 = new getID3_cached_mysql($dbhost, $dbname, $dbuser, $dbpass);
} else {
require_once($id3path.'getid3.php');
$getID3->encoding = $encoding;
$getID3 = new getID3;
}

?>
