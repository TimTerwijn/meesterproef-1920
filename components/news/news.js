function load(element){
    fetch('./components/news/news.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill html page 
        element.innerHTML = html; 

        //set js events
        setEvents()
    });
}

function setEvents(){
    // const educationButton = document.querySelector("#news>article>section");
    // const facilitiesButton = document.querySelector("#news>article>section:nth-child(2)");
    // const hvaButton = document.querySelector("#news>article>section:nth-child(3)");
    // const teamButton = document.querySelector("#news>article>section:last-child");

    const buttonsParent = document.querySelector("#news>article");
    const buttons = buttonsParent.children;

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const index = i;
        button.addEventListener("click", function(event) {
            event.preventDefault();

            //hide all item elements
            const news = document.getElementById("news");
            const newsChildElements = news.children;

            for (let ii = 1; ii < newsChildElements.length; ii++) {
                const child = newsChildElements[i]
                child.classList.add("gone");
            }
            
            //show right element
            newsChildElements[i + 1].classList.remove("gone");

        });
    }
}

export {
    load,
}