var address = 'localhost';
var user = 'fer';
var userPwd = 'ks2106';
var db = 'veterinario';
function formbuild() { 
var form = FormApp.create("Entradas Pendientes"); 
var conexion=conectar_mysql(); //realizo conexion con mysql



var guardar = SpreadsheetApp.create('Entradas Pendientes');
form.setDestination(FormApp.DestinationType.SPREADSHEET, guardar.getId());


ScriptApp.newTrigger('enviar2database')
.forForm(form)
.onFormSubmit()
.create();

var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Identrada");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Cantidad");


var textValidation = FormApp.createTextValidation()
.requireNumber()
.setHelpText('No es un número válido')
.build();
item.setValidation(textValidation);
var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Estatus");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Nombre_Articulo");


var form = FormApp.openById(form.getId());
var item = form.addDateItem() //
.setRequired(true) //
item.setTitle("Fecha");


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
var sentencia="insert into view_entradas_pendientes(IDENTRADA,CANTIDAD,ESTATUS,NOMBRE_ARTICULO,FECHA) values ('"  + itemResponses[0].getResponse() + "','"  + itemResponses[1].getResponse() + "','"  + itemResponses[2].getResponse() + "','"  + itemResponses[3].getResponse() + "','"  + itemResponses[4].getResponse() + "')";
var stmt = conn.prepareStatement(sentencia);
Logger.log("%s", sentencia);
stmt.execute();
}

