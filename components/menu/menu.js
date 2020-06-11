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

export {
    load,
}