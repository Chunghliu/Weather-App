(this["webpackJsonpWeatherApp-master"]=this["webpackJsonpWeatherApp-master"]||[]).push([[0],{104:function(n,e,t){"use strict";t.r(e);var o,r,i=t(0),a=t.n(i),c=t(11),l=t.n(c),s=(t(76),t(77),t(23)),u=t(12),d=t(13),p=t(147),b=["title","titleId"];function f(){return f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},f.apply(this,arguments)}function h(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function x(n,e){var t=n.title,a=n.titleId,c=h(n,b);return i.createElement("svg",f({width:"116px",height:"121px",viewBox:"0 0 116 121",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:e,"aria-labelledby":a},c),void 0===t?i.createElement("title",{id:a},"cog"):t?i.createElement("title",{id:a},t):null,o||(o=i.createElement("desc",null,"Created with Sketch.")),r||(r=i.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"cog",fill:"#BDBDBD",fillRule:"nonzero"},i.createElement("path",{d:"M114.51836,75.0394612 L104.111067,69.0382742 C105.161569,63.3786182 105.161569,57.5725917 104.111067,51.9129357 L114.51836,45.9117487 C115.715443,45.2286867 116.252909,43.8137727 115.862025,42.496439 C113.150265,33.8117944 108.532945,25.9565822 102.49867,19.4187036 C101.57032,18.4185058 100.055644,18.1745551 98.8829908,18.857617 L88.4756981,24.858804 C84.1026808,21.1019634 79.0700463,18.1989502 73.6220973,16.2961348 L73.6220973,4.31815586 C73.6220973,2.95203199 72.6693169,1.75667361 71.3256524,1.46393278 C62.3597453,-0.536462888 53.1739658,-0.438882611 44.6478035,1.46393278 C43.3041389,1.75667361 42.3513586,2.95203199 42.3513586,4.31815586 L42.3513586,16.3205299 C36.9278399,18.2477403 31.8952054,21.1507535 27.4977578,24.8831991 L17.1148953,18.8820121 C15.9178124,18.1989502 14.4275662,18.4185058 13.4992162,19.4430987 C7.46494082,25.9565822 2.84762082,33.8117944 0.135861449,42.5208341 C-0.279453048,43.8381678 0.282443036,45.2530818 1.479526,45.9361437 L11.8868187,51.9373307 C10.8363173,57.5969868 10.8363173,63.4030132 11.8868187,69.0626693 L1.479526,75.0638563 C0.282443036,75.7469182 -0.255022784,77.1618322 0.135861449,78.4791659 C2.84762082,87.1638105 7.46494082,95.0190228 13.4992162,101.556901 C14.4275662,102.557099 15.9422426,102.80105 17.1148953,102.117988 L27.522188,96.1168009 C31.8952054,99.8736415 36.9278399,102.776655 42.3757889,104.67947 L42.3757889,116.681844 C42.3757889,118.047968 43.3285692,119.243326 44.6722338,119.536067 C53.6381408,121.536463 62.8239203,121.438883 71.3500827,119.536067 C72.6937472,119.243326 73.6465275,118.047968 73.6465275,116.681844 L73.6465275,104.67947 C79.0700463,102.75226 84.1026808,99.8492465 88.5001284,96.1168009 L98.9074211,102.117988 C100.104504,102.80105 101.59475,102.581494 102.5231,101.556901 C108.557376,95.0434178 113.174696,87.1882056 115.886455,78.4791659 C116.252909,77.1374371 115.715443,75.7225231 114.51836,75.0394612 Z M57.9867279,79.9916602 C47.2129813,79.9916602 38.4425163,71.2338304 38.4425163,60.4756049 C38.4425163,49.7173795 47.2129813,40.9595497 57.9867279,40.9595497 C68.7604746,40.9595497 77.5309396,49.7173795 77.5309396,60.4756049 C77.5309396,71.2338304 68.7604746,79.9916602 57.9867279,79.9916602 Z",id:"Shape"})))))}var g,j,m,O,C,v,w,y,k,L,E,S,z,F,I,M,P=i.forwardRef(x),T=(t.p,t(8)),B=function(n){var e=n.WeatherElement,t=(e.lastUpdateTime,e.warningMsg),o=(e.humidity,e.icon);e.isLoading;console.log("props.result");var r=n.FindLocation,i=r.place,a=r.value,c=r.unit,l=d.a.div(g||(g=Object(u.a)(["\n        position: relative;\n        min-width: 360px;\n        box-shadow: ",";\n        background-color: ",";\n        box-sizing: border-box;\n        padding: 30px 15px;\n        "])),(function(n){return n.theme.boxShadow}),(function(n){return n.theme.foregroundColor})),s=d.a.div(j||(j=Object(u.a)(["\n        font-size: 28px;\n        color: ",";\n        margin-bottom: 20px;\n        "])),(function(n){return n.theme.titleColor})),p=d.a.div(m||(m=Object(u.a)(["\n        font-size: 16px;\n        color: ",";\n        margin-bottom: 30px;\n        "])),(function(n){return n.theme.textColor})),b=d.a.div(O||(O=Object(u.a)(["\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 30px;\n        "]))),f=d.a.div(C||(C=Object(u.a)(["\n        color: ",";\n        font-size: 96px;\n        font-weight: 300;\n        display: flex;\n        "])),(function(n){return n.theme.temperatureColor})),h=d.a.div(v||(v=Object(u.a)(["\n        font-weight: normal;\n        font-size: 42px;\n        "]))),x=d.a.div(w||(w=Object(u.a)(["\n        flex-basis: 30%;\n        "]))),k=Object(d.a)(P)(y||(y=Object(u.a)(["\n        position: absolute;\n        top: 30px;\n        right: 15px;\n        width: 15px;\n        height: 15px;\n        cursor: pointer;\n        "])));return Object(T.jsxs)(l,{children:[Object(T.jsx)(k,{}),Object(T.jsx)(s,{children:i}),Object(T.jsx)(p,{children:t}),Object(T.jsxs)(b,{children:[Object(T.jsxs)(f,{children:[a," ",Object(T.jsxs)(h,{children:["\xb0",c]})]}),Object(T.jsx)(x,{children:Object(T.jsx)("img",{src:o,alt:"Icon"})})]})]})},W=t(42),D=t.n(W),A=t(57),R=t(58),U=t.n(R),J=function(){var n=function(){var n=Object(A.a)(D.a.mark((function n(){return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.get("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc").then((function(n){var e=n.data;console.log(e),r({lastUpdateTime:e.recordTime,warningMsg:e.warningMessage,humidity:e.humidity.data[0].value,icon:"https://www.hko.gov.hk/images/HKOWxIconOutline/pic"+e.icon+".png",isLoading:!1}),u({locations:e.temperature.data})})).catch((function(n){console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e=Object(i.useState)({lastUpdateTime:"2021-10-04 16:15:00",warningMsg:"\u5929\u6c23\u9177\u71b1",humidity:70,icon:"",isLoading:!0}),t=Object(s.a)(e,2),o=t[0],r=t[1],a=Object(i.useState)({locations:[]}),c=Object(s.a)(a,2),l=c[0],u=c[1];return console.log(l.locations),Object(i.useEffect)((function(){console.log("execute function in useEffect"),n()}),[]),[o,l]},Z=t(43),H=t(145),K=t(146),X=d.a.div(k||(k=Object(u.a)(["\n  position: relative;\n  min-width: 360px;\n  box-shadow: ",";\n  background-color: ",";\n  box-sizing: border-box;\n  padding: 15px;\n"])),(function(n){return n.theme.boxShadow}),(function(n){return n.theme.foregroundColor})),q=d.a.div(L||(L=Object(u.a)(["\n  font-size: 24px;\n  color: ",";\n  margin-bottom: 30px;\n"])),(function(n){return n.theme.titleColor})),G=(d.a.label(E||(E=Object(u.a)(["\n  display: block;\n  font-size: 16px;\n  color: ",";\n  margin-bottom: 15px;\n"])),(function(n){return n.theme.textColor})),d.a.input(S||(S=Object(u.a)(["\n  display: block;\n  box-sizing: border-box;\n  background: transparent;\n  border: 1px solid ",";\n  outline: none;\n  width: 100%;\n  max-width: 100%;\n  color: ",";\n  font-size: 16px;\n  padding: 7px 10px;\n  margin-bottom: 40px;\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),d.a.div(z||(z=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  > button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    white-space: nowrap;\n    user-select: none;\n    margin: 0;\n    letter-spacing: 0.3px;\n    line-height: 1;\n    cursor: pointer;\n    overflow: visible;\n    text-transform: none;\n    border: 1px solid transparent;\n    background-color: transparent;\n    height: 35px;\n    width: 80px;\n    border-radius: 5px;\n\n    &:focus,\n    &.focus {\n      outline: 0;\n      box-shadow: none;\n    }\n\n    &::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n  }\n"]))),d.a.button(F||(F=Object(u.a)(["\n  && {\n    color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),d.a.button(I||(I=Object(u.a)(["\n  && {\n    color: white;\n    background-color: #40a9f3;\n  }\n"]))),function(){var n=J(),e=Object(s.a)(n,2),t=(e[0],e[1].locations),o=Object(i.useState)({place:"\u6c99\u7530",value:"0",unit:"C"}),r=Object(s.a)(o,2),a=r[0],c=r[1];return{FindLocation:a,render:Object(T.jsxs)(X,{children:[Object(T.jsx)(q,{children:"\u8a2d\u5b9a"}),Object(T.jsx)(K.a,{id:"location-list",options:t,getOptionLabel:function(n){return n.place},style:{width:300},renderInput:function(n){return Object(T.jsx)(H.a,Object(Z.a)(Object(Z.a)({},n),{},{label:"\u5730\u5340",variant:"outlined"}))},onChange:function(n,e){if(console.log("value"),console.log(e),null!=e)var o=t.find((function(n){return n.place===e.place}));console.log(o),void 0!=o&&c({place:o.place,value:o.value,unit:o.unit})}}),Object(T.jsx)("datalist",{id:"location-list",children:t.map((function(n,e){return Object(T.jsx)("option",{value:n.place},e)}))})]})}}),N=(t(144),{light:{backgroundColor:"#ededed",foregroundColor:"#f9f9f9",boxShadow:"0 1px 3px 0 #999999",titleColor:"#212121",temperatureColor:"#757575",textColor:"#828282"},dark:{backgroundColor:"#1F2022",foregroundColor:"#121416",boxShadow:"0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)",titleColor:"#f9f9fa",temperatureColor:"#dddddd",textColor:"#cccccc"}}),Q=d.a.div(M||(M=Object(u.a)(["\n  background-color: ",";\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),(function(n){return n.theme.backgroundColor})),V=function(){console.log("invoke function component");var n=J(),e=Object(s.a)(n,2),t=e[0],o=(e[1],G()),r=o.FindLocation,i=o.render;return Object(T.jsxs)(p.b,{theme:N.light,children:[i,Object(T.jsx)(Q,{children:Object(T.jsx)(B,{FindLocation:r,WeatherElement:t})})]})};var Y=function(){return Object(T.jsx)(V,{})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,149)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),o(n),r(n),i(n),a(n)}))};l.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(Y,{})}),document.getElementById("root")),$()},76:function(n,e,t){},77:function(n,e,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.d836df7e.chunk.js.map