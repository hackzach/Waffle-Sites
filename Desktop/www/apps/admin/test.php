<?php 
$replace = "\$pageTitle \= \"hi!\";";
$regex = "#([\$pageTitle \= \"])(.*)([\";])#e";

print preg_replace($regex, "$2", $replace);

?>