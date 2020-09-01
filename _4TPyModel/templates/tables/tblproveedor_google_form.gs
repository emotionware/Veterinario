var address = 'localhost';
var user = 'fer';
var userPwd = 'ks2106';
var db = 'veterinario';
function formbuild() { 
var form = FormApp.create("Proveedores"); 
var conexion=conectar_mysql(); //realizo conexion con mysql



var guardar = SpreadsheetApp.create('Proveedores');
form.setDestination(FormApp.DestinationType.SPREADSHEET, guardar.getId());


ScriptApp.newTrigger('enviar2database')
.forForm(form)
.onFormSubmit()
.create();

var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Empresa");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Nombre Contacto");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Apellido");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Email");


var textValidation = FormApp.createTextValidation()
.requireTextIsEmail()
.setHelpText('No es un email válido')
.build();
item.setValidation(textValidation);
var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Puesto");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Domicilio");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Colonia");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Codigo_Postal");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Ciudad");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Estado");


var form = FormApp.openById(form.getId());
var item = form.addTextItem(); //
item.setTitle("Pais");


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
var sentencia="insert into tblproveedor(EMPRESA,NOMBRE,APELLIDO,AUXILIAR1_char,EMAIL,CELULAR,PUESTO,DOMICILIO,COLONIA,CODIGO_POSTAL,CIUDAD,ESTADO,PAIS,OBSERVACIONES) values ('"  + itemResponses[0].getResponse() + "','"  + itemResponses[1].getResponse() + "','"  + itemResponses[2].getResponse() + "','"  + itemResponses[3].getResponse() + "','"  + itemResponses[4].getResponse() + "','"  + itemResponses[5].getResponse() + "','"  + itemResponses[6].getResponse() + "','"  + itemResponses[7].getResponse() + "','"  + itemResponses[8].getResponse() + "','"  + itemResponses[9].getResponse() + "','"  + itemResponses[10].getResponse() + "','"  + itemResponses[11].getResponse() + "','"  + itemResponses[12].getResponse() + "','"  + itemResponses[13].getResponse() + "')";
var stmt = conn.prepareStatement(sentencia);
Logger.log("%s", sentencia);
stmt.execute();
}

