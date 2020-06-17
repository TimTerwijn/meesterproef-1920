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
    const mobileMenu = parent.children[2];
    const menuButton = mobileMenu.children[0];
    const subMenuButton = mobileMenu.children[1];
    
    menuButton.addEventListener("click", function(event) {
        event.preventDefault();

        showMenu();
    });

    subMenuButton.addEventListener("click", function(event) {
        event.preventDefault();

        showSubMenu();
    });
}

function showMenu(){
    const parent = document.querySelector("#container>article");
    const menu = parent.children[0];
    const submenu = parent.children[1];
    const mobileMenu = parent.children[2];
    
    const menuButton = mobileMenu.children[0];
    const subMenuButton = mobileMenu.children[1];

    //switch icons
    menuButton.classList.remove("far");
    menuButton.classList.add("fas");
    

    subMenuButton.classList.remove("fas");
    subMenuButton.classList.add("far");

    //show menu
    submenu.classList.remove("block");
    submenu.classList.add("gone");
    menu.classList.add("block");
    menu.classList.remove("gone");
}

function showSubMenu(){
    const parent = document.querySelector("#container>article");
    const menu = parent.children[0];
    const submenu = parent.children[1];
    const mobileMenu = parent.children[2];
    
    const menuButton = mobileMenu.children[0];
    const subMenuButton = mobileMenu.children[1];

    //switch icons
    menuButton.classList.remove("fas");
    menuButton.classList.add("far");

    subMenuButton.classList.remove("far");
    subMenuButton.classList.add("fas");
    

    //show submenu
    menu.classList.remove("block");
    menu.classList.add("gone");
    submenu.classList.add("block");
    submenu.classList.remove("gone");
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

//swipe function

//check if on mobile
const isMobile = window.matchMedia("only screen and (max-width: 1065px)").matches;

if(isMobile){
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);
}

let xDown = null;                                                        
let yDown = null;

function getTouches(evt) {
  return evt.touches;
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    const isInMenu = document.getElementById("container");
    
    if ( ! xDown || ! yDown || isInMenu === null) {
        return;
    }

    const xUp = evt.touches[0].clientX;                                    
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            showSubMenu();
        } else {
            /* right swipe */
            showMenu();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

export {
    load,
}