<script>
$(document).ready(function () { $("#IDKARDEX").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDKARDEX").val(); 
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

 $(document).ready(function () { $("#CANTIDAD").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#CANTIDAD").val(); 
  $("#bottom_CANTIDAD").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#LOTE").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#LOTE").val(); 
 });}); 

 $(document).ready(function () { $("#CADUCIDAD").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#CADUCIDAD").val(); 
 });}); 

 $(document).ready(function () { $("#TIPOMOV").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#TIPOMOV").val(); 
 });}); 

 $(document).ready(function () { $("#ALMACEN").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#ALMACEN").val(); 
 });}); 

 </script>