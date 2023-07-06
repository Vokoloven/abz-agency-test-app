"use strict";(self.webpackChunkabz_agency_test_app=self.webpackChunkabz_agency_test_app||[]).push([[1029,9321,2609,4258,4936,9794,9198,9689,3639,7417,5532,515,3655,6933,3198,9129,7341,4673,2986,7400,6479,3588,7026,6186,8878,8736,3466,9409,9730,8125,6713],{2609:function(n,t,e){e.r(t),e.d(t,{Button:function(){return c}});var r,i=e(168),o=e(1413),a=e(6444),u=e(407),d=e(4031),c=(0,a.default)("button")((0,u.bU)({variants:{primary:{minWidth:100,py:1,border:"none",borderRadius:80,fontWeight:"regular",fontSize:2,lineHeight:2,bg:"primary",color:"black"}}}),(function(n){var t=n.sx;return(0,o.Z)({},t)}),(function(n){return n.disabled&&(0,a.css)(r||(r=(0,i.Z)(["\n            background-color: ",";\n            color: ",";\n        "])),n.theme.colors.disabled,n.theme.colors.white)}),(0,d.composeUtility)())},9321:function(n,t,e){e.r(t),e.d(t,{Button:function(){return r.Button}});var r=e(2609)},4936:function(n,t,e){e.r(t),e.d(t,{Card:function(){return d}});var r=e(1895),i=e(3466),o=e(7400),a=e(5532),u=e(184),d=function(n){var t=n.props,e=t.name,d=t.position,c=t.email,l=t.phone,s=t.photo;return(0,u.jsx)(r.Box,{p:5,width:"100%",bg:"white",borderRadius:10,children:(0,u.jsxs)(r.Box,{as:"ul",display:"flex",alignItems:"center",flexDirection:"column",children:[(0,u.jsx)(r.Box,{as:"li",children:(0,u.jsx)(r.Box,{as:"img",src:s,alt:"photo",width:70,height:70,borderRadius:"50%",loading:"lazy"})}),(0,u.jsx)(o.Tooltip,{sx:{mt:20},itemName:"text",children:e}),(0,u.jsx)(i.Typography,{as:"li",variant:"body",mt:20,children:d}),(0,u.jsx)(o.Tooltip,{itemName:"email",children:c}),(0,u.jsx)(i.Typography,{as:"li",variant:"body",children:(0,u.jsx)(r.Box,{as:"a",href:"tel:".concat(l),children:(0,a.phoneFilter)(l).replace(/[-]/g," ")})})]})})}},4258:function(n,t,e){e.r(t),e.d(t,{Card:function(){return r.Card}});var r=e(4936)},9198:function(n,t,e){e.r(t),e.d(t,{Container:function(){return u}});var r,i=e(168),o=e(6444),a=e(4031),u=(0,o.default)("div")((function(n){return(0,o.css)(r||(r=(0,i.Z)(["\n            margin-left: auto;\n            margin-right: auto;\n            padding-left: ",";\n            padding-right: ",";\n            @media screen and (min-width: ",") {\n                max-width: ",";\n            }\n            @media screen and (min-width: ",") {\n                max-width: ",";\n                padding-left: ",";\n                padding-right: ",";\n            }\n            @media screen and (min-width: ",") {\n                max-width: ",";\n                padding-left: 60px;\n                padding-right: 60px;\n            }\n            @media screen and (min-width: ",") {\n                max-width: ",";\n                padding-left: 0;\n                padding-right: 0;\n            }\n        "])),n.theme.space[4],n.theme.space[4],n.theme.breakpoints.mobile,n.theme.breakpoints.mobile,n.theme.breakpoints.tablet,n.theme.breakpoints.tablet,n.theme.space[8],n.theme.space[8],n.theme.breakpoints.laptop,n.theme.breakpoints.laptop,n.theme.breakpoints.desktopS,n.theme.breakpoints.desktopS)}),(0,a.composeUtility)())},9794:function(n,t,e){e.r(t),e.d(t,{Container:function(){return r.Container}});var r=e(9198)},3639:function(n,t,e){e.r(t),e.d(t,{Spinner:function(){return u}});var r=e(1413),i=e(7417),o=e(1895),a=e(184),u=function(n){var t=n.loading,e=n.sx;return function(n){if("pending"===n)return(0,a.jsx)(o.Box,{sx:(0,r.Z)({},e),children:(0,a.jsx)(i.StyledSpinner,{})})}(t)}},9689:function(n,t,e){e.r(t),e.d(t,{Spinner:function(){return r.Spinner}});var r=e(3639)},7417:function(n,t,e){e.r(t),e.d(t,{StyledSpinner:function(){return l}});var r,i,o=e(168),a=e(6444),u=e(184),d=(0,a.keyframes)(r||(r=(0,o.Z)(["\n100% {\n    transform: rotate(360deg);\n}\n"]))),c=(0,a.default)("div")(i||(i=(0,o.Z)(["\n    border-width: 4px;\n    border-style: solid;\n    border-color: ","\n        "," ","\n        transparent;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    animation: "," 1.5s infinite;\n    position: relative;\n\n    &::before,\n    &::after {\n        content: '';\n        width: 4px;\n        height: 4px;\n        border-radius: 50%;\n        background: ",";\n        position: absolute;\n        left: 2px;\n    }\n\n    &::before {\n        top: 3px;\n        transform: translate(5%, -10%);\n    }\n\n    &::after {\n        transform: translate(4%, 5%);\n        bottom: 3px;\n    }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary}),d,(function(n){return n.theme.colors.secondary})),l=function(){return(0,u.jsx)(c,{})}},515:function(n,t,e){e.r(t),e.d(t,{TextInput:function(){return p}});var r=e(1413),i=e(7341),o=e(4673),a=e(2986),u=e(3466),d=e(1895),c=e(3198),l=e(6933),s=e(184),p=function(n){var t=n.register,e=n.input,p=n.error;return c.inputs.map((function(n){var c=n.id,f=n.placeholder;return(0,s.jsxs)(d.Box,{width:"100%",sx:{":not(:last-child)":{marginBottom:"32px"}},children:[(0,s.jsxs)(a.TextInputWrapper,{children:[(0,s.jsx)(i.StyledTextInput,(0,r.Z)((0,r.Z)({id:c},t(c)),{},{error:null===p||void 0===p?void 0:p[c],type:"text"}),c),(0,s.jsx)(o.StyledTextPlaceholder,{inputValue:e[c],error:null===p||void 0===p?void 0:p[c],children:f})]}),(0,l.handleErrorText)(p,c,u.Typography,d.Box)]},c)}))}},3655:function(n,t,e){e.r(t),e.d(t,{TextInputBox:function(){return o}});var r=e(1895),i=e(184),o=function(n){var t=n.children;return(0,i.jsx)(r.Box,{display:"flex",flexDirection:"column",children:t})}},6933:function(n,t,e){e.r(t),e.d(t,{handleErrorText:function(){return i}});var r=e(184),i=function(n,t,e,i){var o;return null!==n&&void 0!==n&&n[t]?(0,r.jsx)(e,{as:"p",variant:"helperText",ml:16,mt:1,color:"error",children:null===n||void 0===n||null===(o=n[t])||void 0===o?void 0:o.message}):"phone"===t?(0,r.jsx)(e,{as:"p",variant:"helperText",ml:16,mt:1,color:"placeholder",children:"+38 (XXX) XXX - XX - XX"}):(0,r.jsx)(i,{width:"100%",py:9})}},5532:function(n,t,e){e.r(t),e.d(t,{TextInput:function(){return r.TextInput},TextInputBox:function(){return a.TextInputBox},inputs:function(){return i.inputs},phoneFilter:function(){return o.phoneFilter}});var r=e(515),i=e(3198),o=e(9129),a=e(3655)},3198:function(n,t,e){e.r(t),e.d(t,{inputs:function(){return r}});var r=[{id:"name",placeholder:"Your name"},{id:"email",placeholder:"Email"},{id:"phone",placeholder:"Phone"}]},9129:function(n,t,e){e.r(t),e.d(t,{phoneFilter:function(){return r}});var r=function(n){var t=0,e=null===n||void 0===n?void 0:n.length;if(t<=e){var r=null===n||void 0===n?void 0:n.replace(/\D/g,"").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);return t=e,"+38 (0"+(r[2],"")+r[2]+(r[3]?") ":"")+r[3]+(r[4]?"-"+r[4]:"")+(r[5]?"-"+r[5]:"")}}},7341:function(n,t,e){e.r(t),e.d(t,{StyledTextInput:function(){return c}});var r,i,o,a=e(168),u=e(6444),d=e(4673),c=(0,u.default)("input")(r||(r=(0,a.Z)(["\n    width: 100%;\n    padding: 13px 15px;\n\n    background-color: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    outline: none;\n    box-shadow: none;\n\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n    color: ",";\n\n    ","\n\n    &:focus + "," {\n        top: 0;\n        left: 12px;\n        transition: all 0.2s ease-in-out;\n\n        padding-left: ",";\n        padding-right: ",";\n\n        font-size: ",";\n        line-height: ",";\n\n        background-color: ",";\n\n        ","\n    }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.radii[1]}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.lineHeights[2]}),(function(n){return n.theme.colors.black}),(function(n){return!!n.error&&(0,u.css)(i||(i=(0,a.Z)(["\n            border: 2px solid ",";\n            padding: 12px 14px;\n        "])),(function(n){return n.theme.colors.error}))}),d.StyledTextPlaceholder,(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.lineHeights[1]}),(function(n){return n.theme.colors.background}),(function(n){return!!n.error&&(0,u.css)(o||(o=(0,a.Z)(["\n           color ","\n        "])),(function(n){return n.theme.colors.error}))}))},4673:function(n,t,e){e.r(t),e.d(t,{StyledTextPlaceholder:function(){return d}});var r,i,o,a=e(168),u=e(6444),d=(0,u.default)("p")(r||(r=(0,a.Z)(["\n    position: absolute;\n    top: 50%;\n    left: ",";\n    transform: translateY(-50%);\n\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n    color: ",";\n\n    transition: all 0.2s ease-in-out;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.lineHeights[2]}),(function(n){return n.theme.colors.placeholder}),(function(n){return!!n.inputValue&&(0,u.css)(i||(i=(0,a.Z)(["\n            top: 0;\n            left: 12px;\n\n            padding-left: ",";\n            padding-right: ",";\n\n            font-size: ",";\n            line-height: ",";\n\n            background-color: ",";\n        "])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.lineHeights[1]}),(function(n){return n.theme.colors.background}))}),(function(n){return!!n.error&&(0,u.css)(o||(o=(0,a.Z)(["\n            color: ",";\n        "])),(function(n){return n.theme.colors.error}))}))},2986:function(n,t,e){e.r(t),e.d(t,{TextInputWrapper:function(){return o}});var r,i=e(168),o=(0,e(6444).default)("div")(r||(r=(0,i.Z)(["\n    position: relative;\n    width: 100%;\n"])))},6479:function(n,t,e){e.r(t),e.d(t,{Tooltip:function(){return p}});var r=e(1413),i=e(3466),o=e(7026),a=e(8878),u=e(6186),d=e(1895),c=e(8125),l=e(8736),s=e(184),p=function(n){var t=n.children,e=n.sx,p=n.itemName,f=(0,c.useWindowDimension)().width;return(0,s.jsx)(d.Box,(0,r.Z)((0,r.Z)({as:"li"},e),{},{children:(0,s.jsxs)(u.StyledTooltipCard,{children:[(0,s.jsx)(a.StyledTooltipText,{children:(0,l.tooltipHandler)(p,d.Box,i.Typography,t,f)}),(0,s.jsx)(o.StyledTooltipBox,{children:(0,s.jsx)(i.Typography,{variant:"body",color:"white",children:t})})]})}))}},7400:function(n,t,e){e.r(t),e.d(t,{Tooltip:function(){return r.Tooltip}});var r=e(6479)},3588:function(n,t,e){e.r(t),e.d(t,{sliceText:function(){return i}});var r=function(n){return n>=360&&n<768?32:n>=768&&n<1024?38:n>=1024&&n<1170?26:42},i=function(n,t){if("string"===typeof n){var e=n.length>r(t)?"...":"";return"".concat(n.slice(0,r(t))).concat(e)}}},7026:function(n,t,e){e.r(t),e.d(t,{StyledTooltipBox:function(){return o}});var r,i=e(168),o=(0,e(6444).default)("div")(r||(r=(0,i.Z)(["\n    display: inline-block;\n    position: absolute;\n    bottom: 50%;\n    left: 50%;\n    transform: translate(-50%, 150%);\n\n    @media screen and (min-width: ",") {\n        max-width: 328px;\n        word-wrap: break-word;\n    }\n\n    @media screen and (min-width: ",") {\n        max-width: 344px;\n    }\n\n    @media screen and (min-width: ",") {\n        max-width: 282px;\n    }\n\n    @media screen and (min-width: ",") {\n        max-width: initial;\n        white-space: nowrap;\n        word-wrap: initial;\n    }\n\n    padding: 3px 16px;\n    border-radius: 4px;\n    background-color: ",";\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity, 0.3s ease-in-out;\n\n    z-index: 1;\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.laptop}),(function(n){return n.theme.breakpoints.desktopS}),(function(n){return n.theme.colors.black}))},6186:function(n,t,e){e.r(t),e.d(t,{StyledTooltipCard:function(){return c}});var r,i,o=e(168),a=e(6444),u=e(8878),d=e(7026),c=(0,a.default)("div")(r||(r=(0,o.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & ",":hover + "," {\n        opacity: 1;\n    }\n\n    ","\n"])),u.StyledTooltipText,d.StyledTooltipBox,(function(n){n.sx;return(0,a.css)(i||(i=(0,o.Z)(["\n        margin\n        \n        "])))}))},8878:function(n,t,e){e.r(t),e.d(t,{StyledTooltipText:function(){return o}});var r,i=e(168),o=(0,e(6444).default)("div")(r||(r=(0,i.Z)([""])))},8736:function(n,t,e){e.r(t),e.d(t,{tooltipHandler:function(){return o}});var r=e(3588),i=e(184),o=function(n,t,e,o,a){return"email"===n?(0,i.jsx)(t,{as:"a",href:"mailto:".concat(o),children:(0,i.jsx)(e,{variant:"body",children:(0,r.sliceText)(o,a)})}):(0,i.jsx)(e,{variant:"body",children:(0,r.sliceText)(o,a)})}},9409:function(n,t,e){e.r(t),e.d(t,{Typography:function(){return u}});var r=e(1413),i=e(6444),o=e(407),a=e(4031),u=(0,i.default)("div")((0,o.bU)({variants:{heading:{fontWeight:"regular",fontSize:3,lineHeight:3},body:{fontWeight:"regular",fontSize:2,lineHeight:2},helperText:{fontWeight:"regular",fontSize:1,lineHeight:1}}}),(function(n){var t=n.sx;return(0,r.Z)({},t)}),(0,a.composeUtility)())},3466:function(n,t,e){e.r(t),e.d(t,{Typography:function(){return r.Typography}});var r=e(9409)},9730:function(n,t,e){e.r(t),e.d(t,{useUserFilter:function(){return d}});var r=e(2982),i=e(885),o=e(3855),a=e(6713),u=e(2791),d=function(){var n=(0,o.v9)(a.selectUsers),t=n.usersList,e=n.newUser,d=t.users,c=t.page,l=(0,u.useState)([]),s=(0,i.Z)(l,2),p=s[0],f=s[1],h=(0,u.useRef)(e);(0,u.useEffect)((function(){d.length>0&&1===c&&f([])}),[c,d]),(0,u.useEffect)((function(){d.length>0&&!h.current&&f((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(d))}))}),[d]);var m,x,g=(m=p,x="id",(0,r.Z)(new Map(null===m||void 0===m?void 0:m.map((function(n){return[n[x],n]}))).values()));return null===g||void 0===g?void 0:g.sort((function(n,t){return t.registration_timestamp-n.registration_timestamp}))}},8125:function(n,t,e){e.r(t),e.d(t,{useWindowDimension:function(){return a}});var r=e(885),i=e(2791),o=function(){var n=window;return{width:n.innerWidth,height:n.innerHeight}},a=function(){var n=(0,i.useState)(o()),t=(0,r.Z)(n,2),e=t[0],a=t[1];return(0,i.useEffect)((function(){var n=function(){return a(o())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),e}},6713:function(n,t,e){e.r(t),e.d(t,{selectUsers:function(){return r}});var r=function(n){return n.users}},1029:function(n,t,e){e.r(t);var r=e(1413),i=e(9321),o=e(4258),a=e(9794),u=e(3466),d=e(1895),c=e(3855),l=e(6713),s=e(9689),p=e(3662),f=e(9730),h=e(184);t.default=function(){var n=(0,c.I0)(),t=(0,c.v9)(l.selectUsers),e=t.loading,m=t.newUser,x=t.usersList,g=x.total_pages,v=x.page,b=(0,f.useUserFilter)();return(0,h.jsxs)(a.Container,{bg:"background",py:140,display:"flex",flexDirection:"column",alignItems:"center",id:"users",children:[(0,h.jsx)(u.Typography,{as:"h2",variant:"heading",textAlign:"center",align:"bottom",mb:50,sx:{whiteSpace:"pre-wrap"},children:"Working with GET request"}),(null===b||void 0===b?void 0:b.length)>0&&(0,h.jsx)(d.Box,{width:"100%",display:"grid",gridGap:{mobile:5,tablet:4,laptop:29},gridTemplateColumns:{mobile:"1fr",tablet:"1fr 1fr",laptop:"1fr 1fr 1fr",desktopS:"370px 370px 370px"},children:null===b||void 0===b?void 0:b.map((function(n){return(0,h.jsx)(o.Card,{props:n},n.id)}))}),(0,h.jsx)(s.Spinner,{loading:e,sx:{marginTop:50}}),"pending"!==e&&(0,h.jsx)(i.Button,{variant:"primary",ariaLabel:"Show more",mt:50,minWidth:120,onClick:function(){v<=g&&n((0,p.getUsers)({params:{page:m?1:v+1,count:"6"}}))},sx:(0,r.Z)({},g===v&&{display:"none"}),children:"Show more"})]})}},2982:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(907);var i=e(181);function o(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=1029.ff1be118.chunk.js.map