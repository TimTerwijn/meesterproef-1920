import * as menu from "../menu/menu.js"
import * as submenu from "../submenu/submenu.js"
import * as messages from "../messages/messages.js"

function load(){
    fetch('./components/container/container.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill index.html with container page 
        const container = document.querySelector("body>main");
        container.innerHTML = html;  
        
        //fill container with other stuff
        loadComponents()

        //set links
        setLinks();

        setServiceWorker();
    });
}

function loadComponents(){
    const menuElement = document.querySelector("#container>article:first-child>section:first-child");
    const subMenuElement = document.querySelector("#container>article:first-child>section:nth-child(2)");
    const itemsElement = document.querySelector("#container>article:last-child");
    
    menu.load(menuElement);
    submenu.load(subMenuElement);
    messages.load(itemsElement);    
}

function setLinks(){
    const parent = document.querySelector("#container>article");
    const menu = parent.children[0];
    const submenu = parent.children[1];
    const mobileMenu = parent.children[2];
    
    const menuButton = mobileMenu.children[0];
    const subMenuButton = mobileMenu.children[1];

    menuButton.addEventListener("click", function(event) {
        event.preventDefault();

        //switch icons
        menuButton.classList.toggle("fas");
        menuButton.classList.toggle("far");

        subMenuButton.classList.toggle("fas");
        subMenuButton.classList.toggle("far");

        //show menu
        submenu.classList.remove("block");
        submenu.classList.add("gone");
        menu.classList.add("block");
        menu.classList.remove("gone");
    });

    subMenuButton.addEventListener("click", function(event) {
        event.preventDefault();

        //switch icons
        menuButton.classList.toggle("fas");
        menuButton.classList.toggle("far");

        subMenuButton.classList.toggle("fas");
        subMenuButton.classList.toggle("far");

        //show submenu
        menu.classList.remove("block");
        menu.classList.add("gone");
        submenu.classList.add("block");
        submenu.classList.remove("gone");
    });
}

function setServiceWorker(){
    if ('serviceWorker' in navigator) {
        // Register a service worker hosted at the root of the
        // site using the default scope.
        navigator.serviceWorker.register("./service-worker.js").then(function(registration) {
            console.log('Service worker registration succeeded:', registration);
        }, /*catch*/ function(error) {
            console.log('Service worker registration failed:', error);
        });
    } 
    else{
        console.log('Service workers are not supported.');
    }
}

export {
    load,
}