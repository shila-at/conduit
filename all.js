/* axios v0.21.1 | (c) 2020 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(2),s=n(3),i=n(4),a=n(22),u=n(10),c=r(u);c.Axios=i,c.create=function(e){return r(a(c.defaults,e))},c.Cancel=n(23),c.CancelToken=n(24),c.isCancel=n(9),c.all=function(e){return Promise.all(e)},c.spread=n(25),c.isAxiosError=n(26),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";function r(e){return"[object Array]"===R.call(e)}function o(e){return"undefined"==typeof e}function s(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function i(e){return"[object ArrayBuffer]"===R.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function f(e){return"number"==typeof e}function p(e){return null!==e&&"object"==typeof e}function d(e){if("[object Object]"!==R.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Date]"===R.call(e)}function h(e){return"[object File]"===R.call(e)}function m(e){return"[object Blob]"===R.call(e)}function y(e){return"[object Function]"===R.call(e)}function g(e){return p(e)&&y(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function E(){function e(e,n){d(t[n])&&d(e)?t[n]=E(t[n],e):d(e)?t[n]=E({},e):r(e)?t[n]=e.slice():t[n]=e}for(var t={},n=0,o=arguments.length;n<o;n++)b(arguments[n],e);return t}function j(e,t,n){return b(t,function(t,r){n&&"function"==typeof t?e[r]=S(t,n):e[r]=t}),e}function C(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}var S=n(3),R=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:i,isBuffer:s,isFormData:a,isArrayBufferView:u,isString:c,isNumber:f,isObject:p,isPlainObject:d,isUndefined:o,isDate:l,isFile:h,isBlob:m,isFunction:y,isStream:g,isURLSearchParams:v,isStandardBrowserEnv:w,forEach:b,merge:E,extend:j,trim:x,stripBOM:C}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(2),s=n(5),i=n(6),a=n(7),u=n(22);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(u(n||{},{method:e,url:t,data:(n||{}).data}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(u(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}if(s){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),s=n(8),i=n(9),a=n(10);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(12):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(e=n(12)),e}var s=n(2),i=n(11),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],function(e){u.headers[e]={}}),s.forEach(["post","put","patch"],function(e){u.headers[e]=s.merge(a)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(13),s=n(16),i=n(5),a=n(17),u=n(20),c=n(21),f=n(14);e.exports=function(e){return new Promise(function(t,n){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var y=a(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?u(l.getAllResponseHeaders()):null,s=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:s,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};o(t,n,i),l=null}},l.onabort=function(){l&&(n(f("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){n(f("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||c(y))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),r.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),n(e),l=null)}),p||(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";var r=n(18),o=n(19);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?i[t]=(i[t]?i[t]:[]).concat([n]):i[t]=i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){function n(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(s[o]=n(void 0,e[o])):s[o]=n(e[o],t[o])}t=t||{};var s={},i=["url","method","data"],a=["headers","auth","proxy","params"],u=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],c=["validateStatus"];r.forEach(i,function(e){r.isUndefined(t[e])||(s[e]=n(void 0,t[e]))}),r.forEach(a,o),r.forEach(u,function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(s[o]=n(void 0,e[o])):s[o]=n(void 0,t[o])}),r.forEach(c,function(r){r in t?s[r]=n(e[r],t[r]):r in e&&(s[r]=n(void 0,e[r]))});var f=i.concat(a).concat(u).concat(c),p=Object.keys(e).concat(Object.keys(t)).filter(function(e){return f.indexOf(e)===-1});return r.forEach(p,o),s}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t){"use strict";e.exports=function(e){return"object"==typeof e&&e.isAxiosError===!0}}])});
//# sourceMappingURL=axios.min.map
let content = document.getElementById('content');
let navBar = document.getElementById('navbar-nav');
let navBarContent;

let globalOptions = {
  position: "bottom-right",
  animationDuration: 300
}
let notifier = new AWN(globalOptions);

/*axios.get('https://conduit.productionready.io/api/user', {
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': 'http://conduit.local',
},
}).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  notifier.alert('An error has occurred', {})
  console.log(error);
});*/

/*notifier.success('Custom message', {});*/


window.onload = (event) => {

  let hash = location.hash.substr(1).replace('/', '');

  if (hash) {
    redirect(hash)
  } else {
    redirect('home');
  }


};

const getAllRoute = () => {
  Array.from(document.getElementsByClassName("route")).forEach((item) => {
    item.addEventListener('click', (e) => {

      e.preventDefault();
      let href = item.getAttribute('href');
      chooseRoute(href);


    });

  });
}

const hasUser = () => {

  let userLogIn;
  if (localStorage.getItem('userLogIn')) {
    userLogIn = localStorage.getItem('userLogIn');
  } else {
    userLogIn = false;
  }

  return !!userLogIn;

}


const setNavbar = () => {

  navBar.innerHTML = '';
  if (hasUser()) {

    let userLogIn = localStorage.getItem('userLogIn');
    console.log(userLogIn)
    navBarContent = ` <li class="nav-item">
          <a class="nav-link route active" href="home">Home</a>
        </li>
<li class="nav-item">
          <a class="nav-link route" href="new-article">
          <i class="fa fa-edit"></i>
          New Article
</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="setting">
          <i class="fa fa-cog"></i>
          Settings
</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="profile">${JSON.parse(userLogIn).username}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="home" onclick="logOut(event)">LogOut</a>
        </li>
`
  } else {
    navBarContent = ` <li class="nav-item">
          <a class="nav-link route active" href="home">Home</a>
        </li>
<li class="nav-item">
          <a class="nav-link route" href="sign-in">sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="sign-up">sign up</a>
        </li>
      `;
  }

  navBar.innerHTML += navBarContent;
}

setNavbar();

/*window.addEventListener('hashchange', function(){

});*/

const chooseRoute = (href) => {

  parent.location.hash = '/' + href;

  switch (href) {
    case 'home':
      renderHomePage();
      break;
    case 'sign-in':
      renderLoginPage();
      break;
    case 'sign-up':
      renderRegisterPage();
      break;
    case 'new-article':
      renderNewArticlePage();
      break;
    case 'setting':
      renderSettingPage();
      break;
    case 'profile':
      renderProfilePage();
      break;
    default:

  }
}

const redirect = (route) => {
  chooseRoute(route);
  setNavbar();
  getAllRoute();
}

const renderHomePage = () => {

  let homePage = `<div class="container-fluid">
    <div class="row">
      <div class="col-md-12 header-title">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">

      <div class="col-md-9">
        <div class="list-items">
          <div class="title">
            <p>Global Feed</p>
          </div>
          <ul id="articles">

          </ul>
        </div>

        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">&laquo;</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
              <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">&raquo;</a>
            </li>
          </ul>
        </nav>

      </div>
      <div class="col-md-3">
        <div class="tags">
          <p>Popular Tags</p>
          <ul>
            <li>
              <a href="#">HuManlty</a>
            </li>
            <li>
              <a href="#">Gandhi</a>
            </li>
            <li>
              <a href="#">HITLER</a>
            </li>
            <li>
              <a href="#">SIDA</a>
            </li>
            <li>
              <a href="#">test</a>
            </li>
            <li>
              <a href="#">dragons</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`

  content.innerHTML = '';
  content.innerHTML += homePage;

  axios.get('https://conduit.productionready.io/api/articles', {
    params: {
      limit: 10,
    },
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': 'http://conduit.local',
      /*  'Access-Control-Allow-Headers': '*',*/
    },
  }).then(function (response) {

    let articles = response.data.articles;

    let ul_tag = document.getElementById('articles');
    ul_tag.innerHTML = '';
    if (articles) {
      Array.from(articles).forEach((item, index) => {
        let article_li = `<li>
              <div class="title-article">
                 <div class="info">
                   <a href="#">
                     <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                   </a>
                   <div class="d-inline-block">
                     <a href="#">
                       <p>${item.author.username}</p>
                     </a>
                     <span>${item.createdAt}</span>
                   </div>
                 </div>
                 <div class="btn like" id="article${index}" onclick="addLike(${index})">
                   <span>${item.favoritesCount}</span>
                   <i class="fa fa-heart"></i>
                 </div>
              </div>
              <div class="detail">
                <a href="#">
                  <h4>${item.title}</h4>
                </a>
                <p>${item.body}</p>
                <a href="#">
                  <span>Read more ...</span>
                </a>
              </div>
            </li>`;
        ul_tag.innerHTML += article_li;
      })
    } else {
      ul_tag.innerHTML = `<li><p class="text-primary">No article found</p></li>`;
    }

  })
      .catch(function (error) {
        notifier.alert('An error has occurred', {})
        console.log(error);
      });


}

const renderRegisterPage = () => {

  let registerPage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 col-lg-5 form-custom">

      <h1 class="title">Sign up</h1>
      <a href="javascript:void(0)" class="back-to-login" onclick="chooseRoute('sign-in',this)">
        <p>Have an account?</p>
      </a>
      <form action="" method="post" id="register-form">
        <div class="item">
          <input type="text" class="form-control" placeholder="UserName" name="reg_username" required>
        </div>
        <div class="item">
          <input type="email" class="form-control" placeholder="Email" name="reg_email" required>
        </div>
        <div class="item">
          <input type="password" class="form-control" placeholder="Password" name="reg_password" required>
        </div>
        <div class="item">
          <button class="btn btn-success-custom" type="submit">Sign up</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += registerPage;


  let myForm = document.getElementById('register-form');
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const {reg_username, reg_email, reg_password} = this.elements;

    let user_id;
    if (JSON.parse(localStorage.getItem('users')) !== null) {
      user_id = JSON.parse(localStorage.getItem('users')).length + 1;
    } else {
      user_id = 1;
    }

    let new_user = {
      id: user_id,
      username: reg_username.value,
      email: reg_email.value,
      password: reg_password.value,
      image: ''
    };

    userRegister(new_user);

  })

}

const renderLoginPage = () => {

  let loginPage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 col-lg-5 form-custom">

      <h1 class="title">Sign in</h1>
      <a href="javascript:void(0)" class="back-to-login" onclick="chooseRoute('sign-up')">
        <p>Need an account?</p>
      </a>
      <form action="#" method="post" id="login-form">
        <div class="item">
          <input type="email" name="log_email" class="form-control" placeholder="Email">
        </div>
        <div class="item">
          <input type="password" name="log_password" class="form-control" placeholder="Password">
        </div>
        <div class="item">
          <button type="submit" class="btn btn-success">Sign in</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += loginPage;


  let loginForm = document.getElementById('login-form');
  loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const {log_email, log_password} = this.elements;
    let users = JSON.parse(localStorage.getItem('users'));
    let has_user = false;
    if (users !== null) {

      Array.from(users).forEach(user => {
        if (user.email === log_email.value && user.password === log_password.value) {
          has_user = true;
          userLogin(user);
        }
      });

    }

    if (has_user === false) {
      alert('کاربری با این مشخصات وجود ندارد.')
    }


  });
}

const renderProfilePage = () => {
  let profilePage = `<div class="profile-header">
    <img src="public/image/smiley-cyrus.jpg" alt="imageProfile">
    <p class="username">username</p>
    <button class="btn">
      <i class="fa fa-cog"></i>
      Edit Profile Settings
    </button>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <nav class="article-tabs">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-my-articles-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-my-articles" type="button">My Articles
            </button>
            <button class="nav-link" id="nav-favorites-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-favorites" type="button">Favorite Articles
            </button>
          </div>
        </nav>
        <div class="tab-content list-items no-padding" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-my-articles">
            <ul>
              <li>
                <div class="title-article">
                  <div class="info">
                    <a href="#">
                      <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                    </a>
                    <div class="d-inline-block">
                      <a href="#">
                        <p>username</p>
                      </a>
                      <span>May 5, 2021</span>
                    </div>
                  </div>
                  <div class="like">
                    <span>1</span>
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="detail">
                  <a href="#">
                    <h4>Article Title</h4>
                  </a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <a href="#">
                    <span>Read more ...</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="title-article">
                  <div class="info">
                    <a href="#">
                      <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                    </a>
                    <div class="d-inline-block">
                      <a href="#">
                        <p>username</p>
                      </a>
                      <span>May 5, 2021</span>
                    </div>
                  </div>
                  <div class="like">
                    <span>1</span>
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="detail">
                  <a href="#">
                    <h4>Article Title</h4>
                  </a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <a href="#">
                    <span>Read more ...</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane list-items fade no-padding" id="nav-favorites">
            <ul>
              <li>
                <div class="title-article">
                  <div class="info">
                    <a href="#">
                      <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                    </a>
                    <div class="d-inline-block">
                      <a href="#">
                        <p>username</p>
                      </a>
                      <span>May 5, 2021</span>
                    </div>
                  </div>
                  <div class="like">
                    <span>1</span>
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="detail">
                  <a href="#">
                    <h4>Article Title</h4>
                  </a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <a href="#">
                    <span>Read more ...</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  content.innerHTML = '';
  content.innerHTML += profilePage;

}

const renderSettingPage = () => {

  let settingPage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 col-lg-5 form-custom">

      <h1 class="title">Your Settings</h1>
     
      <form action="#" id="setting-form">
        <div class="item">
          <input type="file" class="form-control" placeholder="URL of profile picture">
        </div>
        <div class="item">
          <input type="text" class="form-control" placeholder="UserName">
        </div>
        <div class="item">
          <textarea class="form-control" placeholder="Short bio about you"></textarea>
        </div>
        <div class="item">
          <input type="email" class="form-control" placeholder="Email">
        </div>
        <div class="item">
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="item">
          <button class="btn btn-success">Update Settings</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += settingPage;

}

const renderNewArticlePage = () => {

  let newArticlePage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10 col-lg-8 form-custom">

      <form action="#" method="post" id="new-article-form">
        <div class="item">
          <input type="text" name="title" class="form-control" placeholder="Article Title" required>
        </div>
        <div class="item">
          <input type="text" name="subject" class="form-control" placeholder="What's this article about?" required>
        </div>
        <div class="item">
          <textarea class="form-control" name="description" placeholder="Write your article (in markdown)" required></textarea>
        </div>
        <div class="item">
          <input type="text" name="tags" class="form-control" placeholder="Enter tags">
        </div>
        <div class="item">
          <button type="submit" class="btn btn-success">Publish Article</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += newArticlePage;


  let articleForm = document.getElementById('new-article-form');
  articleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const {title, subject, description, tags} = this.elements;

    let article_id;
    if (JSON.parse(localStorage.getItem('articles')) !== null) {
      article_id = JSON.parse(localStorage.getItem('articles')).length + 1;
    } else {
      article_id = 1;
    }

    let user_id = JSON.parse(localStorage.getItem('userLogIn')).id;
    let user_name = JSON.parse(localStorage.getItem('userLogIn')).name;

    let today = new Date();
    let new_article = {
      id: article_id,
      user_id: user_id,
      user_name: user_name,
      title: title.value,
      subject: subject.value,
      description: description.value,
      tags: tags.value,
      like: 0,
      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
    };

    saveArticle(new_article);

  })

}

const saveArticle = (article) => {

  let articles;
  let all_article = JSON.parse(localStorage.getItem('articles'));

  if (all_article !== null) {

    articles = all_article;
    articles.push(article);

  } else {
    articles = [article];
  }

  localStorage.setItem('articles', JSON.stringify(articles));
  redirect('home');
  console.log(localStorage.getItem('articles'))

}

const userRegister = (user) => {

  axios.post('https://conduit.productionready.io/api/users', {
    "user":{"password":user.password,"username":user.username,"email":user.email},
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  }).then(function (response) {
    notifier.success('Registration completed successfully', {});

    userLogin(user);

  }).catch(function (error) {
    notifier.alert('An error has occurred', {})
    console.log(error);
  });



}

const userLogin = (user) => {

  axios.get('https://conduit.productionready.io/api/users/login', {
    "user":{"email":user.email,"password":user.password},
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': 'http://conduit.local',
    },
  }).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    notifier.alert('An error has occurred', {})
    console.log(error);
  });

  let userLogIn = {
    id: user.id,
    name: user.username,
    email: user.email
  };

  if (localStorage.getItem('userLogIn') !== null) {
    localStorage.removeItem('userLogIn')
  }

  localStorage.setItem('userLogIn', JSON.stringify(userLogIn));

  redirect('home');

  console.log(localStorage.getItem('userLogIn'));

}

const logOut = (e) => {
  e.preventDefault();

  if (localStorage.getItem('userLogIn')) {
    localStorage.removeItem('userLogIn');
  }
  redirect('home');
}

const addLike = (article_id) => {
  if (!hasUser()) {
    redirect('sign-in');
  } else {
    let articles = JSON.parse(localStorage.getItem('articles'));

    if (articles) {

      let article = articles.find(v => v.id === article_id);
      article.like += 1;

      let new_articles = articles.filter(v => v.id !== article_id);
      new_articles.push(article);

      localStorage.removeItem('articles');
      localStorage.setItem('articles', JSON.stringify(new_articles));

      let like_btn = 'article' + article_id;
      document.getElementById(like_btn).querySelector('span').innerHTML = article.like;

    }
  }

}


/*console.log(localStorage.getItem('users'));
console.log(localStorage.getItem('userLogIn'));*/


