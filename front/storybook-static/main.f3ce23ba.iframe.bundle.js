(self.webpackChunktable_flip_frontend=self.webpackChunktable_flip_frontend||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)},"./src/games/OneNightWerewolf/components/Card/Cards.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k7:()=>Werewolf});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var consts_Tendency,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));!function(Tendency){Tendency.good="Good",Tendency.evil="Evil"}(consts_Tendency||(consts_Tendency={}));var _templateObject,_templateObject2,getColorByTendency=function getColorByTendency(_ref){switch(_ref.tendency){case consts_Tendency.evil:return"#990000";case consts_Tendency.good:return"#008B0E";default:return}},react_spring_esm=__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var CardWrapper=(0,styled_components_browser_esm.ZP)(react_spring_esm.animated.div)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  transform-style: preserve-3d;\n"]))),CardFace=(0,styled_components_browser_esm.ZP)(react_spring_esm.animated.div)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  backface-visibility: hidden;\n"]))),Flip=function Flip(_ref){var children=_ref.children,isFlipped=_ref.isFlipped,transform=(0,react_spring_esm.useSpring)({transform:"perspective(65rem) rotateY(".concat(isFlipped?180:0,"deg)"),config:{mass:5,tension:400,friction:80}}).transform;return react.createElement(CardWrapper,{style:{transform}},react.createElement(CardFace,{style:{position:"absolute"}},children[1]),react.createElement(CardFace,{style:{transform:"rotateY(180deg)"}},children[0]))};const Card_flip=Flip;var Card_templateObject,Card_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6;try{Flip.displayName="Flip",Flip.__docgenInfo={description:"",displayName:"Flip",props:{isFlipped:{defaultValue:null,description:"",name:"isFlipped",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Card/flip.tsx#Flip"]={docgenInfo:Flip.__docgenInfo,name:"Flip",path:"src/common/components/Card/flip.tsx#Flip"})}catch(__react_docgen_typescript_loader_error){}try{flip.displayName="flip",flip.__docgenInfo={description:"",displayName:"flip",props:{isFlipped:{defaultValue:null,description:"",name:"isFlipped",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Card/flip.tsx#flip"]={docgenInfo:flip.__docgenInfo,name:"flip",path:"src/common/components/Card/flip.tsx#flip"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Card_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _style,Card_CardWrapper=styled_components_browser_esm.ZP.div(Card_templateObject||(Card_templateObject=Card_taggedTemplateLiteral(["\n  display: flex;\n  background-color: white;\n  border-radius: 3rem;\n  width: 22.5rem;\n  height: 36rem;\n  margin: auto;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),CardHeadline=styled_components_browser_esm.ZP.div(Card_templateObject2||(Card_templateObject2=Card_taggedTemplateLiteral(["\n  font-family: PoetsenOne;\n  font-size: 2rem;\n  line-height: 38px;\n  text-align: center;\n  color: ",";\n"])),(function(_ref){var tendency=_ref.tendency;return getColorByTendency({tendency})})),CardContentText=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=Card_taggedTemplateLiteral(["\n  width: 17rem;\n  font-family: Poly;\n  font-size: 1.1rem;\n  line-height: 21px;\n  text-align: center;\n  color: black;\n"]))),FrontCardWrapper=(0,styled_components_browser_esm.ZP)(Card_CardWrapper)(_templateObject4||(_templateObject4=Card_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  border: 3px solid ",";\n"])),(function(_ref2){var tendency=_ref2.tendency;return getColorByTendency({tendency})})),BackCardWrapper=(0,styled_components_browser_esm.ZP)(Card_CardWrapper)(_templateObject5||(_templateObject5=Card_taggedTemplateLiteral(["\n"]))),FlipCard=function FlipCard(_ref3){var children=_ref3.children,_useState2=_slicedToArray((0,react.useState)(!1),2),isFlipped=_useState2[0],setIsFlipped=_useState2[1];return react.createElement("div",{onClick:function onClick(){return setIsFlipped(!isFlipped)}},react.createElement(Card_flip,{isFlipped},children))},Card=function Card(_ref4){var frontIcon=_ref4.frontIcon,backIcon=_ref4.backIcon,headline=_ref4.headline,description=_ref4.description,tendency=_ref4.tendency,_ref4$showDescription=_ref4.showDescription,showDescription=void 0!==_ref4$showDescription&&_ref4$showDescription;return react.createElement(FlipCard,null,react.createElement(BackCardWrapper,null,backIcon),react.createElement(FrontCardWrapper,{tendency},frontIcon,react.createElement(CardHeadline,{tendency},headline),showDescription&&react.createElement(CardContentText,null,description)))},GameHeadline=styled_components_browser_esm.ZP.div(_templateObject6||(_templateObject6=Card_taggedTemplateLiteral(["\n  font-family: PoetsenOne;\n  font-size: 2rem;\n  line-height: 38px;\n  text-align: center;\n"]))),GameCard=function GameCard(_ref5){var backIcon=_ref5.backIcon,name=_ref5.name,description=_ref5.description;_ref5.minPlayers,_ref5.maxPlayers;return React.createElement(FlipCard,null,React.createElement(BackCardWrapper,null,backIcon),React.createElement(BackCardWrapper,null,React.createElement(GameHeadline,null,name),React.createElement(CardContentText,null,description)))};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},backIcon:{defaultValue:null,description:"",name:"backIcon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},tendency:{defaultValue:null,description:"",name:"tendency",required:!0,type:{name:"enum",value:[{value:'"Good"'},{value:'"Evil"'}]}},showDescription:{defaultValue:{value:"false"},description:"",name:"showDescription",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/common/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}try{GameCard.displayName="GameCard",GameCard.__docgenInfo={description:"",displayName:"GameCard",props:{backIcon:{defaultValue:null,description:"",name:"backIcon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},minPlayers:{defaultValue:{value:"null"},description:"",name:"minPlayers",required:!1,type:{name:"number"}},maxPlayers:{defaultValue:{value:"null"},description:"",name:"maxPlayers",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Card/Card.tsx#GameCard"]={docgenInfo:GameCard.__docgenInfo,name:"GameCard",path:"src/common/components/Card/Card.tsx#GameCard"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const werewolf=function SvgWerewolf(props){return react.createElement("svg",_extends({baseProfile:"tiny-ps",xmlns:"http://www.w3.org/2000/svg",width:280,height:400},props),_style||(_style=react.createElement("style",null)),react.createElement("path",{id:"werewolf_svg__Werewolf",d:"M140 5s-4.7-1.16-11 8-23 42-23 42-5.34 9.14-13 13c-7.66 3.86-28 16-28 16l5 2s-25.14 21.4-25 28c0 .05 4.24-.19 4.24-.19S29.66 147.25 28 161c-.18 1.52 5-2 5-2s-11.91 67.31-14 73c-1.3 3.54-1 4-1 4l4.06-3.68S6.38 274.54 9 280c.45.94 7-5 7-5s5 34.16 25 47c.77.5 2 0 2 0 .61.06 1.36-12.37 1.36-12.37S74.46 344.5 100 347c1.35.13 17.12 6.09 20 8 2.88 1.91 5 3 5 3s-6.71-10.18-6-12c.71-1.82 3-1 3-1s31.05 14.72 37 19c5.95 4.28 7.42 4.84 11 8s4 4 4 4 .23-9.38 1-10c.77-.62 5 4 5 4l15 17s1.09-9.78 3-10c1.91-.22 6.85 9.3 7 11 .15 1.7 2 7 2 7s10.86-28.09 10-50c-.71-18.02.55-11.68 1-12 .45-.32 5 7 5 7s-11.49-43.96-10-46c1.49-2.04 4 2 4 2s-7.86-23.3-19.08-32.17c-11.22-8.86-22.37-33.11-22.37-33.11s-7.8-26.37.45-32.72c8.25-6.35 25.01-1.13 28 0 2.99 1.13 13.38 5.26 16 7 2.62 1.74 5.89 5.3 11 5 5.11-.3 8.41-3.63 10-5 1.59-1.37 3.13-5.91 5-7 1.87-1.09 8 1.21 15-5s12.33-13.19 11-16c-1.33-2.81-37.32-32.77-37.32-32.77s-6.55-6.66-8.68-13.23-1.31-19.66-4-22-28.43-34.14-31.7-44.41c-3.26-10.28.96-19.05 1.7-20.59.74-1.54 2.6-19.65 2-22-.6-2.35-1.42-8.83-4-9-2.58-.17-21.34 22.11-21.34 22.11s-11.85 10.27-18.11 9.41c-1.21-.16-3.35-8.07-4.87-12.27C144.16 28.06 142.91 6.79 140 5Z",style:{fill:"#000"}}))};var back_side_style,_g,_g2;function back_side_extends(){return back_side_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},back_side_extends.apply(this,arguments)}const back_side=function SvgBackSide(props){return react.createElement("svg",back_side_extends({baseProfile:"tiny-ps",xmlns:"http://www.w3.org/2000/svg",width:280,height:400},props),back_side_style||(back_side_style=react.createElement("style",null,".back_side_svg__shp0{fill:#000}.back_side_svg__shp1{fill:#fff}")),_g||(_g=react.createElement("g",{id:"back_side_svg__Folder 1"},react.createElement("path",{id:"back_side_svg__Shape 1",className:"back_side_svg__shp0",d:"M57.33 21.12s6.88.95 9.08 1.81c2.2.87 6.36 2.73 6.36 2.73s-.71 1.14-.91 3.63c-.2 2.49.81 6.72 2.72 5.45 1.92-1.28 3.63-3.63 3.63-3.63l4.54 3.63s-.24 3.53.91 2.72c1.15-.81 3.87-9.48 4.54-9.99.67-.5-.2 2.85 0 3.64.21.78 5.75-9.11 6.36-9.08.61.02-4.54 9.98-4.54 9.98s.77-.7 1.81-1.81c1.04-1.12 5.45-5.45 5.45-5.45s-1.06 3.58-.91 4.54c.16.96 5.11-4.3 7.27-6.36 2.15-2.05 8.19-4.88 8.17-4.54-.03.35-4.22 3.88-4.54 4.54-.32.67-1.82 2.73-1.82 2.73s13.84-8.13 16.35-9.08c2.5-.95 16.46-5.02 15.43-4.54-3.65 1.7-9.08 6.35-9.08 6.35s15.54-5.03 17.25-5.44c1.66-.4-9.08 5.44-9.08 5.44s12.57-2.66 15.44-2.72c2.86-.05 16.33 1.78 15.43 1.82-12.13.53-10.89 3.63-10.89 3.63s8.4.41 13.62 1.81c5.21 1.41 9.46 3.72 10.89 4.54 1.44.83 2.73 2.73 2.73 2.73s-15.59-2.59-17.26 0c-.23.37 2.06.78 5.45.91 3.4.13 12.71 7.26 12.71 7.26s-11.57-6.58-14.27-5.88c-2.71.7 2.33 1.7 3.38 2.25 1.05.54 9.47 6.42 8.17 6.35-5.11-.27-4.54.91-4.54.91s4.87 4.56 6.36 7.27c1.49 2.7 10.78 22.65 10.89 30.87.12 8.21.31 17.87.91 19.06.6 1.19 4.23 6.27 4.54 9.99.3 3.72 0 12.71 0 12.71l-4.07-5.04s-1.56-1.22-2.29-.41c-.72.82.17 3.18 0 3.64-.16.45-7.86-2.55-8.17-1.82-.31.73-3.56 11.37-3.63 12.71-.07 1.34-.35 5.52 2.72 5.45 3.08-.07 8.39-2.04 9.08-3.63.69-1.6 1.82-4.54 1.82-4.54s.34-1.6.91.9c.56 2.51 1.22 5.84 1.81 4.54.6-1.29 5.88-7.05 6.36-9.98.47-2.94-.72-16.52-2.73-19.98-2-3.46 1.36-17.11 2.73-19.06 1.37-1.96 2.92-4.63 3.63-4.54.71.08-1.59 3.51-.91 3.63.69.11 8.35-7.7 18.16-9.99s14.61.16 16.34.91c1.74.74 6.36 3.63 6.36 3.63s-12.12-1.16-14.53.91c-2.4 2.06-8.11 6.89-9.08 9.08-.96 2.18-2.96 11.57 0 15.43 2.97 3.86 5.8 10.03 6.36 10.9.56.87 2.56 1.21 2.72 0 .17-1.21.91-3.63.91-3.63s1.56 3.36 1.82 4.54c.25 1.17 1.16 12.27-3.63 17.25-4.8 4.97-10.36 10.47-15.44 12.71-5.08 2.23-9.08 4.54-9.08 4.54h8.17s-2.9 4.33-6.35 4.54c-3.46.21-13.26.4-16.35-1.82-3.09-2.22-11.13-7.56-11.8-8.17-.67-.61-1.78.42-1.82 1.82-.04 1.39.28 8.42.91 9.08.63.65 14.82 15.35 19.98 15.43 5.15.08 17.25.91 17.25.91s-2.17 23.41-.91 27.24c1.26 3.82 1.82 4.54 1.82 4.54s-8.14-.21-13.62-1.82c-5.49-1.61-10.41-3.06-8.17-5.45 2.23-2.38 6.05-1.95 6.05-1.95s8.43-3.42 10.35-10.82c.46-1.78.34-4.95-2.29-7.32-2.02-1.82-8.47 3.06-13.21 3.75-4.73.68-20.04 6.92-29.05 1.82-9.01-5.11-10.52-14.32-9.47-20.53 1.05-6.21 1.24-6.76 1.24-6.76s-9.23-4.14-17.19-1.77c-7.97 2.38-14.77 5.82-18.16 9.08-3.4 3.27-7.15 7.46-5.45 13.62 1.7 6.16 2.72 5.45 2.72 5.45s-7.89 5.04-6.35 10.89c.2.79-5.27-.57-7.27-.9-1.99-.34-7.91-2.01-8.17-1.82-.26.19-.3-2.95 1.82-3.63 2.12-.69 6.16.05 6.16.05l7.33-5.55s.76-6.47-.99-10.01c-1.76-3.54-5.24-8.1-5.24-8.1s.66-9.37 4.54-14.53 10.51-11.45 10.51-11.45-3.28-.72 7.68-2.71c10.95-1.99 19.63 1.79 19.63 1.79s-1.5-10.09-6.95-14.86c-5.45-4.78-6.18-7.11-9.99-8.18-3.8-1.07-7.26-4.54-7.26-4.54s-1.25 1.77 0 3.64c1.25 1.86 3.63 4.54 3.63 4.54h-8.17s-.67-1.44-1.81-.91c-1.15.52-16.71 18.76-15.44 29.96.08.69 4.54-1.82 4.54-1.82s-4.36 5.86-4.54 7.27c-.18 1.41 4.54-1.82 4.54-1.82s-8.53 7.93-12.71 9.08c-4.18 1.15-11.13 3.22-12.71 4.54-1.59 1.32-3.41 10.15.91 11.8 4.31 1.66 6.4 3.68 6.35 4.54-.04.87-.34 4.82.91 5.45 1.24.63 2.83 3.12 1.81 3.63-1.01.52-4.39 1.38-5.44 0-1.05-1.37.5-6.68-6.36-7.26-1.26-.11.04 9.34-2.72 9.08-2.77-.26-8.46.58-9.08-2.72-.63-3.3 2.97-4.64 2.72-7.27s-2.33-24.89 1.82-36.32c3.4-9.38 15.98-31.08 17.25-33.59 1.26-2.51 6.7-11.52 3.63-17.25-3.06-5.74-2.72-2.73-2.72-2.73s-7.25 3.83-9.08 7.27c-1.84 3.43-8.39 10.06-7.27 12.71 1.13 2.65 1.82 2.72 1.82 2.72s-8.4 2.95-10.9 1.82c-2.5-1.14-11.97-5.33-13.62-8.17-1.64-2.84-3.82-5.43-2.72-5.45 1.1-.02 2.72 0 2.72 0s.39-4 .91-4.54c.53-.54 2.73 4.54 2.73 4.54s.43.44.9 0c.48-.44 1.82-2.72 1.82-2.72s1.76 2.45 1.82 1.81c.05-.64.9-8.17.9-8.17s5.31 6.27 5.45 4.54c.14-1.73 1.17-7.21 1.82-8.17.65-.96 2.39 3.75 3.63 3.63 1.24-.12 1.81.36 1.82-.91 0-1.27.33-7.54.9-8.17.58-.63 3.62 2.64 4.54 1.82.93-.82-.9-4.54-.9-4.54s-1.17-2.77-.91-3.63c.26-.87 2.74 2.24 2.72.9-.02-1.33-3.89-12.29-4.54-9.08-.55 2.73-1.81 4.54-1.81 4.54s-2.75-3.52-3.64-3.63c-.88-.1-1.89-.35-1.81.91.08 1.26.53 6.95 0 7.26-.53.32-3.74-3.15-4.54-2.72-.72.39-1.71.83-1.82 2.72-.11 1.89.4 7.14 0 7.27-.4.13-4.31-2.52-4.54-1.82-.23.7-1.91-.07-1.81 1.82.09 1.89.29 5.57 0 6.35-.3.79-3.96-2.69-4.54-1.81-.59.87-.87 4.5-.91 5.44-.05.95-.91.91-.91.91s-2.21-1.24-2.72-.91c-.52.34-1.61-.26-3.63.91-2.03 1.17-1.82 3.63-1.82 3.63s-5.72-6.62-7.26-6.35c-1.19.21-.91-4.54-.91-4.54s-.27-1.19-.91-.91c-.64.28-4.48-2.69-4.54-3.63-.04-.71 1.49-2.38 2.72-2.72 1.24-.35 2.45-1.08 4.54-1.82 2.1-.74 4.09-.49 4.54-.91.46-.42 4.4-5.94 5.45-6.35 1.05-.42-.91 3.63-.91 3.63s1.09-.29 1.82-.91c.72-.62 0 1.82 0 1.82s-1.07 2.13 2.72-.91c3.8-3.04 9.99-9.08 9.99-9.08s-7.54-1.95-8.17-2.73c-.64-.77 6.06-.28 9.99-4.54 3.92-4.25 5.65-7.37 4.54-7.26-1.12.12-8.18 7.26-8.18 7.26s3.44-8.07 3.64-9.07c.19-1.01-.58-1.06-1.82-.91-1.24.14-5.45 0-5.45 0s4.03-1.01 4.54-1.82c.52-.8.51-2.2-.91-2.72-1.41-.53-10.69-6.63-10.89-7.27-.2-.63.55-1.06 1.82-.9 1.26.15 5.87 1.78 7.26 2.72 1.39.94 8.88 6.99 9.08 6.36.2-.64-3.41-7.08-3.63-7.27-.23-.19-4.95-8.42-5.45-9.99-.51-1.56-.97-4.39-.91-4.54.06-.14 0-1.81 0-1.81Z"}),react.createElement("path",{id:"back_side_svg__Shape 2",className:"back_side_svg__shp1",d:"M70.04 59.25c-1.77 1.34-2.75 1.74-2.72 2.73.03.98 2.53 2.38 3.63 1.81 1.1-.57 2.82-3.37 2.72-3.63-.09-.26-.32-1.91-.9-1.82-.58.1-.95-.42-2.73.91Z"}))),_g2||(_g2=react.createElement("g",{id:"back_side_svg__Folder 1 copy"},react.createElement("path",{className:"back_side_svg__shp0",d:"M222.67 378.64s-6.88-.95-9.08-1.82c-2.21-.86-6.36-2.72-6.36-2.72s.71-1.15.91-3.63c.2-2.49-.81-6.72-2.72-5.45-1.92 1.27-3.64 3.63-3.64 3.63l-4.54-3.63s.25-3.53-.9-2.73c-1.16.81-3.87 9.49-4.54 9.99-.67.51.2-2.84 0-3.63-.21-.78-5.75 9.1-6.36 9.08-.61-.02 4.54-9.99 4.54-9.99s-.78.7-1.82 1.82c-1.03 1.11-5.44 5.45-5.44 5.45s1.06-3.59.9-4.54c-.15-.96-5.1 4.3-7.26 6.35s-8.2 4.89-8.17 4.54c.03-.35 4.22-3.88 4.54-4.54.32-.66 1.82-2.72 1.82-2.72s-13.84 8.13-16.35 9.08c-2.5.95-16.46 5.02-15.43 4.54 3.64-1.71 9.08-6.36 9.08-6.36s-15.54 5.04-17.25 5.45c-1.66.4 9.07-5.45 9.07-5.45s-12.57 2.67-15.43 2.73c-2.86.05-16.33-1.78-15.44-1.82 12.14-.53 10.9-3.63 10.9-3.63s-8.4-.41-13.62-1.82c-5.21-1.4-9.46-3.71-10.89-4.54-1.44-.82-2.73-2.72-2.73-2.72s15.59 2.59 17.25 0c.24-.37-2.05-.78-5.45-.91-3.39-.13-12.71-7.26-12.71-7.26s11.58 6.58 14.28 5.88c2.7-.7-2.33-1.71-3.38-2.25-1.05-.54-9.48-6.43-8.17-6.36 5.11.28 4.54-.9 4.54-.9s-4.87-4.56-6.36-7.27c-1.49-2.71-10.78-22.65-10.89-30.87-.12-8.22-.32-17.88-.91-19.07-.6-1.18-4.24-6.27-4.54-9.98-.31-3.72 0-12.71 0-12.71l4.07 5.04s1.56 1.22 2.28.4c.73-.81-.16-3.17 0-3.63.17-.46 7.87 2.55 8.18 1.82.3-.73 3.55-11.38 3.63-12.71.07-1.34.35-5.52-2.73-5.45-3.07.07-8.39 2.03-9.08 3.63-.69 1.6-1.81 4.54-1.81 4.54s-.35 1.6-.91-.91c-.56-2.5-1.22-5.83-1.82-4.54-.59 1.3-5.88 7.05-6.35 9.99-.48 2.93.72 16.51 2.72 19.97 2 3.47-1.35 17.12-2.72 19.07-1.37 1.96-2.92 4.63-3.63 4.54-.71-.08 1.59-3.51.9-3.63-.68-.12-8.35 7.69-18.15 9.99-9.81 2.29-14.61-.17-16.35-.91-1.73-.75-6.35-3.63-6.35-3.63s12.12 1.15 14.52-.91c2.41-2.07 8.12-6.89 9.08-9.08.97-2.19 2.97-11.58 0-15.44-2.96-3.85-5.79-10.02-6.35-10.89-.56-.87-2.56-1.21-2.73 0-.16 1.21-.9 3.63-.9 3.63s-1.56-3.37-1.82-4.54c-.25-1.17-1.16-12.28 3.63-17.25 4.8-4.97 10.36-10.48 15.44-12.71 5.07-2.24 9.08-4.54 9.08-4.54h-8.17s2.89-4.33 6.35-4.54c3.46-.21 13.25-.4 16.34 1.82 3.1 2.21 11.13 7.56 11.81 8.17.67.6 1.77-.43 1.81-1.82.04-1.39-.28-8.43-.9-9.08-.63-.65-14.83-15.35-19.98-15.43-5.15-.08-17.25-.91-17.25-.91s2.16-23.42.91-27.24c-1.26-3.83-1.82-4.54-1.82-4.54s8.14.2 13.62 1.82c5.48 1.61 10.41 3.06 8.17 5.44-2.23 2.39-6.05 1.96-6.05 1.96s-8.43 3.42-10.35 10.81a7.436 7.436 0 0 0 2.29 7.32c2.02 1.83 8.47-3.06 13.2-3.74 4.74-.69 20.05-6.93 29.06-1.82 9.01 5.11 10.52 14.31 9.47 20.53-1.05 6.21-1.25 6.76-1.25 6.76s9.24 4.14 17.2 1.77c7.97-2.38 14.77-5.82 18.16-9.08 3.39-3.27 7.14-7.47 5.45-13.62-1.7-6.16-2.73-5.45-2.73-5.45s7.9-5.04 6.36-10.9c-.21-.78 5.26.57 7.26.91 2 .34 7.91 2.01 8.18 1.82.26-.19.3 2.94-1.82 3.63-2.12.68-6.17-.05-6.17-.05l-7.32 5.55s-.77 6.47.99 10.01 5.24 8.1 5.24 8.1-.67 9.36-4.54 14.52c-3.88 5.16-10.52 11.46-10.52 11.46s3.29.71-7.67 2.7c-10.95 2-19.64-1.78-19.64-1.78s1.51 10.09 6.96 14.86c5.44 4.77 6.17 7.1 9.98 8.17 3.81 1.07 7.27 4.54 7.27 4.54s1.25-1.77 0-3.63c-1.25-1.86-3.64-4.54-3.64-4.54h8.18s.67 1.43 1.81.91c1.15-.52 16.71-18.76 15.44-29.96-.08-.69-4.54 1.81-4.54 1.81s4.36-5.85 4.54-7.26c.18-1.41-4.54 1.81-4.54 1.81s8.53-7.92 12.71-9.07c4.18-1.16 11.13-3.22 12.71-4.54 1.58-1.33 3.4-10.16-.91-11.81-4.31-1.65-6.4-3.67-6.35-4.54.04-.86.33-4.81-.91-5.45-1.25-.63-2.83-3.11-1.82-3.63 1.01-.51 4.4-1.37 5.45 0 1.05 1.38-.5 6.69 6.36 7.27 1.25.1-.05-9.34 2.72-9.08 2.77.26 8.45-.58 9.08 2.72.62 3.3-2.98 4.63-2.72 7.26.25 2.64 2.32 24.9-1.82 36.32-3.41 9.39-15.99 31.08-17.25 33.6-1.27 2.51-6.7 11.51-3.63 17.25 3.06 5.73 2.72 2.72 2.72 2.72s7.25-3.83 9.08-7.26c1.83-3.44 8.39-10.07 7.26-12.71-1.12-2.65-1.81-2.73-1.81-2.73s8.39-2.95 10.89-1.81c2.5 1.13 11.98 5.33 13.62 8.17 1.65 2.84 3.83 5.43 2.73 5.45-1.1.01-2.73 0-2.73 0s-.38 3.99-.91 4.54c-.52.54-2.72-4.54-2.72-4.54s-.43-.44-.91 0c-.47.43-1.81 2.72-1.81 2.72s-1.76-2.46-1.82-1.82c-.06.64-.91 8.18-.91 8.18s-5.31-6.28-5.44-4.54c-.14 1.73-1.17 7.2-1.82 8.17-.65.96-2.39-3.75-3.63-3.63-1.24.11-1.81-.37-1.82.9-.01 1.27-.33 7.55-.91 8.18-.57.62-3.61-2.64-4.54-1.82-.92.82.91 4.54.91 4.54s1.17 2.77.91 3.63c-.26.86-2.74-2.24-2.72-.91.01 1.34 3.89 12.3 4.54 9.08.54-2.72 1.81-4.54 1.81-4.54s2.75 3.53 3.63 3.63c.89.11 1.9.36 1.82-.9-.08-1.26-.53-6.95 0-7.27.53-.31 3.74 3.16 4.54 2.73.72-.39 1.7-.84 1.82-2.73.11-1.89-.41-7.13 0-7.26.4-.13 4.31 2.52 4.53 1.82.23-.71 1.91.07 1.82-1.82-.09-1.89-.29-5.57 0-6.36.29-.78 3.95 2.7 4.54 1.82.59-.88.86-4.5.91-5.45.04-.94.91-.91.91-.91s2.2 1.25 2.72.91c.52-.33 1.61.26 3.63-.91 2.03-1.17 1.82-3.63 1.82-3.63s5.72 6.63 7.26 6.36c1.19-.21.91 4.54.91 4.54s.27 1.19.91.91c.63-.29 4.48 2.69 4.54 3.63.04.7-1.49 2.38-2.73 2.72-1.23.35-2.44 1.08-4.54 1.82-2.09.73-4.08.48-4.54.9-.45.43-4.39 5.94-5.44 6.36-1.06.42.9-3.63.9-3.63s-1.09.29-1.81.91c-.73.62 0-1.82 0-1.82s1.07-2.13-2.73.91c-3.79 3.04-9.98 9.08-9.98 9.08s7.53 1.95 8.17 2.72c.63.78-6.06.29-9.99 4.54-3.92 4.26-5.65 7.38-4.54 7.27 1.11-.12 8.17-7.27 8.17-7.27s-3.44 8.08-3.63 9.08c-.19 1.01.58 1.06 1.82.91 1.23-.15 5.44 0 5.44 0s-4.02 1.01-4.54 1.82c-.51.8-.5 2.2.91 2.72 1.42.52 10.7 6.63 10.9 7.26.2.64-.56 1.06-1.82.91-1.26-.15-5.87-1.78-7.26-2.72-1.39-.95-8.88-7-9.08-6.36-.2.64 3.41 7.07 3.63 7.26.22.2 4.94 8.43 5.45 9.99.5 1.57.97 4.39.91 4.54-.06.15 0 1.82 0 1.82Z"}),react.createElement("path",{className:"back_side_svg__shp1",d:"M209.96 340.5c1.77-1.33 2.75-1.74 2.72-2.72-.03-.98-2.53-2.38-3.63-1.82-1.1.57-2.82 3.38-2.73 3.64.1.25.33 1.91.91 1.81.58-.09.95.43 2.73-.91Z"}))))};function Cards_extends(){return Cards_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Cards_extends.apply(this,arguments)}var OneNightWerewolfCard=function OneNightWerewolfCard(args){return react.createElement(Card,Cards_extends({backIcon:react.createElement(back_side,null)},args))},Werewolf=function Werewolf(){return react.createElement(OneNightWerewolfCard,{frontIcon:react.createElement(werewolf,null),headline:"Werewolf",description:"\n            Your role is to not get caught.\n            At night, open your eyes and look for other werewolves.\n            If there’s only one werewolf, look at one of the center cards.\n            ",tendency:consts_Tendency.evil,showDescription:!0})};try{OneNightWerewolfCard.displayName="OneNightWerewolfCard",OneNightWerewolfCard.__docgenInfo={description:"",displayName:"OneNightWerewolfCard",props:{frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},tendency:{defaultValue:null,description:"",name:"tendency",required:!0,type:{name:"enum",value:[{value:'"Good"'},{value:'"Evil"'}]}},showDescription:{defaultValue:null,description:"",name:"showDescription",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/games/OneNightWerewolf/components/Card/Cards.tsx#OneNightWerewolfCard"]={docgenInfo:OneNightWerewolfCard.__docgenInfo,name:"OneNightWerewolfCard",path:"src/games/OneNightWerewolf/components/Card/Cards.tsx#OneNightWerewolfCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/games/OneNightWerewolf/components/Card/WerewolfCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Roles:()=>Roles,__namedExportsOrder:()=>__namedExportsOrder});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _templateObject,react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Cards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/games/OneNightWerewolf/components/Card/Cards.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/OneNightWerewolf/Cards/Werewolf",component:_Cards__WEBPACK_IMPORTED_MODULE_5__.k7};var Page=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  margin: auto;\n  \n  background-color: black;\n"]))),Roles=function Template(){return react__WEBPACK_IMPORTED_MODULE_4__.createElement(Page,null,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Cards__WEBPACK_IMPORTED_MODULE_5__.k7,null))}.bind({}),__namedExportsOrder=["Roles"]},"./src/main.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Roles:()=>Roles,__namedExportsOrder:()=>main_stories_namedExportsOrder,default:()=>main_stories});__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),react_dom=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/react-dom/index.js")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const globalStyles=(0,styled_components_browser_esm.vJ)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  html,body, #root {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    width: 100%;\n    height: 100%;\n  }\n"])));var common_templateObject,_templateObject2;function common_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var RowContainer=styled_components_browser_esm.ZP.div(common_templateObject||(common_templateObject=common_taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  flex: ",";\n  overflow: ",";\n"])),(function(_ref){return _ref.stretched?1:void 0}),(function(_ref2){return _ref2.scrollable?"auto":void 0})),ColContainer=(0,styled_components_browser_esm.ZP)(RowContainer)(_templateObject2||(_templateObject2=common_taggedTemplateLiteral(["\n  flex-direction: column;\n"])));try{RowContainer.displayName="RowContainer",RowContainer.__docgenInfo={description:"",displayName:"RowContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},stretched:{defaultValue:null,description:"",name:"stretched",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:null,description:"",name:"scrollable",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/common.tsx#RowContainer"]={docgenInfo:RowContainer.__docgenInfo,name:"RowContainer",path:"src/common/components/common.tsx#RowContainer"})}catch(__react_docgen_typescript_loader_error){}try{ColContainer.displayName="ColContainer",ColContainer.__docgenInfo={description:"",displayName:"ColContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},stretched:{defaultValue:null,description:"",name:"stretched",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:null,description:"",name:"scrollable",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/common.tsx#ColContainer"]={docgenInfo:ColContainer.__docgenInfo,name:"ColContainer",path:"src/common/components/common.tsx#ColContainer"})}catch(__react_docgen_typescript_loader_error){}var GameCard_templateObject,Cards=__webpack_require__("./src/games/OneNightWerewolf/components/Card/Cards.tsx");var Table=styled_components_browser_esm.ZP.div(GameCard_templateObject||(GameCard_templateObject=function GameCard_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  margin: auto;\n"])));const GameCard=function(){return react.createElement(Table,null,react.createElement(Cards.k7,null))};var src_templateObject,Lobby=function Lobby(){return react.createElement(GameCard,null)};var AppWrapper=(0,styled_components_browser_esm.ZP)(RowContainer)(src_templateObject||(src_templateObject=function src_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n"]))),App=function App(){return react.createElement(react.Fragment,null,react.createElement(globalStyles,null),react.createElement(AppWrapper,null,react.createElement(RowContainer,{stretched:!0},react.createElement(Lobby,null))))};!function renderApp(Component){react_dom.render(react.createElement(Component,null),document.getElementById("root"))}(App);const main_stories={title:"Components/main",component:App};var Roles=function Template(){return react.createElement(App,null)}.bind({}),main_stories_namedExportsOrder=["Roles"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./games/OneNightWerewolf/components/Card/WerewolfCard.stories.tsx":"./src/games/OneNightWerewolf/components/Card/WerewolfCard.stories.tsx","./main.stories.tsx":"./src/main.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[874],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);