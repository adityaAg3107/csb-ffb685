parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e){return r(e)||n(e)||i(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function r(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}for(var o=[{name:"falcon and the winter soldier",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum fugit excepturi temporibus at velit.",image:"images/slider 2.PNG"},{name:"loki",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum fugit excepturi temporibus at velit.",image:"images/slider 1.PNG"},{name:"wanda vision",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum fugit excepturi temporibus at velit.",image:"images/slider 3.PNG"},{name:"raya and the last dragon",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum fugit excepturi temporibus at velit.",image:"images/slider 4.PNG"},{name:"luca",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum fugit excepturi temporibus at velit.",image:"images/slider 5.PNG"}],c=document.querySelector(".carousel"),l=[],d=0,m=function(){d>=o.length&&(d=0);var e=document.createElement("div"),t=document.createElement("img"),i=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("p");t.appendChild(document.createTextNode("")),n.appendChild(document.createTextNode(o[d].name)),r.appendChild(document.createTextNode(o[d].des)),i.appendChild(n),i.appendChild(r),e.appendChild(i),e.appendChild(t),c.appendChild(e),t.src=o[d].image,d++,e.className="slider",i.className="slide-content",n.className="movie-title",r.className="movie-des",l.push(e),l.length&&(l[0].style.marginLeft="calc(-".concat(100*(l.length-2),"% - ").concat(30*(l.length-2),"px)"))},s=0;s<3;s++)m();setInterval(function(){m()},3e3);var u=e(document.querySelectorAll(".video-card"));u.forEach(function(e){e.addEventListener("mouseover",function(){e.children[1].play()}),e.addEventListener("mouseleave",function(){e.children[1].pause()})});var p=e(document.querySelectorAll(".card-container")),f=e(document.querySelectorAll(".pre-btn")),g=e(document.querySelectorAll(".nxt-btn"));p.forEach(function(e,t){var i=e.getBoundingClientRect().width;g[t].addEventListener("click",function(){e.scrollLeft+=i-200}),f[t].addEventListener("click",function(){e.scrollLeft-=i+200})});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/csb-ffb685/source.c0f8b283.js.map