var sheetId = ''; // Participant Database Sheet - File ID 
var sheetName = '';
var cert_tmplt_id = ''; // Certificate Template Slide - File ID
var cert_folder = DriveApp.getFolderById(''); // Certificate Folder ID

function doGet()
{
  return ContentService.createTextOutput("Please Visit https://LightOfScience.org.in/").setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e)
{
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);  
  
  var data = JSON.parse(e.postData.contents);
  var timestamp = new Date();
  var name = data.name;
  var email = data.email;
  var phone = data.phone;
  var score = data.score;
  var institution = data.institution;
  var dept = data.dept;
  
  try {
    var storeData_status = storeData(timestamp, name, email, phone, score, institution, dept); // Storing Data to Spreadsheet
    var pdf_id = createCertificate(name, email, score, institution, dept, timestamp); // Generating Certificate PDF
    var email_status = sendEmail(email, pdf_id, name, score); //Sending Email
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'Successful!', 'Status': "" })).setMimeType(ContentService.MimeType.JSON);
  } 
  catch(error){
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'Failed!', 'Status': error })).setMimeType(ContentService.MimeType.JSON);
  } 
  finally {
    lock.releaseLock()
  }
}


function storeData(timestamp, name, email, phone, score, institution, dept)
{
  var spreadsheet = SpreadsheetApp.openById(sheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  sheet.appendRow([timestamp, name, email, phone, score, institution, dept]);
  return true;
}


function createCertificate(name, email, score, institute, dept, timestamp)
{
  var file_id = DriveApp.getFileById(cert_tmplt_id).makeCopy(email, cert_folder).getId(); // Copyting Templet to Cert_FOlder for further editing
  var slide = SlidesApp.openById(file_id).getSlides()[0]; //Opening Certificate Slide
  
  var txt_bx = slide.getPageElements()[0].asShape().getText(); // Certificate Statement
  txt_bx.setText("Data: "+name+" "+email+" "+score+" "+institute+" "+dept+" "+timestamp);
  SlidesApp.openById(file_id).saveAndClose(); // Save & Closing Active Slide
  
  var file_blob = DriveApp.getFileById(file_id).getAs('application/pdf').setName(email+'.pdf');// Generating Blob of Google Slide
  console.log(file_id);
  DriveApp.getFileById(file_id).setTrashed(true); // Deleting Google Slide
  file_id = DriveApp.createFile(file_blob).getId(); // Generating PDF of Google Slide
  console.log(file_id);
  var PDF_id = DriveApp.getFileById(file_id).makeCopy(email+'.pdf', cert_folder).getId(); // Copyting Newly generated PDF Certificate at Drive Root to Cert_Folder
  DriveApp.getFileById(file_id).setTrashed(true); // Deleting Drive Root PDF
 
  return PDF_id; //Returning PDF ID
}


function sendEmail(email, file_id, name, score)
{
  var message = "Thank you Mr./Ms./Mrs. "+name+" for participating in the COVID19 Awareness Quiz. You scored "+score+". Your participation certificate is included in the email. Please see the attachment.";
  var cert_pdf = DriveApp.getFileById(file_id);
  GmailApp.sendEmail(email, "COVID19 Quiz Participation Certificate", message, {
    attachments: [cert_pdf.getAs(MimeType.PDF)],
    name: 'Light Of Science',
    from: GmailApp.getAliases()[0],
    replyTo: "LightOfScience@outlook.com"
  });
  return true;
}


function tmp()
{
  
}