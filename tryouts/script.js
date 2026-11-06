let showJS = "JavaScript";
function functionJS() {
    document.getElementById("js").innerHTML = showJS;
    document.getElementById("js").style.display = "block";
}   

function functionHTML(){
    alert("HTML is a markup language used for creating web pages.");
}

function functionCSS(){
    document.getElementById("csslogo").style.display = "block";
}

let username = "Verlind-Hetemaj";
let password = "12345678";

function fillForm() {
if (document.getElementById("username").value == username && document.getElementById("password").value == password){
    document.getElementById("message").innerHTML = "Login successful!";
    document.getElementById("message").style.display = "block";
    document.getElementById("continue").style.display = "block";
}    
else {
    document.getElementById("continue").style.display = "none";
    document.getElementById("message").innerHTML = "Invalid username or password.";
    document.getElementById("message").style.display = "block";
}
}