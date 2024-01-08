let input=document.querySelector(".display");
let buttons=document.querySelectorAll("button");
let result="";

let arr=Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click',function(e){
        if(e.target.innerHTML== "="){
            result=eval(result);
            input.value=result;
        }
        else if(e.target.innerHTML=="AC"){
            result="";
            input.value=result;
        }
        else if(e.target.innerHTML=="DEL"){
            result=result.toString().slice(0,-1);
            input.value=result;
        }
        else{
            result+=e.target.innerHTML;
            input.value=result;
        }
    })
});