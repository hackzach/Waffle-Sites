<?php

$pageTitle = "Search";

$q = (isset($_REQUEST['query']) ? $_REQUEST['query'] : NULL);
$type = (isset($_REQUEST['type']) ? $_REQUEST['type'] : NULL);

if(isset($q)) {
	$type = addslashes($type);
	$q = addslashes($q);

		$result = $query->query("SELECT * FROM users WHERE $type LIKE '%$q%'");
		
		//$result = $query->q("SELECT * FROM music WHERE MATCH(title,album,artist,genre,filename) AGAINST('$q') 

	$results =  "<center><b>Results for: </b />\"" . $q . "\"<br /><br /></center />\n";
	if($query->dbcount("users", "*", "WHERE $type LIKE '%$q%'")) {

		while($row = $query->dbrows($result)) {
			$results .= "<a href=\"".$domain."/home/?ui&id=".$row['id']."\" class=\"thickbox\">" . $row['name'] . " </a /> | ".$row['level']."<br />\n";
		}

		
	}
	else {
		$results =  "<center>No results found.</center /></small />";
	}
}
else {

	$results = "";

}

?>