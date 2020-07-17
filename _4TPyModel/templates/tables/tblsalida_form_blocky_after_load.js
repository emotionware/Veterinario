// Describe esta función...
function comprobar() {
  window.open(('/rendergrid?grid=tables/tblkardex&campofiltro=LOTE&idobjetofiltro=' + String(  $('#LOTE').val() )),'_blank');}


$(document).ready(function () {
var element = document.createElement("Button");
element.innerHTML = 'Verificar Lote';
element.setAttribute("onclick", 'comprobar' + "();return false;");
element.setAttribute("style",'position:relative;left:50px');
document.getElementById('left_LOTE').appendChild(element);})
