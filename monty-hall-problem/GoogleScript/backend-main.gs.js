function doPost(evnt)
{
    let response =  {
    "status":false
  };
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(evnt)
{
  run(evnt);  
  let response =  {
    "status":true
  };
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}


/////////////////////////
// Run //////////////////
/////////////////////////

function run(evnt)
{
  var timestamp = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy-MM-dd HH:mm:ss");

  var data = JSON.stringify(evnt.parameter);
  var data = JSON.parse(data);

  var name = data.name;
  var choice1 = data.choice1;
  var choice2 = data.choice2;
  var prize = data.prize;

  var data = [timestamp,name,choice1,choice2,prize];

  toSheet(data);
  
  Logger.log(evnt);
}

//////////////////////////////////
//////////////////////////////////




////////////////////////
// Save data to sheet //
////////////////////////

// Argument: data
// data format: [TimeStamp,Name of the Player,First Choice,Second Choice,PrizeDoor]

// Sheet ID = 10wfflJQ9xkiMtdCKicE5iP97lctwCgCeOJ78BGQfTrU
const sheetID = "10wfflJQ9xkiMtdCKicE5iP97lctwCgCeOJ78BGQfTrU";

function toSheet(data)
{
  var sheet = SpreadsheetApp.openById(sheetID);
  var sheetData = sheet.getSheets()[0];

  sheetData.appendRow(data);
}

///////////////////////////////////
///////////////////////////////////