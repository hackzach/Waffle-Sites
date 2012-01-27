<?php
$pageTitle = "Media Server Port Test";

function portTest($title) {
	$host = gethostbyaddr(file_get_contents("http://automation.whatismyip.com/n09230945.asp"));
	$ports = array(8000, 80, 443);
	$service = array("Media Streaming(IceCast2)", "Web(HTTP)", "Secured Web(HTTPS)");

	$uname = php_uname("s");
	$os_detect = substr(strtoupper($uname), 0, 3);


	if($os_detect == "WIN") {
		//Get Router IP in Windows
		$router = exec("route print 0.0.0.0 | findstr \"Default\"");
		$router = str_replace("0.0.0.0          0.0.0.0      ", "", $router);
		$router = explode("  ", $router[1]);
		$router = $router[0];
	}
	else {
		//Get Router IP Linux/FreeBSD/OSX
		$router = exec("netstat -rn | grep default");
		$router = explode("            ", $router);
		$router = explode("        ", $router[1]);
		$router = $router[0];
	}

	$portTest = "<p>
			$title at $host running on $uname 
			<a href=\"javascript:popup('http://$router', 'Router Login' , '640', '480');\">Router 				IP: $router </a>
		    </p>\n";
 
	for($i = 0; $i < count($ports); $i++) {
    		$connection = @fsockopen($host, $ports[$i], $errno, $errstr, 10);

    		if (is_resource($connection)) {
        		$portTest .= "<p>
						<a href=\"http://$host:$ports[$i]\">
							<span style=\"color: green\">
							$title (".$_SERVER['SERVER_ADDR'].") 										service $service[$i] is accessible to the 									internet.</span>
						</a>
					</p>\n";

       			 fclose($connection);
    		}

    		else {
        		$portTest .= "<p>
						<span style=\"color: red\">
							$title (".$_SERVER['SERVER_ADDR'].") 										service $service[$i] needs to be configured for 								outside access.
						</span>
					</p>\n";
    		}
	}
	return $portTest;
}

if(isset($_REQUEST['go'])) {
print portTest($title);
}

?>
