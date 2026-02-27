object is key value pair represented by {
var count = 0;
document.write("starting loop ");
while(count<10){
    document.write("current count: " + count + "<br/>");
    count++;
}

document.write("loop stopped");

let age = 20; // agr variation ana hai value me to let
if(age>=18){
    console.log("you are an adult");
}
else{
    console.log("you are a minor.")
}

//default ki position mattter na krti...

var grade = "A";
document.write("entering the switch block<br/>");
switch(grade){
    case 'A': document.write("good job <br/>");
    break;
     case 'B': document.write("pretty good <br/>");
    break;
     case 'C': document.write("decent <br/>");
    break;
     case 'D': document.write("need improvement <br/>");
    break;
     case 'F': document.write("fail <br/>");
    break;
    default: document.write(" unknown grade <br/>")
}
document.write("exiting the switch case");

//function
/* function fname(this is for input parameter)
{
      this 
} */