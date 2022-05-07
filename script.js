var flag=0;

input=(i)=>{
    if(flag==1){
        document.getElementById("display").innerText=null;
        flag=0;
    }
    document.getElementById("display").innerText+=i
};

allClear=()=>
{document.getElementById("display").innerText=null};
erase=()=>{
    temp=document.getElementById("display").innerText
var value=temp.substr(0,temp.length-1)
document.getElementById("display").innerText=value
}
result1=()=>{
    if(null==document.getElementById("display").innerText){
        document.getElementById("display").innerText=0;
    }
    document.getElementById("display").innerText=eval(document.getElementById("display").innerText)
    flag=1;
}
document.onkeyup=(e)=>{
    if(e.key=="0" || e.key=="Num0"){
        input(0);

    }
    else if(e.key=="1" || e.key=="Num1") {
        input(1);
    }
    else if(e.key=="2" || e.key=="Num2"){
        input(2);
    }
    else if(e.key=="3" || e.key=="Num3"){
        input(3);
    }
    else if(e.key=="4" || e.key=="Num4"){
        input(4);
    }
    else if(e.key=="5" || e.key=="Num5"){
        input(5);
    }
    else if(e.key=="6" || e.key=="Num6"){
        input(6);
    }
    else if(e.key=="7" || e.key=="Num7"){
        input(7);
    }
    else if(e.key=="8" || e.key=="Num8"){
        input(8);
    }
    else if(e.key=="9" || e.key=="Num9"){
        input(9);
    }
    else if(e.key=="." || e.key=="Num."){
        input(".");
    }
    else if(e.key=="+" || e.key=="Num+"){
        input(`+`);
    }
    else if(e.key=="-" || e.key=="Num-"){
        input("-");
    }
    else if(e.key=="*" ||e.key=="Num*"){
        input("*");
    }
    else if(e.key=="/" || e.key=="Num/"){
        input("/");
    }
    else if(e.key=="=" || e.key=="Enter" || e.key=="NumEnter"){
      result1();
    }
    else if(e.key=="Backspace"){
        erase();
    }
    else if(e.key=="Delete" || e.key=="Escape"){
        allClear();
    }
    

   

}

