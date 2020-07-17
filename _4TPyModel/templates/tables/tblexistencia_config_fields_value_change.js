<script>
$(document).ready(function () { $("#IDEXISTENCIA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDEXISTENCIA").val(); 
 });}); 

 $(document).ready(function () { $("#IDARTICULO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDARTICULO").val(); 
 });}); 

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

 $(document).ready(function () { $("#EXISTENCIA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#EXISTENCIA").val(); 
  $("#bottom_EXISTENCIA").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#OBSERVACIONES").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#OBSERVACIONES").val(); 
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

 </script>