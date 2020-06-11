import * as menu from "/components/menu/menu.js"
import * as submenu from "/components/submenu/submenu.js"
import * as messages from "/components/messages/messages.js"

function load(){
    fetch('/components/container/container.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill index.html with container page 
        const container = document.querySelector("body>main");
        container.innerHTML = html;  
        
        //fill container with other stuff
        loadComponents()
    });
}

function loadComponents(){
    const menuElement = document.querySelector("#container>article:first-child>section:first-child");
    const subMenuElement = document.querySelector("#container>article:first-child>section:last-child");
    const itemsElement = document.querySelector("#container>article:last-child");
    
    menu.load(menuElement);
    submenu.load(subMenuElement);
    messages.load(itemsElement);    
}

export {
    load,
}