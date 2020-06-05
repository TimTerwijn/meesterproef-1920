function load(){
    fetch('/components/berichten/berichten.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill html page 
        document.getElementById("test").innerHTML = html;   

        //get json files and fill berichten
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

    json.forEach(function(bericht){
        const urgent = bericht.urgent;
        const message = bericht.content.replace(/(<([^>]+)>)/ig,"");
        const date = bericht.publishDateTime;
        
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

    const container = document.getElementById("berichten");
    container.innerHTML = html;
}

export {
    load,
}