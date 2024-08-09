/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/contact.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! contact.png */ "./src/css/contact.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
#content_contact {
    overflow: hidden;
    height: 100vh;
    width: 100%;
    background: linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    font-family: MyFont;
}

#content_contact_left {
    width: 50%;
    text-align: center;
}

#content_contact_right {
    width: 50%;
    background-color: #110e0e;
}

#content_contact h1 {
    position: relative;
    display: inline-block;
    color: white;
    font-size: 3em;
    margin-top: 100px;
    text-transform: uppercase;
    font-family: MyFont3;
}

#content_contact h2 {
    color: #F7DA71;
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: -3px;
    font-family: MyFont2;
}

#content_contact h3 {
    color: white;
    text-transform: uppercase;
    margin: 0px;
    padding-top: 0px;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-family: MyFont3;
    font-weight: bold;
}

#content_contact #menu {
    width: 70%;
}

#content_contact #home_button, #content_contact #menu_button {
    background-color: white;
    color: black;
}

#content_contact #contact_button {
    background-color: black;
    color: white;
}

#content_contact #home_button:hover, #content_contact #menu_button:hover, #content_contact #contact_button:hover {
    background-color: #F7DA71;
    color: black;
}

#content_contact_right {
    overflow: scroll;
    padding-bottom: 100px;
}

    #content_contact_right p {
        color: white;
        margin: 100px auto 20px;
        width: 85%;
        padding-bottom: 0px;
        font-family: MyFont3;
        font-size: 1.5em;
        font-style: italic;
        line-height: 1.2;
        background: linear-gradient(to right, white 0%, #F7DA71 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

form {
    display: flex;
    flex-direction: column;
    width:85%;
    margin: 50px auto;
}

    form label {
        display: block;
        color: white;
        font-family: MyFont2;
        color: #F7DA71;
        font-size: 1em;
        padding-top: 15px;
        padding-bottom:15px;
    }

    form input {
        border: 1px solid rgba(207, 205, 205, 0.446);
        border-radius: 25px;
        height: 50px;
        width: 90%;
        background-color: black;
        color: white;
        font-family: MyFont3;
        font-weight: bold;
        font-size: 1.5em;
        padding-left: 20px;
    }

        form input::placeholder, textarea::placeholder {
            font-family: MyFont3;
            font-weight:bold;
            font-size: 1.2em;
            padding-left: 20px;
        }

textarea {
    border: 1px solid rgba(207, 205, 205, 0.446);
    border-radius: 25px;
    width: 90%;
    height:100px;
    background-color: black;
    color: white;
    font-family: MyFont3;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 20px;
    margin-bottom: 40px;
}


input[type=submit] {
    background-color: #F7DA71;
    color: black;
    width: 92%;
    font-family: MyFont3;
    font-weight: bold;
    font-size: 2em;
}

      `, "",{"version":3,"sources":["webpack://./src/css/contact.css"],"names":[],"mappings":";AACA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,oHAA+F;IAC/F,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;IAEI;QACI,YAAY;QACZ,uBAAuB;QACvB,UAAU;QACV,mBAAmB;QACnB,oBAAoB;QACpB,gBAAgB;QAChB,kBAAkB;QAClB,gBAAgB;QAChB,6DAA6D;QAC7D,6BAA6B;QAC7B,oCAAoC;IACxC;;AAEJ;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;AACrB;;IAEI;QACI,cAAc;QACd,YAAY;QACZ,oBAAoB;QACpB,cAAc;QACd,cAAc;QACd,iBAAiB;QACjB,mBAAmB;IACvB;;IAEA;QACI,4CAA4C;QAC5C,mBAAmB;QACnB,YAAY;QACZ,UAAU;QACV,uBAAuB;QACvB,YAAY;QACZ,oBAAoB;QACpB,iBAAiB;QACjB,gBAAgB;QAChB,kBAAkB;IACtB;;QAEI;YACI,oBAAoB;YACpB,gBAAgB;YAChB,gBAAgB;YAChB,kBAAkB;QACtB;;AAER;IACI,4CAA4C;IAC5C,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,yBAAyB;IACzB,YAAY;IACZ,UAAU;IACV,oBAAoB;IACpB,iBAAiB;IACjB,cAAc;AAClB","sourcesContent":["\r\n#content_contact {\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background: linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(\"contact.png\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-family: MyFont;\r\n}\r\n\r\n#content_contact_left {\r\n    width: 50%;\r\n    text-align: center;\r\n}\r\n\r\n#content_contact_right {\r\n    width: 50%;\r\n    background-color: #110e0e;\r\n}\r\n\r\n#content_contact h1 {\r\n    position: relative;\r\n    display: inline-block;\r\n    color: white;\r\n    font-size: 3em;\r\n    margin-top: 100px;\r\n    text-transform: uppercase;\r\n    font-family: MyFont3;\r\n}\r\n\r\n#content_contact h2 {\r\n    color: #F7DA71;\r\n    text-transform: uppercase;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding-top: 0px;\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    letter-spacing: -3px;\r\n    font-family: MyFont2;\r\n}\r\n\r\n#content_contact h3 {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    margin: 0px;\r\n    padding-top: 0px;\r\n    font-size: 3em;\r\n    font-weight: bold;\r\n    letter-spacing: 0.5px;\r\n    font-family: MyFont3;\r\n    font-weight: bold;\r\n}\r\n\r\n#content_contact #menu {\r\n    width: 70%;\r\n}\r\n\r\n#content_contact #home_button, #content_contact #menu_button {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n#content_contact #contact_button {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n#content_contact #home_button:hover, #content_contact #menu_button:hover, #content_contact #contact_button:hover {\r\n    background-color: #F7DA71;\r\n    color: black;\r\n}\r\n\r\n#content_contact_right {\r\n    overflow: scroll;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n    #content_contact_right p {\r\n        color: white;\r\n        margin: 100px auto 20px;\r\n        width: 85%;\r\n        padding-bottom: 0px;\r\n        font-family: MyFont3;\r\n        font-size: 1.5em;\r\n        font-style: italic;\r\n        line-height: 1.2;\r\n        background: linear-gradient(to right, white 0%, #F7DA71 100%);\r\n        -webkit-background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n    }\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width:85%;\r\n    margin: 50px auto;\r\n}\r\n\r\n    form label {\r\n        display: block;\r\n        color: white;\r\n        font-family: MyFont2;\r\n        color: #F7DA71;\r\n        font-size: 1em;\r\n        padding-top: 15px;\r\n        padding-bottom:15px;\r\n    }\r\n\r\n    form input {\r\n        border: 1px solid rgba(207, 205, 205, 0.446);\r\n        border-radius: 25px;\r\n        height: 50px;\r\n        width: 90%;\r\n        background-color: black;\r\n        color: white;\r\n        font-family: MyFont3;\r\n        font-weight: bold;\r\n        font-size: 1.5em;\r\n        padding-left: 20px;\r\n    }\r\n\r\n        form input::placeholder, textarea::placeholder {\r\n            font-family: MyFont3;\r\n            font-weight:bold;\r\n            font-size: 1.2em;\r\n            padding-left: 20px;\r\n        }\r\n\r\ntextarea {\r\n    border: 1px solid rgba(207, 205, 205, 0.446);\r\n    border-radius: 25px;\r\n    width: 90%;\r\n    height:100px;\r\n    background-color: black;\r\n    color: white;\r\n    font-family: MyFont3;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    padding-left: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\ninput[type=submit] {\r\n    background-color: #F7DA71;\r\n    color: black;\r\n    width: 92%;\r\n    font-family: MyFont3;\r\n    font-weight: bold;\r\n    font-size: 2em;\r\n}\r\n\r\n      "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! menu.png */ "./src/css/menu.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#content_menu {
    overflow: hidden;
    height: 100vh;
    width:100%;
    background: linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    font-family: MyFont;
}

#content_menu_left{
    width: 50%;
    text-align:center;
}

#content_menu_right {
    width: 50%;
    background-color: #110e0e;
}

#content_menu h1 {
    position: relative;
    display: inline-block;
    color: white;
    font-size: 3em;
    margin-top: 100px;
    text-transform: uppercase;
    font-family: MyFont3;
}

#content_menu h2 {
    color: #F7DA71;
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: -3px;
    font-family: MyFont2;
}

#content_menu h3 {
    color: white;
    text-transform: uppercase;
    margin: 0px;
    padding-top: 0px;
    font-size: 5em;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-family: MyFont3;
    font-weight: bold;
}

#content_menu #menu{
    width: 70%;
}


#content_menu #home_button {
    background-color: white ;
    color: black;
}

#content_menu #menu_button {
    background-color: black;
    color: white;
}

#content_menu button:hover, #content_menu #menu_button:hover {
    background-color: #F7DA71;
    color:black;
} 

#content_menu #home_button:hover {
    background-color: #F7DA71;
}

#content_menu_right{
    overflow:scroll;
    padding-bottom:100px;
}


#content_menu_right p {
    color: white;
    margin: 100px auto 20px;
    width: 85%;
    padding-bottom: 0px;
    font-family: MyFont3;
    font-size: 1.5em;
    font-style: italic;
    line-height: 1.2;
    background: linear-gradient(to right, white 0%, #F7DA71 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#content_menu_right .list_header {
    color: #F7DA71;
    font-size: 1.5em;
    font-family: MyFont2;
    margin-left: 10%;
}

.menu_list_content {
    width: 80%;
    margin: 0px auto;
    list-style-type: none;
    padding-top:0px;
    padding-bottom:0px;
}

    .menu_list_content li {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

        .menu_list_content li h4 {
            font-family: MyFont3;
            font-size: 1.5em;
            font-style: italic;
            text-transform:lowercase;
        }






`, "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,aAAa;IACb,UAAU;IACV,oHAA4F;IAC5F,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;;AAGA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;;AAGA;IACI,YAAY;IACZ,uBAAuB;IACvB,UAAU;IACV,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,6DAA6D;IAC7D,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;AACtB;;IAEI;QACI,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,8BAA8B;IAClC;;QAEI;YACI,oBAAoB;YACpB,gBAAgB;YAChB,kBAAkB;YAClB,wBAAwB;QAC5B","sourcesContent":["#content_menu {\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    width:100%;\r\n    background: linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(\"menu.png\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-family: MyFont;\r\n}\r\n\r\n#content_menu_left{\r\n    width: 50%;\r\n    text-align:center;\r\n}\r\n\r\n#content_menu_right {\r\n    width: 50%;\r\n    background-color: #110e0e;\r\n}\r\n\r\n#content_menu h1 {\r\n    position: relative;\r\n    display: inline-block;\r\n    color: white;\r\n    font-size: 3em;\r\n    margin-top: 100px;\r\n    text-transform: uppercase;\r\n    font-family: MyFont3;\r\n}\r\n\r\n#content_menu h2 {\r\n    color: #F7DA71;\r\n    text-transform: uppercase;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding-top: 0px;\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    letter-spacing: -3px;\r\n    font-family: MyFont2;\r\n}\r\n\r\n#content_menu h3 {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    margin: 0px;\r\n    padding-top: 0px;\r\n    font-size: 5em;\r\n    font-weight: bold;\r\n    letter-spacing: 0.5px;\r\n    font-family: MyFont3;\r\n    font-weight: bold;\r\n}\r\n\r\n#content_menu #menu{\r\n    width: 70%;\r\n}\r\n\r\n\r\n#content_menu #home_button {\r\n    background-color: white ;\r\n    color: black;\r\n}\r\n\r\n#content_menu #menu_button {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n#content_menu button:hover, #content_menu #menu_button:hover {\r\n    background-color: #F7DA71;\r\n    color:black;\r\n} \r\n\r\n#content_menu #home_button:hover {\r\n    background-color: #F7DA71;\r\n}\r\n\r\n#content_menu_right{\r\n    overflow:scroll;\r\n    padding-bottom:100px;\r\n}\r\n\r\n\r\n#content_menu_right p {\r\n    color: white;\r\n    margin: 100px auto 20px;\r\n    width: 85%;\r\n    padding-bottom: 0px;\r\n    font-family: MyFont3;\r\n    font-size: 1.5em;\r\n    font-style: italic;\r\n    line-height: 1.2;\r\n    background: linear-gradient(to right, white 0%, #F7DA71 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n#content_menu_right .list_header {\r\n    color: #F7DA71;\r\n    font-size: 1.5em;\r\n    font-family: MyFont2;\r\n    margin-left: 10%;\r\n}\r\n\r\n.menu_list_content {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n    list-style-type: none;\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n}\r\n\r\n    .menu_list_content li {\r\n        color: white;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n    }\r\n\r\n        .menu_list_content li h4 {\r\n            font-family: MyFont3;\r\n            font-size: 1.5em;\r\n            font-style: italic;\r\n            text-transform:lowercase;\r\n        }\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Montserrat_Font.woff2 */ "./src/css/Montserrat_Font.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Montserrat_Font.woff */ "./src/css/Montserrat_Font.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./VariableFont.woff2 */ "./src/css/VariableFont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./PatrickHandSC-Regular.woff2 */ "./src/css/PatrickHandSC-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! homepage.png */ "./src/css/homepage.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
html {
    margin: 0px;
    padding: 0px;
    overflow: hidden;
}

@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
}

@font-face {
    font-family: 'MyFont2';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'); 
}

@font-face {
    font-family: 'MyFont3';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff2');
}


#content_home {
    overflow: hidden;
    height: 100vh;
    background: linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: MyFont;
}

#menu{
    border: 5px solid black;
    width: auto;
    
}

#content_home h1 {
    position: relative;
    display: inline-block;
    color: white;
    font-size: 3em;
    margin-top: 100px;
    text-transform: uppercase;
    font-family: MyFont3;
}

#content_home h2{
    color: #F7DA71;
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: -3px;
    font-family: MyFont2;
}

#content_home h3 {
    color: white;
    text-transform: uppercase;
    margin: 0px;
    padding-top: 0px;
    font-size: 5em;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-family: MyFont3;
    font-weight:bold;  
}

#content_home p {
    color: white;
    margin-top: 0px;
    padding-top: 0px;
    width: 50%;
    margin: 0 auto;
    padding-bottom:0px;
    font-family: MyFont3;
    font-size: 2em;
    font-style:italic;
    font-weight:bold;
    line-height: 0.9;
    background: linear-gradient(to right, white 0%, #F7DA71 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#menu {
    margin: 50px auto;
    width:auto;
    height: 50px;
    background-color:white;
    border-radius:20px;
    border-color:white;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    gap:20px;
}

    #menu button {
        background-color: none;
        border: none;
        font-family: MyFont2;
        padding-left: 30px;
        padding-right: 30px;
        font-size: 1.1em;
        border-radius: 20px;
    }

        #menu button:hover {
            background-color: #F7DA71; 
        }

#home_button {
    background-color: black;
    color:white;
}


`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":";AACA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,oHAA6F;AACjG;;AAEA;IACI,sBAAsB;IACtB,4DAAgD;AACpD;;AAEA;IACI,sBAAsB;IACtB,4DAAyD;AAC7D;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,oHAAgG;IAChG,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;;AAEf;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,cAAc;IACd,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,6DAA6D;IAC7D,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,QAAQ;AACZ;;IAEI;QACI,sBAAsB;QACtB,YAAY;QACZ,oBAAoB;QACpB,kBAAkB;QAClB,mBAAmB;QACnB,gBAAgB;QAChB,mBAAmB;IACvB;;QAEI;YACI,yBAAyB;QAC7B;;AAER;IACI,uBAAuB;IACvB,WAAW;AACf","sourcesContent":["\r\nhtml {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow: hidden;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'MyFont';\r\n    src: url('Montserrat_Font.woff2') format('woff2'), url('Montserrat_Font.woff') format('woff');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'MyFont2';\r\n    src: url('./VariableFont.woff2') format('woff2'); \r\n}\r\n\r\n@font-face {\r\n    font-family: 'MyFont3';\r\n    src: url('./PatrickHandSC-Regular.woff2') format('woff2');\r\n}\r\n\r\n\r\n#content_home {\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    background: linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)), url(\"homepage.png\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    font-family: MyFont;\r\n}\r\n\r\n#menu{\r\n    border: 5px solid black;\r\n    width: auto;\r\n    \r\n}\r\n\r\n#content_home h1 {\r\n    position: relative;\r\n    display: inline-block;\r\n    color: white;\r\n    font-size: 3em;\r\n    margin-top: 100px;\r\n    text-transform: uppercase;\r\n    font-family: MyFont3;\r\n}\r\n\r\n#content_home h2{\r\n    color: #F7DA71;\r\n    text-transform: uppercase;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding-top: 0px;\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    letter-spacing: -3px;\r\n    font-family: MyFont2;\r\n}\r\n\r\n#content_home h3 {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    margin: 0px;\r\n    padding-top: 0px;\r\n    font-size: 5em;\r\n    font-weight: bold;\r\n    letter-spacing: 0.5px;\r\n    font-family: MyFont3;\r\n    font-weight:bold;  \r\n}\r\n\r\n#content_home p {\r\n    color: white;\r\n    margin-top: 0px;\r\n    padding-top: 0px;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    padding-bottom:0px;\r\n    font-family: MyFont3;\r\n    font-size: 2em;\r\n    font-style:italic;\r\n    font-weight:bold;\r\n    line-height: 0.9;\r\n    background: linear-gradient(to right, white 0%, #F7DA71 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n#menu {\r\n    margin: 50px auto;\r\n    width:auto;\r\n    height: 50px;\r\n    background-color:white;\r\n    border-radius:20px;\r\n    border-color:white;\r\n    display:flex;\r\n    flex-direction:row;\r\n    justify-content:space-around;\r\n    gap:20px;\r\n}\r\n\r\n    #menu button {\r\n        background-color: none;\r\n        border: none;\r\n        font-family: MyFont2;\r\n        padding-left: 30px;\r\n        padding-right: 30px;\r\n        font-size: 1.1em;\r\n        border-radius: 20px;\r\n    }\r\n\r\n        #menu button:hover {\r\n            background-color: #F7DA71; \r\n        }\r\n\r\n#home_button {\r\n    background-color: black;\r\n    color:white;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/contact.css":
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/contact.css */ "./src/css/contact.css");


const createContactPage = () => {
    const content = document.createElement("div");
    content.id = "content_contact";
    document.body.appendChild(content);

    const contentContactLeft = document.createElement("div");
    contentContactLeft.id = "content_contact_left";
    content.appendChild(contentContactLeft);

    const h1Content = document.createElement("h1");
    h1Content.textContent = "Sihana Restaurant";
    contentContactLeft.appendChild(h1Content);


    const h2Content = document.createElement("h2");
    h2Content.textContent = "contact";
    contentContactLeft.appendChild(h2Content);

    const h3Content = document.createElement("h3");
    h3Content.textContent = "Feel as in your home";
    contentContactLeft.appendChild(h3Content);

    const nav = document.createElement("div");
    nav.id = "menu";
    contentContactLeft.appendChild(nav);

    // right content of the Contact will contain the contact form
    const contentContactRight = document.createElement("div");
    contentContactRight.id = "content_contact_right";
    content.appendChild(contentContactRight);



    const ParagDescrip = document.createElement("p");
    ParagDescrip.textContent = "Do you have any questions or would you like to make a reservation ?You can easily do this online.You can reach us by phone at + 31(0)43 354 10 11 between 17: 00 and 22: 00 on our opening days.";
    contentContactRight.appendChild(ParagDescrip);


    // create a contact form
    const form = document.createElement("form");
    form.id = "contact-form";

    const formNameDiv = document.createElement("div");
    const labelName = document.createElement("label");
    labelName.htmlFor = "name_input";
    labelName.textContent = "Name:";
    formNameDiv.appendChild(labelName);


    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name_input";
    nameInput.placeholder = "Enter your name";
    formNameDiv.appendChild(nameInput);

    form.appendChild(formNameDiv);

    const formEmailDiv = document.createElement("div");
    const labelEmail = document.createElement("label");
    labelEmail.htmlFor = "email_input";
    labelEmail.textContent = "Email:";
    formEmailDiv.appendChild(labelEmail);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email_input";
    emailInput.placeholder = "Enter your name";
    formEmailDiv.appendChild(emailInput);

    form.appendChild(formEmailDiv);

    const formMessageDiv = document.createElement("div");
    const labelMessage = document.createElement("label");
    labelMessage.htmlFor = "message_text";
    labelMessage.textContent = "Message:";
    formMessageDiv.appendChild(labelMessage);

    const MessageTextArea = document.createElement("textarea");
    MessageTextArea.id = "message_text";
    MessageTextArea.maxLength = "100";
    MessageTextArea.placeholder = "Enter your message";
    formMessageDiv.appendChild(MessageTextArea);

    form.appendChild(formMessageDiv);



    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Send Message";
    form.appendChild(submitButton);

    contentContactRight.appendChild(form);

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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");



// homepage.js

const createHomePage = () => {

    const content = document.createElement("div");
    content.id = "content_home";
    document.body.appendChild(content);

    const h1Content = document.createElement("h1");
    h1Content.textContent = "Sihana Restaurant";
    content.appendChild(h1Content);

    const h2Content = document.createElement("h2");
    h2Content.textContent = "we serve for you";
    content.appendChild(h2Content);

    const h3Content = document.createElement("h3");
    h3Content.textContent = "with love";
    content.appendChild(h3Content);

    const paragraphContent = document.createElement("p");
    paragraphContent.textContent = "Sihana Restaurant, your place for delicious Mediterranean tapas in the heart Hamburg. Located at Hamburg Altstadt we serve lovingly home-made dishes that are perfect to share with family, friends or colleagues.";
    content.appendChild(paragraphContent);

    const nav = document.createElement("div");
    nav.id = "menu";
    content.appendChild(nav);

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
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/menu.css */ "./src/css/menu.css");


const createMenuPage = () => {

    const content = document.createElement("div");
    content.id = "content_menu";
    document.body.appendChild(content);

    // left content of the page will contain h1, h2, h3 and menu
    const contentMenuLeft = document.createElement("div");
    contentMenuLeft.id = "content_menu_left";
    content.appendChild(contentMenuLeft)

    const h1Content = document.createElement("h1");
    h1Content.textContent = "Sihana Restaurant";
    contentMenuLeft.appendChild(h1Content);
    

    const h2Content = document.createElement("h2");
    h2Content.textContent = "discover";
    contentMenuLeft.appendChild(h2Content);

    const h3Content = document.createElement("h3");
    h3Content.textContent = "our dishes";
    contentMenuLeft.appendChild(h3Content);

    const nav = document.createElement("div");
    nav.id = "menu";
    contentMenuLeft.appendChild(nav);

    // right content of the Menu will contain a description and the Menu list

    const contentMenuRight = document.createElement("div");
    contentMenuRight.id = "content_menu_right";
    content.appendChild(contentMenuRight);

    const menuDescription = document.createElement("p");
    menuDescription.id = "menu_description";
    menuDescription.textContent = "Be surprised by our extensive menu full of delicious Mediterranean food. We serve a variety of dishes from the entire Mediterranean region. View our full menu and reserve your table";
    contentMenuRight.appendChild(menuDescription);

    // create a list with the menu items

    const menuListDiv = document.createElement("div");
    menuListDiv.id = "menu_list";
    contentMenuRight.appendChild(menuListDiv);
    
    const h3ListHeader = document.createElement("h3");
    h3ListHeader.className = "list_header";
    h3ListHeader.textContent = "Bread";
    contentMenuRight.appendChild(h3ListHeader);

    const menuList1 = document.createElement("ul");
    menuList1.className = "menu_list_content";

    const menuListItem1 = document.createElement("li");
       const menuListItem1Name = document.createElement("h4");
       menuListItem1Name.textContent = "Baguete";
       const menuListItem1Price = document.createElement("h4");
       menuListItem1Price.textContent = "4.5$";

    menuListItem1.appendChild(menuListItem1Name);
    menuListItem1.appendChild(menuListItem1Price);
    menuList1.appendChild(menuListItem1);

    const menuListItem2 = document.createElement("li");
    const menuListItem2Name = document.createElement("h4");
    menuListItem2Name.textContent = "Bread with aioli";
    const menuListItem2Price = document.createElement("h4");
    menuListItem2Price.textContent = "6.3$";

    menuListItem2.appendChild(menuListItem2Name);
    menuListItem2.appendChild(menuListItem2Price);
    menuList1.appendChild(menuListItem2);

    const menuListItem3 = document.createElement("li");
    const menuListItem3Name = document.createElement("h4");
    menuListItem3Name.textContent = "Grilled bread with tomato souce";
    const menuListItem3Price = document.createElement("h4");
    menuListItem3Price.textContent = "7.3$";

    menuListItem3.appendChild(menuListItem3Name);
    menuListItem3.appendChild(menuListItem3Price);
    menuList1.appendChild(menuListItem3);

     
    contentMenuRight.appendChild(menuList1);


    const h3ListHeader2 = document.createElement("h3");
    h3ListHeader2.className = "list_header";
    h3ListHeader2.textContent = "Fish";
    contentMenuRight.appendChild(h3ListHeader2);

    const menuList2 = document.createElement("ul");
    menuList2.className = "menu_list_content";

    const menuList2Item1 = document.createElement("li");
    const menuList2Item1Name = document.createElement("h4");
    menuList2Item1Name.textContent = "Baguete";
    const menuList2Item1Price = document.createElement("h4");
    menuList2Item1Price.textContent = "4.5$";

    menuList2Item1.appendChild(menuList2Item1Name);
    menuList2Item1.appendChild(menuList2Item1Price);
    menuList2.appendChild(menuList2Item1);

    const menuList2Item2 = document.createElement("li");
    const menuList2Item2Name = document.createElement("h4");
    menuList2Item2Name.textContent = "Bread with aioli";
    const menuList2Item2Price = document.createElement("h4");
    menuList2Item2Price.textContent = "6.3$";

    menuList2Item2.appendChild(menuList2Item2Name);
    menuList2Item2.appendChild(menuList2Item2Price);
    menuList2.appendChild(menuListItem2);

    const menuList2Item3 = document.createElement("li");
    const menuList2Item3Name = document.createElement("h4");
    menuList2Item3Name.textContent = "Grilled bread with tomato souce";
    const menuList2Item3Price = document.createElement("h4");
    menuList2Item3Price.textContent = "7.3$";

    menuList2Item3.appendChild(menuList2Item3Name);
    menuList2Item3.appendChild(menuList2Item3Price);
    menuList2.appendChild(menuList2Item3);

    contentMenuRight.appendChild(menuList2);


    const h3ListHeader3 = document.createElement("h3");
    h3ListHeader3.className = "list_header";
    h3ListHeader3.textContent = "Meat";
    contentMenuRight.appendChild(h3ListHeader3);

    const menuList3 = document.createElement("ul");
    menuList3.className = "menu_list_content";

    const menuList3Item1 = document.createElement("li");
    const menuList3Item1Name = document.createElement("h4");
    menuList3Item1Name.textContent = "Baguete";
    const menuList3Item1Price = document.createElement("h4");
    menuList3Item1Price.textContent = "4.5$";

    menuList3Item1.appendChild(menuList3Item1Name);
    menuList3Item1.appendChild(menuList3Item1Price);
    menuList3.appendChild(menuList3Item1);

    const menuList3Item2 = document.createElement("li");
    const menuList3Item2Name = document.createElement("h4");
    menuList3Item2Name.textContent = "Bread with aioli";
    const menuList3Item2Price = document.createElement("h4");
    menuList3Item2Price.textContent = "6.3$";

    menuList3Item2.appendChild(menuList3Item2Name);
    menuList3Item2.appendChild(menuList3Item2Price);
    menuList3.appendChild(menuList3Item2);

    const menuList3Item3 = document.createElement("li");
    const menuList3Item3Name = document.createElement("h4");
    menuList3Item3Name.textContent = "Grilled bread with tomato souce";
    const menuList3Item3Price = document.createElement("h4");
    menuList3Item3Price.textContent = "7.3$";

    menuList3Item3.appendChild(menuList3Item3Name);
    menuList3Item3.appendChild(menuList3Item3Price);
    menuList3.appendChild(menuList3Item3);

    contentMenuRight.appendChild(menuList3);
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
    HomeLink.id = "home_button";
    nav.appendChild(HomeLink);

    const MenuLink = document.createElement("button");
    MenuLink.innerHTML = "Menu";
    MenuLink.id = "menu_button";
    nav.appendChild(MenuLink);

    const ContactLink = document.createElement("button");
    ContactLink.id = "contact_button";
    ContactLink.innerHTML = "Contact us";
    nav.appendChild(ContactLink);

    HomeLink.addEventListener('click', () => {
        clearContent();
        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
        createNavigationMenu();
    })

    MenuLink.addEventListener('click', () => {
        clearContent()
        ;(0,_menupage__WEBPACK_IMPORTED_MODULE_1__["default"])();
        createNavigationMenu();
    })

    ContactLink.addEventListener('click', () => {
        clearContent()
        ;(0,_contactpage__WEBPACK_IMPORTED_MODULE_2__["default"])();
        createNavigationMenu();
    })

}

function clearContent() {
    document.body.innerHTML = "";
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavigationMenu);

/***/ }),

/***/ "./src/css/Montserrat_Font.woff":
/*!**************************************!*\
  !*** ./src/css/Montserrat_Font.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ce680589f7f1ede4f48.woff";

/***/ }),

/***/ "./src/css/Montserrat_Font.woff2":
/*!***************************************!*\
  !*** ./src/css/Montserrat_Font.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9297621195c11c3003c0.woff2";

/***/ }),

/***/ "./src/css/PatrickHandSC-Regular.woff2":
/*!*********************************************!*\
  !*** ./src/css/PatrickHandSC-Regular.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e80ea18edcf4920f4c6.woff2";

/***/ }),

/***/ "./src/css/VariableFont.woff2":
/*!************************************!*\
  !*** ./src/css/VariableFont.woff2 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "081644f6b5172608d024.woff2";

/***/ }),

/***/ "./src/css/contact.png":
/*!*****************************!*\
  !*** ./src/css/contact.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f10c303bc3fc640ef19.png";

/***/ }),

/***/ "./src/css/homepage.png":
/*!******************************!*\
  !*** ./src/css/homepage.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2182162ab42110848381.png";

/***/ }),

/***/ "./src/css/menu.png":
/*!**************************!*\
  !*** ./src/css/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59282063aebe9f2f63c6.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsbUNBQW1DLG9CQUFvQixxQkFBcUIseUJBQXlCLEtBQUssb0JBQW9C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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ2xHaEM7QUFDeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDakM3QjtBQUNBO0FBQ3dDO0FBQ1E7QUFDaEQ7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEIsSUFBSSx1REFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDWE47QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tXO0FBQ0E7QUFDTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFjO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQWM7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBaUI7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9DbkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDeUM7QUFDekM7QUFDQTtBQUNBLHFEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Nzcy9jb250YWN0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY3NzL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY3NzL2NvbnRhY3QuY3NzP2QxZDgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Nzcy9tZW51LmNzcz9kZGVjIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9sb2FkcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImNvbnRhY3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcclxuI2NvbnRlbnRfY29udGFjdCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwxNzMsMjMxLDAuNSksIHJnYmEoMiwxNzMsMjMxLDAuNSkpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDtcclxufVxyXG5cclxuI2NvbnRlbnRfY29udGFjdF9sZWZ0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50X2NvbnRhY3RfcmlnaHQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTBlMGU7XHJcbn1cclxuXHJcbiNjb250ZW50X2NvbnRhY3QgaDEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogTXlGb250MztcclxufVxyXG5cclxuI2NvbnRlbnRfY29udGFjdCBoMiB7XHJcbiAgICBjb2xvcjogI0Y3REE3MTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBmb250LWZhbWlseTogTXlGb250MjtcclxufVxyXG5cclxuI2NvbnRlbnRfY29udGFjdCBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNjb250ZW50X2NvbnRhY3QgI21lbnUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuI2NvbnRlbnRfY29udGFjdCAjaG9tZV9idXR0b24sICNjb250ZW50X2NvbnRhY3QgI21lbnVfYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jY29udGVudF9jb250YWN0ICNjb250YWN0X2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NvbnRlbnRfY29udGFjdCAjaG9tZV9idXR0b246aG92ZXIsICNjb250ZW50X2NvbnRhY3QgI21lbnVfYnV0dG9uOmhvdmVyLCAjY29udGVudF9jb250YWN0ICNjb250YWN0X2J1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdEQTcxO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jY29udGVudF9jb250YWN0X3JpZ2h0IHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbiAgICAjY29udGVudF9jb250YWN0X3JpZ2h0IHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG8gMjBweDtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE15Rm9udDM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlIDAlLCAjRjdEQTcxIDEwMCUpO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDo4NSU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuICAgIGZvcm0gbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogTXlGb250MjtcclxuICAgICAgICBjb2xvcjogI0Y3REE3MTtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0gaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA3LCAyMDUsIDIwNSwgMC40NDYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgICBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE15Rm9udDM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNywgMjA1LCAyMDUsIDAuNDQ2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogTXlGb250MztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REE3MTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgICBmb250LWZhbWlseTogTXlGb250MztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbiAgICAgIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxvSEFBK0Y7SUFDL0Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0lBRUk7UUFDSSxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDZEQUE2RDtRQUM3RCw2QkFBNkI7UUFDN0Isb0NBQW9DO0lBQ3hDOztBQUVKO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztJQUVJO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksNENBQTRDO1FBQzVDLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osVUFBVTtRQUNWLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztRQUVJO1lBQ0ksb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1FBQ3RCOztBQUVSO0lBQ0ksNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuI2NvbnRlbnRfY29udGFjdCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyLDE3MywyMzEsMC41KSwgcmdiYSgyLDE3MywyMzEsMC41KSksIHVybChcXFwiY29udGFjdC5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfY29udGFjdF9sZWZ0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudF9jb250YWN0X3JpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMGUwZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfY29udGFjdCBoMSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDM7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X2NvbnRhY3QgaDIge1xcclxcbiAgICBjb2xvcjogI0Y3REE3MTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X2NvbnRhY3QgaDMge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudF9jb250YWN0ICNtZW51IHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfY29udGFjdCAjaG9tZV9idXR0b24sICNjb250ZW50X2NvbnRhY3QgI21lbnVfYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfY29udGFjdCAjY29udGFjdF9idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudF9jb250YWN0ICNob21lX2J1dHRvbjpob3ZlciwgI2NvbnRlbnRfY29udGFjdCAjbWVudV9idXR0b246aG92ZXIsICNjb250ZW50X2NvbnRhY3QgI2NvbnRhY3RfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REE3MTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudF9jb250YWN0X3JpZ2h0IHtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4gICAgI2NvbnRlbnRfY29udGFjdF9yaWdodCBwIHtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMTAwcHggYXV0byAyMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogTXlGb250MztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSAwJSwgI0Y3REE3MSAxMDAlKTtcXHJcXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOjg1JTtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbiAgICBmb3JtIGxhYmVsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IE15Rm9udDI7XFxyXFxuICAgICAgICBjb2xvcjogI0Y3REE3MTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZvcm0gaW5wdXQge1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDcsIDIwNSwgMjA1LCAwLjQ0Nik7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IE15Rm9udDM7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNywgMjA1LCAyMDUsIDAuNDQ2KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OjEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogTXlGb250MztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REE3MTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB3aWR0aDogOTIlO1xcclxcbiAgICBmb250LWZhbWlseTogTXlGb250MztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIm1lbnUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjY29udGVudF9tZW51IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIsMTczLDIzMSwwLjUpLCByZ2JhKDIsMTczLDIzMSwwLjUpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQ7XHJcbn1cclxuXHJcbiNjb250ZW50X21lbnVfbGVmdHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnRfbWVudV9yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMGUwZTtcclxufVxyXG5cclxuI2NvbnRlbnRfbWVudSBoMSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xyXG59XHJcblxyXG4jY29udGVudF9tZW51IGgyIHtcclxuICAgIGNvbG9yOiAjRjdEQTcxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQyO1xyXG59XHJcblxyXG4jY29udGVudF9tZW51IGgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2NvbnRlbnRfbWVudSAjbWVudXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcblxyXG4jY29udGVudF9tZW51ICNob21lX2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNjb250ZW50X21lbnUgI21lbnVfYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY29udGVudF9tZW51IGJ1dHRvbjpob3ZlciwgI2NvbnRlbnRfbWVudSAjbWVudV9idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REE3MTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59IFxyXG5cclxuI2NvbnRlbnRfbWVudSAjaG9tZV9idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REE3MTtcclxufVxyXG5cclxuI2NvbnRlbnRfbWVudV9yaWdodHtcclxuICAgIG92ZXJmbG93OnNjcm9sbDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwMHB4O1xyXG59XHJcblxyXG5cclxuI2NvbnRlbnRfbWVudV9yaWdodCBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0byAyMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogTXlGb250MztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSAwJSwgI0Y3REE3MSAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jY29udGVudF9tZW51X3JpZ2h0IC5saXN0X2hlYWRlciB7XHJcbiAgICBjb2xvcjogI0Y3REE3MTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogTXlGb250MjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5tZW51X2xpc3RfY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxufVxyXG5cclxuICAgIC5tZW51X2xpc3RfY29udGVudCBsaSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC5tZW51X2xpc3RfY29udGVudCBsaSBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOmxvd2VyY2FzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLG9IQUE0RjtJQUM1RixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDZEQUE2RDtJQUM3RCw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7SUFFSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtJQUNsQzs7UUFFSTtZQUNJLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLHdCQUF3QjtRQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGVudF9tZW51IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwxNzMsMjMxLDAuNSksIHJnYmEoMiwxNzMsMjMxLDAuNSkpLCB1cmwoXFxcIm1lbnUucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X21lbnVfbGVmdHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X21lbnVfcmlnaHQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEwZTBlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudF9tZW51IGgxIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LWZhbWlseTogTXlGb250MztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfbWVudSBoMiB7XFxyXFxuICAgIGNvbG9yOiAjRjdEQTcxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogTXlGb250MjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfbWVudSBoMyB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogTXlGb250MztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X21lbnUgI21lbnV7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50X21lbnUgI2hvbWVfYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X21lbnUgI21lbnVfYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfbWVudSBidXR0b246aG92ZXIsICNjb250ZW50X21lbnUgI21lbnVfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3REE3MTtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufSBcXHJcXG5cXHJcXG4jY29udGVudF9tZW51ICNob21lX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0RBNzE7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X21lbnVfcmlnaHR7XFxyXFxuICAgIG92ZXJmbG93OnNjcm9sbDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206MTAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50X21lbnVfcmlnaHQgcCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDIwcHg7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUgMCUsICNGN0RBNzEgMTAwJSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X21lbnVfcmlnaHQgLmxpc3RfaGVhZGVyIHtcXHJcXG4gICAgY29sb3I6ICNGN0RBNzE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9saXN0X2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDBweCBhdXRvO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLm1lbnVfbGlzdF9jb250ZW50IGxpIHtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubWVudV9saXN0X2NvbnRlbnQgbGkgaDQge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOmxvd2VyY2FzZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIk1vbnRzZXJyYXRfRm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIk1vbnRzZXJyYXRfRm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9WYXJpYWJsZUZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL1BhdHJpY2tIYW5kU0MtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcImhvbWVwYWdlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxyXG5odG1sIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ015Rm9udDInO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd3b2ZmMicpOyBcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ015Rm9udDMnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xyXG59XHJcblxyXG5cclxuI2NvbnRlbnRfaG9tZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIsMTczLDIzMSwwLjUpLCByZ2JhKDIsMTczLDIzMSwwLjUpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQ7XHJcbn1cclxuXHJcbiNtZW51e1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4jY29udGVudF9ob21lIGgxIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDM7XHJcbn1cclxuXHJcbiNjb250ZW50X2hvbWUgaDJ7XHJcbiAgICBjb2xvcjogI0Y3REE3MTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbiAgICBmb250LWZhbWlseTogTXlGb250MjtcclxufVxyXG5cclxuI2NvbnRlbnRfaG9tZSBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDsgIFxyXG59XHJcblxyXG4jY29udGVudF9ob21lIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMC45O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSAwJSwgI0Y3REE3MSAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jbWVudSB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOndoaXRlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICAgIGdhcDoyMHB4O1xyXG59XHJcblxyXG4gICAgI21lbnUgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogTXlGb250MjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgICAgICNtZW51IGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0RBNzE7IFxyXG4gICAgICAgIH1cclxuXHJcbiNob21lX2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvSEFBNkY7QUFDakc7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNERBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDREQUF5RDtBQUM3RDs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9IQUFnRztJQUNoRyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNkRBQTZEO0lBQzdELDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixRQUFRO0FBQ1o7O0lBRUk7UUFDSSxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O1FBRUk7WUFDSSx5QkFBeUI7UUFDN0I7O0FBRVI7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbmh0bWwge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnTW9udHNlcnJhdF9Gb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJ01vbnRzZXJyYXRfRm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udDInO1xcclxcbiAgICBzcmM6IHVybCgnLi9WYXJpYWJsZUZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7IFxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQzJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vUGF0cmlja0hhbmRTQy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudF9ob21lIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwxNzMsMjMxLDAuNSksIHJnYmEoMiwxNzMsMjMxLDAuNSkpLCB1cmwoXFxcImhvbWVwYWdlLnBuZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQ7XFxyXFxufVxcclxcblxcclxcbiNtZW51e1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudF9ob21lIGgxIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LWZhbWlseTogTXlGb250MztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRfaG9tZSBoMntcXHJcXG4gICAgY29sb3I6ICNGN0RBNzE7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudF9ob21lIGgzIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiA1ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQzO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkOyAgXFxyXFxufVxcclxcblxcclxcbiNjb250ZW50X2hvbWUgcCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogTXlGb250MztcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkO1xcclxcbiAgICBsaW5lLWhlaWdodDogMC45O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlIDAlLCAjRjdEQTcxIDEwMCUpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudSB7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICB3aWR0aDphdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOndoaXRlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbiAgICAjbWVudSBidXR0b24ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQyO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjbWVudSBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0RBNzE7IFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiNob21lX2J1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9jc3MvY29udGFjdC5jc3MnO1xyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRfY29udGFjdFwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50Q29udGFjdExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudENvbnRhY3RMZWZ0LmlkID0gXCJjb250ZW50X2NvbnRhY3RfbGVmdFwiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFjdExlZnQpO1xyXG5cclxuICAgIGNvbnN0IGgxQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxQ29udGVudC50ZXh0Q29udGVudCA9IFwiU2loYW5hIFJlc3RhdXJhbnRcIjtcclxuICAgIGNvbnRlbnRDb250YWN0TGVmdC5hcHBlbmRDaGlsZChoMUNvbnRlbnQpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoMkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBoMkNvbnRlbnQudGV4dENvbnRlbnQgPSBcImNvbnRhY3RcIjtcclxuICAgIGNvbnRlbnRDb250YWN0TGVmdC5hcHBlbmRDaGlsZChoMkNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGgzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGgzQ29udGVudC50ZXh0Q29udGVudCA9IFwiRmVlbCBhcyBpbiB5b3VyIGhvbWVcIjtcclxuICAgIGNvbnRlbnRDb250YWN0TGVmdC5hcHBlbmRDaGlsZChoM0NvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXYuaWQgPSBcIm1lbnVcIjtcclxuICAgIGNvbnRlbnRDb250YWN0TGVmdC5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICAgIC8vIHJpZ2h0IGNvbnRlbnQgb2YgdGhlIENvbnRhY3Qgd2lsbCBjb250YWluIHRoZSBjb250YWN0IGZvcm1cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWN0UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudENvbnRhY3RSaWdodC5pZCA9IFwiY29udGVudF9jb250YWN0X3JpZ2h0XCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWN0UmlnaHQpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgUGFyYWdEZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBQYXJhZ0Rlc2NyaXAudGV4dENvbnRlbnQgPSBcIkRvIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3Igd291bGQgeW91IGxpa2UgdG8gbWFrZSBhIHJlc2VydmF0aW9uID9Zb3UgY2FuIGVhc2lseSBkbyB0aGlzIG9ubGluZS5Zb3UgY2FuIHJlYWNoIHVzIGJ5IHBob25lIGF0ICsgMzEoMCk0MyAzNTQgMTAgMTEgYmV0d2VlbiAxNzogMDAgYW5kIDIyOiAwMCBvbiBvdXIgb3BlbmluZyBkYXlzLlwiO1xyXG4gICAgY29udGVudENvbnRhY3RSaWdodC5hcHBlbmRDaGlsZChQYXJhZ0Rlc2NyaXApO1xyXG5cclxuXHJcbiAgICAvLyBjcmVhdGUgYSBjb250YWN0IGZvcm1cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uaWQgPSBcImNvbnRhY3QtZm9ybVwiO1xyXG5cclxuICAgIGNvbnN0IGZvcm1OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsTmFtZS5odG1sRm9yID0gXCJuYW1lX2lucHV0XCI7XHJcbiAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XHJcbiAgICBmb3JtTmFtZURpdi5hcHBlbmRDaGlsZChsYWJlbE5hbWUpO1xyXG5cclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgbmFtZUlucHV0LmlkID0gXCJuYW1lX2lucHV0XCI7XHJcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgbmFtZVwiO1xyXG4gICAgZm9ybU5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1OYW1lRGl2KTtcclxuXHJcbiAgICBjb25zdCBmb3JtRW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbGFiZWxFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsRW1haWwuaHRtbEZvciA9IFwiZW1haWxfaW5wdXRcIjtcclxuICAgIGxhYmVsRW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOlwiO1xyXG4gICAgZm9ybUVtYWlsRGl2LmFwcGVuZENoaWxkKGxhYmVsRW1haWwpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCI7XHJcbiAgICBlbWFpbElucHV0LmlkID0gXCJlbWFpbF9pbnB1dFwiO1xyXG4gICAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBuYW1lXCI7XHJcbiAgICBmb3JtRW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtRW1haWxEaXYpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1NZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxhYmVsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsTWVzc2FnZS5odG1sRm9yID0gXCJtZXNzYWdlX3RleHRcIjtcclxuICAgIGxhYmVsTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTWVzc2FnZTpcIjtcclxuICAgIGZvcm1NZXNzYWdlRGl2LmFwcGVuZENoaWxkKGxhYmVsTWVzc2FnZSk7XHJcblxyXG4gICAgY29uc3QgTWVzc2FnZVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgTWVzc2FnZVRleHRBcmVhLmlkID0gXCJtZXNzYWdlX3RleHRcIjtcclxuICAgIE1lc3NhZ2VUZXh0QXJlYS5tYXhMZW5ndGggPSBcIjEwMFwiO1xyXG4gICAgTWVzc2FnZVRleHRBcmVhLnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIG1lc3NhZ2VcIjtcclxuICAgIGZvcm1NZXNzYWdlRGl2LmFwcGVuZENoaWxkKE1lc3NhZ2VUZXh0QXJlYSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtTWVzc2FnZURpdik7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIlNlbmQgTWVzc2FnZVwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIGNvbnRlbnRDb250YWN0UmlnaHQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTsiLCJcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5cclxuLy8gaG9tZXBhZ2UuanNcclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5pZCA9IFwiY29udGVudF9ob21lXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGgxQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxQ29udGVudC50ZXh0Q29udGVudCA9IFwiU2loYW5hIFJlc3RhdXJhbnRcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDFDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBoMkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBoMkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIndlIHNlcnZlIGZvciB5b3VcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDJDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBoM0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBoM0NvbnRlbnQudGV4dENvbnRlbnQgPSBcIndpdGggbG92ZVwiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoM0NvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmFncmFwaENvbnRlbnQudGV4dENvbnRlbnQgPSBcIlNpaGFuYSBSZXN0YXVyYW50LCB5b3VyIHBsYWNlIGZvciBkZWxpY2lvdXMgTWVkaXRlcnJhbmVhbiB0YXBhcyBpbiB0aGUgaGVhcnQgSGFtYnVyZy4gTG9jYXRlZCBhdCBIYW1idXJnIEFsdHN0YWR0IHdlIHNlcnZlIGxvdmluZ2x5IGhvbWUtbWFkZSBkaXNoZXMgdGhhdCBhcmUgcGVyZmVjdCB0byBzaGFyZSB3aXRoIGZhbWlseSwgZnJpZW5kcyBvciBjb2xsZWFndWVzLlwiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2LmlkID0gXCJtZW51XCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lUGFnZTsiLCJcclxuXHJcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IGNyZWF0ZU5hdmlnYXRpb25NZW51IGZyb20gJy4vbmF2aWdhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XHJcbiAgICBjcmVhdGVIb21lUGFnZSgpO1xyXG4gICAgY3JlYXRlTmF2aWdhdGlvbk1lbnUoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDsiLCJpbXBvcnQgJy4vY3NzL21lbnUuY3NzJztcclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5pZCA9IFwiY29udGVudF9tZW51XCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIC8vIGxlZnQgY29udGVudCBvZiB0aGUgcGFnZSB3aWxsIGNvbnRhaW4gaDEsIGgyLCBoMyBhbmQgbWVudVxyXG4gICAgY29uc3QgY29udGVudE1lbnVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnRNZW51TGVmdC5pZCA9IFwiY29udGVudF9tZW51X2xlZnRcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudE1lbnVMZWZ0KVxyXG5cclxuICAgIGNvbnN0IGgxQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxQ29udGVudC50ZXh0Q29udGVudCA9IFwiU2loYW5hIFJlc3RhdXJhbnRcIjtcclxuICAgIGNvbnRlbnRNZW51TGVmdC5hcHBlbmRDaGlsZChoMUNvbnRlbnQpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaDJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgaDJDb250ZW50LnRleHRDb250ZW50ID0gXCJkaXNjb3ZlclwiO1xyXG4gICAgY29udGVudE1lbnVMZWZ0LmFwcGVuZENoaWxkKGgyQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgaDNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaDNDb250ZW50LnRleHRDb250ZW50ID0gXCJvdXIgZGlzaGVzXCI7XHJcbiAgICBjb250ZW50TWVudUxlZnQuYXBwZW5kQ2hpbGQoaDNDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2LmlkID0gXCJtZW51XCI7XHJcbiAgICBjb250ZW50TWVudUxlZnQuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgICAvLyByaWdodCBjb250ZW50IG9mIHRoZSBNZW51IHdpbGwgY29udGFpbiBhIGRlc2NyaXB0aW9uIGFuZCB0aGUgTWVudSBsaXN0XHJcblxyXG4gICAgY29uc3QgY29udGVudE1lbnVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50TWVudVJpZ2h0LmlkID0gXCJjb250ZW50X21lbnVfcmlnaHRcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudE1lbnVSaWdodCk7XHJcblxyXG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtZW51RGVzY3JpcHRpb24uaWQgPSBcIm1lbnVfZGVzY3JpcHRpb25cIjtcclxuICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQmUgc3VycHJpc2VkIGJ5IG91ciBleHRlbnNpdmUgbWVudSBmdWxsIG9mIGRlbGljaW91cyBNZWRpdGVycmFuZWFuIGZvb2QuIFdlIHNlcnZlIGEgdmFyaWV0eSBvZiBkaXNoZXMgZnJvbSB0aGUgZW50aXJlIE1lZGl0ZXJyYW5lYW4gcmVnaW9uLiBWaWV3IG91ciBmdWxsIG1lbnUgYW5kIHJlc2VydmUgeW91ciB0YWJsZVwiO1xyXG4gICAgY29udGVudE1lbnVSaWdodC5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhIGxpc3Qgd2l0aCB0aGUgbWVudSBpdGVtc1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVMaXN0RGl2LmlkID0gXCJtZW51X2xpc3RcIjtcclxuICAgIGNvbnRlbnRNZW51UmlnaHQuYXBwZW5kQ2hpbGQobWVudUxpc3REaXYpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoM0xpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBoM0xpc3RIZWFkZXIuY2xhc3NOYW1lID0gXCJsaXN0X2hlYWRlclwiO1xyXG4gICAgaDNMaXN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJCcmVhZFwiO1xyXG4gICAgY29udGVudE1lbnVSaWdodC5hcHBlbmRDaGlsZChoM0xpc3RIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIG1lbnVMaXN0MS5jbGFzc05hbWUgPSBcIm1lbnVfbGlzdF9jb250ZW50XCI7XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3RJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgIGNvbnN0IG1lbnVMaXN0SXRlbTFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgbWVudUxpc3RJdGVtMU5hbWUudGV4dENvbnRlbnQgPSBcIkJhZ3VldGVcIjtcclxuICAgICAgIGNvbnN0IG1lbnVMaXN0SXRlbTFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgIG1lbnVMaXN0SXRlbTFQcmljZS50ZXh0Q29udGVudCA9IFwiNC41JFwiO1xyXG5cclxuICAgIG1lbnVMaXN0SXRlbTEuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtMU5hbWUpO1xyXG4gICAgbWVudUxpc3RJdGVtMS5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW0xUHJpY2UpO1xyXG4gICAgbWVudUxpc3QxLmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbTEpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBtZW51TGlzdEl0ZW0yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1lbnVMaXN0SXRlbTJOYW1lLnRleHRDb250ZW50ID0gXCJCcmVhZCB3aXRoIGFpb2xpXCI7XHJcbiAgICBjb25zdCBtZW51TGlzdEl0ZW0yUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdEl0ZW0yUHJpY2UudGV4dENvbnRlbnQgPSBcIjYuMyRcIjtcclxuXHJcbiAgICBtZW51TGlzdEl0ZW0yLmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbTJOYW1lKTtcclxuICAgIG1lbnVMaXN0SXRlbTIuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtMlByaWNlKTtcclxuICAgIG1lbnVMaXN0MS5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW0yKTtcclxuXHJcbiAgICBjb25zdCBtZW51TGlzdEl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgbWVudUxpc3RJdGVtM05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdEl0ZW0zTmFtZS50ZXh0Q29udGVudCA9IFwiR3JpbGxlZCBicmVhZCB3aXRoIHRvbWF0byBzb3VjZVwiO1xyXG4gICAgY29uc3QgbWVudUxpc3RJdGVtM1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWVudUxpc3RJdGVtM1ByaWNlLnRleHRDb250ZW50ID0gXCI3LjMkXCI7XHJcblxyXG4gICAgbWVudUxpc3RJdGVtMy5hcHBlbmRDaGlsZChtZW51TGlzdEl0ZW0zTmFtZSk7XHJcbiAgICBtZW51TGlzdEl0ZW0zLmFwcGVuZENoaWxkKG1lbnVMaXN0SXRlbTNQcmljZSk7XHJcbiAgICBtZW51TGlzdDEuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtMyk7XHJcblxyXG4gICAgIFxyXG4gICAgY29udGVudE1lbnVSaWdodC5hcHBlbmRDaGlsZChtZW51TGlzdDEpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoM0xpc3RIZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaDNMaXN0SGVhZGVyMi5jbGFzc05hbWUgPSBcImxpc3RfaGVhZGVyXCI7XHJcbiAgICBoM0xpc3RIZWFkZXIyLnRleHRDb250ZW50ID0gXCJGaXNoXCI7XHJcbiAgICBjb250ZW50TWVudVJpZ2h0LmFwcGVuZENoaWxkKGgzTGlzdEhlYWRlcjIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIG1lbnVMaXN0Mi5jbGFzc05hbWUgPSBcIm1lbnVfbGlzdF9jb250ZW50XCI7XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3QySXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBtZW51TGlzdDJJdGVtMU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdDJJdGVtMU5hbWUudGV4dENvbnRlbnQgPSBcIkJhZ3VldGVcIjtcclxuICAgIGNvbnN0IG1lbnVMaXN0Mkl0ZW0xUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdDJJdGVtMVByaWNlLnRleHRDb250ZW50ID0gXCI0LjUkXCI7XHJcblxyXG4gICAgbWVudUxpc3QySXRlbTEuYXBwZW5kQ2hpbGQobWVudUxpc3QySXRlbTFOYW1lKTtcclxuICAgIG1lbnVMaXN0Mkl0ZW0xLmFwcGVuZENoaWxkKG1lbnVMaXN0Mkl0ZW0xUHJpY2UpO1xyXG4gICAgbWVudUxpc3QyLmFwcGVuZENoaWxkKG1lbnVMaXN0Mkl0ZW0xKTtcclxuXHJcbiAgICBjb25zdCBtZW51TGlzdDJJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IG1lbnVMaXN0Mkl0ZW0yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1lbnVMaXN0Mkl0ZW0yTmFtZS50ZXh0Q29udGVudCA9IFwiQnJlYWQgd2l0aCBhaW9saVwiO1xyXG4gICAgY29uc3QgbWVudUxpc3QySXRlbTJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1lbnVMaXN0Mkl0ZW0yUHJpY2UudGV4dENvbnRlbnQgPSBcIjYuMyRcIjtcclxuXHJcbiAgICBtZW51TGlzdDJJdGVtMi5hcHBlbmRDaGlsZChtZW51TGlzdDJJdGVtMk5hbWUpO1xyXG4gICAgbWVudUxpc3QySXRlbTIuYXBwZW5kQ2hpbGQobWVudUxpc3QySXRlbTJQcmljZSk7XHJcbiAgICBtZW51TGlzdDIuYXBwZW5kQ2hpbGQobWVudUxpc3RJdGVtMik7XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3QySXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBtZW51TGlzdDJJdGVtM05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdDJJdGVtM05hbWUudGV4dENvbnRlbnQgPSBcIkdyaWxsZWQgYnJlYWQgd2l0aCB0b21hdG8gc291Y2VcIjtcclxuICAgIGNvbnN0IG1lbnVMaXN0Mkl0ZW0zUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdDJJdGVtM1ByaWNlLnRleHRDb250ZW50ID0gXCI3LjMkXCI7XHJcblxyXG4gICAgbWVudUxpc3QySXRlbTMuYXBwZW5kQ2hpbGQobWVudUxpc3QySXRlbTNOYW1lKTtcclxuICAgIG1lbnVMaXN0Mkl0ZW0zLmFwcGVuZENoaWxkKG1lbnVMaXN0Mkl0ZW0zUHJpY2UpO1xyXG4gICAgbWVudUxpc3QyLmFwcGVuZENoaWxkKG1lbnVMaXN0Mkl0ZW0zKTtcclxuXHJcbiAgICBjb250ZW50TWVudVJpZ2h0LmFwcGVuZENoaWxkKG1lbnVMaXN0Mik7XHJcblxyXG5cclxuICAgIGNvbnN0IGgzTGlzdEhlYWRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBoM0xpc3RIZWFkZXIzLmNsYXNzTmFtZSA9IFwibGlzdF9oZWFkZXJcIjtcclxuICAgIGgzTGlzdEhlYWRlcjMudGV4dENvbnRlbnQgPSBcIk1lYXRcIjtcclxuICAgIGNvbnRlbnRNZW51UmlnaHQuYXBwZW5kQ2hpbGQoaDNMaXN0SGVhZGVyMyk7XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgbWVudUxpc3QzLmNsYXNzTmFtZSA9IFwibWVudV9saXN0X2NvbnRlbnRcIjtcclxuXHJcbiAgICBjb25zdCBtZW51TGlzdDNJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IG1lbnVMaXN0M0l0ZW0xTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1lbnVMaXN0M0l0ZW0xTmFtZS50ZXh0Q29udGVudCA9IFwiQmFndWV0ZVwiO1xyXG4gICAgY29uc3QgbWVudUxpc3QzSXRlbTFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1lbnVMaXN0M0l0ZW0xUHJpY2UudGV4dENvbnRlbnQgPSBcIjQuNSRcIjtcclxuXHJcbiAgICBtZW51TGlzdDNJdGVtMS5hcHBlbmRDaGlsZChtZW51TGlzdDNJdGVtMU5hbWUpO1xyXG4gICAgbWVudUxpc3QzSXRlbTEuYXBwZW5kQ2hpbGQobWVudUxpc3QzSXRlbTFQcmljZSk7XHJcbiAgICBtZW51TGlzdDMuYXBwZW5kQ2hpbGQobWVudUxpc3QzSXRlbTEpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0M0l0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgbWVudUxpc3QzSXRlbTJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWVudUxpc3QzSXRlbTJOYW1lLnRleHRDb250ZW50ID0gXCJCcmVhZCB3aXRoIGFpb2xpXCI7XHJcbiAgICBjb25zdCBtZW51TGlzdDNJdGVtMlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWVudUxpc3QzSXRlbTJQcmljZS50ZXh0Q29udGVudCA9IFwiNi4zJFwiO1xyXG5cclxuICAgIG1lbnVMaXN0M0l0ZW0yLmFwcGVuZENoaWxkKG1lbnVMaXN0M0l0ZW0yTmFtZSk7XHJcbiAgICBtZW51TGlzdDNJdGVtMi5hcHBlbmRDaGlsZChtZW51TGlzdDNJdGVtMlByaWNlKTtcclxuICAgIG1lbnVMaXN0My5hcHBlbmRDaGlsZChtZW51TGlzdDNJdGVtMik7XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3QzSXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBtZW51TGlzdDNJdGVtM05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdDNJdGVtM05hbWUudGV4dENvbnRlbnQgPSBcIkdyaWxsZWQgYnJlYWQgd2l0aCB0b21hdG8gc291Y2VcIjtcclxuICAgIGNvbnN0IG1lbnVMaXN0M0l0ZW0zUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtZW51TGlzdDNJdGVtM1ByaWNlLnRleHRDb250ZW50ID0gXCI3LjMkXCI7XHJcblxyXG4gICAgbWVudUxpc3QzSXRlbTMuYXBwZW5kQ2hpbGQobWVudUxpc3QzSXRlbTNOYW1lKTtcclxuICAgIG1lbnVMaXN0M0l0ZW0zLmFwcGVuZENoaWxkKG1lbnVMaXN0M0l0ZW0zUHJpY2UpO1xyXG4gICAgbWVudUxpc3QzLmFwcGVuZENoaWxkKG1lbnVMaXN0M0l0ZW0zKTtcclxuXHJcbiAgICBjb250ZW50TWVudVJpZ2h0LmFwcGVuZENoaWxkKG1lbnVMaXN0Myk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVQYWdlOyIsImltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gJy4vbWVudXBhZ2UnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0cGFnZSc7XHJcblxyXG5jb25zdCBjcmVhdGVOYXZpZ2F0aW9uTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcclxuXHJcbiAgICBjb25zdCBIb21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBIb21lTGluay5pbm5lckhUTUwgPSBcIkhvbWVcIjtcclxuICAgIEhvbWVMaW5rLmlkID0gXCJob21lX2J1dHRvblwiO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKEhvbWVMaW5rKTtcclxuXHJcbiAgICBjb25zdCBNZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBNZW51TGluay5pbm5lckhUTUwgPSBcIk1lbnVcIjtcclxuICAgIE1lbnVMaW5rLmlkID0gXCJtZW51X2J1dHRvblwiO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKE1lbnVMaW5rKTtcclxuXHJcbiAgICBjb25zdCBDb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBDb250YWN0TGluay5pZCA9IFwiY29udGFjdF9idXR0b25cIjtcclxuICAgIENvbnRhY3RMaW5rLmlubmVySFRNTCA9IFwiQ29udGFjdCB1c1wiO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKENvbnRhY3RMaW5rKTtcclxuXHJcbiAgICBIb21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xyXG4gICAgICAgIGNyZWF0ZU5hdmlnYXRpb25NZW51KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIE1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpXHJcbiAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcclxuICAgICAgICBjcmVhdGVOYXZpZ2F0aW9uTWVudSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICBDb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjbGVhckNvbnRlbnQoKVxyXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XHJcbiAgICAgICAgY3JlYXRlTmF2aWdhdGlvbk1lbnUoKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2aWdhdGlvbk1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5cclxuaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tICcuL2xvYWRwYWdlJztcclxuXHJcbi8vbG9hZCB0aGUgcGFnZVxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9