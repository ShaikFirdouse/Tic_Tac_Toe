let currentplayer='O'
let checkgame="winning"
let f1=true
let f2=true
let f3=true
let f4=true
let f5=true
let f6=true
let f7=true
let f8=true
let f9=true
const winner= [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]]
function click1(){
    if(checkgame=="winning" && f1==true){
        if(currentplayer=='O'){
            document.getElementById('cell1').innerHTML="X"
            currentplayer='X'
            f1=false
        }
        else{
            document.getElementById('cell1').innerHTML="O"
            currentplayer='O'
            f1=false
        }
        checkwin()
    }
    
}
function click2(){
    if(checkgame=="winning" && f2==true){
        if(currentplayer=='O'){
            document.getElementById('cell2').innerHTML="X"
            currentplayer='X'
            f2=false
        }
        else{
            document.getElementById('cell2').innerHTML="O"
            currentplayer='O'
            f2=false
        }
        checkwin()
    }
}
function click3(){
    if(checkgame=="winning" && f3==true){
        if(currentplayer=='O'){
            document.getElementById('cell3').innerHTML="X"
            currentplayer='X'
            f3=false
        }
        else{
            document.getElementById('cell3').innerHTML="O"
            currentplayer='O'
            f3=false
        }
        checkwin()
    }
}
function click4(){
    if(checkgame=="winning" && f4==true){
        if(currentplayer=='O'){
            document.getElementById('cell4').innerHTML="X"
            currentplayer='X'
            f4=false
        }
        else{
            document.getElementById('cell4').innerHTML="O"
            currentplayer='O'
            f4=false
        }
        checkwin()
    }
}
function click5(){
    if(checkgame=="winning" && f5==true){
        if(currentplayer=='O'){
            document.getElementById('cell5').innerHTML="X"
            currentplayer='X'
            f5=false
        }
        else{
            document.getElementById('cell5').innerHTML="O"
            currentplayer='O'
            f5=false
        }
        checkwin()
    }
}
function click6(){
    if(checkgame=="winning" && f6==true){
        if(currentplayer=='O'){
            document.getElementById('cell6').innerHTML="X"
            currentplayer='X'
            f6=false
        }
        else{
            document.getElementById('cell6').innerHTML="O"
            currentplayer='O'
            f6=false
        }
        checkwin()
    }
}
function click7(){
    if(checkgame=="winning" && f7==true){
        if(currentplayer=='O'){
            document.getElementById('cell7').innerHTML="X"
            currentplayer='X'
            f7=false
        }
        else{
            document.getElementById('cell7').innerHTML="O"
            currentplayer='O'
            f7=false
        }
        checkwin()
    }
}
function click8(){
    if(checkgame=="winning" && f8==true){
        if(currentplayer=='O'){
            document.getElementById('cell8').innerHTML="X"
            currentplayer='X'
            f8=false
        }
        else{
            document.getElementById('cell8').innerHTML="O"
            currentplayer='O'
            f8=false
        }
        checkwin()
    }
}
function click9(){
    if(checkgame=="winning" && f9==true){
        if(currentplayer=='O'){
            document.getElementById('cell9').innerHTML="X"
            currentplayer='X'
            f9=false
        }
        else{
            document.getElementById('cell9').innerHTML="O"
            currentplayer='O'
            f9=false
        }
        checkwin()
    }
}


function ResetAll(){
       window.location="index.html"
}
function checkwin(){
    let a=document.getElementById('cell1').innerHTML
    let b=document.getElementById('cell2').innerHTML
    let c=document.getElementById('cell3').innerHTML
    let d=document.getElementById('cell4').innerHTML
    let e=document.getElementById('cell5').innerHTML
    let f=document.getElementById('cell6').innerHTML
    let g=document.getElementById('cell7').innerHTML
    let h=document.getElementById('cell8').innerHTML
    let i=document.getElementById('cell9').innerHTML

    if(currentplayer==a&& currentplayer==b&& currentplayer==c){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+" is winner"
        checkgame="notworking"
    }else if(currentplayer==d&& currentplayer==e&& currentplayer==f){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+" is winner"
         checkgame="notworking"
    }else if(currentplayer==g&& currentplayer==h&& currentplayer==i){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+" is winner"
         checkgame="notworking"
    }else if(currentplayer==a&& currentplayer==d && currentplayer==e){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+" is winner"
         checkgame="notworking"
    }else if(currentplayer==b&& currentplayer==e&& currentplayer==h){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+" is winner"
         checkgame="notworking"
    }else if(currentplayer==c&& currentplayer==f&& currentplayer==i){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+" is winner"
         checkgame="notworking"
    }else if(currentplayer==a&& currentplayer==e&& currentplayer==i){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+" is winner"
         checkgame="notworking"
    }else if(currentplayer==c&& currentplayer==e&& currentplayer==g){
        let winner=currentplayer;
        let p=document.getElementById("result")
        p.innerHTML=currentplayer+ " is winner"
         checkgame="notworking"
    }
}