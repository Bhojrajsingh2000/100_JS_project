let btn=document.getElementById('calculate');
let billInput=document.getElementById('bill');
let tipInput=document.getElementById('tip');
let result=document.getElementById('total');

function calculateTip(){
    let billValue=billInput.value;
    let tipValue=tipInput.value;
    let totalValue=billValue*(1+ tipValue/100);
    result.innerText=totalValue.toFixed(2);
}
btn.addEventListener("click",calculateTip);