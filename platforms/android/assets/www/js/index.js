document.addEventListener("deviceready", onDeviceReady, false);

var root;
var testZone = document.getElementById('test-zone');


function onDeviceReady(){
    // Note: The file system has been prefixed as of Google Chrome 12:
    window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onInitFs, errorHandler);
}


function getFileSuccess(fe){
    fe.file(gotFile,errorHandler);
}

function gotFile(file){
    var reader = new FileReader();
    reader.onloadend = function(evt){
        testZone.innerHTML = "<img src="+ evt.target.result+">";
    };
    reader.readAsDataURL(file);
}

function onInitFs(fs) {
    
    fs.root.getFile('img/box.jpg',null, getFileSuccess, errorHandler);
    
    var fileURL = "cdvfile://localhost/persistent/img/box.jpg";
    
    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://oharapub.kz/img/box.jpg");
    
    fileTransfer.download(
                          uri,
                          fileURL,
                          function(entry) {
                          testZone.innerHTML += "download complete: " + entry.fullPath;
                          },
                          function(error) {
                          testZone.innerHTML += "download error source " + error.source;
                          testZone.innerHTML += "download error target " + error.target;
                          testZone.innerHTML += "upload error code" + error.code;
                          },
                          false,
                          {
                          headers: {
                          "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                          }
                          }
                          );
}


function errorHandler(e) {
    var msg = '';
    
    switch (e.code) {
        case FileError.QUOTA_EXCEEDED_ERR:
            msg = 'QUOTA_EXCEEDED_ERR';
            break;
        case FileError.NOT_FOUND_ERR:
            msg = 'NOT_FOUND_ERR';
            break;
        case FileError.SECURITY_ERR:
            msg = 'SECURITY_ERR';
            break;
        case FileError.INVALID_MODIFICATION_ERR:
            msg = 'INVALID_MODIFICATION_ERR';
            break;
        case FileError.INVALID_STATE_ERR:
            msg = 'INVALID_STATE_ERR';
            break;
        default:
            msg = 'Unknown Error';
            break;
    };
    
    alert('Error: ' + msg);
}

