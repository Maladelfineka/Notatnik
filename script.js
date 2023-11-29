
var text = document.querySelector(".text");



var Delete = document.querySelector(".delete");

var save = document.querySelector(".save");



save.onclick = function(){
    localStorage.setItem("notatka", text.value);
}

if(localStorage.getItem("notatka")) {
    text.innerHTML = localStorage.getItem("notatka");
}

Delete.onclick = function(){
    localStorage.setItem("notatka", "");
    text.textContent = "";
}
