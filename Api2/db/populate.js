const mongo = require("./connect");
const argv = require('yargs').argv;
const dinosData = require("../resources/dinos");

if (argv.fill) {
    mongo.connect()
        .then(db=>{
            db.collection("dinos").insertMany(dinosData, (err, result)=>{
                if (err) throw err;
                console.log("Los datos han sido insertados satisfactoriamente!");
                mongo.disconnect();
            });
        })
    return;
}

if (argv.clear) {
    mongo.connect()
        .then(db=>{
            db.collection("dinos").drop((err, result)=>{
                if (err) throw err;
                console.log("La colección se ha descartado satisfactoriamente!");
                mongo.disconnect();
            });
        })
    return;
}