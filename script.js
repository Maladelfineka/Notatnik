console.log("test")
var text = document.querySelector(".text");
console.log(text)


var Delete = document.querySelector(".delete");
console.log(Delete);
var save = document.querySelector(".save");
console.log(save)


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
