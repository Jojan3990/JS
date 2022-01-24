//Json

//remember JSON standard supports double quote
obj={name: "Jojan", 
    length:1,
    phone:{
        firstnum: '981395\\"1823',
        secondnum: "9860257013"
    }
}
jso=JSON.stringify(obj); //converts object into JSON String
console.log(jso);
console.log(typeof jso); //returns type

parsed=JSON.parse(`{"name": "Jojan", 
    "length":1,
    "phone":{
        "firstnum": "981395\\"1823",
        "secondnum": "9860257013"
        }
    }`) //you can give this ` ` also not if you don't which is in below esc key button
console.log(parsed);  //changes to object


