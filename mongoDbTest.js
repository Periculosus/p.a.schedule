var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testongo";
window.inputVar = 0;

$("#testInput").keyup(function () {
    inputVar = $(this).val();
    // console.log("input is " + inputVar);
});
// var inputVar = "sjst-dfgdhf";

var myobj = {
    _id: inputVar,
    name: "Иосиф Борода",
    array1: [
        "Programming",
        "Administrating",
        "Abracadabring"
    ],
    objects1: [{
        obj1: "info 1",
        obj2: "info 2",
        obj3: "info 3"
    }]
};

$("#writeDocIntoDB").click(function () {
    // window.id = $("#testInput").val();

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        db.collection("teachers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            // console.log("Operation complete");
        });

        // db.collection("teachers").updateOne(
        //     { _id: 48 },
        //     { objects1: {obj7: "info 7"} }
        // );

        db.close();
    });

});