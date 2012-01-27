																				<?php

$pageTitle = "Send a Text Message";

require SITE_PATH."/modules/class.googlevoice.php";

$phone = addslashes($_REQUEST['phone']);
$message = addslashes($_REQUEST['msg']);
$send = $_REQUEST['send'];

$gv =  new GoogleVoice($gv_email, $gv_password);

if(isset($send)) { 
	
	if(!isset($phone) || $phone == "") {
		$phone = $gv_default_phone; //"17739696721"; //(773) 770-5441 or default #
	}

	else if(!isset($message) || $message == "") {
		exit("Enter a message.");
	}

	$gv->sendSMS($phone, $message);
}
 /*
// call a phone from one of your forwarding phones
$gv->callNumber('9995551212', '5558675309', 'mobile');

// send an SMS to a phone number
$gv->sendSMS('9995551212', 'Sending a message!');

// fetch new voicemails
$voicemails = $gv->getNewVoicemail();

$msgIDs = array();
foreach( $voicemails as $s )
{
        preg_match('/\+1([0-9]{3})([0-9]{3})([0-9]{4})/', $s['phoneNumber'], $match);
        $phoneNumber = '(' . $match[1] . ') ' . $match[2] . '-'. $match[3];
        echo 'Message from: ' . $phoneNumber . ' on ' . $s['date'] . "\n" . $s['message'] . "\n\n";

        if( !in_array($s['msgID'], $msgIDs) )
        {
                // mark the conversation as "read" in google voice
                $gv->markSMSRead($s['msgID']);
                $msgIDs[] = $s['msgID'];
        }
}

// get all new SMSs
$sms = $gv->getNewSMS();

$msgIDs = array();
foreach( $sms as $s )
{
        preg_match('/\+1([0-9]{3})([0-9]{3})([0-9]{4})/', $s['phoneNumber'], $match);
        $phoneNumber = '(' . $match[1] . ') ' . $match[2] . '-'. $match[3];
        echo 'Message from: ' . $phoneNumber . ' on ' . $s['date'] . ': ' . $s['message'] . "\n";

        if( !in_array($s['msgID'], $msgIDs) )
        {
                // mark the conversation as "read" in google voice
                $gv->markSMSRead($s['msgID']);
                $msgIDs[] = $s['msgID'];
        }
}
*/
?>								