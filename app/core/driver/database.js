"use strict";
var assert = require('assert');
var database = (function () {
    function database(url, database) {
        this.MongoClient = require('mongodb').MongoClient;
        this.ObjectId = require('mongodb').ObjectID;
        this.url = url;
        this.database = database;
    }
    database.prototype.connect = function (callback) {
        this.MongoClient.connect(this.url, function (err, db) {
            assert.equal(null, err);
            callback(db, this);
            db.close();
        });
    };
    database.prototype.checkConnect = function () {
        this.connect(function () {
            console.log('connected');
        });
    };
    database.prototype.findItem = function (table, jsondata, callback) {
        this.connect(function (db) {
            var collection = db.collection(table);
            collection.find(jsondata).count(function (err, item) {
                assert.equal(null, err);
                callback(item);
            });
        });
    };
    return database;
}());
var dbname = "xoastress";
var url = "mongodb://192.168.0.102:27017/" + dbname;
var dbdriver;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbdriver = new database(url, dbname);
