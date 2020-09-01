var address = 'localhost';
var user = 'fer';
var userPwd = 'ks2106';
var db = 'veterinario';
function formbuild() { 
var form = FormApp.create("Artículos"); 
var conexion=conectar_mysql(); //realizo conexion con mysql



var guardar = SpreadsheetApp.create('Artículos');
form.setDestination(FormApp.DestinationType.SPREADSHEET, guardar.getId());


ScriptApp.newTrigger('enviar2database')
.forForm(form)
.onFormSubmit()
.create();

var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Código");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("% Iva");


var textValidation = FormApp.createTextValidation()
.requireNumber()
.setHelpText('No es un número válido')
.build();
item.setValidation(textValidation);
var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Descripción");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Precio Neto (Con Iva)");


var textValidation = FormApp.createTextValidation()
.requireNumber()
.setHelpText('No es un número válido')
.build();
item.setValidation(textValidation);
var form = FormApp.openById(form.getId());
var item = form.addParagraphTextItem(); //
item.setTitle("Descripción Detallada");


var form = FormApp.openById(form.getId());
var item = form.addParagraphTextItem(); //
item.setTitle("Descripción Sal/Componente");


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
var sentencia="insert into tblarticulo(CODIGO,PORC_IVA,NOMBRE_ARTICULO,PRECIO_NETO,DESCRIPCION,AUXILIAR1_char,COMPONENTE_PRINCIPAL,OBSERVACIONES,AUXILIAR1_Memo) values ('"  + itemResponses[0].getResponse() + "','"  + itemResponses[1].getResponse() + "','"  + itemResponses[2].getResponse() + "','"  + itemResponses[3].getResponse() + "','"  + itemResponses[4].getResponse() + "','"  + itemResponses[5].getResponse() + "','"  + itemResponses[6].getResponse() + "','"  + itemResponses[7].getResponse() + "','"  + itemResponses[8].getResponse() + "')";
var stmt = conn.prepareStatement(sentencia);
Logger.log("%s", sentencia);
stmt.execute();
}

