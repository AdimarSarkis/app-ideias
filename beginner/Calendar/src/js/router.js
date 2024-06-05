const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    404: "/src/pages/404.html",
    "/eventos": "/src/pages/eventos.html",
    "/calandar": "/src/pages/calandar.html",
    "/conta": "/src/pages/conta.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=>data.text());
    document.querySelector(".container-page").innerHTML = html;
}


window.onpopstate = handleLocation;
window.route = route;

handleLocation();