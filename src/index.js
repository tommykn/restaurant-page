import m from './modules/page-load';
import x from './modules/menu';
import z from './modules/locations';

m();
// EDIT LOCATIONS PAGE
// clearPageContent();
// z();


let activePage = 'Home';
setBtnEventListeners();
function setBtnEventListeners() {
    const menuBtn = document.querySelector('.menu-btn');
    const homeBtn = document.querySelector('.home-btn');
    const locationBtn = document.querySelector('.location-btn');
    homeBtn.addEventListener('click', () => {
        if (activePage === 'Home') {
            return
        }
        clearFullPage();
        m();
        setBtnEventListeners();
        activePage = 'Home';
    
    });

    menuBtn.addEventListener('click', () => {
        if (activePage === 'Menu') {
            return;
        }
        clearPageContent();
        x();
        activePage = 'Menu';
    });

    locationBtn.addEventListener('click', () => {
        if (activePage === 'Location') {
            return;
        }
        clearPageContent();
        z();
        activePage = 'Location';
    });
    
}


function clearPageContent() {
    const mainContent = document.getElementById('content');
    const page = document.querySelector('.active-page');
    mainContent.removeChild(page);
}
function clearFullPage() {
    const div = document.getElementById('content');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

}











// function editMenu() {
//     const mainContent = document.getElementById('content');
//     const page = document.querySelector('.active-page');
//     mainContent.removeChild(page);
//     x();
// }

// editMenu();