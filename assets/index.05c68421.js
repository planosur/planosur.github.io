import{r,d as t,L as p,j as e,C as c,o as f,b3 as g,b4 as s,b5 as h}from"./vendor.00202c1b.js";import{u as m,P as b}from"./PlanosurLogo.155df7cd.js";const I=()=>{const{login:d,isError:o,isLoading:a}=m(),[n,l]=r.exports.useState(""),u=r.exports.useRef(null);return r.exports.useEffect(()=>{var i;o&&(l(""),(i=u.current)==null||i.focus())},[o]),t(p,{children:[e(c,{pos:"absolute",left:0,right:0,top:20,children:e(f,{as:b,color:"red.500",w:300,h:"auto"})}),t(c,{gap:2,h:"100vh",children:[t(g,{value:n,onComplete:d,onChange:l,isInvalid:o&&n==="",isDisabled:a,placeholder:"\u{1F511}",variant:"filled",size:"lg",type:"alphanumeric",focusBorderColor:"yellow.400",autoFocus:!0,mask:!0,manageFocus:!0,otp:!0,children:[e(s,{ref:u}),e(s,{}),e(s,{}),e(s,{}),e(s,{}),e(s,{})]}),a&&e(h,{colorScheme:"yellow",size:"xs",isIndeterminate:!0,w:340,pos:"absolute",transform:"auto",translateY:"3em"})]})]})};export{I as default};
