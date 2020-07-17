<script>
$(document).ready(function () { $("#IDARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDARTICULO").val(); 
 });}); 

 $(document).ready(function () { $("#IDTIPOARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDTIPOARTICULO").val(); 
 });}); 

 $(document).ready(function () { $("#CODIGO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#CODIGO").val(); 
 });}); 

 $(document).ready(function () { $("#NOMBRE_ARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#NOMBRE_ARTICULO").val(); 
 });}); 

 $(document).ready(function () { $("#DESCRIPCION").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#DESCRIPCION").val(); 
 });}); 

 $(document).ready(function () { $("#OBSERVACIONES").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#OBSERVACIONES").val(); 
 });}); 

 $(document).ready(function () { $("#COSTO_REFERENCIA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#COSTO_REFERENCIA").val(); 
  $("#bottom_COSTO_REFERENCIA").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#PORC_UTILIDAD").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PORC_UTILIDAD").val(); 
  $("#bottom_PORC_UTILIDAD").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#PORC_IVA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PORC_IVA").val(); 
   
   
   var elvalor= String("1" + "." + $("#PORC_IVA").val());
   var operable = parseFloat(elvalor);
   
  var precioneto = $("#PRECIO_NETO").val(); 
  $("#PRECIO_LISTA").val( (precioneto/operable)  ); 
  $("#IMPORTE_IVA").val( precioneto - $("#PRECIO_LISTA").val()  ); 
   
   
   
   
   
   
   
        });}); 

 $(document).ready(function () { $("#PRECIO_LISTA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PRECIO_LISTA").val(); 
  $("#bottom_PRECIO_LISTA").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#PRECIO_NETO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#PRECIO_NETO").val(); 
   
   
    var elvalor= String("1" + "." + $("#PORC_IVA").val());
   var operable = parseFloat(elvalor);
   
   
   
     var precioneto = $("#PRECIO_NETO").val(); 
  $("#PRECIO_LISTA").val( (precioneto/operable)  ); 
  $("#IMPORTE_IVA").val( precioneto - $("#PRECIO_LISTA").val()  ); 
  
  
  
  $("#bottom_PRECIO_NETO").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#IDCATEGORIA1").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDCATEGORIA1").val(); 
 });}); 

 $(document).ready(function () { $("#IDCATEGORIA2").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDCATEGORIA2").val(); 
 });}); 

 $(document).ready(function () { $("#IDESTATUS_tblarticulo").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDESTATUS_tblarticulo").val(); 
 });}); 

 $(document).ready(function () { $("#IDPROVEEDOR").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDPROVEEDOR").val(); 
 });}); 

 $(document).ready(function () { $("#MARCA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#MARCA").val(); 
 });}); 

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