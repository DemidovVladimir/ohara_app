app.controller('localTry',function($scope){
    $scope.collect = function(){
        var collection = $scope.localVal;
        if(typeof(Storage)!=="undefined")
        {
            var local = localStorage.getItem('output');
            if(local){
                $scope.out = local;
            }else{
                localStorage.setItem("output", $scope.localVal);
            }
        }
        else
        {
            $scope.out = 'Local collect is not supported';
        }
    }
               
               
               
               
               
               
               
               
   $scope.clear = function($scope){
       localStorage.removeItem('output');
   }

               generalFail=function(evt) {
                    $scope.pathLocal = "FAILURE: " + evt.code;
               }
               
               getFileSystem=function(fileSystem) {
                    fileSystem.root.getFile("/data.txt", {create: true, exclusive: false}, createSuccess, generalFail);
               }
               
               createSuccess=function(fileEntry) {
               
               var fileTransfer = new FileTransfer();
               var uri = encodeURI("http://www.greenjaydigital.com/data.txt");
               fileTransfer.download(
                                     uri,
                                     fileEntry.fullPath.toURL(),
                                     function(entry) {
                                        $scope.pathLocal+= "download complete: " + entry.fullPath
                                     },
                                     function(error) {
                                        $scope.pathLocal+= "download error source " + error.source;
                                        $scope.pathLocal+= "download error target " + error.target;
                                        $scope.pathLocal+= "upload error code" + error.code;
                                     }
                                     );
                    $scope.pathLocal = 'File created';
               },
               
               
               
               
               
               $scope.showPath = function(){
                    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, getFileSystem, generalFail);
               }
});

