app.controller('total',function($scope,$resource){
    $('.round').arctext({radius: 200});

    $scope.sync = function(){
        localStorage.removeItem('info');
        localStorage.removeItem('cats');
        var categories = [];
        var typesObj = [];
        var photos = [];
        var todo = $resource('http://oharapub.kz/getMenuTotal');
        var info = todo.query(function(){
            var toLocInfo = JSON.stringify(info);
            localStorage.setItem('info',toLocInfo);
            for(var i=0; i<info.length;i++){

                    if(photos.indexOf(info[i].dish_photo)==-1){
                        photos.push(info[i].dish_photo);

                    //FileTransfer
                        var fileURL = 'cdvfile://localhost/persistent/'+info[i].dish_photo;
                        var fileTransfer = new FileTransfer();
                        var uri = encodeURI("http://oharapub.kz/img/"+info[i].dish_photo);

                        fileTransfer.download(
                            uri,
                            fileURL,
                            function(entry) {
                                console.log("download complete: " + entry.toURL());
                            },
                            function(error) {
                                console.log("download error source " + error.source);
                                console.log("download error target " + error.target);
                                console.log("upload error code" + error.code);
                            },
                            false,
                            {
                                headers: {
                                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                                }
                            }
                        );
                        //FileTransferEnd

                    }



                var type = {};
                type.type = info[i].dish_type;
                type.category = info[i].dish_category;

                if(categories.indexOf(info[i].dish_category)==-1){
                    categories.push(info[i].dish_category);
                    typesObj.push(type);
                }


            }
            var toLocCats = JSON.stringify(typesObj);
            localStorage.setItem('cats',toLocCats);
        });





        }


    $scope.cats = JSON.parse(localStorage.getItem('cats'));
    $scope.info = JSON.parse(localStorage.getItem('info'));


});

