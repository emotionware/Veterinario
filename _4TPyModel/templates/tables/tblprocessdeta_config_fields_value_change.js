<script>
$(document).ready(function () { $("#IDPROCESSDETA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDPROCESSDETA").val(); 
 });}); 

 $(document).ready(function () { $("#IDPROCESS").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDPROCESS").val(); 
 });}); 

 $(document).ready(function () { $("#ETAPA_NOMBRE").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#ETAPA_NOMBRE").val(); 
 });}); 

 $(document).ready(function () { $("#ETAPA_ORDEN").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   var value = $("#ETAPA_ORDEN").val(); 
  $("#bottom_ETAPA_ORDEN").html(numberWithCommas(value));      });}); 

 $(document).ready(function () { $("#DESCRIPCION_ETAPA").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#DESCRIPCION_ETAPA").val(); 
 });}); 

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