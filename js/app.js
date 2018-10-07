(function() {
    var app = angular.module('myApp', []);
    app.controller('MyController', ['$scope', myController]);

    function myController($scope) {

        $scope.getExcel = function() {

            var myFile = document.getElementById('file');

            for (k = 0; k < myFile.files.length; k++) {
                $scope.uploadExcel(myFile.files[k]);
            }

            $(".inputContainer").hide();

        };

        $scope.uploadExcel = function(input) {

            var reader = new FileReader();

            reader.onload = function() {
                var fileData = reader.result;
                var workbook = XLSX.read(fileData, {
                    type: 'binary'
                });
                var cont = '';
				var sideNav = '';
                workbook.SheetNames.forEach(function(sheetName) {
                    //console.log(workbook);

                    var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                    excelJsonObj = rowObject;


                    var fileName = input.name.split('.')[0];

                    for (var i = 0; i < excelJsonObj.length; i++) {
                        var data = excelJsonObj[i];
                        //console.log(data);


                        if (data.Col1 == 'Overview') {
                            data = excelJsonObj[++i];
                            console.log(data.Col1);
							
							sideNav = sideNav + '<a href="#'+sheetName.replace(/ /g,'')+'">'+sheetName+'</a>';

                            cont = cont + '<div class="container-fluid"><div class="wrapper"><div id="content"><h1 id='+sheetName.replace(/ /g,'')+' class="p-3 mb-2 bg-secondary text-white">' + sheetName + '</h1><h2>Overview</h2><p class="text-left" > ' + data.Col1 + '</p>';
                        }

                        if (data.Col1 === 'API') {

                            data = excelJsonObj[++i];

                            cont = cont + '<table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Method</th><th scope="col">URI</th><th scope="col">Service Type</th><th scope="col">Provider Org Code</th></tr></thead><tbody>';

                            do {
                                cont = cont + '<tr><td>' + data.Col1 + '</td><td>' + data.Col2 + '</td><td>' + data.Col3 + '</td><td>' + data.Col4 + '</td></tr>'
                                data = excelJsonObj[++i];
                            } while (data.Col1 != 'Request');

                            cont = cont + '</tbody></table>';
                        }

                        if (data.Col1 === 'Request') {

                            data = excelJsonObj[++i];

                            cont = cont + '<h2>Input Definition</h2><table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Field</th><th scope="col">Data Type(size)</th><th scope="col">Mandatory/Optional</th><th scope="col">Field description</th></tr></thead><tbody>';

                            do {
                                cont = cont + '<tr><td>' + data.Col1 + '</td><td>' + data.Col2 + '</td><td>' + data.Col3 + '</td><td>' + data.Col3 + '</td></tr>'
                                data = excelJsonObj[++i];
                            } while (data.Col1 != 'RequestSample');

                            cont = cont + '</tbody></table>';

                        }

                        if (data.Col1 === 'RequestSample') {

                            data = excelJsonObj[++i];
                            cont = cont + '<h2>Request Sample</h2><div class="card bg-light mb-3"><div class="card-body">' + data.Col1 + '</div></div>';
                            data = excelJsonObj[++i];

                        }


                        if (data.Col1 === 'Response') {

                            data = excelJsonObj[++i];

                            cont = cont + '<h2>Output Definition</h2><table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Field</th><th scope="col">Field Description</th><th scope="col">Data Type</th><th scope="col">Applicable</th></tr></thead><tbody>';

                            do {
                                cont = cont + '<tr><td>' + data.Col1 + '</td><td>' + data.Col2 + '</td><td>' + data.Col3 + '</td><td>' + data.Col4 + '</td></tr>'
                                data = excelJsonObj[++i];
                            } while (data.Col1 != 'ResponseSample');
                            (function() {
                                var app = angular.module('myApp', []);
                                app.controller('MyController', ['$scope', myController]);

                                function myController($scope) {

                                    $scope.getExcel = function() {

                                        var myFile = document.getElementById('file');

                                        for (k = 0; k < myFile.files.length; k++) {
                                            $scope.uploadExcel(myFile.files[k]);
                                        }

                                        $(".inputContainer").hide();

                                    };

                                    $scope.uploadExcel = function(input) {

                                        var reader = new FileReader();

                                        reader.onload = function() {
                                            var fileData = reader.result;
                                            var workbook = XLSX.read(fileData, {
                                                type: 'binary'
                                            });
                                            var cont = '';
                                            workbook.SheetNames.forEach(function(sheetName) {
                                                //console.log(workbook);

                                                var rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                                                excelJsonObj = rowObject;


                                                var fileName = input.name.split('.')[0];

                                                for (var i = 0; i < excelJsonObj.length; i++) {
                                                    var data = excelJsonObj[i];
                                                    //console.log(data);


                                                    if (data.Col1 == 'Overview') {
                                                        data = excelJsonObj[++i];
                                                        //console.log(data.Col1);

                                                        cont = cont + '<div class="container-fluid"><div class="wrapper"><div id="content"><h1 class="p-3 mb-2 bg-secondary text-white">' + fileName + '</h1><h2>Overview</h2><p class="text-left" ' + data.Col1 + '</P>';
                                                    }

                                                    if (data.Col1 === 'API') {

                                                        data = excelJsonObj[++i];

                                                        cont = cont + '<table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Method</th><th scope="col">URI</th><th scope="col">Service Type</th><th scope="col">Provider Org Code</th></tr></thead><tbody>';

                                                        do {
                                                            cont = cont + '<tr><td>' + data.Col1 + '</td><td>' + data.Col2 + '</td><td>' + data.Col3 + '</td><td>' + data.Col4 + '</td></tr>'
                                                            data = excelJsonObj[++i];
                                                        } while (data.Col1 != 'Request');

                                                        cont = cont + '</tbody></table>';
                                                    }

                                                    if (data.Col1 === 'Request') {

                                                        data = excelJsonObj[++i];

                                                        cont = cont + '<h2>Input Definition</h2><table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Field</th><th scope="col">Data Type(size)</th><th scope="col">Mandatory/Optional</th><th scope="col">Field description</th></tr></thead><tbody>';

                                                        do {
                                                            cont = cont + '<tr><td>' + data.Col1 + '</td><td>' + data.Col2 + '</td><td>' + data.Col3 + '</td><td>' + data.Col3 + '</td></tr>'
                                                            data = excelJsonObj[++i];
                                                        } while (data.Col1 != 'RequestSample');

                                                        cont = cont + '</tbody></table>';

                                                    }

                                                    if (data.Col1 === 'RequestSample') {

                                                        data = excelJsonObj[++i];
                                                        cont = cont + '<h2>Request Sample</h2><div class="card bg-light mb-3"><div class="card-body">' + data.Col1 + '</div></div>';
                                                        data = excelJsonObj[++i];

                                                    }


                                                    if (data.Col1 === 'Response') {

                                                        data = excelJsonObj[++i];

                                                        cont = cont + '<h2>Output Definition</h2><table class="table table-striped table-bordered"><thead class="thead-dark"><tr><th scope="col">Field</th><th scope="col">Field Description</th><th scope="col">Data Type</th><th scope="col">Applicable</th></tr></thead><tbody>';

                                                        do {
                                                            cont = cont + '<tr><td>' + data.Col1 + '</td><td>' + data.Col2 + '</td><td>' + data.Col3 + '</td><td>' + data.Col4 + '</td></tr>'
                                                            data = excelJsonObj[++i];
                                                        } while (data.Col1 != 'ResponseSample');

                                                        cont = cont + '</tbody></table>';

                                                    }

                                                    if (data.Col1 === 'ResponseSample') {
                                                        data = excelJsonObj[++i];
                                                        cont = cont + '<h2>Response Sample</h2><div class="card bg-light mb-3"><div class="card-body">' + data.Col1 + '</div></div>';

                                                    }

                                                    cont = cont + '</div></div></div>';
                                                }

                                            });

                                            $(".container").append(cont);

                                        };

                                        reader.readAsBinaryString(input);
                                    };
                                }

                            })();

                            cont = cont + '</tbody></table>';

                        }

                        if (data.Col1 === 'ResponseSample') {
                            data = excelJsonObj[++i];
                            cont = cont + '<h2>Response Sample</h2><div class="card bg-light mb-3"><div class="card-body">' + data.Col1 + '</div></div>';

                        }

                        cont = cont + '</div></div></div>';
                    }

                });

                $(".container").append(cont);
				$(".sidenav").append(sideNav);

            };

            reader.readAsBinaryString(input);
        };
    }

})();