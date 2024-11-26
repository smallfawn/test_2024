如无特殊指定 接口全为 POST 请求

/user/info
Headers 带入 token
暂定传参{params:""}返回所有配置

/user/login
{username:"",password:""}
返回{code:0,msg:"登录成功",data:jwt 的 token}
返回{code:1,msg:"用户名或密码错误",data:null}
返回{code:2,msg:"系统错误",data:null}

/config
传入{ params: "" }
返回站点配置 站名字 站公告
{code:0,msg:"",data:{.....}}

/api/login/do
传入{username:"",password:""}
返回{code:0,msg:"排队成功",data:username}

/api/login/check
传入{username:""}
返回{code:0,msg:"登陆成功",data:pt_pin}
返回{code:1,msg:"排队中",data:''}
返回{code:2,msg:"登录失败",data:''}

/config/update
Headers 带入 token
传入要更改的数据例如{redisUrl:"",maxRetry:10}

/api/bind
{ username:xxxx,password:"",bind:{type:"QQ",params:xxxx } } WXPUSER QQ TG WX
