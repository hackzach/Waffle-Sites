<?php
$pageTitle = "Stegger Tools";
    // This is an example of how to use Stegger to hide data in images, this example is meant
    // to be run through a browser. - Warren Smith

    // This program will let you hide a file and/or file inside an image, for more in depth information
    // about how this works or how to use it differently, please read the documentation provided.

    // If the form was submitted
    if (isset($_POST['submit'])){

        // This is the image we will be hiding data inside
        $Image = '';

        // If we have a URL to an image (any URI supported by fopen wrappers)
        if (strlen($_POST['imageURL'])){

            // Then we should be using that as our image
            $Image = $_POST['imageURL'];
        }

        // If we have an image uploaded
        if (is_uploaded_file($_FILES['imageFile']['tmp_name'])){

            // Then we should use that as our image
            $Image = $_FILES['imageFile'];
	    $path = SITE_PATH."/upload/";
        }

        // If we do NOT have an image to encode at this point
        if (!$Image){

            // Then we can't go any further
            exit('<strong>You did not provide an image to encode</strong>');
        }

        // This is all the data we are hiding in the image we have by now
        $SecretData = array();

        // If a secret file was uploaded
        if (is_uploaded_file($_FILES['secretFile']['tmp_name'])){

            // Add the secret file to the secret data array
            array_push($SecretData, $_FILES['secretFile']);
        }

        // If we have a secret message to hide inside the image
        if ($_POST['secretMessage']){

            // Add the secret message to the secret data array
            array_push($SecretData, $_POST['secretMessage']);
        }

        // Require the Stegger class
        require_once SITE_PATH."/modules/Stegger.class.inc.php";

        // Instantiate the Stegger object
        $Stegger = new Stegger();

        // If we do not have any data to encode (but have an image)
        if (count($SecretData) < 1){

            // Then we are decoding
            $Stegger->Get($Image, $_POST['key']);

        } else {
            // We must be encoding so we put secret data into the image and encrypt with the optional key
            $Stegger->Put($SecretData, $Image, $_POST['key'], $path); 
        }

    } //else {

        // Show the main page with the form
?>
