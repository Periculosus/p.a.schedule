var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testongo";

$("#testInput").keyup(function () {
    window.myobj = {
        _id: parseInt((Math.random() * 1000000).toFixed(0)),
        name: $(this).val(),
        array1: [
            "Programming",
            "Administrating",
            "Abracadabring"
        ],
        objects1: [
            {
                obj1: "info 1",
                obj2: "info 2",
                obj3: "info 3"
            }
        ]
    };
});

$("#writeDocIntoDB").click(function () {

    MongoClient.connect(url, function(err, db) {
        if (err) throw alert(err);

        db.collection("teachers").insertOne(myobj, function(err, res) {
            if (err) throw alert(err);
            // console.log("Operation complete");
        });

        // db.collection("teachers").updateOne(
        //     { _id: 48 },
        //     { objects1: {obj7: "info 7"} }
        // );

        db.close();
    });

});