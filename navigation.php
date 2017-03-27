<table width="100%"   border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
<tr><td class="jqueryslidemenu" style="height:23px; color:#FFFFFF;" ><ul><li>Assignment Project</li></ul></td></tr>



<?PHP  
switch($_SESSION['Navigation']){


//---------------------------------------------------------------------------
case 'Admin': //Admin ?>
<tr><td class="jqueryslidemenu" ><ul><li><a href="index.php?file=user/list" >&nbsp;&nbsp;Users</a></li></ul></td></tr>
<tr><td class="jqueryslidemenu" ><ul><li><a href="index.php?file=user/list" >&nbsp;&nbsp;</a></li></ul></td></tr>
<tr><td class="jqueryslidemenu" ><ul><li><a href="index.php?file=user/list" >&nbsp;&nbsp;</a></li></ul></td></tr>
<tr><td class="jqueryslidemenu" ><ul><li><a href="index.php?file=user/list" >&nbsp;&nbsp;</a></li> </ul></td></tr>
<tr><td class="jqueryslidemenu" ><ul><li><a href="index.php?file=user/list" >&nbsp;&nbsp;</a></li> </ul></td></tr>

<tr><td class="jqueryslidemenu" ><ul><li><a href="index.php?file=user/list" >&nbsp;&nbsp;</a></li> </ul></td></tr>




<?PHP

break;

//-----------------------------------------------------------------------------------------------------------------------

default : ?>

<tr><td class="jqueryslidemenu" ><ul><li><a href="#" >&nbsp;</a></li> </ul></td></tr> <?PHP 

}
?>

          
</table>
