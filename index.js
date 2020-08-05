var century, year, month, day, dayOfWeek;
function getInput(){
    century=parseInt(document.getElementById("century").value);
    year=parseInt(document.getElementById("year").value);
    month=parseInt(document.getElementById("month").value);
    day=parseInt(document.getElementById("day").value);
    console.log(century);
    console.log(year);
    console.log(month);
    console.log(day);

    if(isNaN(century)){
        alert("Incorrect Century")
    }else if(isNaN(year)){
        alert("Incorrect Year")
    }else if(month>12){
        alert("Incorrect Month")
    }else if (day>31){
        alert("Incorrect Day")
    }
}
function calculateDay(){
    getInput();
    dayOfWeek = (( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7).toFixed();
    //( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    //K + [(13xM – 1)/5] + D + [D/4] + [C/4] – 2C
    //var d=new Date(y, m, d)
    //dayOfWeek = ((day + (13*(month + 1)/5) + year + (year/4) + (century/4) + 5*century) % 7).toFixed();
    
    console.log(dayOfWeek);
    return(dayOfWeek);
}
function checkDayOfWeek(){
    day = calculateDay();


var daysOfWeek=["sunday, monday, tuesday, wednesday, thusday, friday, saturday"]
var maleAkanNames=["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame"]
var femaleAkanNames=["Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama"]
// var gender=document.getElementById("rad1").value;

if(document.getElementById("rad1").checked==true){
     gender="Male"
}else{
    gender="Female"
}
console.log(gender);

if(day==="0" && gender==="Male"){
     alert("Your birthday and Akan name:Sunday + Kwasi")
}else if(day==="1" && gender==="Male"){
     alert("Your birthday and Akan name:Monday + Kwadwo")
}else if(day==="2" && gender==="Male"){
     alert("Your birthday and Akan name:Tuesday + Kwabena")
}else if(day==="3" && gender==="Male"){
     alert("Your birthday and Akan name:Wednasday + Kwaku")
}else if(day==="4" && gender==="Male"){
     alert("Your birthday and Akan name:Thursday + Yaw")
}else if(day==="5" && gender==="Male"){
     alert("Your birthday and Akan name:Friday + Kofi")
}else if(day==="6" && gender==="Male"){
     alert("Your birthday and Akan name:Saturday + Kwame")
}
if(day==="0" && gender==="Female"){
     alert("Your birthday and Akan name:Sunday + Akosua")
}else if(day==="1" && gender==="Female"){
     alert("Your birthday and Akan name:Monday + Adwoa")
}else if(day==="2" && gender==="Female"){
     alert("Your birthday and Akan name:Tuesday + Abenaa")
}else if(day==="3" && gender==="Female"){
     alert("Your birthday and Akan name:Wednesday + Akua")
}else if(day==="4" && gender==="Female"){
     alert("Your birthday and Akan name:Thursday + Yaa")
}else if(day==="5" && gender==="Female"){
     alert("Your birthday and Akan name:Friday + Afua")
}else if(day==="6" && gender==="Female"){
     alert("Your birthday and Akan name:Saturday + Ama")
}
}