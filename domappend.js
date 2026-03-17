//create an element
const heading = document.createElement("h2");
//get the parent
const bodytag = document.getElementsByTagName("body");
//add element at the positioning using append method 
//prepend, append, before,after 
bodytag[0].append(heading);

heading.innerText="hello" ; 
heading.style.backgroundColor = "red";

//event in js- the change in state of  an object.
// mouse event =
/*
click - onclick
mouseover - onmouseover
mouseout - onmouseout
mousedown- onmousedown
onmouseup - onmouseup
*/

function onClick(){
    console.log("clicked");
}

function onMouseOver(){
    console.log("on mouse over");
}

function onMouseOut(){
    console.log("on mouse out ");
}

function onMouseIn(){
    console.log("mouse in ");
}

function onMouseUp(){
    console.log("mouse up");
}

function onMouseDown(){
    console.log("mouse down");
}
function onMouseMove(){
    console.log("moved mouse");
}

//form event 
/*
focus - onfocus
submit - onsubmit
blur - onblur
change - onchange
*/

const x = document.querySelector('input');
x.addEventListener('focus', onhandlefocus); //without on use kre
x.addEventListener('blur', onhandleblur);

// function
//     onhandlefocus(){
//         x.style
//     }
/*
window event:-
load
unload
resize
*/
/*
keyboard event
onkey up
onkey dowm
*/
function myBody(){
    alert("window load successfully");
}


