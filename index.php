<?php



include_once (__DIR__.'/config.php');

$request = explode ('/', substr (rtrim ( str_replace('.html', '', $_SERVER ['REQUEST_URI']), '/'), 1));
$lang = (!empty($_GET['l'])) ? $_GET['l'] : 'en';

//$lang = 'fr';

$version = (is_paralax_safe() === true) ? 'desk' : 'mob';

//$version = 'mob';
include_once ( 'index_'.$version.'.php'); 


?>