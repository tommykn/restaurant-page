import Burger1 from '../images/burger1transparent.png';
import Burger2 from '../images/burger2transparent.png';
import Burger3 from '../images/burger3transparent.png';
import Burger4 from '../images/burger4transparent.png';
import shake1 from '../images/shake1transparent.png';
import shake2 from '../images/shake2transparent.png';
import shake3 from '../images/shake3transparent.png';
import shake4 from '../images/shake4transparent.png';
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

function makeImage(src, className) {
    const image = new Image();
    image.src = src;
    image.classList.add(className);
    return image;
}


function makeMenuPage() {
    const menuContainer = makeContainer('menu-content');
    menuContainer.classList.add('active-page');
    menuContainer.style.backgroundImage = `url(${Background})`;
    const menuTitle = makeTitle('Menu', 'menu-title');
    menuContainer.appendChild(menuTitle)
    const menuMain = makeContainer('menu-main');
    menuContainer.appendChild(menuMain);
    const foodItems = makeTitle('Burgers', 'food');
    menuMain.appendChild(foodItems);
    const foodGrid = makeContainer('food-grid');
    const burgerWrapper1 = makeContainer('burger-wrapper');
    const burgerWrapper2 = makeContainer('burger-wrapper');
    const burgerWrapper3 = makeContainer('burger-wrapper');
    const burgerWrapper4 = makeContainer('burger-wrapper');
    const burgerOne = makeImage(Burger1, 'burger');
    const burgerTwo = makeImage(Burger2, 'burger');
    const burgerThree = makeImage(Burger3, 'burger');
    const burgerFour = makeImage(Burger4, 'burger');
    const burgerOneText = makeTitle('ButterBurger Cheese', 'burger-one');
    const burgerTwoText = makeTitle('Mushroom & Swiss ButterBurger', 'burger-two');
    const burgerThreeText = makeTitle("The Culver's Bacon Deluxe", 'burger-three');
    const burgerFourText = makeTitle('ButterBurger “The Original”', 'burger-four');
    burgerWrapper1.appendChild(burgerOne);
    burgerWrapper1.appendChild(burgerOneText);
    burgerWrapper2.appendChild(burgerTwo);
    burgerWrapper2.appendChild(burgerTwoText);
    burgerWrapper3.appendChild(burgerThree);
    burgerWrapper3.appendChild(burgerThreeText);
    burgerWrapper4.appendChild(burgerFour);
    burgerWrapper4.appendChild(burgerFourText);
    foodGrid.appendChild(burgerWrapper1);
    foodGrid.appendChild(burgerWrapper2);
    foodGrid.appendChild(burgerWrapper3);
    foodGrid.appendChild(burgerWrapper4);
    menuMain.appendChild(foodGrid);
    // shakes section
    const shakeItems = makeTitle('Shakes', 'shakes-title');
    menuMain.appendChild(shakeItems);
    const shakeGrid = makeContainer('shake-grid');
    const shakeWrapper1 = makeContainer('shake-wrapper');
    const shakeWrapper2 = makeContainer('shake-wrapper');
    const shakeWrapper3 = makeContainer('shake-wrapper');
    const shakeWrapper4 = makeContainer('shake-wrapper');
    const shakeText1 = makeTitle('Chocolate Shake', 'shake-one');
    const shakeText2 = makeTitle('Vanilla Shake', 'shake-two');
    const shakeText3 = makeTitle('Mint Shake', 'shake-three');
    const shakeText4 = makeTitle("Culver's Root Beer Float", 'shake-four');
    const shakeOne = makeImage(shake1, 'shake');
    const shakeTwo = makeImage(shake2, 'shake');
    const shakeThree = makeImage(shake3, 'shake');
    const shakeFour = makeImage(shake4, 'shake');
    shakeWrapper1.appendChild(shakeOne);
    shakeWrapper1.appendChild(shakeText1);
    shakeWrapper2.appendChild(shakeTwo);
    shakeWrapper2.appendChild(shakeText2);
    shakeWrapper3.appendChild(shakeThree);
    shakeWrapper3.appendChild(shakeText3);
    shakeWrapper4.appendChild(shakeFour);
    shakeWrapper4.appendChild(shakeText4);
    shakeGrid.appendChild(shakeWrapper1);
    shakeGrid.appendChild(shakeWrapper2);
    shakeGrid.appendChild(shakeWrapper3);
    shakeGrid.appendChild(shakeWrapper4);
    menuMain.appendChild(shakeGrid);





    const mainDiv = document.getElementById('content');
    const footer = document.querySelector('.footer')
    mainDiv.insertBefore(menuContainer, footer);
}

export default makeMenuPage;