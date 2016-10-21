declare let require;
class model {
     MongoClient =require('mongodb').MongoClient;
     assert = require('assert');
     ObjectId  =require('mongodb').ObjectID;
     database = "xoastress";
     url = "mongodb://192.168.0.102:27017/" + this.database;
     validator = require('validator');
     getdata(db,callback) {
          let assert = this.assert;
           this.MongoClient.connect(this.url,function(err,db) {
           assert.equal(null,err);
           console.log('Connect ok');
           let collection = db.collection('langhai');
           collection.insert( {
             id : " 00001",
             name :" google.com"
           });
           collection.find({});
           db.close();
         })

        }
     checkadminLogin(username,password) {
        let tool =this.validator;
          if((tool.isEmpty(username) || tool.isEmpty(password))) return false;
          else {
            console.log('ok');
          }
     }
    }
let modelexport;
export default modelexport = new model();
