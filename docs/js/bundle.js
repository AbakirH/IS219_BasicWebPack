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

  xhr.onload = function () {
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




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

function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var th = document.createElement('th');
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function generateTable(table, data) {
  var _iterator2 = _createForOfIteratorHelper(data),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      var row = table.insertRow();
      console.log(element);
      var key = void 0;

      for (key in element) {
        var cell = row.insertCell();
        var text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29uc29sZUxvZ0l0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9UZXN0SnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGVMb2dJdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiVGVzdEpTIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZGF0YSIsImVyciIsInJlY29yZHMiLCJhbGVydCIsInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFSZWNvcmRzIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJnZW5lcmF0ZVRhYmxlIiwidGhlYWQiLCJjcmVhdGVUSGVhZCIsInJvdyIsImluc2VydFJvdyIsImtleSIsInRoIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNlbGwiLCJpbnNlcnRDZWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FD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QVQsQ0FBdUJQLEtBQXZCLEVBQThCSixJQUE5QixFQUFvQztBQUFBLDhDQUNaQSxJQURZO0FBQUE7O0FBQUE7QUFDbEMsMkRBQTRCO0FBQUEsVUFBakJzQixPQUFpQjtBQUMxQixVQUFNUixHQUFHLEdBQUdWLEtBQUssQ0FBQ1csU0FBTixFQUFaO0FBQ0E3QixhQUFPLENBQUNDLEdBQVIsQ0FBWW1DLE9BQVo7QUFDQSxVQUFJTixHQUFHLFNBQVA7O0FBQ0EsV0FBS0EsR0FBTCxJQUFZTSxPQUFaLEVBQXFCO0FBQ25CLFlBQU1DLElBQUksR0FBR1QsR0FBRyxDQUFDVSxVQUFKLEVBQWI7QUFDQSxZQUFNTCxJQUFJLEdBQUdkLFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QkUsT0FBTyxDQUFDTixHQUFELENBQS9CLENBQWI7QUFDQU8sWUFBSSxDQUFDRixXQUFMLENBQWlCRixJQUFqQjtBQUNEO0FBQ0Y7QUFWaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVduQyxDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnNvbGVMb2dJdChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RKUygpIHtcbiAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHhocjtcclxuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2soc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgeGhyLnNlbmQoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUZXN0SlMgZnJvbSAnLi9UZXN0SnMnO1xyXG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gJy4vQ29uc29sZUxvZ0l0JztcclxuaW1wb3J0IGdldEpTT04gZnJvbSAnLi9nZXRKU09OJztcclxuXHJcblRlc3RKUygpO1xyXG5nZXRKU09OKCcnLCAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59KTtcclxuXHJcbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcclxuICAoZXJyLCByZWNvcmRzKSA9PiB7XHJcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XHJcbiAgICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VudCB3cm9uZzogJHtlcnJ9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XHJcbiAgICAgIGNvbnN0IGRhdGFSZWNvcmRzID0gcmVjb3Jkcy5kYXRhO1xyXG5cclxuICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xyXG4gICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhUmVjb3Jkcyk7XHJcbiAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMocmVjb3Jkcy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgcmVjb3Jkcy5kYXRhKTsgLy8gZ2VuZXJhdGUgdGhlIHRhYmxlIGZpcnN0XHJcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTsgLy8gdGhlbiB0aGUgaGVhZFxyXG4gICAgICAgICAgICAgKi9cclxuICAgIH1cclxuICB9KTtcclxuQ29uc29sZUxvZ0l0KCd0aGlzIHdvcmtlZHNzICBpbiB0aGUgYnVuZGxlJyk7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSkge1xyXG4gIGNvbnN0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcclxuICBjb25zdCByb3cgPSB0aGVhZC5pbnNlcnRSb3coKTtcclxuICBmb3IgKGNvbnN0IGtleSBvZiBkYXRhKSB7XHJcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoa2V5KTtcclxuICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcclxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgIGxldCBrZXk7XHJcbiAgICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcclxuICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==