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
           loadSubMenu();
           loadMessages();
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
    const file = "./components/submenu/submenu.html";
    const targetElement = document.querySelector("#container>article>section:nth-child(2)");
   
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

function loadMessages(){
    const file = "./components/messages/messages.html";
    const targetElement = document.querySelector("#container>article:nth-child(2)");
   
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            targetElement.innerHTML = xhttp.responseText;

            //get JSON
            const file = "./json/announcementsV2.json";
   
            const xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    const json = JSON.parse(this.responseText)._embedded.items;

                    let html = "";

                    for (let index = 0; index < json.length; index++) {
                        const object = json[index];
                        const urgent = object.urgent;
                        const message = object.content.replace(/(<([^>]+)>)/ig,"");
                        const date = object.publishDateTime;

                        html = html +'<article>' +
                                    '<section>' +
                                        '<p></p>' +
                                    '</section>' +
                                    '<section>' +
                                        '<p>' + message + '</p>' +
                                    '</section>' +
                                    '<section>' +
                                        '<p>' + date + '</p>' +
                                    '</section>' +
                                '</article>';
                    };

                    const container = document.getElementById("messages");
                    container.innerHTML = html;
                    console.log(html);
                }
            };
            xhttp2.open("GET", file, true);
            xhttp2.send();
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}