/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const createContactPage = () => {
    const content = document.querySelector("#content");

    const ParagDescrip = document.createElement("h2");
    ParagDescrip.textContent = "Do you have any questions or would you like to make a reservation ?You can easily do this online.You can reach us by phone at + 31(0)43 354 10 11 between 17: 00 and 22: 00 on our opening days.";

    content.appendChild(ParagDescrip);
    // create a contact form
    const form = document.createElement("form");
    form.id = "contact-form";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter your name here";
    form.appendChild(nameInput);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Send Message";
    form.appendChild(submitButton);

    content.appendChild(form);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// homepage.js

const createHomePage = () => {
    const content = document.querySelector("#content");


    const homeImage = document.createElement("img")
    homeImage.src = "homepage.png";
    content.appendChild(homeImage);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");





function initialPageLoad() {
    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const createMenuPage = () => {
    const content = document.querySelector("#content");

    const ParagDescript = document.createElement("h2");
    ParagDescript.textContent = "Be surprised by our extensive menu full of delicious Mediterranean tapas.At La Barraca we do not only serve Spanish tapas, but a variety of dishesfrom the entire Mediterranean region.";

    content.appendChild(ParagDescript);

    // create a list with the menu items
    const menuList = document.createElement("ul");
    const menuListItem1 = document.createElement("li");
    menuListItem1.textContent = "Baguete ------------------ 4.5$"

    const menuListItem2 = document.createElement("li");
    menuListItem2.textContent = "Bread with aioli ------------------ 6.3$"

    const menuListItem3 = document.createElement("li");
    menuListItem3.textContent = "Grilled bread with tomato souce ------------------ 7.9$"

    
    menuList.appendChild(menuListItem1, menuListItem2, menuListItem3);
    content.appendChild(menuList);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ "./src/menupage.js");
/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactpage */ "./src/contactpage.js");




const createNavigationMenu = () => {
    const nav = document.querySelector("#menu");


    const HomeLink = document.createElement("button");
    HomeLink.innerHTML = "Home";
    nav.appendChild(HomeLink);

    const MenuLink = document.createElement("button");
    MenuLink.innerHTML = "Menu";
    nav.appendChild(MenuLink);

    const ContactLink = document.createElement("button");
    ContactLink.innerHTML = "Contact us";
    nav.appendChild(ContactLink);

    HomeLink.addEventListener('click', () => {
        clearContent();
        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })

    MenuLink.addEventListener('click', () => {
        clearContent()
        ;(0,_menupage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    ContactLink.addEventListener('click', () => {
        clearContent()
        ;(0,_contactpage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })

}

function clearContent() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = "";
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavigationMenu);

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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage */ "./src/loadpage.js");




//load the page
(0,_loadpage__WEBPACK_IMPORTED_MODULE_0__["default"])();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQzNCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjdCO0FBQ0E7QUFDd0M7QUFDUTtBQUNoRDtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQixJQUFJLHVEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ1g5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlc7QUFDQTtBQUNLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBYztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBYztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9COzs7Ozs7VUM1Q25DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUN5QztBQUN6QztBQUNBO0FBQ0EscURBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9sb2FkcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IFBhcmFnRGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIFBhcmFnRGVzY3JpcC50ZXh0Q29udGVudCA9IFwiRG8geW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciB3b3VsZCB5b3UgbGlrZSB0byBtYWtlIGEgcmVzZXJ2YXRpb24gP1lvdSBjYW4gZWFzaWx5IGRvIHRoaXMgb25saW5lLllvdSBjYW4gcmVhY2ggdXMgYnkgcGhvbmUgYXQgKyAzMSgwKTQzIDM1NCAxMCAxMSBiZXR3ZWVuIDE3OiAwMCBhbmQgMjI6IDAwIG9uIG91ciBvcGVuaW5nIGRheXMuXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChQYXJhZ0Rlc2NyaXApO1xyXG4gICAgLy8gY3JlYXRlIGEgY29udGFjdCBmb3JtXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBmb3JtLmlkID0gXCJjb250YWN0LWZvcm1cIjtcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9IFwiU2VuZCBNZXNzYWdlXCI7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RQYWdlOyIsIlxyXG4vLyBob21lcGFnZS5qc1xyXG5cclxuY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBob21lSW1hZ2Uuc3JjID0gXCJob21lcGFnZS5wbmdcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUltYWdlKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlOyIsIlxyXG5cclxuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gJy4vaG9tZXBhZ2UnO1xyXG5pbXBvcnQgY3JlYXRlTmF2aWdhdGlvbk1lbnUgZnJvbSAnLi9uYXZpZ2F0aW9uJztcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcclxuICAgIGNyZWF0ZUhvbWVQYWdlKCk7XHJcbiAgICBjcmVhdGVOYXZpZ2F0aW9uTWVudSgpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkOyIsIlxyXG5cclxuY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IFBhcmFnRGVzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBQYXJhZ0Rlc2NyaXB0LnRleHRDb250ZW50ID0gXCJCZSBzdXJwcmlzZWQgYnkgb3VyIGV4dGVuc2l2ZSBtZW51IGZ1bGwgb2YgZGVsaWNpb3VzIE1lZGl0ZXJyYW5lYW4gdGFwYXMuQXQgTGEgQmFycmFjYSB3ZSBkbyBub3Qgb25seSBzZXJ2ZSBTcGFuaXNoIHRhcGFzLCBidXQgYSB2YXJpZXR5IG9mIGRpc2hlc2Zyb20gdGhlIGVudGlyZSBNZWRpdGVycmFuZWFuIHJlZ2lvbi5cIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKFBhcmFnRGVzY3JpcHQpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhIGxpc3Qgd2l0aCB0aGUgbWVudSBpdGVtc1xyXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBtZW51TGlzdEl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbWVudUxpc3RJdGVtMS50ZXh0Q29udGVudCA9IFwiQmFndWV0ZSAtLS0tLS0tLS0tLS0tLS0tLS0gNC41JFwiXHJcblxyXG4gICAgY29uc3QgbWVudUxpc3RJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIG1lbnVMaXN0SXRlbTIudGV4dENvbnRlbnQgPSBcIkJyZWFkIHdpdGggYWlvbGkgLS0tLS0tLS0tLS0tLS0tLS0tIDYuMyRcIlxyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBtZW51TGlzdEl0ZW0zLnRleHRDb250ZW50ID0gXCJHcmlsbGVkIGJyZWFkIHdpdGggdG9tYXRvIHNvdWNlIC0tLS0tLS0tLS0tLS0tLS0tLSA3LjkkXCJcclxuXHJcbiAgICBcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbTEsIG1lbnVMaXN0SXRlbTIsIG1lbnVMaXN0SXRlbTMpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVQYWdlOyIsImltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gJy4vbWVudXBhZ2UnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0cGFnZSdcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdmlnYXRpb25NZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBIb21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBIb21lTGluay5pbm5lckhUTUwgPSBcIkhvbWVcIjtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChIb21lTGluayk7XHJcblxyXG4gICAgY29uc3QgTWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgTWVudUxpbmsuaW5uZXJIVE1MID0gXCJNZW51XCI7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoTWVudUxpbmspO1xyXG5cclxuICAgIGNvbnN0IENvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIENvbnRhY3RMaW5rLmlubmVySFRNTCA9IFwiQ29udGFjdCB1c1wiO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKENvbnRhY3RMaW5rKTtcclxuXHJcbiAgICBIb21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICBNZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjbGVhckNvbnRlbnQoKVxyXG4gICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIENvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpXHJcbiAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdmlnYXRpb25NZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXHJcblxyXG5pbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gJy4vbG9hZHBhZ2UnO1xyXG5cclxuLy9sb2FkIHRoZSBwYWdlXHJcbmluaXRpYWxQYWdlTG9hZCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=