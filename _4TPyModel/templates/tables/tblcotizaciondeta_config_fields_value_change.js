<script>
$(document).ready(function () { $("#IDCOTIZACIONDETA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDCOTIZACIONDETA").val(); 
 });}); 

 $(document).ready(function () { $("#IDCOTIZACION").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDCOTIZACION").val(); 
 });}); 

 $(document).ready(function () { $("#IDARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDARTICULO").val(); 
   
   
   
   
   
   if ($('#PRECIO_ARTICULO').val()==0) {

    var value = $("#IDARTICULO").val(); 
    
   var elvalor=value.value;
   
   	$.ajax({
	async: true,
	url: "/obtenervalor" + "?sentencia=select PORC_IVA from tblarticulo where idarticulo=" + elvalor
	}).then(function (data) {

 	$('#PORC_IVA').val(data);	
	
	});
	
 /*
   	$.ajax({
	async: true,
	url: "/obtenervalor" + "?sentencia=select COSTO_ADMINISTRATIVO from tblarticulo where idarticulo=" + $('#IDARTICULO').val().value
	}).then(function (data) {

 	$('#COSTOADMINISTRATIVO').val(data);	
	
	});
 */
	
   
	$.ajax({
	async: true,
	url: "/obtenervalor" + "?sentencia=select PRECIO_LISTA from tblarticulo where idarticulo=" + elvalor
	}).then(function (data) {
	
 
	$('#PRECIO_ARTICULO').val(data);
//	$('#CANTIDAD').val('1');
//	$('#PORC_IVA').val('16');	

	var precioarticulo=$('#PRECIO_ARTICULO').val();
 	var porcdescuento=$("#PORC_DESCUENTO").val(); 
 	var importedescuento=(precioarticulo/100)*porcdescuento;
 	var nuevopreciounitario=precioarticulo-importedescuento;
 	var cantidad=$('#CANTIDAD').val();
 	var subtotal=cantidad*nuevopreciounitario;
 	var iva=$('#PORC_IVA').val();
 	var importeiva=(subtotal/100)*iva;
 	var total=importeiva+subtotal;
 	
 	$("#IMPORTE_DESCUENTO").val(importedescuento*1);
 	$('#PRECIO_UNITARIO').val(nuevopreciounitario*1);
 	$('#SUBTOTAL').val(subtotal);
 	$('#IMPORTE_IVA').val(importeiva);
 	$('#TOTAL').val(total);
 	
 	/*
 	$('#TOTALFINAL').val(total + $('#COSTOADMINISTRATIVO').val()*1 );
 	*/
 	
	});
   
   
   
   
   

	
   
   
   
   
   
   
}
 
   
   
   
   
   
   
 });}); 

 $(document).ready(function () { $("#NOMBRE_ARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#NOMBRE_ARTICULO").val(); 
 });}); 

 $(document).ready(function () { $("#OBSERVACIONES").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#OBSERVACIONES").val(); 
 });}); 

 $(document).ready(function () { $("#PRECIO_ARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PRECIO_ARTICULO").val(); 
  $("#bottom_PRECIO_ARTICULO").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#PORC_DESCUENTO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PORC_DESCUENTO").val(); 
   
   
   
   	var precioarticulo=$('#PRECIO_ARTICULO').val();
 	var porcdescuento=$("#PORC_DESCUENTO").val(); 
 	var importedescuento=(precioarticulo/100)*porcdescuento;
 	var nuevopreciounitario=precioarticulo-importedescuento;
 	var cantidad=$('#CANTIDAD').val();
 	var subtotal=cantidad*nuevopreciounitario;
 	var iva=$('#PORC_IVA').val();
 	var importeiva=(subtotal/100)*iva;
 	var total=importeiva+subtotal;
 	
 	
 	$("#IMPORTE_DESCUENTO").val(importedescuento*1);
 	$('#PRECIO_UNITARIO').val(nuevopreciounitario*1);
 	$('#SUBTOTAL').val(subtotal);
 	$('#IMPORTE_IVA').val(importeiva);
 	$('#TOTAL').val(total);
 	 
   
   
   
  $("#bottom_PORC_DESCUENTO").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#IMPORTE_DESCUENTO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#IMPORTE_DESCUENTO").val(); 
   
   
   
   
   
   
   var precioarticulo=$('#PRECIO_ARTICULO').val();
 	//var porcdescuento=$("#PORC_DESCUENTO").val(); 
 	var importedescuento=value;
 	var nuevopreciounitario=precioarticulo-importedescuento;
 	
 	$('#PORC_DESCUENTO').val( (importedescuento*100)/precioarticulo  );
 	
 	var cantidad=$('#CANTIDAD').val();
 	var subtotal=cantidad*nuevopreciounitario;
 	var iva=$('#PORC_IVA').val();
 	var importeiva=(subtotal/100)*iva;
 	var total=importeiva+subtotal;
 	
 	
 	$("#IMPORTE_DESCUENTO").val(importedescuento*1);
 	$('#PRECIO_UNITARIO').val(nuevopreciounitario*1);
 	$('#SUBTOTAL').val(subtotal);
 	$('#IMPORTE_IVA').val(importeiva);
 	$('#TOTAL').val(total);
   
   
   
   
  $("#bottom_IMPORTE_DESCUENTO").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#PRECIO_UNITARIO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PRECIO_UNITARIO").val(); 
  $("#bottom_PRECIO_UNITARIO").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#CANTIDAD").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#CANTIDAD").val(); 
   
   
   
   	var precioarticulo=$('#PRECIO_ARTICULO').val();
 	var porcdescuento=$("#PORC_DESCUENTO").val(); 
 	var importedescuento=(precioarticulo/100)*porcdescuento;
 	var nuevopreciounitario=precioarticulo-importedescuento;
 	var cantidad=$('#CANTIDAD').val();
 	var subtotal=cantidad*nuevopreciounitario;
 	var iva=$('#PORC_IVA').val();
 	var importeiva=(subtotal/100)*iva;
 	var total=importeiva+subtotal;
 	
 	
 	$("#IMPORTE_DESCUENTO").val(importedescuento*1);
 	$('#PRECIO_UNITARIO').val(nuevopreciounitario*1);
 	$('#SUBTOTAL').val(subtotal);
 	$('#IMPORTE_IVA').val(importeiva);
 	$('#TOTAL').val(total);
   
   
   
  $("#bottom_CANTIDAD").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#SUBTOTAL").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#SUBTOTAL").val(); 
  $("#bottom_SUBTOTAL").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#PORC_IVA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PORC_IVA").val(); 
   
   
   
   
   
   
 	
 		var precioarticulo=$('#PRECIO_ARTICULO').val();
 	var porcdescuento=$("#PORC_DESCUENTO").val(); 
 	var importedescuento=(precioarticulo/100)*porcdescuento;
 	var nuevopreciounitario=precioarticulo-importedescuento;
 	var cantidad=$('#CANTIDAD').val();
 	var subtotal=cantidad*nuevopreciounitario;
 	var iva=$('#PORC_IVA').val();
 	var importeiva=(subtotal/100)*iva;
 	var total=importeiva+subtotal;
 	
 	
 	$("#IMPORTE_DESCUENTO").val(importedescuento*1);
 	$('#PRECIO_UNITARIO').val(nuevopreciounitario*1);
 	$('#SUBTOTAL').val(subtotal);
 	$('#IMPORTE_IVA').val(importeiva);
 	$('#TOTAL').val(total);
   
   
   
   
  $("#bottom_PORC_IVA").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#IMPORTE_IVA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#IMPORTE_IVA").val(); 
  $("#bottom_IMPORTE_IVA").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#TOTAL").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#TOTAL").val(); 
  $("#bottom_TOTAL").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#ELIMINADO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#ELIMINADO").val(); 
 });}); 

 $(document).ready(function () { $("#BLOQUEADO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#BLOQUEADO").val(); 
 });}); 

 $(document).ready(function () { $("#FECHAALTA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#FECHAALTA").val(); 
 });}); 

 $(document).ready(function () { $("#PROPIETARIO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#PROPIETARIO").val(); 
 });}); 

 </script>