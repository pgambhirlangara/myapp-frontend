(this["webpackJsonpmyapp-frontend"]=this["webpackJsonpmyapp-frontend"]||[]).push([[0],{101:function(e,t,n){e.exports={copyRight:"Footer_copyRight__1grjn"}},11:function(e,t,n){e.exports={cardWrapper:"Modals_cardWrapper__3t4Sj",form:"Modals_form__2sdFe",SignupContent:"Modals_SignupContent__1B9Ob",button:"Modals_button__2dYp5",input:"Modals_input__e_YvL",modalBg:"Modals_modalBg__hoIdv",forgotPw:"Modals_forgotPw__37i6D",errorMsg:"Modals_errorMsg__3knwL"}},119:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),i=n.n(c),s=n(14),o=n(19),r=(n(119),n(12)),l=n(61),d=n.n(l),u=n(40),j=JSON.parse(localStorage.getItem("login")),b={fetchedSession:j||""},p=Object(u.b)({name:"auth",initialState:b,reducers:{isLoggedIn:function(e,t){e.fetchedSession=t.payload}}}),g=p.actions,h=p.reducer,m=Object(u.b)({name:"questions",initialState:{fetchedData:[],clickedId:""},reducers:{getQuestions:function(e,t){e.fetchedData=t.payload},getClickedId:function(e,t){e.clickedId=t.payload}}}),O=m.actions,f=m.reducer,x=n(188),_=n(2),v=function(){var e=Object(s.c)((function(e){return e.auth.fetchedSession})),t=Object(r.f)(),n=Object(r.g)(),a=Object(s.b)();localStorage.setItem("login",JSON.stringify(e));var c=JSON.parse(localStorage.getItem("login"));return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:d.a.header,children:[Object(_.jsx)(o.b,{to:"/",children:Object(_.jsx)("h1",{className:d.a.logo,onClick:function(){a(O.getClickedId("")),localStorage.removeItem("result")},children:"FF MATCHER"})}),"object"!==typeof c&&Object(_.jsx)("div",{className:d.a.signupLogin,children:[{id:"signup",title:"Sign up"},{id:"login",title:"Log in"}].map((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)(o.b,{to:{pathname:"/".concat(e.id),state:{background:n}},children:Object(_.jsx)(x.a,{className:d.a.signup,children:e.title})})},e.id)}))}),"object"===typeof c&&Object(_.jsx)("div",{children:Object(_.jsx)("div",{children:Object(_.jsx)(x.a,{type:"submit",onClick:function(){localStorage.setItem("login",e),localStorage.removeItem("result"),fetch("http://localhost:3001/logout",{method:"POST",headers:{"content-type":"application/json"},credentials:"include"}).then((function(e){fetch("http://localhost:3001/logout",{headers:{"content-type":"application/json"},credentials:"include"}).then((function(e){e.json().then((function(e){a(g.isLoggedIn(""))}))}))})).catch((function(e){console.log("err",e)})),t.replace("/")},children:"Log out"})})})]})})},S=n(15),N=n(39),y=n(70),I=n(194),k=n(195),C=n(84),w=n(73),F=n.n(w),M=n(60),B=n.n(M),P=n(196),W=n(6),A=n(83),E=n(94),L=n(11),H=n.n(L),R=Object(W.a)({root:{"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#5b8e7d"}}})((function(e){return Object(_.jsx)(I.a,Object(y.a)({},e))})),D=Object(A.a)((function(e){return Object(E.a)({inputField:Object(N.a)({},e.breakpoints.down("sm"),{fontSize:"0.8rem"})})})),J=function(){var e,t,n=Object(a.useState)(""),c=Object(S.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(""),d=Object(S.a)(l,2),u=d[0],j=d[1],b=Object(a.useState)(""),p=Object(S.a)(b,2),h=p[0],m=p[1],O=Object(r.f)(),f=Object(s.b)(),v=Object(a.useState)(""),N=Object(S.a)(v,2),y=N[0],I=N[1],w=null!==(e=null===(t=Object(r.h)("/login"))||void 0===t?void 0:t.isExact)&&void 0!==e&&e,M=D(),W=function(){fetch("http://localhost:3001/me",{credentials:"include"}).then((function(e){e.json().then((function(e){f(g.isLoggedIn(e.data))}))})).catch((function(e){console.log("err",e)}))};Object(a.useEffect)((function(){W()}),[f]);return Object(_.jsx)(k.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description","data-testid":"this is auth",className:H.a.modal,open:w,onClose:function(){O.goBack()},closeAfterTransition:!0,children:Object(_.jsx)(C.a,{in:w,children:Object(_.jsx)("div",{className:(H.a.cardWrapper,H.a.modalBg),children:Object(_.jsx)("div",{className:H.a.SignupContent,children:Object(_.jsxs)("form",{className:H.a.form,onSubmit:function(e){e.preventDefault(),fetch("http://localhost:3001/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:i,password:u}),credentials:"include"}).then((function(e){201===e.status?(O.goBack("/"),W()):fetch("http://localhost:3001/login",{credentials:"include"}),e.json().then((function(e){!e.error&&O.goBack("/"),m(e.error)}))})).catch((function(e){console.log("err",e)}))},noValidate:!0,autoComplete:"off",children:[Object(_.jsx)("div",{className:H.a.input,children:Object(_.jsx)(R,{variant:"outlined",placeholder:"email",name:"email",InputProps:{classes:{input:M.inputField},startAdornment:Object(_.jsx)(P.a,{children:Object(_.jsx)(F.a,{})})},onChange:function(e){o(e.target.value)}})}),Object(_.jsx)("div",{className:H.a.input,children:Object(_.jsx)(R,{variant:"outlined",type:"password",placeholder:"password",name:"password",InputProps:{classes:{input:M.inputField},startAdornment:Object(_.jsx)(P.a,{children:Object(_.jsx)(B.a,{})})},onChange:function(e){j(e.target.value)}})}),Object(_.jsx)("div",{children:Object(_.jsx)("p",{className:h&&H.a.errorMsg||y&&H.a.errorMsg,children:y||(h||"")})}),Object(_.jsx)("div",{className:H.a.button,children:Object(_.jsx)(x.a,{type:"submit",variant:"outlined",onClick:function(){I(""===i||""===u?"Please fill out everything.":"")},children:"Log in"})})]})})})})})},q=n(99),T=n.n(q),z=Object(W.a)({root:{"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#5b8e7d"}}})((function(e){return Object(_.jsx)(I.a,Object(y.a)({},e))})),Q=Object(A.a)((function(e){return Object(E.a)({inputField:Object(N.a)({},e.breakpoints.down("sm"),{fontSize:"0.8rem"})})})),Y=function(){var e,t,n=Object(r.f)(),c=Object(s.b)(),i=Object(a.useState)(""),o=Object(S.a)(i,2),l=o[0],d=o[1],u=Object(a.useState)(""),j=Object(S.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)(""),m=Object(S.a)(h,2),O=m[0],f=m[1],v=Object(a.useState)(""),N=Object(S.a)(v,2),y=N[0],I=N[1],w=Object(a.useState)(""),M=Object(S.a)(w,2),W=M[0],A=M[1],E=Object(a.useState)(""),L=Object(S.a)(E,2),R=L[0],D=L[1],J=Object(a.useState)(""),q=Object(S.a)(J,2),Y=q[0],Z=q[1],G=Object(a.useState)(""),U=Object(S.a)(G,2),V=U[0],X=U[1],K=Q(),$=null!==(e=null===(t=Object(r.h)("/signup"))||void 0===t?void 0:t.isExact)&&void 0!==e&&e,ee=function(){fetch("http://localhost:3001/me",{credentials:"include"}).then((function(e){e.json().then((function(e){c(g.isLoggedIn(e.data))}))})).catch((function(e){console.log("err",e)}))};Object(a.useEffect)((function(){ee()}),[c]);return Object(_.jsx)(k.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:H.a.modal,open:$,onClose:function(){n.goBack()},closeAfterTransition:!0,children:Object(_.jsx)(C.a,{in:$,children:Object(_.jsx)("div",{className:(H.a.cardWrapper,H.a.modalBg),children:Object(_.jsx)("div",{className:H.a.SignupContent,children:Object(_.jsxs)("form",{className:H.a.form,onSubmit:function(e){e.preventDefault(),!R&&!V&&!Y&&fetch("http://localhost:3001/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:l,email:b,password:O,confirmPassword:y}),credentials:"include"}).then((function(e){201===e.status?(n.goBack("/"),ee()):fetch("http://localhost:3001/signup",{credentials:"include"}),e.json().then((function(e){e.error&&A(e.error),!e.error&&!R&&!V&&!Y&&n.goBack("/"),console.log("error2",e.error)}))})).catch((function(e){console.log("err",e)}))},noValidate:!0,autoComplete:"off",children:[Object(_.jsx)("div",{className:H.a.input,children:Object(_.jsx)(z,{variant:"outlined",name:"name",placeholder:"name",InputProps:{classes:{input:K.inputField},startAdornment:Object(_.jsx)(P.a,{children:Object(_.jsx)(T.a,{})})},onChange:function(e){d(e.target.value)}})}),Object(_.jsx)("div",{className:H.a.input,children:Object(_.jsx)(z,{variant:"outlined",placeholder:"email",name:"email",InputProps:{classes:{input:K.inputField},startAdornment:Object(_.jsx)(P.a,{children:Object(_.jsx)(F.a,{})})},onChange:function(e){p(e.target.value)}})}),Object(_.jsx)("div",{className:H.a.input,children:Object(_.jsx)(z,{type:"password",variant:"outlined",placeholder:"password",name:"password",InputProps:{classes:{input:K.inputField},startAdornment:Object(_.jsx)(P.a,{children:Object(_.jsx)(B.a,{})})},onChange:function(e){f(e.target.value)}})}),Object(_.jsx)("div",{className:H.a.input,children:Object(_.jsx)(z,{variant:"outlined",type:"password",placeholder:"password confirmation",name:"confirmPassword",InputProps:{classes:{input:K.inputField},startAdornment:Object(_.jsx)(P.a,{children:Object(_.jsx)(B.a,{})})},onChange:function(e){I(e.target.value)}})}),Object(_.jsx)("div",{children:Object(_.jsx)("p",{className:W&&H.a.errorMsg||Y&&H.a.errorMsg||R&&H.a.errorMsg||V&&H.a.errorMsg,children:Y||(R||(V||(W||"")))})}),Object(_.jsx)("div",{className:H.a.button,children:Object(_.jsx)(x.a,{type:"submit",variant:"outlined",onClick:function(){!function(){Z(""===l||""===b||""===O||""===y?"Please fill out everything.":"");var e=/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;!e.test(b)&&D("Email format is not correct."),e.test(b)&&D(""),X(O!==y?"Password doesn't match with the password confirmation.":"")}()},children:"Sign up"})})]})})})})})},Z=n(100),G=n.n(Z),U=n(34),V=n.n(U),X=[{id:1,img:"/images/ff1.png"},{id:2,img:"/images/ff2.png"},{id:3,img:"/images/ff3.png"},{id:4,img:"/images/ff4.png"},{id:5,img:"/images/ff5.png"},{id:6,img:"/images/ff6.png"},{id:7,img:"/images/ff7.png"},{id:8,img:"/images/ff8.png"},{id:9,img:"/images/ff9.png"},{id:10,img:"/images/ff10.png"},{id:11,img:"/images/ff11.png"},{id:12,img:"/images/ff12.png"},{id:13,img:"/images/ff13.png"},{id:14,img:"/images/ff14.png"},{id:15,img:"/images/ff15.png"}],K=Object(A.a)((function(e){return Object(E.a)({resizedCarousel:Object(N.a)({},e.breakpoints.down("sm"),{padding:"5px"})})})),$=function(){var e=Object(s.c)((function(e){return e.auth.fetchedSession})),t=K();localStorage.setItem("login",JSON.stringify(e));var n=JSON.parse(localStorage.getItem("login"));return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:V.a.homeWrapper,children:[Object(_.jsx)("div",{children:Object(_.jsx)("h3",{children:"Find Your Favorite Final Fantasy "})}),Object(_.jsx)(G.a,{navButtonsProps:{classes:{root:t.resizedCarousel}},children:X.map((function(e){return Object(_.jsx)("div",{className:V.a.imageWrapper,children:Object(_.jsx)("img",{className:V.a.image,src:e.img,alt:"ff1"},e.id)},e.id)}))}),n?Object(_.jsx)("div",{className:V.a.button,children:Object(_.jsx)(o.b,{to:n?"/questions":"/",children:Object(_.jsx)(x.a,{variant:"outlined",children:"Start"})})}):Object(_.jsx)("div",{className:(V.a.button,V.a.buttonDisabled),children:Object(_.jsxs)(x.a,{className:V.a.tooltip,variant:"outlined",children:["Start",Object(_.jsx)("span",{className:V.a.tooltiptext,children:"Please sign up or log in to play."})]})})]})})},ee=n(55),te=n.n(ee),ne=n(74),ae=n(193),ce=n(80),ie=n.n(ce),se=n(35),oe=n.n(se),re=function(){var e=Object(s.c)((function(e){return e.questions.fetchedData})),t=Object(s.c)((function(e){return e.questions.clickedId})),n=Object(a.useState)(1),c=Object(S.a)(n,2),i=c[0],r=c[1],l=Object(a.useState)(e[0]),d=Object(S.a)(l,2),u=d[0],j=d[1],b=Object(s.b)(),p=function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.a.get("http://localhost:3001/questions");case 3:t=e.sent,n=t.data,b(O.getQuestions(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[b]),Object(a.useEffect)((function(){j(e[0])}),[e]),Object(a.useEffect)((function(){e.forEach((function(e,n){e._id===t&&j(e)}))}),[i,t]),Object(_.jsx)(_.Fragment,{children:e.length>=1&&u&&Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:oe.a.chocobo,src:"/images/chocobo.png",alt:"chocobo"})}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:oe.a.moogle,src:"/images/moogle.png",alt:"moogle"})}),Object(_.jsx)("div",{className:oe.a.cardWrapper,children:Object(_.jsxs)(ae.a,{className:oe.a.card,children:[Object(_.jsx)("div",{className:oe.a.title,children:Object(_.jsxs)("h2",{children:["Question ",i]})}),Object(_.jsxs)("div",{className:oe.a.cardContent,children:[Object(_.jsx)("p",{children:u.body}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:oe.a.qButton,children:[u.next[0].includes("result")&&Object(_.jsx)(o.b,{to:"/result",children:Object(_.jsx)(x.a,{name:u.next[0],variant:"outlined",onClick:function(e){b(O.getClickedId(e.target.closest("button").name))},children:u.options[0].label})}),!u.next[0].includes("result")&&Object(_.jsx)(x.a,{name:u.next[0],variant:"outlined",onClick:function(e){b(O.getClickedId(e.target.closest("button").name)),r(i+1)},children:u.options[0].label})]}),Object(_.jsxs)("div",{className:oe.a.qButton,children:[u.next[1].includes("result")&&Object(_.jsx)(o.b,{to:"/result",children:Object(_.jsx)(x.a,{name:u.next[1],variant:"outlined",onClick:function(e){b(O.getClickedId(e.target.closest("button").name))},children:u.options[1].label})}),!u.next[1].includes("result")&&Object(_.jsx)(x.a,{name:u.next[1],variant:"outlined",onClick:function(e){b(O.getClickedId(e.target.closest("button").name)),r(i+1)},children:u.options[1].label})]})]})]})]})})]})})},le=Object(u.b)({name:"results",initialState:{fetchedData:[]},reducers:{getResults:function(e,t){e.fetchedData=t.payload}}}),de=le.actions,ue=le.reducer,je=n(56),be=n.n(je),pe=function(){var e=Object(s.c)((function(e){return e.results.fetchedData})),t=Object(s.c)((function(e){return e.questions.clickedId})),n=Object(s.b)(),c=Object(a.useState)(""),i=Object(S.a)(c,2),r=(i[0],i[1]),l=function(){var e=Object(ne.a)(te.a.mark((function e(){var t,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.a.get("http://localhost:3001/result");case 3:t=e.sent,a=t.data,n(de.getResults(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[n]),Object(a.useEffect)((function(){e.forEach((function(e){e.resultId.toString()===t&&(r(e),localStorage.setItem("result",JSON.stringify(e)),JSON.parse(localStorage.getItem("result")))}))}),[e]);var d=JSON.parse(localStorage.getItem("result"));return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:be.a.resultWrapper,children:[Object(_.jsxs)("h3",{children:["Your favorite Final Fantasy is ",d&&d.name]}),Object(_.jsx)("div",{className:be.a.imageWrapper,children:Object(_.jsx)("img",{className:be.a.image,src:d&&d.image,alt:"ffImage"})}),Object(_.jsxs)(ae.a,{className:be.a.story,style:{overflow:"scroll"},children:[Object(_.jsx)("h3",{className:be.a.subTitle,children:"Story"}),Object(_.jsx)("p",{children:d&&d.description})]}),Object(_.jsx)(o.b,{to:"/questions",children:Object(_.jsx)(x.a,{variant:"outlined",onClick:function(){n(O.getClickedId("")),localStorage.removeItem("result")},children:"Play Again"})})]})})},ge=n(101),he=n.n(ge),me=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:he.a.copyRight,children:[Object(_.jsx)("p",{children:"\xa9 2021 SQUARE ENIX CO., LTD. All Rights Reserved."}),Object(_.jsx)("p",{children:" This Is For Learning Purpose."})]})})};var Oe=function(){var e=Object(r.g)(),t=e.state&&e.state.background;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(v,{}),Object(_.jsxs)(r.c,{location:t||e,children:[Object(_.jsx)(r.a,{exact:!0,path:"/",component:$}),Object(_.jsx)(r.a,{exact:!0,path:"/me",component:$}),Object(_.jsx)(r.a,{exact:!0,path:"/questions",component:re}),Object(_.jsx)(r.a,{exact:!0,path:"/result",component:pe})]}),Object(_.jsx)(me,{}),t&&Object(_.jsx)(r.a,{path:"/login",children:Object(_.jsx)(J,{})}),t&&Object(_.jsx)(r.a,{path:"/signup",children:Object(_.jsx)(Y,{})})]})},fe=Object(u.a)({reducer:{auth:h,questions:f,results:ue}});i.a.render(Object(_.jsx)(s.a,{store:fe,children:Object(_.jsx)(o.a,{children:Object(_.jsx)(Oe,{})})}),document.getElementById("root"))},34:function(e,t,n){e.exports={homeWrapper:"Home_homeWrapper__2pZRD",imageWrapper:"Home_imageWrapper__3sXzH",image:"Home_image__2ALS6",button:"Home_button__k4kBI",buttonDisabled:"Home_buttonDisabled__2kbHE",tooltip:"Home_tooltip__3YoCd",tooltiptext:"Home_tooltiptext__dGt4-"}},35:function(e,t,n){e.exports={cardWrapper:"Question_cardWrapper__ozWT-",card:"Question_card__1pavM",cardContent:"Question_cardContent__39ByJ",title:"Question_title__1uxSy",qButton:"Question_qButton__3rnFo",chocobo:"Question_chocobo__c-g-1",moogle:"Question_moogle__21B1L"}},56:function(e,t,n){e.exports={resultWrapper:"Result_resultWrapper__1-deU",imageWrapper:"Result_imageWrapper__3i_JI",image:"Result_image__bczrK",subTitle:"Result_subTitle__mB6xu",story:"Result_story__3pn9v"}},61:function(e,t,n){e.exports={header:"Header_header__3mObx",logo:"Header_logo__2ins2",signupLogin:"Header_signupLogin__jGIOS",signup:"Header_signup__8rT-6",login:"Header_login__zfh4r"}}},[[156,1,2]]]);
//# sourceMappingURL=main.c53b6748.chunk.js.map