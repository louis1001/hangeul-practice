(self.webpackChunkhangeul_practice=self.webpackChunkhangeul_practice||[]).push([[678],{6558:function(e,n,t){"use strict";t.r(n),t.d(n,{Head:function(){return c}});var r=t(5785),a=t(7294),o=t(6943),i=t.n(o);t(346);let u=[];n.default=()=>{const{0:e,1:n}=(0,a.useState)(!0),{0:t,1:o}=(0,a.useState)(""),{0:c,1:l}=(0,a.useState)([]),s=()=>{if(0===u.length)return void o("");l([]);let e=Math.trunc(Math.random()*u.length);console.log(e);const n=u[e];o(n),(e=>{let n=i().disassemble(e);l((0,r.Z)(new Set(n)))})(n)};return(0,a.useEffect)((()=>{(async function(){return await fetch("https://raw.githubusercontent.com/uniglot/korean-word-ipa-dictionary/main/scripts/lookup-tables/kodict_entry.txt").then((e=>e.text())).then((e=>e.split("\n").slice(1)))})().then((e=>{n(!1),u=e,s()})).catch(console.error)}),[]),a.createElement("main",null,e?a.createElement("p",null,"Loading..."):a.createElement(a.Fragment,null),a.createElement("div",{id:"jamo-container"},c.map((e=>a.createElement("span",{key:e,className:"jamo-item"},e)))),a.createElement("h1",null,t),a.createElement("button",{onClick:s},"Random"),a.createElement("button",{onClick:()=>function(e){let n=new SpeechSynthesisUtterance;n.text=e,n.lang="ko",n.volume=1,speechSynthesis.speak(n)}(t)},"Play"))};const c=()=>a.createElement(a.Fragment,null,a.createElement("title",null,"Hangeul Practice"),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}))},346:function(e){(()=>{"use strict";var n={d:(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){for(var n=[],t=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);128>o?n[t++]=o:(2048>o?n[t++]=o>>6|192:(55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),n[t++]=o>>18|240,n[t++]=o>>12&63|128):n[t++]=o>>12|224,n[t++]=o>>6&63|128),n[t++]=63&o|128)}var i=0;for(t=0;t<n.length;t++)i+=n[t],i=a(i,"+-a^+6");return i=a(i,"+-3^+b+-f"),0>(i^=0)&&(i=2147483648+(2147483647&i)),(i%=1e6).toString()+"."+i.toString()}n.r(t),n.d(t,{default:()=>g,generateRequestUrl:()=>u,isSupported:()=>l,normaliseResponse:()=>s,setCORS:()=>h,translate:()=>d});var a=function(e,n){for(var t=0;t<n.length-2;t+=3){var r=n.charAt(t+2);r="a"<=r?r.charCodeAt(0)-87:Number(r),r="+"==n.charAt(t+1)?e>>>r:e<<r,e="+"==n.charAt(t)?e+r:e^r}return e},o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},o.apply(this,arguments)},i={client:"gtx",from:"auto",to:"en",hl:"en",tld:"com"};function u(e,n){var t=o(o({},i),n),a={client:t.client,sl:t.from,tl:t.to,hl:t.hl,ie:"UTF-8",oe:"UTF-8",otf:"1",ssel:"0",tsel:"0",kc:"7",q:e,tk:r(e)},u=new URLSearchParams(a);return["at","bd","ex","ld","md","qca","rw","rm","ss","t"].forEach((function(e){return u.append("dt",e)})),"https://translate.google.".concat(t.tld,"/translate_a/single?").concat(u)}var c={auto:"Automatic",af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano",ny:"Chichewa",zh:"Chinese Simplified","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",iw:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",rw:"Kinyarwanda",ko:"Korean",ku:"Kurdish (Kurmanji)",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",or:"Odia (Oriya)",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",ro:"Romanian",ru:"Russian",sm:"Samoan",gd:"Scots Gaelic",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tg:"Tajik",ta:"Tamil",tt:"Tatar",te:"Telugu",th:"Thai",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",ur:"Urdu",ug:"Uyghur",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"},l=function(e){return Boolean(c[e])};function s(e,n){void 0===n&&(n=!1);var t={text:"",pronunciation:"",from:{language:{didYouMean:!1,iso:""},text:{autoCorrected:!1,value:"",didYouMean:!1}}};if(e[0].forEach((function(e){e[0]?t.text+=e[0]:e[2]&&(t.pronunciation+=e[2])})),e[2]===e[8][0][0]?t.from.language.iso=e[2]:(t.from.language.didYouMean=!0,t.from.language.iso=e[8][0][0]),e[7]&&e[7][0]){var r=e[7][0];r=(r=r.replace(/<b><i>/g,"[")).replace(/<\/i><\/b>/g,"]"),t.from.text.value=r,!0===e[7][5]?t.from.text.autoCorrected=!0:t.from.text.didYouMean=!0}return n&&(t.raw=e),t}var f="",h=function(e){return f=e,d};function d(e,n){return void 0===n&&(n={}),t=this,void 0,a=function(){var t,r;return function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,(function(a){switch(a.label){case 0:return t=u(e,n),[4,fetch("".concat(f).concat(t))];case 1:if(!(r=a.sent()).ok)throw new Error("Request failed");return[4,r.json()];case 2:return[2,s(a.sent(),n.raw)]}}))},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{u(a.next(e))}catch(e){n(e)}}function i(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}u((a=a.apply(t,[])).next())}));var t,r,a}const g=d;e.exports=t})()},6943:function(e,n,t){var r;!function(){"use strict";var a,o,i,u,c,l,s=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],f=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ",["ㅗ","ㅏ"],["ㅗ","ㅐ"],["ㅗ","ㅣ"],"ㅛ","ㅜ",["ㅜ","ㅓ"],["ㅜ","ㅔ"],["ㅜ","ㅣ"],"ㅠ","ㅡ",["ㅡ","ㅣ"],"ㅣ"],h=["","ㄱ","ㄲ",["ㄱ","ㅅ"],"ㄴ",["ㄴ","ㅈ"],["ㄴ","ㅎ"],"ㄷ","ㄹ",["ㄹ","ㄱ"],["ㄹ","ㅁ"],["ㄹ","ㅂ"],["ㄹ","ㅅ"],["ㄹ","ㅌ"],["ㄹ","ㅍ"],["ㄹ","ㅎ"],"ㅁ","ㅂ",["ㅂ","ㅅ"],"ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],d=44032;function g(e){for(var n=e.length,t={0:0},r=0;r<n;r++)e[r]&&(t[e[r].charCodeAt(0)]=r);return t}function p(e){for(var n,t,r=e.length,a={},o=0;o<r;o++)n=e[o][0].charCodeAt(0),t=e[o][1].charCodeAt(0),void 0===a[n]&&(a[n]={}),a[n][t]=e[o][2].charCodeAt(0);return a}function m(e){return void 0!==a[e]}function v(e){return void 0!==o[e]}function y(e){return void 0!==i[e]}function b(e){return void 0!==u[e]}function C(e){return 44032<=e&&e<=55203}function w(e,n){return!(!l[e]||!l[e][n])&&l[e][n]}function A(e,n){return!(!c[e]||!c[e][n])&&c[e][n]}a=g(["ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄸ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅃ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]),o=g(["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]),i=g(["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"]),u=g(["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"]),c=p([["ㄱ","ㅅ","ㄳ"],["ㄴ","ㅈ","ㄵ"],["ㄴ","ㅎ","ㄶ"],["ㄹ","ㄱ","ㄺ"],["ㄹ","ㅁ","ㄻ"],["ㄹ","ㅂ","ㄼ"],["ㄹ","ㅅ","ㄽ"],["ㄹ","ㅌ","ㄾ"],["ㄹ","ㅍ","ㄿ"],["ㄹ","ㅎ","ㅀ"],["ㅂ","ㅅ","ㅄ"]]),l=p([["ㅗ","ㅏ","ㅘ"],["ㅗ","ㅐ","ㅙ"],["ㅗ","ㅣ","ㅚ"],["ㅜ","ㅓ","ㅝ"],["ㅜ","ㅔ","ㅞ"],["ㅜ","ㅣ","ㅟ"],["ㅡ","ㅣ","ㅢ"]]);var S=function(e,n){if(null===e)throw new Error("Arguments cannot be null");"object"==typeof e&&(e=e.join(""));for(var t,r,a,c,l,g=[],p=e.length,b=0;b<p;b++){var w=[];C(c=e.charCodeAt(b))?(r=((c-=d)-(a=c%28))/28%21,t=parseInt((c-a)/28/21),w.push(s[t]),"object"==typeof f[r]?w=w.concat(f[r]):w.push(f[r]),a>0&&("object"==typeof h[a]?w=w.concat(h[a]):w.push(h[a]))):m(c)?"string"==typeof(l=v(c)?s[o[c]]:h[u[c]])?w.push(l):w=w.concat(l):y(c)?"string"==typeof(l=f[i[c]])?w.push(l):w=w.concat(l):w.push(e.charAt(b)),n?g.push(w):g=g.concat(w)}return g},k=function(e){return"string"!=typeof e?"":(e=S(e)).join("")},j=function(e){"string"==typeof e&&(e=S(e));var n,t,r=[],a=e.length,c=0,l=-1,s=!1;function f(n){var t,a,c,f,h=0,g="";if(s=!1,!(l+1>n))for(var p=1;;p++){if(1===p){if(y(t=e[l+p].charCodeAt(0)))return l+p+1<=n&&y(a=e[l+p+1].charCodeAt(0))?(r.push(String.fromCharCode(w(t,a))),void(l=n)):(r.push(e[l+p]),void(l=n));if(!v(t))return r.push(e[l+p]),void(l=n);g=e[l+p]}else if(2===p){if(v(a=e[l+p].charCodeAt(0)))return t=A(t,a),g=String.fromCharCode(t),r.push(g),void(l=n);g=String.fromCharCode(28*(21*o[t]+i[a])+d)}else 3===p?(w(a,c=e[l+p].charCodeAt(0))?a=w(a,c):h=c,g=String.fromCharCode(28*(21*o[t]+i[a])+u[h]+d)):4===p?(h=A(h,f=e[l+p].charCodeAt(0))?A(h,f):f,g=String.fromCharCode(28*(21*o[t]+i[a])+u[h]+d)):5===p&&(h=A(h,f=e[l+p].charCodeAt(0)),g=String.fromCharCode(28*(21*o[t]+i[a])+u[h]+d));if(l+p>=n)return r.push(g),void(l=n)}}for(var h=0;h<a;h++)v(n=e[h].charCodeAt(0))||y(n)||b(n)?(0===c?v(n)?c=1:y(n)&&(c=4):1==c?y(n)?c=2:A(t,n)?c=5:f(h-1):2==c?b(n)?c=3:y(n)?w(t,n)||(f(h-1),c=4):(f(h-1),c=1):3==c?b(n)?!s&&A(t,n)?s=!0:(f(h-1),c=1):v(n)?(f(h-1),c=1):y(n)&&(f(h-2),c=2):4==c?y(n)?w(t,n)?(f(h),c=0):f(h-1):(f(h-1),c=1):5==c&&(y(n)?(f(h-2),c=2):(f(h-1),c=1)),t=n):(f(h-1),f(h),c=0);return f(h-1),r.join("")};function x(e){this.string=e,this.disassembled=S(e).join("")}x.prototype.search=function(e){return S(e).join("").indexOf(this.disassembled)};var E={disassemble:S,d:S,disassembleToString:k,ds:k,assemble:j,a:j,search:function(e,n){var t=S(e).join(""),r=S(n).join("");return t.indexOf(r)},rangeSearch:function(e,n){var t,r=S(e).join(""),a=S(n).join(""),o=S(e,!0),i=new RegExp(a,"gi"),u=[];if(!n.length)return[];for(;t=i.exec(r);)u.push(t.index);function c(e){for(var n=0,t=0;n<o.length;++n)if(e<(t+=o[n].length))return n}function l(e){for(var n=0,t=0;n<o.length;++n)if(t+=o[n].length,e+a.length<=t)return n}return u.map((function(e){return[c(e),l(e)]}))},Searcher:x,endsWithConsonant:function(e){"object"==typeof e&&(e=e.join(""));var n=e.charCodeAt(e.length-1);if(C(n)){if((n-=d)%28>0)return!0}else if(m(n))return!0;return!1},endsWith:function(e,n){return S(e).pop()===n},isHangul:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),C(e)},isComplete:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),C(e)},isConsonant:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),m(e)},isVowel:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),y(e)},isCho:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),v(e)},isJong:function(e){return"string"==typeof e&&(e=e.charCodeAt(0)),b(e)},isHangulAll:function(e){if("string"!=typeof e)return!1;for(var n=0;n<e.length;n++)if(!C(e.charCodeAt(n)))return!1;return!0},isCompleteAll:function(e){if("string"!=typeof e)return!1;for(var n=0;n<e.length;n++)if(!C(e.charCodeAt(n)))return!1;return!0},isConsonantAll:function(e){if("string"!=typeof e)return!1;for(var n=0;n<e.length;n++)if(!m(e.charCodeAt(n)))return!1;return!0},isVowelAll:function(e){if("string"!=typeof e)return!1;for(var n=0;n<e.length;n++)if(!y(e.charCodeAt(n)))return!1;return!0},isChoAll:function(e){if("string"!=typeof e)return!1;for(var n=0;n<e.length;n++)if(!v(e.charCodeAt(n)))return!1;return!0},isJongAll:function(e){if("string"!=typeof e)return!1;for(var n=0;n<e.length;n++)if(!b(e.charCodeAt(n)))return!1;return!0}};void 0===(r=function(){return E}.call(n,t,n,e))||(e.exports=r)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-0f8a726cc2a945d99579.js.map