// const loginName=document.getElementById('loginName');
// const loginPsd=document.getElementById('loginPsd');
// function ZhuCe(){  
//     if(NoKong()){
//         var arr = [];
//         if(localStorage.user){
//             arr = eval(localStorage.user);
//             for(e in arr){
//                 if(loginName.value==arr[e].loginName){
//                     alert('该账号已被注册');
//                     clear();
//                     return;
//                 }
//             }
//         }

//         var user = {
//             loginName:loginName.value,
//             loginPsd:loginPsd.value
//         };
//         arr.push(user);
//         localStorage.user=JSON.stringify(arr);
//         alert('注册成功');
//         clear();
//     }
// }

// function clear(){
//     loginName.innerHTML='';
//     loginPsd.innerHTML='';
// }
// function NoKong(){
//     if(loginName.value==""){
//         alert('用户名不能为空');
//         return false;
//     }else if(loginPsd.value==""){
//         alert('密码不能为空');
//         return false;
//     }
//     return true;
// }
// function login(){
//     if(NoKong()){
//         if(localStorage.user){
//         arr = eval(localStorage.user);//获取localStoragevar 
//         k = 0;
//         for(e in arr){
//             if(loginName.value==arr[e].loginName){
//                 if(loginPsd.value==arr[e].loginPsd){
//                     alert('登录成功');
//                     window.open("index.html");
//                     clear();
//                     k = 0;
//                     return "index.html";
//                 }else{
//                     alert('密码错误');
//                     window.open("login.html");
//                     clear();
//                     k = 0;
//                     return 'login.html';
//                 }
//             }else{ 
//                 k = 1;
//             }
//         }
//         if(k==1){
//             alert('用户名不存在');
//             clear();
//         }
//     }else{
//         alert('用户名不存在');
//         clear();
//     }
// }
// }
import ajax from '/js/ajax.js'

// 登录

var userlogin = document.querySelector('#account')
var button=document.querySelector('.loginButton')
    
button.onclick=function(){
    var user=new FormData(userlogin)
    ajax({
        url:"http://localhost:8080/login",
        method:"post",
        data:{
            username:user.get("username"),
            password:user.get("password")
        },
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        success:function(res){
            if(res == "1"){
            confirm("登录成功",res)
            window.location.href ='../html/index.html'
        }
        },
        error:function(err){
            confirm("账号或密码错误",err)
    }
    
    })
}

// 注册


var regist = document.querySelector('#register')
var button1=document.querySelector('.registerSub')
button1.onclick=function(){
    var user=new FormData(regist)
    ajax({
        url:"http://localhost:8080/register",
        method:"post",
        data:{
            username:user.get("username"),
            password:user.get("password")
        },
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        success:function(res){
            if(res == 1){
            alert("注册成功",res)
            }
            window.location.href ='../html/login.html'
        },
        error:function(err){
            confirm("该用户名已被使用",err)
    }
    
})
}


