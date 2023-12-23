let btn=document.getElementById('Calculate');
let birth=document.getElementById('birthday');
let result=document.getElementById('result');
let daysToday=document.getElementById('days');
function calculateAge(){
    let obj=new Date();
    let obj1=birth.value;
    let obj2= new Date(obj1);
    let c_year=obj.getFullYear();
    let c_month=obj.getMonth()+1;
    let c_day=obj.getDate();
    // birthday Date
    let b_year=obj2.getFullYear();
    let b_month=obj2.getMonth()+1;
    let b_day=obj2.getDate();
    
    if(c_day<b_day){
        c_month--;
        c_day+=30;
        
        
    }
    if(c_month<b_month){
        c_year--;
        c_month+=12;
    }
    if(c_year<b_year){
        alert('Enter valid date');
    }
    else{
        let year=(c_year-b_year);
        let month=(c_month-b_month);
        let day=(c_day-b_day);
        result.innerHTML='Your Age : '+year+' Years '+month+' Months '+day+' Days ';
        let days=(year*365)+(month*30)+day;
        daysToday.innerHTML='Total Days : '+days;
    }
}
btn.addEventListener("click",calculateAge);