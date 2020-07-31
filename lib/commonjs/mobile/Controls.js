var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _icons=require("./icons");var _ProgressBar=_interopRequireDefault(require("./ProgressBar"));var _Utils=require("./Utils");var _jsxFileName="/home/harish/workspace/rn/react-native-youtube-player/src/mobile/Controls.tsx";var TIME_TO_HIDE_CONTROLS=2000;var _default=function _default(_ref){var play=_ref.play,topBar=_ref.topBar,ready=_ref.ready,duration=_ref.duration,currentTime=_ref.currentTime,playVideo=_ref.playVideo,pauseVideo=_ref.pauseVideo,seekTo=_ref.seekTo,toggleFS=_ref.toggleFS,fullScreen=_ref.fullScreen,showFullScreenButton=_ref.showFullScreenButton;var _useState=(0,_react.useState)(true),_useState2=(0,_slicedToArray2.default)(_useState,2),visible=_useState2[0],setVisible=_useState2[1];var ref=(0,_react.useRef)(0);var hideControls=function hideControls(){if(ref.current!==0)clearTimeout(ref.current);if(play&&ready){ref.current=setTimeout(function(){setVisible(false);},TIME_TO_HIDE_CONTROLS);}};var hideAfterExecute=function hideAfterExecute(action){hideControls();return action;};(0,_react.useEffect)(function(){hideControls();return function(){clearTimeout(ref.current);};},[play,ready]);var progress=currentTime!==0&&duration!==0?currentTime/duration:0;return _react.default.createElement(_reactNative.View,{style:[styles.container,{paddingHorizontal:fullScreen?40:0}],pointerEvents:"auto",__source:{fileName:_jsxFileName,lineNumber:72}},_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return hideAfterExecute(setVisible)(true);},style:styles.upperView,__source:{fileName:_jsxFileName,lineNumber:76}},_react.default.createElement(_reactNative.View,{style:styles.upperView,__source:{fileName:_jsxFileName,lineNumber:80}})),visible&&_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return hideAfterExecute(function(){})();},__source:{fileName:_jsxFileName,lineNumber:84}},_react.default.createElement(_reactNative.View,{style:[styles.controls,{paddingHorizontal:fullScreen?40:5,backgroundColor:ready?"rgba(0,0,0,0.6)":"#000"}],__source:{fileName:_jsxFileName,lineNumber:85}},topBar&&topBar({play:play,fullScreen:fullScreen}),!ready&&_react.default.createElement(_reactNative.ActivityIndicator,{size:"small",color:"#FFF",__source:{fileName:_jsxFileName,lineNumber:95}}),ready&&play&&_react.default.createElement(_icons.PauseIcon,{onPress:pauseVideo,__source:{fileName:_jsxFileName,lineNumber:96}}),ready&&!play&&_react.default.createElement(_icons.PlayIcon,{onPress:playVideo,__source:{fileName:_jsxFileName,lineNumber:97}}),_react.default.createElement(_reactNative.View,{style:[styles.footer,{bottom:fullScreen?30:10}],__source:{fileName:_jsxFileName,lineNumber:99}},_react.default.createElement(_reactNative.Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:100}}," ",(0,_Utils.sec2time)(currentTime)," "),_react.default.createElement(_reactNative.View,{style:styles.footerRight,__source:{fileName:_jsxFileName,lineNumber:101}},_react.default.createElement(_reactNative.Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:102}}," ",(0,_Utils.sec2time)(duration)," "),showFullScreenButton&&_react.default.createElement(_react.default.Fragment,{__source:{fileName:_jsxFileName,lineNumber:104}},fullScreen?_react.default.createElement(_icons.ExitFSIcon,{size:16,onPress:toggleFS,__source:{fileName:_jsxFileName,lineNumber:106}}):_react.default.createElement(_icons.FSIcon,{size:16,onPress:toggleFS,__source:{fileName:_jsxFileName,lineNumber:108}})))))),_react.default.createElement(_ProgressBar.default,(0,_extends2.default)({value:progress},{fullScreen:fullScreen,visible:visible,seekTo:seekTo,duration:duration,pauseVideo:pauseVideo,playVideo:playVideo},{__source:{fileName:_jsxFileName,lineNumber:117}})));};exports.default=_default;var styles=_reactNative.StyleSheet.create({container:(0,_objectSpread2.default)({},_reactNative.StyleSheet.absoluteFillObject,{elevation:999}),upperView:(0,_objectSpread2.default)({},_reactNative.StyleSheet.absoluteFillObject,{elevation:11}),controls:(0,_objectSpread2.default)({},_reactNative.StyleSheet.absoluteFillObject,{alignContent:"center",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.6)"}),footer:{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",position:"absolute"},text:{color:"#FFF",fontSize:12,marginRight:0},footerRight:{flexDirection:"row",alignItems:"center"},progress:{width:"100%",height:2,position:"absolute",bottom:0,backgroundColor:"red"}});
//# sourceMappingURL=Controls.js.map