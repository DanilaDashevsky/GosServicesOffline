!function(){function t(t){var e=this;document.getElementById(this.container).insertAdjacentHTML("beforeend",'<div id="re-captcha"></div>'),window.verifyCallbackRecaptcha=function(t){e.recaptchaHash=t},window.onloadCallbackRecaptcha=function(){grecaptcha.render("re-captcha",{sitekey:t,callback:verifyCallbackRecaptcha}),document.dispatchEvent(e.initEvent)},n.call(this,"https://www.google.com/recaptcha/api.js?onload=onloadCallbackRecaptcha&render=explicit")}function e(){console.log("Init FunCaptcha!!!")}function a(){let t=this;document.getElementById(t.container).innerHTML="",this.settings.captchaSimpleAttemptsCount&&this.countAttempt>=this.settings.captchaSimpleAttemptsCount?c.call(this):s.call(t,"GET",this.options.apiUrl+"/api/lk/v1/captcha",null,(function(e){t.epguCaptchaId=e.captchaId;var a='<div id="epgu-captcha"><div class="img"><img src="'+(t.options.apiUrl+"/api/lk/v1/captcha/get?id="+t.epguCaptchaId)+'" /></div><div class="input"><label for="epgu-captcha-value">'+t.settings.labelText+'</label><input type="text" id="epgu-captcha-value" /></div></div>';t.countAttempt?(document.getElementById(t.container).classList.add("captcha-error"),t.settings.errorText&&(a+='<div class="epgu-captcha-error" id="epgu-captcha-error">'+t.settings.errorText+"</div>")):document.getElementById(t.container).classList.remove("captcha-error"),document.getElementById(t.container).innerHTML=a,document.getElementById("epgu-captcha-value").addEventListener("focus",(function(){this.parentNode.classList.add("focus")}),!0),document.getElementById("epgu-captcha-value").addEventListener("blur",(function(){this.value||this.parentNode.classList.remove("not-empty"),this.parentNode.classList.remove("focus")}),!0),document.getElementById("epgu-captcha-value").addEventListener("keyup",(function(e){let a=Boolean(this.value);t.canBeCheck=a,document.dispatchEvent(a?t.buttonActivityEvent.isActive:t.buttonActivityEvent.isDisabled),this.value?(t.canBeCheck=!0,document.getElementById(t.container).classList.remove("captcha-error"),this.parentNode.classList.add("not-empty"),document.getElementById("epgu-captcha-error")&&(document.getElementById("epgu-captcha-error").style.display="none")):(this.parentNode.classList.remove("not-empty"),document.getElementById("epgu-captcha-error")&&(document.getElementById("epgu-captcha-error").style.display="block"),t.countAttempt&&document.getElementById(t.container).classList.add("captcha-error"))}),!0),document.dispatchEvent(t.initEvent)}))}function c(){this.settings.captchaIncrementTime&&(this.settings.captchaBaseTime+=this.settings.captchaIncrementTime);var t=this,e=this.settings.captchaBaseTime;i.call(this,e--),t.isTimer=!0,this.interval=window.setInterval((function(){i.call(t,e--),e<0&&(window.clearInterval(t.interval),t.reload(),t.isTimer=!1)}),1e3)}function i(t){var e,a;document.getElementById(this.container).innerHTML='<div class="count">Повторный ввод возможен будет через <span>'+(a=[2,0,1,1,1,2],(e=t)+" "+["секунду","секунды","секунд"][e%100>4&&e%100<20?2:a[e%10<5?e%10:5]]+"</span></div>")}function n(t){var e=document.createElement("script");e.type="text/javascript",e.src=t,document.getElementsByTagName("head")[0].appendChild(e)}function s(t,e,a,c,i){let n=this,s=new XMLHttpRequest,o=a?JSON.stringify(a):null;s.open(t,e,!0),s.setRequestHeader("Content-type","application/json; charset=utf-8"),s.setRequestHeader("Pragma","no-cache"),s.setRequestHeader("Expires","-1"),s.setRequestHeader("Cache-Control","no-cache, no-store, must-revalidate"),n.captchaSession&&s.setRequestHeader("captchaSession",n.captchaSession),s.onreadystatechange=function(){if(4===s.readyState)if(200===s.status)c(JSON.parse(s.responseText));else if(i){let t;try{t=JSON.parse(s.responseText)}catch(e){t={}}i(t)}},s.send(o)}function o(t){let e=this,a=document.getElementById(e.container),c="",i="";if(e.errorState=!0,"ESIA-00005"===t.code)c="Слишком много попыток ввода",i="Вы несколько раз ввели код неправильно. Обновите страницу, чтобы получить новый код";else c="Страница устарела",i="Время на ввод кода вышло. Обновите страницу, чтобы получить новый код";let n='<div class="esia-captcha-error"><div class="esia-captcha-error__circle"><div class="esia-captcha-error__cross"></div></div><h3 class="esia-captcha-error__title">'+c+'</h3><p class="esia-captcha-error__description">'+i+'</p><div id="esia-captcha-error__refresh" class="esia-captcha-error__refresh">Обновить</div></div>';n+='<style>.esia-captcha-error {display: flex; flex-direction: column; align-items: center;}.esia-captcha-error__circle {display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border: 8px solid #c9d8fa; border-radius: 100%; margin-bottom: 24px;}.esia-captcha-error__cross { position: relative; width: 40px; height: 40px;}.esia-captcha-error__cross:before, .esia-captcha-error__cross:after {position: absolute; left: 15px; content: " "; height: 40px; width: 8px; background-color: #c9d8fa; border-radius: 6px;}.esia-captcha-error__cross:before {transform: rotate(45deg);}.esia-captcha-error__cross:after {transform: rotate(-45deg);}.esia-captcha-error__title {max-width: 320px; line-height: 32px; margin-bottom: 12px; font-size: 24px; font-weight: bold; text-align: center;}.esia-captcha-error__description {max-width: 320px; line-height: 24px; text-align: center;}.esia-captcha-error__refresh {height: 52px; border-radius: 8px; border: none; padding: 14px 40px; box-sizing: border-box; font-size: 16px; line-height: 24px; color: #fff; background: #0d4cd3; cursor: pointer; width: 100%; text-align: center; margin-top: 40px; user-select: none;}.esia-captcha-error__refresh_disabled {background: #e5eaf5; pointer-events: none;}.esia-captcha-error__refresh:hover:not(.esia-captcha-error__refresh_disabled) {background: #1d5deb;}</style>',a.innerHTML=n;const s=a.querySelector("#esia-captcha-error__refresh");function o(t){"Enter"===t.code&&s.click()}s.onclick=function(t){t.target.classList.add("esia-captcha-error__refresh_disabled"),document.removeEventListener("keyup",o),e.init(e.container,(function(){t.target.classList.remove("esia-captcha-error__refresh_disabled")}))},document.addEventListener("keyup",o)}function r(t){let e=this;p.call(e,"image",(function(a){let c='<div id="esia-captcha" class="esia-captcha"><img class="esia-captcha__img" alt="" id="esia-captcha-img" src="'+window.URL.createObjectURL(a)+'""/><div class="esia-captcha__buttons" id="esia-captcha-buttons"></div><label for="esia-captcha-value" class="esia-captcha__label">Код</label><input type="text" class="esia-captcha__input" id="esia-captcha-value" /></div>';c+="<style>.esia-captcha {width: 100%;}.esia-captcha__img {width: 100%; display: block; margin-bottom: 16px;}.esia-captcha__label {position: unset !important; font-weight: normal; font-size: 14px; margin-bottom: 4px; text-align: left; display: block; line-height: 20px;}.esia-captcha__buttons {margin-bottom: 32px; display: flex;}.esia-captcha__button {color: #0d4cd3; cursor: pointer; display: flex; align-items: center; line-height: 20px; border: none; background: none; user-select: none; font-size: 14px;}.esia-captcha__button-icon {animation: none; margin-right: 8px}.esia-captcha__button_disabled {pointer-events: none;}.esia-captcha__input {background: #f5f7fa; border-radius: 4px; height: 52px; padding: 14px 16px; border: none; display: block; outline: none; width: 100%; font-size: 16px; line-height: 24px;}.esia-captcha__input_error {background: #ee3f5829;}.esia-captcha__input:focus {border: none; outline: none;}.esia-captcha__button:not(:last-child) {margin-right: 32px}</style>";let i=document.getElementById(e.container);i.innerHTML=c;let n,s,r=i.querySelector("#esia-captcha-buttons"),h=!1;if(t.renew){const t=document.createElement("div");t.id="esia-captcha-renew",t.classList.add("esia-captcha__button"),t.innerHTML+='<svg class="esia-captcha__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#E4ECFD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4975 6.74923C15.4974 6.94847 15.4182 7.1395 15.2772 7.28021L13.057 9.49702L11.998 8.43463L12.935 7.49915H12V7.49995C9.51472 7.49995 7.5 9.51467 7.5 11.9999C7.5 14.4852 9.51472 16.4999 12 16.4999C14.4853 16.4999 16.5 14.4852 16.5 11.9999H18C18 15.3137 15.3137 17.9999 12 17.9999C8.68629 17.9999 6 15.3137 6 11.9999C6 8.68624 8.68629 5.99995 12 5.99995V5.99915H12.9368L11.9982 5.06091L13.0578 3.99915L15.2776 6.21813C15.4184 6.35892 15.4975 6.55 15.4975 6.74923Z" fill="#0D4CD3"/></svg>Другой код',r.appendChild(t),i.querySelector("#esia-captcha-renew").onclick=function(t){h||(h=!0,t.target.classList.add("esia-captcha__button_disabled"),l.call(e,(function(e){i.querySelector("#esia-captcha-img").src=window.URL.createObjectURL(e),s&&s.removeAttribute("src"),h=!1,t.target.classList.remove("esia-captcha__button_disabled")}),(function(a){h=!1,t.target.classList.remove("esia-captcha__button_disabled"),o.call(e,a)})))}}if(t.voice){const t=document.createElement("div");t.id="esia-captcha-listen",t.classList.add("esia-captcha__button"),t.innerHTML+='<svg class="esia-captcha__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#E4ECFD"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1216 12.7302L9.62374 16.8879C9.12302 17.2083 8.5 16.8035 8.5 16.1577L8.5 7.84229C8.5 7.19651 9.12302 6.79166 9.62375 7.11206L16.1216 11.2698C16.6262 11.5926 16.6261 12.4074 16.1216 12.7302Z" fill="#0D4CD3"/></svg>Прослушать<audio id="player"><source id="player-source" type="audio/wav" /></audio>',r.appendChild(t),n=i.querySelector("#player"),s=n.querySelector("#player-source"),i.querySelector("#esia-captcha-listen").onclick=function(t){h||(t.target.classList.add("esia-captcha__button_disabled"),s.src?(n.play(),t.target.classList.remove("esia-captcha__button_disabled")):(h=!0,p.call(e,"voice",(function(e){s.src=window.URL.createObjectURL(e),n.load(),n.play(),h=!1,t.target.classList.remove("esia-captcha__button_disabled")}),(function(a){h=!1,t.target.classList.remove("esia-captcha__button_disabled"),o.call(e,a)}))))}}i.querySelector("#esia-captcha-value").onkeyup=function(){let t=Boolean(this.value);e.canBeCheck=t,document.dispatchEvent(t?e.buttonActivityEvent.isActive:e.buttonActivityEvent.isDisabled)},e.errorState=!1,document.dispatchEvent(e.initEvent)}),(function(t){o.call(e,t)}))}function p(t,e,a){let c=new XMLHttpRequest,i=this.options.apiUrl+"/captcha/api/public/v2/"+t;"voice"===t&&(i=this.options.apiUrl+"/captcha-audio-service/api/public/v2/"+t),c.open("GET",i,!0),c.setRequestHeader("captchaSession",this.captchaSession),c.setRequestHeader("Pragma","no-cache"),c.setRequestHeader("Expires","-1"),c.setRequestHeader("Cache-Control","no-cache, no-store, must-revalidate"),c.onloadstart=function(){c.responseType="blob"},c.onreadystatechange=function(){if(4===c.readyState)if(200===c.status)e(c.response);else if(a){let t;try{t=JSON.parse(c.responseText)}catch(e){t={}}a(t)}},c.send(null)}function l(t,e){let a=this;s.call(a,"GET",a.options.apiUrl+"/captcha/api/public/v2/renew",null,(function(c){a.captchaSession=c.captchaSession,p.call(a,"image",t,e)}),e)}this.CaptchaPlugin=function(t){this.settings=Object.assign({labelText:"",errorText:"",captchaSimpleAttemptsCount:null,captchaBaseTime:null,captchaIncrementTime:null,widgetUri:""},t),this.options={apiUrl:this.settings.widgetUri||"https://esia.gosuslugi.ru",typeCaptcha:{recaptcha:"recaptcha",funcaptcha:"funcaptcha",epgucaptcha:"epgucaptcha",esiacaptcha:"esiacaptcha"},errorType:{time:"time",attempts:"attempts"}},this.typeCaptcha=null,this.recaptchaHash=null,this.epguCaptchaId=null,this.captchaSession=null,this.canBeCheck=!1,this.errorState=!1,this.initEvent=document.createEvent("CustomEvent"),this.buttonActivityEvent={isDisabled:document.createEvent("CustomEvent"),isActive:document.createEvent("CustomEvent")},this.countAttempt=0,this.isTimer=!1,this.settings.captchaIncrementTime&&(this.settings.captchaBaseTime-=this.settings.captchaIncrementTime)},CaptchaPlugin.prototype.init=function(c,i){let n=this;this.container=c,s.call(n,"GET",n.options.apiUrl+"/captcha/api/public/v2/type",null,(function(c){switch(n.typeCaptcha=c.captchaType,c.captchaSession&&(n.captchaSession=c.captchaSession),n.initEvent.initCustomEvent("initCaptcha",!1,!1,{typeCaptcha:c.captchaType}),n.buttonActivityEvent.isDisabled.initCustomEvent("buttonActivityChange",!1,!1,!1),n.buttonActivityEvent.isActive.initCustomEvent("buttonActivityChange",!1,!1,!0),n.typeCaptcha){case n.options.typeCaptcha.recaptcha:t.call(n,c.sitekey);break;case n.options.typeCaptcha.funcaptcha:e.call(n);break;case n.options.typeCaptcha.esiacaptcha:r.call(n,{renew:!c.hasOwnProperty("renew")||c.renew,voice:!c.hasOwnProperty("voice")||c.voice});break;default:a.call(n)}"function"==typeof i&&i({typeCaptcha:n.typeCaptcha}),document.dispatchEvent(n.buttonActivityEvent.isDisabled)}))},CaptchaPlugin.prototype.check=function(t){let e=this,a={};a.captchaType=e.typeCaptcha;let c=function(t){};if(this.isTimer)t();else{switch(e.typeCaptcha){case e.options.typeCaptcha.recaptcha:a.captchaResponse=e.recaptchaHash?e.recaptchaHash:"";break;case e.options.typeCaptcha.funcaptcha:break;case e.options.typeCaptcha.esiacaptcha:let n=document.getElementById("esia-captcha-value").value;if(!n){t();break}c=function(t){o.call(e,t)},a.answer=n,e.canBeCheck=!1;break;default:var i=document.getElementById("epgu-captcha-value").value;if(!i)return void t();a.captchaID=e.epguCaptchaId,a.answer=i,e.canBeCheck=!1}s.call(e,"POST",e.options.apiUrl+"/captcha/api/public/v2/verify",a,(function(e){t(e.verify_token)}),c)}},CaptchaPlugin.prototype.reload=function(){if(this.countAttempt=0,this.isTimer=!1,window.clearInterval(this.interval),this.typeCaptcha===this.options.typeCaptcha.epgucaptcha)a.call(this)},CaptchaPlugin.prototype.setError=function(){if(!this.isTimer){if(this.countAttempt++,this.typeCaptcha===this.options.typeCaptcha.epgucaptcha)a.call(this)}}}();
