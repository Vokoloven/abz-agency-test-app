"use strict";(self.webpackChunkabz_agency_test_app=self.webpackChunkabz_agency_test_app||[]).push([[9449,1208],{1208:function(e,n,t){t.r(n),t.d(n,{regExp:function(){return r}});var r={name:/^[a-zA-Z '.-]*$/,phone:/^(\+38[ ])?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-.]?([0-9]{2})[-.]?([0-9]{2})$/,email:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i}},9449:function(e,n,t){t.r(n),t.d(n,{schema:function(){return u}});var r=t(4165),i=t(5861),a=t(8855),o=t(1208),u=a.Ry().shape({name:a.Z_().matches(o.regExp.name,"Fill correct name").min(2).max(60).defined().required(),email:a.Z_().matches(o.regExp.email,"Fill valid email").defined().required(),phone:a.Z_().matches(o.regExp.phone,"Fill phone in correct format +38 (XXX) XXX - XX - XX").defined().required(),radio:a.nK().oneOf(["1","2","3","4"]).defined().required(),photo:a.nK().required().test("name","You should provide the file",(function(e){return 0!==(null===e||void 0===e?void 0:e.length)})).test("size","The file size should be no more than 5Mb",(function(e){return 0!==(null===e||void 0===e?void 0:e.length)&&(e&&e[0].size<=5e6)})).test("type","Supported only jpg/jpeg files",(function(e){if(e)return 0!==(null===e||void 0===e?void 0:e.length)&&(e&&"image/jpeg"===e[0].type)})).test("ratio","Resolution should be at least 70x70px",function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=new FileReader;0===n.length&&e(!1),t.readAsDataURL(n[0]),t.onload=function(n){var t=new Image;t.src=n.target.result,t.onload=function(){var n=this.width,t=this.height;e(!(n<70||t<70))}}})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())})}}]);
//# sourceMappingURL=9449.38647417.chunk.js.map