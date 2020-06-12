import * as messages from "/components/messages/messages.js"
import * as results from "/components/results/results.js"

function load(element){
    fetch('/components/menu/menu.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill element 
        element.innerHTML = html;   

        //set clickable events
        setEvents();
    });
}

function setEvents(){
    setInfoButtonsEvent(); 
    setLinks();   
}

function setInfoButtonsEvent(){
    const info = document.querySelector("#menu>article>section");
    const infoButtons = document.getElementsByClassName("info-button");

    const descriptions = [
        "Hier zie je al je berichten van docenten.",
        "Hier zie je welke lessen je gaat volgen.",
        "Hier kan je de studiegids van jouw vakken vinden.",
        "Hier zie je jouw cijfers",
        "Hier zie je hoever je bent met jouw opleiding.",
        "Hier kun je samen met jouw team een website maken.",
        "Hier vind je de contact gegevens van jouw docenten.",
        "Hier zie je de geplande evenementen van de HvA.",
    ];

    let i = 0;
    for (const infoButton of infoButtons) {
        const description = descriptions[i++];
        infoButton.addEventListener("click", function(event) {
            event.preventDefault();

            //change description of info
            info.firstElementChild.innerHTML = description;
            
            //show info
            info.classList.remove("hidden");

            //set button to black
            infoButton.style.backgroundColor = "black";
        }, false);
    }
}

function setLinks(){
    let itemsElement = document.querySelector("#container>article:last-child");
    const buttons = document.getElementsByClassName("menu-button");

    for (const button of buttons) {
        button.addEventListener("click", function(event) {
            event.preventDefault();


            
            if(getScreenWidth() <= 1019){//mobile            
               itemsElement = document.querySelector("body>main")
            }
            
            const name = button.getAttribute("name");
            if(name === "messages"){
                messages.load(itemsElement);
            }else if(name === "results"){
                results.load(itemsElement);
            }
        }, false);
    }
}

function getScreenWidth()
{
    let e = window, a = 'inner';
    if ( !( 'innerWidth' in window ) )
    {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return e[ a+'Width' ]
}

export {
    load,
}