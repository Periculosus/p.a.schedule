const remote = require('electron').remote;
const path = require('path');
const url = require('url');
const BrowserWindow = remote.BrowserWindow;

$("#test").click(function () {
    // var car = $("#selectMenu").val().toString();
    // if(car == "saab"){
    //     alert("its works - car is " + car);
    // }
    // else {
    //     alert("car isnt saab - coz car is " + car);
    // }

    var win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '1students.html')
    }));

});