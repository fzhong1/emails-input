/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/emails-input.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/emails-input.css":
/*!******************************!*\
  !*** ./src/emails-input.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/emails-input.css?");

/***/ }),

/***/ "./src/emails-input.js":
/*!*****************************!*\
  !*** ./src/emails-input.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emails_input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emails-input.css */ \"./src/emails-input.css\");\n/* harmony import */ var _emails_input_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emails_input_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction EmailsInput(outerContainer, emails) {\n  var emailInput = {\n    emails: emails,\n    validCount: 0,\n    addEmail: addEmail\n  };\n  var listId = outerContainer.id + \"-list\";\n  var inputId = outerContainer.id + \"-input\";\n  var emailContainer = document.createElement(\"div\");\n  emailContainer.className = \"emails\";\n  emailContainer.innerHTML = intializeTemplate();\n  outerContainer.appendChild(emailContainer);\n  var list = document.querySelector(\"#\" + listId);\n  var chip = buildChip(\"test@google.com\");\n  list.appendChild(chip);\n  var input = document.querySelector(\"#\" + inputId);\n  input.addEventListener(\"keydown\", handleKeyDown);\n  input.addEventListener(\"focusout\", handlefocus);\n  input.addEventListener(\"paste\", handlePaste);\n  list.addEventListener(\"click\", handleDelete);\n  updateEmails(list, emails);\n\n  function handleKeyDown(e) {\n    var key = e.which || e.keyCode;\n\n    if (key === 13 || key === 188) {\n      // enter and comma keys\n      e.preventDefault();\n      addEmail(input.value);\n      input.value = \"\";\n    }\n  }\n\n  function handlefocus(e) {\n    e.preventDefault();\n\n    if (input.value.length > 0) {\n      addEmail(input.value);\n      input.value = \"\";\n    }\n  }\n\n  function handlePaste(e) {\n    e.preventDefault();\n    var pasteEmails = (event.clipboardData || window.clipboardData).getData(\"text\").split(\",\");\n    console.log(pasteEmails);\n    pasteEmails.forEach(function (email) {\n      emails.push(email);\n    });\n    updateEmails();\n  }\n\n  function handleDelete(e) {\n    if (e.target.classList.value === \"removeIcon\") {\n      emails = emails.filter(function (email) {\n        return email !== e.target.id;\n      });\n      updateEmails();\n    }\n  }\n\n  function addEmail(email) {\n    email = email.replace(\",\", \"\");\n    emails.push(email);\n    updateEmails();\n  }\n\n  function countValidEmails() {\n    var count = 0;\n    emails.forEach(function (email) {\n      if (validateEmail(email)) {\n        count++;\n      }\n    });\n    emailInput.validCount = count;\n  }\n\n  function intializeTemplate() {\n    return '<ul><div id=\"' + listId + '\"></div><input id=\"' + inputId + '\" type=\"text\" placeholder=\"add more people...\" /></ul>';\n  }\n\n  function updateEmails() {\n    list.innerHTML = emails.map(function (email) {\n      if (validateEmail(email)) {\n        return \"<li>\" + email + '<div class=\"removeIcon\" id=\"' + email + '\"></div></li>';\n      } else {\n        return \"<li class='invalidEmail'>\" + email + '<div class=\"removeIcon\" id=\"' + email + '\"></div></li>';\n      }\n    }).join(\"\");\n    countValidEmails();\n  }\n\n  return emailInput;\n}\n\nfunction buildChip(email) {\n  var chip = document.createElement(\"div\");\n  chip.classList.add(\"chip\");\n  chip.innerHTML = '<span class=\"closebtn\" onclick=\"\">' + email + \"</span>\";\n  return chip;\n}\n\nfunction validateEmail(email) {\n  var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return re.test(email.toLowerCase());\n}\n\nwindow.EmailsInput = EmailsInput;\n\n//# sourceURL=webpack:///./src/emails-input.js?");

/***/ })

/******/ });