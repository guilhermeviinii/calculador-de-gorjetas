/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton,\ninput,\ntextarea,\nselect,\nbody {\n  font-family: \"Space Mono\", monospace;\n  font-weight: 500;\n  font-size: 24px;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-color: rgba(47, 233, 208, 0.315);\n}\n\nstrong,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\nbutton,\ninput,\ntextarea,\nselect {\n  color: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ninput:focus-visible {\n  outline: 2px solid #2fe9d0;\n}\n\n.calculator {\n  background-color: white;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  column-gap: 32px;\n  padding: 32px 42px;\n  border-radius: 30px;\n  color: #5e7a7d;\n  font-weight: bold;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n.calculator .config-calculator,\n.calculator .results-calculator {\n  flex: 1;\n}\n.calculator .bill {\n  display: flex;\n  flex-direction: column;\n}\n.calculator .bill .input-icon {\n  position: relative;\n}\n.calculator .bill .input-icon input {\n  position: relative;\n  border-radius: 5px;\n  margin-top: 8px;\n  border: 0;\n  padding: 6px 16px;\n  padding-left: 32px;\n  background-color: rgba(127, 156, 159, 0.1);\n  text-align: right;\n  color: #00494d;\n  font-weight: bold;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n.calculator .bill .input-icon i {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n}\n.calculator .select-trip {\n  margin-top: 32px;\n}\n.calculator .select-trip .porcentuals {\n  margin-top: 8px;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: 1fr 1fr 1fr;\n  flex-wrap: wrap;\n  column-gap: 8px;\n}\n.calculator .select-trip .porcentuals button,\n.calculator .select-trip .porcentuals input {\n  padding: 8px 18px;\n  border: 0;\n  border-radius: 8px;\n  background-color: #00494d;\n  color: white;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n.calculator .select-trip .porcentuals button:hover {\n  color: #00494d;\n  font-weight: bold;\n  background-color: rgba(47, 233, 208, 0.7);\n}\n.calculator .select-trip .porcentuals input {\n  width: 100%;\n  background-color: rgba(127, 156, 159, 0.1);\n  -webkit-appearance: none;\n  color: #00494d;\n  text-align: right;\n  -moz-appearance: textfield;\n}\n.calculator .select-trip .porcentuals input::placeholder {\n  color: #5e7a7d;\n}\n.calculator .peoples {\n  display: flex;\n  flex-direction: column;\n  margin-top: 32px;\n}\n.calculator .peoples-text {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.calculator .peoples .invalid-text {\n  font-size: 12px;\n  color: #e53e3e;\n  display: none;\n}\n.calculator .peoples .invalid-text.invalid {\n  display: block;\n}\n.calculator .peoples .input-icon {\n  position: relative;\n}\n.calculator .peoples .input-icon input {\n  position: relative;\n  border-radius: 5px;\n  margin-top: 8px;\n  border: 0;\n  padding: 6px 16px;\n  padding-left: 32px;\n  background-color: rgba(127, 156, 159, 0.1);\n  text-align: right;\n  color: #00494d;\n  font-weight: bold;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n  border: 1px solid transparent;\n}\n.calculator .peoples .input-icon input.invalid {\n  border: 1px solid #e53e3e;\n}\n.calculator .peoples .input-icon input.invalid:focus-visible {\n  outline: none;\n}\n.calculator .peoples .input-icon i {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n}\n.calculator .results-calculator {\n  flex: 1;\n  background-color: #00494d;\n  padding: 16px 38px 32px;\n  display: grid;\n  border-radius: 25px;\n  color: white;\n}\n.calculator .results-calculator .tip-amount-text,\n.calculator .results-calculator .total-amount-text {\n  font-size: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.calculator .results-calculator .tip-amount-text span,\n.calculator .results-calculator .total-amount-text span {\n  color: #7f9c9f;\n  font-size: 11px;\n}\n.calculator .results-calculator .tips-amount,\n.calculator .results-calculator .total-amount {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n  word-break: break-all;\n}\n.calculator .results-calculator .total-tip-amount,\n.calculator .results-calculator .total {\n  font-size: 42px;\n  color: #2fe9d0;\n}\n.calculator .results-calculator .reset {\n  height: 50px;\n  align-self: flex-end;\n  color: #7f9c9f;\n  font-weight: bold;\n  background-color: #2fe9d0;\n  border: 0;\n  border-radius: 10px;\n  filter: opacity(0.3);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 18px;\n}\n.calculator .results-calculator .reset:hover {\n  color: white;\n  filter: opacity(1);\n}\n\n@media (max-width: 375px) {\n  .calculator {\n    width: 100%;\n    flex-direction: column;\n    row-gap: 32px;\n    padding: 32px 24px;\n  }\n  .calculator .select-trip .porcentuals {\n    grid-template-columns: 1fr 1fr;\n  }\n  .calculator .results-calculator {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/config/default.scss","webpack://./src/styles/index.scss","webpack://./src/styles/config/variables.scss","webpack://./src/styles/config/mixins.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACCF;;ADEA;;;;;EAKE,oCEEY;EFDZ,gBAAA;EACA,eEES;ADDX;;ADCA;EAEE,YAAA;EACA,aAAA;EAEA,aAAA;EACA,uBAAA;EACA,sBAAA;EAEA,2CErBiB;ADoBnB;;ADIA;;;;;;;;;;;;EAYE,cAAA;ACDF;;ADIA;EACE,eAAA;ACDF;;ADIA;EACE,0BAAA;ACDF;;AA5CA;EACE,uBCQM;EDPN,WAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,cCJiB;EDKjB,iBAAA;EAEA,uCAAA;AA8CF;AA5CE;;EAEE,OAAA;AA8CJ;AA5CE;EACE,aAAA;EACA,sBAAA;AA8CJ;AA7CI;EACE,kBAAA;AA+CN;AA9CM;EE1BJ,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,iBAAA;EACA,cDDe;ECEf,iBAAA;EACA,WAAA;EACA,wBAAA;EACA,0BAAA;AF2EF;AA1DM;EACE,kBAAA;EACA,UAAA;EACA,SAAA;AA4DR;AAxDE;EACE,gBAAA;AA0DJ;AAzDI;EACE,eAAA;EACA,aAAA;EACA,QAAA;EACA,kCAAA;EACA,eAAA;EACA,eAAA;AA2DN;AA1DM;;EAEE,iBAAA;EACA,SAAA;EACA,kBAAA;EACA,yBC3CS;ED4CT,YCvCA;EDwCA,iBAAA;EACA,iCAAA;AA4DR;AAzDQ;EACE,cClDO;EDmDP,iBAAA;EACA,yCAAA;AA2DV;AAxDM;EACE,WAAA;EACA,0CAAA;EACA,wBAAA;EACA,cC3DS;ED4DT,iBAAA;EACA,0BAAA;AA0DR;AAzDQ;EACE,cC9DS;ADyHnB;AAtDE;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AAwDJ;AAvDI;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;AAyDN;AAvDI;EACE,eAAA;EACA,cAAA;EACA,aAAA;AAyDN;AAxDM;EACE,cAAA;AA0DR;AAtDI;EACE,kBAAA;AAwDN;AAtDM;EEhGJ,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,iBAAA;EACA,cDDe;ECEf,iBAAA;EACA,WAAA;EACA,wBAAA;EACA,0BAAA;EFsFM,6BAAA;AAoER;AAnEQ;EACE,yBAAA;AAqEV;AApEU;EACE,aAAA;AAsEZ;AAlEM;EACE,kBAAA;EACA,UAAA;EACA,SAAA;AAoER;AA/DE;EACE,OAAA;EACA,yBC7Ga;ED8Gb,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AAiEJ;AAhEI;;EAEE,eAAA;EACA,aAAA;EACA,sBAAA;AAkEN;AAhEM;;EACE,cCvHY;EDwHZ,eAAA;AAmER;AAhEI;;EAEE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;AAkEN;AAhEI;;EAEE,eAAA;EACA,cC1IQ;AD4Md;AAhEI;EACE,YAAA;EACA,oBAAA;EACA,cC3Ic;ED4Id,iBAAA;EACA,yBCjJQ;EDkJR,SAAA;EACA,mBAAA;EACA,oBAAA;EACA,eAAA;EACA,oBAAA;EACA,eAAA;AAkEN;AAjEM;EACE,YAAA;EACA,kBAAA;AAmER;;AA7DA;EACE;IACE,WAAA;IAMA,sBAAA;IACA,aAAA;IACA,kBAAA;EA2DF;EAjEE;IACE,8BAAA;EAmEJ;EA7DE;IACE,WAAA;EA+DJ;AACF","sourcesContent":["@import \"./variables.scss\";\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton,\ninput,\ntextarea,\nselect,\nbody {\n  font-family: $font-family;\n  font-weight: 500;\n  font-size: $fontSize;\n}\nbody {\n\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\n  background-color: $background-color;\n}\n\nstrong,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\nbutton,\ninput,\ntextarea,\nselect {\n  color: inherit;\n}\n\nbutton{\n  cursor: pointer;\n}\n\ninput:focus-visible{\n  outline: 2px solid $strong-cyan;\n}","@use 'sass:string';\n@import \"./config/default.scss\", \"./config/variables.scss\",\n  \"./config/mixins.scss\";\n\n.calculator {\n  background-color: $white;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  column-gap: 32px;\n  padding: 32px 42px;\n  border-radius: 30px;\n  color: $dark-grayis-cyan;\n  font-weight: bold;\n\n  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);\n\n  .config-calculator,\n  .results-calculator {\n    flex: 1;\n  }\n  .bill {\n    display: flex;\n    flex-direction: column;\n    .input-icon {\n      position: relative;\n      input {\n        @include button-gray-light;\n      }\n      i {\n        position: absolute;\n        left: 16px;\n        top: 20px;\n      }\n    }\n  }\n  .select-trip {\n    margin-top: 32px;\n    .porcentuals {\n      margin-top: 8px;\n      display: grid;\n      gap: 8px;\n      grid-template-columns: 1fr 1fr 1fr;\n      flex-wrap: wrap;\n      column-gap: 8px;\n      button,\n      input {\n        padding: 8px 18px;\n        border: 0;\n        border-radius: 8px;\n        background-color: $very-dark-cyan;\n        color: $white;\n        font-weight: bold;\n        transition: background-color 0.3s;\n      }\n      button {\n        &:hover {\n          color: $very-dark-cyan;\n          font-weight: bold;\n          background-color: rgba($color: $strong-cyan, $alpha: 0.7);\n        }\n      }\n      input {\n        width: 100%;\n        background-color: rgba($color: $dark-grayish-cyan, $alpha: 0.1);\n        -webkit-appearance: none;\n        color: $very-dark-cyan;\n        text-align: right;\n        -moz-appearance: textfield;\n        &::placeholder {\n          color: $dark-grayis-cyan;\n        }\n      }\n    }\n  }\n  .peoples {\n    display: flex;\n    flex-direction: column;\n    margin-top: 32px;\n    &-text {\n      display: flex;\n      align-items: flex-end;\n      justify-content: space-between;\n    }\n    .invalid-text {\n      font-size: 12px;\n      color: #e53e3e;\n      display: none;\n      &.invalid{\n        display: block;\n      }\n    }\n\n    .input-icon {\n      position: relative;\n      \n      input {\n        @include button-gray-light;\n        border: 1px solid transparent;\n        &.invalid{\n          border: 1px solid #e53e3e;\n          &:focus-visible{\n            outline: none;\n          }\n        }\n      }\n      i {\n        position: absolute;\n        left: 16px;\n        top: 20px;\n      }\n    }\n  }\n\n  .results-calculator {\n    flex: 1;\n    background-color: $very-dark-cyan;\n    padding: 16px 38px 32px;\n    display: grid;\n    border-radius: 25px;\n    color: white;\n    .tip-amount-text,\n    .total-amount-text {\n      font-size: 15px;\n      display: flex;\n      flex-direction: column;\n\n      span {\n        color: $dark-grayish-cyan;\n        font-size: 11px;\n      }\n    }\n    .tips-amount,\n    .total-amount {\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      align-items: center;\n      word-break: break-all;\n    }\n    .total-tip-amount,\n    .total {\n      font-size: 42px;\n      color: $strong-cyan;\n    }\n    .reset {\n      height: 50px;\n      align-self: flex-end;\n      color: $dark-grayish-cyan;\n      font-weight: bold;\n      background-color: $strong-cyan;\n      border: 0;\n      border-radius: 10px;\n      filter: opacity(0.3);\n      cursor: pointer;\n      transition: all 0.2s;\n      font-size: 18px;\n      &:hover {\n        color: white;\n        filter: opacity(1);\n      }\n    }\n  }\n}\n\n@media(max-width: map-get($map: $devices, $key: mobile)) {\n  .calculator{\n    width: 100%;\n\n    .select-trip .porcentuals{\n      grid-template-columns: 1fr 1fr;\n    }\n    \n    flex-direction: column;\n    row-gap: 32px;\n    padding: 32px 24px;\n    .results-calculator{\n      width: 100%;\n    }\n  }\n  \n}\n","@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;700&display=swap');\n$devices: (\n    'mobile': 375px,\n    'desktop': 1440px\n);\n$background-color: hsla(172, 81%, 55%, 0.315);\n$strong-cyan: hsl(172, 81%, 55%);\n\n$very-dark-cyan: hsl(183, 100%, 15%);\n$dark-grayis-cyan: hsl(186, 14%, 43%);\n$dark-grayish-cyan: hsl(184, 14%, 56%);\n$light-grayish-cyan: hsl(185, 41%, 84%);\n$light-grayish-cyan: hsl(189, 41%, 97%);\n$white: hsl(0, 0%, 100%);\n\n$font-family: 'Space Mono', monospace;\n\n$fontSize: 24px","@mixin button-gray-light {\n  position: relative;\n  border-radius: 5px;\n  margin-top: 8px;\n  border: 0;\n  padding: 6px 16px;\n  padding-left: 32px;\n  background-color: rgba($color: $dark-grayish-cyan, $alpha: 0.1);\n  text-align: right;\n  color: $very-dark-cyan;\n  font-weight: bold;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n  \n} ;\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tips = void 0;
__webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
class Tips {
    constructor(tipsElements) {
        this.bill = tipsElements.bill;
        this.numberOfPerson = tipsElements.numberOfPerson;
        this.numberCustom = tipsElements.numberCustom;
        this.buttonsPorcent = tipsElements.buttonsPorcent;
        this.totalTip = tipsElements.totalTip;
        this.amountTip = tipsElements.amountTip;
        this.reset = tipsElements.reset;
    }
    initEvent() {
        this.buttonsPorcent.forEach((button) => {
            button.addEventListener("click", () => this.calcPorcentBill(button));
        });
        this.reset.addEventListener("click", () => this.resetValues());
        this.numberCustom.addEventListener("keyup", () => this.calcPorcentBill());
    }
    resetValues() {
        this.numberCustom.value = "";
        this.numberOfPerson.value = "";
        this.bill.value = "";
        this.amountTip.innerHTML = "$0,00";
        this.totalTip.innerHTML = "$0,00";
    }
    calcPorcentBill(button = null) {
        var _a;
        let porcent = null;
        if (button == null) {
            if (Number(this.numberCustom.value) > 100)
                return this.resetValues();
            porcent = Number(this.numberCustom.value) / 100;
        }
        else {
            porcent = Number((_a = button.textContent) === null || _a === void 0 ? void 0 : _a.replace("%", "")) / 100;
        }
        if (this.validNumberOfPeople()) {
            let porcentByPeople = Number(this.bill.value) / Number(this.numberOfPerson.value);
            let total = porcentByPeople * porcent;
            this.totalTip.innerHTML = `$${porcentByPeople
                .toString()
                .replace(".", ",")}`;
            this.amountTip.innerHTML = `$${total.toString().replace(".", ",")}`;
        }
    }
    validNumberOfPeople() {
        let valid = true;
        const cantBe0 = document.querySelector(".invalid-text");
        if (Number(this.numberOfPerson.value) < 1) {
            cantBe0 === null || cantBe0 === void 0 ? void 0 : cantBe0.classList.add("invalid");
            this.numberOfPerson.classList.add("invalid");
            valid = false;
        }
        else {
            cantBe0 === null || cantBe0 === void 0 ? void 0 : cantBe0.classList.remove("invalid");
            this.numberOfPerson.classList.remove("invalid");
            valid = true;
        }
        return valid;
    }
}
exports.Tips = Tips;
const tips = new Tips({
    bill: document.querySelector(".input-bill"),
    numberCustom: document.querySelector(".input-custom"),
    numberOfPerson: document.querySelector(".input-people"),
    buttonsPorcent: document.querySelectorAll(".porcent-button"),
    amountTip: document.querySelector(".total-tip-amount"),
    totalTip: document.querySelector(".total"),
    reset: document.querySelector(".reset"),
});
tips.initEvent();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map