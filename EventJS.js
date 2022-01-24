function clicked(){
    console.log("button is clicked");
}
window.onload=function(){
    console.log("The document was loaded");
}

//Events in JavaScript
// firstContainer.addEventListener('click',function(){//here first container is container id
//     console.log("Clicked on container");
// })
// firstContainer.addEventListener('mouseover',function(){//here first container is container id and whenever i hover it diaply this message
//     console.log("mouse on container");
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out container");
// })
let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){//here first container is container id
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log("mouse up clicked on container");
})
firstContainer.addEventListener('mousedown',function(){//here first container is container id
    document.querySelectorAll('.container')[1].innerHTML="<p>we have clicked</p>";
    console.log("mouse down clicked on container");
})
// firstContainer.addEventListener('click',function(){ //here if you click first container the content of next container changes to down innerHTML written
//     document.querySelectorAll('.container')[1].innerHTML="<p>we have clicked</p>";
//     console.log("Clicked on container");
// })