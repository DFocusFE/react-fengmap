(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"+M+s":function(e,n,t){"use strict";t.d(n,"a",function(){return p});var a=t("q1tI"),r=t.n(a),o=(t("17x9"),t("MuoO")),l=t("Rb4u");function p(e){class n extends a["Component"]{render(){var n=this.props.locationPathname,t=Object(l["c"])(n);return t?r.a.createElement("div",null,r.a.createElement("h1",null,t.displayTitle),r.a.createElement("p",null,t.description),r.a.createElement(e,this.props)):r.a.createElement("div",null,"\u8def\u5f84\u662f\u4e0d\u662f\u4e0d\u5bf9\u554a\uff1f")}}return Object(o["connect"])(e=>{var n=e.app;return{locationPathname:n.locationPathname}})(n)}},Gwg2:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=!0;function r(e){return a?`${window.routerBase.endsWith("/")?window.routerBase.slice(0,window.routerBase.length-1):window.routerBase}${e}`:e}},Rb4u:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"d",function(){return o}),t.d(n,"c",function(){return l});var a=[{url:"/api/fengmap-base",displayTitle:"<FengmapBase />",description:"\u57fa\u7840\u5730\u56fe\u7ec4\u4ef6"},{url:"/api/fengmap-floors",displayTitle:"<FengmapFloors />",description:"\u5e26\u697c\u5c42\u63a7\u5236\u7684\u5730\u56fe\u7ec4\u4ef6"}],r=[{url:"/api/fengmap-zoomcontrol",displayTitle:"<FengmapZoomControl />",description:"\u5730\u56fe\u7f29\u653e\u63a7\u4ef6"},{url:"/api/fengmap-rotatecontrol",displayTitle:"<FengmapRotateControl />",description:"\u5730\u56fe\u65cb\u8f6c\u63a7\u4ef6"},{url:"/api/fengmap-resetcontrol",displayTitle:"<FengmapResetControl />",description:"\u5730\u56fe\u91cd\u7f6e\u63a7\u4ef6"},{url:"/api/fengmap-floorcontrol",displayTitle:"<FengmapFloorControl />",description:"\u5730\u56fe\u697c\u5c42\u5207\u6362\u63a7\u4ef6"},{url:"/api/fengmap-3dcontrol",displayTitle:"<Fengmap3DControl />",description:"\u5730\u56fe\u697c\u5c42\u5207\u6362\u63a7\u4ef6"},{url:"/api/fengmap-compasscontrol",displayTitle:"<FengmapCompassControl />",description:"\u6307\u5317\u9488\u63a7\u4ef6"}],o=[{url:"/api/fengmap-imagemarker",displayTitle:"<FengmapImageMarker />",description:"FMImageMarker \u81ea\u5b9a\u4e49\u56fe\u7247\u6807\u6ce8\u7ec4\u4ef6\uff0c\u4e3a\u81ea\u5b9a\u4e49\u56fe\u5c42"},{url:"/api/fengmap-navigation",displayTitle:"<FengmapNavigation />",description:"FengmapNavigation \u5bfc\u822a\u7ec4\u4ef6,\u5c01\u88c5\u4e86\u81ea\u52a8\u8bbe\u7f6e\u8d77\u59cb\u70b9\u6807\u6ce8\uff0c\u8def\u5f84\u5206\u6790\uff0c\u6a21\u62df\u5bfc\u822a\uff0c\u5bfc\u822a\u52a8\u753b\u7684\u529f\u80fd"}];function l(e){var n=[...a,...r,...o].find(n=>n.url===e);return n||null}},Vy36:function(e,n,t){e.exports={docTable:"docTable___1cejQ","ant-table":"ant-table___2WJ2t"}},dS2j:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var a=t("q1tI"),r=t.n(a),o=(t("17x9"),t("uUdh")),l=t("q+nx");class p extends r.a.Component{render(){var e=this.props,n=e.language,t=e.children;return r.a.createElement(o["a"],{language:n,style:l["darcula"]},t)}}},hd6q:function(e,n,t){"use strict";t.d(n,"a",function(){return i});t("g9YV");var a=t("wCAj"),r=t("q1tI"),o=t.n(r),l=(t("17x9"),t("Vy36")),p=t.n(l);function i(e){var n=e.data;return o.a.createElement("div",null,o.a.createElement("h3",null,"Props"),o.a.createElement(a["a"],{className:p.a.docTable,scroll:{x:!0},columns:[{title:"Prop",dataIndex:"prop",key:"prop",width:150},{title:"Type",dataIndex:"type",key:"type",width:170},{title:"Description",dataIndex:"description",key:"description",render:e=>e}],dataSource:n,pagination:!1,rowKey:"prop"}))}},nEPe:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),o=(t("17x9"),t("zg5e")),l=t.n(o),p=t("Ro1p"),i=t("dS2j"),s=t("+M+s"),c=t("hd6q"),m=t("Gwg2");class u extends a["Component"]{render(){var e=this.props.screenWidth,n=e>1e3?e-280-96-40:e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i["a"],{language:"jsx"},"// \u53ea\u80fd\u914d\u5408\u57fa\u7840\u5730\u56fe\n<FengmapBase mapId={MapId} style={Style} fengmapSDK={SDK} mapOptions={MapOptions} >\n  <FengmapFloorControl ctrlOptions={CtrlOptions} labelFormater={LabelFormater} />\n</FengmapBase>\n"),r.a.createElement("br",null),r.a.createElement(c["a"],{data:[{prop:"ctrlOptions",type:"Object",description:r.a.createElement(r.a.Fragment,null,"\u8bf7\u53c2\u8003",r.a.createElement("a",{href:"https://www.fengmap.com/docs/js/v2.2.0_beta/classes/fengmap.buttonGroupsControl.html",target:"_blank",rel:"noopener noreferrer"},"ctrlOpts"))},{prop:"labelFormater",type:"(floor: Number) => String",description:"\u81ea\u5b9a\u4e49\u697c\u5c42\u6807\u7b7e"}]}),r.a.createElement("br",null),r.a.createElement("div",{className:"mapExample"},r.a.createElement("h3",null,"\u793a\u4f8b"),r.a.createElement(p["b"],{fengmapSDK:l.a,mapId:"10347",mapOptions:{key:"e843c6307e42ec8de24d14a10e07ca20",appName:"github\u6f14\u793a\u5e94\u7528",mapServerURL:Object(m["a"])("/maps/10347"),mapThemeURL:Object(m["a"])("/maps/theme"),defaultMapScaleLevel:20,defaultTiltAngle:45},gestureEnableController:{enableMapPinch:!1},style:{width:`${n}px`,height:"550px"}},r.a.createElement(p["d"],{ctrlOptions:{position:l.a.controlPositon.RIGHT_BOTTOM,showBtnCount:4},labelFormater:e=>e+"F"})),r.a.createElement("br",null),r.a.createElement(i["a"],{language:"jsx"},"import fengmapSDK from 'fengmap'\nimport { FengmapBase, FengmapFloorControl } from 'react-fengmap'\n            \nexport default function Example(props) {\n  return (\n    <FengmapBase\n      fengmapSDK={fengmapSDK}\n      mapId=\"10347\"\n      mapOptions={{\n        //\u5f00\u53d1\u8005\u7533\u8bf7\u5e94\u7528\u540d\u79f0\n        appName: '\u5e94\u7528\u540d',\n        key: 'appkey',\n        mapServerURL: '/maps/10347',\n        mapThemeURL: '/maps/theme',\n        defaultMapScaleLevel: 20,\n        defaultTiltAngle: 45\n      }}\n      gestureEnableController={{\n        enableMapPinch: false // \u7981\u7528\u9f20\u6807\u6eda\u8f6e\u6216\u8005\u624b\u52bfpinch\u7f29\u653e\u5730\u56fe\n      }}\n      style={{\n        width: '100%',\n        height: '550px'\n      }}\n    >\n      <FengmapFloorControl\n        ctrlOptions={{\n          position: fengmapSDK.controlPositon.RIGHT_BOTTOM,\n          showBtnCount: 7\n        }}\n        labelFormater={v => v + 'F'}\n      />\n    </FengmapBase>\n  )\n}\n")))}}n["default"]=Object(s["a"])(u)}}]);