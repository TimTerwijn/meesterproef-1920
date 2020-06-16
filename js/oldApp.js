function init(){
    loadContainer();
}

init();

function fetch(file, targetElement){
    
}

function loadContainer(){
    const file = "./components/container/container.html";
    const targetElement = document.querySelector("body>main");

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           targetElement.innerHTML = xhttp.responseText;

           loadMenu();
        //    loadSubMenu();
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

function loadMenu(){
    const file = "./components/menu/menu.html";
    const targetElement = document.querySelector("#container>article>section");
   
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           targetElement.innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

function loadSubMenu(){

}