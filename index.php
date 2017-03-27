<?PHP  
session_start();
include '/connect.php';
include 'general_functions.php';


$_SESSION['page_no']     =1;
$_SESSION['page_rows']   =20;
$_SESSION['page_total']  =1;
$_SESSION['table_count'] =1;


$table_odd_row='#FBFBFB';
$table_even_row='#F0F7FF';
$sub_body='#FFFFFF';
$file= $_REQUEST['file'].'.php';?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Line Flow Academy</title>

<LINK href="css/css3.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="css/jqueryslidemenu.css" />
<script type="text/javascript" language="javascript">
<!--
var currenttime = '<?PHP  echo date("F d, Y H:i:s", time())?>' //PHP method of getting server date
var domain = "http://VaibhavStore/";
//-->
</script>
<script type='text/javascript' src="js/javascript_functions.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jqueryslidemenu.js"></script>

<!-- CALANDER START -->
<script type="text/javascript" src="js/jquery.js"></script>

<!-- CALANDER END -->

</head>

<body>
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
<!-- Left Gap start -->
    <td width="60" >&nbsp;</td>
<!-- Left Gap end -->
    <td width="880"><table width="880" border="0" cellspacing="0" cellpadding="0">
<!-- Header start -->
      <tr><td colspan="2" background="buttons/bgimg.JPG"><?PHP  include 'header.php'; ?></td></tr>
<!-- Header close -->
<!-- Time & logout row start -->
       <tr class="header_bottom" height="20" >
         <td colspan="2" class="header_bottom_text" ></td></tr>
      <tr>
<!-- Time & logout row end -->

        <td width="160"  valign="top" bgcolor="#484545">
        <?PHP   include 'navigation.php';  ?>        </td>
        <td width="840" style="text-align:left; vertical-align:top;"  bgcolor="<?PHP  echo $sub_body;?>" valign="top"><?PHP  include $file; ?></td>
      </tr>
      <tr>
        <td colspan="2" ><?PHP  include 'footer.php'; ?></td>
        </tr>
    </table></td>
    <td width="60" >&nbsp;</td>
</tr>
</table>
</body>
</html>
