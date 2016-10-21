declare let process;
 class config {
    port:number =80;
    host:number =process.env.IP;
    viewPath:string = './app/views';
    viewEngine:string ='pug';
    publicFolder:string = '/public';
};
let configel;
export default  configel = new config();
