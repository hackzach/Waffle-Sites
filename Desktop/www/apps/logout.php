<?php
$ref = (isset($_REQUEST['ref']) ? addslashes(strip_tags($_REQUEST['ref'])) : NULL);
session_destroy();
header("Location: /$ref");
?>
