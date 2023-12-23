const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let timer;
let sec=10;
let counter=0;
function statTimer(){
    startEl.disabled=true; 
    startEl.style.background='black';
    timer=setInterval(()=>{
        
        timerEl.innerHTML=sec;
        sec--;
        if(sec=='-1'){
            clearInterval(timer);
            sec=10;
            
        }
    },1000)
    

}
function stopTimer(){
    clearInterval(timer);

}
function resetTimer(){
    
    sec=10;
    timerEl.innerHTML=sec;
    clearInterval(timer);
}
startEl.addEventListener('click',statTimer);
stopEl.addEventListener('click',stopTimer);
resetEl.addEventListener('click',resetTimer);