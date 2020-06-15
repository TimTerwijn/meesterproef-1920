import * as news from "../news/news.js";

function load(element){
    fetch('./components/submenu/submenu.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill html page 
        element.innerHTML = html;   

        //fix button links
        setLinks();

        //set info button links
        setInfoButtonsEvent();
    });
}

function setLinks(){
    let itemsElement = document.querySelector("#container>article:last-child");
    const buttons = document.getElementsByClassName("submenu-button");

    for (const button of buttons) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            if(getScreenWidth() <= 1065){//mobile            
                itemsElement = document.querySelector("body>main")
             }
            
            const name = button.getAttribute("name");
            if(name === "news"){
                news.load(itemsElement);
            }

            //set breadcrumb
            const breadcrumb = document.querySelector("header>article");
            breadcrumb.innerHTML = "<a href='./index.html'>Home</a>";
            const link = "/" + name;
            breadcrumb.insertAdjacentHTML("beforeend",link);

        }, false);
    }
}

function setInfoButtonsEvent(){
    const info = document.querySelector("#submenu>article>section");
    const infoButtons = document.getElementsByClassName("subinfo-button");

    const descriptions = [
        "Hier zie je jouw nieuws.",
        "Hier kan je jouw mail lezen of versturen.",
        "Hier kan je alles over de school lezen.",
        "Hier vind je jouw opdrachten en kan je ze inleveren.",
        "Hier zie je jouw cijfers",
        "Hier vind je lijsten wat je af moet maken.",
        "Hier kun je boeken lenen.",
        "Hier kun je informatie over de opleiding vinden.",
        "Hier zie je waar je elk HvA gebouw kan vinden.",
        "Hier zie je dingen over de HvA organisatie.",
        "Hier kun je instellen waar je elke knop wilt hebben. (Work in progress.)",
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
            infoButton.style.color = "black";
            infoButton.style.textDecoration = "none";
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