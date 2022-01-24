add=document.getElementById("add");
var tit;
var desc;
function getAndUpdate(){
    console.log("updating list");
    tit=document.getElementById('title').value;
    desc=document.getElementById('description').value;

    if(tit=="" && desc==""){
        console.log("null");
    }
    else{
        // var itemsJsonArray=['title','desc'];
        itemsJsonArrayStr=localStorage.getItem('itemsJson');
        itemsJsonArray=JSON.parse(itemsJsonArrayStr);
        if(itemsJsonArray==null){
            console.log("null itemsJsonArray");
            var itemsJsonArray=[];
            localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
            itemsJsonArray.push([tit,desc]);
            localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
        }
        else{
            console.log(itemsJsonArray,'jojan');
            itemsJsonArray.push([tit,desc]);
            localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
            console.log("item added");
        }
    }
    update();
}

function update(){
    //populate the table
    // var itemsJsonArray=['title','desc'];
    // localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    itemsJsonArrayStr=localStorage.getItem('itemsJson');
    itemsJsonArray=JSON.parse(itemsJsonArrayStr);
    console.log(itemsJsonArray);
    if(itemsJsonArray==null){
        console.log("the array is null");
    }
    else{
        let tablebody=document.getElementById("tablebody");
        let str="";
        let arrLength=itemsJsonArray.length;
        console.log(arrLength);
        itemsJsonArray.forEach((element,index) => {
            str+=`
            <tr>
            <th scope="row">${++index}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleteList(${--index})">Delete</button></td>
        </tr>
            `;
    });
    tablebody.innerHTML=str;
    }
    
}
add.addEventListener("click",getAndUpdate);
update();
console.log("bahahah lol");

function deleteList(itemIndex){
    console.log("delete item ",itemIndex);
    itemsJsonArrayStr=localStorage.getItem('itemsJson');
    itemsJsonArray=JSON.parse(itemsJsonArrayStr);
    //Delete item element from the array 

    itemsJsonArray.splice(itemIndex,1);

    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    update();
}



// another way 
// here is a problem as you first need to set one item manually

// function getAndUpdate(){
//     if(localStorage.getItem('itemsJson')==null){
//         itemsJsonArray=[];
//         itemsJsonArray.push[tit,desc];
//         localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
//         console.log("jojan check");
//     }
//     else{
//         itemsJsonArrayStr=localStorage.getItem('itemsJson');
//         itemsJsonArray=JSON.parse(itemsJsonArrayStr);
//         itemsJsonArray.push([tit,desc]);
//         localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
//         console.log("jojan check2");
//     }
//     update();
// }
// function update(){
//     if(localStorage.getItem('itemsJson')==null){
//         itemsJsonArray=[];
//         // itemsJsonArray.push[tit,desc];
//         localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
//         console.log("jojan check");
//     }
//     else{
//         itemsJsonArrayStr=localStorage.getItem('itemsJson');
//         itemsJsonArray=JSON.parse(itemsJsonArrayStr);
//     }
//     console.log("updating list");
//     tit=document.getElementById('title').value;
//     desc=document.getElementById('description').value;
    
//     //populate the table

//     let tablebody=document.getElementById("tablebody");
//         let str="";
//         itemsJsonArray.forEach((element,index) => {
//             str+=`
//             <tr>
//             <th scope="row">${++index}</th>
//             <td>${element[0]}</td>
//             <td>${element[1]}</td>
//             <td><button class="btn btn-sm btn-primary" onclick="deleteList(${--index}) " >Delete</button></td>
//         </tr>
//             `;
//     });
//     tablebody.innerHTML=str;
//     console.log("Check");
// }
// add=document.getElementById("add");
// add.addEventListener("click",getAndUpdate);
// update();

// function deleteList(item){
//     console.log("delete item ",item);
//     itemsJsonArrayStr=localStorage.getItem('itemsJson');
//     itemsJsonArray=JSON.parse(itemsJsonArrayStr);
//     //Delete item element from the array 

//     itemsJsonArray.splice(item,1);

//     localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
//     update();
// }

