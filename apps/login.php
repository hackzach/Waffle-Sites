<?php 
$pageTitle = "Login";

$ref = (isset($_REQUEST['ref']) ? addslashes(strip_tags($_REQUEST['ref'])) : NULL);

$token = (isset($_POST['token']) ? $_POST['token'] : NULL);

ob_start();


if(strlen($token) == 40) {
  $post_data = array('token' => $token,
                     'apiKey' => $rpx_api_key,
                     'format' => 'json',
                     'extended' => 'true'); 

  $curl = curl_init();
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_URL, 'https://rpxnow.com/api/v2/auth_info');
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
  curl_setopt($curl, CURLOPT_HEADER, false);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_FAILONERROR, true);
  $result = curl_exec($curl);
  if (!$result){
    $errorHandler .= "<pre><span style=\"color:red;\">HTTP ".curl_errno($curl)."</span></pre>\n";
  }
  curl_close($curl);

  $auth_info = json_decode($result, true);

  if ($auth_info['stat'] == 'ok') {
	if($auth_info['providerName'] != "Other") {
		$auth_info['profile']['identifier'] = preg_replace("/\D/", "", $auth_info['profile']['identifier']);
	}
	if(isset($_SESSION['profile'])) {
		$info = $query->select("providers", "id", "WHERE ".$auth_info['profile']['providerName']."='".$auth_info['profile']['identifier']."'", $debug);
		 $errorHandler .= "<pre>checking for account duplication...</pre>\n";
		if(isset($info['id'])) {
			$errorHandler .= "<pre>Nothing needs to be changed.(".$info['id'].")</pre>\n";
		}
		else {
			$_SESSION['local_id'] = ID;
			$errorHandler .= "<pre>Account needs to be linked.(".ID.")(".$auth_info['profile']['identifier'].")</pre>\n";
		}
	}

	$_SESSION['profile'] = $auth_info['profile'];
	session_write_close();
	ob_flush();
	header("Location: /$ref");
    } else {
      $errorHandler .= "<pre><span style=\"color:red;\">An error occured: ".$auth_info['err']['msg']."</span></pre>\n";
    }
}
ob_end_flush();
?>