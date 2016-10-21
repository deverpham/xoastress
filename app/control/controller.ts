let exec = require('exec');
import  model from '../model/model'
export default  function(app) {
    app.get('/',function(req,res) {
        let cssel = [
            'materialize',
            'style'
            ]
        let jsel = [
            'jquery.min',
            'style',
            'TweenMax.min'
            ]
            
            let langhai:menuType   = { 
                name : "Làng hài";
                render : "langhai/index"
                id  : 'langhai'
             }
            
        let menu = [
                langhai
            ]
       res.render('index',{
           cssel : cssel,
           jsel : jsel,
           menulist : menu
       }) ;
    });
    app.post('/api/langhai/getdata',function(req,res) {
        model.getdata(0,function() {
            
        });
        res.render('langhai/index')
    });
}

class menuType {
    name : langhai ;
    render  : string;
    id : string;
}
