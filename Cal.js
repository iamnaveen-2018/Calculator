
let result = document.getElementById("res");
function resultappend(value)
{
    result.value += value;
}
function resultClear(){
    result.value = '';
}
function resultValid(){
    try{
        result.value = eval(result.value);
    }
    catch(error)
    {
        result.value = 'Error';
    }
}