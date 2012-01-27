<?php //Create a new account for user
					$result = $query->dbcount("providers", "id", "WHERE ".$_SESSION['profile']['providerName']."='".$_SESSION['profile']['identifier']."'");
					if(!$result) {
						$count_users = ($query->dbcount("users", "*"))+1;
						$result = $query->insert("users", "
							name,
							id,
							password,
							email,
							hide_email,
							location,
							birthdate,
							gender,
							theme_bgcolor,
							theme_fontcolor,
							theme_font,
							profile,
							website,
							theme_fontsize,
							profile_pic,
							firstvisit,
							lastvisit,
							ip,
							level,
							status",

							"'".$_SESSION['profile']['displayName']."',
							'".$count_users."',
							'',
							'".$_SESSION['profile']['email']."',
							'1',
							'',
							'',
							'".$_SESSION['profile']['gender']."',
							'',
							'',
							'Time New Roman',
							'1',
							'',
							'10',
							'".$_SESSION['profile']['photo']."',
							'" . time() . "',
							'" . time() . "',
							'" . $_SERVER['REMOTE_ADDR'] . "',
							'1',
							''", $debug);
						
							if($result == 0) {
								$errorHandler .= "<pre>Failure on my part(I can't add you. Maybe you already exist?).</pre>\n";
							}
							else {
								$result = $query->insert("providers", "id, ".$_SESSION['profile']['providerName'],"'".$count_users."','".$_SESSION['profile']['identifier']."'", $debug);
								if($result == 0) {
									$errorHandler .= "<pre>Failure on my part(I added you. But you cannot be linked. Maybe you have another account already?).</pre>\n";
								}
								else { 
									$errorHandler .= "<pre>I just registered you as a member(YAY!)</pre>\n";
								}
							}
						}
						else {
							$errorHandler .= "<pre>Failure on my part(My memory says you have an account already).</pre>\n";
						}

					$info = $query->select("users", "*", "WHERE id='".$count_users."'");

					define("PROVIDER", $_SESSION['profile']['providerName']);
					define("PROVIDER_ID", $_SESSION['profile']['identifier']);

					define("ID", $info['id']); 
?>