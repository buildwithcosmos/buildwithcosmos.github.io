(this["webpackJsonpcosmos-console"]=this["webpackJsonpcosmos-console"]||[]).push([[1],{515:function(e,t,n){var r=n(517);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),i=n(73),o=n(478),c=n(53),l=Object(c.a)((function(e){return{container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"94vh",backgroundColor:"#252525"},image:{width:"auto",height:400},message:{fontSize:20,fontWeight:400,color:e.palette.text.secondary},action:{marginTop:16}}}));function u(e){var t=l(),n=e.message,r=e.actionText,c=e.actionHandler,u=e.action,s=e.image;return a.a.createElement("div",{className:t.container},a.a.createElement("img",{className:t.image,src:s,alt:""}),a.a.createElement(i.a,{className:t.message},n),u&&a.a.createElement(o.a,{className:t.action,variant:"contained",size:"large",color:"secondary",onClick:c},r))}},517:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},518:function(e,t,n){"use strict";var r=n(34),a=n(0),i=n.n(a),o=n(3),c=n(53),l=n(17),u=n(476),s=n(478),f=n(477),d=n(73),m=Object(c.a)((function(e){return{appBar:{color:e.palette.primary,background:"white"},toolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},buttons:{marginLeft:"auto"},action:{textTransform:"none",paddingLeft:16,paddingRight:16},title:{color:e.palette.text.primary,fontWeight:500},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(l.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},actionIcon:{marginRight:4}}}));t.a=function(e){var t=m(),n=e.title,a=e.selectionCount,c=e.actions,l=e.onAction,p=function(e){return function(){return l(e)}},v=i.a.createElement(d.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},n),y=i.a.createElement(d.a,{className:t.title,variant:"subtitle1",component:"div"},a," selected"),g=a>0;return i.a.createElement(u.a,{position:"static",elevation:1,className:t.appBar},i.a.createElement(f.a,{className:Object(o.a)(t.toolbar,Object(r.a)({},t.highlight,g))},g?y:v,i.a.createElement("div",{className:t.buttons},g?c?c.map((function(e){return!e.primary&&i.a.createElement(s.a,{className:t.action,variant:"text",size:"small",color:"primary",onClick:p(e.identifier)},i.a.createElement(e.icon,{className:t.actionIcon}),e.title)})):null:c?i.a.createElement(i.a.Fragment,null,c.map((function(e){return e.primary&&i.a.createElement(s.a,{className:t.action,variant:"text",size:"small",color:"primary",onClick:p(e.identifier)},i.a.createElement(e.icon,{className:t.actionIcon}),e.title)}))):null)))}},519:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return j}));var r=n(0),a=n.n(r),i=n(486),o=n(487),c=n(501),l=n(488),u=n(73),s=n(146),f=n(147),d=n(478),m=n(53),p=n(178),v=n(490),y=n(24),g=Object(m.a)((function(e){return{root:{padding:16,marginLeft:16},title:{fontSize:16,marginBottom:24},clear:{display:"block",marginLeft:"auto",marginTop:16},datePicker:{marginTop:e.spacing(3),marginBottom:0}}}));function h(e,t){console.log(t);var n={};return e.forEach((function(e){"time_range"===e.type?(n[e.identifier]=t[e.identifier].option,"custom"===t[e.identifier].option&&(n[e.startIdentifier]=t[e.identifier].startDate.getTime(),n[e.endIdentifier]=t[e.identifier].endDate.getTime())):n[e.identifier]=t[e.identifier]})),console.log(n),n}function b(e,t){var n={};return e.forEach((function(e){if("time_range"===e.type){if(n[e.identifier]={},e.identifier in t?n[e.identifier].option=t[e.identifier]:n[e.identifier].option=e.defaultValue.option,e.startIdentifier in t){var r=parseInt(t[e.startIdentifier],10);n[e.identifier].startDate=new Date(r)}else n[e.identifier].startDate=e.defaultValue.startDate;if(e.endIdentifier in t){var a=parseInt(t[e.endIdentifier],10);n[e.identifier].endDate=new Date(a)}else n[e.identifier].endDate=e.defaultValue.endDate}else e.identifier in t?n[e.identifier]=t[e.identifier]:n[e.identifier]=e.defaultValue})),n}function j(e){var t=e.fields,n=e.values,r=e.onValueChange,m=e.onClear,h=g(),b=function(e){return function(t){r(e,t.target.value)}},j=function(e){return function(t){var a=Object.assign({},n[e]);a.option=t.target.value,r(e,a)}},E=function(e,t){return function(a){var i=Object.assign({},n[e.identifier]);i[t]=a,r(e.identifier,i)}};return a.a.createElement(y.a,{utils:p.a},a.a.createElement(s.a,{className:h.root},a.a.createElement(u.a,{className:h.title,variant:"h6"},"Filters"),a.a.createElement(f.a,{container:!0,spacing:3},t.map((function(e){return a.a.createElement(f.a,{item:!0,lg:12},"select"===e.type&&function(e,t){return a.a.createElement(i.a,{variant:"outlined",className:h.control,fullWidth:!0},a.a.createElement(o.a,{id:e.identifier},e.title),a.a.createElement(c.a,{labelId:e.identifier,value:t,onChange:b(e.identifier),label:e.title},e.options.map((function(e){return a.a.createElement(l.a,{value:e.value},e.title)}))))}(e,n[e.identifier]),"time_range"===e.type&&function(e,t){return a.a.createElement("div",null,a.a.createElement(i.a,{variant:"outlined",className:h.control,fullWidth:!0},a.a.createElement(o.a,{id:e.identifier},e.title),a.a.createElement(c.a,{labelId:e.identifier,value:t.option,onChange:j(e.identifier),label:e.title},e.options.map((function(e){return a.a.createElement(l.a,{value:e.value},e.title)})))),"custom"===t.option&&a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{margin:"normal",id:e.identifier+"Start",label:e.startTitle,format:"MM/dd/yyyy",inputVariant:"outlined",fullWidth:!0,value:null===t.startDate?new Date:new Date(t.startDate),onChange:E(e,"startDate"),className:h.datePicker}),a.a.createElement(v.a,{margin:"normal",id:e.identifier+"End",label:e.endTitle,format:"MM/dd/yyyy",inputVariant:"outlined",fullWidth:!0,value:null===t.endDate?new Date:new Date(t.endDate),onChange:E(e,"endDate"),className:h.datePicker})))}(e,n[e.identifier]))}))),a.a.createElement(d.a,{size:"small",color:"secondary",variant:"text",className:h.clear,onClick:m},"Clear")))}},520:function(e,t,n){"use strict";var r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,r(n(54)).default)(a.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=i},521:function(e,t,n){"use strict";var r=n(522),a=n(526),i=n(527),o=n(531),c=n(532),l=n(533);function u(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function f(e,t){return t.decode?c(e):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var a="string"===typeof n&&n.includes(e.arrayFormatSeparator),i="string"===typeof n&&!a&&f(n,e).includes(e.arrayFormatSeparator);n=i?f(n,e):n;var o=a||i?n.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===n?n:f(n,e);r[t]=o};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),i=Object.create(null);if("string"!==typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;var o,c=a(e.split("&"));try{for(c.s();!(o=c.n()).done;){var s=o.value,d=l(t.decode?s.replace(/\+/g," "):s,"="),m=r(d,2),v=m[0],y=m[1];y=void 0===y?null:["comma","separator"].includes(t.arrayFormat)?y:f(y,t),n(f(v,t),y,i)}}catch(x){c.e(x)}finally{c.f()}for(var g=0,h=Object.keys(i);g<h.length;g++){var b=h[g],j=i[b];if("object"===typeof j&&null!==j)for(var E=0,O=Object.keys(j);E<O.length;E++){var w=O[E];j[w]=p(j[w],t)}else i[b]=p(j,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((function(e,t){var n=i[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))}t.extract=m,t.parse=v,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[[s(t,e),"[",a,"]"].join("")]:[[s(t,e),"[",s(a,e),"]=",s(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[[s(t,e),"[]"].join("")]:[[s(t,e),"[]=",s(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null===r||void 0===r||0===r.length?n:0===n.length?[[s(t,e),"=",s(r,e)].join("")]:[[n,s(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(i(n),null===r?[s(t,e)]:[[s(t,e),"=",s(r,e)].join("")])}}}}(t),a={},o=0,c=Object.keys(e);o<c.length;o++){var l=c[o];n(l)||(a[l]=e[l])}var f=Object.keys(a);return!1!==t.sort&&f.sort(t.sort),f.map((function(n){var a=e[n];return void 0===a?"":null===a?s(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):s(n,t)+"="+s(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=l(e,"#"),a=r(n,2),i=a[0],o=a[1];return Object.assign({url:i.split("?")[0]||"",query:v(m(e),t)},t&&t.parseFragmentIdentifier&&o?{fragmentIdentifier:f(o,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var r=d(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),o=Object.assign(i,e.query),c=t.stringify(o,n);c&&(c="?".concat(c));var l=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(l="#".concat(s(e.fragmentIdentifier,n))),"".concat(r).concat(c).concat(l)}},522:function(e,t,n){var r=n(523),a=n(524),i=n(515),o=n(525);e.exports=function(e,t){return r(e)||a(e,t)||i(e,t)||o()}},523:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},524:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}},525:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},526:function(e,t,n){var r=n(515);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,o=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw i}}}}},527:function(e,t,n){var r=n(528),a=n(529),i=n(515),o=n(530);e.exports=function(e){return r(e)||a(e)||i(e)||o()}},528:function(e,t,n){var r=n(517);e.exports=function(e){if(Array.isArray(e))return r(e)}},529:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},530:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},531:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},532:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function o(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var i=o(r[0]);i!==r[0]&&(n[r[0]]=i)}r=a.exec(e)}n["%C2"]="\ufffd";for(var c=Object.keys(n),l=0;l<c.length;l++){var u=c[l];e=e.replace(new RegExp(u,"g"),n[u])}return e}(e)}}},533:function(e,t,n){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},534:function(e,t,n){"use strict";function r(e){return e.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",(function(){return r}))},535:function(e,t,n){"use strict";var r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,r(n(54)).default)(a.default.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");t.default=i},536:function(e,t,n){"use strict";var r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,r(n(54)).default)(a.default.createElement("path",{d:"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"}),"ViewList");t.default=i},537:function(e,t,n){"use strict";var r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,r(n(54)).default)(a.default.createElement("path",{d:"M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"}),"ViewCompact");t.default=i},604:function(e,t,n){"use strict";n.r(t);var r=n(39),a=n(0),i=n.n(a),o=n(147),c=n(53),l=n(43),u=n(20),s=n(518),f=n(516),d=n(519),m=n(30),p=(n(534),n(520)),v=n.n(p),y=n(177),g=n.n(y),h=n(536),b=n.n(h),j=n(535),E=n.n(j),O=n(537),w=n.n(O),x=n(521),S=n.n(x),N=Object(c.a)((function(e){return{container:{padding:16}}})),k=[{identifier:"date_range",type:"time_range",title:"Time Range",startTitle:"Start Date",startIdentifier:"start_date",endTitle:"End Date",endIdentifier:"end_date",options:[{value:"all_time",title:"All Time"},{value:"last_3_months",title:"Last 3 Months"},{value:"last_6_months",title:"Last 6 Months"},{value:"last_9_months",title:"Last 9 Months"},{value:"last_12_months",title:"Last 12 Months"},{value:"last_15_months",title:"Last 15 Months"},{value:"last_18_months",title:"Last 18 Months"},{value:"custom",title:"Custom"}],defaultValue:{option:"all_time",startDate:new Date,endDate:new Date}}],I=[{identifier:"new",title:"New",icon:g.a,primary:!0},{identifier:"filter",title:"Filter",icon:E.a,primary:!0},{identifier:"default",title:"Default",icon:b.a,primary:!0},{identifier:"delete",title:"Delete",icon:v.a,primary:!1}],_=[{identifier:"new",title:"New",icon:g.a,primary:!0},{identifier:"filter",title:"Filter",icon:E.a,primary:!0},{identifier:"compact",title:"Compact",icon:w.a,primary:!0},{identifier:"delete",title:"Delete",icon:v.a,primary:!1}];var C={fetchAccounts:m.g,newAccount:m.k};t.default=Object(l.b)((function(e){return{accounts:e.accounts}}),C)(Object(u.g)((function(e){var t=e.accounts,n=e.fetchAccounts,c=e.newAccount,l=e.history,u=e.location,m=S.a.parse(u.search),p=N(),v=Object(a.useState)([]),y=Object(r.a)(v,2),g=y[0],h=(y[1],Object(a.useState)(Object.keys(m).length>0)),b=Object(r.a)(h,2),j=b[0],E=b[1],O=Object(a.useState)(!1),w=Object(r.a)(O,2),x=w[0],C=w[1],D=Object(a.useState)(parseInt(m.page,10)||0),A=Object(r.a)(D,2),F=A[0],M=(A[1],i.a.useState(m.limit||20)),T=Object(r.a)(M,2),z=T[0],L=(T[1],Object(d.b)(k,m)),V=Object(a.useState)(L),H=Object(r.a)(V,2),R=H[0],U=(H[1],function(e,t,n){var r=Object(d.c)(k,e),a=new URLSearchParams(r);a.append("page",t),a.append("limit",n),l.push("/actions?"+a.toString())});return"page"in m&&"limit"in m||U(R,F,z),"start_date"in m&&(m.start_date=new Date(Number(m.start_date))),"end_date"in m&&(m.end_date=new Date(Number(m.end_date))),Object(a.useEffect)((function(){console.log(k,R);var e=Object(d.c)(k,R);e.page=F,e.limit=z,n(e)}),[n,R,F,z]),i.a.createElement("div",null,i.a.createElement(s.a,{title:"Screens",selectionCount:g.length,actions:x?I:_,onAction:function(e){"new"===e?c():"filter"===e?E(!j):"compact"!==e&&"default"!==e||C(!x)}}),i.a.createElement(o.a,{container:!0,className:p.container},i.a.createElement(o.a,{item:!0,lg:j?10:12},(!t||0===t.records.length)&&i.a.createElement(f.a,{message:"You have not created any accounts yet.",action:!0,actionText:"Create Account",actionHandler:c,image:"assets/images/empty-accounts.svg"})),j&&i.a.createElement(o.a,{item:!0,lg:2,className:p.filter})))})))}}]);
//# sourceMappingURL=1.83593491.chunk.js.map