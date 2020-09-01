
function getReport( ){


       var englishMarks=document.getElemenrById('textEnglish').value;
      var hindiMarks=document.getElemenrById('textEnglish').value;
      var mathsMarks=document.getElemenrById('textEnglish').value;
       var scienceMarks=document.getElemenrById('textEnglish').value;
 var totalMarks =englishMarks - (-hindiMarks) - (-mathsMarks) - (-scienceMarks);
    var averageMarks=totalMarks/4;
  document.getElementById('textTotalMarks').value=totalMarks;
 document.getElementById('textAvgMarks').value=averageMarks;
}
   