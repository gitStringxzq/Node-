//引入Node内置的http模块
let http = require('http')

//创建一个服务对象
let server = http.createServer(function (request,response){

    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('<h1>徐某人的第一个服务器</h1>')
})

server.listen(3000,function (err){
    if (err){
        console.log('服务器启动失败',err);
    }else{
        console.log('启动成功')
    }
})