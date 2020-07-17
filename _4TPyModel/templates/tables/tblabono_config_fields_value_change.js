<script>
$(document).ready(function () { $("#IDABONO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDABONO").val(); 
 });}); 

 $(document).ready(function () { $("#CONCEPTO_ABONO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#CONCEPTO_ABONO").val(); 
 });}); 

 $(document).ready(function () { $("#FECHAABONO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#FECHAABONO").val(); 
 });}); 

 $(document).ready(function () { $("#IDCOTIZACION").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDCOTIZACION").val(); 
 });}); 

 $(document).ready(function () { $("#IMPORTE_ABONO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#IMPORTE_ABONO").val(); 
  $("#bottom_IMPORTE_ABONO").html(numberWithCommas(value));      });}); 

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

 $(document).ready(function () { $("#PROPIETARIO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#PROPIETARIO").val(); 
 });}); 

 </script>