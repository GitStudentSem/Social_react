(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{231:function(e,a,s){e.exports={formControl:"FormsControls_formControl__xrhZx",error:"FormsControls_error__UoLKa",formSummaryError:"FormsControls_formSummaryError__1XbeL"}},232:function(e,a,s){"use strict";s.d(a,"b",(function(){return t})),s.d(a,"a",(function(){return n}));var t=function(e){if(!e)return"Field is required"},n=function(e){return function(a){if(a.length>e)return"Max length is ".concat(e," symbols")}}},233:function(e,a,s){"use strict";s.d(a,"a",(function(){return d})),s.d(a,"b",(function(){return u}));var t=s(3),n=s(64),r=(s(0),s(113)),i=s(231),c=s.n(i),o=s(1),l=["input","meta","child"],m=function(e){e.input;var a=e.meta,s=a.touched,t=a.error,n=e.children,r=s&&t;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[Object(o.jsx)("div",{children:n}),r&&Object(o.jsx)("span",{children:t})]})},d=function(e){var a=e.input,s=(e.meta,e.child,Object(n.a)(e,l));return Object(o.jsx)(m,Object(t.a)(Object(t.a)({},e),{},{children:Object(o.jsx)("input",Object(t.a)(Object(t.a)({},a),s))}))},u=function(e,a,s,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(r.a,Object(t.a)({placeholder:e,name:a,validate:s,component:n},i))," ",c]})}},252:function(e,a,s){e.exports={dialogs_wrapper:"Dialogs_dialogs_wrapper__ncx17",dialog_window:"Dialogs_dialog_window__2rAp-",line:"Dialogs_line__2YEgV",message_wrapper:"Dialogs_message_wrapper__pvBaW",input_wrapper:"Dialogs_input_wrapper__2145a",input:"Dialogs_input__1bHr9",send:"Dialogs_send__3JAlH"}},296:function(e,a,s){e.exports={user:"DialogItem_user__3FGRZ",avatar:"DialogItem_avatar__2mSWo",name:"DialogItem_name__1l2n0",active:"DialogItem_active__1iit0"}},297:function(e,a,s){e.exports={message:"Message_message__2f9ph",message_user:"Message_message_user__Zx1Vp",avatar:"Message_avatar__JlnAj",name:"Message_name__LmD49",message_text:"Message_message_text__7sVX_"}},303:function(e,a,s){"use strict";s.r(a);s(0);var t=s(17),n=s(19),r=s(70),i=s(79),c=s(252),o=s.n(c),l=s(9),m=s(296),d=s.n(m),u=s(40),_=s(1),j=function(e){var a="/dialogs/".concat(e.id);return Object(_.jsxs)(l.b,{className:d.a.user,to:a,activeClassName:d.a.active,children:[Object(_.jsx)("img",{src:u.a,alt:"user avatar",className:d.a.avatar}),Object(_.jsx)("p",{className:d.a.name,children:e.name})]})},g=s(297),b=s.n(g),p=function(e){return Object(_.jsxs)("div",{className:b.a.message,children:[Object(_.jsxs)("div",{className:b.a.message_user,children:[Object(_.jsx)("img",{src:u.a,alt:"user avatar",className:b.a.avatar}),Object(_.jsx)("p",{className:b.a.name,children:"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f"})]}),Object(_.jsx)("p",{className:b.a.message_text,children:e.message})]})},x=s(7),O=s(113),f=s(114),v=s(232),h=s(233),w=Object(v.a)(50),N=Object(f.a)({form:"dialogAddMessageForm"})((function(e){return Object(_.jsx)("form",{onSubmit:e.handleSubmit,children:Object(_.jsxs)("div",{className:o.a.input_wrapper,children:[Object(_.jsx)(O.a,{component:h.a,className:o.a.input,name:"newMessageBody",placeholder:"input your message",validate:[v.b,w]}),Object(_.jsx)("button",{className:o.a.send,children:"Send"})]})})})),D=function(e){var a=e.dialogsPage,s=a.dialogs.map((function(e){return Object(_.jsx)(j,{name:e.name,id:e.id},e.id)})),t=a.messages.map((function(e){return Object(_.jsx)(p,{message:e.message},e.id)}));a.newMessageBody;return e.isAuth?Object(_.jsxs)("div",{className:o.a.dialogs_wrapper,children:[Object(_.jsx)("div",{className:o.a.users,children:s}),Object(_.jsx)("div",{className:o.a.line}),Object(_.jsxs)("div",{className:o.a.dialog_window,children:[Object(_.jsx)("div",{className:o.a.message_wrapper,children:t}),Object(_.jsx)(N,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})]})]}):Object(_.jsx)(x.a,{to:"/login"})};a.default=Object(n.d)(Object(t.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:i.b}),r.a)(D)}}]);
//# sourceMappingURL=4.c108b699.chunk.js.map