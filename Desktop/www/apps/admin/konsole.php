<?php
if(!$auth->isSuper()) { //is not super
	if(!$auth->isUser()) {
		$pageTitle = "Please Login.";
		$page = "login"; //redirect unauthorized; not super
	}
	else {
		$pageTitle = "Not Authorized.";
		$page = "block"; //redirect unauthorized; not super

	}

}
else {
//is super
//do super stuff here

$pageTitle = "Web Konsole";

$codee = (isset($_REQUEST['codee']) ? true : false);
$rand_file = (isset($_REQUEST['codee']) ? addslashes($_REQUEST['codee']) : 'temp_' . time());

$phparse = (isset($_POST['c']) ? $_POST['c'] : NULL);

/*
if(isset($codee)) {
	$rand_file = addslashes($codee);
}
else {
	$rand_file = 'temp_' . time();
}
*/
$c = 'konsole?c&codee='.$rand_file.($ui ? "&ui" : "").($debug ? "&debug" : "");

function savefile($data, $file) {
    if (!$handle = fopen($file, 'w')) {
}
    if (fwrite($handle, $data) === FALSE) {
}
    fclose($handle);
}

function kparse($code, $c) {
$rand_file = 'temp_' . time();
$code = str_replace('<%code%>' , $c , $code);
$code = str_replace('<%date%>' , date('l dS \of F Y h:i:s A') , $code);
$code = str_replace('<%rand%>' , rand() , $code);
$code = str_replace('<%path%>' , getcwd() , $code);
$code = str_replace('<%IP_S%>' , $_SERVER['SERVER_ADDR'] , $code);
$code = str_replace('<%IP_V%>' , $_SERVER['REMOTE_ADDR'] , $code);
return $code;
}
function no_parse($code) {
$code = str_replace('<' , '&lt;', $code);
$code = str_replace('>' , '&gt;' , $code);
return $code;
}

if(!file_exists(SITE_PATH.'/temp/')) {
mkdir(SITE_PATH.'/temp/', 0775);
}

}
?>
