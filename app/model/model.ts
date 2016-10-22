declare let require;
import dbDriver from "../core/driver/database";
class model {
     validator = require('validator');
     checkadminLogin(username,password) {
        let tool =this.validator;
          if((tool.isEmpty(username) || tool.isEmpty(password))) return false;
          else {
              dbDriver.findItem('admin.users',{
                username : username,
                password : password
              });
          }
     }
    }
let modelexport;
export default modelexport = new model();
