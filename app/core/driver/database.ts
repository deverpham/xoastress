declare let require;
let assert = require('assert');
class database {
  MongoClient =require('mongodb').MongoClient;
  ObjectId  =require('mongodb').ObjectID;
  url: string;
  middle:number;
  database : string;
  constructor(url,database) {
    this.url = url;
    this.database =database;
  }
  connect(callback) {

    this.MongoClient.connect(this.url,function(err,db) {
      assert.equal(null,err);
      //connected
      callback(db,this);
      db.close();
    })
  }
  checkConnect() {
    this.connect(function() {
      console.log('connected');
    })
  }
  findItem(table:string,jsondata:Object,callback) {
    this.connect(function(db) {
        let collection = db.collection(table);
        collection.find(jsondata).count(function(err,item) {
          assert.equal(null,err);
          callback(item);
        });
    });

  }
}
let dbname:string = "xoastress";
let url = "mongodb://192.168.0.102:27017/" + dbname;
let dbdriver;
export default  dbdriver = new database(url,dbname);
