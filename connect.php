<?PHP 
error_reporting(0);
$user          = 'root';		
$pass         = '';                     
$host         = 'localhost';
$dbname       = 'prj1';

/*$user          = 'thesolar_dbsolar';		
$pass          = 'dbsolar_123';                     
$host          = 'localhost';
$dbname        = 'thesolar_solarindia'; */

mysql_connect($host, $user, $pass) or die('Could not connect to mysql');
mysql_select_db($dbname) or die('Could not connect to database');
?>