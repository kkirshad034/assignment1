<script type="text/JavaScript">
<!--
function submitform()
{
    var msg = '';

    if(trim(document.getElementById('user_first_name').value) == '')   msg += 'Enter First Name \n';  
    if(trim(document.getElementById('user_last_name').value) == '')    msg += 'Enter Last Code \n';  
 
   
    if(trim(document.getElementById('user_email').value) == '')        msg += 'Enter Email ID \n';  
    if(trim(document.getElementById('user_mobile').value) == '')       msg += 'Enter Mobile No \n';  
   
   
    if(msg != ''){
        alert(msg);
		return false;
		}else{
		if(trim(document.getElementById('edit_id').value)=='')
			document.form_name.submit_action.value="add";
			else 
			document.form_name.submit_action.value="edit";
		document.form_name.submit();
   }
}
//-->
</script>

<?PHP 
 
$var_1  =trim($_REQUEST['user_first_name']);
$var_2  =trim($_REQUEST['user_last_name']);
$var_3  =trim($_REQUEST['user_email']);
$var_4  =trim($_REQUEST['user_mobile']);
$var_5  =trim($_REQUEST['country']);
$var_6  =trim($_REQUEST['aboutme']);
$var_7  =trim($_REQUEST['birthday']);

switch($_REQUEST['submit_action'])
{
//-------------------------------------------------------------------------------------------------
	 case add:
	 $sql_add   = "INSERT INTO `user` (user_first_name, user_last_name, user_email, 
	user_mobile, country, aboutme,birthday) values ('$var_1', '$var_2', '$var_3', '$var_4', '$var_5', '$var_6', '$var_7')";
	$sel_add   = mysql_query($sql_add) or die(mysql_error());
	?><script>self.location='index.php?file=user/list';</script><?PHP 
	break;
//-------------------------------------------------------------------------------------------------
	case edit:
	echo $sql_edit   = "UPDATE `user` set user_first_name='$var_1', user_last_name='$var_2',
	 user_email='$var_3',	user_mobile='$var_4', country='$var_5', aboutme='$var_6',birthday='$var_7' where user_id='$_REQUEST[edit_id]'";
	mysql_query($sql_edit) or die(mysql_error());;
	?><script>self.location='index.php?file=user/list';</script><?PHP 
	break;
//-------------------------------------------------------------------------------------------------
}
if($_REQUEST['row_id']!=''){
	$sql_edit = "select * from user  where user_id='$_REQUEST[row_id]'";
	$sel_edit = mysql_query($sql_edit);
	$res_edit = mysql_fetch_array($sel_edit);
}

?>
<form name="form_name" action="<?PHP  $_SERVER['PHP_SELF'];?>" method="POST" enctype="multipart/form-data" >
   <input type="hidden" id="submit_action" name="submit_action"  />
   <input type="hidden" id="edit_id" name="edit_id" value="<?PHP  echo $_REQUEST['row_id']; ?>"  />

<table width="100%" border="0" cellpadding="0" cellspacing="2" bgcolor="#FFFFFF">
  
<tr class="heading_colour" >
<td height="25" colspan="4"  class="heading"><?PHP  echo ($_REQUEST['row_id']=='')?'Add' : 'Edit'; ?> User</td>
</tr>

 <tr>
   <td colspan="4">&nbsp;</td>
 </tr>
 <tr>
      <td colspan="4" class="table_subheading_left">User Details</td>
    </tr>
   
  <tr>
      <td class="text_bold_form">First Name  : </td>
      <td class="text_bold_form_left"><input type="text" id="user_first_name" class="text_input" name="user_first_name"  value="<?PHP  echo $res_edit['user_first_name']; ?>"  />        </td>
      <td class="text_bold_form">Last Name : </td>
      <td class="text_bold_form_left"><input type="text" id="user_last_name" class="text_input" name="user_last_name" value="<?PHP  echo $res_edit['user_last_name']; ?>"   /></td>
  </tr>

    <tr>
     <td class="text_bold_form">Email ID : </td>
      <td class="text_bold_form_left"><input type="text" id="user_email" class="text_input" name="user_email" value="<?PHP  echo $res_edit['user_email']; ?>" onblur="checkEmail(this.id);" /></td>
      <td class="text_bold_form">Mobile : </td>
      <td class="text_bold_form_left"><input type="text" id="user_mobile" class="text_input" name="user_mobile" value="<?PHP  echo $res_edit['user_mobile']; ?>"   /></td>
    </tr>
    <tr>
      <td class="text_bold_form">Country : </td>
      <td class="text_bold_form_left"><input type="text" id="country" class="text_input" name="country" value="<?PHP  echo $res_edit['country']; ?>"  /></td>
      <td class="text_bold_form"> Birth Day : </td>
      <td class="text_bold_form_left"><input type="text" id="birthday" class="text_input" name="birthday" value="<?PHP  echo $res_edit['birthday']; ?>"  /></td>
    </tr>
    
    <tr>
      <td class="text_bold_form">About me  : </td>
      <td class="text_bold_form_left"><textarea style="height: 76px; width: 298px;"><?PHP  echo $res_edit['aboutme']; ?>  </textarea></td>
      <td class="text_bold_form">&nbsp;</td>
      <td class="text_bold_form_left">&nbsp;</td>
    </tr>
     <tr>
     
      <td class="text_bold_form">&nbsp;</td>
      <td class="text_bold_form_left">&nbsp;</td>
      <td class="text_bold_form">&nbsp;</td>
      <td class="text_bold_form_left">&nbsp;</td>
    </tr>
     
      
    
<tr>
  <td colspan="4"  height="25">&nbsp;</td>
</tr>
<tr>
  <td colspan="4"  height="25">
  	<input type="button" class="text_button"  value="Save"   onclick="return submitform();" />
    <input type="button" class="text_button"  value="Back"  onclick="history.back(-1);" /></td>
</tr>
</table>
</form>  
						  
