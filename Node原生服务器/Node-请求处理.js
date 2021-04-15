//引入Node内置的http模块
let http = require('http')
//引入的qs是一个对象，该对象身上有者很多有用的方法，最具代表性的parse()
let qs = require('querystring')
//创建一个服务对象
let server = http.createServer(function (request,response){


    //获取客户端挈带来的urlencode编码形式的参数
    let params = request.url.split('?')[1]
    console.log(params);
    // let objParams = qs.parse(params)
    // console.log(objParams)

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