(window.webpackJsonp=window.webpackJsonp||[]).push([[31,12],{628:function(e,t,n){"use strict";var r=n(25),c=(n(11),n(28),n(53),n(69),[function(e){return e&&Object.keys(e).length&&e.constructor===Object||"This is field is required"}]),o=[function(e){return"object"===Object(r.a)(e)||"This field must be a reference from the list"}];t.a={standardRules:[function(e){return!!e||"This field is required"}],emptyObjectFieldRule:c,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],emailFormatRule:[function(e){return null===e||""===e||(/.+@.+\..+/.test(e)||"E-mail must be valid")}],max10Char:[function(e){return e.length<=10||"Input too long!"}],max150Char:[function(e){return e.length<150||"Input too long!"}],mobileChar:[function(e){return 10===e.length&&!e.includes("-")||12===e.length||"Invalid mobile format"}],fieldArrayRule:[function(e){return 0!==e.length||"This field is required"}],fieldArraySingleRule:[function(e){return 0!==e.length||"This field is required"},function(e){return!(e.length>1)||"You must choose only 1 role"}],notObjectFieldRule:o}},670:function(e,t,n){"use strict";n.r(t);var r=n(606),c=n(623),o=n(638),l=n(622),d=n(674),f=n(635),m=(n(11),n(9),n(7),n(5),n(15),n(13),n(16),n(18)),v=n(3),h=(n(76),n(628));function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=n(663),x={data:function(){return y(y({account:{firstname:"",lastname:"",gender:"",email:"",confirm_email:"",mobile_number:"",birthdate:"",address:"",province:"Metro Manila",city:"",barangay:"",password:"",confirm_password:""},philippines:""},h.a),{},{isValid:!1})},created:function(){this.account=O(this.$auth.user)},methods:{getProvince:function(){return[]},submitHandler:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1,e.$refs.form.validate()){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.$store.dispatch("users/editUser",e.account);case 6:alert("Successfully Updated !"),location="/client/profile";case 8:case"end":return t.stop()}}),t)})))()}}},j=n(99),component=Object(j.a)(x,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-10"},[t("div"),e._v(" "),t(o.a,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}},model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[t("div",{staticClass:"py-10",attrs:{align:"start"}},[t("div",{staticClass:"py-10 secondary--text text-h4",attrs:{align:"center"}},[e._v("\n        Edit Profile\n      ")]),e._v(" "),t("div",[t(l.a,[t(c.a,[e._v("\n            Firstname\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.firstname,callback:function(t){e.$set(e.account,"firstname",t)},expression:"account.firstname"}})],1),e._v(" "),t(c.a,[e._v("\n            Lastname\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.lastname,callback:function(t){e.$set(e.account,"lastname",t)},expression:"account.lastname"}})],1),e._v(" "),t(c.a,[e._v("\n            Gender\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.gender,callback:function(t){e.$set(e.account,"gender",t)},expression:"account.gender"}})],1)],1)],1),e._v(" "),t("div",[t(l.a,[t(c.a,[e._v("\n            Email Address\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.email,callback:function(t){e.$set(e.account,"email",t)},expression:"account.email"}})],1)],1)],1),e._v(" "),t("div",[t(l.a,[t(c.a,[e._v("\n            Mobile Number\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.mobile_number,callback:function(t){e.$set(e.account,"mobile_number",t)},expression:"account.mobile_number"}})],1),e._v(" "),t(c.a,[e._v("\n            Birthdate\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.birthdate,callback:function(t){e.$set(e.account,"birthdate",t)},expression:"account.birthdate"}})],1)],1)],1),e._v(" "),t("div",[t(l.a,[t(c.a,[e._v("\n            Address\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.address,callback:function(t){e.$set(e.account,"address",t)},expression:"account.address"}})],1)],1)],1),e._v(" "),t("div",[t(l.a,[t(c.a,[e._v("\n            Select Province\n            "),t(d.a,{attrs:{outlined:"",items:e.$provinces(),"item-text":"name","item-value":"name",rules:e.standardRules},model:{value:e.account.province,callback:function(t){e.$set(e.account,"province",t)},expression:"account.province"}})],1),e._v(" "),t(c.a,[e._v("\n            Select City\n            "),t(d.a,{attrs:{outlined:"",items:e.$cities(e.account.province),rules:e.standardRules,"item-text":"name","item-value":"name"},model:{value:e.account.city,callback:function(t){e.$set(e.account,"city",t)},expression:"account.city"}})],1),e._v(" "),t(c.a,[e._v("\n            Select Barangay\n            "),t(f.a,{attrs:{outlined:"",rules:e.standardRules},model:{value:e.account.barangay,callback:function(t){e.$set(e.account,"barangay",t)},expression:"account.barangay"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"px-10 pointer",attrs:{align:"center"}},[t(r.a,{attrs:{width:"200",dark:"",depressed:"",color:"grey"},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" Cancel ")]),e._v(" "),t(r.a,{attrs:{width:"200",dark:"",depressed:"",color:"secondary",type:"submit"}},[e._v("\n          Submit\n        ")])],1)])])],1)}),[],!1,null,null,null);t.default=component.exports},758:function(e,t,n){"use strict";n.r(t);var r={head:function(){return{title:"Edit Profile"}},components:{EditForm:n(670).default}},c=n(99),component=Object(c.a)(r,(function(){var e=this._self._c;return e("div",[e("edit-form")],1)}),[],!1,null,null,null);t.default=component.exports}}]);