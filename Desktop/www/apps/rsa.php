<?php
$pageTitle = "Encryptor";
include SITE_PATH."/modules/rsa.class.php";

$RSA = new RSA();

$keys = $RSA->generate_keys ('9990454949', '9990450271');

$decrypted = (isset($_REQUEST['message_decrypt']) ? addslashes($_REQUEST['message_decrypt']) : "Peter Pepper Ate a jar of Pickled Peppers");
$encrypted = (isset($_REQUEST['message_encrypt']) ? addslashes($_REQUEST['message_encrypt']) : "67023070120313284382 79517072947620753491 12144168564623785205 47866345321219568483 60709540760802704839 53864681622540111032 17634174648003506488 50612264242529731824 266001988046875");
?>
