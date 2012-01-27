<?php

/*-----------------------------------------------------------------------
Useful functions by Zachary Padove
-----------------------------------------------------------------------*/

/*--------------------------------------------
------------BEGIN File Functions--------------
--------------------------------------------*/

class file {

function makeWriteable($filename, $debug=false) {
    if(file_exists($filename)) { //can't make it writeable if it don't exist
	/* //I am not quite sure we need to own it anymore
	$cur_user = get_current_user();

 	$gid = posix_getpwuid(fileowner($filename)); 
	$uid = posix_getgrgid(filegroup($filename));
	if($debug) {
		print $cur_user . "<br>" . 
			$uid['name'] . "<br>" . 
			$gid['name'] . "<br>";
	}	
	if($uid['name'] != $cur_user) { //if I don't own it, I can't group it
		if($gid['name'] != $cur_user) {
			if(!$err =  @chgrp($filename, $cur_user)) { 
				return -2; //could not group it
			}
		}
	}
	else return true;
	*/

	if(substr(decoct(fileperms($filename)), 2) < 0775) { //can't write to it if it isn't writeable
		if(!$err = @chmod($filename, 0775)) {
			return -2; //could not mode it
		}
    	}
	return true;
    }
	else return true; //file doesn't exist; no need to make writeable
}

function write($data, $filename, $type='w') {

    if(file_exists($filename)) {
	if(!$err = $this->makeWriteable($filename)) { //something has to be done!
		return $err; //-2; permissions error
   	}
    }

    if (!$handle = @fopen($filename, $type)) {
		return -1; //could not open
    }
    else if (@fwrite($handle, $data) === FALSE) {
		return 0; //could not write
    }
    else {
	if(!$err = $this->makeWriteable($filename)) {
		return $err; //-2; permissions error
	}
	else {
 		fclose($handle);
		return true; //SUCCESS!
	}
    }
}


function truncate($filename, $length='0') {

    if (!$handle = fopen($filename, 'r+')) {
    }
    if(ftruncate($handle, $length)) {
        return true;
    }

    else {
        return false;
    }
    fclose($handle);
}


function highlight($data, $text, $color='#ffff00') {

    $data= str_replace($text, '<span style="background-color: ' . $color . '">' . $text . '</span>', $data);
    echo $data;
}



function read($filename) {
    if(!file_exists($filename)) {
        printf("$filename doesn't exist");
    }

    else if(filesize($filename) == 0) {
        printf("$filename is null");
    }

    $handle = fopen($filename, "r");
    $contents = fread($handle, filesize($filename));
    fclose($handle);
    return $contents;
}

function noparse($code, $decode = false) {
	if($decode) {
		$code = str_replace("<div class=\"mceNonEditable\">", "<?php ", $code);
		$code = str_replace("<!--PHP--></div>", " ?>", $code);
	}
	else {
		$code = str_replace("<?php", "<div class=\"mceNonEditable\">", $code);
		$code = str_replace("?>", "<!--PHP--></div>", $code);
	}
		return $code;
} 

function parse($markup, $code, $input) {
		$input = str_replace($markup , $code, $input);
	return $input;
}

function stream($link) {
    $content = file_get_contents($link);
    return $content;

} 

function line($filename) {
    $lines = file($filename);
	return $lines;
}

function file_check($filename, $check='accessed') {
    if(file_exists($filename)) {

        if($check == 'accessed') {
            return fileatime($filename);
        }

        else if($check == 'modified') {
            return filemtime($filename);
        }

        else if($check == 'owner') {
            return fileowner($filename);
        }

        else if($check == 'permissions') {
            return substr(sprintf('%o', fileperms($filename)), -4);
        }

        else if($check == 'group') {
            return filegroup($filename);
        }

        else if($check == 'size') {
            return filesize($filename);
        }

        else if($check == 'type') {
            return filetype($filename);
        }
        
        else {
            return "$check not a valid value";
        }

    }
    
    else {
        return "$filename doesn't exist";
    }
}


}
/*----------------------------------------
-----------END File Functions-------------
----------------------------------------*/

/*----------------------------------------
--------BEGIN Directory Functions---------
----------------------------------------*/

class dir {
function read_dir($directory, $recursive=FALSE, $blacklist_dir=array(), $blacklist_file=array()) {

    $array_items = array();
        if ($handle = opendir($directory)) {
             while (false !== ($file = readdir($handle))) {
                 	if ($file != "." && $file != ".." && $file != ".htaccess") { 
                    		if (is_dir($directory. "/" . $file)) {
                         		if($recursive) {
                             			$array_items = array_merge($array_items, $this->read_dir($directory. "/" . $file, $blacklist_dir, $recursive)); 
                        		}
					if(!in_array($file, $blacklist_dir)) {
						$array_items[] = preg_replace("/\/\//si", "/", $file); 
					}
                    		}

                     		else if(!in_array($file, $blacklist_file)) {  
					$array_items[] = preg_replace("/\/\//si", "/", $file); 
                    		}
                 	} 
		
            }
             closedir($handle); 
        }
  return $array_items;

}

function delete_dir($directory) {

    if(substr($directory,-1) == '/') {
        $directory = substr($directory,0,-1);
    }
    if(!file_exists($directory) || !is_dir($directory)) {
        die("Directory invalid");
    }
    elseif(is_readable($directory)) {
        $handle = opendir($directory);
        while (FALSE !== ($item = readdir($handle))) {
            if($item != '.' && $item != '..') {
                $path = $directory.'/'.$item;
                if(is_dir($path)) {
                    delete_dir($path);
                }
                else {
                    unlink($path);
                }
            }
        }
        closedir($handle);
    }
             if(!rmdir($directory)) {
                 return false;
             }
    return true;

}


}

/*----------------------------------------
---------END Directory Functions----------
----------------------------------------*/

/*----------------------------------------
----------BEGIN Image Functions-----------
----------------------------------------*/

class gd {

function watermark($imagesource, $wmgif, $type='corner') {

    $filetype = substr($imagesource,strlen($imagesource)-4,4);
    $filetype = strtolower($filetype);

    if($filetype == ".gif") { 
        $image = @imagecreatefromgif($imagesource);
    } 
    if($filetype == ".jpg") { 
        $image = @imagecreatefromjpeg($imagesource);
    }
    if($filetype == ".png") { 
        $image = @imagecreatefrompng($imagesource);
    }

    if (!$image) {
        die();
    }
    $watermark = @imagecreatefromgif($wmgif);
    $imagewidth = imagesx($image);
    $imageheight = imagesy($image);  
    $watermarkwidth =  imagesx($watermark);
    $watermarkheight =  imagesy($watermark);

    if($type == 'center') {
        $startwidth = (($imagewidth - $watermarkwidth)/2);
        $startheight = (($imageheight - $watermarkheight)/2);
    }

    else if($type == 'corner') {
        $startwidth = (($imagewidth - $watermarkwidth)-5);
        $startheight = (($imageheight - $watermarkheight)-5);
    }
    imagecopy($image, $watermark,  $startwidth, $startheight, 0, 0, $watermarkwidth, $watermarkheight);
    return imagejpeg($image);
    imagedestroy($image);
    imagedestroy($watermark); 
}

function captcha($code="RAWR", $background, $r=0, $g=0, $b=0) {

    $filetype = substr($background,strlen($background)-4,4);
    $filetype = strtolower($filetype);

    if($filetype == ".gif") { 
        $image = @imagecreatefromgif($background);
    } 
    if($filetype == ".jpg") { 
        $image = @imagecreatefromjpeg($background);
    }
    if($filetype == ".png") { 
        $image = @imagecreatefrompng($background);
    }

    $color = imagecolorallocate($image, $r, $g, $b);
    imagestring($image, 2, 4, 0, $code, $color);
    return imagepng($image);
    imagedestroy($image);
}


function image($filename, $check='type') {
    if(file_exists($filename)) {

        if($check == 'type') {
            $type = exif_imagetype($filename);
            $types = array('GIF', 'JPEG', 'PNG', 'SWF', 'PSD', 'BMP', 'TIFF_II', 'TIFF_MM', 'JPC', 'JP2', 'JPX', 'JB2', 'SWC', 'IFF', 'WBMP', 'XBM');

            return $types[$type];
        }

        else if($check == 'size') {
            list($width, $height) = getimagesize($filename);
	    $info['h'] = $height;
	    $info['w'] = $width;
            return $info;
        }

        else if($check == 'exif') {
            return exif_read_data($filename, 0, true);
        }
        
        else {
            return "$check not a valid value";
        }

    }
    
    else {
        return "$filename doesn't exist";
    }
}

function resize($filename, $w, $h, $transparent=false) {

    $filetype = substr($filename,strlen($filename)-4,4);
    $filetype = strtolower($filetype);

    list($width, $height) = getimagesize($filename);

    $resize = imagecreatetruecolor($w, $h);

        if($filetype == ".gif") { 
            $image = @imagecreatefromgif($filename);
            if($transparent) {
                $colorTransparent = @imagecolortransparent($resize);
                @imagepalettecopy($image, $resize);
                @imagefill($resize, 0, 0, $colorTransparent);
                @imagecolortransparent($resize, $colorTransparent);

                @imagetruecolortopalette($resize, true, 256);
            }
            $rawr = @imagecopyresampled($resize, $image, 0, 0, 0, 0, $w, $h, $width, $height);
            $resized = @imagegif($resize);
        } 

        if($filetype == ".jpg") { 
            $image = @imagecreatefromjpeg($filename);
            if($transparent) {
                $colorTransparent = @imagecolortransparent($resize);
                @imagepalettecopy($image, $resize);
                @imagefill($resize, 0, 0, $colorTransparent);
                @imagecolortransparent($resize, $colorTransparent);

                @imagetruecolortopalette($resize, true, 256);
            }
            $rawr = @imagecopyresampled($resize, $image, 0, 0, 0, 0, $w, $h, $width, $height);
            $resized = @imagejpeg($resize);
        }

        if($filetype == ".png") { 
            $image = @imagecreatefrompng($filename);
            if($transparent) {
                $colorTransparent = @imagecolortransparent($resize);
                @imagepalettecopy($image, $resize);
                @imagefill($resize, 0, 0, $colorTransparent);
                @imagecolortransparent($resize, $colorTransparent);

                @imagetruecolortopalette($resize, true, 256);
            }
            $rawr = @imagecopyresampled($resize, $image, 0, 0, 0, 0, $w, $h, $width, $height);
            $resized = @imagepng($resize);
        }

    return $resized;

}

function filter($image, $filter='invert', $arg1=null, $arg2=null, $arg3=null) {

    $filetype = substr($image,strlen($image)-4,4);
    $filetype = strtolower($filetype);

    if($filetype == ".gif") { 
        $resource = imagecreatefromgif($image);
    } 
    if($filetype == ".jpg") { 
        $resource = imagecreatefromjpeg($image);
    }
    if($filetype == ".png") { 
        $resource = imagecreatefrompng($image);
    }

        if($filter == 'invert') {
            $setfilter = @imagefilter($resource, IMG_FILTER_NEGATE);
        }

        else if($filter == 'grayscale') {
                $setfilter = @imagefilter($resource, IMG_FILTER_GRAYSCALE);
        }

        else if($filter == 'brightness') {
                $setfilter = @imagefilter($resource, IMG_FILTER_BRIGHTNESS, $arg1);
        }

        else if($filter == 'contrast') {
                $setfilter = @imagefilter($resource, IMG_FILTER_CONTRAST, $arg1);
        }

        else if($filter == 'color') {
                $setfilter = @imagefilter($resource, IMG_FILTER_COLORIZE, $arg1, $arg2, $arg3);
        }

        else if($filter == 'edge') {
                $setfilter = @imagefilter($resource, IMG_FILTER_EDGEDETECT);
        }

        else if($filter == 'emboss') {
                $setfilter = @imagefilter($resource, IMG_FILTER_EMBOSS);
        }

        else if($filter == 'blur1') {
                $setfilter = @imagefilter($resource, IMG_FILTER_GAUSSIAN_BLUR);
        }

        else if($filter == 'blur2') {
                $setfilter = @imagefilter($resource, IMG_FILTER_SELECTIVE_BLUR);
        }

        else if($filter == 'sketch') {
                $setfilter = @imagefilter($resource, IMG_FILTER_MEAN_REMOVAL);
        }

        else if($filter == 'smooth') {
                $setfilter = @imagefilter($resource, IMG_FILTER_SMOOTH, $arg1);
        }

        else if($filter == 'rotate') {
                $resource = imagerotate($resource, $arg1, 0);
        }

        else {
                die("$filter not valid");
        }

    if($filetype == ".gif") { 
        $img = @imagegif($resource);
                imagedestroy($resource);
    } 
    if($filetype == ".jpg") { 
        $img = @imagejpeg($resource);
                imagedestroy($resource);
    }
    if($filetype == ".png") { 
        $img = @imagepng($resource);
                imagedestroy($resource);
    }

}

}
/*----------------------------------------
-----------END Image Functions------------
----------------------------------------*/

/*----------------------------------------
-----------Begin DB Functions-------------
----------------------------------------*/
class db {

protected $db_host;
protected $db_user;
protected $db_pass;
protected $db_name;

private $SQL;
private $result;

private $rquery;
private $cquery;
private $aquery;

private $row;

private function q($SQL) {
	$result = @mysql_query($SQL);
	if (!$result) {
		return false;
	} else {
		return $result;
	}
}

function query($sql="") { //only for Superusers(needed for dbrows)
	if(ID == APP_ID || !MYSQL_OK) return false;
	//make new array for function

	$result = $this->select("users", "level", "WHERE id='".ID."'");
	if (!$result) return false;
	//---------------------------
	if(intval($result['level']) >= 4) { 
		return $this->q($sql);
	}
	else return false;
}

function dbrows($result) {
	if(!MYSQL_OK) return false;
	return mysql_fetch_array($result);
}

function dbresult($rquery, $row) {
	if(!MYSQL_OK) return false;
	$result = @mysql_result($rquery, $row);
	if (!$result) {
		return false;
	} else {
		return $result;
	}
}

function dbcount($table, $param, $sql="", $debug=false) {
	if(!MYSQL_OK) return false;
	$result = $this->q("SELECT $param FROM $table $sql");
	$result = @mysql_num_rows($result);
	return $result;
}

function dbarray($aquery) {
	if(!MYSQL_OK) return false;
	$result = @mysql_fetch_assoc($aquery);
	if (!$result) {
		return false;
	} else {
		return $result;
	}
}

function connect($db_host, $db_user, $db_pass, $db_name) {
	$db_connect = @mysql_connect($db_host, $db_user, $db_pass);
	$db_select = @mysql_select_db($db_name);
	if (!$db_connect) {
		return "CONN_ERR";
	} elseif (!$db_select) {
		return "DB_ERR";
	}
	else return "SUCCESS";
}


function select($table, $param, $sql="", $debug=false) {
	if(!MYSQL_OK) return false;
	$result = $this->q("SELECT $param FROM $table $sql");
	if($result > 0)
	return $this->dbarray($result);
	else return false;
}

function insert($table, $param, $value, $debug=false) {
	if(!MYSQL_OK) return false;
	$result = $this->q("INSERT INTO $table($param) VALUES($value)");
	if($result > 0)
	return $result;
	else return false;
}

function update($table, $param, $where, $debug=false) {
	if(!MYSQL_OK) return false;
	$result = $this->q("UPDATE $table SET $param $where");
	if($result > 0)
	return $result;
	else return false;
}

function delete($table, $where, $debug=false) {
	if(!MYSQL_OK) return false;
	$result = $this->q("DELETE FROM $table $where");
	if($result > 0)
	return $result;
	else return false;
}


}
/*----------------------------------------
------------End DB Functions--------------
----------------------------------------*/


/*----------------------------------------
----------Begin Site Functions------------
----------------------------------------*/

class site extends file {
function nav($id = NULL) {
	if($id == NULL) {
		return $this->read(SITE_PATH."/main/navbar.html");
	}
	else return $this->read(SITE_PATH."/pages/home/i/$id/main/navbar.html");
}

function page($file) {
	$pageContent = file_get_contents($file);
	return $pageContent;
}

function admin() {
		return $this->read(SITE_PATH."/main/admin.html");
} 

function login($domain, $login) {
		return $this->read(SITE_PATH."/main/login.html");

}

function foot() {
		return $this->read(SITE_PATH."/main/footer.html");
}

function ads_left($domain) {
		return $this->read(SITE_PATH."/main/ads/left.html");
}
function ads_right($domain) {
		return $this->read(SITE_PATH."/main/ads/right.html");
}
function ads_top($domain) {
		return $this->read(SITE_PATH."/main/ads/top.html");
}
function ads_bottom($domain) {
		return $this->read(SITE_PATH."/main/ads/bottom.html");
}

function remove($string, $data) {
		if(!in_array($string, $data)) { //not already in string
			return false;
		}
		else {
		//--- Remove $string ---
		$key = array_keys($data, $string); //get the array key for the friend
		$data[$key[0]] = ""; //null that bitch
		$datas = null;
		for($i=0;$i<count($data);$i++) {
			if($data[$i] != NULL) {
				$datas .= $data[$i] . "."; //put all the friends into a new list
			}
		}
		$len = strlen($datas); //get length of final product
		$datas = substr($datas, 0, $len-1); //get rid of the stray '.' in the list
		// ---  end  ---

		return $datas;
		}

}

function add($string, $data) {

		$key = array_keys($data, $string); //get the array key for the friend
		if($key=null) {
		}

		$datas = null;
		for($i=0;$i<count($data);$i++) {
			if($data[$i] != NULL) {
				$datas .= $data[$i] . "."; //put all the friends into a new list
			}
			if($i == count($data)) {
				$datas .= $string; //put all the friends into a new list
			}
		}

		return $datas;


}


}

/*----------------------------------------
------------End Site Functions--------------
----------------------------------------*/

/*----------------------------------------
----------Begin Auth Functions------------
----------------------------------------*/

class auth extends db {

private $id;

function getLevel($id = ID) { //Returns User level as int. false if not user
		if($id == APP_ID || !MYSQL_OK) return false;
		$result = $this->select("users", "level", "WHERE id='".$id."'");
		if($result) return intval($result['level']);
		else return false;
}


function isPrivate($id = ID) {
		if($id ==  APP_ID || !MYSQL_OK) return false;
		$result = $this->select("users", "profile", "WHERE id='".$id."'");
		if($result) {

			if($id != ID && intval($result['profile']) == 1) {
				//if profile is set to private
				return true;
			}
			else { 
				return false;
			}
		}
}


function isUser($id = ID) {

	if($id == APP_ID || !MYSQL_OK) return false;

	$result = $this->select("users", "level", "WHERE id='".$id."'");
	if ($result) {
		if(intval($result['level']) >= 1) { 
			return true;
		}
		else {
			return false;
		}
	}
}


function isArtist($id = ID) {

	if($id == APP_ID || !MYSQL_OK) return false;
	//make new array for function

	$result = $this->select("users", "level", "WHERE id='".$id."'");
	if ($result) {
		if(intval($result['level']) >= 2) { 
			return true;
		}
		else {
			return false;
		}
	}
}

function isAdmin($id = ID) {

	if($id == APP_ID || !MYSQL_OK) return false;
	//make new array for function
	$result = $this->select("users", "level", "WHERE id='".$id."'");
	if ($result) {

		if(intval($result['level']) >= 3) { 
			return true;
		}
		else {
			return false;
		}
	}
}


function isSuper($id = ID) {

	if($id == APP_ID || !MYSQL_OK) return false;
	//make new array for function
	$result = $this->select("users", "level", "WHERE id='".$id."'");
	if ($result) {
	
		if(intval($result['level']) >= 4) { 
			return true;
		}
		else {
			return false;
		}
	}
}

}

/*----------------------------------------
-----------End Auth Functions-------------
----------------------------------------*/

?>