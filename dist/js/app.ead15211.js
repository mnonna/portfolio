(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],f=0,g=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&g.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"01d3":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{ref:"portfolio__project",staticClass:"portfolio-projects-container",attrs:{fluid:"",id:"projects"}},[o("v-layout",{attrs:{column:"","align-center":"","fill-height":""}},[o("v-col",{staticClass:"projects-main-header d-flex justify-center",attrs:{lg10:""}},[o("v-flex",[o("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[o("h2",[t._v("Check out some of my projects")])])],1)],1),t._l(t.projectAssets,(function(t){return o("v-container",{key:t.title,staticClass:"project-container d-flex align-center justify-center",attrs:{fluid:""}},[o("singleProject",{ref:"project",refInFor:!0,attrs:{projectTitle:t.title,projectDescription:t.desc,imagePaths:t.imgPaths,githubLink:t.githubLink}})],1)}))],2)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"project-info-main d-flex col-12 col-sm-8 col-lg-10 col-xl-8"},[a("v-flex",{ref:"single__project__div",staticClass:"project-info-wrapper"},[a("v-layout",{staticClass:"project-info-wrapper-layout flex-wrap",attrs:{row:"","align-center":"","fill-height":""}},[a("v-col",{staticClass:"project-info",attrs:{lg:"6"}},[a("v-flex",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{column:"","align-center":"","justify-space-around":"","fill-height":""}},[a("h2",{ref:"project__title"},[t._v(t._s(t.projectTitle))]),a("p",{ref:"project__desc"},[t._v(" "+t._s(t.projectDescription)+" ")]),a("v-col",{ref:"project__github",staticClass:"project-github-repo",attrs:{sm:"12",lg:"6"}},[a("v-flex",{attrs:{"align-center":"","justify-space-around":""}},[a("v-layout",{staticClass:"github-ref",attrs:{"align-center":"","justify-center":"","fill-height":""}},[a("v-icon",{staticClass:"github-logo"},[t._v("mdi-github")]),a("a",{attrs:{href:t.githubLink}},[t._v(t._s(t.githubLink))])],1)],1)],1)],1)],1)],1),a("v-col",{staticClass:"project-stack",attrs:{sm:"12",lg:"6"}},[a("v-flex",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("h2",{ref:"project__text"},[t._v("Tech stack")])])],1)],1),a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[a("v-layout",{staticClass:"flex-wrap",attrs:{row:"","align-center":"","justify-space-around":""}},t._l(t.imagePaths,(function(t){return a("v-col",{key:t,staticClass:"col-xs-12 col-sm-6 col-md-4"},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-img",{ref:"stack__logo",refInFor:!0,staticClass:"profile-img",attrs:{src:o("1771")("./"+t),"max-width":"100px","max-height":"100px"}})],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)},i=[],s=(o("4160"),o("159b"),o("cffa")),c=o("1dac"),l={name:"singleProject",props:{projectTitle:String,projectDescription:String,githubLink:String,imagePaths:Array},mounted:function(){s["a"].registerPlugin(c["a"]);var t=this.$refs,e=t.single__project__div,o=t.project__text,a=t.project__title,n=t.project__desc,r=t.project__github,i=t.stack__logo,l=s["a"].timeline({scrollTrigger:{trigger:e,toggleActions:"restart pause reverse pause",start:"10px 40%",endTrigger:"html",end:"bottom top"}});l.fromTo(e,{left:-2e3},{left:0,duration:.4}).fromTo(a,{opacity:0},{opacity:1,duration:.2}).fromTo(o,{opacity:0},{opacity:1,duration:.2}).fromTo(n,{opacity:0},{opacity:1,duration:.2}).fromTo(r,{opacity:0},{opacity:1,duration:.2}),i.forEach((function(t,e){l.fromTo(t.$el,{opacity:0,x:50},{opacity:1,x:0,duration:.1})}))}},u=l,f=(o("c100"),o("2877")),g=o("6544"),p=o.n(g),m=o("62ad"),h=o("0e8f"),d=o("132d"),v=o("adda"),b=o("a722"),_=Object(f["a"])(u,r,i,!1,null,"6a455e92",null),B=_.exports;p()(_,{VCol:m["a"],VFlex:h["a"],VIcon:d["a"],VImg:v["a"],VLayout:b["a"]});var y={components:{singleProject:B},data:function(){return{projectAssets:[{title:"Hotel reception system app",desc:"I've developed and app which supports hotel Staff and allows guest to book desired rooms and manage their reservations. It distinguishes 5 user types - admin,receptionist, cleaning staff, service staff and hotel guest. Admin is allowed to do all the CRUD operations (either reservations and rooms). Receptionist can only manage reservations and check available rooms. Staff can manage their activities (cleaning and service).",imgPaths:["vue_logo.png","laravel_logo.png","vuex_logo.png","html5_logo.png","bootstrap_logo.png","sass_logo.png"],githubLink:"https://github.com/mnonna/EHC-App"},{title:"Swisher app",desc:"Simple Vue app. It allows you to search some infos about NBA teams. It's using an NBA Teams API by Rapid API.",imgPaths:["vue_logo.png","vuex_logo.png","html5_logo.png","sass_logo.png"],githubLink:"https://github.com/mnonna/swisher"},{title:"Wordpress SIM plugin",desc:"Wordpress plugin for managing SIM cards for woocommerce store. Written in PHP (Wordpress CMS) with support of HTML, CSS and jQuery. It also integrates with seller's allegro account",imgPaths:["php_logo.png","wordpress_logo.png","mysql_logo.png","html5_logo.png","css3_logo.jpg","jquery_logo.jpg"],githubLink:"https://github.com/mnonna/wp-sim-manager"}]}}},x=y,j=(o("1b69"),o("a523")),A=Object(f["a"])(x,a,n,!1,null,"9b33d1e2",null);e["default"]=A.exports;p()(A,{VCol:m["a"],VContainer:j["a"],VFlex:h["a"],VLayout:b["a"]})},"07aa":function(t,e,o){t.exports=o.p+"img/wordpress_logo.1052e04b.png"},1739:function(t,e,o){t.exports=o.p+"img/jquery_logo.07792983.jpg"},1771:function(t,e,o){var a={"./bootstrap_logo.png":"2714","./css3_logo.jpg":"e1e4","./facebook.svg":"aaa3","./github.svg":"387e","./github_logo.png":"8125","./html5_logo.png":"2821","./jquery_logo.jpg":"1739","./laravel_logo.png":"4880","./logo.png":"cf05","./logo.svg":"9b19","./mysql_logo.png":"4d6e","./office-1209640_1920.jpg":"e8d0","./php_logo.png":"2d8e","./profile.jpg":"3a19","./sass_logo.png":"706c","./vue_logo.png":"42fe","./vuex_logo.png":"9e0b","./wordpress_logo.png":"07aa"};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="1771"},"1b69":function(t,e,o){"use strict";var a=o("9f82"),n=o.n(a);n.a},"21bb":function(t,e,o){"use strict";var a=o("2dad"),n=o.n(a);n.a},2714:function(t,e,o){t.exports=o.p+"img/bootstrap_logo.2f581be4.png"},2821:function(t,e,o){t.exports=o.p+"img/html5_logo.ca1a2302.png"},"29c8":function(t,e,o){"use strict";var a=o("b95c"),n=o.n(a);n.a},"2d8e":function(t,e,o){t.exports=o.p+"img/php_logo.0a647fc5.png"},"2dad":function(t,e,o){},"387e":function(t,e,o){t.exports=o.p+"img/github.617870e4.svg"},"3a19":function(t,e,o){t.exports=o.p+"img/profile.b304db9f.jpg"},4039:function(t,e,o){},"42fe":function(t,e){t.exports="data:image/png;base64,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"},4880:function(t,e,o){t.exports=o.p+"img/laravel_logo.f5b5d6f6.png"},"4a1e":function(t,e,o){},"4d6e":function(t,e,o){t.exports=o.p+"img/mysql_logo.4ccd3dff.png"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("frontPageHello"),o("portfolioProjects"),o("contactSection"),o("appFooter")],1)},r=[],i=(o("21bb"),o("2877")),s=o("6544"),c=o.n(s),l=o("7496"),u={},f=Object(i["a"])(u,n,r,!1,null,null,null),g=f.exports;c()(f,{VApp:l["a"]});var p=o("8c4f");a["a"].use(p["a"]),a["a"].component("frontPageHello",o("9b54").default),a["a"].component("portfolioProjects",o("01d3").default),a["a"].component("appFooter",o("93ac").default),a["a"].component("contactSection",o("f410").default);var m=[{path:"/",name:"Home",component:g}],h=new p["a"]({routes:m}),d=h,v=o("2f62");a["a"].use(v["a"]);var b=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_=o("f309");o("5363");a["a"].use(_["a"]);var B=new _["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:d,store:b,vuetify:B,render:function(t){return t(g)}}).$mount("#app")},"706c":function(t,e,o){t.exports=o.p+"img/sass_logo.669c0c0e.png"},8125:function(t,e,o){t.exports=o.p+"img/github_logo.3f8fc525.png"},"93ac":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"app-footer",attrs:{fluid:""}},[o("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[o("v-col",{attrs:{lg:"4"}},[o("v-flex",[o("v-layout",{attrs:{"fill-height":"","align-center":"","justify-space-around":""}},[o("a",{attrs:{href:"https://github.com/mnonna"}},[o("v-icon",{staticClass:"footer-logo"},[t._v("mdi-github")])],1),o("a",{attrs:{href:"https://www.linkedin.com/in/marcin-nonna-56882817b/"}},[o("v-icon",{staticClass:"footer-logo"},[t._v("mdi-linkedin")])],1),o("a",[o("v-icon",{staticClass:"footer-logo"},[t._v("mdi-facebook")])],1)])],1)],1)],1)],1)},n=[],r=(o("d2e0"),o("2877")),i=o("6544"),s=o.n(i),c=o("62ad"),l=o("a523"),u=o("0e8f"),f=o("132d"),g=o("a722"),p={},m=Object(r["a"])(p,a,n,!1,null,"4de9a3ea",null);e["default"]=m.exports;s()(m,{VCol:c["a"],VContainer:l["a"],VFlex:u["a"],VIcon:f["a"],VLayout:g["a"]})},9926:function(t,e,o){},"9b19":function(t,e,o){t.exports=o.p+"img/logo.63a7d78d.svg"},"9b54":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"resume-introduction-main d-flex justify-center align-center",attrs:{fluid:""}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[a("v-col",{staticClass:"d-flex align-center justify-space-around",attrs:{height:"300px"}},[a("v-flex",{staticClass:"resume-profile",attrs:{lg4:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-space-around":"","fill-height":""}},[a("v-img",{ref:"profile__img",staticClass:"profile-img",attrs:{src:o("3a19"),"max-width":"150px","max-height":"150px"}}),a("h2",{ref:"hello__header"},[t._v("Marcin, frontend dev")])],1)],1)],1),a("v-col",{staticClass:"d-flex align-center justify-center"},[a("v-flex",{ref:"profile__text",staticClass:"resume-profile-text",attrs:{lg8:""}},[a("v-layout",{attrs:{column:"","align-center":"","justify-space-around":"","fill-height":""}},[a("h3",{ref:"profile__text__header"},[t._v("Couple words about myself")]),a("p",{ref:"profile__text__desc",staticClass:"mt-5"},[t._v(" I'm an ambitious person who's consistently improving skills. So far i've done some either freelance and own (home) projects. I'm an self-taught man. Admittedly i got bachelor's degree but i haven't been taught anything in terms of web programming so about 1 year ago i've decided to do something with it and learn these things by my own. However i feel like i need some guidance to get better practices and become professional. That's why i'm looking for first internship/job as an frontend dev. Why won't you try me out ? I'm an fast learner :) ")])])],1)],1),a("v-col",{staticClass:"d-flex align-center justify-center"},[a("v-flex",{staticClass:"resume-more-info-section",attrs:{lg4:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[a("v-btn",{ref:"more__info__btn",staticClass:"more-info-btn",attrs:{outlined:"",height:"50px",width:"150px"},on:{click:t.goToProjects}},[t._v("More Info")])],1)],1)],1)],1)],1)},n=[],r=o("cffa"),i=o("9ce6"),s={mounted:function(){r["a"].registerPlugin(i["a"]);var t=this.$refs,e=t.profile__img,o=t.hello__header,a=t.profile__text,n=t.profile__text__header,s=t.profile__text__desc,c=t.more__info__btn,l=r["a"].timeline();l.fromTo(e.$el,{opacity:0,x:-200},{opacity:1,x:0,duration:.3}).fromTo(o,{opacity:0,x:-200},{opacity:1,x:0,duration:.3}).fromTo(a,{opacity:0,x:-200},{opacity:1,x:0,duration:.3}).fromTo(n,{opacity:0,x:-200},{opacity:1,x:0,duration:.3}).fromTo(s,{opacity:0,x:-200},{opacity:1,x:0,duration:.3}).fromTo(c.$el,{opacity:0,y:200},{opacity:1,y:0,duration:.3}).delay(.5)},methods:{goToProjects:function(){var t=document.querySelector("#projects");t.scrollIntoView({behavior:"smooth"})}}},c=s,l=(o("29c8"),o("2877")),u=o("6544"),f=o.n(u),g=o("8336"),p=o("62ad"),m=o("a523"),h=o("0e8f"),d=o("adda"),v=o("a722"),b=Object(l["a"])(c,a,n,!1,null,"46b2f672",null);e["default"]=b.exports;f()(b,{VBtn:g["a"],VCol:p["a"],VContainer:m["a"],VFlex:h["a"],VImg:d["a"],VLayout:v["a"]})},"9e0b":function(t,e,o){t.exports=o.p+"img/vuex_logo.d656dee3.png"},"9f82":function(t,e,o){},aaa3:function(t,e,o){t.exports=o.p+"img/facebook.b9173756.svg"},b95c:function(t,e,o){},c100:function(t,e,o){"use strict";var a=o("9926"),n=o.n(a);n.a},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d2e0:function(t,e,o){"use strict";var a=o("4039"),n=o.n(a);n.a},e1e4:function(t,e,o){t.exports=o.p+"img/css3_logo.a9275c14.jpg"},e8d0:function(t,e,o){t.exports=o.p+"img/office-1209640_1920.e01940f8.jpg"},f410:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{ref:"contact__container",staticClass:"portfolio-contact-section d-flex justify-center align-center",attrs:{fluid:""}},[o("v-layout",{attrs:{row:"","align-center":"","justify-center":"","fill-height":""}},[o("v-flex",{staticClass:"portfolio-contact-wrapper",attrs:{"fill-height":""}},[o("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[o("v-col",{ref:"contact__github",staticClass:"contact-info"},[o("v-layout",{attrs:{"align-start":"","justify-center":"","fill-height":""}},[o("v-col",{attrs:{"fill-height":""}},[o("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[o("h2",[t._v("You can check more of my projects on GitHub")]),o("v-btn",{staticClass:"go-to-btn",attrs:{outlined:"",href:"https://github.com/mnonna"}},[o("span",[t._v("Go to GitHub")]),o("v-icon",{staticClass:"mdi-icon"},[t._v("mdi-github")])],1)],1)],1)],1)],1),o("v-col",{staticClass:"contact-info mt-5"},[o("v-layout",{staticClass:"contact-types",attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[o("h2",{ref:"contact__coop__header"},[t._v("Want to offer me cooperation ? You can contact me through")]),o("v-col",{ref:"contact__facebook",staticClass:"mt-5",attrs:{cols:"2"}},[o("v-layout",{attrs:{column:"","align-center":"","justify-space-between":""}},[o("h3",[t._v("Facebook")]),o("v-btn",{staticClass:"go-to-btn",attrs:{outlined:"",href:""}},[o("span",[t._v("Go to Facebook")]),o("v-icon",{staticClass:"mdi-icon"},[t._v("mdi-facebook")])],1)],1)],1),o("v-col",{ref:"contact__linkedin",staticClass:"mt-5",attrs:{cols:"2"}},[o("v-layout",{attrs:{column:"","align-center":"","justify-space-between":""}},[o("h3",[t._v("LinkedIn")]),o("v-btn",{staticClass:"go-to-btn",attrs:{outlined:"",href:"https://www.linkedin.com/in/marcin-nonna-56882817b/"}},[o("span",[t._v("Go to LinkedIn")]),o("v-icon",{staticClass:"mdi-icon"},[t._v("mdi-linkedin")])],1)],1)],1),o("v-col",{ref:"contact__gmail",staticClass:"mb-7",attrs:{cols:"4"}},[o("v-layout",{attrs:{column:"","align-center":"","justify-space-around":"","fill-height":""}},[o("h3",[t._v("Gmail")]),o("v-container",{attrs:{fluid:""}},[o("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[o("p",[t._v("marcinnonna026@gmail.com")]),o("v-btn",{staticClass:"go-to-btn",attrs:{outlined:"",href:"mailto: marcinnonna026@gmail.com"}},[o("span",[t._v("Send an e-mail")]),o("v-icon",{staticClass:"mdi-icon"},[t._v("mdi-email")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},n=[],r=o("cffa"),i=o("1dac"),s={mounted:function(){r["a"].registerPlugin(i["a"]);var t=this.$refs,e=t.contact__container,o=t.contact__coop__header,a=t.contact__github,n=t.contact__facebook,s=t.contact__linkedin,c=t.contact__gmail,l=r["a"].timeline({scrollTrigger:{trigger:e,toggleActions:"restart pause reverse pause",start:"top 40%",endTrigger:e,end:function(){return"+="+e.offsetHeight+"+ 80"}}});l.fromTo(a,{opacity:0},{opacity:1,duration:.3}).fromTo(o,{opacity:0},{opacity:1,duration:.3}).fromTo(n,{opacity:0},{opacity:1,duration:.3}).fromTo(s,{opacity:0},{opacity:1,duration:.3}).fromTo(c,{opacity:0},{opacity:1,duration:.3})}},c=s,l=(o("ff1c"),o("2877")),u=o("6544"),f=o.n(u),g=o("8336"),p=o("62ad"),m=o("a523"),h=o("0e8f"),d=o("132d"),v=o("a722"),b=Object(l["a"])(c,a,n,!1,null,"5a40d1a3",null);e["default"]=b.exports;f()(b,{VBtn:g["a"],VCol:p["a"],VContainer:m["a"],VFlex:h["a"],VIcon:d["a"],VLayout:v["a"]})},ff1c:function(t,e,o){"use strict";var a=o("4a1e"),n=o.n(a);n.a}});
//# sourceMappingURL=app.ead15211.js.map