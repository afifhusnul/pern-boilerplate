/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo",{

/***/ "./pages/todo.js":
/*!***********************!*\
  !*** ./pages/todo.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ todo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_msa_www_express_nextjs_pg_boilerplate_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_msa_www_express_nextjs_pg_boilerplate_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_msa_www_express_nextjs_pg_boilerplate_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_msa_www_express_nextjs_pg_boilerplate_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_utils_Service_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/utils/Service.js */ \"./components/utils/Service.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var _components_utils_Paginations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utils/Paginations */ \"./components/utils/Paginations.js\");\n/* harmony import */ var _components_hooks_useContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hooks/useContext.js */ \"./components/hooks/useContext.js\");\n/* harmony import */ var _components_forms_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/forms/Modal */ \"./components/forms/Modal.js\");\n/* harmony import */ var _components_hooks_useCustomForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/hooks/useCustomForm */ \"./components/hooks/useCustomForm.js\");\n/* harmony import */ var _components_hooks_InputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/hooks/InputField */ \"./components/hooks/InputField.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/msa/www/express-nextjs/pg-boilerplate/client/pages/todo.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction todo(_ref) {\n  _s();\n\n  var _this = this;\n\n  var todos = _ref.todos;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_hooks_useContext_js__WEBPACK_IMPORTED_MODULE_9__.UserContext),\n      user = _useContext.user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),\n      currentPage = _useState4[0],\n      setCurrentPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10),\n      postsPerPage = _useState5[0]; //Get current posts\n\n\n  var indexOfLastPost = currentPage * postsPerPage;\n  var indexOfFirstPost = indexOfLastPost - postsPerPage;\n  var currentData = data.slice(indexOfFirstPost, indexOfLastPost);\n  var howManyPages = Math.ceil(data.length / postsPerPage);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = (0,_home_msa_www_express_nextjs_pg_boilerplate_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_msa_www_express_nextjs_pg_boilerplate_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var result;\n        return _home_msa_www_express_nextjs_pg_boilerplate_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return _components_utils_Service_js__WEBPACK_IMPORTED_MODULE_6__.default.get('/todo');\n\n              case 3:\n                result = _context.sent;\n                //get All Todos current user\n                setData(result.data.response);\n                _context.next = 11;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                _context.next = 11;\n                return router.push('/login');\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  var rows = currentData.map(function (single) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: single.todo_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: single.todo_desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: single.created_at.substring(0, 10)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        className: \"btn\",\n        children: [\"Edit \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_13__.FcReading, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 32\n        }, _this), \"   Delete \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_13__.FcEmptyTrash, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 61\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, _this)]\n    }, single.idtodo, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.default, {\n    title: \"Todo List\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container-fluid mt-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn\",\n            onClick: function onClick() {\n              return setShowModal(true);\n            },\n            children: \"Add Data\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_Modal__WEBPACK_IMPORTED_MODULE_10__.default, {\n            onClose: function onClose() {\n              return setShowModal(false);\n            },\n            show: showModal,\n            children: \"Form ok\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_Paginations__WEBPACK_IMPORTED_MODULE_8__.default, {\n            pages: howManyPages,\n            setCurrentPage: setCurrentPage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center mt-2\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n          className: \"table-striped table-bordered table-hover table-sm rounded mt-2\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n            className: \"table-light\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Title\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Desc\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"CreatedAt\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Operation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n            children: rows\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n}\n\n_s(todo, \"tUQhxWrV2DVmT4se/h8I1Uhco0o=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby5qcz82ZjNiIl0sIm5hbWVzIjpbInRvZG8iLCJ0b2RvcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZXIiLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwb3N0c1BlclBhZ2UiLCJpbmRleE9mTGFzdFBvc3QiLCJpbmRleE9mRmlyc3RQb3N0IiwiY3VycmVudERhdGEiLCJzbGljZSIsImhvd01hbnlQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiQXBpIiwicmVzdWx0IiwicmVzcG9uc2UiLCJwdXNoIiwicm93cyIsIm1hcCIsInNpbmdsZSIsInRvZG9fdGl0bGUiLCJ0b2RvX2Rlc2MiLCJjcmVhdGVkX2F0Iiwic3Vic3RyaW5nIiwiaWR0b2RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxPQUF1QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUVwQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUZvQyxvQkFHbkJDLGlEQUFVLENBQUNDLHdFQUFELENBSFM7QUFBQSxNQUc1QkMsSUFINEIsZUFHNUJBLElBSDRCOztBQUFBLGtCQUlGQywrQ0FBUSxDQUFDLEtBQUQsQ0FKTjtBQUFBLE1BSTdCQyxTQUo2QjtBQUFBLE1BSWxCQyxZQUprQjs7QUFBQSxtQkFLWkYsK0NBQVEsQ0FBQyxFQUFELENBTEk7QUFBQSxNQUs3QkcsSUFMNkI7QUFBQSxNQUt2QkMs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QSxpQ0FDRSw4REFBQyxrRUFBRDtBQUFhLGlCQUFLLEVBQUdhLFlBQXJCO0FBQW1DLDBCQUFjLEVBQUVOO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZUU7QUFBSyxpQkFBUyxFQUFDLG9DQUFmO0FBQUEsK0JBQ0U7QUFBTyxtQkFBUyxFQUFDLGdFQUFqQjtBQUFBLGtDQUNFO0FBQU8scUJBQVMsRUFBQyxhQUFqQjtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVNFO0FBQUEsc0JBQ0dnQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9DRDs7R0EvRXVCL0IsSTtVQUVQRyxrRCIsImZpbGUiOiIuL3BhZ2VzL3RvZG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgKiBhcyBJY29uQlMgZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XHJcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbHMvU2VydmljZS5qcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnXHJcbmltcG9ydCBQYWdpbmF0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxzL1BhZ2luYXRpb25zJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL2hvb2tzL3VzZUNvbnRleHQuanMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9mb3Jtcy9Nb2RhbCdcclxuXHJcbmltcG9ydCB7Rm9ybSwgQnV0dG9uLCBUb2FzdCwgVGFibGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHVzZUN1c3RvbUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9ob29rcy91c2VDdXN0b21Gb3JtJztcclxuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9va3MvSW5wdXRGaWVsZFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG8oe3RvZG9zfSkge1xyXG4gIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW3Bvc3RzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMClcclxuXHJcbiAgLy9HZXQgY3VycmVudCBwb3N0c1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0UG9zdCA9IGN1cnJlbnRQYWdlICogcG9zdHNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdFBvc3QgPSBpbmRleE9mTGFzdFBvc3QgLSBwb3N0c1BlclBhZ2U7XHJcbiAgY29uc3QgY3VycmVudERhdGEgPSBkYXRhLnNsaWNlKGluZGV4T2ZGaXJzdFBvc3QsIGluZGV4T2ZMYXN0UG9zdClcclxuICBjb25zdCBob3dNYW55UGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGgvcG9zdHNQZXJQYWdlKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgICAgXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7ICAgICAgICBcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IGF3YWl0IEFwaS5wb3N0KCcvdG9kbycsIHt1c2VySWQgOiB1c2VyLl9pZH0pIC8vZ2V0IEFsbCBUb2RvcyBjdXJyZW50IHVzZXJcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBcGkuZ2V0KCcvdG9kbycpIC8vZ2V0IEFsbCBUb2RvcyBjdXJyZW50IHVzZXJcclxuICAgICAgICBzZXREYXRhKHJlc3VsdC5kYXRhLnJlc3BvbnNlKVxyXG4gICAgICB9IGNhdGNoKGUpIHsgICAgICAgIFxyXG4gICAgICAgIC8vIE5vdCBhdXRob3JpemVkIGZvcmNlIHRvIGxvZ2luXHJcbiAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LFtdKVxyXG4gIFxyXG4gIFxyXG5cclxuICBjb25zdCByb3dzID0gY3VycmVudERhdGEubWFwKChzaW5nbGUpID0+ICggICAgIFxyXG4gICAgPHRyIGtleT17c2luZ2xlLmlkdG9kb30+XHJcbiAgICAgIDx0ZD57c2luZ2xlLnRvZG9fdGl0bGV9PC90ZD5cclxuICAgICAgPHRkPntzaW5nbGUudG9kb19kZXNjfTwvdGQ+XHJcbiAgICAgIDx0ZD57c2luZ2xlLmNyZWF0ZWRfYXQuc3Vic3RyaW5nKDAsMTApfTwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJidG5cIj5FZGl0IDxJY29uQlMuRmNSZWFkaW5nLz4gICBEZWxldGUgPEljb25CUy5GY0VtcHR5VHJhc2ggLz48L3RkPlxyXG4gICAgPC90cj5cclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIlRvZG8gTGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC00XCIgPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX0+QWRkIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICBzaG93PXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBGb3JtIG9rXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb25zIHBhZ2VzID17aG93TWFueVBhZ2VzfSBzZXRDdXJyZW50UGFnZT17c2V0Q3VycmVudFBhZ2V9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLXNtIHJvdW5kZWQgbXQtMlwiPlxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGFibGUtbGlnaHRcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRlc2M8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNyZWF0ZWRBdDwvdGg+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0aD5PcGVyYXRpb248L3RoPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7cm93c31cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo.js\n");

/***/ })

});