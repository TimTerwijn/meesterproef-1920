function load(element){
    fetch('/components/messages/messages.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill html page 
        element.innerHTML = html;  

        //get json files and fill messages
        apiCall();
    });
}

function apiCall(){
    fetch("/json/announcementsV2.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Work with JSON data here
        fill(data._embedded.items);
    }).catch(err => {
        // Do something for an error here
    });
}

function fill(json){

    console.log(json);

    let html = ""

    json.forEach(function(object){
        const urgent = object.urgent;
        const message = object.content.replace(/(<([^>]+)>)/ig,"");
        const date = object.publishDateTime;
        
        html += `
            <article> 
                <section>
                    <p>${urgent ? "!":""}</p>
                </section>
                <section>
                    <p>${message}</p>    
                </section>
                <section>
                    <p>${date}</p>
                </section>
            </article>
        `;
    });

    const container = document.getElementById("messages");
    container.innerHTML = html;
}

export {
    load,
}