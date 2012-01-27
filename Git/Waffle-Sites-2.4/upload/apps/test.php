<?php
if ($handle = opendir('.')) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
            echo "$file<br>\n";
        }
    }
    closedir($handle);
}
?>
