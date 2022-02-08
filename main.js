/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/locations.js":
/*!**********************************!*\
  !*** ./src/modules/locations.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_bluewhiteBackground1920_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/bluewhiteBackground1920.jpg */ "./src/images/bluewhiteBackground1920.jpg");




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
    background.style.backgroundImage = `url(${_images_bluewhiteBackground1920_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLocationsPage);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_burger1transparent_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger1transparent.png */ "./src/images/burger1transparent.png");
/* harmony import */ var _images_burger2transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/burger2transparent.png */ "./src/images/burger2transparent.png");
/* harmony import */ var _images_burger3transparent_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/burger3transparent.png */ "./src/images/burger3transparent.png");
/* harmony import */ var _images_burger4transparent_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/burger4transparent.png */ "./src/images/burger4transparent.png");
/* harmony import */ var _images_shake1transparent_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/shake1transparent.png */ "./src/images/shake1transparent.png");
/* harmony import */ var _images_shake2transparent_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/shake2transparent.png */ "./src/images/shake2transparent.png");
/* harmony import */ var _images_shake3transparent_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/shake3transparent.png */ "./src/images/shake3transparent.png");
/* harmony import */ var _images_shake4transparent_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/shake4transparent.png */ "./src/images/shake4transparent.png");
/* harmony import */ var _images_bluewhiteBackground1920_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/bluewhiteBackground1920.jpg */ "./src/images/bluewhiteBackground1920.jpg");















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
    menuContainer.style.backgroundImage = `url(${_images_bluewhiteBackground1920_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
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
    const burgerOne = makeImage(_images_burger1transparent_png__WEBPACK_IMPORTED_MODULE_0__, 'burger');
    const burgerTwo = makeImage(_images_burger2transparent_png__WEBPACK_IMPORTED_MODULE_1__, 'burger');
    const burgerThree = makeImage(_images_burger3transparent_png__WEBPACK_IMPORTED_MODULE_2__, 'burger');
    const burgerFour = makeImage(_images_burger4transparent_png__WEBPACK_IMPORTED_MODULE_3__, 'burger');
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
    const shakeOne = makeImage(_images_shake1transparent_png__WEBPACK_IMPORTED_MODULE_4__, 'shake');
    const shakeTwo = makeImage(_images_shake2transparent_png__WEBPACK_IMPORTED_MODULE_5__, 'shake');
    const shakeThree = makeImage(_images_shake3transparent_png__WEBPACK_IMPORTED_MODULE_6__, 'shake');
    const shakeFour = makeImage(_images_shake4transparent_png__WEBPACK_IMPORTED_MODULE_7__, 'shake');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenuPage);

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_culversfarm_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/culversfarm.jpeg */ "./src/images/culversfarm.jpeg");


function makeTitle(name, className) {
    const title = document.createElement('div');
    title.textContent = name;
    title.classList.add(className);
    return title;
}

function makeContainer(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}


function makeNavBtn(name, className) {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.classList.add(className);
    return btn;
}


function makeHeader(left, middle, right, className) {
    const header = document.createElement('header');
    header.classList.add(className);
    header.appendChild(left);
    header.appendChild(middle);
    header.appendChild(right);
    return header;
}

function makeImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

function makeFooter(content, className) {
    const footer = document.createElement('footer');
    footer.textContent = content;
    footer.classList.add(className);
    return footer;
}


function loadHomePage() {
    const left = makeContainer('left');
    const aboutBtn = makeNavBtn('About', 'about-btn');
    left.appendChild(aboutBtn);
    const middle = makeTitle('Culvers', 'header-title');
    const right = document.createElement('div');
    right.classList.add('header-right')
    const homeBtn = makeNavBtn('Home', 'home-btn');
    const menuBtn = makeNavBtn('Menu', 'menu-btn');
    const locationBtn = makeNavBtn('Locations', 'location-btn');
    right.appendChild(homeBtn);
    right.appendChild(menuBtn);
    right.appendChild(locationBtn);
    const header = makeHeader(left, middle, right, 'header');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    const mainContentTop = document.createElement('div');
    mainContentTop.classList.add('main-top');
    const farmImg = makeImage(_images_culversfarm_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    farmImg.classList.add('farm-image');
    const welcome = document.createElement('div');
    welcome.textContent = 'Welcome to Delicious';
    welcome.classList.add('welcome');
    mainContentTop.appendChild(farmImg);
    mainContentTop.appendChild(welcome);
    const mainContentBottom = document.createElement('div');
    mainContentBottom.classList.add('main-bottom');
    const mainContentBottomContent = document.createElement('div');
    mainContentBottomContent.classList.add('about-us');
    mainContentBottomContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda saepe quis sapiente! Suscipit voluptates vero qui, nemo corporis quae sed porro aliquam aut laboriosam inventore mollitia cum quia molestias ipsa consequatur nesciunt unde saepe, ducimus modi veritatis odit, esse non? Rem asperiores nesciunt laboriosam voluptate sapiente obcaecati, recusandae aliquam ipsum, et molestias veritatis quibusdam hic quo sint. Nulla corporis, placeat eligendi tempore debitis qui quod ex repellendus vero vel, autem deleniti cum beatae, saepe repellat? Quis rerum soluta facilis tempora sed, commodi veniam cumque, temporibus corrupti dignissimos sequi fuga cupiditate tenetur perspiciatis delectus, eos impedit omnis! Doloremque explicabo commodi eos inventore quas? Cupiditate neque dicta vel non? Ipsam quidem vero, tempora similique, illum dicta in neque incidunt repudiandae quae beatae nulla. Quam nemo eveniet impedit maiores voluptates aperiam, dolores dolore quas eaque, veritatis sint quod corporis quidem labore dolorum vero quos quisquam nihil ullam? Nemo dolore sapiente consectetur quasi. Autem quos repudiandae vero aperiam, voluptates blanditiis omnis rem iusto dolore, quibusdam ipsa unde laboriosam nostrum aliquid illo rerum quas velit incidunt aspernatur. Sit enim accusantium odit deserunt, dolor voluptas rerum vitae placeat aliquam laboriosam, reiciendis assumenda quos autem sapiente iure doloremque tempora! Laboriosam vel vitae, doloremque facere possimus ipsum dolorum, molestiae deserunt reprehenderit ratione quam. Omnis ab nulla autem fugiat vero. Nobis debitis adipisci, obcaecati iure officia ut recusandae ea accusantium dolorum laboriosam quam amet quaerat ipsam aut repudiandae ullam quisquam inventore officiis velit magni. Eligendi, cumque reiciendis similique sint officiis distinctio praesentium impedit vitae qui et hic id voluptatum eos mollitia tempora vel voluptas, magni voluptatibus, unde optio earum. Perspiciatis reiciendis explicabo aspernatur et recusandae laboriosam sequi iure pariatur blanditiis, labore suscipit voluptate vitae unde facilis est repellat itaque asperiores sit. Fugit voluptatibus quas consequuntur tempora voluptate aliquid delectus, nisi architecto quaerat eius laudantium magni modi ab quod.';
    mainContentBottom.appendChild(mainContentBottomContent);
    mainContent.appendChild(mainContentTop);
    mainContent.appendChild(mainContentBottom);
    const footer = makeFooter('TommyKn', 'footer');
    const mainDiv = document.getElementById('content');
    mainContent.classList.add('active-page');
    mainDiv.appendChild(header);
    mainDiv.appendChild(mainContent);
    mainDiv.appendChild(footer);

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);

/***/ }),

/***/ "./src/images/bluewhiteBackground1920.jpg":
/*!************************************************!*\
  !*** ./src/images/bluewhiteBackground1920.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70aa493d820512805ac0.jpg";

/***/ }),

/***/ "./src/images/burger1transparent.png":
/*!*******************************************!*\
  !*** ./src/images/burger1transparent.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc4f91af8bb39ff3ffe6.png";

/***/ }),

/***/ "./src/images/burger2transparent.png":
/*!*******************************************!*\
  !*** ./src/images/burger2transparent.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21eef521a1dc209c47b6.png";

/***/ }),

/***/ "./src/images/burger3transparent.png":
/*!*******************************************!*\
  !*** ./src/images/burger3transparent.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8421cc4579cc95b879ef.png";

/***/ }),

/***/ "./src/images/burger4transparent.png":
/*!*******************************************!*\
  !*** ./src/images/burger4transparent.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4d28e22909157c9c6c7.png";

/***/ }),

/***/ "./src/images/culversfarm.jpeg":
/*!*************************************!*\
  !*** ./src/images/culversfarm.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d93204d91f991910eab.jpeg";

/***/ }),

/***/ "./src/images/shake1transparent.png":
/*!******************************************!*\
  !*** ./src/images/shake1transparent.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "986209241f894730d196.png";

/***/ }),

/***/ "./src/images/shake2transparent.png":
/*!******************************************!*\
  !*** ./src/images/shake2transparent.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84f1930c0a38a99730b3.png";

/***/ }),

/***/ "./src/images/shake3transparent.png":
/*!******************************************!*\
  !*** ./src/images/shake3transparent.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "316458644997a645761f.png";

/***/ }),

/***/ "./src/images/shake4transparent.png":
/*!******************************************!*\
  !*** ./src/images/shake4transparent.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c628f8b4cbc4ca34e8b1.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ "./src/modules/page-load.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/locations */ "./src/modules/locations.js");




(0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        (0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
        setBtnEventListeners();
        activePage = 'Home';
    
    });

    menuBtn.addEventListener('click', () => {
        if (activePage === 'Menu') {
            return;
        }
        clearPageContent();
        (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        activePage = 'Menu';
    });

    locationBtn.addEventListener('click', () => {
        if (activePage === 'Location') {
            return;
        }
        clearPageContent();
        (0,_modules_locations__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDTDtBQUNLOztBQUVwQyw4REFBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQUM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFDO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFDO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9jYXRpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL2JsdWV3aGl0ZUJhY2tncm91bmQxOTIwLmpwZyc7XG5cblxuXG5mdW5jdGlvbiBtYWtlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuXG5mdW5jdGlvbiBtYWtlVGl0bGUobmFtZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuXG5cblxuZnVuY3Rpb24gbG9hZExvY2F0aW9uc1BhZ2UoKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG1ha2VDb250YWluZXIoJ2JhY2tncm91bmQnKTtcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtCYWNrZ3JvdW5kfSlgO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBhZ2UnKTtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBtYWtlVGl0bGUoJ0NvbnRhY3QgVXMnLCAnY29udGFjdC10aXRsZScpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IG1ha2VDb250YWluZXIoJ2NvbnRlbnQtd3JhcHBlcicpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuICAgIGNvbnN0IGxvYWN0aW9uc1dyYXBwZXIgPSBtYWtlQ29udGFpbmVyKCdsb2NhdGlvbnMtd3JhcHBlcicpO1xuICAgIGNvbnN0IGxvY2F0aW9uSG9sZGVyID0gbWFrZVRpdGxlKCdMb2FjdGFpb246ICcsICdsb2NhdGlvbi1ob2xkZXInKTtcbiAgICBjb25zdCBsb2NhdG9pbiA9IG1ha2VUaXRsZSgnMjkwNiBQYXJtZW50ZXIgU3QsIE1pZGRsZXRvbiwgV0knLCAnbG9hY3Rpb24nKTtcbiAgICBsb2FjdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSG9sZGVyKTtcbiAgICBsb2FjdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGxvY2F0b2luKTtcbiAgICBjb25zdCBob3Vyc1dyYXBwZXIgPSBtYWtlQ29udGFpbmVyKCdob3Vycy13cmFwcGVyJyk7XG4gICAgY29uc3QgaG91cnNIb2xkZXIgPSBtYWtlVGl0bGUoJ0hvdXJzOiAnLCAnaG91cnMtaG9sZGVyJyk7XG4gICAgY29uc3QgaG91cnMgPSBtYWtlVGl0bGUoJ0V2ZXJ5ZGF5IDEwQU0tMTBQTScsICdob3VycycpO1xuICAgIGhvdXJzV3JhcHBlci5hcHBlbmRDaGlsZChob3Vyc0hvbGRlcik7XG4gICAgaG91cnNXcmFwcGVyLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICBjb25zdCBwaG9uZVdyYXBwcGVyID0gbWFrZUNvbnRhaW5lcigncGhvbmUtd3JhcHBlcicpO1xuICAgIGNvbnN0IHBob25lSG9sZGVyID0gbWFrZVRpdGxlKCdQaG9uZSBOdW1iZXI6ICcsICdwaG9uZS1ob2xkZXInKTtcbiAgICBjb25zdCBwaG9uZSA9IG1ha2VUaXRsZSgnKDExMSkgMTExLTExMTEnLCAncGhvbmUtbnVtYmVyJyk7XG4gICAgcGhvbmVXcmFwcHBlci5hcHBlbmRDaGlsZChwaG9uZUhvbGRlcik7XG4gICAgcGhvbmVXcmFwcHBlci5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgY29uc3QgaW5mb1dyYXBwZXIgPSBtYWtlQ29udGFpbmVyKCdpbmZvLXdyYXBwZXInKTtcbiAgICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChsb2FjdGlvbnNXcmFwcGVyKTtcbiAgICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChob3Vyc1dyYXBwZXIpO1xuICAgIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKHBob25lV3JhcHBwZXIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGluZm9XcmFwcGVyKTtcblxuXG5cblxuXG4gICAgLy8gbWFwXG4gICAgY29uc3QgbWFwV3JhcHBlciA9IG1ha2VDb250YWluZXIoJ21hcC13cmFwcGVyJyk7XG4gICAgbWFwV3JhcHBlci5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ5MzI5Mi44NjgzMjY4MTUzMSEyZC04OS41MDI4MzExNTMzNzQ4NCEzZDQzLjA1NDAwOTIwOTAxNjA1ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODA3YTkyN2U0YWE1NDg1JTNBMHgzNjlhZmU2N2U0NTAwY2JhITJzQ3VsdmVyJiMzOTtzITVlMCEzbTIhMXNlbiEyc3VzITR2MTY0NDEwNjU2MjA0OSE1bTIhMXNlbiEyc3VzXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+YDtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChtYXBXcmFwcGVyKTtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJylcbiAgICBtYWluRGl2Lmluc2VydEJlZm9yZShiYWNrZ3JvdW5kLCBmb290ZXIpO1xuXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRMb2NhdGlvbnNQYWdlOyIsImltcG9ydCBCdXJnZXIxIGZyb20gJy4uL2ltYWdlcy9idXJnZXIxdHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBCdXJnZXIyIGZyb20gJy4uL2ltYWdlcy9idXJnZXIydHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBCdXJnZXIzIGZyb20gJy4uL2ltYWdlcy9idXJnZXIzdHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBCdXJnZXI0IGZyb20gJy4uL2ltYWdlcy9idXJnZXI0dHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBzaGFrZTEgZnJvbSAnLi4vaW1hZ2VzL3NoYWtlMXRyYW5zcGFyZW50LnBuZyc7XG5pbXBvcnQgc2hha2UyIGZyb20gJy4uL2ltYWdlcy9zaGFrZTJ0cmFuc3BhcmVudC5wbmcnO1xuaW1wb3J0IHNoYWtlMyBmcm9tICcuLi9pbWFnZXMvc2hha2UzdHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBzaGFrZTQgZnJvbSAnLi4vaW1hZ2VzL3NoYWtlNHRyYW5zcGFyZW50LnBuZyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvYmx1ZXdoaXRlQmFja2dyb3VuZDE5MjAuanBnJztcblxuXG5cblxuXG5cbmZ1bmN0aW9uIG1ha2VDb250YWluZXIoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBtYWtlVGl0bGUobmFtZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gbWFrZUltYWdlKHNyYywgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBpbWFnZTtcbn1cblxuXG5mdW5jdGlvbiBtYWtlTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IG1ha2VDb250YWluZXIoJ21lbnUtY29udGVudCcpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBhZ2UnKTtcbiAgICBtZW51Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtCYWNrZ3JvdW5kfSlgO1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IG1ha2VUaXRsZSgnTWVudScsICdtZW51LXRpdGxlJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGl0bGUpXG4gICAgY29uc3QgbWVudU1haW4gPSBtYWtlQ29udGFpbmVyKCdtZW51LW1haW4nKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVNYWluKTtcbiAgICBjb25zdCBmb29kSXRlbXMgPSBtYWtlVGl0bGUoJ0J1cmdlcnMnLCAnZm9vZCcpO1xuICAgIG1lbnVNYWluLmFwcGVuZENoaWxkKGZvb2RJdGVtcyk7XG4gICAgY29uc3QgZm9vZEdyaWQgPSBtYWtlQ29udGFpbmVyKCdmb29kLWdyaWQnKTtcbiAgICBjb25zdCBidXJnZXJXcmFwcGVyMSA9IG1ha2VDb250YWluZXIoJ2J1cmdlci13cmFwcGVyJyk7XG4gICAgY29uc3QgYnVyZ2VyV3JhcHBlcjIgPSBtYWtlQ29udGFpbmVyKCdidXJnZXItd3JhcHBlcicpO1xuICAgIGNvbnN0IGJ1cmdlcldyYXBwZXIzID0gbWFrZUNvbnRhaW5lcignYnVyZ2VyLXdyYXBwZXInKTtcbiAgICBjb25zdCBidXJnZXJXcmFwcGVyNCA9IG1ha2VDb250YWluZXIoJ2J1cmdlci13cmFwcGVyJyk7XG4gICAgY29uc3QgYnVyZ2VyT25lID0gbWFrZUltYWdlKEJ1cmdlcjEsICdidXJnZXInKTtcbiAgICBjb25zdCBidXJnZXJUd28gPSBtYWtlSW1hZ2UoQnVyZ2VyMiwgJ2J1cmdlcicpO1xuICAgIGNvbnN0IGJ1cmdlclRocmVlID0gbWFrZUltYWdlKEJ1cmdlcjMsICdidXJnZXInKTtcbiAgICBjb25zdCBidXJnZXJGb3VyID0gbWFrZUltYWdlKEJ1cmdlcjQsICdidXJnZXInKTtcbiAgICBjb25zdCBidXJnZXJPbmVUZXh0ID0gbWFrZVRpdGxlKCdCdXR0ZXJCdXJnZXIgQ2hlZXNlJywgJ2J1cmdlci1vbmUnKTtcbiAgICBjb25zdCBidXJnZXJUd29UZXh0ID0gbWFrZVRpdGxlKCdNdXNocm9vbSAmIFN3aXNzIEJ1dHRlckJ1cmdlcicsICdidXJnZXItdHdvJyk7XG4gICAgY29uc3QgYnVyZ2VyVGhyZWVUZXh0ID0gbWFrZVRpdGxlKFwiVGhlIEN1bHZlcidzIEJhY29uIERlbHV4ZVwiLCAnYnVyZ2VyLXRocmVlJyk7XG4gICAgY29uc3QgYnVyZ2VyRm91clRleHQgPSBtYWtlVGl0bGUoJ0J1dHRlckJ1cmdlciDigJxUaGUgT3JpZ2luYWzigJ0nLCAnYnVyZ2VyLWZvdXInKTtcbiAgICBidXJnZXJXcmFwcGVyMS5hcHBlbmRDaGlsZChidXJnZXJPbmUpO1xuICAgIGJ1cmdlcldyYXBwZXIxLmFwcGVuZENoaWxkKGJ1cmdlck9uZVRleHQpO1xuICAgIGJ1cmdlcldyYXBwZXIyLmFwcGVuZENoaWxkKGJ1cmdlclR3byk7XG4gICAgYnVyZ2VyV3JhcHBlcjIuYXBwZW5kQ2hpbGQoYnVyZ2VyVHdvVGV4dCk7XG4gICAgYnVyZ2VyV3JhcHBlcjMuYXBwZW5kQ2hpbGQoYnVyZ2VyVGhyZWUpO1xuICAgIGJ1cmdlcldyYXBwZXIzLmFwcGVuZENoaWxkKGJ1cmdlclRocmVlVGV4dCk7XG4gICAgYnVyZ2VyV3JhcHBlcjQuYXBwZW5kQ2hpbGQoYnVyZ2VyRm91cik7XG4gICAgYnVyZ2VyV3JhcHBlcjQuYXBwZW5kQ2hpbGQoYnVyZ2VyRm91clRleHQpO1xuICAgIGZvb2RHcmlkLmFwcGVuZENoaWxkKGJ1cmdlcldyYXBwZXIxKTtcbiAgICBmb29kR3JpZC5hcHBlbmRDaGlsZChidXJnZXJXcmFwcGVyMik7XG4gICAgZm9vZEdyaWQuYXBwZW5kQ2hpbGQoYnVyZ2VyV3JhcHBlcjMpO1xuICAgIGZvb2RHcmlkLmFwcGVuZENoaWxkKGJ1cmdlcldyYXBwZXI0KTtcbiAgICBtZW51TWFpbi5hcHBlbmRDaGlsZChmb29kR3JpZCk7XG4gICAgLy8gc2hha2VzIHNlY3Rpb25cbiAgICBjb25zdCBzaGFrZUl0ZW1zID0gbWFrZVRpdGxlKCdTaGFrZXMnLCAnc2hha2VzLXRpdGxlJyk7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQoc2hha2VJdGVtcyk7XG4gICAgY29uc3Qgc2hha2VHcmlkID0gbWFrZUNvbnRhaW5lcignc2hha2UtZ3JpZCcpO1xuICAgIGNvbnN0IHNoYWtlV3JhcHBlcjEgPSBtYWtlQ29udGFpbmVyKCdzaGFrZS13cmFwcGVyJyk7XG4gICAgY29uc3Qgc2hha2VXcmFwcGVyMiA9IG1ha2VDb250YWluZXIoJ3NoYWtlLXdyYXBwZXInKTtcbiAgICBjb25zdCBzaGFrZVdyYXBwZXIzID0gbWFrZUNvbnRhaW5lcignc2hha2Utd3JhcHBlcicpO1xuICAgIGNvbnN0IHNoYWtlV3JhcHBlcjQgPSBtYWtlQ29udGFpbmVyKCdzaGFrZS13cmFwcGVyJyk7XG4gICAgY29uc3Qgc2hha2VUZXh0MSA9IG1ha2VUaXRsZSgnQ2hvY29sYXRlIFNoYWtlJywgJ3NoYWtlLW9uZScpO1xuICAgIGNvbnN0IHNoYWtlVGV4dDIgPSBtYWtlVGl0bGUoJ1ZhbmlsbGEgU2hha2UnLCAnc2hha2UtdHdvJyk7XG4gICAgY29uc3Qgc2hha2VUZXh0MyA9IG1ha2VUaXRsZSgnTWludCBTaGFrZScsICdzaGFrZS10aHJlZScpO1xuICAgIGNvbnN0IHNoYWtlVGV4dDQgPSBtYWtlVGl0bGUoXCJDdWx2ZXIncyBSb290IEJlZXIgRmxvYXRcIiwgJ3NoYWtlLWZvdXInKTtcbiAgICBjb25zdCBzaGFrZU9uZSA9IG1ha2VJbWFnZShzaGFrZTEsICdzaGFrZScpO1xuICAgIGNvbnN0IHNoYWtlVHdvID0gbWFrZUltYWdlKHNoYWtlMiwgJ3NoYWtlJyk7XG4gICAgY29uc3Qgc2hha2VUaHJlZSA9IG1ha2VJbWFnZShzaGFrZTMsICdzaGFrZScpO1xuICAgIGNvbnN0IHNoYWtlRm91ciA9IG1ha2VJbWFnZShzaGFrZTQsICdzaGFrZScpO1xuICAgIHNoYWtlV3JhcHBlcjEuYXBwZW5kQ2hpbGQoc2hha2VPbmUpO1xuICAgIHNoYWtlV3JhcHBlcjEuYXBwZW5kQ2hpbGQoc2hha2VUZXh0MSk7XG4gICAgc2hha2VXcmFwcGVyMi5hcHBlbmRDaGlsZChzaGFrZVR3byk7XG4gICAgc2hha2VXcmFwcGVyMi5hcHBlbmRDaGlsZChzaGFrZVRleHQyKTtcbiAgICBzaGFrZVdyYXBwZXIzLmFwcGVuZENoaWxkKHNoYWtlVGhyZWUpO1xuICAgIHNoYWtlV3JhcHBlcjMuYXBwZW5kQ2hpbGQoc2hha2VUZXh0Myk7XG4gICAgc2hha2VXcmFwcGVyNC5hcHBlbmRDaGlsZChzaGFrZUZvdXIpO1xuICAgIHNoYWtlV3JhcHBlcjQuYXBwZW5kQ2hpbGQoc2hha2VUZXh0NCk7XG4gICAgc2hha2VHcmlkLmFwcGVuZENoaWxkKHNoYWtlV3JhcHBlcjEpO1xuICAgIHNoYWtlR3JpZC5hcHBlbmRDaGlsZChzaGFrZVdyYXBwZXIyKTtcbiAgICBzaGFrZUdyaWQuYXBwZW5kQ2hpbGQoc2hha2VXcmFwcGVyMyk7XG4gICAgc2hha2VHcmlkLmFwcGVuZENoaWxkKHNoYWtlV3JhcHBlcjQpO1xuICAgIG1lbnVNYWluLmFwcGVuZENoaWxkKHNoYWtlR3JpZCk7XG5cblxuXG5cblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKVxuICAgIG1haW5EaXYuaW5zZXJ0QmVmb3JlKG1lbnVDb250YWluZXIsIGZvb3Rlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNZW51UGFnZTsiLCJpbXBvcnQgSWNvbiBmcm9tICcuLi9pbWFnZXMvY3VsdmVyc2Zhcm0uanBlZyc7XG5cbmZ1bmN0aW9uIG1ha2VUaXRsZShuYW1lLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBtYWtlQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuXG5mdW5jdGlvbiBtYWtlTmF2QnRuKG5hbWUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gYnRuO1xufVxuXG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIobGVmdCwgbWlkZGxlLCByaWdodCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1pZGRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWtlSW1hZ2Uoc3JjKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9vdGVyKGNvbnRlbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgICBjb25zdCBsZWZ0ID0gbWFrZUNvbnRhaW5lcignbGVmdCcpO1xuICAgIGNvbnN0IGFib3V0QnRuID0gbWFrZU5hdkJ0bignQWJvdXQnLCAnYWJvdXQtYnRuJyk7XG4gICAgbGVmdC5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG4gICAgY29uc3QgbWlkZGxlID0gbWFrZVRpdGxlKCdDdWx2ZXJzJywgJ2hlYWRlci10aXRsZScpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXJpZ2h0JylcbiAgICBjb25zdCBob21lQnRuID0gbWFrZU5hdkJ0bignSG9tZScsICdob21lLWJ0bicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBtYWtlTmF2QnRuKCdNZW51JywgJ21lbnUtYnRuJyk7XG4gICAgY29uc3QgbG9jYXRpb25CdG4gPSBtYWtlTmF2QnRuKCdMb2NhdGlvbnMnLCAnbG9jYXRpb24tYnRuJyk7XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQobG9jYXRpb25CdG4pO1xuICAgIGNvbnN0IGhlYWRlciA9IG1ha2VIZWFkZXIobGVmdCwgbWlkZGxlLCByaWdodCwgJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudFRvcC5jbGFzc0xpc3QuYWRkKCdtYWluLXRvcCcpO1xuICAgIGNvbnN0IGZhcm1JbWcgPSBtYWtlSW1hZ2UoSWNvbik7XG4gICAgZmFybUltZy5jbGFzc0xpc3QuYWRkKCdmYXJtLWltYWdlJyk7XG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBEZWxpY2lvdXMnO1xuICAgIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICAgIG1haW5Db250ZW50VG9wLmFwcGVuZENoaWxkKGZhcm1JbWcpO1xuICAgIG1haW5Db250ZW50VG9wLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICAgIGNvbnN0IG1haW5Db250ZW50Qm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRCb3R0b20uY2xhc3NMaXN0LmFkZCgnbWFpbi1ib3R0b20nKTtcbiAgICBjb25zdCBtYWluQ29udGVudEJvdHRvbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudEJvdHRvbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdXMnKTtcbiAgICBtYWluQ29udGVudEJvdHRvbUNvbnRlbnQudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvIGFzc3VtZW5kYSBzYWVwZSBxdWlzIHNhcGllbnRlISBTdXNjaXBpdCB2b2x1cHRhdGVzIHZlcm8gcXVpLCBuZW1vIGNvcnBvcmlzIHF1YWUgc2VkIHBvcnJvIGFsaXF1YW0gYXV0IGxhYm9yaW9zYW0gaW52ZW50b3JlIG1vbGxpdGlhIGN1bSBxdWlhIG1vbGVzdGlhcyBpcHNhIGNvbnNlcXVhdHVyIG5lc2NpdW50IHVuZGUgc2FlcGUsIGR1Y2ltdXMgbW9kaSB2ZXJpdGF0aXMgb2RpdCwgZXNzZSBub24/IFJlbSBhc3BlcmlvcmVzIG5lc2NpdW50IGxhYm9yaW9zYW0gdm9sdXB0YXRlIHNhcGllbnRlIG9iY2FlY2F0aSwgcmVjdXNhbmRhZSBhbGlxdWFtIGlwc3VtLCBldCBtb2xlc3RpYXMgdmVyaXRhdGlzIHF1aWJ1c2RhbSBoaWMgcXVvIHNpbnQuIE51bGxhIGNvcnBvcmlzLCBwbGFjZWF0IGVsaWdlbmRpIHRlbXBvcmUgZGViaXRpcyBxdWkgcXVvZCBleCByZXBlbGxlbmR1cyB2ZXJvIHZlbCwgYXV0ZW0gZGVsZW5pdGkgY3VtIGJlYXRhZSwgc2FlcGUgcmVwZWxsYXQ/IFF1aXMgcmVydW0gc29sdXRhIGZhY2lsaXMgdGVtcG9yYSBzZWQsIGNvbW1vZGkgdmVuaWFtIGN1bXF1ZSwgdGVtcG9yaWJ1cyBjb3JydXB0aSBkaWduaXNzaW1vcyBzZXF1aSBmdWdhIGN1cGlkaXRhdGUgdGVuZXR1ciBwZXJzcGljaWF0aXMgZGVsZWN0dXMsIGVvcyBpbXBlZGl0IG9tbmlzISBEb2xvcmVtcXVlIGV4cGxpY2FibyBjb21tb2RpIGVvcyBpbnZlbnRvcmUgcXVhcz8gQ3VwaWRpdGF0ZSBuZXF1ZSBkaWN0YSB2ZWwgbm9uPyBJcHNhbSBxdWlkZW0gdmVybywgdGVtcG9yYSBzaW1pbGlxdWUsIGlsbHVtIGRpY3RhIGluIG5lcXVlIGluY2lkdW50IHJlcHVkaWFuZGFlIHF1YWUgYmVhdGFlIG51bGxhLiBRdWFtIG5lbW8gZXZlbmlldCBpbXBlZGl0IG1haW9yZXMgdm9sdXB0YXRlcyBhcGVyaWFtLCBkb2xvcmVzIGRvbG9yZSBxdWFzIGVhcXVlLCB2ZXJpdGF0aXMgc2ludCBxdW9kIGNvcnBvcmlzIHF1aWRlbSBsYWJvcmUgZG9sb3J1bSB2ZXJvIHF1b3MgcXVpc3F1YW0gbmloaWwgdWxsYW0/IE5lbW8gZG9sb3JlIHNhcGllbnRlIGNvbnNlY3RldHVyIHF1YXNpLiBBdXRlbSBxdW9zIHJlcHVkaWFuZGFlIHZlcm8gYXBlcmlhbSwgdm9sdXB0YXRlcyBibGFuZGl0aWlzIG9tbmlzIHJlbSBpdXN0byBkb2xvcmUsIHF1aWJ1c2RhbSBpcHNhIHVuZGUgbGFib3Jpb3NhbSBub3N0cnVtIGFsaXF1aWQgaWxsbyByZXJ1bSBxdWFzIHZlbGl0IGluY2lkdW50IGFzcGVybmF0dXIuIFNpdCBlbmltIGFjY3VzYW50aXVtIG9kaXQgZGVzZXJ1bnQsIGRvbG9yIHZvbHVwdGFzIHJlcnVtIHZpdGFlIHBsYWNlYXQgYWxpcXVhbSBsYWJvcmlvc2FtLCByZWljaWVuZGlzIGFzc3VtZW5kYSBxdW9zIGF1dGVtIHNhcGllbnRlIGl1cmUgZG9sb3JlbXF1ZSB0ZW1wb3JhISBMYWJvcmlvc2FtIHZlbCB2aXRhZSwgZG9sb3JlbXF1ZSBmYWNlcmUgcG9zc2ltdXMgaXBzdW0gZG9sb3J1bSwgbW9sZXN0aWFlIGRlc2VydW50IHJlcHJlaGVuZGVyaXQgcmF0aW9uZSBxdWFtLiBPbW5pcyBhYiBudWxsYSBhdXRlbSBmdWdpYXQgdmVyby4gTm9iaXMgZGViaXRpcyBhZGlwaXNjaSwgb2JjYWVjYXRpIGl1cmUgb2ZmaWNpYSB1dCByZWN1c2FuZGFlIGVhIGFjY3VzYW50aXVtIGRvbG9ydW0gbGFib3Jpb3NhbSBxdWFtIGFtZXQgcXVhZXJhdCBpcHNhbSBhdXQgcmVwdWRpYW5kYWUgdWxsYW0gcXVpc3F1YW0gaW52ZW50b3JlIG9mZmljaWlzIHZlbGl0IG1hZ25pLiBFbGlnZW5kaSwgY3VtcXVlIHJlaWNpZW5kaXMgc2ltaWxpcXVlIHNpbnQgb2ZmaWNpaXMgZGlzdGluY3RpbyBwcmFlc2VudGl1bSBpbXBlZGl0IHZpdGFlIHF1aSBldCBoaWMgaWQgdm9sdXB0YXR1bSBlb3MgbW9sbGl0aWEgdGVtcG9yYSB2ZWwgdm9sdXB0YXMsIG1hZ25pIHZvbHVwdGF0aWJ1cywgdW5kZSBvcHRpbyBlYXJ1bS4gUGVyc3BpY2lhdGlzIHJlaWNpZW5kaXMgZXhwbGljYWJvIGFzcGVybmF0dXIgZXQgcmVjdXNhbmRhZSBsYWJvcmlvc2FtIHNlcXVpIGl1cmUgcGFyaWF0dXIgYmxhbmRpdGlpcywgbGFib3JlIHN1c2NpcGl0IHZvbHVwdGF0ZSB2aXRhZSB1bmRlIGZhY2lsaXMgZXN0IHJlcGVsbGF0IGl0YXF1ZSBhc3BlcmlvcmVzIHNpdC4gRnVnaXQgdm9sdXB0YXRpYnVzIHF1YXMgY29uc2VxdXVudHVyIHRlbXBvcmEgdm9sdXB0YXRlIGFsaXF1aWQgZGVsZWN0dXMsIG5pc2kgYXJjaGl0ZWN0byBxdWFlcmF0IGVpdXMgbGF1ZGFudGl1bSBtYWduaSBtb2RpIGFiIHF1b2QuJztcbiAgICBtYWluQ29udGVudEJvdHRvbS5hcHBlbmRDaGlsZChtYWluQ29udGVudEJvdHRvbUNvbnRlbnQpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50VG9wKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgZm9vdGVyID0gbWFrZUZvb3RlcignVG9tbXlLbicsICdmb290ZXInKTtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcGFnZScpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG0gZnJvbSAnLi9tb2R1bGVzL3BhZ2UtbG9hZCc7XG5pbXBvcnQgeCBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5pbXBvcnQgeiBmcm9tICcuL21vZHVsZXMvbG9jYXRpb25zJztcblxubSgpO1xuLy8gRURJVCBMT0NBVElPTlMgUEFHRVxuLy8gY2xlYXJQYWdlQ29udGVudCgpO1xuLy8geigpO1xuXG5cbmxldCBhY3RpdmVQYWdlID0gJ0hvbWUnO1xuc2V0QnRuRXZlbnRMaXN0ZW5lcnMoKTtcbmZ1bmN0aW9uIHNldEJ0bkV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG4nKTtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJyk7XG4gICAgY29uc3QgbG9jYXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tYnRuJyk7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVBhZ2UgPT09ICdIb21lJykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJGdWxsUGFnZSgpO1xuICAgICAgICBtKCk7XG4gICAgICAgIHNldEJ0bkV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIGFjdGl2ZVBhZ2UgPSAnSG9tZSc7XG4gICAgXG4gICAgfSk7XG5cbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlUGFnZSA9PT0gJ01lbnUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJQYWdlQ29udGVudCgpO1xuICAgICAgICB4KCk7XG4gICAgICAgIGFjdGl2ZVBhZ2UgPSAnTWVudSc7XG4gICAgfSk7XG5cbiAgICBsb2NhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVBhZ2UgPT09ICdMb2NhdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclBhZ2VDb250ZW50KCk7XG4gICAgICAgIHooKTtcbiAgICAgICAgYWN0aXZlUGFnZSA9ICdMb2NhdGlvbic7XG4gICAgfSk7XG4gICAgXG59XG5cblxuZnVuY3Rpb24gY2xlYXJQYWdlQ29udGVudCgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtcGFnZScpO1xuICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKHBhZ2UpO1xufVxuZnVuY3Rpb24gY2xlYXJGdWxsUGFnZSgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGVkaXRNZW51KCkge1xuLy8gICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbi8vICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1wYWdlJyk7XG4vLyAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQocGFnZSk7XG4vLyAgICAgeCgpO1xuLy8gfVxuXG4vLyBlZGl0TWVudSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==