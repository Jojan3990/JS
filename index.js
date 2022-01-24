// ways to print in java script
// console.log("This is me");
// alert("Jojan"); mordern JS doesnt use JS
 // document.write("This is document write")  but we dont normally use it

// JavaScript console API 
// console.log("This is me",4+6);
// console.warn("This is warning");
// console.error("This is an error")
// console.clear();//cleares console
// console.assert(4==(6-2));

// Java Script variables
// what are variables ? ->  Containers to store data vlaues

/* Multiline
 comment */

 //DataTypes in JS

// var number1=34;
// var number2=56;
// console.log(number1+number2);

// var str1="This is a string";
// var str2='This is a string';

// var marks={
//     ravi:34,
//     jojan:100,
//     nalin:98.99
// };
// console.log(marks);

// var a=true;
// var b=false;
// console.log(a,b);

// var und=undefined;
// var unda;
// console.log(und,unda);

// var n=null;
// console.log(n);

/* At a very high level there are two tyoes of datatypes in JS
1) Primitive  undefined,null,number,String,boolean,symbol
2) Reference arrays,objects  */

// Symbol('') learn later
// var arr=[1,2,'Jojan',4,5];
// console.log(arr[1]);
// console.log(arr);

//Operators in JS

// var a=34;
// var b=56;
// console.log(a+b);
//Assignment operator
// var b=a;
// console.log(b);
// b+=b; //b=b+b
// console.log(b);

//comparison operator
// console.log(a==b); //false output
// console.log(a<=b);
// console.log(a<b);
// console.log(a>b);

//logical operators

//logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

//logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical not 
// console.log(!false);
// console.log(!true);

//function in JS
// DRY = Do not repeat yourself
/* function avg(a,b){
    return (a+b)/2;
}
c=avg(2,3);
console.log(c); */

/* things to notice is that 
numbers are printed in color blue while string in
black color in console
*/

//Conditionals in JS
/* var age=19;
if(age>=30){
    console.log("You are budo");
}
else if(age>=18){
    console.log("you are a adult");
}
else{
    console.log("You are kid");
} */

//Loops
// var arr=[1,2,3,4,5];
// console.log(arr);
/* for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i]);
}
 */
/* arr.forEach(function(element){
    console.log(element);
}) */

let j=0;   //use let not var in JS as var is old one
//let makes temporary variable in function or block
//while var is like global

// const a=0;
// a=a+1;
//const is that beccause you cant change it like upper
// we get error  

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
/* 
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length) */

let myArr=["fan","camera",34,null,true];
//Array methods
// console.log(myArr.length);
// myArr.pop(); //this deletes one element from last
// myArr.push("Jojan") //push value in array
// myArr.shift();//first array is taken out
//  myArr.unshift("fan") //shifts like push on array
// console.log(myArr.length);
// console.log(myArr.toString()); //converts to array
// console.log(myArr.sort()); //sorts array
//and many more search on internet

//String methods in JS
let myJsString="I am jojan rai bbbb jojan";
// console.log(myJsString.length);
// console.log(myJsString.indexOf('am'));
// console.log(myJsString.lastIndexOf('am'));//shows from last index

// console.log(myJsString.slice(0,3));

// console.log(myJsString.replace("jojan","Nalin"));//only replaces first occurence

// let myDate=new Date();
// console.log(myDate.getTime());
// console.log(myDate);
// console.log(myDate.getDay());
//and any more

//DOM document object model manipulation

// eg:- some DOM methods
// document.getElementById("click").style.border='2px solid black'; '2px solid black'
// document.getElementById("click").click();
let elem=document.getElementById("click");
// console.log(elem);
// console.log(elem.innerHTML);
// console.log(elem.innerText);

let elemClass=document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary"); //this adds class eg:- i have this class in style in html file
elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success"); //to remove
// console.log(elemClass[0].innerHTML); //gives html code
// console.log(elemClass[0].innerText); //gives inner text

// console.log(document.getElementsByTagName('button')); //we can also find by tag name
// console.log(document.getElementsByTagName('div'));

//thing to notice element and elements remember it
let tn=document.getElementsByTagName('button');
createdElement=document.createElement('p');
createdElement.innerText="This is a created para"; //now is added to button inner text
tn[0].appendChild(createdElement); //here tn0 is first button

createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold"
tn[0].replaceChild(createdElement2,createdElement); //this replaces upper p element
// tn[0].removeChild(createdElement2);  // removes element

//some more
//documet.URL document.scripts document.link document.forms document.images document.domain
// and many more you can google

//selecting using query
sel=document.querySelector('.container'); //gievs first container element
console.log(sel);
sel=document.querySelectorAll('.container'); //gives all container element
console.log(sel);


//backticks
a=14;
console.log(`this is my ${a}`); //using `` below of esc key
