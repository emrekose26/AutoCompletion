<?php
/**
 * Created by PhpStorm.
 * @author : Emre Köse
 * Date: 04.06.2015
 */

try{
	$db = new PDO("mysql:host=localhost; dbname=autocompletion","root","",array(
		PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8",
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
	));

}catch (PDOException $ex){
	die($ex->getMessage());
}

$term = $_GET['term'];

$sorgu = $db->query('SELECT * FROM users WHERE adsoyad LIKE "%'.$term.'%" ',PDO::FETCH_ASSOC);
if($sorgu->rowCount()){

	$data = array();
	foreach($sorgu as $row){
		$data[] = array(
			'value'   => $row['adsoyad']
		);
	}

	echo json_encode($data);
	/*i love this fucking json :D*/
}