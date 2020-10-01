function doGet(evnt)
{
  var data = JSON.stringify(evnt.parameter);
  var data = JSON.parse(data);
  
  var name = data.name;
  var choice1 = data.choice1;
  var choice2 = data.choice2;
  var prizeDoor = data.prizeDoor;
  var switched = data.switched;
  var winStat = data.winStat;
  var timestamp = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy-MM-dd HH:mm:ss");
  
  var data = [timestamp,name,choice1,choice2,prizeDoor,switched,winStat];
  
  toSheet(data);
  
  return ContentService.createTextOutput("Successful!");
}

function doPost(evnt)
{
  return ContentService.createTextOutput("POST not allowed.");
}


function toSheet(data)
{
  var sheetID = "1IIRbj1Ll6jUtJ_f71nAYpPpr74s9_Yv9KTYbTq2-hMo";
  var doc = SpreadsheetApp.openById(sheetID);
  var sheet = doc.getSheets()[0];
  
  sheet.appendRow(data);
}