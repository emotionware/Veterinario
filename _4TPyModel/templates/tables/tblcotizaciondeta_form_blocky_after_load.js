// Describe esta función...
function verificarlote() {
  window.open(('/rendergrid?grid=tables/tblkardex&campofiltro=LOTE&idobjetofiltro=' + String(  $('#LOTE').val() )),'_blank');}


$(document).ready(function () {
var element = document.createElement("Button");
element.innerHTML = 'Verificar Lote';
element.setAttribute("onclick", 'verificarlote' + "();return false;");
element.setAttribute("style",'color:black;position:relative;left:254px');
document.getElementById('bottom_LOTE').appendChild(element);})
