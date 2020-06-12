function load(element){
    fetch('./components/submenu/submenu.html')
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        //fill html page 
        element.innerHTML = html;   
    });
}

export {
    load,
}