/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/usa.jpg */ \"./src/images/usa.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Apply to entire file */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n\n  border: 1px solid red;\n}\n\n/* Navigator bar */\nheader {\n  position: relative;\n}\n\nnav {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  color: white;\n  z-index: 10;\n  width: 100%;\n  height: 100px;\n}\n\n.name {\n  font-size: 50px;\n  padding: 20px;\n  cursor: pointer;\n  font-weight: bold;\n  color: #ff5722;\n  text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000, 1px -1px 0 #000,\n    -1px 1px 0 #000;\n  transition: text-shadow 0.2s ease-in-out;\n  animation: blinkAnimation 2s infinite;\n}\n\n@keyframes blinkAnimation {\n  0% {\n    color: #ff5722;\n    text-shadow: 0 0 4px #ff5722, 0 0 8px #ff5722;\n  }\n  20% {\n    color: #ff5722;\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    color: #ff5722;\n    text-shadow: none;\n  }\n  80% {\n    color: #ff5722;\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n  }\n  100% {\n    color: #ff5722;\n    text-shadow: 0 0 4px #ff5722, 0 0 8px #ff5722;\n  }\n}\n\n.buttons-div {\n  flex: 1;\n  padding-top: 12px;\n}\n\n.nav-button {\n  padding: 10px 20px;\n  margin: 5px;\n  margin-left: 30px;\n  font-size: 20px;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease, color 0.2s ease;\n}\n\n.nav-button:hover {\n  background-color: #ff5722;\n  transform: scale(1.05);\n}\n\n.nav-button:active {\n  background-color: #ff3d00;\n  transform: scale(0.98);\n  color: rgb(255, 255, 255);\n}\n\n/* Body background image */\nbody {\n  position: relative;\n  margin: 0;\n  height: 100vh;\n}\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  filter: brightness(0.65);\n  z-index: -1; /* Ensure the background is behind other content */\n}\n\n#content {\n  position: absolute;\n  z-index: 10;\n  top: 100px;\n  height: calc(100vh - 100px);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Default template */\n.default-template {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  z-index: 15;\n}\n\n.slogan {\n  font-size: 40px;\n  padding-top: 10%;\n  padding-left: 50px;\n}\n\n.sub-slogan {\n  margin-top: 8px;\n  font-size: 35px;\n}\n\n.order-button {\n  margin-top: 50px;\n  background-color: #ff5722;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 15px 30px;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n\n.order-button:hover {\n  background-color: #e64a19;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n  transform: scale(1.05);\n}\n\n.order-button:active {\n  background-color: #d84315;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  transform: scale(1);\n}\n\n.content > div {\n  opacity: 0;\n  transform: scale(0.95);\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n\n.content > div.loaded {\n  opacity: 1;\n  transform: scale(1);\n}\n\n/* Menu template */\n.menu-container {\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.8);\n  border: 3px solid #ff5722;\n  border-radius: 15px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.7);\n  color: white;\n  max-width: 600px;\n  margin: auto;\n  animation: slideIn 0.8s ease;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.menu-header {\n  font-size: 28px;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #ff5722;\n  text-shadow: 2px 2px 6px rgba(255, 87, 34, 0.8);\n}\n\n.menu-item {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n}\n\n.name-price {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n}\n\n.name-price li {\n  font-weight: bold;\n  color: #ff5722;\n  text-shadow: 1px 1px 4px rgba(255, 87, 34, 0.7);\n  list-style-type: none;\n}\n\n.name-price h3 {\n  color: white;\n  background: #ff5722;\n  padding: 2px 8px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 6px rgba(255, 87, 34, 0.6);\n}\n\n.menu-item p {\n  margin: 5px 0 0;\n  font-size: 14px;\n  color: #ddd;\n  font-style: italic;\n}\n\n.menu-item:hover {\n  transform: scale(1.03);\n  background: rgba(255, 87, 34, 0.1);\n  transition: transform 0.3s ease, background 0.3s ease;\n}\n\n/* About template */\n.about-container {\n  padding: 30px;\n  background: rgba(0, 0, 0, 0.85);\n  border: 3px solid #ff5722;\n  border-radius: 15px;\n  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.5);\n  color: white;\n  max-width: 600px;\n  margin: 20px auto;\n  text-align: center;\n  animation: slideIn 1s ease-out;\n  font-family: \"Roboto\", sans-serif;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.about-header {\n  font-size: 32px;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #ff5722;\n  text-shadow: 3px 3px 10px rgba(255, 87, 34, 0.8);\n  font-weight: bold;\n}\n\n.our-story {\n  font-size: 18px;\n  line-height: 1.6;\n  margin-top: 20px;\n  color: #ddd;\n  text-align: justify;\n}\n\n.our-story strong {\n  color: #ff5722;\n}\n\n/* Contact template */\n.contact-container {\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.8);\n  border: 3px solid #ff5722;\n  border-radius: 15px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.7);\n  color: white;\n  max-width: 550px;\n  margin: auto;\n  animation: slideIn 0.8s ease;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.contact-header {\n  font-size: 28px;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #ff5722;\n  text-shadow: 2px 2px 6px rgba(255, 87, 34, 0.8);\n}\n\n.contact-info {\n  font-size: 18px;\n  color: white;\n  line-height: 1.8;\n  margin: 10px 0;\n}\n\n.contact-info a {\n  text-decoration: none;\n  color: #ff5722;\n  font-weight: bold;\n}\n\n.contact-info a:hover {\n  text-decoration: underline;\n  color: #ffa372;\n}\n\n/* Contact form */\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: 20px;\n}\n\n.form-input,\n.form-textarea {\n  width: 100%;\n  padding: 10px 15px;\n  border: 2px solid #ff5722;\n  border-radius: 5px;\n  font-size: 16px;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\n}\n\n.form-input::placeholder,\n.form-textarea::placeholder {\n  color: #ffdab3;\n}\n\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #ffa372;\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.form-textarea {\n  min-height: 100px;\n  max-height: 200px;\n  resize: vertical;\n  overflow-y: auto;\n}\n\n.form-button {\n  padding: 10px 20px;\n  background-color: #ff5722;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background 0.3s ease;\n  box-shadow: 0 4px 10px rgba(255, 87, 34, 0.6);\n}\n\n.form-button:hover {\n  background-color: #e64a19;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about.js */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n\n// Navigator Bar\nconst nav = document.querySelector(\"nav\");\n\nconst name = document.createElement(\"h1\");\nname.classList.add(\"name\");\nname.textContent = \"The Patriot Grill\";\nnav.appendChild(name);\n\n// Create buttons\nconst buttons = [\"MENU\", \"ABOUT\", \"CONTACT\"];\nconst buttonsDiv = document.createElement(\"div\");\nbuttonsDiv.classList.add(\"buttons-div\");\nnav.appendChild(buttonsDiv);\n\nbuttons.forEach((label) => {\n  const button = document.createElement(\"button\");\n  button.classList.add(\"nav-button\");\n  button.textContent = label;\n  button.classList.add(label);\n  buttonsDiv.appendChild(button);\n});\n\n// Function that clears content div and appends new template\n// When called - function should be passed in as an argument\nfunction switchTab(newTab) {\n  content.innerHTML = \"\";\n  content.appendChild(newTab);\n}\n\n// Display the default template on page load\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const { defaultTemplate, orderBtn } = (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  switchTab(defaultTemplate);\n\n  // Add event listener for the order button\n  orderBtn.addEventListener(\"click\", () => {\n    switchTab((0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  });\n});\n\n// Event listener for the restaurant name to display the default template\nname.addEventListener(\"click\", () => {\n  const { defaultTemplate, orderBtn } = (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  switchTab(defaultTemplate);\n\n  // Add event listener for the order button\n  orderBtn.addEventListener(\"click\", () => {\n    switchTab((0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  });\n});\n\n// Event listeners for other nav buttons\ndocument.querySelector(\".MENU\").addEventListener(\"click\", () => {\n  switchTab((0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\n\ndocument.querySelector(\".ABOUT\").addEventListener(\"click\", () => {\n  switchTab((0,_modules_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\n\ndocument.querySelector(\".CONTACT\").addEventListener(\"click\", () => {\n  switchTab((0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout() {\n  const aboutDiv = document.createElement(\"div\");\n  aboutDiv.classList.add(\"about-container\");\n\n  const aboutHeader = document.createElement(\"h2\");\n  aboutHeader.classList.add(\"about-header\");\n  aboutHeader.textContent = \"Our Story\";\n  aboutDiv.appendChild(aboutHeader);\n\n  const ourStory = document.createElement(\"p\");\n  ourStory.classList.add(\"our-story\");\n  ourStory.innerHTML = `\n  <strong>Welcome to The Patriot Grill – A Legacy of Flavor</strong><br><br>\n  At <strong>The Patriot Grill</strong>, we’re more than just a burger joint – we’re a celebration of American tradition. For over <strong>50 years</strong>, we’ve been serving up mouthwatering, all-American classics that bring people together.<br><br>\n  Our story began with a small-town dream: to create a place where families, friends, and food lovers could gather to enjoy the simple, hearty flavors of the USA. From our signature burgers stacked high with premium ingredients to our smoky BBQ creations and crispy fries, every bite is a tribute to the culinary spirit of America.<br><br>\n  We pride ourselves on using only the freshest ingredients and time-honored recipes passed down through generations. Whether you’re craving the perfect burger, a sizzling hot sandwich, or a hearty side, you’ll find it here, served with a smile and a touch of patriotism.<br><br>\n  So pull up a chair, savor the flavors, and join us in keeping the great American food tradition alive. <strong>The Patriot Grill</strong> – where every meal is a taste of freedom.\n`;\n  aboutDiv.appendChild(ourStory);\n\n  return aboutDiv;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n  const contactDiv = document.createElement(\"div\");\n  contactDiv.classList.add(\"contact-container\");\n\n  const contactHeader = document.createElement(\"h2\");\n  contactHeader.classList.add(\"contact-header\");\n  contactHeader.textContent = \"Get in Touch\";\n  contactDiv.appendChild(contactHeader);\n\n  const address = document.createElement(\"p\");\n  address.classList.add(\"contact-info\");\n  address.innerHTML = `<strong>Address:</strong> 1776 Freedom Street, Liberty Town, USA`;\n  contactDiv.appendChild(address);\n\n  const email = document.createElement(\"p\");\n  email.classList.add(\"contact-info\");\n  email.innerHTML = `<strong>Email:</strong> <a href=\"mailto:contact@patriotgrill.com\">contact@patriotgrill.com</a>`;\n  contactDiv.appendChild(email);\n\n  const phone = document.createElement(\"p\");\n  phone.classList.add(\"contact-info\");\n  phone.innerHTML = `<strong>Phone:</strong> <a href=\"tel:+1234567890\">(123) 456-7890</a>`;\n  contactDiv.appendChild(phone);\n\n  const hours = document.createElement(\"p\");\n  hours.classList.add(\"contact-info\");\n  hours.innerHTML = `<strong>Hours:</strong> Mon-Sun: 11 AM - 10 PM`;\n  contactDiv.appendChild(hours);\n\n  // Contact form\n  const form = document.createElement(\"form\");\n  form.classList.add(\"contact-form\");\n\n  // Name input\n  const nameField = document.createElement(\"input\");\n  nameField.type = \"text\";\n  nameField.placeholder = \"Your Name\";\n  nameField.classList.add(\"form-input\");\n  form.appendChild(nameField);\n\n  // Email input\n  const emailField = document.createElement(\"input\");\n  emailField.type = \"email\";\n  emailField.placeholder = \"Your Email\";\n  emailField.classList.add(\"form-input\");\n  form.appendChild(emailField);\n\n  // Message textarea\n  const messageField = document.createElement(\"textarea\");\n  messageField.placeholder = \"Your Message\";\n  messageField.classList.add(\"form-textarea\");\n  messageField.maxLength = 500;\n  form.appendChild(messageField);\n\n  // Submit button\n  const submitButton = document.createElement(\"button\");\n  submitButton.type = \"submit\";\n  submitButton.textContent = \"Send\";\n  submitButton.classList.add(\"form-button\");\n  form.appendChild(submitButton);\n\n  // Append form to the contact container\n  contactDiv.appendChild(form);\n\n  return contactDiv;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createDefaultTemplate)\n/* harmony export */ });\n// homepage.js\nfunction createDefaultTemplate() {\n  const defaultTemplate = document.createElement(\"div\");\n  defaultTemplate.classList.add(\"default-template\");\n\n  const slogan = document.createElement(\"p\");\n  slogan.classList.add(\"slogan\");\n  slogan.textContent = \"Bite into Freedom.\";\n  defaultTemplate.appendChild(slogan);\n\n  const subSlogan = document.createElement(\"p\");\n  subSlogan.classList.add(\"sub-slogan\");\n  subSlogan.textContent = \"Taste the Flavor!\";\n  slogan.appendChild(subSlogan);\n\n  const orderBtn = document.createElement(\"button\");\n  orderBtn.classList.add(\"order-button\");\n  orderBtn.textContent = \"Order Now\";\n  slogan.appendChild(orderBtn);\n\n  // Return the default template and the orderBtn (so event listener can be added to it)\n  return { defaultTemplate, orderBtn };\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\n  const menuDiv = document.createElement(\"div\");\n  menuDiv.classList.add(\"menu-container\");\n\n  const menuHeader = document.createElement(\"h2\");\n  menuHeader.classList.add(\"menu-header\");\n  menuHeader.textContent = \"Our Menu\";\n  menuDiv.appendChild(menuHeader);\n\n  const menuList = document.createElement(\"ul\");\n  const items = [\n    {\n      name: \"The Lone Star BBQ Burger\",\n      price: \"$12.99\",\n      description:\n        \"Smoked bacon, BBQ sauce, cheddar cheese, and crispy onion rings.\",\n    },\n    {\n      name: \"The All-American Classic\",\n      price: \"$10.99\",\n      description:\n        \"Juicy beef patty, lettuce, tomato, pickles, onion, and American cheese.\",\n    },\n    {\n      name: \"The Firehouse Inferno\",\n      price: \"$13.99\",\n      description:\n        \"Spicy jalapeños, pepper jack cheese, chipotle mayo, and hot sauce.\",\n    },\n    {\n      name: \"The Ranchero Delight\",\n      price: \"$14.99\",\n      description:\n        \"Beef patty, fried egg, avocado, ranch dressing, and crispy bacon.\",\n    },\n    {\n      name: \"The Smokestack Supreme\",\n      price: \"$15.99\",\n      description:\n        \"Hickory-smoked brisket, cheddar cheese, caramelized onions, and smoky aioli.\",\n    },\n    {\n      name: \"The Big Buffalo\",\n      price: \"$11.99\",\n      description:\n        \"Buffalo chicken patty, blue cheese crumbles, lettuce, and ranch drizzle.\",\n    },\n  ];\n\n  items.forEach((item) => {\n    const itemDiv = document.createElement(\"div\");\n    itemDiv.classList.add(\"menu-item\");\n\n    const namePrice = document.createElement(\"div\");\n    namePrice.classList.add(\"name-price\");\n\n    const burgerName = document.createElement(\"li\");\n    burgerName.textContent = item.name;\n\n    const burgerPrice = document.createElement(\"h3\");\n    burgerPrice.textContent = item.price;\n\n    const burgerDescription = document.createElement(\"p\");\n    burgerDescription.textContent = item.description;\n\n    namePrice.appendChild(burgerName);\n    namePrice.appendChild(burgerPrice);\n    itemDiv.appendChild(namePrice);\n    itemDiv.appendChild(burgerDescription);\n    menuList.appendChild(itemDiv);\n  });\n\n  menuDiv.appendChild(menuList);\n  return menuDiv;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/images/usa.jpg":
/*!****************************!*\
  !*** ./src/images/usa.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2bb5f2ddb85cf2bd11c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/usa.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;