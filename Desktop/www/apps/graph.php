<?php

if(!isUser($id)) {

	$page = "login";

}
else {
$who = addslashes($_REQUEST['id']);
$where = addslashes($_REQUEST['action']);
$message = addslashes($_REQUEST['message']);
$name = addslashes($_REQUEST['name']);

$post = (isset($_POST['post']) ? true : false); //if($post)

$search = "$domain/";
$more = "$name";

if(!isset($who)) {
				$who = "me";
}
if(!isset($where)) {
		$where = "feed";
}




if($post) {

$attachment = array(
			'access_token' => $access_token,
			'message' => $message,
				);
				
				
$query = "https://graph.facebook.com/$who_$where/comments";		
echo $query;
 $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $query);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $attachment);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    curl_close ($ch);
    $result = json_decode($result, TRUE);
    print($result);


}
$page = "home";
}
?>
