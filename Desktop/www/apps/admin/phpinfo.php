<?php

if(!$auth->isSuper()) { $page = "login"; $pageTitle = "Aunauthorized Access."; }

$pageTitle = "Server Info";

ob_start();
phpinfo();
$phpinfo = ob_get_contents();
ob_end_clean();

$phpinfo = preg_replace("%<style type=\"text/css\">(.*)</style>%s", "", $phpinfo);
?>