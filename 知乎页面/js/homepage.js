var load = new XMLHttpRequest()
var res
load.open("post","http://localhost:8080/Info")
load.send()
load.onload =function(){
        if(load.status===200){
            console.log(JSON.parse(load.responseText))
            res = JSON.parse(load.responseText)
            document.querySelector('.personName').innerHTML = 
            '<h1>欢迎你，' + res[0].name + '</h1>'
    }
}

var load1 = new XMLHttpRequest()
load1.open("post","http://localhost:8080/Info")
load1.send()
load1.onload =function(){
        if(load1.status===200){
            console.log(JSON.parse(load1.responseText))
            res = JSON.parse(load1.responseText)
            document.querySelector('.insterestedCnt').innerHTML = 
            '<span>' + res[0].interest + '</span>'
    }
}

var load2 = new XMLHttpRequest()
load2.open("post","http://localhost:8080/Creation")
load2.send()
load2.onload =function(){
        if(load2.status===200){
            console.log(JSON.parse(load2.responseText))
            res = JSON.parse(load2.responseText)
            document.querySelector('.csmall').innerHTML = 
            '<li>作者：' + res[0].creator + 
            '</li><li>标题：' + res[0].title+ 
            '</li><li>创作日期：' + res[0].time + '</li>'
    }
}