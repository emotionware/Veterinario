var address = 'localhost';
var user = 'root';
var userPwd = 'ks2106';
var db = 'veterinario';
function formbuild() { 
var form = FormApp.create("Categoría 2"); 
var conexion=conectar_mysql(); //realizo conexion con mysql



var guardar = SpreadsheetApp.create('Categoría 2');
form.setDestination(FormApp.DestinationType.SPREADSHEET, guardar.getId());


ScriptApp.newTrigger('enviar2database')
.forForm(form)
.onFormSubmit()
.create();

var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Categoria2");


var form = FormApp.openById(form.getId());
var item = form.addParagraphTextItem(); //
item.setTitle("Observaciones");


function conectar_mysql(){
var instanceUrl = 'jdbc:mysql://' + address;
var dbUrl = instanceUrl + '/' + db;
var dbUrl = instanceUrl + '/' + db;
var conn = Jdbc.getConnection('jdbc:mysql://' + address + ':3306/' + db, user, userPwd);
conn.setAutoCommit(false);
return conn;
}


}

function enviar2database(e){
var conn = Jdbc.getConnection('jdbc:mysql://' + address + ':3306/' + db, user, userPwd);
var itemResponses = e.response.getItemResponses();
var sentencia="insert into tblcategoria2(CATEGORIA2,OBSERVACIONES) values ('"  + itemResponses[0].getResponse() + "','"  + itemResponses[1].getResponse() + "')";
var stmt = conn.prepareStatement(sentencia);
Logger.log("%s", sentencia);
stmt.execute();
}

