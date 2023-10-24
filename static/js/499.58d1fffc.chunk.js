"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{4554:function(t,e,n){n.d(e,{n:function(){return a}});var a=Object.freeze({small:16,medium:32,large:64})},499:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var a=n(2791),r=n(9434),s=n(9e3),c=n(6052),i=function(t){return t.contacts.items},o=function(t){return t.contacts.getIsLoading},l=function(t){return t.contacts.error},m=function(t){return t.filter},u=n(4289),d="ContactForm_contactForm__form__-c9TG",_="ContactForm_contactForm__field__+cOPR",f="ContactForm_contactForm__field_label__YSzht",h="ContactForm_contactForm__input__k3i+4",p="ContactForm_contactForm__submit_button__eOEdn",x=n(184);function b(){var t=(0,r.I0)(),e=(0,r.v9)(i),n=function(n){return function(t){return e.filter((function(e){var n,a;return(null===(n=e.name)||void 0===n?void 0:n.toLowerCase())===(null===(a=t.name)||void 0===a?void 0:a.toLowerCase())}))}(n).length>0?(alert("".concat(n.name," is already in contacts.")),!1):(t((0,c.uK)(n)),!0)};return(0,x.jsxs)("form",{className:d,onSubmit:function(t){t.preventDefault();var e=t.currentTarget,a=e.elements.name.value,r=e.elements.number.value;n({name:a,number:r})&&e.reset()},children:[(0,x.jsxs)("label",{htmlFor:"name",className:"".concat(_," ").concat(f),children:["Name:",(0,x.jsx)("input",{className:h,id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Contact name",required:!0})]}),(0,x.jsxs)("label",{htmlFor:"number",className:"".concat(_," ").concat(f),children:["Number:",(0,x.jsx)("input",{className:h,id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Contact number",required:!0})]}),(0,x.jsx)("button",{type:"submit",className:p,children:"Add contact"})]})}var v=n(4808),j="Filter_filter__field__fujd7",g="Filter_filter__field_label__tro3m",C="Filter_filter__field_input__xwagY";function F(){var t=(0,r.I0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("label",{htmlFor:"filter-field",className:"".concat(j," ").concat(g),children:["Find contacts by name:",(0,x.jsx)("input",{id:"filter-field",className:C,type:"text",placeholder:"Enter search query",onChange:function(e){t((0,v.x)(e.target.value))}})]})})}var L="ContactListItem_contactsListItem__item__E94IE",N="ContactListItem_contactsListItem__item_circle__Tsc6G",I="ContactListItem_contactsListItem__item_name__otVc+",y="ContactListItem_contactsListItem__item_number__mAbZo",Z="ContactListItem_contactsListItem__button__HFX2D",k=function(t){var e=t.id,n=t.name,a=t.number,s=(0,r.I0)();return(0,x.jsxs)("li",{className:L,children:[(0,x.jsx)("span",{className:N}),(0,x.jsxs)("p",{className:I,children:[n,":",(0,x.jsx)("span",{className:y,children:a})]}),(0,x.jsx)("button",{type:"button",className:Z,onClick:function(){return s((0,c.GK)(e))},children:"Delete"})]})},w="ContactList_contactList__list__EgfLC";function P(){var t=(0,r.v9)(i),e=(0,r.v9)(m),n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,x.jsx)("ul",{className:w,children:null===n||void 0===n?void 0:n.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,x.jsx)(k,{id:e,name:n,number:a},e)}))})}var z,A,E,q,D=n(168),G=n(6444),K=G.ZP.div(z||(z=(0,D.Z)(["\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  gap: 200px;\n  align-items: start;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 20px;\n  border-radius: 4px;\n  transform: translate(-50%, -50%) scale(1);\n"]))),O=G.ZP.div(A||(A=(0,D.Z)([""]))),T=(G.ZP.div(E||(E=(0,D.Z)([""]))),G.ZP.div(q||(q=(0,D.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 20px;\n  border-radius: 4px;\n  transform: translate(-50%, -50%) scale(1);\n"])))),R=n(4554);function S(){var t=(0,r.I0)(),e=(0,r.v9)(u.fN),n=(0,r.v9)(o),i=(0,r.v9)(l);return(0,a.useEffect)((function(){t((0,c.yF)())}),[t]),(0,x.jsx)(x.Fragment,{children:e?(0,x.jsxs)(K,{children:[(0,x.jsxs)(O,{children:[(0,x.jsx)("h2",{children:"Phonebok"}),(0,x.jsx)(b,{})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(F,{}),n&&!i&&(0,x.jsx)("h3",{children:"Request in progress..."}),(0,x.jsx)(P,{}),i&&(0,x.jsx)("h3",{children:i})]})]}):(0,x.jsxs)(T,{children:[(0,x.jsx)("h1",{children:"Please log in to access the phonebook"}),(0,x.jsx)(s.K_P,{size:R.n.large})]})})}}}]);
//# sourceMappingURL=499.58d1fffc.chunk.js.map