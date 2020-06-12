function load(element){
    fetch('./components/schedule/schedule.html')
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
    fetch("./json/scheduleV2.json")
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
        const date = object.startDateTime;
        const day = object.startDateTime;
        const startHour = date;
        const endHour = date;

        const courseName = object._links.courses[0].title;
        const teacher = object._links.lecturers[0].title;
        
        let room;

        try{
            room = object._embedded.rooms[0].name;
        }catch(error){
            room = object._links.courses[0].id;
        }
        
        html += `
            <article>
                <p>25</p>
                <p>${courseName}</p>
                <p>${teacher}</p>
                <p>Maa</p>
                <p>09:00-11:50</p>
                <p>${room}</p>
            </article>
        `;
    });

    const container = document.getElementById("schedule");
    container.innerHTML = html;
    console.log(html);
}

export {
    load,
}