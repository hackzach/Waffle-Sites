<?php
$version_file = SITE_PATH."/version.txt";

define("CURRENT_VERSION", $file->read($version_file));

//$latest = $file->stream("$get_software_update/version.txt");
$latest = "2.4";
if(floatval(CURRENT_VERSION) < floatval($latest)) {

$uptodate = true;

}
else $uptodate = false;


/* 
//I don't trust these to save my life...so I'm borrowing from Stackoverflow until I can make it usable
//I'm thinking not even doing this, it produces erratic results that break the server.

class update {
static public function copyr($source, $dest)
{
    // recursive function to copy
    // all subdirectories and contents:
    if(is_dir($source)) {
        $dir_handle=opendir($source);
        $sourcefolder = basename($source);
        mkdir($dest."/".$sourcefolder);
        while($file=readdir($dir_handle)){
            if($file!="." && $file!=".."){
                if(is_dir($source."/".$file)){
                    self::copyr($source."/".$file, $dest."/".$sourcefolder);
                } else {
                    	if(!copy($source."/".$file, $dest."/".$file))
				print "<p>
								-- copy /".$file."...<span style=\"color:red\"><b>Failed.</b></span>
							</p><br>\n";
			else print "<p>
								-- copy /".$file."...<span style=\"color:green\"><b>Done.</b></span>
								</p><br>\n";
			}
                }
            }
        closedir($dir_handle);
		}
		else {
        // can also handle simple copy commands
        copy($source, $dest);
    }
}


private static function deleter($dir) { 
    if (!is_dir($dir) || is_link($dir)) return unlink($dir); 
        foreach (scandir($dir) as $file) { 
            if ($file == '.' || $item == '..') continue; 
            if (!destroy_dir($dir.DS.$file)) { 
                chmod($dir.DS.$file, 0777); 
                if (!destroy_dir($dir.DS.$file)) return false; 
            }; 
        } 
        return rmdir($dir); 
    }

}

*/
?>