"use strict";
var model = (function () {
    function model() {
        this.MongoClient = require('mongodb').MongoClient;
        this.assert = require('assert');
        this.ObjectId = require('mongodb').ObjectID;
        this.database = "xoastress";
        this.url = "mongodb://localhost:27017/" + this.database;
    }
    model.prototype.getdata = function (db, callback) {
        var assert = this.assert;
        this.MongoClient.connect(this.url, function (err, db) {
            assert.equal(null, err);
            console.log('Connect ok');
            var collection = db.collection('langhai');
            collection.find({});
            db.close();
        });
    };
    ;
    return model;
}());
exports.__esModule = true;
exports["default"] = model = new model();
