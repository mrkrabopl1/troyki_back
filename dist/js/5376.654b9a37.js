"use strict";(self.webpackChunksamura_snikers=self.webpackChunksamura_snikers||[]).push([[5376],{75376:function(e,t,n){n.r(t);var r=n(95266),i=n(67294),u=n(20207),c={position:"relative",height:"40px"},l=function(e){var t=e.min,n=e.max,l=e.onChangeLeft,o=e.onChangeRight,a=(0,i.useRef)(null),s=(0,i.useRef)(null),f=(0,i.useRef)(null),h=(0,i.useRef)(!1),d=(0,i.useRef)(!1);(0,i.useEffect)((function(){a.current&&(f.current&&t>=0&&t<=1&&W((a.current.clientWidth-2*f.current.clientWidth)*t+f.current.clientWidth),s.current&&n>=0&&n<=1&&R(a.current.clientWidth*n-s.current.clientWidth))}),[t,n]);var m=(0,i.useState)(0),v=(0,r.Z)(m,2),p=v[0],W=v[1],g=(0,i.useState)(1),M=(0,r.Z)(g,2),C=M[0],R=M[1];return i.createElement("div",{onMouseLeave:function(){h.current=!1,d.current=!1},onMouseUp:function(){h.current=!1,d.current=!1},onMouseMove:function(e){e.preventDefault(),e.clientX;var t=Math.max(e.clientX,0);if(a.current){if(h.current&&f.current){var n=a.current.getBoundingClientRect().left,r=Math.max(Math.min(t-n+f.current.clientWidth/2,C),f.current.clientWidth);W(r),l&&l((r-f.current.clientWidth)/(a.current.clientWidth-2*f.current.clientWidth))}if(d.current&&f.current){var i=a.current.getBoundingClientRect().left,u=Math.min(Math.max(t-i-f.current.clientWidth/2,p),a.current.clientWidth-f.current.clientWidth);R(u),o&&o((u-f.current.clientWidth)/(a.current.clientWidth-2*f.current.clientWidth))}}},style:c,ref:a},i.createElement("div",{style:{position:"relative",left:p+"px",height:"inherit",backgroundColor:"red",width:C-p+"px"}},i.createElement("div",{className:u.default.sliderControl,onMouseDown:function(e){e.preventDefault(),h.current=!0},ref:f,style:{position:"absolute",left:-10,top:0,bottom:0,margin:"auto"}}),i.createElement("div",{className:u.default.sliderControl,onMouseDown:function(e){e.preventDefault(),d.current=!0},ref:s,style:{position:"absolute",right:-10,top:0,bottom:0,margin:"auto"}})))};function o(e,t){return e.memo==t.memo}t.default=(0,i.memo)(l,o)}}]);