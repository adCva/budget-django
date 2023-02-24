/*! For license information please see src_Components_EditForm_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_Components_EditForm_js"],{"./src/Components/EditForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _Redux_expenditureSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Redux/expenditureSlice */ "./src/Redux/expenditureSlice.js");\n/* harmony import */ var _Redux_editSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Redux/editSlice */ "./src/Redux/editSlice.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n\n// Redux\n\n\n\n\n\nfunction EditForm() {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  const editItemData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.edit.editExp);\n  const isEditStarted = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.edit.editFormOpened);\n\n  // ================== Local state.\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [spent, setSpent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n\n  // ================== Handle form submit.\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log(name);\n    console.log(editItemData.name);\n    let updatedEl = {\n      id: editItemData.id,\n      name: name,\n      desc: desc,\n      spent: spent,\n      type: type,\n      created_at: editItemData.created_at\n    };\n    const url = `127.0.0.1:8000/api/edit/${editItemData.id}`;\n    axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(url).then(response => dispatch((0,_Redux_expenditureSlice__WEBPACK_IMPORTED_MODULE_2__.createData)({\n      newElement: response.data\n    }))).catch(error => console.log(error));\n    dispatch((0,_Redux_expenditureSlice__WEBPACK_IMPORTED_MODULE_2__.updateData)({\n      updatedElelemnt: updatedEl\n    }));\n    dispatch((0,_Redux_editSlice__WEBPACK_IMPORTED_MODULE_3__.closeEdit)());\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setName(editItemData.name);\n    setDesc(editItemData.desc);\n    setSpent(editItemData.spent);\n    setType(editItemData.type);\n  }, [isEditStarted]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: isEditStarted ? "form-wrapper" : "form-wrapper form-wrapper-show"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n    onSubmit: handleSubmit,\n    className: "form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    onChange: e => setName(e.target.value),\n    defaultValue: name\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {\n    onChange: e => setDesc(e.target.value),\n    defaultValue: desc\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Total spent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "number",\n    onChange: e => setSpent(e.target.value),\n    defaultValue: spent\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "form-group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Expenditure type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {\n    onChange: e => setType(e.target.value),\n    value: type\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "HM"\n  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "BL"\n  }, "Bill"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "FD"\n  }, "Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "TR"\n  }, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    value: "MC"\n  }, "Miscellaneous"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    type: "submit",\n    className: "update-btn"\n  }, "Update")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    onClick: () => dispatch((0,_Redux_editSlice__WEBPACK_IMPORTED_MODULE_3__.closeEdit)()),\n    className: "close-form"\n  }, "Close form")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditForm);\n\n//# sourceURL=webpack://frontend/./src/Components/EditForm.js?')}}]);