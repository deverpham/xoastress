declare let require;
import dbDriver from "../core/driver/database";
class model {
     validator = require('validator');
     middle;
     checkadminLogin(username,password,callback) {
       let data = {
         username : username,
         password : password
       };
       dbDriver.findItem("admin.users",data,callback);

   }

    }
let modelexport;
export default modelexport = new model();
