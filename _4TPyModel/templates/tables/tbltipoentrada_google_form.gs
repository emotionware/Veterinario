var address = 'localhost';
var user = 'root';
var userPwd = 'ks2106';
var db = 'veterinario';
function formbuild() { 
var form = FormApp.create("Tipo Entrada"); 
var conexion=conectar_mysql(); //realizo conexion con mysql



var guardar = SpreadsheetApp.create('Tipo Entrada');
form.setDestination(FormApp.DestinationType.SPREADSHEET, guardar.getId());


ScriptApp.newTrigger('enviar2database')
.forForm(form)
.onFormSubmit()
.create();

var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Tipoentrada");


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
var sentencia="insert into tbltipoentrada(TIPOENTRADA,OBSERVACIONES) values ('"  + itemResponses[0].getResponse() + "','"  + itemResponses[1].getResponse() + "')";
var stmt = conn.prepareStatement(sentencia);
Logger.log("%s", sentencia);
stmt.execute();
}
