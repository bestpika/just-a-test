parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"qt80":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={name:"Input",data:function(){return{input4:dayjs().format("YYYY-MM-DDTHH:mm")}},mounted:function(){this.kbInit()},beforeDestroy:function(){this.kbDele()}};exports.default=t;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"container py-5"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("label",[t._v("輸入4")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input4,expression:"input4"}],staticClass:"form-control kb-3-0",attrs:{type:"datetime-local"},domProps:{value:t.input4},on:{input:function(s){s.target.composing||(t.input4=s.target.value)}}})])]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm"},[s("label",[this._v("輸入1")]),this._v(" "),s("input",{staticClass:"form-control kb-0-0",attrs:{type:"text"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm"},[s("label",[this._v("輸入2")]),this._v(" "),s("input",{staticClass:"form-control kb-1-0",attrs:{type:"text"}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("label",[t._v("輸入3")]),t._v(" "),e("select",{staticClass:"form-control kb-2-0"},[e("option"),t._v(" "),e("option",[t._v("Human")]),t._v(" "),e("option",[t._v("Cat")]),t._v(" "),e("option",[t._v("Dog")]),t._v(" "),e("option",[t._v("Coffee")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm"},[s("label",[this._v("輸入5")]),this._v(" "),s("input",{staticClass:"form-control kb-4-0",attrs:{type:"text"}})])])}],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}]},{},["qt80"], null)
//# sourceMappingURL=Input.af1b161a.map