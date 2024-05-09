import ajax from '../js/ajax.js'

// 基础信息修改
var creat = document.querySelector('form')
var button=document.querySelector('.button')

button.onclick=function(){
    var user=new FormData(creat)
    // console.log(user.get("username"))
    ajax({
        url:"http://localhost:8080/CreationUpdate",
        method:"post",
        data:{
            creator:user.get("creator"),
            title:user.get("title"),
            time:user.get("time"),
        },
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
})
    confirm("修改完成")
    
}