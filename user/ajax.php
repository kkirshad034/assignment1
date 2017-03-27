<?PHP 
session_start();
include '../connect.php';
header('Content-Type: text/xml');
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 2007 05:00:00 GMT");  //A date in the past

switch($_REQUEST['action'])
{ 
//------------------------------------------------------------------------------------------------------------
	case page_no:
	$page_rows = $_REQUEST['page_rows']; 
	$page_no   = $_REQUEST['page_no']-1;
	$_SESSION['page_no']    = $_REQUEST['page_no'];
	$limit = 'LIMIT '.($page_no*$page_rows).','. $page_rows;
	$sql   = "SELECT *  FROM `user`  $limit";
	$sel   = mysql_query($sql);
    $disp_from = ($page_no*$page_rows)+1;
    $disp_to   = ($page_no*$page_rows)+$page_rows;
    if( $disp_to > $_SESSION['table_count']  ) $disp_to = $_SESSION['table_count'];  

	echo '<?PHP xml version="1.0" encoding="ISO-8859-1"?> <fares>';
	    echo "<disp_from><![CDATA[" . $disp_from. "]]></disp_from>";
    	echo "<disp_to><![CDATA[" . $disp_to. "]]></disp_to>";
    	echo "<page_no><![CDATA[" . $_SESSION['page_no']. "]]></page_no>";
    	echo "<page_total><![CDATA[" . $_SESSION['page_total']. "]]></page_total>";
	while($res = mysql_fetch_array($sel))
	{
	  	echo "<fare>";
    	echo "<var_1><![CDATA[" . $res['user_id']. "]]></var_1>";
    	echo "<var_2><![CDATA[" . $res['user_name']. "]]></var_2>";
    	echo "<var_3><![CDATA[" . $res['user_password']. "]]></var_3>";
    	echo "<var_4><![CDATA[" . $res['user_email']. "]]></var_4>";
    	echo "<var_5><![CDATA[" . $res['user_type_name']. "]]></var_5>";
    	echo "<var_6><![CDATA[" . $res['user_mobile']. "]]></var_6>";
    	echo "<var_7><![CDATA[" . $res['user_status']. "]]></var_7>";
    	echo "</fare>";
    }
    echo "</fares>";
	break; 
//------------------------------------------------------------------------------------------------------------
	case page_rows:
	$page_rows  = $_REQUEST['page_rows']; 
	$sql2       = "SELECT *  FROM `user` ";
	$sel2       = mysql_query($sql2);
	$num        = mysql_num_rows($sel2);
	$page_total = ceil($num/$page_rows);
	$_SESSION['page_total'] = $page_total;
	$_SESSION['page_rows']  = $_REQUEST['page_rows'];
	$_SESSION['page_no']    = 1;

	$limit     = 'LIMIT 0,'. $page_rows;
	$sql       = "SELECT *  FROM `user`  $limit";
	$sel = mysql_query($sql);
	
	 $disp_from = 1;
     $disp_to   = $page_rows;
     if( $disp_to > $_SESSION['table_count'] ) $disp_to = $_SESSION['table_count'];  

	echo '<?PHP xml version="1.0" encoding="ISO-8859-1"?> <fares>';
	    echo "<disp_from><![CDATA[" . $disp_from. "]]></disp_from>";
    	echo "<disp_to><![CDATA[" . $disp_to. "]]></disp_to>";
    	echo "<page_total><![CDATA[" . $page_total. "]]></page_total>";
    	echo "<page_no><![CDATA[" . $_SESSION['page_no']. "]]></page_no>";
    	echo "<page_total><![CDATA[" . $_SESSION['page_total']. "]]></page_total>";
	while($res = mysql_fetch_array($sel))
	{
	  	echo "<fare>";
    	echo "<var_1><![CDATA[" . $res['user_id']. "]]></var_1>";
    	echo "<var_2><![CDATA[" . $res['user_name']. "]]></var_2>";
    	echo "<var_3><![CDATA[" . $res['user_password']. "]]></var_3>";
    	echo "<var_4><![CDATA[" . $res['user_email']. "]]></var_4>";
    	echo "<var_5><![CDATA[" . $res['user_type_name']. "]]></var_5>";
    	echo "<var_6><![CDATA[" . $res['user_mobile']. "]]></var_6>";
    	echo "<var_7><![CDATA[" . $res['user_status']. "]]></var_7>";
    	echo "</fare>";
    }
    echo "</fares>";
	break;	
}
?>
