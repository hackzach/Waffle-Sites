<?php			
ob_start();

$sid = (isset($_POST['sid']) ? session_id(addslashes($_POST['sid'])) : "");
session_start();

		if(isset($_SESSION['profile']) && MYSQL_OK) { //they logged in with an account
			$info = $query->select("providers", "id", "WHERE ".$_SESSION['profile']['providerName']."='".$_SESSION['profile']['identifier']."'", $debug);

				if(isset($info['id'])) { //already has provider linked to account

					//$errorHandler .= "<pre>logged in successfully block</pre>\n";

					$info = $query->select("users", "*", "WHERE id='".$info['id']."'");

					define("PROVIDER", $_SESSION['profile']['providerName']);
					define("PROVIDER_ID", $_SESSION['profile']['identifier']);

					define("ID", $info['id']);
				}
				else if(isset($_SESSION['local_id'])) { //already has account and wants to link

					$info = $query->update("providers", $_SESSION['profile']['providerName']."='".$_SESSION['profile']['identifier']."'", "WHERE id='".$_SESSION['local_id']."'", $debug);

					//$errorHandler .= "<pre>Link account block</pre>\n";

					if($info) {
						$info = $query->select("users", "*", "WHERE id='".$info['local_id']."'", $debug);
						define("ID", $info['id']);

						$errorHandler .= "<pre>Successful in linking account.</pre>\n";						ob_flush();
						header("Location: /index ");
						ob_end_flush();
					}

					define("PROVIDER", $_SESSION['profile']['providerName']);
					define("PROVIDER_ID", $_SESSION['profile']['identifier']);
				}
				else { 
					//$errorHandler .= "<pre>Create account block</pre>\n";
					include SITE_PATH."/modules/create.php"; //needs a new account
				}

			$login = "<span style=\"color: ".$info['theme_fontcolor'].";\">".$info['name']."</span>(<a href=\"".$domain."/logout?ref=$page\">logout</a>)";
		}
		else { //load default account
			define("ID", $rpx_api_id);
			$login = "Default Account -->";
		}
		

?>