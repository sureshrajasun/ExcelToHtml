(function() {
 var app = angular.module('myApp', []);
 app.controller('MyController', ['$scope', myController]);

 function myController($scope) {

  $scope.uploadExcel = function() {
   var myFile = document.getElementById('file');
   var input = myFile;
   var reader = new FileReader();

   //console.log(input.files[0]);
   reader.onload = function() {
    var fileData = reader.result;
    var workbook = XLSX.read(fileData, {
     type: 'binary'
    });
	var cont = ''	;	
    workbook.SheetNames.forEach(function(sheetName) {
		
     var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
     excelJsonObj = rowObject;

     
	var fileName = input.files[0].name.split('.')[0];
	 
	for (var i = 0; i < excelJsonObj.length; i++) {
		var data = excelJsonObj[i];
			 
		if(sheetName === 'Sheet1'){
			cont = '<div class="container-fluid"><div class="wrapper"><div id="content"><h1 class="p-3 mb-2 bg-secondary text-white">'+fileName+'</h1><h2>Overview</h2><p class="text-left" '+data.Overview+'</P><table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Method</th><th scope="col">URI</th><th scope="col">Service Type</th><th scope="col">Provider Org Code</th></tr></thead><tbody><tr><td>'+data.Method+'</td><td>'+data.URI+'</td><td>'+data.ServiceType+'</td><td>'+data.ProviderOrgCode+'</td></tr></tbody></table><h2>Input Definition</h2><table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Field</th><th scope="col">Data Type(size)</th><th scope="col">Mandatory/Optional</th><th scope="col">Field description</th></tr></thead><tbody><tr><td>'+data.Field+'</td><td>'+data.DataType+'</td><td>'+data.MandatoryOptional+'</td><td>'+data.FieldDescription+'</td></tr></tbody></table><h2>Request Sample</h2><div class="card bg-light mb-3"><div class="card-body">'+data.RequestSample+'</div></div><h2>Output Definition</h2><table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Field</th><th scope="col">Field Description</th><th scope="col">Data Type</th><th scope="col">Applicable</th></tr></thead><tbody>';
		
		}
		if(sheetName === 'Sheet2'){
			cont = cont + '<tr><td>'+data.Field+'</td><td>'+data.FieldDescription+'</td><td>'+data.DataType+'</td><td>'+data.Applicable+'</td></tr>';
			
			if(excelJsonObj.length == i+1){
				cont = cont + '</tbody></table>';
			}
		}
		
		if(sheetName === 'Sheet3'){
			cont = cont + '<h2>Response Sample</h2><div class="card bg-light mb-3"><div class="card-body">'+data.Response+'</div></div>';
		
		}
	}
	
    });
	
	$(".container").append(cont + '</div></div></div>');
	//$(".inputContainer").hide();
	
   };
    
	console.log("Total Files"+ input.files.length);
	
   //for(var j=0; j < input.files.length; j++){
	reader.readAsBinaryString(input.files[0]);
   //}
  };
 }
})();