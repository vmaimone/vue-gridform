!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.VueGridform=r():t.VueGridform=r()}(this,function(){return function(t){function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var e={};return r.m=t,r.c=e,r.p="/dist/",r(0)}([function(t,r,e){"use strict";t.exports=t.exports["default"]=e(63)},function(t,r){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,r,e){var n=e(24)("wks"),a=e(26),o=e(1).Symbol,i="function"==typeof o,d=t.exports=function(t){return n[t]||(n[t]=i&&o[t]||(i?o:a)("Symbol."+t))};d.store=n},function(t,r){var e=t.exports={version:"2.3.0"};"number"==typeof __e&&(__e=e)},function(t,r,e){var n=e(12),a=e(22);t.exports=e(6)?function(t,r,e){return n.f(t,r,a(1,e))}:function(t,r,e){return t[r]=e,t}},function(t,r,e){var n=e(11);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,r,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,r){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},function(t,r){t.exports={}},function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,r){t.exports=function(t){try{return!!t()}catch(r){return!0}}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,e){var n=e(5),a=e(39),o=e(53),i=Object.defineProperty;r.f=e(6)?Object.defineProperty:function(t,r,e){if(n(t),r=o(r,!0),n(e),a)try{return i(t,r,e)}catch(d){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[r]=e.value),t}},function(t,r,e){var n=e(24)("keys"),a=e(26);t.exports=function(t){return n[t]||(n[t]=a(t))}},function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,r,e){var n=e(40),a=e(9);t.exports=function(t){return n(a(t))}},function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,r,e){var n=e(11),a=e(1).document,o=n(a)&&n(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},function(t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,r,e){var n=e(1),a=e(3),o=e(37),i=e(4),d="prototype",f=function(t,r,e){var s,p,l,u=t&f.F,c=t&f.G,m=t&f.S,h=t&f.P,g=t&f.B,w=t&f.W,v=c?a:a[r]||(a[r]={}),y=v[d],x=c?n:m?n[r]:(n[r]||{})[d];c&&(e=r);for(s in e)p=!u&&x&&void 0!==x[s],p&&s in v||(l=p?x[s]:e[s],v[s]=c&&"function"!=typeof x[s]?e[s]:g&&p?o(l,n):w&&x[s]==l?function(t){var r=function(r,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,e)}return new t(r,e,n)}return t.apply(this,arguments)};return r[d]=t[d],r}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((v.virtual||(v.virtual={}))[s]=l,t&f.R&&y&&!y[s]&&i(y,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,r,e){"use strict";var n=e(43),a=e(19),o=e(49),i=e(4),d=e(7),f=e(8),s=e(41),p=e(23),l=e(46),u=e(2)("iterator"),c=!([].keys&&"next"in[].keys()),m="@@iterator",h="keys",g="values",w=function(){return this};t.exports=function(t,r,e,v,y,x,b){s(e,r,v);var k,S,_,O=function(t){if(!c&&t in A)return A[t];switch(t){case h:return function(){return new e(this,t)};case g:return function(){return new e(this,t)}}return function(){return new e(this,t)}},j=r+" Iterator",M=y==g,C=!1,A=t.prototype,F=A[u]||A[m]||y&&A[y],T=F||O(y),E=y?M?O("entries"):T:void 0,P="Array"==r?A.entries||F:F;if(P&&(_=l(P.call(new t)),_!==Object.prototype&&(p(_,j,!0),n||d(_,u)||i(_,u,w))),M&&F&&F.name!==g&&(C=!0,T=function(){return F.call(this)}),n&&!b||!c&&!C&&A[u]||i(A,u,T),f[r]=T,f[j]=w,y)if(k={values:M?T:O(g),keys:x?T:O(h),entries:E},b)for(S in k)S in A||o(A,S,k[S]);else a(a.P+a.F*(c||C),r,k);return k}},function(t,r,e){var n=e(47),a=e(18);t.exports=Object.keys||function(t){return n(t,a)}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,e){var n=e(12).f,a=e(7),o=e(2)("toStringTag");t.exports=function(t,r,e){t&&!a(t=e?t:t.prototype,o)&&n(t,o,{configurable:!0,value:r})}},function(t,r,e){var n=e(1),a="__core-js_shared__",o=n[a]||(n[a]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,r,e){var n=e(9);t.exports=function(t){return Object(n(t))}},function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=r.fieldContainer={props:{value:null,type:String,label:String,key:String,cols:Number,options:Array},methods:{setFocus:function(){var t=this.$els.formField;this.$el.classList.add("focus"),t.classList.add("focus"),t.focus(),"select"!==this.type&&t.select()},removeFocus:function(){this.$els.formField.classList.remove("focus"),this.$el.classList.remove("focus")}},template:'\n    <div @click.stop="setFocus" class="grid-form-field-container" data-field-span={{cols}}>\n      <label class="grid-form-field-label" v-text="label"></label>\n      <div v-if="type === \'select\'">\n        <select v-el:form-field\n          v-model="value"\n          @focus="setFocus"\n          @blur="removeFocus">\n          <option v-for="opt in options" :value="opt" v-text="opt"></option>\n        </select>\n      </div>\n      <div v-else>\n        <input v-el:form-field\n          v-model="value"\n          @blur="removeFocus"\n          @focus="setFocus"\n          type="{{type || \'text\'}}"\n        />\n      </div>\n    </div>'},n=r.fieldRow={components:{fieldContainer:e},props:{cols:Number,fields:Array},computed:{fieldContainers:function(){return this.$refs.fieldContainer}},template:'\n    <div class="grid-form-field-row" data-row-span={{cols}}>\n      <field-container\n        v-ref:field-container\n        v-for="field in fields"\n        :label="field.label"\n        :cols="field.span"\n        :key="field.key"\n        :type="field.type"\n        :options="field.options || null"\n        :value="field.value">\n      </field-container>\n    </div>'};r.fieldSet={components:{fieldRow:n},props:{legend:String,rows:Array},computed:{fieldRows:function(){return this.$refs.fieldRows},lecontainers:function(){return this.fieldRows.map(function(t){return t.$refs.fieldContainer})}},template:'\n    <fieldset class="grid-form-fieldset">\n      <legend v-text="legend"></legend>\n      <field-row\n        v-for="row in rows"\n        v-ref:field-rows\n        :fields="row.fields"\n        :cols="row.span">\n      </field-row>\n    </fieldset>\n\n  '}},function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(r,"__esModule",{value:!0});var a=e(29),o=n(a),i=e(30),d=n(i),f=e(27);r["default"]={components:{fieldSet:f.fieldSet},props:{header:String,sections:{type:Object,required:!0,"default":function(){return{}}}},computed:{formData:function(){return this.formValues.reduce(function(t,r){var e=r.key,n=r.value;t[e]||(t[e]=n);return t},{})},nestedFormData:function(){return this.formValues.reduce(function(t,r){var e=r.section,n=r.key,a=r.value,o=t[e]||(t[e]={});return o[n]||(o[n]=a),t},{})},formValues:function(){var t=this;return(0,d["default"])(this.$refs.fieldSets).reduce(function(r,e){var n=t.$refs.fieldSets,a=n[e].fieldRows,i=!0,d=!1,f=void 0;try{for(var s,p=(0,o["default"])(a);!(i=(s=p.next()).done);i=!0){var l=s.value.fieldContainers,u=!0,c=!1,m=void 0;try{for(var h,g=(0,o["default"])(l);!(u=(h=g.next()).done);u=!0){var w=h.value,v=w.key,y=w.value,x=w.type;y=y||null,y&&"number"==x&&(y=+y),"string"==typeof y&&"date"==x&&(y=new Date(y)),r.push({section:e,key:v,value:y})}}catch(b){c=!0,m=b}finally{try{!u&&g["return"]&&g["return"]()}finally{if(c)throw m}}}}catch(b){d=!0,f=b}finally{try{!i&&p["return"]&&p["return"]()}finally{if(d)throw f}}return r},[])}}}},function(t,r,e){t.exports={"default":e(31),__esModule:!0}},function(t,r,e){t.exports={"default":e(32),__esModule:!0}},function(t,r,e){e(59),e(58),t.exports=e(55)},function(t,r,e){e(57),t.exports=e(3).Object.keys},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,r){t.exports=function(){}},function(t,r,e){var n=e(15),a=e(52),o=e(51);t.exports=function(t){return function(r,e,i){var d,f=n(r),s=a(f.length),p=o(i,s);if(t&&e!=e){for(;s>p;)if(d=f[p++],d!=d)return!0}else for(;s>p;p++)if((t||p in f)&&f[p]===e)return t||p||0;return!t&&-1}}},function(t,r,e){var n=e(16),a=e(2)("toStringTag"),o="Arguments"==n(function(){return arguments}()),i=function(t,r){try{return t[r]}catch(e){}};t.exports=function(t){var r,e,d;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=i(r=Object(t),a))?e:o?n(r):"Object"==(d=n(r))&&"function"==typeof r.callee?"Arguments":d}},function(t,r,e){var n=e(33);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,a){return t.call(r,e,n,a)}}return function(){return t.apply(r,arguments)}}},function(t,r,e){t.exports=e(1).document&&document.documentElement},function(t,r,e){t.exports=!e(6)&&!e(10)(function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a})},function(t,r,e){var n=e(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,r,e){"use strict";var n=e(44),a=e(22),o=e(23),i={};e(4)(i,e(2)("iterator"),function(){return this}),t.exports=function(t,r,e){t.prototype=n(i,{next:a(1,e)}),o(t,r+" Iterator")}},function(t,r){t.exports=function(t,r){return{value:r,done:!!t}}},function(t,r){t.exports=!0},function(t,r,e){var n=e(5),a=e(45),o=e(18),i=e(13)("IE_PROTO"),d=function(){},f="prototype",s=function(){var t,r=e(17)("iframe"),n=o.length,a=">";for(r.style.display="none",e(38).appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+a),t.close(),s=t.F;n--;)delete s[f][o[n]];return s()};t.exports=Object.create||function(t,r){var e;return null!==t?(d[f]=n(t),e=new d,d[f]=null,e[i]=t):e=s(),void 0===r?e:a(e,r)}},function(t,r,e){var n=e(12),a=e(5),o=e(21);t.exports=e(6)?Object.defineProperties:function(t,r){a(t);for(var e,i=o(r),d=i.length,f=0;d>f;)n.f(t,e=i[f++],r[e]);return t}},function(t,r,e){var n=e(7),a=e(25),o=e(13)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,r,e){var n=e(7),a=e(15),o=e(35)(!1),i=e(13)("IE_PROTO");t.exports=function(t,r){var e,d=a(t),f=0,s=[];for(e in d)e!=i&&n(d,e)&&s.push(e);for(;r.length>f;)n(d,e=r[f++])&&(~o(s,e)||s.push(e));return s}},function(t,r,e){var n=e(19),a=e(3),o=e(10);t.exports=function(t,r){var e=(a.Object||{})[t]||Object[t],i={};i[t]=r(e),n(n.S+n.F*o(function(){e(1)}),"Object",i)}},function(t,r,e){t.exports=e(4)},function(t,r,e){var n=e(14),a=e(9);t.exports=function(t){return function(r,e){var o,i,d=String(a(r)),f=n(e),s=d.length;return 0>f||f>=s?t?"":void 0:(o=d.charCodeAt(f),55296>o||o>56319||f+1===s||(i=d.charCodeAt(f+1))<56320||i>57343?t?d.charAt(f):o:t?d.slice(f,f+2):(o-55296<<10)+(i-56320)+65536)}}},function(t,r,e){var n=e(14),a=Math.max,o=Math.min;t.exports=function(t,r){return t=n(t),0>t?a(t+r,0):o(t,r)}},function(t,r,e){var n=e(14),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},function(t,r,e){var n=e(11);t.exports=function(t,r){if(!n(t))return t;var e,a;if(r&&"function"==typeof(e=t.toString)&&!n(a=e.call(t)))return a;if("function"==typeof(e=t.valueOf)&&!n(a=e.call(t)))return a;if(!r&&"function"==typeof(e=t.toString)&&!n(a=e.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,r,e){var n=e(36),a=e(2)("iterator"),o=e(8);t.exports=e(3).getIteratorMethod=function(t){return void 0!=t?t[a]||t["@@iterator"]||o[n(t)]:void 0}},function(t,r,e){var n=e(5),a=e(54);t.exports=e(3).getIterator=function(t){var r=a(t);if("function"!=typeof r)throw TypeError(t+" is not iterable!");return n(r.call(t))}},function(t,r,e){"use strict";var n=e(34),a=e(42),o=e(8),i=e(15);t.exports=e(20)(Array,"Array",function(t,r){this._t=i(t),this._i=0,this._k=r},function(){var t=this._t,r=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,a(1)):"keys"==r?a(0,e):"values"==r?a(0,t[e]):a(0,[e,t[e]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,r,e){var n=e(25),a=e(21);e(48)("keys",function(){return function(t){return a(n(t))}})},function(t,r,e){"use strict";var n=e(50)(!0);e(20)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,r=this._t,e=this._i;return e>=r.length?{value:void 0,done:!0}:(t=n(r,e),this._i+=t.length,{value:t,done:!1})})},function(t,r,e){e(56);for(var n=e(1),a=e(4),o=e(8),i=e(2)("toStringTag"),d=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;5>f;f++){var s=d[f],p=n[s],l=p&&p.prototype;l&&!l[i]&&a(l,i,s),o[s]=o.Array}},function(t,r,e){r=t.exports=e(61)(),r.push([t.id,'.grid-form *,.grid-form :after,.grid-form :before{box-sizing:border-box}.grid-form h1,.grid-form h2,.grid-form h3,.grid-form h4,.grid-form h5{color:#595959;margin:0 0 .25rem;padding:0 0 .25rem;text-align:right;text-transform:uppercase}.grid-form input:not([type=checkbox]),.grid-form textarea{font-size:1rem;padding:.25rem;height:100%;margin:0;width:100%}.grid-form select{height:1.68rem;font-size:1rem;padding:.25rem;margin:0;width:100%}.grid-form input:not([type=checkbox]),.grid-form select,.grid-form textarea{border:0;background:transparent}.grid-form input:not([type=checkbox])::-webkit-input-placeholder,.grid-form select[placeholder],.grid-form textarea::-webkit-input-placeholder{font-weight:100;color:#595959}.grid-form input:not([type=checkbox])::-webkit-input-placeholder,.grid-form select,.grid-form textarea:-moz-placeholder{font-weight:100;color:#595959}.grid-form input:not([type=checkbox]):focus,.grid-form select:focus,.grid-form textarea:focus{outline:0}.grid-form fieldset{border:none;padding:0;margin:0}.grid-form fieldset legend{border:none;border-bottom:4px solid #404040;color:#404040;font-size:1rem;font-weight:700;padding-bottom:2px;padding-top:2px;position:static;width:100%}.grid-form fieldset fieldset legend{border-bottom:2px solid #404040;font-weight:400}.grid-form fieldset fieldset fieldset legend{border-bottom:1px solid #404040;font-weight:400;font-size:15px}.grid-form [data-row-span]{border-bottom:1px solid #333;width:100%;zoom:1}.grid-form [data-row-span]:after,.grid-form [data-row-span]:before{content:"";display:table}.grid-form [data-row-span]:after{clear:both}@media only screen and (min-width:0) and (max-width:700px){.grid-form [data-row-span]{border-bottom:none}}.grid-form [data-row-span] [data-field-span]{padding:8px;float:left}@media only screen and (min-width:0) and (max-width:700px){.grid-form [data-row-span] [data-field-span]{border-bottom:1px solid #333;width:100%!important}}@media only screen and (min-width:700px){.grid-form [data-row-span] [data-field-span]{border-right:1px solid #333;display:block}}.grid-form [data-row-span] [data-field-span] label:first-child{margin-top:0;text-transform:uppercase;letter-spacing:1px;font-size:.667rem;color:#333;display:block;margin-bottom:.25rem}.grid-form [data-row-span] [data-field-span] label:first-child:hover{cursor:text}.grid-form [data-row-span] [data-field-span]:last-child{border-right:none}.grid-form [data-row-span] [data-field-span].focus{background:#fffad4}.grid-form [data-row-span] [data-field-span].focus label{color:#262626}.grid-form [data-row-span] [data-field-span]:hover{background:#fffded;cursor:text}.grid-form input::-webkit-autofill,.grid-form select:-webkit-autofill,.grid-form textarea:-webkit-autofill{background-color:transparent!important;background-image:none;color:#000}@media print{.grid-form [data-row-span]{display:table;height:56px;page-break-inside:avoid}.grid-form [data-row-span] [data-field-span]{border-right:1px solid #333;display:table-cell;float:none}.grid-form [data-row-span] [data-field-span].focus,.grid-form [data-row-span] [data-field-span]:hover{background:none}.grid-form [data-row-span] [data-field-span] label:first-child{letter-spacing:0}}.grid-form [data-row-span="1"]>[data-field-span="1"]{width:100%}.grid-form [data-row-span="2"]>[data-field-span="1"]{width:50%}.grid-form [data-row-span="2"]>[data-field-span="2"]{width:100%}.grid-form [data-row-span="3"]>[data-field-span="1"]{width:33.33333%}.grid-form [data-row-span="3"]>[data-field-span="2"]{width:66.66667%}.grid-form [data-row-span="3"]>[data-field-span="3"]{width:100%}.grid-form [data-row-span="4"]>[data-field-span="1"]{width:25%}.grid-form [data-row-span="4"]>[data-field-span="2"]{width:50%}.grid-form [data-row-span="4"]>[data-field-span="3"]{width:75%}.grid-form [data-row-span="4"]>[data-field-span="4"]{width:100%}.grid-form [data-row-span="5"]>[data-field-span="1"]{width:20%}.grid-form [data-row-span="5"]>[data-field-span="2"]{width:40%}.grid-form [data-row-span="5"]>[data-field-span="3"]{width:60%}.grid-form [data-row-span="5"]>[data-field-span="4"]{width:80%}.grid-form [data-row-span="5"]>[data-field-span="5"]{width:100%}.grid-form [data-row-span="6"]>[data-field-span="1"]{width:16.66667%}.grid-form [data-row-span="6"]>[data-field-span="2"]{width:33.33333%}.grid-form [data-row-span="6"]>[data-field-span="3"]{width:50%}.grid-form [data-row-span="6"]>[data-field-span="4"]{width:66.66667%}.grid-form [data-row-span="6"]>[data-field-span="5"]{width:83.33333%}.grid-form [data-row-span="6"]>[data-field-span="6"]{width:100%}.grid-form [data-row-span="7"]>[data-field-span="1"]{width:14.28571%}.grid-form [data-row-span="7"]>[data-field-span="2"]{width:28.57143%}.grid-form [data-row-span="7"]>[data-field-span="3"]{width:42.85714%}.grid-form [data-row-span="7"]>[data-field-span="4"]{width:57.14286%}.grid-form [data-row-span="7"]>[data-field-span="5"]{width:71.42857%}.grid-form [data-row-span="7"]>[data-field-span="6"]{width:85.71429%}.grid-form [data-row-span="7"]>[data-field-span="7"]{width:100%}.grid-form [data-row-span="8"]>[data-field-span="1"]{width:12.5%}.grid-form [data-row-span="8"]>[data-field-span="2"]{width:25%}.grid-form [data-row-span="8"]>[data-field-span="3"]{width:37.5%}.grid-form [data-row-span="8"]>[data-field-span="4"]{width:50%}.grid-form [data-row-span="8"]>[data-field-span="5"]{width:62.5%}.grid-form [data-row-span="8"]>[data-field-span="6"]{width:75%}.grid-form [data-row-span="8"]>[data-field-span="7"]{width:87.5%}.grid-form [data-row-span="8"]>[data-field-span="8"]{width:100%}.grid-form [data-row-span="9"]>[data-field-span="1"]{width:11.11111%}.grid-form [data-row-span="9"]>[data-field-span="2"]{width:22.22222%}.grid-form [data-row-span="9"]>[data-field-span="3"]{width:33.33333%}.grid-form [data-row-span="9"]>[data-field-span="4"]{width:44.44444%}.grid-form [data-row-span="9"]>[data-field-span="5"]{width:55.55556%}.grid-form [data-row-span="9"]>[data-field-span="6"]{width:66.66667%}.grid-form [data-row-span="9"]>[data-field-span="7"]{width:77.77778%}.grid-form [data-row-span="9"]>[data-field-span="8"]{width:88.88889%}.grid-form [data-row-span="9"]>[data-field-span="9"]{width:100%}.grid-form [data-row-span="10"]>[data-field-span="1"]{width:10%}.grid-form [data-row-span="10"]>[data-field-span="2"]{width:20%}.grid-form [data-row-span="10"]>[data-field-span="3"]{width:30%}.grid-form [data-row-span="10"]>[data-field-span="4"]{width:40%}.grid-form [data-row-span="10"]>[data-field-span="5"]{width:50%}.grid-form [data-row-span="10"]>[data-field-span="6"]{width:60%}.grid-form [data-row-span="10"]>[data-field-span="7"]{width:70%}.grid-form [data-row-span="10"]>[data-field-span="8"]{width:80%}.grid-form [data-row-span="10"]>[data-field-span="9"]{width:90%}.grid-form [data-row-span="10"]>[data-field-span="10"]{width:100%}.grid-form [data-row-span="11"]>[data-field-span="1"]{width:9.09091%}.grid-form [data-row-span="11"]>[data-field-span="2"]{width:18.18182%}.grid-form [data-row-span="11"]>[data-field-span="3"]{width:27.27273%}.grid-form [data-row-span="11"]>[data-field-span="4"]{width:36.36364%}.grid-form [data-row-span="11"]>[data-field-span="5"]{width:45.45455%}.grid-form [data-row-span="11"]>[data-field-span="6"]{width:54.54545%}.grid-form [data-row-span="11"]>[data-field-span="7"]{width:63.63636%}.grid-form [data-row-span="11"]>[data-field-span="8"]{width:72.72727%}.grid-form [data-row-span="11"]>[data-field-span="9"]{width:81.81818%}.grid-form [data-row-span="11"]>[data-field-span="10"]{width:90.90909%}.grid-form [data-row-span="11"]>[data-field-span="11"]{width:100%}.grid-form [data-row-span="12"]>[data-field-span="1"]{width:8.33333%}.grid-form [data-row-span="12"]>[data-field-span="2"]{width:16.66667%}.grid-form [data-row-span="12"]>[data-field-span="3"]{width:25%}.grid-form [data-row-span="12"]>[data-field-span="4"]{width:33.33333%}.grid-form [data-row-span="12"]>[data-field-span="5"]{width:41.66667%}.grid-form [data-row-span="12"]>[data-field-span="6"]{width:50%}.grid-form [data-row-span="12"]>[data-field-span="7"]{width:58.33333%}.grid-form [data-row-span="12"]>[data-field-span="8"]{width:66.66667%}.grid-form [data-row-span="12"]>[data-field-span="9"]{width:75%}.grid-form [data-row-span="12"]>[data-field-span="10"]{width:83.33333%}.grid-form [data-row-span="12"]>[data-field-span="11"]{width:91.66667%}.grid-form [data-row-span="12"]>[data-field-span="12"]{width:100%}',""])},function(t,r){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],r=0;r<this.length;r++){var e=this[r];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(r,e){"string"==typeof r&&(r=[[null,r,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<r.length;a++){var i=r[a];"number"==typeof i[0]&&n[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),t.push(i))}},t}},function(t,r){t.exports='<form class=grid-form> <div v-if=header class=grid-form-header v-html=header></div> <field-set v-ref:field-sets v-for="(section,fieldset) in sections" :rows=fieldset.rows :legend=fieldset.legend style=padding-bottom:.25rem> </field-set><br> <slot></slot> </form>'},function(t,r,e){var n,a;e(65),n=e(28),a=e(62),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,r,e){function n(t,r){for(var e=0;e<t.length;e++){var n=t[e],a=l[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(f(n.parts[o],r))}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(f(n.parts[o],r));l[n.id]={id:n.id,refs:1,parts:i}}}}function a(t){for(var r=[],e={},n=0;n<t.length;n++){var a=t[n],o=a[0],i=a[1],d=a[2],f=a[3],s={css:i,media:d,sourceMap:f};e[o]?e[o].parts.push(s):r.push(e[o]={id:o,parts:[s]})}return r}function o(t,r){var e=m(),n=w[w.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(r,n.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),w.push(r);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(r)}}function i(t){t.parentNode.removeChild(t);var r=w.indexOf(t);r>=0&&w.splice(r,1)}function d(t){var r=document.createElement("style");return r.type="text/css",o(t,r),r}function f(t,r){var e,n,a;if(r.singleton){var o=g++;e=h||(h=d(r)),n=s.bind(null,e,o,!1),a=s.bind(null,e,o,!0)}else e=d(r),n=p.bind(null,e),a=function(){i(e)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else a()}}function s(t,r,e,n){var a=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(r,a);else{var o=document.createTextNode(a),i=t.childNodes;i[r]&&t.removeChild(i[r]),i.length?t.insertBefore(o,i[r]):t.appendChild(o)}}function p(t,r){var e=r.css,n=r.media,a=r.sourceMap;if(n&&t.setAttribute("media",n),a&&(e+="\n/*# sourceURL="+a.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var l={},u=function(t){var r;return function(){return"undefined"==typeof r&&(r=t.apply(this,arguments)),r}},c=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=u(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,g=0,w=[];t.exports=function(t,r){r=r||{},"undefined"==typeof r.singleton&&(r.singleton=c()),"undefined"==typeof r.insertAt&&(r.insertAt="bottom");var e=a(t);return n(e,r),function(t){for(var o=[],i=0;i<e.length;i++){var d=e[i],f=l[d.id];f.refs--,o.push(f)}if(t){var s=a(t);n(s,r)}for(var i=0;i<o.length;i++){var f=o[i];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete l[f.id]}}}};var v=function(){var t=[];return function(r,e){return t[r]=e,t.filter(Boolean).join("\n")}}()},function(t,r,e){var n=e(60);"string"==typeof n&&(n=[[t.id,n,""]]);e(64)(n,{});n.locals&&(t.exports=n.locals)}])});
//# sourceMappingURL=vue-gridform.js.map