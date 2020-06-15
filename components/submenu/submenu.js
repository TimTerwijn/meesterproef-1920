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
            const header = document.querySelector("header");
            header.innerHTML = "<a href='./index.html'>Home</a>";
            const link = "/" + name;
            header.insertAdjacentHTML("beforeend",link);

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