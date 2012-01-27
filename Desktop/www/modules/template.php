<?php

	if (file_exists(SITE_PATH."/apps/$page.php")) {
		require_once SITE_PATH."/apps/$page.php";
	}

		$pageOwner = $query->select("pages", "*", "WHERE id='$page'", $debug);

		if($pageOwner['owner'] == "0") { //the site owner should always be 1(change to 0. Super can
						//manage all pages anyway.)
			$allow_php = true;
		}
		else if(file_exists(SITE_PATH."/apps/$page.php")) { //files in the root should be ok
			$allow_php = true; //if they have an application already
		}
		else {
			$allow_php = false;
		}
		if(!isset($pageTitle)) {
			$pageTitle = $pageOwner['title']; 
		}

	if (file_exists(SITE_PATH."/pages/$page.html") === false) $page = "404"; //File not found
		
		$pagefile = SITE_PATH."/pages/$page.html"; //this is our page
		
		//Strip out all PHP from Content pages, if an Application does not exist 
		

		if($allow_php) { 
			$data = $site->page($pagefile);
		} else { 
				if( preg_match_all("/<\?php.*\?>/s", $site->page($pagefile), $matches) ) { 
						$data = $site->page($pagefile);
						foreach($matches as $match=>$i) {
							foreach($i as $found=>$i) {
								$data = preg_replace("/<\?php.*\?>/s", highlight_string($i, true), $data, 1);
							}
						}
					} else {
							$data = $site->page($pagefile); 
						} 
		}
		//If page is  uploaded by user, only admins can enable scripts

		if($ui) {		
				//if Page is to be shown in Dialog box(thickbox) we want it sans templates
				eval(" ?>".$data."<?php "); //out the content
				//Note: no header scripts or styles will be included; you must include them yourself
		}
		else {
			/*Parse the template for any <%%> tags and set the page content*/

			if(isset($_GET['id']) && file_exists(SITE_PATH."/pages/home/i/".$profile_data['id']."/main/header.html")) {
				include SITE_PATH."/pages/home/i/".$profile_data['id']."/main/header.html";
			} else include SITE_PATH."/main/header.html";

			flush(); //flush the output since we have stuff for the browser

			if(isset($_GET['id']) && file_exists(SITE_PATH."/pages/home/i/".$profile_data['id']."/main/template.html")) {
				$Templatefile = file_get_contents(SITE_PATH."/pages/home/i/".$profile_data['id']."/main/template.html");
			} else {
				$Templatefile = file_get_contents(SITE_PATH."/main/template.html");
			}

			$Templatefile = $file->parse("<%TOP_NAV%>", $site->nav((isset($_REQUEST['id']) ? $profile_data['id'] : NULL)), $Templatefile);
			$Templatefile = $file->parse("<%LOGIN%>", $site->login($domain, $rpx_api_id, $login), $Templatefile);
			$Templatefile = $file->parse("<%PAGE%>", $data, $Templatefile);
			$Templatefile = $file->parse("<%SIDE_NAV%>", ($auth->isUser() ? "<small><b>User Menu</b><br><hr></small>\n" : NULL) . $site->admin(), $Templatefile);
			$Templatefile = $file->parse("<%FOOT%>", $site->foot(), $Templatefile);
			$Templatefile = $file->parse("<%APP_ID%>", $rpx_api_id, $Templatefile);
			$Templatefile = $file->parse("<%ID%>", ID, $Templatefile);
			$Templatefile = $file->parse("<%DOMAIN%>", $domain, $Templatefile);
			$Templatefile = $file->parse("<%TITLE%>", $title, $Templatefile);
			$Templatefile = $file->parse("<%SLOGAN%>", $slogan, $Templatefile);

			$errorConsole = (($debug && $auth->isSuper()) || $errorHandler != NULL ?
			 "<br><div class=\"content\">
				<div class=\"content_resize\">
					<div class=\"article\">".$errorHandler."</div>
				</div>
			      </div>" : "");
			//^^That passes any errors or Debug info(admin) from the system and/or applications to the template
			$Templatefile = $file->parse("<%DEBUG%>", $errorConsole, $Templatefile);
			$Templatefile = $file->parse("<%ADS_TOP%>", $site->ads_top($domain), $Templatefile);
			$Templatefile = $file->parse("<%ADS_BOTTOM%>", $site->ads_bottom($domain), $Templatefile);
			$Templatefile = $file->parse("<%ADS_LEFT%>", $site->ads_left($domain), $Templatefile);
			$Templatefile = $file->parse("<%ADS_RIGHT%>", $site->ads_right($domain), $Templatefile);
			$Templatefile = $file->parse("<%URCHIN%>", "", $Templatefile);

				eval(" ?>".$Templatefile."<?php "); //out the content

		}
?>