var table_odd_row='#FBFBFB';
var table_even_row='#F0F7FF';
var white='#FFFFFF';

//=========================================================
function showBox(text, obj) {
helpNode = document.createElement('div');
helpNode.id = 'popBox';
helpNode.setAttribute('class','popBox');
helpNode.innerHTML = decodeURIComponent(text);
obj.appendChild(helpNode);
}

function hideBox(){
   node = document.getElementById('popBox');
   node.parentNode.removeChild(node);
}
//=========================================================

//=========================================================

function pagination(page_total, page_no){
	     if(page_total != 1 && page_no != 1) {
		
		var previous = '<img class="image_button" title="first" name="first" id="first" src="buttons/first.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +'1'+ "'" +','+ "'" +'first'+ "'" +',aijaxCall_Path);" /><img class="image_button" title="previous" name="previous" id="previous" src="buttons/previous.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +'1'+ "'" +','+ "'" +'previous'+ "'" +',aijaxCall_Path);" />';
		document.getElementById('previous').innerHTML=previous;
		} else {
		var previous = '<img class="image_button" onclick="return false;" title="first" name="first" id="first" src="buttons/first_disabled.gif" /><img class="image_button" title="previous" name="previous" id="previous" onclick="return false;" src="buttons/previous_disabled.gif" />';
		document.getElementById('previous').innerHTML=previous;
		} 
		if(page_total != 1 && page_no != page_total) {
		var next = '<img class="image_button" title="next" name="next" id="next" src="buttons/next.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +page_total+ "'" +','+ "'" +'next'+ "'" +',aijaxCall_Path);" /><img class="image_button" title="last" name="last" id="last" src="buttons/last.gif" onclick="return iconPreviocsNext(document.getElementById('+ "'" +'page_no'+ "'" +').value,'+ "'" +page_total+ "'" +','+ "'" +'last'+ "'" +',aijaxCall_Path);" />';
		document.getElementById('next').innerHTML=next;
		} else  {
		var next = '<input type="image" onclick="return false;" class="image_button" title="next" name="next" id="next" src="buttons/next_disabled.gif" /><input type="image" onclick="return false;" class="image_button" title="last" name="last" id="last" src="buttons/last_disabled.gif" />';
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

/*$(document).bind("contextmenu",function(e){  
   return false; 
});*/

/*function changeAddress(action, n){
	var i =1;
	if(action == 'address2') i =2;
	switch(action){
		case 'address1':
		case 'address2':
		
		document.getElementById('company_'+n).value     = document.getElementById('address'+i+'_company').value;
		document.getElementById('street_'+n).value      = document.getElementById('address'+i+'_street').value;
		document.getElementById('country_'+n).value     = document.getElementById('address'+i+'_country_id').value;
		document.getElementById('state_'+n).value       = document.getElementById('address'+i+'_state_id').value;
		document.getElementById('city_'+n).value        = document.getElementById('address'+i+'_city_id').value;
		document.getElementById('pincode_'+n).value     = document.getElementById('address'+i+'_pincode').value;
		document.getElementById('contact_'+n).value     = document.getElementById('address'+i+'_contact').value;
		document.getElementById('designation_'+n).value = document.getElementById('address'+i+'_designation').value;
		document.getElementById('email_'+n).value       = document.getElementById('address'+i+'_email').value;
		document.getElementById('mobile_'+n).value      = document.getElementById('address'+i+'_mobile').value;
		document.getElementById('landline_'+n).value    = document.getElementById('address'+i+'_landline').value;
		document.getElementById('extension_'+n).value   = document.getElementById('address'+i+'_extension').value;
		break;
		
		case 'others':
		document.getElementById('company_'+n).value     = '';
		document.getElementById('street_'+n).value      = '';
		document.getElementById('country_'+n).value     = '';
		document.getElementById('state_'+n).value       = '';
		document.getElementById('city_'+n).value        = '';
		document.getElementById('pincode_'+n).value     = '';
		document.getElementById('contact_'+n).value     = '';
		document.getElementById('designation_'+n).value = '';
		document.getElementById('email_'+n).value       = '';
		document.getElementById('mobile_'+n).value      = '';
		document.getElementById('landline_'+n).value    = '';
		document.getElementById('extension_'+n).value   = '';		
		break;
	}
}*/

function validateImage(obj) 
{ 
    var val         = obj.value;
    var id          = obj.id;
	var image_split = new Array();
 	    image_split = val.split(".");
	var len         = image_split.length;
    var image_ext   = image_split[len-1].toLowerCase();
	
	if (image_ext != "jpg" && image_ext != "jpeg" && image_ext != "png" && image_ext != "gif"){
		var msg  = '';
		msg += 'Invalid Image Type ! \n\n Only Images with the Following Extensions are allowed: \n\n';
		msg += ' 1) .jpg (or) .jpeg \n 2) .png \n 3) .gif';
        alert(msg);
		document.getElementById(id).value = '';
		document.getElementById(id).focus(); 
		return false ;        
    }else{
		 return true 
	}
}

function round(number,X) {
    X = (!X ? 2 : X);
    return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}

function print_Window(){
	window.print();
}

function setPrint(){
	setTimeout('print_Window()',2000);
}

function quantity(obj){
	var temp            = obj.id.split('_');
	var id              = temp[1];
	var product_value   = document.getElementById('product_'+id).value;
	var qty_value       = document.getElementById('qty_'+id).value;
	
	if(qty_value == '') document.getElementById('qty_'+id).value=0;
	if(product_value == ''){
		alert('First Select Product !');
		document.getElementById('qty_'+id).value=0;
		document.getElementById('product_'+id).focus();
		return false;
	}
	/*var stock_value     = document.getElementById('stock_'+id).value;
	if(parseInt(qty_value) > parseInt(stock_value))	alert('You have entered qty more than existing stock !');*/
	calculation(obj);
}

function calculation(obj){
	var temp            = obj.id.split('_');
	var id              = temp[1];
	var product_value   = document.getElementById('product_'+id).value;
	if(product_value == ''){
		alert('First Select Product !');
		document.getElementById(obj.id).value=0;
		document.getElementById('product_'+id).focus();
		return false;
	}
	if(document.getElementById(obj.id).value == '') document.getElementById(obj.id).value=0;
	var qty             = document.getElementById('qty_'+id).value;
	var unit_price      = document.getElementById('unitprice_'+id).value;
	var discount_per    = document.getElementById('discount_'+id).value;
	var tax_per         = document.getElementById('tax_'+id).value;
	var cal_netamount   = 0;
	var discount        = 0;
	var tax             = 0;
	
	if(qty == '')          qty = 0;
	if(unit_price == '')   unit_price = 0;
	if(discount_per == '') discount_per = 0;
	if(tax_per == '')      tax_per = 0;
	
	cal_netamount       = (qty*unit_price);
	discount            = (cal_netamount*discount_per)/100;
	tax                 = ((cal_netamount-discount)*tax_per)/100;
	
	document.getElementById('netamount_'+id).value   = round(cal_netamount, 2);
	document.getElementById('h_discount_'+id).value  = discount;
	document.getElementById('h_tax_'+id).value       = tax;
	total();
}

function calculation2(id){
	var product_id   = document.getElementById('product_id').value;
	if(product_id == ''){
		alert('First Select Product !');
		document.getElementById(id).value = 0;
	}else{
		if(id != '')
		if(document.getElementById(id).value == '') document.getElementById(id).value = 0;
		
		var unit_price = document.getElementById('unit_price').value;
		var days       = document.getElementById('days').value;
		var qty        = document.getElementById('quot_qty').value;
		var discount   = document.getElementById('discount').value;
		var tax        = document.getElementById('tax').value;
		var sub_total  = parseFloat(unit_price)*parseInt(qty);
		var disc_amt  = (discount != 0) ? parseFloat(sub_total)*parseFloat(discount)/100 : 0;
		var tax_amt   = (tax!= 0) ? (parseFloat(sub_total)-parseFloat(disc_amt))*parseFloat(tax)/100 : 0;
		var total      = parseFloat(sub_total)-parseFloat(disc_amt)+parseFloat(tax_amt);
		
		document.getElementById('sub_total').value = round(sub_total, 2);
		document.getElementById('discount_amount').value = round(disc_amt, 2);
		document.getElementById('tax_amount').value = round(tax_amt, 2);
		document.getElementById('total').value     = round(total, 2);
	}
}


function calculation3(id){
	var product_id   = document.getElementById('product_id').value;
	if(product_id == ''){
		alert('First Select Product !');
		document.getElementById(id).value = 0;
	}else{
		if(id != '')
		if(document.getElementById(id).value == '') document.getElementById(id).value = 0;
		
		var unit_price = document.getElementById('unit_price').value;
		var days       = document.getElementById('days').value;
		var qty        = document.getElementById('quot_qty').value;
		var discount   = document.getElementById('discount').value;
		var tax_amt    = document.getElementById('tax_amount').value;
		//var tax        = document.getElementById('tax').value;
		var sub_total  = parseFloat(unit_price)*parseInt(qty);
		var disc_amt  = (discount != 0) ? parseFloat(sub_total)*parseFloat(discount)/100 : 0;
		//var tax_amt   = (tax!= 0) ? (parseFloat(sub_total)-parseFloat(disc_amt))*parseFloat(tax)/100 : 0;
		var total      = parseFloat(sub_total)-parseFloat(disc_amt)+parseFloat(tax_amt);
		
		document.getElementById('sub_total').value = round(sub_total, 2);
		document.getElementById('discount_amount').value = round(disc_amt, 2);
		//document.getElementById('tax_amount').value = round(tax_amt, 2);
		document.getElementById('total').value     = round(total, 2);
	}
}
 


 
function calculation5(id){
	var product_id   = document.getElementById('product_id').value;
	if(product_id == ''){
		alert('First Select Product !');
		document.getElementById(id).value = 0;
	}else{
		if(id != '')
		if(document.getElementById(id).value == '') document.getElementById(id).value = 0;
		
		var unit_price = document.getElementById('unit_price').value;
		var days       = document.getElementById('days').value;
		var qty        = document.getElementById('quot_qty').value;
		var discount   = document.getElementById('discount').value;
		var tax        = document.getElementById('tax').value;
		var sub_total  = parseInt(unit_price)*parseInt(qty);
		var disc_amt  = (discount != 0) ? parseFloat(sub_total)*parseFloat(discount)/100 : 0;
		var tax_amt   = (tax!= 0) ? (parseFloat(sub_total)-parseFloat(disc_amt))*parseFloat(tax)/100 : 0;
		var total      = parseFloat(sub_total)-parseFloat(disc_amt)+parseFloat(tax_amt);
		
		document.getElementById('sub_total').value = round(sub_total, 2);
		document.getElementById('discount_amount').value = round(disc_amt, 2);
		document.getElementById('tax_amount').value = round(tax_amt, 2);
		document.getElementById('total').value     = round(total, 2);
	}
}
  
 

function calculationWas(id){
	var product_id   = document.getElementById('product_id').value;
	if(product_id == ''){
		alert('First Select Product !');
		document.getElementById(id).value = 0;
	}else{
		if(id != '')
		if(document.getElementById(id).value == '') document.getElementById(id).value = 0;
		var discount   = document.getElementById('discount').value;
		var sub_total = document.getElementById('sub_total').value;
		var disc_amt  = (discount != 0) ? parseFloat(sub_total)*parseFloat(discount)/100 : 0;
		var total     = parseFloat(sub_total)-parseFloat(disc_amt);
		
		//document.getElementById('sub_total').value = round(sub_total, 2);
		document.getElementById('discount_amount').value = round(disc_amt, 2);
		document.getElementById('total').value     = round(total, 2);
	}
}
  
 
 
 
 
 
function calculation4(id){
	if(id != '')
	if(document.getElementById(id).value == '') document.getElementById(id).value = 0;
//net_total  net_sub_total  net_product_discount  tax2  net_tax   shipping service  net_discount_per   net_discount net_total  
var net_sub_total        = document.getElementById('net_sub_total').value;
var net_product_discount = document.getElementById('net_product_discount').value;
var tax2                 = document.getElementById('tax2').value;
var shipping             = (document.getElementById('shipping').value!= '') ? document.getElementById('shipping').value : 0;
var service              = (document.getElementById('service').value!= '') ? document.getElementById('service').value : 0;
var net_discount_per     = (document.getElementById('net_discount_per').value!= '') ? document.getElementById('net_discount_per').value : 0;
var net_discount         = (document.getElementById('net_discount').value!= '') ? document.getElementById('net_discount').value : 0;
var temp_discount        = 0;
var temp_total           = 0;
temp_total   = parseFloat(net_sub_total) - parseFloat(net_product_discount); 
var net_tax      = (tax2!= 0) ? (parseFloat(temp_total)*parseFloat(tax2))/100 : 0;
if(net_tax != 0) document.getElementById('net_tax').value   = round(net_tax, 2);
var net_tax2     = document.getElementById('net_tax').value;
temp_total    	 = parseFloat(temp_total)+parseFloat(net_tax2)+parseFloat(shipping)+parseFloat(service);
 
if(id == 'net_discount'){
	temp_discount = (net_discount != 0) ? parseFloat(net_discount)/parseFloat(temp_total)*100 : 0;
	document.getElementById('net_discount_per').value = round(temp_discount, 2);
}else{
	temp_discount = (net_discount_per != 0) ? parseFloat(temp_total)*parseFloat(net_discount_per)/100 : 0; 
	if(temp_discount != 0)document.getElementById('net_discount').value = round(temp_discount, 2);
}

var net_discount2  = (document.getElementById('net_discount').value!= '') ? document.getElementById('net_discount').value : 0;
temp_total         = parseFloat(temp_total) - parseFloat(net_discount2); 
document.getElementById('net_total').value = round(temp_total, 2);
     
	
}
function total(){
	
	var net_amount = 0.0;
	var net_amount_array = document.getElementsByName('net_amount[]');
	for (var i = 0; i < net_amount_array.length; i++){
		net_amount = parseFloat(net_amount)+parseFloat(net_amount_array[i].value);   
	}	document.getElementById('sub_total').value   = round(net_amount, 2);
	
	var net_discount = 0.0;
	var discount_array = document.getElementsByName('h_discount[]');
	for (var i = 0; i < discount_array.length; i++){
		net_discount = parseFloat(net_discount)+parseFloat(discount_array[i].value);   
	}	document.getElementById('net_discount').value   = round(net_discount, 2);
	
	var net_tax = 0.0;
	var tax_array = document.getElementsByName('h_tax[]');
	for (var i = 0; i < tax_array.length; i++){
		net_tax = parseFloat(net_tax)+parseFloat(tax_array[i].value);   
	}	document.getElementById('net_tax').value   = round(net_tax, 2);

	var adjustment = trim(document.getElementById('adjustment').value);
	if(adjustment == ''){
		adjustment=0;
		document.getElementById('adjustment').value='+0';
	}
	
	var shipping = trim(document.getElementById('shipping').value);
	if(shipping == ''){ 
		shipping=0;
		document.getElementById('shipping').value='0';
	}
	
	var grand_total = 0.0; 
	grand_total = (((parseFloat(net_amount)-parseFloat(net_discount))+parseFloat(net_tax))+parseFloat(shipping))+parseFloat(adjustment);
	document.getElementById('grand_total').value   = round(grand_total, 2);
}

function makeNewWindow(url_link) {
    newWindow = window.open(url_link,"","toolbar=no,scrollbars=yes, resizable=yes,HEIGHT=350,WIDTH=700")
	//newWindow.moveTo('320','150');
}

function MM_swapImgRestore() { //v3.0
var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}



function deleteRows()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Delete."))
		{			
			document.form_name.submit_action.value="delete";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row(s) that are to be deleted?";
	if(msg != "")
	{
		//alert(msg);
		return false
	}
}


function results()
{
   var msg   ='';
   var count = 0;
   var s;
   var v;
	
   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all'){
			count++;
			v=ele.value;
		}
	}
	if(count != 0)
	{
	self.location='index.php?file=polls/result&pollid='+v;
	} 
	else
		msg="Please Select Row";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}
function selectRowPm()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Approve."))
		{			
			document.form_name.submit_action.value="pmapprove";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row to be Approved?";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}

function selectRowPmrej()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Reject."))
		{			
			document.form_name.submit_action.value="pmreject";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row to be Approved?";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}


function selectRowfm()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Approve."))
		{			
			document.form_name.submit_action.value="fmapprove";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row to be Approved?";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}

function selectRowfmrej()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Reject."))
		{			
			document.form_name.submit_action.value="fmreject";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row to be Approved?";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}

//Approve Purchase Request from Admin added by shilpa
function updateRows()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Approve."))
		{			
			document.form_name.submit_action.value="update";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row(s) that are to be Approved?";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}

function updateRowsMD()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Approve."))
		{			
			document.form_name.submit_action.value="updateMD";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row(s) that are to be Approved?";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}

//Send email from suppliers from Admin added by shilpa
function sendemailtosupplier()
{
   var msg   ='';
   var count = 0;
   var s;

   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;			
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to Send RFQ."))
		{			
			document.form_name.submit_action.value="sendemail";
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row(s) to send RFQ ";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}
function checkRows(action)
{
	
   var msg   ='';
   var count = 0;
   for (var i = 0 ; i < document.form_name.elements.length; i++)
   {
		var ele = document.form_name.elements[i];				
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all')
			count++;
	}
	if(count != 0)
	{
		if(confirm("Confirmation  : You have Selected " + count + " Row(s) to "+ action +"."))
		{
			document.form_name.submit_action.value=action;
	        document.form_name.submit();
		}
	} 
	else
		msg="Please Select Row(s) that are to be "+action+"?";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}
//------------------------------------------------------------------------------------

function numRows(row, action){
	
   var msg          = '';
   var count        = 0;
   var id           = 0;
   var enquiry_type = '';
   var print_file   =''; 
   //alert(document.form_name.elements.length)
   for (var i = 0 ; i < document.form_name.elements.length; i++) {
		var ele = document.form_name.elements[i];
		//alert(ele)
		if (ele.type == 'checkbox' && ele.checked && ele.id != 'select_all'){
			count++;
			id = ele.value;
			alert(id)
			//enquiry_type = document.getElementById('enquiry_type'+id).value;
		}
	}
	if(count > 0 && count <= row ){ 
		if(action == 'DC_No') self.location='index.php?file=invoice/add&delivery_id='+id;
		if(action == 'Quotation'){		
		   print_file=domain+'print.php?id='+id+'&file=template/print/quotation/'+Rental+'&title='+Rental+' Quotation';
		   alert(print_file)
		   makeNewWindow(print_file);
		}
		
		if(action == 'Order'){		
		   print_file=domain+'print.php?id='+row+'&file=template/print/order/'+enquiry_type+'&title='+enquiry_type+' Order';
		   makeNewWindow(print_file);
		}
		
		if(action == 'DC_Print'){			
			if(add_file == 'add') print_file='print.php?id='+id+'&file=template/print/dc_sale&title=DC Chalan';
			if(add_file == 'add2') print_file='print.php?id='+id+'&file=template/print/dc_rental&title=DC Chalan';
			if(add_file == 'add3') print_file='print.php?id='+id+'&file=template/print/dc_service&title=DC Chalan';
			makeNewWindow(domain+''+print_file);
		}
		if(action == 'GRN_no'){
			if(add_file == 'add') print_file='print.php?id='+id+'&file=template/print/grn_purchase&title=GRN Purchase';			
			makeNewWindow(domain+''+print_file);
			
		}
		if(action == 'return_no'){
			//alert(add_file);
			if(add_file == 'add') print_file='print.php?rental_return_id='+id+'&type_order=GRN_RentalReturns';			
			makeNewWindow(domain+''+print_file);
			
		}
		if(action == 'invoice'){		
			if(add_file == 'add') print_file='print.php?id='+id+'&file=template/print/invoice&title=Invoice';			
			makeNewWindow(domain+''+print_file);			
		}
		if(action == 'purchase'){		
			if(add_file == 'add') print_file='print.php?id='+id+'&file=template/print/purchase_order&title=Purchase Order';			
			makeNewWindow(domain+''+print_file);			
		}
	}	else if (count == 0)	msg="Select "+action+" !";
	else msg="You can select max of "+row+" "+action+" !";
	if(msg != "")
	{
		alert(msg);
		return false
	}
}
//--- Function to check Multiple Rows selection
function deleteThis(this_id)
{
	if(this_id != '')
	{
		if(confirm("Confirmation : Delete this Row."))
		{
			document.form_name.this_id.value=this_id;
			document.form_name.submit_action.value="delete";
	        document.form_name.submit();
		}
	} 
	return false;
}


//Function to delete the rows with the params

function delete_common(param,this_id)
{
	if(this_id != '')
	{
		if(confirm("Confirmation : Delete this Row."))
		{
			document.form_name.this_id.value=this_id;
			document.form_name.submit_action.value="delete_"+param;
	        document.form_name.submit();
		}
	} 
	return false;
}

//--- Function to Print Iframe 
function printFunction()
{
	try
	{
		var oIframe   = document.getElementById("ifrmPrint");
		var oContent  = document.getElementById("Printcontent").innerHTML;
		var oDoc      = (oIframe.contentWindow || oIframe.contentDocument);
		if (oDoc.document) oDoc = oDoc.document;
		oDoc.write("<head><title>Print</title>");
		oDoc.write("</head><body onload='this.focus(); this.print();'>");
		oDoc.write(oContent + "</body>");
		oDoc.close();
	}
	catch(e) {alert("Error"+e);}
}
//--- Function to Select all Check boxes 
function checkAll(val)
{
   if(val=='Sel All')
   {
	   for (var i = 0 ; i < document.form_name.elements.length; i++)
	   {
			var ele = document.form_name.elements[i]; 
				if (ele.type == 'checkbox') ele.checked=true;
	   } 
	   document.getElementById('select_all').value="Unselect";
   }
   else if(val=='Unselect')
   {
	   for (var i = 0 ; i < document.form_name.elements.length; i++)
	   {
			var ele = document.form_name.elements[i]; 
				if (ele.type == 'checkbox') ele.checked=false;
	   } 
	   document.getElementById('select_all').value="Sel All";
   }
}

//-- Aijax  
function GetXmlHttpObject()
{
	var xmlHttp=null;
	try { xmlHttp=new XMLHttpRequest(); }// Firefox, Opera 8.0+, Safari
	catch (e) { //Internet Explorer
	   try  {  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");  }
       catch (e) {  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");  }
    }
    return xmlHttp;
}
//-- Aijax send Request
function ajax(action, display_id, value) 
{  
 	xmlHttp=GetXmlHttpObject()
    if (xmlHttp==null)
    {
 		alert ("Browser does not support HTTP Request")
 		return true;
 	}
    var url= 'ajax.php?action=' +action +'&id='+value ;
    xmlHttp.onreadystatechange=function () { fromAjax(action, display_id) }
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
    return true;
}

function fromAjax(action, display_id)
{   
 	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
    {
        xmlDoc=xmlHttp.responseXML;
		var list=document.getElementById(display_id);
		while (list.childNodes[0]) { list.removeChild(list.childNodes[0])    }
		var x=document.createElement('option');
		var fare = xmlDoc.getElementsByTagName("fare");
		for(var cn = 0; cn < fare.length; cn++){
			 var i = xmlDoc.getElementsByTagName("col_1")[cn].childNodes[0].nodeValue;
			 var n = xmlDoc.getElementsByTagName("col_2")[cn].childNodes[0].nodeValue;
			 var list = document.getElementById(display_id);
			 var x=document.createElement('option');
			 x.text=n;
			 x.value=i;
			 try{ list.add(x,null); }
			 catch(ex){ list.add(x);  }
		}
	}
}
function toDate(from_id, to_id, n){
	var from = document.getElementById(from_id).value;
	var val  = trim(document.getElementById(n).value);
	if(from != '' && val !='' && val !=0){
		ajax3('cal_date', from, to_id, val);
		calculation2('');
	}else{
		document.getElementById(n).value = 0;
	}
}

function ajax3(action, from_date, to_id,  val) 
{  
 	xmlHttp=GetXmlHttpObject()
    if (xmlHttp==null)
    {
 		alert ("Browser does not support HTTP Request")
 		return true;
 	}
    var url= 'ajax.php?action=' +action +'&from_date='+from_date+'&days='+val ;
    xmlHttp.onreadystatechange=function () { fromAjax3(action, to_id) }
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
    return true;
}

function fromAjax3(action, to_id){   

 	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){
        xmlDoc=xmlHttp.responseXML;
		document.getElementById(to_id).value= xmlDoc.getElementsByTagName("var_1")[0].childNodes[0].nodeValue;
	}
}


function ajax2(action, display_id1, display_id2,  value) 
{  
 	xmlHttp=GetXmlHttpObject()
    if (xmlHttp==null)
    {
 		alert ("Browser does not support HTTP Request")
 		return true;
 	}
    var url= 'ajax.php?action=' +action +'&id='+value ;
    xmlHttp.onreadystatechange=function () { fromAjax2(action, display_id1, display_id2) }
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
    return true;
}

function fromAjax2(action, display_id1, display_id2)
{   
 	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
    {
        xmlDoc=xmlHttp.responseXML;
		
		var list=document.getElementById(display_id1);
		while (list.childNodes[0]) { list.removeChild(list.childNodes[0])    }
		var x=document.createElement('option');
		var fare = xmlDoc.getElementsByTagName("state");
		for(var cn = 0; cn < fare.length; cn++){
			 var i = xmlDoc.getElementsByTagName("col_1")[cn].childNodes[0].nodeValue;
			 var n = xmlDoc.getElementsByTagName("col_2")[cn].childNodes[0].nodeValue;
			 var list = document.getElementById(display_id1);
			 var x=document.createElement('option');
			 x.text=n;
			 x.value=i;
			 try{ list.add(x,null); }
			 catch(ex){ list.add(x);  }
		}
		
		var list=document.getElementById(display_id2);
		while (list.childNodes[0]) { list.removeChild(list.childNodes[0])    }
		var x=document.createElement('option');
		var fare = xmlDoc.getElementsByTagName("city");
		for(var cn = 0; cn < fare.length; cn++){
			 var i = xmlDoc.getElementsByTagName("col_11")[cn].childNodes[0].nodeValue;
			 var n = xmlDoc.getElementsByTagName("col_12")[cn].childNodes[0].nodeValue;
			 var list = document.getElementById(display_id2);
			 var x=document.createElement('option');
			 x.text=n;
			 x.value=i;
			 try{ list.add(x,null); }
			 catch(ex){ list.add(x);  }
		}
	}
}


//-- Aijax send Request
function aijaxCall(file_path, action, parameters) 
{    

 	xmlHttp=GetXmlHttpObject()
    if (xmlHttp==null)
    {
 		alert ("Browser does not support HTTP Request")
 		return true;
 	}
    var url= file_path + '?action=' +action + parameters ;
	//alert(url);
	
	xmlHttp.onreadystatechange=function () { fromAijaxCall(action) }
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
    return true;
}

//--  
function prevAijaxCall(file_path, action)
{
  var parameters ='';
    parameters += '&page_rows='+document.getElementById('page_rows').value; 
  if(action == 'page_no') parameters += '&page_no='+document.getElementById('page_no').value;
  aijaxCall(file_path, action, parameters);
}
  
function iconPreviocsNext(curr_page, end_page, action, file_path){
  var parameters ='';
  parameters     += '&page_rows='+document.getElementById('page_rows').value;
  if(action == 'first' || action == 'last') parameters += '&page_no='+end_page; 
  else if(action == 'previous')             parameters += '&page_no='+(--curr_page); 
  else if(action == 'next')                 parameters += '&page_no='+(++curr_page); 
  aijaxCall(file_path, 'page_no', parameters);
  }

function trim(str){
    while (str.substring(0,1) == ' ') {  str = str.substring(1, str.length);    }
    while (str.substring(str.length-1, str.length) == ' ')    { str = str.substring(0,str.length-1);    }
    return str;
	}

function checkEmail(id){
	var value = trim(document.getElementById(id).value);
	if(value !=''){
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
			return true;
			}else{
			alert("Error : Invalid Email ID");
			document.getElementById(id).value='';
			var obj= document.getElementById(id);
			document.getElementById(id).focus();
		}
	}
}

function checkPassword(){
    var password         = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
	if(password !='' && confirm_password !='') {
		alert('Error : Mismatch of Password with Confirm Password');
		document.getElementById('confirm_password').value='';
		document.getElementById('confirm_password').focus();
		return false;
	}
		else return true;
}

function fillDate(field_id, button_id){
	var cal = new Zapatec.Calendar.setup({
	inputField:field_id,
	ifFormat:"%Y-%m-%d",
	button:button_id,
	showsTime:false
	});
}

function checkDateFormat(field_id, button_id){
	var cal = new Zapatec.Calendar.setup({
	inputField:field_id,
	ifFormat:"%Y-%m-%d",
	button:button_id,
	showsTime:false
	});
}

function toggle(img_div_id, content_div_id) {
	var ele = document.getElementById(content_div_id);
	var text = document.getElementById(img_div_id);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = '<img src="buttons/hide.gif" alt="Show" title="Show" border="0" />';
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = '<img src="buttons/show.gif" alt="Hide" title="Hide" border="0" />';
	}
} 

function toggle2(img_div_id, content_div_id, name) {
	var ele = document.getElementById(content_div_id);
	var text = document.getElementById(img_div_id);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = '<img src="buttons/hide.gif" alt="Show" title="Show" border="0" />'+name;
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = '<img src="buttons/show.gif" alt="Hide" title="Hide" border="0" />'+name;
	}
} 

function toggleButton(content_id, button_id,  name){
	var ele = document.getElementById(content_id);
	var text = document.getElementById(button_id);
	if(ele.style.display == "block") {
		ele.style.display = "none";
		text.value = name + ' >> ';
  	}else {
		ele.style.display = "block";
		text.value = ' << '+ name;
	}
} 

function hide_div(content_div_id) {
	var ele = document.getElementById(content_div_id);
	//var text = document.getElementById(img_div_id);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		//text.innerHTML = '<img src="buttons/hide.gif" title="Show" border="0" />';
  	}
	else {
		ele.style.display = "block";
		//text.innerHTML = '<img src="buttons/show.gif" title="Hide" border="0" />';
	}
} 
function showModal2(content_div_id, action) {
	
	var ele = document.getElementById(content_div_id);
	if(action == "none") ele.style.display = "none";
	else if(action == "block") ele.style.display = "block";
} 

//-------------------------------------------------------------------------------------------------
function resetShipping(){ 
	document.getElementById('qs_street').value                = '';
	document.getElementById('qs_pincode').value               = '';
	document.getElementById('qs_country_id').value            = '';
	document.getElementById('qs_state_id').value              = '';
	document.getElementById('qs_city_id').value               = '';
	document.getElementById('qs_customer_employee_id').value  = '';
}
function resetBilling(){ 
	document.getElementById('qb_street').value                = '';
	document.getElementById('qb_pincode').value               = '';
	document.getElementById('qb_country_id').value            = '';
	document.getElementById('qb_state_id').value              = '';
	document.getElementById('qb_city_id').value               = '';
	document.getElementById('qb_customer_employee_id').value  = '';
}
//=========================== Auto Sujjest ===============================================

function createObject() {
	var request_type;
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
	request_type = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		request_type = new XMLHttpRequest();
	}
		return request_type;
}

var http = createObject();

function autosuggest(input_id, result_id, path) {
q = document.getElementById(input_id).value;
nocache = Math.random();
http.open('get', ''+path+'&q='+q+'&nocache = '+nocache);
http.onreadystatechange = function () { autosuggestReply(result_id) }
http.send(null);
}
function autosuggestReply(result_id) {
if(http.readyState == 4){
	var response = http.responseText;
	e = document.getElementById(result_id);
	if(response!=""){
		e.innerHTML=response;
		e.style.display="block";
	} else {
		e.style.display="none";
	}
}
}
function fill(result_id, input_id, i) {
	//alert('test');
	document.getElementById(input_id).value=i;
	document.getElementById(result_id).style.display="none";
	if(input_id == 'customer_name'){
		aijaxCall('lead/ajax.php', 'customer_details', '&customer_name='+i) 
	}
}
//=========================== Running Date Time ===========================================
if(currenttime == null){
	var currenttime = '<!--#config timefmt="%B %d, %Y %H:%M:%S"--><!--#echo var="DATE_LOCAL" -->' //SSI method of getting server date
}

var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")


var serverdate=new Date(currenttime)

function padlength(what){
var output=(what.toString().length==1)? "0"+what : what
return output
}

function displaytime(){
serverdate.setSeconds(serverdate.getSeconds()+1)
var datestring=montharray[serverdate.getMonth()]+" "+padlength(serverdate.getDate())+", "+serverdate.getFullYear()
var timestring=padlength(serverdate.getHours())+":"+padlength(serverdate.getMinutes())+":"+padlength(serverdate.getSeconds())
if(document.getElementById("servertime") != null) document.getElementById("servertime").innerHTML=datestring+" "+timestring
if(document.getElementById("current_time") != null) document.getElementById("current_time").value=timestring;

var mon = serverdate.getMonth(); 
mon++;
var sec = serverdate.getSeconds();
var datestring_2=serverdate.getFullYear()+"-"+mon+"-"+serverdate.getDate();
var timestring_2=padlength(serverdate.getHours())+":"+padlength(serverdate.getMinutes())+":00";

var date = datestring_2+" "+timestring_2;
if(sec =='00'){
	getReminder(date);
}
}

window.onload=function(){
	setInterval("displaytime()", 1000)
}

//=========================== Check for CSV Extension ===========================================
function checkExtension_CSV(str){ 
	var ar = new Array();
	ar = str.split(".");
	var len = ar.length;
    if (ar[len-1].toLowerCase() != "csv"){
    	alert("Import files with only .csv Extension !") ;
		return false ;        
    } else return true 
}

//=========================== Get Reminder as Popup =============================================

function getReminder(date){
	xmlHttp=GetXmlHttpObject()
    if (xmlHttp==null)
    {
 		alert ("Browser does not support HTTP Request")
 		return true;
 	}
    var url= 'reminder/ajax.php?date='+date;
    xmlHttp.onreadystatechange=function () { setReminder() }
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
    return true; 
}

function setReminder()
{   
 	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
    {
        xmlDoc=xmlHttp.responseXML;
		var fare = xmlDoc.getElementsByTagName("fare");
		var reminder_message = '';
		var count = 1;
		for(var cn = 0; cn < fare.length; cn++){
			 var var_1 = xmlDoc.getElementsByTagName("var_1")[cn].childNodes[0].nodeValue;
			 
			 reminder_message += ' '+count+'. '+var_1+'\n \n';
			 count++;
		}  
		if(reminder_message != ''){ 
		    document.getElementById('reminder_text').innerHTML = reminder_message;
			popup_show('popup', 'popup_drag', 'popup_exit', 'screen-bottom-right', -15, -15);
		}
	}
}


function phone(e){
    var unicode=e.charCode? e.charCode : e.keyCode;
    if (unicode!=9 && unicode!=8 && unicode!=43 && unicode!=45  && (unicode<48||unicode>57)){
		//alert('Only Integer values with + and - special characters are allowed!');
     	return false
	}
}

function integer(e){
    var unicode=e.charCode? e.charCode : e.keyCode;
    if (unicode!=9 && unicode!=8 && (unicode<48||unicode>57)){
		//alert('Only Integer values are allowed!');
     	return false
	}
}

function float(e){
    var unicode=e.charCode? e.charCode : e.keyCode;
    if (unicode!=9 && unicode!=8 && unicode!=46  && (unicode<48||unicode>57)){
		//alert('Only Floating point values are allowed!');
     	return false
	}
}

function float_plus_minus(e){
    var unicode=e.charCode? e.charCode : e.keyCode;
    if (unicode!=9 && unicode!=8 && unicode!=43 && unicode!=45 && unicode!=46  && (unicode<48||unicode>57)){
		//alert('Only Integer with + - and . special characters are allowed!');
     	return false
	}
}