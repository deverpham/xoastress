"use strict";
var model = (function () {
    function model() {
        this.MongoClient = require('mongodb').MongoClient;
        this.assert = require('assert');
        this.ObjectId = require('mongodb').ObjectID;
        this.database = "xoastress";
        this.url = "mongodb://192.168.0.102:27017/" + this.database;
        this.validator = require('validator');
    }
    model.prototype.getdata = function (db, callback) {
        var assert = this.assert;
        this.MongoClient.connect(this.url, function (err, db) {
            assert.equal(null, err);
            console.log('Connect ok');
            var collection = db.collection('langhai');
            collection.insert({
                id: " 00001",
                name: " google.com"
            });
            collection.find({});
            db.close();
        });
    };
    model.prototype.checkadminLogin = function (username, password) {
        var tool = this.validator;
        if ((tool.isEmpty(username) || tool.isEmpty(password)))
            return false;
        else {
            console.log('ok');
        }
    };
    return model;
}());
var modelexport;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = modelexport = new model();
