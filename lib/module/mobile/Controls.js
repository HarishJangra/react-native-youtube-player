import _objectSpread from"@babel/runtime/helpers/objectSpread";import _extends from"@babel/runtime/helpers/extends";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";var _jsxFileName="/home/harish/workspace/rn/react-native-youtube-player/src/mobile/Controls.tsx";import React,{useState,useRef,useEffect}from"react";import{View,StyleSheet,TouchableWithoutFeedback,Text,ActivityIndicator}from"react-native";import{PlayIcon,PauseIcon,FSIcon,ExitFSIcon}from"./icons";import ProgressBar from"./ProgressBar";import{sec2time}from"./Utils";var TIME_TO_HIDE_CONTROLS=2000;export default(function(_ref){var play=_ref.play,topBar=_ref.topBar,ready=_ref.ready,duration=_ref.duration,currentTime=_ref.currentTime,playVideo=_ref.playVideo,pauseVideo=_ref.pauseVideo,seekTo=_ref.seekTo,toggleFS=_ref.toggleFS,fullScreen=_ref.fullScreen,showFullScreenButton=_ref.showFullScreenButton;var _useState=useState(true),_useState2=_slicedToArray(_useState,2),visible=_useState2[0],setVisible=_useState2[1];var ref=useRef(0);var hideControls=function hideControls(){if(ref.current!==0)clearTimeout(ref.current);if(play&&ready){ref.current=setTimeout(function(){setVisible(false);},TIME_TO_HIDE_CONTROLS);}};var hideAfterExecute=function hideAfterExecute(action){hideControls();return action;};useEffect(function(){hideControls();return function(){clearTimeout(ref.current);};},[play,ready]);var progress=currentTime!==0&&duration!==0?currentTime/duration:0;return React.createElement(View,{style:[styles.container,{paddingHorizontal:fullScreen?40:0}],pointerEvents:"auto",__source:{fileName:_jsxFileName,lineNumber:72}},React.createElement(TouchableWithoutFeedback,{onPress:function onPress(){return hideAfterExecute(setVisible)(true);},style:styles.upperView,__source:{fileName:_jsxFileName,lineNumber:76}},React.createElement(View,{style:styles.upperView,__source:{fileName:_jsxFileName,lineNumber:80}})),visible&&React.createElement(TouchableWithoutFeedback,{onPress:function onPress(){return hideAfterExecute(function(){})();},__source:{fileName:_jsxFileName,lineNumber:84}},React.createElement(View,{style:[styles.controls,{paddingHorizontal:fullScreen?40:5,backgroundColor:ready?"rgba(0,0,0,0.6)":"#000"}],__source:{fileName:_jsxFileName,lineNumber:85}},topBar&&topBar({play:play,fullScreen:fullScreen}),!ready&&React.createElement(ActivityIndicator,{size:"small",color:"#FFF",__source:{fileName:_jsxFileName,lineNumber:95}}),ready&&play&&React.createElement(PauseIcon,{onPress:pauseVideo,__source:{fileName:_jsxFileName,lineNumber:96}}),ready&&!play&&React.createElement(PlayIcon,{onPress:playVideo,__source:{fileName:_jsxFileName,lineNumber:97}}),React.createElement(View,{style:[styles.footer,{bottom:fullScreen?30:10}],__source:{fileName:_jsxFileName,lineNumber:99}},React.createElement(Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:100}}," ",sec2time(currentTime)," "),React.createElement(View,{style:styles.footerRight,__source:{fileName:_jsxFileName,lineNumber:101}},React.createElement(Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:102}}," ",sec2time(duration)," "),showFullScreenButton&&React.createElement(React.Fragment,{__source:{fileName:_jsxFileName,lineNumber:104}},fullScreen?React.createElement(ExitFSIcon,{size:16,onPress:toggleFS,__source:{fileName:_jsxFileName,lineNumber:106}}):React.createElement(FSIcon,{size:16,onPress:toggleFS,__source:{fileName:_jsxFileName,lineNumber:108}})))))),React.createElement(ProgressBar,_extends({value:progress},{fullScreen:fullScreen,visible:visible,seekTo:seekTo,duration:duration,pauseVideo:pauseVideo,playVideo:playVideo},{__source:{fileName:_jsxFileName,lineNumber:117}})));});var styles=StyleSheet.create({container:_objectSpread({},StyleSheet.absoluteFillObject,{elevation:999}),upperView:_objectSpread({},StyleSheet.absoluteFillObject,{elevation:11}),controls:_objectSpread({},StyleSheet.absoluteFillObject,{alignContent:"center",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.6)"}),footer:{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",position:"absolute"},text:{color:"#FFF",fontSize:12,marginRight:0},footerRight:{flexDirection:"row",alignItems:"center"},progress:{width:"100%",height:2,position:"absolute",bottom:0,backgroundColor:"red"}});
//# sourceMappingURL=Controls.js.map