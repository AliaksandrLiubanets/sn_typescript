(self.webpackChunksn_typescript=self.webpackChunksn_typescript||[]).push([[587],{9587:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Q}});var n=t(8489),o=t(3430),a=t(7581),s=t(3831),i=t(2791),c=t(3784),u=t(9973),l="Users_users__content__ityY0",f="Users_user__block__c8Ser",d="Users_user__avaFollowed__gwBzr",p="Users_user_preloader__zkk47",m="Avatar_user__ava__wfhlm",g="Avatar_disable__Tt8YT",x=t(4049),_=t(1614),v=t(4511),h="Preloader_preloader__8NPgU",y="Preloader_preloader__row__Xpfkq",j="Preloader_img__L86At",b=t(184),w=function(){return(0,b.jsx)("div",{className:h,children:(0,b.jsx)("div",{className:y,children:(0,b.jsx)("img",{className:j,src:v,alt:"img"})})})},k=t(9130),N=i.memo((function(r){var e=r.id,t=r.photos,n=r.followingProgress,o="".concat(n?g:m);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.OL,{to:n?"#":"".concat(k.m.PROFILE,"/").concat(e),children:(0,b.jsx)("div",{children:(0,b.jsx)("img",{className:o,src:t.small?t.small:x,alt:"ava"})})}),n&&(0,b.jsx)("div",{className:p,children:(0,b.jsx)(w,{})})]})})),S="FollowUnfollow_user__followed__I+Xi1",F=i.memo((function(r){var e=r.id,t=r.followed,n=r.followingProgress,o=r.follow,a=r.unfollow;return(0,b.jsx)("div",{className:S,children:t?(0,b.jsx)("button",{disabled:n,onClick:function(){a(e)},children:"unfollow"}):(0,b.jsx)("button",{disabled:n,onClick:function(){o(e)},children:"follow"})})})),C="UserDataFrame_user__dataFrame__XmCpd",I="UserDataFrame_user__dataFrame__nameStatus__AGNSd",O="UserDataFrame_user__name__8MqtV",A="UserDataFrame_user__status__BXoWo",P="UserDataFrame_user__dataFrame__location__-pNHC",U="UserDataFrame_user__country__N59AR",E="UserDataFrame_user__city__aJHhh",M=i.memo((function(r){var e=r.name,t=r.status,n=r.location;return(0,b.jsxs)("div",{className:C,children:[(0,b.jsxs)("div",{className:I,children:[(0,b.jsx)("div",{className:O,children:e}),(0,b.jsx)("div",{className:A,children:t})]}),(0,b.jsxs)("div",{className:P,children:[(0,b.jsx)("div",{className:U,children:n?n.country:"country"}),(0,b.jsx)("div",{className:E,children:n?n.city:"city"})]})]})})),T=i.memo((function(r){var e=r.name,t=r.id,n=r.status,o=r.followed,c=r.photos,u=r.location,l=r.followingInProgress.some((function(r){return r===t})),p=(0,a.I0)(),m=(0,i.useCallback)((function(){return p((0,s.ZN)(t))}),[p]),g=(0,i.useCallback)((function(){return p((0,s.fv)(t))}),[p]);return(0,b.jsxs)("div",{className:f,children:[(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)(N,{id:t,photos:c,followingProgress:l}),(0,b.jsx)(F,{id:t,followingProgress:l,followed:o,follow:m,unfollow:g})]}),(0,b.jsx)(M,{name:e,status:n,location:u})]})})),R=t(5874),z="Paginator_paginatorContainer__erg9Y",$="Paginator_container__wCgjg",D="Paginator_edge__OkWso",L="Paginator_center__p+j+t",Z="Paginator_selectedPage__FfTJ4",B="Paginator_show__Cb8aL",q=(0,i.memo)((function(r){for(var e=r.setCurrentPage,t=r.itemsTotalCount,n=r.page,o=r.pageSize,a=Math.ceil(t/o),s=[],i=1;i<=a;i+=1)s.push(i);var c=function(r,e,t){if(e<=3)return[1,2,3,4,5].filter((function(r){return r<=t}));if(t<=5)return r.filter((function(r){return 0!==r}));if(e>r.length-3)return[4,3,2,1,0].map((function(r){return t-r}));return[2,1,0,-1,-2].map((function(r){return e-r}))}(s,n,a),u=function(r){e(r)};return(0,b.jsx)("div",{className:z,children:(0,b.jsxs)("div",{className:$,children:[(0,b.jsx)("div",{className:D,children:n>3&&a>5&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{onClick:function(){return u(n-1)},children:"\u25c1"}),(0,b.jsx)("button",{className:1===n?Z:"",onClick:function(){return u(1)},children:" 1"}),(0,b.jsx)("span",{children:"..."})]})}),(0,b.jsx)("div",{className:L,children:c.map((function(r){return(0,b.jsxs)("button",{className:n===r?Z:"",onClick:function(){return u(r)},children:[" ",r," "]},r)}))}),(0,b.jsx)("div",{className:D,children:n<s.length-2&&a>5&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{children:"..."}),(0,b.jsx)("button",{className:n===s.length?Z:"",onClick:function(){return u(s.length)},children:s.length}),(0,b.jsx)("button",{onClick:function(){return u(n+1)},children:"\u25b7"})]})}),(0,b.jsx)("div",{className:B})]})})})),X="SearchForm_search_block__ezv3j",J=t(5705),W=t(7637),Y=function(r){var e=r.searchParams,t=(0,a.I0)(),n=(0,a.v9)((function(r){return r.usersPage.pageSize}));return(0,b.jsx)("div",{children:(0,b.jsx)(J.J9,{initialValues:{term:e.term,friend:String(e.friend)},onSubmit:function(r){var e;e={term:r.term,friend:"true"===r.friend||"false"!==r.friend&&null},t((0,s.pz)(1,n,e))},children:(0,b.jsxs)(J.l0,{className:X,children:[(0,b.jsx)(W.o,{name:"term",type:"text",placeholder:"search by name"}),(0,b.jsxs)(J.gN,{component:"select",name:"friend",multiple:!1,children:[(0,b.jsx)("option",{value:"null",children:"all"}),(0,b.jsx)("option",{value:"true",children:"subscribed"}),(0,b.jsx)("option",{value:"false",children:"unsubscribed"})]}),(0,b.jsx)("button",{type:"submit",children:"Submit"})]})})})},H="NoUsersFound_no_users__CCxXP",V=function(){return(0,b.jsxs)("div",{className:H,children:[(0,b.jsx)("div",{children:"\ud83d\ude29"}),(0,b.jsx)("div",{children:(0,b.jsx)("span",{children:"No found users!"})}),(0,b.jsx)("div",{children:(0,b.jsx)("span",{children:"Change your search params"})})]})},G=i.memo((function(r){var e=r.isSearchToggle,t=(0,a.v9)(c.cn),n=t.users,o=t.filter,u=t.totalCount,f=t.currentPage,d=t.pageSize,p=t.followingInProgress,m=(0,a.I0)(),g=(0,i.useCallback)((function(r){return m((0,s.D4)(r))}),[m]),x=n.map((function(r){return(0,b.jsx)(T,{id:r.id,name:r.name,status:r.status,followed:r.followed,location:r.location?r.location:void 0,photos:r.photos,followingInProgress:p},r.id)}));return(0,b.jsxs)("div",{className:R.Z.page_block,children:[(0,b.jsx)(q,{setCurrentPage:g,itemsTotalCount:u,page:f,pageSize:d}),(0,b.jsx)(Y,{searchParams:o}),e&&0===x.length?(0,b.jsx)(V,{}):(0,b.jsx)("div",{className:l,children:x})]})})),K=t(819),Q=i.memo((function(){var r=(0,a.v9)(c.cn),e=r.filter,l=r.currentPage,f=r.pageSize,d=r.isSearchToggle,p=(0,a.v9)(c.Wf).isLoading,m=(0,K.s0)(),g=(0,a.I0)(),x=(0,i.useCallback)((function(r){return g(s._B.setSearchToggle(r))}),[g]),v=(0,_.lr)({}),h=(0,o.Z)(v,2),y=h[0],j=h[1];return(0,i.useEffect)((function(){var r,t=Object.fromEntries(y),o=l,a=e;switch(t.page&&(o=Number(t.page)),t.term&&(a=(0,n.Z)((0,n.Z)({},a),{},{term:t.term})),t.friend){case"true":r=!0;break;case"false":r=!1;break;default:r=null}return t.friend&&(a=(0,n.Z)((0,n.Z)({},a),{},{friend:r})),g((0,s.pz)(o,f,a)),function(){x(!1)}}),[g]),(0,i.useEffect)((function(){var r={};e.term&&(r.term=e.term),null===e.friend?r=(0,n.Z)({},r):r.friend=String(e.friend),1!==l&&(r.page=String(l));var o=t(4245);m({pathname:"/users",search:o.stringify(r)}),j(r)}),[e,l]),!d||p?(0,b.jsx)(u.$,{}):(0,b.jsx)(G,{isSearchToggle:d})}))},9412:function(r){"use strict";var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(r,e){try{return decodeURIComponent(r.join(""))}catch(a){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],o(t),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var e=r.match(t),n=1;n<e.length;n++)e=(r=o(e,n).join("")).match(t);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(r);o;){try{t[o[0]]=decodeURIComponent(o[0])}catch(e){var s=a(o[0]);s!==o[0]&&(t[o[0]]=s)}o=n.exec(r)}t["%C2"]="\ufffd";for(var i=Object.keys(t),c=0;c<i.length;c++){var u=i[c];r=r.replace(new RegExp(u,"g"),t[u])}return r}(r)}}},2683:function(r){"use strict";r.exports=function(r,e){for(var t={},n=Object.keys(r),o=Array.isArray(e),a=0;a<n.length;a++){var s=n[a],i=r[s];(o?-1!==e.indexOf(s):e(s,i,r))&&(t[s]=i)}return t}},4245:function(r,e,t){"use strict";var n=t(8181).default,o=t(4534).default,a=t(9504).default,s=t(8485).default,i=t(499),c=t(9412),u=t(845),l=t(2683),f=Symbol("encodeFragmentIdentifier");function d(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(r,e){return e.encode?e.strict?i(r):encodeURIComponent(r):r}function m(r,e){return e.decode?c(r):r}function g(r){return Array.isArray(r)?r.sort():"object"===typeof r?g(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function x(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function _(r){var e=(r=x(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function v(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function h(r,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return function(r,t,n){e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var o="string"===typeof t&&t.includes(r.arrayFormatSeparator),a="string"===typeof t&&!o&&m(t,r).includes(r.arrayFormatSeparator);t=a?m(t,r):t;var s=o||a?t.split(r.arrayFormatSeparator).map((function(e){return m(e,r)})):null===t?t:m(t,r);n[e]=s};case"bracket-separator":return function(e,t,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===t?[]:t.split(r.arrayFormatSeparator).map((function(e){return m(e,r)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=t?m(t,r):t};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!==typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var s,i=a(r.split("&"));try{for(i.s();!(s=i.n()).done;){var c=s.value;if(""!==c){var l=u(e.decode?c.replace(/\+/g," "):c,"="),f=o(l,2),p=f[0],x=f[1];x=void 0===x?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?x:m(x,e),t(m(p,e),x,n)}}}catch(N){i.e(N)}finally{i.f()}for(var _=0,h=Object.keys(n);_<h.length;_++){var y=h[_],j=n[y];if("object"===typeof j&&null!==j)for(var b=0,w=Object.keys(j);b<w.length;b++){var k=w[b];j[k]=v(j[k],e)}else n[y]=v(j,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(r,e){var t=n[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?r[e]=g(t):r[e]=t,r}),Object.create(null))}e.extract=_,e.parse=h,e.stringify=function(r,e){if(!r)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&(null===(n=r[t])||void 0===n)||e.skipEmptyString&&""===r[t];var n},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var o=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(s(t),null===n?[[p(e,r),"[",o,"]"].join("")]:[[p(e,r),"[",p(o,r),"]=",p(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(s(t),null===n?[[p(e,r),"[]"].join("")]:[[p(e,r),"[]=",p(n,r)].join("")])}};case"colon-list-separator":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(s(t),null===n?[[p(e,r),":list="].join("")]:[[p(e,r),":list=",p(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===r.arrayFormat?"[]=":"=";return function(t){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[p(t,r),e,p(o,r)].join("")]:[[n,p(o,r)].join(r.arrayFormatSeparator)])}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(s(t),null===n?[p(e,r)]:[[p(e,r),"=",p(n,r)].join("")])}}}}(e),o={},a=0,i=Object.keys(r);a<i.length;a++){var c=i[a];t(c)||(o[c]=r[c])}var u=Object.keys(o);return!1!==e.sort&&u.sort(e.sort),u.map((function(t){var o=r[t];return void 0===o?"":null===o?p(t,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?p(t,e)+"[]":o.reduce(n(t),[]).join("&"):p(t,e)+"="+p(o,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=u(r,"#"),n=o(t,2),a=n[0],s=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(_(r),e)},e&&e.parseFragmentIdentifier&&s?{fragmentIdentifier:m(s,e)}:{})},e.stringifyUrl=function(r,t){t=Object.assign(n({encode:!0,strict:!0},f,!0),t);var o=x(r.url).split("?")[0]||"",a=e.extract(r.url),s=e.parse(a,{sort:!1}),i=Object.assign(s,r.query),c=e.stringify(i,t);c&&(c="?".concat(c));var u=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(u="#".concat(t[f]?p(r.fragmentIdentifier,t):r.fragmentIdentifier)),"".concat(o).concat(c).concat(u)},e.pick=function(r,t,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=e.parseUrl(r,o),s=a.url,i=a.query,c=a.fragmentIdentifier;return e.stringifyUrl({url:s,query:l(i,t),fragmentIdentifier:c},o)},e.exclude=function(r,t,n){var o=Array.isArray(t)?function(r){return!t.includes(r)}:function(r,e){return!t(r,e)};return e.pick(r,o,n)}},845:function(r){"use strict";r.exports=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},499:function(r){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}},5314:function(r){r.exports=function(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n},r.exports.__esModule=!0,r.exports.default=r.exports},807:function(r){r.exports=function(r){if(Array.isArray(r))return r},r.exports.__esModule=!0,r.exports.default=r.exports},4011:function(r,e,t){var n=t(5314);r.exports=function(r){if(Array.isArray(r))return n(r)},r.exports.__esModule=!0,r.exports.default=r.exports},9504:function(r,e,t){var n=t(5816);r.exports=function(r,e){var t="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=n(r))||e&&r&&"number"===typeof r.length){t&&(r=t);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,c=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return i=r.done,r},e:function(r){c=!0,s=r},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw s}}}},r.exports.__esModule=!0,r.exports.default=r.exports},8181:function(r){r.exports=function(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r},r.exports.__esModule=!0,r.exports.default=r.exports},5962:function(r){r.exports=function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)},r.exports.__esModule=!0,r.exports.default=r.exports},1581:function(r){r.exports=function(r,e){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var n,o,a=[],s=!0,i=!1;try{for(t=t.call(r);!(s=(n=t.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(c){i=!0,o=c}finally{try{s||null==t.return||t.return()}finally{if(i)throw o}}return a}},r.exports.__esModule=!0,r.exports.default=r.exports},6258:function(r){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},4815:function(r){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},4534:function(r,e,t){var n=t(807),o=t(1581),a=t(5816),s=t(6258);r.exports=function(r,e){return n(r)||o(r,e)||a(r,e)||s()},r.exports.__esModule=!0,r.exports.default=r.exports},8485:function(r,e,t){var n=t(4011),o=t(5962),a=t(5816),s=t(4815);r.exports=function(r){return n(r)||o(r)||a(r)||s()},r.exports.__esModule=!0,r.exports.default=r.exports},5816:function(r,e,t){var n=t(5314);r.exports=function(r,e){if(r){if("string"===typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}},r.exports.__esModule=!0,r.exports.default=r.exports},4511:function(r,e,t){"use strict";r.exports=t.p+"static/media/Bars-1s-200px.4b9a68359a39e493c416.gif"}}]);
//# sourceMappingURL=587.9f95fb6a.chunk.js.map