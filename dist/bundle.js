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
        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })

    MenuLink.addEventListener('click', () => {
        ;(0,_menupage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    ContactLink.addEventListener('click', () => {
        ;(0,_contactpage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQzNCaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjdCO0FBQ0E7QUFDd0M7QUFDUTtBQUNoRDtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQixJQUFJLHVEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ1g5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlc7QUFDQTtBQUNLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWM7QUFDdEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLHNEQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSx5REFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG9CQUFvQjs7Ozs7O1VDbENuQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDeUM7QUFDekM7QUFDQTtBQUNBLHFEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBQYXJhZ0Rlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBQYXJhZ0Rlc2NyaXAudGV4dENvbnRlbnQgPSBcIkRvIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3Igd291bGQgeW91IGxpa2UgdG8gbWFrZSBhIHJlc2VydmF0aW9uID9Zb3UgY2FuIGVhc2lseSBkbyB0aGlzIG9ubGluZS5Zb3UgY2FuIHJlYWNoIHVzIGJ5IHBob25lIGF0ICsgMzEoMCk0MyAzNTQgMTAgMTEgYmV0d2VlbiAxNzogMDAgYW5kIDIyOiAwMCBvbiBvdXIgb3BlbmluZyBkYXlzLlwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoUGFyYWdEZXNjcmlwKTtcclxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhY3QgZm9ybVxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybS5pZCA9IFwiY29udGFjdC1mb3JtXCI7XHJcblxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIlNlbmQgTWVzc2FnZVwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTsiLCJcclxuLy8gaG9tZXBhZ2UuanNcclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcblxyXG4gICAgY29uc3QgaG9tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgaG9tZUltYWdlLnNyYyA9IFwiaG9tZXBhZ2UucG5nXCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVJbWFnZSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lUGFnZTsiLCJcclxuXHJcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IGNyZWF0ZU5hdmlnYXRpb25NZW51IGZyb20gJy4vbmF2aWdhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XHJcbiAgICBjcmVhdGVIb21lUGFnZSgpO1xyXG4gICAgY3JlYXRlTmF2aWdhdGlvbk1lbnUoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDsiLCJcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBQYXJhZ0Rlc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgUGFyYWdEZXNjcmlwdC50ZXh0Q29udGVudCA9IFwiQmUgc3VycHJpc2VkIGJ5IG91ciBleHRlbnNpdmUgbWVudSBmdWxsIG9mIGRlbGljaW91cyBNZWRpdGVycmFuZWFuIHRhcGFzLkF0IExhIEJhcnJhY2Egd2UgZG8gbm90IG9ubHkgc2VydmUgU3BhbmlzaCB0YXBhcywgYnV0IGEgdmFyaWV0eSBvZiBkaXNoZXNmcm9tIHRoZSBlbnRpcmUgTWVkaXRlcnJhbmVhbiByZWdpb24uXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChQYXJhZ0Rlc2NyaXB0KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSBsaXN0IHdpdGggdGhlIG1lbnUgaXRlbXNcclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgbWVudUxpc3RJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIG1lbnVMaXN0SXRlbTEudGV4dENvbnRlbnQgPSBcIkJhZ3VldGUgLS0tLS0tLS0tLS0tLS0tLS0tIDQuNSRcIlxyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBtZW51TGlzdEl0ZW0yLnRleHRDb250ZW50ID0gXCJCcmVhZCB3aXRoIGFpb2xpIC0tLS0tLS0tLS0tLS0tLS0tLSA2LjMkXCJcclxuXHJcbiAgICBjb25zdCBtZW51TGlzdEl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbWVudUxpc3RJdGVtMy50ZXh0Q29udGVudCA9IFwiR3JpbGxlZCBicmVhZCB3aXRoIHRvbWF0byBzb3VjZSAtLS0tLS0tLS0tLS0tLS0tLS0gNy45JFwiXHJcblxyXG4gICAgXHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW0xLCBtZW51TGlzdEl0ZW0yLCBtZW51TGlzdEl0ZW0zKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51UGFnZTsiLCJpbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tICcuL21lbnVwYWdlJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdHBhZ2UnXHJcblxyXG5jb25zdCBjcmVhdGVOYXZpZ2F0aW9uTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcclxuXHJcblxyXG4gICAgY29uc3QgSG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgSG9tZUxpbmsuaW5uZXJIVE1MID0gXCJIb21lXCI7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoSG9tZUxpbmspO1xyXG5cclxuICAgIGNvbnN0IE1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIE1lbnVMaW5rLmlubmVySFRNTCA9IFwiTWVudVwiO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKE1lbnVMaW5rKTtcclxuXHJcbiAgICBjb25zdCBDb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBDb250YWN0TGluay5pbm5lckhUTUwgPSBcIkNvbnRhY3QgdXNcIjtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChDb250YWN0TGluayk7XHJcblxyXG4gICAgSG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlSG9tZVBhZ2UoKTtcclxuICAgIH0pXHJcblxyXG4gICAgTWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcclxuICAgIH0pXHJcblxyXG4gICAgQ29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZpZ2F0aW9uTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxyXG5cclxuaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tICcuL2xvYWRwYWdlJztcclxuXHJcbi8vbG9hZCB0aGUgcGFnZVxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9