declare let require;
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
                name : "Làng hài",
                render : "langhai/index",
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
        res.render('langhai/index')
    });
    app.get('/backdoor',function(req,res) {
      let cssel = [
        'materialize',
        'admin/index'
      ];
      let jsel = [
        'angular.min',
        'admin/index'
      ];
      res.render('admin/index', {
        cssel : cssel,
        jsel :jsel
      });
    });
    app.post('/api/admin/login',function(req,res){
       model.checkadminLogin(req.body.username,req.body.password,function(item){
         if(item > 0) item =true;
         else item =false;
         res.render('admin/checklogin',{ isLogin :item})
       })
    })
    app.get('/backdoor/index',function(req,res) {
      res.send('hello world');
    })
}

class menuType {
    name : string ;
    render  : string;
    id : string;
}
