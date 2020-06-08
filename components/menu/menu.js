function load(){
    fetch('/components/menu/menu.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill html page 
        document.getElementById("test").innerHTML = html;   
    });
}

export {
    load,
}