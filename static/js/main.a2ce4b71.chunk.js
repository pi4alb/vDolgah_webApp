(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{260:function(e,a,t){e.exports=t(458)},265:function(e,a,t){},458:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),i=(t(265),t(16)),o=t(522),m=t(46),u=function(e){if(localStorage)try{return JSON.parse(localStorage.getItem(e))}catch(a){console.error("Error getting item ".concat(e," from localStorage"),a)}},s=function(e,a){if(localStorage)try{return localStorage.setItem(e,JSON.stringify(a))}catch(t){console.error("Error storing item ".concat(e," to localStorage"),t)}},d=t(498),E=t(143),p=t(499),g=t(500),f=t(501),b=t(219),h=t(523),v=t(516),y=t(502),j=t(517),O=t(107),x=t.n(O);function S(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? ",r.a.createElement(p.a,{color:"inherit",href:"/login"},"\u0412\u043e\u0439\u0442\u0438"))}var I=Object(d.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://www.practicalmoneyskills.com/assets/images/non-card/creating_a_budget.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),k=function(){var e=I(),a=Object(o.d)(),t=Object(m.b)().enqueueSnackbar,l=u("users");l||(l=[]);var c=Object(n.useRef)(null),d=Object(n.useRef)(null),p=Object(n.useRef)(null),O=Object(n.useRef)(null),k=Object(n.useState)(""),N=Object(i.a)(k,2),A=N[0],R=N[1],w=Object(n.useState)(""),C=Object(i.a)(w,2),M=C[0],D=C[1],T=Object(n.useState)(""),L=Object(i.a)(T,2),W=L[0],U=L[1],q=Object(n.useState)(""),z=Object(i.a)(q,2),Z=z[0],B=z[1],P=!/^[\u0430-\u044f\u0410-\u042fa-zA-Z]+$/.test(A),$=!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(M),F=!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(W),V=!(Z===W);return r.a.createElement(g.a,{container:!0,component:"main",className:e.root},r.a.createElement(f.a,null),r.a.createElement(g.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(g.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(h.a,{className:e.avatar},r.a.createElement(x.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{error:P,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u0418\u043c\u044f",type:"text",inputRef:c,value:A,onChange:function(e){R(e.currentTarget.value)},helperText:P?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f":"",autoFocus:!0}),r.a.createElement(v.a,{error:$,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",type:"email",value:M,onChange:function(e){D(e.currentTarget.value)},helperText:$?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email":"",inputRef:d}),r.a.createElement(v.a,{error:F,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",inputRef:p,value:W,onChange:function(e){U(e.currentTarget.value)},helperText:F?"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u0443 \u0438 \u0431\u0443\u043a\u0432\u0443":""}),r.a.createElement(v.a,{error:V,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password_second",inputRef:O,value:Z,onChange:function(e){B(e.currentTarget.value)},helperText:V?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":""}),r.a.createElement(y.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){if(!(P||$||F||V)){for(var e=!1,n=0;n<l.length;n++)if(l[n].EMAIL===M){e=!0;break}if(e)t("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",{variant:"error"});else{var r=new Array(l);r.push({EMAIL:M,PASSWORD:W,NAME:A}),s("users",r),a.push("/login")}}}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement(j.a,null,r.a.createElement(S,null))))))},N=t(503),A=t(520),R=Object(d.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://www.practicalmoneyskills.com/assets/images/non-card/creating_a_budget.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),w=function(e){var a=e.setUserLoggedIn,l=R(),c=Object(o.d)(),i=t(153),m=u("users");m||(m=[]);var s=Object(n.useRef)(null),d=Object(n.useRef)(null),O=Object(n.useRef)(null);function S(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",href:"https://vk.com/votelroge"},"Summer practice, TPU")," ",(new Date).getFullYear(),".")}return r.a.createElement(g.a,{container:!0,component:"main",className:l.root},r.a.createElement(f.a,null),r.a.createElement(g.a,{item:!0,xs:!1,sm:4,md:7,className:l.image}),r.a.createElement(g.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},r.a.createElement("div",{className:l.paper},r.a.createElement(h.a,{className:l.avatar},r.a.createElement(x.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("form",{className:l.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",type:"email",inputRef:d,defaultValue:i.get("rememberedEmail"),autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",inputRef:O}),r.a.createElement(N.a,{control:r.a.createElement(A.a,{value:"remember",inputRef:s,color:"primary"}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c",id:"rememberMe"}),r.a.createElement(y.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,onClick:function(){var e=!1,t=d.current.value,n=O.current.value;m.forEach((function(a){a.EMAIL===t&a.PASSWORD===n&&(e=!0)})),e&&(s.current.checked?i.set("rememberedEmail",d.current.value):i.remove("rememberedEmail"),i.set("loggedUser",t),a(!0),c.push("/"))}},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(p.a,{href:"#",variant:"body2"},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?")),r.a.createElement(g.a,{item:!0},r.a.createElement(p.a,{href:"/register",variant:"body2"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))),r.a.createElement(j.a,{mt:5},r.a.createElement(S,null))))))},C=t(206),M=t.n(C),D=t(521),T=t(505),L=t(506),W=t(507),U=t(508),q=t(510),z=t(144),Z=t(518),B=t(509),P=Object(d.a)((function(e){return{root:{flexGrow:1,backgroundColor:"white"}}})),$=function(e){var a=e.handleClose,t=e.open,l=P(),c=Object(m.b)().enqueueSnackbar,o=Object(n.useState)("tome"),d=Object(i.a)(o,2),E=d[0],p=d[1],g=Object(n.useRef)(null),f=Object(n.useRef)(null),b=Object(n.useRef)(null),h=Object(n.useRef)(null),j=Object(n.useRef)(null),O=Object(n.useRef)(null),x=Object(n.useRef)(null),S=Object(n.useRef)(null),I=/^[\u0430-\u044f\u0410-\u042fa-zA-Z]+$/,k=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,N=/^[0-9]+$/,A=/^[1-2][0-9][0-9][0-9]\-[0-1][0-9]\-[0-3][0-9]$/,R=Object(n.useState)(!1),w=Object(i.a)(R,2),C=w[0],M=w[1],$=Object(n.useState)(!1),F=Object(i.a)($,2),V=F[0],_=F[1],J=Object(n.useState)(!1),K=Object(i.a)(J,2),G=K[0],Y=K[1],H=Object(n.useState)(!1),Q=Object(i.a)(H,2),X=Q[0],ee=Q[1],ae=u("notes");return r.a.createElement(D.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title"},r.a.createElement(T.a,{id:"form-dialog-title",style:{paddingBottom:"0px",textAlign:"center"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"),r.a.createElement(L.a,null,r.a.createElement(z.a,{value:E},r.a.createElement(W.a,{position:"static"},r.a.createElement(Z.a,{onChange:function(e,a){p(a)},className:l.root,"aria-label":"simple tabs example",variant:"fullWidth",indicatorColor:"primary",textColor:"primary"},r.a.createElement(U.a,{label:"\u041c\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b",value:"tome"}),r.a.createElement(U.a,{label:"\u042f \u0434\u043e\u043b\u0436\u0435\u043d",value:"meto"}))),r.a.createElement(B.a,{value:"tome"},r.a.createElement(v.a,{error:C,autoFocus:!0,required:!0,margin:"dense",id:"name",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",fullWidth:!0,inputRef:g}),r.a.createElement(v.a,{error:G,required:!0,margin:"dense",id:"sum",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",type:"number",fullWidth:!0,inputRef:f}),r.a.createElement(v.a,{error:V,margin:"dense",id:"email",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",type:"email",fullWidth:!0,inputRef:b}),r.a.createElement(v.a,{error:X,required:!0,InputLabelProps:{shrink:!0},margin:"dense",id:"date",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",type:"date",fullWidth:!0,inputRef:h})),r.a.createElement(B.a,{value:"meto"},r.a.createElement(v.a,{required:!0,error:C,autoFocus:!0,margin:"dense",id:"name",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",fullWidth:!0,inputRef:j}),r.a.createElement(v.a,{required:!0,error:G,margin:"dense",id:"sum",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",type:"number",fullWidth:!0,inputRef:O}),r.a.createElement(v.a,{error:V,margin:"dense",id:"email",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",type:"email",fullWidth:!0,inputRef:x}),r.a.createElement(v.a,{error:X,required:!0,InputLabelProps:{shrink:!0},margin:"dense",id:"date",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",type:"date",fullWidth:!0,inputRef:S})))),r.a.createElement(q.a,null,r.a.createElement(y.a,{onClick:a,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(y.a,{onClick:function(){switch(E){case"tome":var e=g.current.value,t=f.current.value,n=b.current.value,r=h.current.value;if(!function(e,a,t,n){var r=!0;return I.test(e)?M(!1):(M(!0),r=!1),N.test(a)?Y(!1):(Y(!0),r=!1),k.test(t)||""===t?_(!1):(_(!0),r=!1),A.test(n)?ee(!1):(ee(!0),r=!1),r}(e,t,n,r))return;ae.unshift({ID:"tome",NAME:e,SUM:t,EMAIL:n,DATE:r}),s("notes",ae),a();break;case"meto":var l=j.current.value,i=O.current.value,o=x.current.value,m=S.current.value;ae.push({ID:"meto",NAME:l,SUM:i,EMAIL:o,DATE:m}),s("notes",ae),a()}M(!1),_(!1),Y(!1),ee(!1),c("\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0430",{variant:"success"})},color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},F=t(511),V=t(496),_=t(512),J=t(504),K=t(217),G=t(524),Y=t(203),H=t.n(Y),Q=t(110),X=t.n(Q),ee=t(202),ae=t.n(ee),te=Object(d.a)((function(e){return{menu:{display:"flex",right:0},typographyStyles:{flex:1,fontStyle:"bold",textDecoration:"underline"}}}));function ne(e){var a=e.children,t=e.window,n=Object(F.a)({target:t?t():void 0});return r.a.createElement(V.a,{appear:!1,direction:"down",in:!n},a)}var re=function(e){for(var a=te(),t=Object(o.d)(),n=r.a.useState(null),l=Object(i.a)(n,2),c=l[0],m=l[1],d=e.setUserLoggedIn,p="main"===e.pageId,g=u("loggedUser"),b=u("users"),h="",v=0;v<b.length;v++)b[v].EMAIL===g&&(h=b[v].NAME);var y=function(){t.push("/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement(ne,e,r.a.createElement(W.a,null,r.a.createElement(_.a,null,!p&&r.a.createElement(J.a,{style:{paddingLeft:"0",paddingRight:"0",color:"white"},onClick:y},r.a.createElement(ae.a,null)),r.a.createElement(E.a,{className:a.typographyStyles,variant:"h4"},"\u0412 \u0434\u043e\u043b\u0433\u0430\u0445"),r.a.createElement(J.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},style:{color:"white",fontSize:"1.2rem",paddingRight:"0"}},r.a.createElement(X.a,{style:{marginRight:"4px",fontSize:"1.8rem"}}),h,r.a.createElement(H.a,null))))),r.a.createElement(_.a,null),r.a.createElement(K.a,{className:a.menu,id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){m(null)}},p?r.a.createElement(G.a,{onClick:function(){t.push("/profile")}},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"):r.a.createElement(G.a,{onClick:y},"\u041c\u043e\u0438 \u0434\u043e\u043b\u0433\u0438"),!p&&r.a.createElement(G.a,{onClick:y},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement(G.a,{onClick:function(){s("loggedUser",null),d(!1)}},"\u0412\u044b\u0439\u0442\u0438")))},le=t(513),ce=t(514),ie=t(515),oe=t(204),me=t.n(oe),ue=t(74),se=t.n(ue),de=t(205),Ee=t.n(de),pe=t(75),ge=t.n(pe),fe=Object(d.a)({root:{display:"flex"},title:{fontSize:12,textAlign:"center",marginTop:"8px"},name:{},sum:{fontStyle:"italic"},date:{textAlign:"right"},email:{marginBottom:0,paddingBottom:0},buttons:{display:"flex",flexDirection:"row"},button:{fontSize:"16px",paddingBottom:"10px",paddingTop:"0px",paddingLeft:"0px",paddingRight:"0px"},edit:{maxWidth:"160px",marginRight:"8px",marginLeft:"8px"},iconDiv:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}});function be(e){var a=e.id,t=e.name,l=e.sum,c=e.email,o=e.date,d=e.updateParent,p=fe(),f=Object(m.b)().enqueueSnackbar,b=Object(n.useState)(!1),h=Object(i.a)(b,2),y=h[0],j=h[1],O=Object(n.useRef)(null),x=Object(n.useRef)(null),S=Object(n.useRef)(null),I=Object(n.useRef)(null);return r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(le.a,{className:p.root,variant:"outlined"},r.a.createElement(g.a,{container:!0,direction:"column"},r.a.createElement(g.a,{item:!0},r.a.createElement(E.a,{className:p.title,color:"textSecondary",gutterBottom:!0},"tome"===a?"\u041c\u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d":"\u042f \u0434\u043e\u043b\u0436\u0435\u043d")),r.a.createElement(g.a,{item:!0,container:!0,direction:"row",justify:"space-between"},r.a.createElement(g.a,{item:!0},r.a.createElement(ce.a,null,y?r.a.createElement(v.a,{className:p.edit,required:!0,autoFocus:!0,defaultValue:t,margin:"dense",id:"name",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",inputRef:O}):r.a.createElement(E.a,{className:p.name,variant:"h5",component:"h6"},t),y?r.a.createElement(v.a,{className:p.edit,required:!0,defaultValue:l,margin:"dense",id:"sum",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",type:"number",fullWidth:!0,inputRef:x}):r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2",className:p.email},c))),r.a.createElement(g.a,{item:!0},r.a.createElement(ce.a,null,y?r.a.createElement(v.a,{className:p.edit,defaultValue:c,margin:"dense",id:"email",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",type:"email",inputRef:S}):r.a.createElement(E.a,{className:p.sum,variant:"h6",component:"h6"},l," \u0440\u0443\u0431."),y?r.a.createElement(v.a,{className:p.edit,defaultValue:o,InputLabelProps:{shrink:!0},margin:"dense",id:"date",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",type:"date",fullWidth:!0,inputRef:I}):r.a.createElement(E.a,{className:p.date,variant:"body2",color:"textSecondary"},o)))),r.a.createElement(ie.a,{className:p.buttons},r.a.createElement(g.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-end"},r.a.createElement(g.a,{item:!0},r.a.createElement(J.a,{className:p.button,onClick:function(){for(var e=u("notes"),n=-1,r=0;r<e.length;r++)e[r].ID===a&&e[r].NAME===t&&e[r].SUM===l&&e[r].EMAIL===c&&(n=r);-1!==n&&e.splice(n,1),s("notes",e),d(),f("\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u0430",{variant:"warning"})}}," ",r.a.createElement(me.a,null)," \u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r.a.createElement(g.a,{item:!0},r.a.createElement(J.a,{className:p.button,onClick:y?function(){for(var e=u("notes"),n=0,r=O.current.value,i=x.current.value,o=S.current.value,m=I.current.value,E=0;E<e.length;E++)e[E].ID===a&&e[E].NAME===t&&e[E].SUM===l&&e[E].EMAIL===c&&(n=E);e[n].NAME=r,e[n].EMAIL=o,e[n].SUM=i,e[n].DATE=m,s("notes",e),j(!y),d(),f("\u0417\u0430\u043f\u0438\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430",{variant:"success"})}:function(){j(!y)}},y?r.a.createElement("div",{className:p.iconDiv},r.a.createElement(ge.a,null),"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"):r.a.createElement("div",{className:p.iconDiv},r.a.createElement(se.a,null),"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))),r.a.createElement(g.a,{item:!0},r.a.createElement(J.a,{className:p.button}," ",r.a.createElement(Ee.a,null)," \u041d\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c")))))))}var he=Object(d.a)({content:{},button:{textAlign:"center",position:"sticky",top:"auto",bottom:0},header:{position:"sticky",top:"0"}}),ve=function(e){var a=e.userLoggedIn,t=e.setUserLoggedIn,n=Object(o.d)(),l=he(),c=r.a.useState(!1),m=Object(i.a)(c,2),s=m[0],d=m[1],E=r.a.useState(!1),p=Object(i.a)(E,2),f=p[0],b=p[1],h=u("notes");null==h&&(h=[]),!a&&n.push("/login");var v=function(){b(!f)};return r.a.createElement("div",null,r.a.createElement(g.a,{container:!0,direction:"column"},r.a.createElement(g.a,{item:!0,className:l.header},r.a.createElement(re,{setUserLoggedIn:t,pageId:"main"})),r.a.createElement(g.a,{item:!0,container:!0},r.a.createElement(g.a,{item:!0,xs:!1,sm:1}),r.a.createElement(g.a,{item:!0,container:!0,xs:12,sm:10,className:l.content},h.map((function(e,a){return r.a.createElement(be,{key:a,id:e.ID,name:e.NAME,sum:e.SUM,email:e.EMAIL,date:e.DATE,updateParent:v})}))),r.a.createElement(g.a,{item:!0,xs:!1,sm:1})),r.a.createElement(g.a,{item:!0,className:l.button},r.a.createElement(y.a,{variant:"contained",color:"primary",size:"large",startIcon:r.a.createElement(M.a,null),onClick:function(){d(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"))),r.a.createElement($,{handleClose:function(){d(!1)},open:s}))},ye=t(34),je=function(){var e=[],a=u("notes"),t=0,n=0;return a.sort((function(e,a){return new Date(a.DATE)-new Date(e.DATE)})),a.reverse(),a.forEach((function(a){switch(a.ID){case"tome":t+=parseInt(a.SUM,10),e[e.length-1].name===a.DATE&&e.pop(),e.push({name:a.DATE,tome:t,meto:n});break;case"meto":n+=parseInt(a.SUM,10),e.push({name:a.DATE,tome:t,meto:n})}})),r.a.createElement(ye.e,{height:300,width:"100%"},r.a.createElement(ye.d,{data:e,margin:{right:30,top:30}},r.a.createElement(ye.a,{strokeDasharray:"3 3"}),r.a.createElement(ye.g,{dataKey:"name"}),r.a.createElement(ye.h,null),r.a.createElement(ye.f,null),r.a.createElement(ye.b,null),r.a.createElement(ye.c,{type:"monotone",dataKey:"tome",name:"\u041c\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(ye.c,{type:"monotone",dataKey:"meto",name:"\u042f \u0434\u043e\u043b\u0436\u0435\u043d",stroke:"#82ca9d"})))},Oe=Object(d.a)({content:{marginTop:"16px"},button:{textAlign:"center",position:"sticky",top:"auto",bottom:0},header:{position:"sticky",top:"0"},infos:{padding:"4px"},editButton:{padding:"0px",paddingLeft:"8px"}}),xe=function(e){for(var a=e.setUserLoggedIn,t=(Object(o.d)(),Oe()),l=Object(n.useState)(!1),c=Object(i.a)(l,2),m=c[0],d=c[1],p=Object(n.useState)(!1),f=Object(i.a)(p,2),b=f[0],h=f[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),x=O[0],S=O[1],I=u("loggedUser"),k=u("users"),N=u("notes"),A=0,R=0,w=-1,C="",M="",D="",T=0;T<k.length;T++)k[T].EMAIL===I&&(w=T,C=k[T].NAME,M=k[T].EMAIL,D=k[T].PASSWORD);N.forEach((function(e){"tome"===e.ID?R+=parseInt(e.SUM,10):"meto"===e.ID&&(A+=parseInt(e.SUM,10))}));var L=Object(n.useState)(C),W=Object(i.a)(L,2),U=W[0],q=W[1],z=Object(n.useState)(M),Z=Object(i.a)(z,2),B=Z[0],P=Z[1],$=Object(n.useState)(D),F=Object(i.a)($,2),V=F[0],_=F[1],K=!/^[\u0430-\u044f\u0410-\u042fa-zA-Z]+$/.test(U),G=!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(B),Y=!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(V),H=function(){var e=U,a=B,t=V;k[w].NAME=e,k[w].EMAIL=a,k[w].Password=t,s("users",k),s("loggedUser",a)};return console.log(localStorage),r.a.createElement("div",null,r.a.createElement(g.a,{container:!0,direction:"column"},r.a.createElement(g.a,{item:!0,className:t.header,id:"header"},r.a.createElement(re,{setUserLoggedIn:a,pageId:"profile"})),r.a.createElement(g.a,{item:!0,container:!0,id:"content"},r.a.createElement(g.a,{item:!0,xs:!1,sm:1}),r.a.createElement(g.a,{item:!0,container:!0,xs:12,sm:10,className:t.content,justify:"center",alignItems:"flex-start"},r.a.createElement(g.a,{item:!0,container:!0,id:"avatar",direction:"column",alignItems:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement(X.a,{style:{fontSize:"7.5rem"}})),r.a.createElement(g.a,{item:!0},r.a.createElement(y.a,{variant:"contained"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"))),r.a.createElement(g.a,{item:!0,container:!0,id:"infos",direction:"column",alignItems:"center",style:{marginTop:"16px"}},r.a.createElement(g.a,{item:!0,container:!0,className:t.infos,justify:"center",alignItems:"center"},r.a.createElement(g.a,{item:!0},m?r.a.createElement(v.a,{error:K,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u0418\u043c\u044f",type:"name",value:U,onChange:function(e){q(e.currentTarget.value)},helperText:K?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f":"",autoFocus:!0}):r.a.createElement(E.a,null,r.a.createElement("b",null,"\u0418\u043c\u044f: "),C)),r.a.createElement(g.a,{item:!0},r.a.createElement(J.a,{onClick:function(){m?K||(d(!1),H()):d(!0)},className:t.editButton},m?r.a.createElement(ge.a,null):r.a.createElement(se.a,null)))),r.a.createElement(g.a,{item:!0,container:!0,className:t.infos,justify:"center",alignItems:"center"},r.a.createElement(g.a,{item:!0},b?r.a.createElement(v.a,{error:G,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",type:"email",value:B,onChange:function(e){P(e.currentTarget.value)},helperText:G?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email":"",autoFocus:!0}):r.a.createElement(E.a,null,r.a.createElement("b",null,"Email: "),M)),r.a.createElement(g.a,{item:!0},r.a.createElement(J.a,{onClick:function(){b?G||(h(!1),H()):h(!0)},className:t.editButton},b?r.a.createElement(ge.a,null):r.a.createElement(se.a,null)))),r.a.createElement(g.a,{item:!0,container:!0,className:t.infos,justify:"center",alignItems:"center"},r.a.createElement(g.a,{item:!0},x?r.a.createElement(v.a,{error:Y,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"text",value:V,onChange:function(e){_(e.currentTarget.value)},helperText:Y?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c":"",autoFocus:!0}):r.a.createElement(E.a,null,r.a.createElement("b",null,"\u041f\u0430\u0440\u043e\u043b\u044c: "),D)),r.a.createElement(g.a,{item:!0},r.a.createElement(J.a,{onClick:function(){x?Y||(S(!1),H()):S(!0)},className:t.editButton},x?r.a.createElement(ge.a,null):r.a.createElement(se.a,null)))),r.a.createElement(g.a,{item:!0,className:t.infos},r.a.createElement(E.a,{style:{marginTop:"16px"}},"\u0412\u0441\u0435\u0433\u043e \u043c\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b: ",r.a.createElement("b",null,R," \u0440\u0443\u0431.")),r.a.createElement(E.a,null,"\u0412\u0441\u0435\u0433\u043e \u044f \u0434\u043e\u043b\u0436\u0435\u043d: ",r.a.createElement("b",null,A," \u0440\u0443\u0431."))),r.a.createElement(je,null))),r.a.createElement(g.a,{item:!0,xs:!1,sm:1}))))},Se=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(){return r.a.createElement(ve,{userLoggedIn:t,setUserLoggedIn:l})}}),r.a.createElement(o.a,{path:"/login",render:function(){return r.a.createElement(w,{setUserLoggedIn:l})}}),r.a.createElement(o.a,{path:"/register",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(o.a,{path:"/profile",render:function(){return r.a.createElement(xe,{setUserLoggedIn:l})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=t(216),ke=Object(Ie.a)();c.a.render(r.a.createElement(m.a,{maxSnack:"2"},r.a.createElement(o.b,{history:ke},r.a.createElement(Se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[260,1,2]]]);
//# sourceMappingURL=main.a2ce4b71.chunk.js.map