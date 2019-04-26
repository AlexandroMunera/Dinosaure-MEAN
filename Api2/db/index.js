const mongo = require("./connect");
const { DB_NAME } = require("./config");
const ObjectId = require('mongodb').ObjectID;

module.exports = {
    getDinos: function() {
        const db = mongo.instance().db(DB_NAME);
        const dinos = db.collection("dinos").find({}).toArray();
        console.log('Entre al endpoint dinos', dinos);
        return dinos;
    },
    getDinosByName: function(name) {
        const db = mongo.instance().db(DB_NAME);
        const dino = db.collection("dinos").find({
            name:name
        }).toArray();
        return dino;
    },
    getDinosByAgeRange: function(lower = 0, higher = 1000) {
        const db = mongo.instance().db(DB_NAME);
        const dinos = db.collection("dinos").find({
            age: {
                $gte: Number(lower),
                $lte: Number(higher)
            }
        }).toArray();
        return dinos;
    },
    updateDinoByName: function(dino){
        const db = mongo.instance().db(DB_NAME);

        const res = db.collection("dinos").updateOne(
            { "_id" : ObjectId(dino._id) },
            { $set: { "name" : dino.name , "age": dino.age, "famille": dino.famille, "race": dino.race, "nourriture": dino.nourriture } }
         );

        return res;
    },
    createDino: function(name){
        const db = mongo.instance().db(DB_NAME);

        console.log("Entre a createDino con name",name);

        const dino = db.collection("dinos").insertOne(
            { "name" : name }
         );

        return dino;
    },
    deleteDino: function(id){
        const db = mongo.instance().db(DB_NAME);

        const dino = db.collection("dinos").deleteOne(
            { "_id" : ObjectId(id) },
         );

        return dino;
    },

}
