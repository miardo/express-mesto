(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(20),i=n.n(o),s=n(8),r=(n(30),n(24)),l=n(3),u=n(2),p=n.p+"static/media/logo_header.03b78ada.svg",d=n(0);var j=function(e){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)(s.b,{to:"/",className:"header__logo-link",children:Object(d.jsx)("img",{src:p,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u0438\u044f",className:"header__logo"})}),Object(d.jsx)("div",{className:"header__box",children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(s.b,{className:"header__link",to:"/sign-in",children:"\u0412\u0445\u043e\u0434"})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(s.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsxs)(u.b,{path:"/",children:[Object(d.jsx)("p",{className:"header__link-email",children:e.email}),Object(d.jsx)(s.b,{className:"header__link header__link_state",to:"/",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})})]})},m=c.a.createContext();var b=function(e){var t=Object(a.useContext)(m),n=e.card.owner._id===t._id,c="elements__delete-button ".concat(n?"":"elements__delete-button_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),i="elements__button ".concat(o?"elements__button_active":"");return Object(d.jsxs)("article",{className:"elements__box",children:[Object(d.jsx)("img",{src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)},className:"elements__photo"}),Object(d.jsx)("button",{type:"button",className:c,onClick:function(){e.onCardDelete(e.card)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(d.jsxs)("div",{className:"elements__footer",children:[Object(d.jsx)("h3",{className:"elements__text",children:e.card.name}),Object(d.jsxs)("div",{className:"elements__like-block",children:[Object(d.jsx)("button",{type:"button",className:i,"aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("p",{className:"elements__likes-counter",children:e.card.likes.length})]})]})]})};var h=function(e){var t=Object(a.useContext)(m);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__img",children:[Object(d.jsx)("div",{style:{backgroundImage:"url(".concat(t.avatar,")")},alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__photo"}),Object(d.jsx)("button",{type:"button",className:"profile__edit-photo-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",onClick:e.onEditAvatar})]}),Object(d.jsxs)("div",{className:"profile__account",children:[Object(d.jsxs)("div",{className:"profile__name",children:[Object(d.jsx)("h1",{className:"profile__name-text",children:t.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(d.jsx)("p",{className:"profile__description",children:t.about})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(d.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var _=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var f=function(e){return Object(d.jsx)("article",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("form",{name:"".concat(e.name),className:"popup__container",onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"popup__container-name ".concat(e.decoration),children:e.title}),e.children,Object(d.jsx)("button",{type:"submit",className:"popup__container-submit-button popup__container-submit-button",children:e.text}),Object(d.jsx)("button",{name:"close-form",type:"button",className:"popup__container-close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:e.onClose})]})})};var O=function(e){return Object(d.jsx)("article",{className:"popup popup_type_show-image ".concat(e.card.link?"popup_opened":""),children:Object(d.jsxs)("form",{name:"image-form",className:"popup__container popup__container_style-edition",children:[Object(d.jsxs)("figure",{className:"popup__container-image-block",children:[Object(d.jsx)("img",{src:"".concat(e.card.link),alt:e.card.name,className:"popup__container-image"}),Object(d.jsx)("figcaption",{className:"popup__container-text",children:e.card.name})]}),Object(d.jsx)("button",{name:"close-image",type:"button",className:"popup__container-close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onClick:e.onClose})]})})};var x=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],i=n[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),u=r[0],p=r[1],j=Object(a.useContext)(m);return c.a.useEffect((function(){i(j.name),p(j.about)}),[j,e.isOpen]),Object(d.jsxs)(f,{name:"edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:u})},children:[Object(d.jsx)("input",{id:"name-input",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",value:o||"",onChange:function(e){i(e.target.value)},className:"popup__container-input",minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("span",{className:"name-input-error popup__container-input-error"}),Object(d.jsx)("input",{id:"job-input",type:"text",name:"about",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",value:u||"",onChange:function(e){p(e.target.value)},className:"popup__container-input",minLength:"2",maxLength:"200",required:!0}),Object(d.jsx)("span",{className:"job-input-error popup__container-input-error"})]})};var g=function(e){var t=Object(a.useRef)("");return Object(d.jsxs)(f,{name:"ava-form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",decoration:"popup__container-name_style-edition",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(d.jsx)("input",{ref:t,id:"ava-url-input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",className:"popup__container-input popup__container-input_style-edition",required:!0}),Object(d.jsx)("span",{className:"ava-url-input-error popup__container-input-error popup__container-input-error_style-edition"})]})};var v=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),r=s[0],u=s[1];return Object(d.jsxs)(f,{name:"add-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:r})},children:[Object(d.jsx)("input",{id:"new-name-input",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:c||"",onChange:function(e){o(e.target.value)},className:"popup__container-input",minLength:"2",maxLength:"30",required:!0}),Object(d.jsx)("span",{className:"new-name-input-error popup__container-input-error"}),Object(d.jsx)("input",{id:"url-input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:r||"",onChange:function(e){u(e.target.value)},className:"popup__container-input",required:!0}),Object(d.jsx)("span",{className:"url-input-error popup__container-input-error"})]})},N=n(22),C=n(23),k=new(function(){function e(t){Object(N.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(C.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"addLikes",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLikes(e):this.deleteLike(e)}},{key:"addAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"3ecdcc3b-e37c-4bc7-86dd-3dd41d1fe90d","Content-Type":"application/json"}}),y="https://auth.nomoreparties.co",S=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))},L=n(11),w=n(9);var D=function(e){var t=e.onLogin,n=Object(a.useState)({email:"",password:""}),c=Object(l.a)(n,2),o=c[0],i=c[1];function s(e){var t=e.target,n=t.name,a=t.value;i(Object(w.a)(Object(w.a)({},o),{},Object(L.a)({},n,a)))}return Object(d.jsxs)("form",{name:"login-form",className:"verification",onSubmit:function(e){e.preventDefault();var n=o.email,a=o.password;t({email:n,password:a})},children:[Object(d.jsx)("h2",{className:"verification__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("input",{value:o.email||"",onChange:s,id:"email",type:"email",name:"email",placeholder:"Email",className:"verefication__input",minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("input",{value:o.password||"",onChange:s,id:"password",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"verefication__input",minLength:"2",maxLength:"200",required:!0}),Object(d.jsx)("button",{type:"submit",className:"verefication__submit-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})};var E=function(e){var t=e.onRegister,n=Object(a.useState)({email:"",password:""}),c=Object(l.a)(n,2),o=c[0],i=c[1];function r(e){var t=e.target,n=t.name,a=t.value;i(Object(w.a)(Object(w.a)({},o),{},Object(L.a)({},n,a)))}return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=o.email,a=o.password;t({email:n,password:a})},name:"login-form",className:"verification",children:[Object(d.jsx)("h2",{className:"verification__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("input",{value:o.email||"",onChange:r,id:"email",type:"email",name:"email",placeholder:"Email",className:"verefication__input",minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("input",{value:o.password||"",onChange:r,id:"password",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"verefication__input",minLength:"2",maxLength:"200",required:!0}),Object(d.jsx)("button",{type:"submit",className:"verefication__submit-button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("p",{className:"verefication__footer",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(s.b,{to:"/sign-in",className:"verefication__footer-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},P=n.p+"static/media/approved.1b6082f8.svg",T=n.p+"static/media/error.df8eddf6.svg";var I=function(e){return Object(d.jsx)("article",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_style-info",children:[Object(d.jsx)("img",{className:"popup__container-info-image",src:!0===e.img?P:T,alt:e.title}),Object(d.jsx)("h2",{className:"popup__container-name popup__container-name_style-info",children:e.title}),Object(d.jsx)("button",{name:"close-form",type:"button",className:"popup__container-close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:e.onClose})]})})},A=n(25),R=["component"],U=function(e){var t=e.component,n=Object(A.a)(e,R);return Object(d.jsx)(u.b,{children:function(){return!0===n.loggedIn?Object(d.jsx)(t,Object(w.a)({},n)):Object(d.jsx)(u.a,{to:"./sign-in"})}})};var q=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(l.a)(o,2),s=i[0],p=i[1],b=Object(a.useState)(!1),N=Object(l.a)(b,2),C=N[0],L=N[1],w=Object(a.useState)({name:"",link:""}),P=Object(l.a)(w,2),T=P[0],A=P[1],R=Object(a.useState)({}),q=Object(l.a)(R,2),J=q[0],F=q[1],B=Object(a.useState)([]),z=Object(l.a)(B,2),H=z[0],M=z[1],G=Object(a.useState)(!1),K=Object(l.a)(G,2),Q=K[0],V=K[1],W=Object(a.useState)(!1),X=Object(l.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)({email:""}),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=Object(u.g)(),ce=Object(a.useState)({title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",img:!1}),oe=Object(l.a)(ce,2),ie=oe[0],se=oe[1];Object(a.useEffect)((function(){k.getUserInfo().then((function(e){F(e)})).catch((function(e){return console.log(e)})),k.getInitialCards().then((function(e){M(e)})).catch((function(e){return console.log(e)}))}),[]);var re=function(){V(!0)},le=function(){c(!1),L(!1),p(!1),V(!1),A({name:"",link:""})};function ue(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(y,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(S)).then((function(e){ne({email:e.data.email}),Z(!0),ae.push("/")})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){ue()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(m.Provider,{value:J,children:[Object(d.jsx)(j,{onSignOut:function(){Z(!1),localStorage.removeItem("jwt")},email:te.email}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(U,{exact:!0,path:"/",loggedIn:Y,onEditProfile:function(){c(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){L(!0)},onCardClick:function(e){A(e)},cards:H,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===J._id}));k.changeLikeCardStatus(e._id,!t).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){k.deleteCard(e._id).then((function(){M((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},component:h}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(D,{onLogin:function(e,t){(function(e){var t=e.email,n=e.password;return fetch("".concat(y,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then(S)})(e).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),ne(e),Z(!0),ae.push("/"))})).catch((function(e){return console.log(e)}))}})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(E,{onRegister:function(e,t){(function(e){var t=e.email,n=e.password;return fetch("".concat(y,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then(S)})(e).then((function(){re(),se({title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!.",img:!0}),ae.push("/sign-in")})).catch((function(e){re(),console.log(e)}))}})}),Object(d.jsx)(u.b,{children:Y?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/sign-in"})})]}),Object(d.jsx)(_,{}),Object(d.jsx)(I,{title:ie.title,img:ie.img,isOpen:Q,onClose:le}),Object(d.jsx)(x,{onUpdateUser:function(e){k.editUserInfo(e).then((function(e){F(e),le()})).catch((function(e){return console.log(e)}))},isOpen:n,onClose:le}),Object(d.jsx)(v,{onAddPlace:function(e){k.addCard(e).then((function(e){M([e].concat(Object(r.a)(H))),le()})).catch((function(e){return console.log(e)}))},isOpen:s,onClose:le}),Object(d.jsx)(g,{onUpdateAvatar:function(e){k.addAvatar(e).then((function(e){F(e),le()})).catch((function(e){return console.log(e)}))},isOpen:C,onClose:le}),Object(d.jsx)(f,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",decoration:"popup__container-name_style-edition",text:"\u0414\u0430"}),Object(d.jsx)(O,{card:T,onClose:le})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.3492352b.chunk.js.map