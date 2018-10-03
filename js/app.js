(function() {
 var app = angular.module('myApp', []);
 app.controller('MyController', ['$scope', myController]);

 function myController($scope) {

  $scope.uploadExcel = function() {
   var myFile = document.getElementById('file');
   var input = myFile;
   var reader = new FileReader();
   reader.onload = function() {
    var fileData = reader.result;
    var workbook = XLSX.read(fileData, {
     type: 'binary'
    });
    workbook.SheetNames.forEach(function(sheetName) {
     var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
     excelJsonObj = rowObject;
    });


    for (var i = 0; i < excelJsonObj.length; i++) {
     var data = excelJsonObj[i];
     $(".container").append("  <table>              <tr>                  <td>                      <h2> " + data.Heading + " </h2> </td>              </tr>              <tr>                  <td> " + data.Explanation + "</td>              </tr>              <tr>                  <td style='background-color: #bde9ba; font-weight:bold'> " + data.Section1 + "</td>              </tr>              <tr>                  <td> " + data.Description1 + "</td>              </tr>              <tr>                  <td>                      <table border=1>                          <tr>                              <td> " + data.Row1 + " </td>                          </tr>                          <tr>                              <td> " + data.Row2 + " </td>                          </tr>                          <tr>                              <td> " + data.Row3 + " </td>                          </tr>                      </table>                  </td>              </tr>              <tr>                  <td>                      <h3> " + data.Section2 + "</h3></td>              </tr>              <tr>                  <td> " + data.Description2 + "</td>              </tr>         <tr> <td> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </td></tr> </table> ");
    }
   };
   reader.readAsBinaryString(input.files[0]);
  };
 }
})();