const url = "http://127.0.0.1"


export function register(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/user/register/',true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", "register");
    var para = JSON.stringify(data)
    let code = "success"
    let userId = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            userId = json.data.userId
            code = "success"
        }
        else{
            code = "failed"
        }
    }
    if (code == 'success'){
        return{
            code: code,
            data:{
                userId: userId
            }
        }
    }
    else{
        return{
            code: code
        }
    }
}

export function login(data){
    setToken("123456")
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/login/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = "success"
    let msg = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            setToken(json.token)
            code = "success"
        }
        else{
            code = "failed"
            msg = json.msg
        }
    }
    return {
        code: code,
        msg: msg
    }
}

export function editRole(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/permission/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = "success"
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = "success"
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code
    }
}

export function editStatus(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/status/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = "success"
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = "success"
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code
    }
}

export function editPassword(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/changepassword/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = "success"
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = "success"
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code
    }
}

export function editName(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/changeinformation/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = "success"
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = "success"
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code
    }
}

export function findUser(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/search/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = "success"
    let json = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = "success"
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code,
        data: json.data
    }
}

export function getUserInfo(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/getuser/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = "success"
    let json = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = "success"
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code,
        data: json.data
    }
}

function setToken(token){
    var d = new Date();
    d.setTime(d.getTime()+(1800));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "token" + "=" + token + "; " + expires;
}

function getToken() {
    var name = "token=";
    var ca = document.cookie.split(';');
    for(var i = 0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length, c.length);
    }
    return "";
}
