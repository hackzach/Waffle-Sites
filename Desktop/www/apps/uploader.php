<?php

$pageTitle = "File Uploader";

$upload_name = "Filedata";

/*
Permissions for File uploads/Content Management
chown -R www-data /var/www
chmod -R 755 /var/www

*/
if(!$auth->isUser()) {
	print HandleError("Unregistered content. Please Login."); 
	exit(0);
}
else if (!isset($_FILES[$upload_name])) {
		$errorHandler .= HandleError("No upload in $upload_name for " . $user['name']); 
} else {
	// Check post_max_size (http://us3.php.net/manual/en/features.file-upload.php#73762)
		$POST_MAX_SIZE = ini_get('post_max_size');
		$unit = strtoupper(substr($POST_MAX_SIZE, -1));
		$multiplier = ($unit == 'M' ? 1048576 : ($unit == 'K' ? 1024 : ($unit == 'G' ? 1073741824 : 1)));
	
	// Settings
		$path_info = pathinfo($_FILES[$upload_name]['name']);
		$file_extension = strtolower($path_info["extension"]);
			if($file_extension == "html") {
				$file_name = $_FILES[$upload_name]['name'];
				if(!$auth->isAdmin()) {
					$save_path = SITE_PATH . "/pages/home/i/".ID."/";
				} else {
					$save_path = SITE_PATH . "/pages/";
				}
				$link_path = $domain."/";
			}
			else if($file_extension == ("bmp" || "jpg" || "png" || "gif" || "jpeg") ) {
				$file_name = time()."_".$_FILES[$upload_name]['name'];
				$save_path = SITE_PATH . "/images/uploads/";
				$link_path = $domain."/images/uploads/";
			}	
			else {
				$file_name = time()."_".$_FILES[$upload_name]['name'];
				$save_path = SITE_PATH . "/upload/media/";
				$link_path = $domain."/upload/media/";
			}	
		
			
		$max_file_size_in_bytes = 2147483647;				// 2GB in bytes
		$extension_whitelist = array("html", "bmp", "jpg", "png", "gif", "jpeg", "mp3", "mp4","flv");	// Allowed file extensions
		$valid_chars_regex = '.A-Z0-9_ !@#$%^&()+={}\[\]\',~`-';				// Characters allowed in the file name (in a Regular Expression format)
		
	// Other variables	
		$MAX_FILENAME_LENGTH = 260;
		$uploadErrors = array(
	        0=>"There is no error, the file uploaded with success",
	        1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini",
	        2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form",
	        3=>"The uploaded file was only partially uploaded",
	        4=>"No file was uploaded",
	        6=>"Missing a temporary folder"
		);
	
	
	// Validate the upload
	if (isset($_FILES[$upload_name]["error"]) && $_FILES[$upload_name]["error"] != 0) {
			print HandleError($uploadErrors[$_FILES[$upload_name]["error"]]);
			exit(0);
		} else if (!isset($_FILES[$upload_name]["tmp_name"]) || !@is_uploaded_file($_FILES[$upload_name]["tmp_name"])) {
			$errorHandler .= HandleError("Upload failed is_uploaded_file test.");
			exit(0);
		} else if (!isset($_FILES[$upload_name]['name'])) {
			print HandleError("File has no name.");
			exit(0);
		}
		
	// Validate the file size (Warning: the largest files supported by this code is 2GB)
		$file_size = @filesize($_FILES[$upload_name]["tmp_name"]);
		if (!$file_size || $file_size > $max_file_size_in_bytes) {
			print HandleError("File exceeds the maximum allowed size");
			exit(0);
		}
		
		if ($file_size <= 0) {
			print HandleError("File size outside allowed lower bound");
			exit(0);
		}
	
	
	// Validate file name (for our purposes we'll just remove invalid characters)
		$file_name = preg_replace('/[^'.$valid_chars_regex.']|\.+$/i', "", $file_name);
		if (strlen($file_name) == 0 || strlen($file_name) > $MAX_FILENAME_LENGTH) {
			print HandleError("Invalid file name");
			exit(0);
		}
		
	// Validate file extension
		$path_info = pathinfo($_FILES[$upload_name]['name']);
		$is_valid_extension = false;
		foreach ($extension_whitelist as $extension) {
			if (strcasecmp($file_extension, $extension) == 0) {
				$is_valid_extension = true;
				break;
			}
		}
		if (!$is_valid_extension) {
			print HandleError("Invalid file extension");
			exit(0);
		}
	
		if(file_exists($save_path.$file_name)) {
			print HandleError("File already exists");
			exit(0);
		}
	// Process the file
	
		if (@move_uploaded_file($_FILES[$upload_name]["tmp_name"], $save_path.$file_name)) {
			if($file_extension == "html") {
				$file_name = substr($file_name, 0 , strlen($file_name)-5);
				$result = $query->insert("pages", "id, title, description, permissions, owner", "'".$file_name."', '', '', '2', '".ID."'", $debug);
				print strval($file->makeWriteable($save_path.$file_name));
			}
			print HandleError("File saved as <a href=\"" . $link_path. $file_name. "\">".$file_name."</a>");
			exit(0);
		}
		else {
			print HandleError("Could not move " . $_FILES[$upload_name]["tmp_name"] . " to ". $save_path.$file_name);
			exit(0);
		}
}
function HandleError($message) {
	return "<pre><span style=\"color:red; \">".$message."</span></pre>\n";
}
 
?>