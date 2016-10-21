 class config {
    port:number =process.env.PORT;
    host:number =process.env.IP;
    viewPath:string = './app/views';
    viewEngine:string ='pug';
    publicFolder:string = '/public';
}
export default config = new config();