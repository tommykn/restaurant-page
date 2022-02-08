import Background from '../images/bluewhiteBackground1920.jpg';



function makeContainer(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}


function makeTitle(name, className) {
    const title = document.createElement('div');
    title.textContent = name;
    title.classList.add(className);
    return title;
}




function loadLocationsPage() {
    const background = makeContainer('background');
    background.style.backgroundImage = `url(${Background})`;
    background.classList.add('active-page');
    const contactTitle = makeTitle('Contact Us', 'contact-title');
    background.appendChild(contactTitle);
    const contentWrapper = makeContainer('content-wrapper');
    background.appendChild(contentWrapper);
    const loactionsWrapper = makeContainer('locations-wrapper');
    const locationHolder = makeTitle('Loactaion: ', 'location-holder');
    const locatoin = makeTitle('2906 Parmenter St, Middleton, WI', 'loaction');
    loactionsWrapper.appendChild(locationHolder);
    loactionsWrapper.appendChild(locatoin);
    const hoursWrapper = makeContainer('hours-wrapper');
    const hoursHolder = makeTitle('Hours: ', 'hours-holder');
    const hours = makeTitle('Everyday 10AM-10PM', 'hours');
    hoursWrapper.appendChild(hoursHolder);
    hoursWrapper.appendChild(hours);
    const phoneWrappper = makeContainer('phone-wrapper');
    const phoneHolder = makeTitle('Phone Number: ', 'phone-holder');
    const phone = makeTitle('(111) 111-1111', 'phone-number');
    phoneWrappper.appendChild(phoneHolder);
    phoneWrappper.appendChild(phone);
    const infoWrapper = makeContainer('info-wrapper');
    infoWrapper.appendChild(loactionsWrapper);
    infoWrapper.appendChild(hoursWrapper);
    infoWrapper.appendChild(phoneWrappper);
    contentWrapper.appendChild(infoWrapper);





    // map
    const mapWrapper = makeContainer('map-wrapper');
    mapWrapper.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93292.86832681531!2d-89.50283115337484!3d43.05400920901605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807a927e4aa5485%3A0x369afe67e4500cba!2sCulver&#39;s!5e0!3m2!1sen!2sus!4v1644106562049!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    contentWrapper.appendChild(mapWrapper);
    const mainDiv = document.getElementById('content');
    const footer = document.querySelector('.footer')
    mainDiv.insertBefore(background, footer);

    
}

export default loadLocationsPage;