function load(){
    fetch('/components/submenu/submenu.html')
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