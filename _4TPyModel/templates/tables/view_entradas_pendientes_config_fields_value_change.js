<script>
$(document).ready(function () { $("#IDENTRADA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDENTRADA").val(); 
 });}); 

 $(document).ready(function () { $("#CANTIDAD").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#CANTIDAD").val(); 
  $("#bottom_CANTIDAD").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#ESTATUS").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#ESTATUS").val(); 
 });}); 

 $(document).ready(function () { $("#NOMBRE_ARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#NOMBRE_ARTICULO").val(); 
 });}); 

 $(document).ready(function () { $("#FECHA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#FECHA").val(); 
 });}); 

 </script>