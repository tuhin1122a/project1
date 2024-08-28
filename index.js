let result=document.getElementById("result");
function calculeter(newValue){
    result.value+=newValue;
}
function delet(){
   result.value ="";
    
}

function answers(){
    let a =result.value;
    let b = eval(a);
    result.value =b;
}
function deleteResult(){
    result.value=result.value.toString().slice(0,-1);
}