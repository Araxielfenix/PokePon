function createNewEventWithMeet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Apoyo Tienda');
  var last_row = sheet.getLastRow();
  var data = sheet.getRange('A2:R' + last_row).getValues(); // Se obtiene la tabla y se guarda en un arreglo.
  var cal = CalendarApp.getCalendarById('c_6bl1jb1jpn656e8qkc57frvolc@group.calendar.google.com');
  var inicio = new Date();
  var fin = new Date();
  var timezone = 'GMT-' + 600;
  //var hoy = Utilities.formatDate(new Date(), timezone, 'MM/dd/YYYY');
  //Recorre todo el arreglo data, que es donde se almacenó la tabla completa.
  for(var i = 0;i< data.length;i++){
    //Si en la columna Q ya existe un valor, lo limpia.
    if(!sheet.getRange('Q' + (i+2)).isBlank()){
      cal.getEventById(sheet.getRange('Q' + (i+2)).getValue()).deleteEvent();
      sheet.getRange('Q' + (i+2)).setValue(null);
    }
    //Si se cambia a color verde una fila y en la columna M dice no, se cambia el valor de la columna M a si
    if(sheet.getRange((i + 2), 1, last_row, sheet.getMaxColumns()).getBackground() == '#34a853' && sheet.getRange('M' + (i+2)).getValue() == 'no'){
      sheet.getRange('M' + (i+2)).setValue('si');
      data[i][12] = 'si';
    }
    //Si la columna se cambia a color gris o azul, la columna que indica si agendo reunion se cambia a no y se borra el evento del calendario (si es que existe).
    if(sheet.getRange((i + 2), 1, last_row, sheet.getMaxColumns()).getBackground() == '#b7b7b7' || sheet.getRange((i + 2), 1, last_row, sheet.getMaxColumns()).getBackground() == '#46bdc6'){
      sheet.getRange('M' + (i+2)).setValue('no');
      data[i][12] = 'no';
    }
    //Si la fila es color amarillo, se reagenda la fecha de contacto.
    if(sheet.getRange((i + 2), 1, last_row, sheet.getMaxColumns()).getBackground() == '#fbbc04'){
      /*sheet.getRange('M' + (i+2)).setValue('si');
      data[i][12] = 'si'
      //Si la fecha de la reunion es pasada, se reagenda al dia de mañana.
      if (parseInt(new Date(hoy).getDay()) !== 5) {
        hoy = new Date(hoy).setDate(new Date(hoy).getDate() + 1);
        
      } else { 
        //Si la fecha de hoy es Viernes, se reagenda para el lunes.
        hoy = new Date(hoy).setDate(new Date(hoy).getDate() + 3);
        //sheet.getRange('G' + (i+2)).setValue(Utilities.formatDate(new Date(), timezone, 'dd/MM/YYYY'));
      }
      sheet.getRange('G' + (i+2)).setValue(Utilities.formatDate(new Date(hoy).setDate(), timezone, 'dd/MM/YYYY'));
      Logger.log(new Date(hoy).toDateString());
      Logger.log(sheet.getRange('G' + (i+2)).getValue());
      data[i][6] = hoy;*/
      let timezone = 'GMT-' + 600;
      let hoy = new Date();
      if (parseInt(hoy.getDay()) !== 5) {
        hoy.setDate(hoy.getDate() + 1);
      } else {
        //Si la fecha de hoy es Viernes, se reagenda para el lunes.
        hoy.setDate(hoy.getDate()+3);
       
      } 
      data[i][6] = hoy;
      sheet.getRange('G' + (i+2)).setValue(Utilities.formatDate(hoy, timezone, 'dd/MM/YYYY'));
    }
    //Si agendó reunion (tomado de la celda M), se crea el evento en el calendario.
    if(data[i][12] == 'si' || data[i][12] == 'Si' || data[i][12] == 'SI' ){
      var fecha = new Date(data[i][6]);
      fecha.setHours(parseInt(data[i][5].toString().substring(0, 3)));
      fecha.setHours(fecha.getHours()+1);
      fecha.setMinutes(0,0);
      inicio = fecha;
      var fin = new Date(inicio);
      fin.setHours(fin.getHours()+1);
      var descripcion = data[i][10];
      var correo = data[i][3];
      //Se crea el evento en el calendario y se almacena el Id del evento en calId
      var calId = cal.createEvent('Primer contacto', inicio, fin, {
                location: 'Conekta',
                description: 'Ticket: ' + data[i][4] + ' Correo del merchant: ' + correo + ' Telefono: ' + data[i][2]
                }).getId();
      //Se almacena el id del calendario en la columna Q.
      sheet.getRange('Q' + (i+2)).setValue(calId);
    }
  }
}
