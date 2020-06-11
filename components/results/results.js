function load(element){
    fetch('/components/results/results.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill html page 
        element.innerHTML = html;   

        //get json files and fill berichten
        apiCall();
    });
}

function apiCall(){
    fetch("/json/resultsv2.json")
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
        const name = object._links.course.title;
        const date = object.testDate.substring(0, 10);
        let grade = object.grade;

        if(grade === "-"){
            grade = "GR";
        }
        
        html += `
            <article>
                <section>
                    <p>${name}</p>
                </section>
                <section>
                    <p>${date}</p>
                </section>
                <section>
                    <p>${grade}</p>
                </section>        
            </article>
        `;
    });

    const container = document.getElementById("results");
    container.innerHTML = html;
    console.log(html);
}

export {
    load,
}