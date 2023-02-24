/*! For license information please see src_Components_CreateForm_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_Components_CreateForm_js"],{"./src/Components/CreateForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _Redux_expenditureSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Redux/expenditureSlice */ "./src/Redux/expenditureSlice.js");\n/* harmony import */ var _Redux_globalVarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/globalVarSlice */ "./src/Redux/globalVarSlice.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n\n// Redux\n\n\n\n\nfunction Form() {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n\n  // ================== Redux state.\n  const isAddStarted = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.globalVar.addFormOpened);\n  const lastElementInState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.expenditures.expData); // Get the id of the last element and add 1, used for when creating a new element.\n\n  // ================== Local state.\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [spent, setSpent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n\n  // ================== Handle form submit.\n  const handleSubmit = async e => {\n    e.preventDefault();\n    const date = new Date();\n    let objectData = {\n      name: name,\n      desc: desc,\n      spent: spent,\n      type: type,\n      created_at: `${date.getFullYear()}-${date.getDate()}-${date.getDay()}`\n    };\n    const url = "http://127.0.0.1:8000/api/exp-create/";\n    try {\n      const postRequest = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(url, objectData).then(response => {\n        dispatch((0,_Redux_expenditureSlice__WEBPACK_IMPORTED_MODULE_2__.createData)({\n          newElement: response.data\n        }));\n        dispatch((0,_Redux_globalVarSlice__WEBPACK_IMPORTED_MODULE_3__.closeAddItemForm)());\n      });\n      console.log("Resault: ", postRequest.data.id);\n    } catch (error) {\n      console.log(error);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: isAddStarted ? "form-wrapper" : "form-wrapper form-wrapper-show"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n    onSubmit: handleSubmit,\n    className: "form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    onChange: e => setName(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {\n    onChange: e => setDesc(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Total spent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "number",\n    onChange: e => setSpent(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Expenditure type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    onChange: e => setType(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "HM"\n  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "BL"\n  }, "Bill"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "FD"\n  }, "Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "TR"\n  }, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "MC"\n  }, "Miscellaneous"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    type: "submit",\n    className: "submit-btn"\n  }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    onClick: () => dispatch((0,_Redux_globalVarSlice__WEBPACK_IMPORTED_MODULE_3__.closeAddItemForm)()),\n    className: "close-form"\n  }, "Close")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://frontend/./src/Components/CreateForm.js?')}}]);