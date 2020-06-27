function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
} 
function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value) 
}
function backSpace(){
    var prevalue = result.value;
    result.value = prevalue.substr(0,prevalue.length-1);
}
function fnsin(){
    result.value = Math.sin(result.value)
}
function fncos(){
    result.value = Math.cos(result.value)
}
function fntan(){
    result.value = Math.tan(result.value)
}
function square(){
    result.value = Math.pow(result.value,2)
}
function squareroot(){
    result.value = Math.pow(result.value,1/2)
}