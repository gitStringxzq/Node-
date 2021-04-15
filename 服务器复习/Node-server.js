//引入Node内置的http模块
let http = require('http')
//引入qs
let qs = require('querystring')
//创建一个服务对象
let server = http.createServer((request,response)=>{

    //获取客户端带来的urlencode编码形式的参数
    let params = request.url.split('?')[1]//通过split方法筛选 返回的是一个数组 /s是[0] 则后面的就是真正的信息[1]
    console.log(params)
    //把urlencode编码数据封装成对象
    let objParams = qs.parse(params)
    console.log(objParams)
    //最后进行结构赋值
    let {name,age} = objParams;


    response.setHeader('content-type','text/html;charset=utf-8')
    response.end(`我的名字是${name},年龄是${age}`)
})

//绑定服务器监听
server.listen(3000,(err)=>{
    if (err){
        console.log('启动失败',err)
    }else{
        console.log('启动成功')
    }
})