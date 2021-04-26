/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log('Loaded');
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function test() {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");




function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();
  data.forEach(function (key) {
    var th = document.createElement('th');
    var text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  });
}

function generateTable(table, data) {
  data.forEach(function (element) {
    var row = table.insertRow();
    console.log(element);
    var key;
    element.forEach(function (key) {
      var cell = row.insertCell();
      var text = document.createTextNode(element[key]);
      cell.appendChild(text);
    });
  });
}

(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    generateTableHead(table, data);
    generateTable(table, dataRecords);
    /*
          let data = Object.keys(records.data[0]);
          generateTable(table, records.data); // generate the table first
          generateTableHead(table, data); // then the head
           */
  }
});
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this workedss  in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29uc29sZUxvZ0l0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9UZXN0SnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGVMb2dJdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiVGVzdEpTIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwidGVzdCIsInN0YXR1cyIsInJlc3BvbnNlIiwic2VuZCIsImdlbmVyYXRlVGFibGVIZWFkIiwidGFibGUiLCJkYXRhIiwidGhlYWQiLCJjcmVhdGVUSGVhZCIsInJvdyIsImluc2VydFJvdyIsImZvckVhY2giLCJrZXkiLCJ0aCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiZ2VuZXJhdGVUYWJsZSIsImVsZW1lbnQiLCJjZWxsIiwiaW5zZXJ0Q2VsbCIsImVyciIsInJlY29yZHMiLCJhbGVydCIsInF1ZXJ5U2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZGF0YVJlY29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0Qs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QWtCO0FBQ2hCRSxTQUFLLGlDQUEwQkYsR0FBMUIsRUFBTDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1sQixLQUFLLEdBQUdTLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0EsUUFBTXBCLElBQUksR0FBR3FCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhSixPQUFPLENBQUNsQixJQUFSLENBQWEsQ0FBYixDQUFiLENBQWI7QUFDQSxRQUFNdUIsV0FBVyxHQUFHTCxPQUFPLENBQUNsQixJQUE1QjtBQUVBRixxQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLENBQWpCO0FBQ0FhLGlCQUFhLENBQUNkLEtBQUQsRUFBUXdCLFdBQVIsQ0FBYjtBQUNBO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDSztBQUNGLENBakJJLENBQVA7QUFrQkExQyxzREFBWSxDQUFDLDhCQUFELENBQVosQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zb2xlTG9nSXQobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XG4gIGNvbnNvbGUubG9nKCdMb2FkZWQnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpTT04odXJsLCBjYWxsYmFjaykge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiB0ZXN0KCkge1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB4aHI7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gJy4vVGVzdEpzJztcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSAnLi9Db25zb2xlTG9nSXQnO1xuaW1wb3J0IGdldEpTT04gZnJvbSAnLi9nZXRKU09OJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcbiAgY29uc3QgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xuICBjb25zdCByb3cgPSB0aGVhZC5pbnNlcnRSb3coKTtcbiAgZGF0YS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xuICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICBsZXQga2V5O1xuICAgIGVsZW1lbnQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5UZXN0SlMoKTtcbmdldEpTT04oJycsIChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSk7XG5cbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcbiAgKGVyciwgcmVjb3JkcykgPT4ge1xuICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VudCB3cm9uZzogJHtlcnJ9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XG4gICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcblxuICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xuICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xuICAgICAgLypcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMocmVjb3Jkcy5kYXRhWzBdKTtcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIHJlY29yZHMuZGF0YSk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxuICAgICAgICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpOyAvLyB0aGVuIHRoZSBoZWFkXG4gICAgICAgICAgICAgKi9cbiAgICB9XG4gIH0pO1xuQ29uc29sZUxvZ0l0KCd0aGlzIHdvcmtlZHNzICBpbiB0aGUgYnVuZGxlJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9