function display(val){
    var v=document.getElementById('result');
    v.value+=val;
}
function calculate(){
    var num1=document.getElementById('result').value;
    var num2=eval(num1);
    document.getElementById('result').value=num2;
}

function clearScreen(){
    var input=document.getElementById('result');
    input.value="";
}
function back(){
    var ev=document.getElementById('result');
    ev.value=ev.value.slice(0,-1);
}