function dataBaseEntry() {
  var workouts = SpreadsheetApp.getActiveSheet();
  var outputSheet = SpreadsheetApp.openById('1_nlcV1NPAiUZbmccK0DBWZBMnLP95-_4o6IL8x8bQIE');
  
  
  var dates = workouts.getRange(2, 2, 1, 7).getValues();
  var fixed = dates.join().split(',');
  Logger.log(dates)
  outputSheet.appendRow(dates[0])
  
  var selectedContent = workouts.getRange(3, 2, 5, 7).getValues();
  Logger.log(selectedContent.join()); 
  
  var fixed2 = selectedContent.join().split(',');
  
  Logger.log(selectedContent.length);
  for(var x=0;x<selectedContent.length;x++){
  
  
  Logger.log(selectedContent[x]); 
  
  outputSheet.appendRow(selectedContent[x]);
  }
  
  var range1 = outputSheet.getDataRange().getA1Notation();
  Logger.log(range1); 
  
  var cell1 = outputSheet.getRange(range1);
  cell1.setHorizontalAlignment("center");
  cell1.setWrap(true);
  outputSheet.getSheets()[0].autoResizeRows(1, 10)
  
 
}
