<?php

if(!$auth->isSuper()) { //is not super
	$page = "block";
}
else {
//is super
//do super stuff here

$pageTitle = "Users";

$edit = (isset($_GET['edit']) ? true : false);
$save = (isset($_GET['save']) ? true : false);

$aid = (isset($_REQUEST['aid']) ? addslashes($_REQUEST['aid']) : NULL);
$level = (isset($_POST['level']) ? addslashes($_REQUEST['level']) : NULL);


if($edit) {

	
	if(isset($aid)) {

		$user = $query->select("users", "*", "WHERE id='$aid'", $debug);
	}


}
else if($save) {


	if(isset($aid) && isset($level)) {

		$level = addslashes($level);
			
		//$result = q("UPDATE users SET level='$level' WHERE id='$aid'");

		$result = $query->update("users", "level='$level'", "WHERE id='$aid'");

		print "<script type=\"text/javascript\">
				self.parent.tb_remove(); 
				window.parent.location.reload();
			</script>";

	}
}

else {


	//$result = $query->query();

	$count = $query->dbcount("users", "*");
	$show = 30;
	$pages = ceil($count/$show);

	$limit = (isset($_GET['p']) ? addslashes($_REQUEST['p']) : 1);

	$min = ($limit-1) * $show;
	$max = $limit * $show;
	$page_list = NULL;

	for($i=1;$i<=$pages;$i++) {
		if($i == $limit) {
			$page_list .= "<b>" . $i . "</b /> ";
		}
		else {
			$page_list .= " <a href=\"users?p=" . $i . "\">" . $i . "</a /> ";
		}
	}

	$admin = false;
	$user = $query->select("users",
			 "*", 
			"WHERE id='".ID."'",
			$debug);

	$get_t = (isset($_GET['t']) ? 'd' : 'a');
	$get_o = (isset($_GET['o']) ? $_GET['o'] : 'n');

	if($user['level'] > 3) {
		$admin = true;
	}

	if($get_t == 'a') {
		$t = 'ASC';
	}
	else{
		$t = 'DESC';
	}

	if($get_o == 'n') {
		$orderby = 'name';
	}
	else if($get_o == 'u') {
		$orderby = 'level';
	}
	else{
		$orderby = 'id';
	}



	if($t == 'ASC') {
		$asc = "<small><a href=\"users?o=n&t\">Name</a /><br /><br /></small />";
		$userlevel = "<div align=\"right\"><small><a href=\"users?o=u&t\">Userlevel</a />&nbsp;&nbsp;<br /><br /></small /></div />";
	}
	else {
		$asc = "<small><a href=\"users?o=n\">Name</a /><br /><br /></small />";
		$userlevel = "<div align=\"right\"><small><a href=\"users?o=u\">Userlevel</a />&nbsp;&nbsp;<br /><br /></small /></div />";
	}
	
	$user_list = NULL;
	$profile_list = NULL;
	$user_level_list = NULL;

	$result = $query->query("SELECT * FROM users ORDER BY `users`.`$orderby` $t LIMIT $min,$max");
 
	while($user = $query->dbrows($result)) {
		if($user['id'] != '0') {
			$user_list .= "<a href=\"".$domain."/i/".$user['id']."/&ui&KeepThis=true&TB_iframe=true&height=400&width=600\" class=\"thickbox\">".
				$user['name']."</a /><br />\n";

			$profile_list .= "<a href=\"".$domain."/home/edit&id=".$user['id'].
				"&edit\">edit</a /><br />\n";
		}

		if($auth->isSuper()) {
			$user_level_list .= "<a href=\"users?aid=".$user['id'].
				"&edit&ui&KeepThis=true&TB_iframe=true&height=600&width=800\" class=\"thickbox\"><b>" . $user['level'] . "</b /> edit</a /><br>\n";
		}
		else {
				$user_level_list .= "<b>" . $user['level'] . "</b><br>\n";
		}


		
	}	


}

}

?>