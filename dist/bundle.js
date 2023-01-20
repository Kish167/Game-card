/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const app = document.querySelector('.app');

const chooseLevel = document.createElement('div');
app.appendChild(chooseLevel); 

window.application = {};

function renderLevel() {

  chooseLevel.className = chooseLevel

  const box = document.createElement('div');
  box.className = 'box';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Выбери сложность';


  const choose = document.createElement('div');
  choose.className = 'choose';
  choose.textContent = '1';

  const choose2 = document.createElement('div');
  choose.className = 'choose2';
  choose.textContent = '2';

  const choose3 = document.createElement('div');
  choose.className = 'choose3';
  choose.textContent = '3';

  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Старт'

  chooseLevel.appendChild(box);
  box.appendChild(title);
  box.appendChild(title);
  box.appendChild(choose);
  box.appendChild(choose2);
  box.appendChild(choose3); 
  box.appendChild(button);
  
 
  
  

}

renderLevel();




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map