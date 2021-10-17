const root = document.querySelector('.root');
const pages = {
    home:{
        content :'Home page',
    },
    contacts:{
        content :'Contacts page',
    },
    about:{
        content :'About page',
    },
    shop:{
        content :'Shop page',
    }
}

const router = () => {
    let route = location.hash.slice(2);

    if (pages[route]) root.innerHTML = `<h1>${pages[route].content}</h1>`;
    else root.innerHTML = '<h1>404 - page not found</h1>';
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);