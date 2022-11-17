(window.webpackJsonp=window.webpackJsonp||[]).push([[39,25],{628:function(e,t,r){"use strict";var n=r(25),o=(r(11),r(28),r(53),r(69),[function(e){return e&&Object.keys(e).length&&e.constructor===Object||"This is field is required"}]),l=[function(e){return"object"===Object(n.a)(e)||"This field must be a reference from the list"}];t.a={standardRules:[function(e){return!!e||"This field is required"}],emptyObjectFieldRule:o,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],emailFormatRule:[function(e){return null===e||""===e||(/.+@.+\..+/.test(e)||"E-mail must be valid")}],max10Char:[function(e){return e.length<=10||"Input too long!"}],max150Char:[function(e){return e.length<150||"Input too long!"}],mobileChar:[function(e){return 10===e.length&&!e.includes("-")||12===e.length||"Invalid mobile format"}],fieldArrayRule:[function(e){return 0!==e.length||"This field is required"}],fieldArraySingleRule:[function(e){return 0!==e.length||"This field is required"},function(e){return!(e.length>1)||"You must choose only 1 role"}],notObjectFieldRule:l}},638:function(e,t,r){"use strict";var n=r(3),o=(r(53),r(69),r(182),r(7),r(5),r(13),r(75),r(181),r(11),r(9),r(15),r(16),r(12)),l=r(101),c=r(147);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},667:function(e,t,r){"use strict";r.r(t);var n=r(606),o=r(623),l=r(638),c=r(622),d=r(674),f=r(635),m=(r(11),r(9),r(7),r(5),r(15),r(13),r(16),r(18)),v=r(3),h=(r(76),r(628));function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={data:function(){return y(y({isLoaded:!1,register:{firstname:"",lastname:"",gender:"",email:"",confirm_email:"",mobile_number:"",birthdate:"",address:"",province:"",city:"",barangay:"",password:"",confirm_password:""}},h.a),{},{isValid:!1})},methods:{submitHandler:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoaded=!0,e.$refs.form.validate(),e.isValid){t.next=4;break}return t.abrupt("return");case 4:return console.log(e.register),t.prev=5,t.next=8,e.$store.dispatch("users/addUser",e.register);case 8:alert("Successful !"),location="/login",t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),alert(t.t0);case 15:e.isLoaded=!1;case 16:case"end":return t.stop()}}),t,null,[[5,12]])})))()}}},w=r(99),component=Object(w.a)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-10"},[t(l.a,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}},model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[t("div",{staticClass:"py-10",attrs:{align:"start"}},[t("div",{staticClass:"py-10 secondary--text text-h4",attrs:{align:"center"}},[e._v("\n        CREATE AN ACCOUNT\n      ")]),e._v(" "),t("div",[t(c.a,[t(o.a,[e._v("\n            Firstname\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.firstname,callback:function(t){e.$set(e.register,"firstname",t)},expression:"register.firstname"}})],1),e._v(" "),t(o.a,[e._v("\n            Lastname\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.lastname,callback:function(t){e.$set(e.register,"lastname",t)},expression:"register.lastname"}})],1),e._v(" "),t(o.a,[e._v("\n            Gender\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.gender,callback:function(t){e.$set(e.register,"gender",t)},expression:"register.gender"}})],1)],1)],1),e._v(" "),t("div",[t(c.a,[t(o.a,[e._v("\n            Email Address\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1),e._v(" "),t(o.a,[e._v("\n            Confirm Email Address\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.confirm_email,callback:function(t){e.$set(e.register,"confirm_email",t)},expression:"register.confirm_email"}})],1)],1)],1),e._v(" "),t("div",[t(c.a,[t(o.a,[e._v("\n            Mobile Number\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.mobile_number,callback:function(t){e.$set(e.register,"mobile_number",t)},expression:"register.mobile_number"}})],1),e._v(" "),t(o.a,[e._v("\n            Birthdate\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.birthdate,callback:function(t){e.$set(e.register,"birthdate",t)},expression:"register.birthdate"}})],1)],1)],1),e._v(" "),t("div",[t(c.a,[t(o.a,[e._v("\n            Address\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.address,callback:function(t){e.$set(e.register,"address",t)},expression:"register.address"}})],1)],1)],1),e._v(" "),t("div",[t(c.a,[t(o.a,[e._v("\n            Select Province\n            "),t(d.a,{attrs:{outlined:"",items:e.$provinces(),"item-text":"name","item-value":"name",rules:e.standardRules},model:{value:e.register.province,callback:function(t){e.$set(e.register,"province",t)},expression:"register.province"}})],1),e._v(" "),t(o.a,[e._v("\n            Select City\n            "),t(d.a,{attrs:{outlined:"",items:e.$cities(e.register.province),rules:e.standardRules,"item-text":"name","item-value":"name"},model:{value:e.register.city,callback:function(t){e.$set(e.register,"city",t)},expression:"register.city"}})],1),e._v(" "),t(o.a,[e._v("\n            Select Barangay\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.register.barangay,callback:function(t){e.$set(e.register,"barangay",t)},expression:"register.barangay"}})],1)],1)],1),e._v(" "),t("div",[t(c.a,[t(o.a,[e._v("\n            Password\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules,type:"password"},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),e._v(" "),t(o.a,[e._v("\n            Confirm Password\n            "),t(f.a,{attrs:{outlined:"",type:"password",rules:e.standardRules},model:{value:e.register.confirm_password,callback:function(t){e.$set(e.register,"confirm_password",t)},expression:"register.confirm_password"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"px-10 pointer",attrs:{align:"center"}},[t(n.a,{attrs:{width:"200",dark:"",depressed:"",color:"grey"}},[e._v(" Cancel ")]),e._v(" "),t(n.a,{attrs:{width:"200",loading:e.isLoaded,dark:"",depressed:"",color:"secondary",type:"submit"}},[e._v("\n          Submit\n        ")])],1)])])],1)}),[],!1,null,null,null);t.default=component.exports},752:function(e,t,r){"use strict";r.r(t);var n={head:function(){return{title:"Register"}},components:{RegistrationForm:r(667).default}},o=r(99),component=Object(o.a)(n,(function(){var e=this._self._c;return e("div",[e("registration-form")],1)}),[],!1,null,null,null);t.default=component.exports}}]);