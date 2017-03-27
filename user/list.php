<script type="text/JavaScript" language="javascript">
<!--
var aijaxCall_Path = 'user/ajax.php';
var directory      = 'user';

function fromAijaxCall(action)
{   
    aijaxCall_Path
	directory
 	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
    {
        xmlDoc=xmlHttp.responseXML;
	    var table_object  = document.getElementById('table_list');
        var table_rows    = table_object.rows.length -1;
        for (var i=1; i <= table_rows; i++)
        {
            try { table_object.deleteRow(); }
            catch(e){ table_object.deleteRow(-1); }
        }
        var fare= xmlDoc.getElementsByTagName("fare");
		var disp_from =  xmlDoc.getElementsByTagName("disp_from")[0].childNodes[0].nodeValue;
		var disp_to =  xmlDoc.getElementsByTagName("disp_to")[0].childNodes[0].nodeValue;
		document.getElementById('disp_from').innerHTML=disp_from;
		document.getElementById('disp_to').innerHTML=disp_to;
		var count = disp_from; 
		if(fare.length > 0){
        for(var cn = 0; cn < fare.length; cn++){
			 //----------------------------------------------------------------------------------
			    var colour = table_even_row;
			    if(count%2 != 0)  colour = table_odd_row;
                var rowno       = document.getElementById("table_list").rows.length;
                var rowdata     = document.getElementById("table_list").insertRow(rowno);
                var col_1       = rowdata.insertCell(0)
                var col_2       = rowdata.insertCell(1)
                var col_3       = rowdata.insertCell(2)
                var col_4       = rowdata.insertCell(3)
                var col_5       = rowdata.insertCell(4)
                var col_6       = rowdata.insertCell(5)
                var col_7       = rowdata.insertCell(6)
                var col_8       = rowdata.insertCell(7)
				
			    col_1.bgColor   =colour; 
				col_1.className ="text_center"; 
				col_1.height    ="25";
			    col_2.bgColor   =colour; 
				col_2.className ="text_center";  
			    col_3.bgColor   =colour; 
				col_3.className ="text_center";
			    col_4.bgColor   =colour; 
				col_4.className ="text_center";
			    col_5.bgColor   =colour; 
				col_5.className ="text";
		        col_6.bgColor   =colour; 
				col_6.className ="text";
				col_7.bgColor   =colour; 
				col_7.className ="text";
				col_8.bgColor   =colour; 
				col_8.className ="text";
				

				var var_1 =xmlDoc.getElementsByTagName("var_1")[cn].childNodes[0].nodeValue;

                col_1.innerHTML      = "<input  type='checkbox' name='row_id[]' id='row_id[]' value='"+var_1+"'>";
				col_2.innerHTML     = "<a href='index.php?file="+directory+"/add&row_id="+var_1+"'><img src='buttons/edit.gif' title='Edit' width='14' border='0' /></a>";
				col_3.innerHTML         = xmlDoc.getElementsByTagName("var_2")[cn].childNodes[0].nodeValue;
				col_4.innerHTML         = xmlDoc.getElementsByTagName("var_3")[cn].childNodes[0].nodeValue;
				col_5.innerHTML         = xmlDoc.getElementsByTagName("var_4")[cn].childNodes[0].nodeValue;
				col_6.innerHTML         = xmlDoc.getElementsByTagName("var_5")[cn].childNodes[0].nodeValue;
				col_7.innerHTML         = xmlDoc.getElementsByTagName("var_6")[cn].childNodes[0].nodeValue;
				col_8.innerHTML         = xmlDoc.getElementsByTagName("var_7")[cn].childNodes[0].nodeValue;
				count++;
				}
        }
		
		var page_total =  xmlDoc.getElementsByTagName("page_total")[0].childNodes[0].nodeValue;
		var page_no    =  xmlDoc.getElementsByTagName("page_no")[0].childNodes[0].nodeValue;
        if(page_total != 1 && page_no != 1) {
		
		var previous = '<img class="image_button" title="first" name="first" id="first" src="buttons/first.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +'1'+ "'" +','+ "'" +'first'+ "'" +',aijaxCall_Path);" /><img class="image_button" title="previous" name="previous" id="previous" src="buttons/previous.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +'1'+ "'" +','+ "'" +'previous'+ "'" +',aijaxCall_Path);" />';
		document.getElementById('previous').innerHTML=previous;
		} else {
		var previous = '<img class="image_button" title="first" name="first" id="first" src="buttons/first_disabled.gif" /><img class="image_button" title="previous" name="previous" id="previous" src="buttons/previous_disabled.gif" />';
		document.getElementById('previous').innerHTML=previous;
		} 
		if(page_total != 1 && page_no != page_total) {
		var next = '<img class="image_button" title="next" name="next" id="next" src="buttons/next.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +page_total+ "'" +','+ "'" +'next'+ "'" +',aijaxCall_Path);" /><img class="image_button" title="last" name="last" id="last" src="buttons/last.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +page_total+ "'" +','+ "'" +'last'+ "'" +',aijaxCall_Path);" />';
		document.getElementById('next').innerHTML=next;
		} else  {
		var next = '<input type="image" class="image_button" title="next" name="next" id="next" src="buttons/next_disabled.gif" /><input type="image" class="image_button" title="last" name="last" id="last" src="buttons/last_disabled.gif" />';
		document.getElementById('next').innerHTML=next;
		}
			var select_id=document.getElementById("page_no");
            while (select_id.childNodes[0])  {  select_id.removeChild(select_id.childNodes[0])  }
			for(var i=1; i<= page_total; i++)
			{
			   var option_temp=document.createElement('option');
               option_temp.text=''+i+'';
               option_temp.value=''+i+'';
			   if(page_no == i) option_temp.selected="selected";
               try{ select_id.add(option_temp, null); }
			   catch(ex){ select_id.add(option_temp); }
			}
   }
}
//-->
</script>

<?PHP  
$action = $_REQUEST['submit_action'];
switch($action){
//-----------------------------------------------------------------------------------
	case delete:
	$delete_id = '';
	$delete_id = $_REQUEST['row_id'];
	if($_REQUEST['this_id'] != '') $delete_id[0]=$_REQUEST['this_id'];
	for($n=0; $n < count($delete_id); $n++)	{
		$sql_delete = "delete from user where user_id='$delete_id[$n]'";
		mysql_query($sql_delete);
	}
	break;
//-----------------------------------------------------------------------------------

}
if($_REQUEST['submit_action']=='delete')
{
	 
}
$num_sql    = "SELECT *  FROM `user` ";
$num_res    = mysql_num_rows(mysql_query($num_sql));
$_SESSION['table_count'] = $num_res; 

$page_total = ceil($num_res/$_SESSION['page_rows']);
$_SESSION['page_total'] = $page_total;

$from_rows  = (($_SESSION['page_no']-1)*$_SESSION['page_rows']); 
$to_rows    = $_SESSION['page_rows']; 
$disp_from  = $from_rows+1;
$disp_to    = (($_SESSION['page_no']-1)*$_SESSION['page_rows'])+$_SESSION['page_rows'];
if($disp_to > $num_res ) $disp_to = $num_res; 
$limit = 'LIMIT '. $from_rows .','. $to_rows;

$sql_qry = "SELECT * from `user` $limit";
$count = $disp_from;
$sel_qry = mysql_query($sql_qry);


?>

<form name="form_name" action="<?PHP  $_SERVER['PHP_SELF'];?>" method="POST" enctype="multipart/form-data" >
<input type="hidden" id="submit_action" name="submit_action"  />
<input type="hidden" id="this_id" name="this_id"  />

<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
 <iframe id="ifrmPrint" style="width:0px; height:0px; border:0px"></iframe><div id="Printcontent" > 
<tr class="heading_colour" >
 <td width="57%" height="25" class="heading" >User List</td>
 <td width="43%" height="25" class="text_bold_right" >Displaying <span id="disp_from"><?PHP  echo $disp_from ?> </span> to <span id="disp_to"><?PHP  echo $disp_to; ?> </span> of <span id="num_res"><?PHP  echo $num_res; ?> </span> Rows&nbsp;</td>
</tr>

<tr>
 <td height="25" colspan="2">&nbsp;</td>
</tr>
<tr>
  <td height="25" colspan="2"><table id="table_list" width="100%" border="0" cellspacing="2" cellpadding="0">
    <tr>
      <td width="5%" class="table_heading">Sel</td>
      <td width="5%" class="table_heading">Edit</td>
      <td width="14%" class="table_heading">Name</td>
      <td width="23%" class="table_heading">EmailID</td>
      <td width="12%" class="table_heading">Mobile</td>
      <td width="20%" class="table_heading">About me</td>
	  <td width="10%" class="table_heading">Birth day</td>
	  <td width="10%" class="table_heading">Country</td>
      </tr>
<?PHP  while($res_qry = mysql_fetch_array($sel_qry)){
   if($count%2 != 0)  $color=$table_odd_row;  // color variables from index.php page 
   else               $color=$table_even_row;         
                 
?>
 <tr>
<td height="25" class="text_center" bgcolor="<?PHP  echo $color; ?>"><input type="checkbox" name="row_id[]" id="row_id[]" value="<?PHP  echo $res_qry['user_id']; ?>" /></td>
<td class="text_center" bgcolor="<?PHP  echo $color; ?>"><a href="index.php?file=user/add&row_id=<?PHP  echo $res_qry['user_id']; ?>"><img src="buttons/edit.gif" title="Edit" width="14" border="0" /></a></td>
<td class="text" bgcolor="<?PHP  echo $color; ?>"><?PHP  echo $res_qry['user_first_name']." ".$res_qry['user_last_name']; ?></td>
<td class="text" bgcolor="<?PHP  echo $color; ?>"><?PHP  echo $res_qry['user_email']; ?></td>
<td class="text" bgcolor="<?PHP  echo $color; ?>"><?PHP  echo $res_qry['user_mobile']; ?></td>
<td class="text" bgcolor="<?PHP  echo $color; ?>"><?PHP  echo $res_qry['aboutme']; ?></td>
<td class="text" bgcolor="<?PHP  echo $color; ?>"><?PHP  echo $res_qry['birthday']; ?></td>
<td class="text" bgcolor="<?PHP  echo $color; ?>"><?PHP  echo $res_qry['country']; ?></td>
</tr>
<?PHP  $count++; } ?>
  </table></td>
</tr>

<tr>
  <td height="25" colspan="2">&nbsp;</td>
</tr>
</div>
<tr>
  <td height="25" colspan="2">
  <input class="text_button" type="button" style="width:60px;"  value="Add" onclick="self.location='index.php?file=user/add';"/>
    <input type="button" style="width:60px;"  class="text_button" value="Delete"   onclick="return deleteRows();" />  
    <input type="button" style="width:60px;"  class="text_button" value="Sel All" id="select_all"  onClick="checkAll(this.value);"    />  </td>
  </tr>
<tr>
 <td height="25" colspan="2" class="text_bold_right">
  <span id="previous">
  <?PHP  if($_SESSION['page_total'] != 1 && $_SESSION['page_no'] != 1) { ?>
   <img class="image_button" title="first" name="first" id="first" src="buttons/first.gif" onclick="return iconPreviocsNext(document.getElementById('page_no').value,'1','first',aijaxCall_Path);" /><img class="image_button" title="previous" name="previous" id="previous" src="buttons/previous.gif" onclick="return iconPreviocsNext(document.getElementById('page_no').value,'1','previous',aijaxCall_Path);" />
   <?PHP  }else{ ?>
   <img class="image_button" title="first" name="first" id="first" src="buttons/first_disabled.gif" /><img class="image_button" title="previous" name="previous" id="previous" src="buttons/previous_disabled.gif" />
   <?PHP  } ?>
  </span> 
   Page 
   <select name="page_no" id="page_no" class="text"  style="width:40px; text-align:center;" onchange="return prevAijaxCall(aijaxCall_Path,'page_no');">
   <?PHP  $j=1; for($i=0; $i<$_SESSION['page_total']; $i++) { ?> 
        <option value="<?PHP  echo $j;?>" <?PHP  if($_SESSION['page_no']== $j) echo 'selected'; ?> ><?PHP  echo $j; ?></option>
   <?PHP  $j++; } ?>    
         </select>
    <span id="next">   
  <?PHP  if($_SESSION['page_total'] != 1 && $_SESSION['page_no'] != $_SESSION['page_total']) { ?>
     <img class="image_button" title="next" name="next" id="next" src="buttons/next.gif" onclick="return iconPreviocsNext(document.getElementById('page_no').value,'<?PHP  echo $_SESSION['page_total']; ?>','next',aijaxCall_Path);" /><img class="image_button" title="last" name="last" id="last" src="buttons/last.gif" onclick="return iconPreviocsNext(document.getElementById('page_no').value,'<?PHP  echo $_SESSION['page_total']; ?>','last',aijaxCall_Path);" />
   <?PHP  }else { ?>
     <img class="image_button" title="next" name="next" id="next" src="buttons/next_disabled.gif" /><img class="image_button" title="last" name="last" id="last" src="buttons/last_disabled.gif" />
   <?PHP  } ?>
     </span>     
   &nbsp;&nbsp;Rows <input type="text" class="text" id="page_rows" name="page_rows" onblur="return prevAijaxCall(aijaxCall_Path, 'page_rows');" style="width:30px; text-align:center" value="<?PHP  echo $_SESSION['page_rows']; ?>"  />&nbsp;&nbsp;&nbsp;</td>
</tr>
</table>
</form>  
						  
