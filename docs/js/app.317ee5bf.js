!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o=document.querySelector(".remember-link"),r=document.querySelector(".back-link"),c=document.querySelector(".forgot"),s=document.querySelector(".log-in"),i=1;window.addEventListener("load",function(){setTimeout(function(){c.classList.contains("hidden")&&c.classList.remove("hidden")},300)}),window.addEventListener("load",function e(){i<"Welcome!".length?(document.querySelector(".animated-header").innerHTML+="Welcome!".charAt(i-1),i++,setTimeout(e,110)):i==="Welcome!".length&&(document.querySelector(".animated-header").innerHTML+='<span class="shine">'.concat("Welcome!".charAt(i-1),"</span>"))}),o.addEventListener("click",function(){c.classList.contains("closed")&&(c.classList.remove("closed"),s.classList.remove("open"),s.classList.add("closed"),c.classList.add("open"))}),r.addEventListener("click",function(){s.classList.contains("closed")&&(s.classList.remove("closed"),c.classList.remove("open"),c.classList.add("closed"),s.classList.add("open"))})},function(e,t,n){}]);
//# sourceMappingURL=app.317ee5bf.js.map