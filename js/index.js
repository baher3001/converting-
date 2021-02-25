/*
    dollar
    convert
    reload
    result

*/

let Alert = document.getElementById('alert');
console.log(Alert)
let Dollar = document.getElementById('dollar');
let Convert = document.getElementById('convert');
let Relaod = document.getElementById('reload');
let Result = document.getElementById('result');

Convert.addEventListener('click',function(){

if(Dollar.value)
{
    Result.innerHTML = `${Dollar.value}`*15  + ' ' +'L.E';
    Result.style.color="white";
    Result.style.background="green";
    Dollar.value=""; 
}
else
{
    Result.innerHTML="Please Enter your Value here ";
    Result.style.color="white";
    Result.style.background="red";
}

});

Relaod.addEventListener('click',function(){

    Dollar.value=null;
    Result.innerHTML='Result';
    Result.style.background="none";
    Result.style.color="black";
    
});

setTimeout(function()
{
    Alert.remove();
},5000)