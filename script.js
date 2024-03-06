const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if (inputbox.value === ''){
        alert("Write something nonsense");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
}
    
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        console.log("yes");
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        console.log("no");
        e.target.parentElement.remove();
    }
    else{
        console.log("nothing");
    }});


