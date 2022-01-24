//Arrow functions
// function summ(){
//     return 5;
// }
sum = (a,b)=>{ //upper and this is same
    return a+b;
}
logKaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>awesome</b>";
    console.log("I am your log");
}
//setTimeout and setInterval 
// setTimeout(logKaro,2000); //after 2sec it returns back to console it doesnt return id like setInterval
// clr=setInterval(logKaro,2000) //same as setTineout but this prints every 2 sec repeatadly
// clearInterval(clr); // now clr has id and it stops this
