declare let require;
class model {
     MongoClient =require('mongodb').MongoClient;
     assert = require('assert');
     ObjectId  =require('mongodb').ObjectID;
     database = "xoastress";
     url = "mongodb://localhost:27017/" + this.database;
     getdata(db,callback) {
          let assert = this.assert;
           this.MongoClient.connect(this.url,function(err,db) {
           assert.equal(null,err);
           console.log('Connect ok');
           let collection = db.collection('langhai');
           collection.find({});
           db.close();
          }

        });
        
    }
}
export default model = new model();