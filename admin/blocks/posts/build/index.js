/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./posts/src/edit.js":
/*!***************************!*\
  !*** ./posts/src/edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);

/**
 * The edit function describes the structure of your block in the context
 * of the editor. This represents what the editor will render when the
 * block is used.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 * @sice 1.0.0
 */


const Edit = props => {
  const {
    title,
    per_page
  } = props;

  /**
   * useState Returns a stateful value, and a function to update it.
   * 
   * During the initial render, the returned state (posts) is the same
   * as the value passed as the first argument ( [] ). (empty array)
   * 
   * The setPosts is used to update the state.
   * It accepts a new state value and enqueues a re-render of the component.
   * 
   * @link https://reactjs.org/docs/hooks-reference.html#usestate
   * @since 1.0.0
   */
  const [posts, setPosts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const fetchPosts = async () => {
    const path = per_page === undefined ? 'wp/v2/posts?per_page=3' : `wp/v2/posts?per_page=${per_page}`;
    const newPosts = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path
    });
    setPosts(newPosts);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchPosts();
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, posts.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    class: "article-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "row justify-content-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "col-lg-6 col-md-9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "section-title text-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/hero-line.png",
    alt: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    class: "title"
  }, "Recent Article"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Our focus is on delivering you the absolute best support guiding you through training and providing.")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "row justify-content-center"
  }, posts.map(post => {
    const parser = new DOMParser();
    const excerpt = parser.parseFromString(post.excerpt.rendered, "text/html");
    let excerptRendered = excerpt.documentElement.textContent;
    if (excerptRendered.length > 100) {
      excerptRendered = `${excerptRendered.substring(0, 100)}...`;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-lg-4 col-md-6 col-sm-9",
      key: post.id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "article-item mt-30"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "article-top text-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.link
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, post.title.rendered))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "article-thumb"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.link
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: post.featured_image_meta[0],
      alt: ""
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "date"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "title"
    }, "25"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "JUN"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "article-content pl-25 pr-25 pt-25"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, excerptRendered), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.link
    }, "Leer m\xE1s"))));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./posts/block.json":
/*!**************************!*\
  !*** ./posts/block.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"en-contraste-plugin/news","title":"Posts recientes","category":"widgets","icon":"list-view","description":"Mostrar últimos posts","keywords":["posts","entradas","noticias","en contraste"],"version":"1.0.0","textdomain":"en-contraste-plugin","attributes":{"title":{"type":"string","selector":"h2"},"category":{"type":"string"},"per_page":{"type":"integer"}},"editorScript":"file:./build/index.js"}');

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
/*!****************************!*\
  !*** ./posts/src/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block.json */ "./posts/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./posts/src/edit.js");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map