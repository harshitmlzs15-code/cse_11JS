const result =  document.getElementById("para");
// it calls a single unique element.
result.innerHTML = "my self ";
result.title = "myname";
document.write(result);

const x = document.getElementsByClassName("p1"); 
// it creates an array. indexing on the order of occurence
console.log ("x");
x[0].innerHTML = "Harshit";
x[1].innerHTML = "Yadav";

// elements by tag name, it will return an array too
const result3 = document.getElementsByTagName("p");
result3[2].innerHTML = "this is a pet";
result3[1].style.color = "blue";
result3[1].innerText = "my paragraph"

//elements by query selector, jo bhi pehla element milega wo return krdega
//query selector all to select all elements

const test = document.querySelector("p");
test.style.backgroundColor = "green";
test.style.padding = "10px";

const test2 = document.querySelectorAll("ul li");
for (x in test2){
    test2[x].style.backgroundColor = "green";
    test2[x].style.margin = "10px";
    test2[x].style.color = "blue";
}

