(this.webpackJsonpskeleton=this.webpackJsonpskeleton||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),j=c(6),a=c.n(j),i=(c(12),c(2)),l=c.n(i),o=c(3),b=c(4);function d(){return Object(s.jsx)("div",{className:"shimmer-wrapper",children:Object(s.jsx)("div",{className:"shimmer"})})}c(14);function x(e){var t=e.type,c="skeleton ".concat(t);return Object(s.jsx)("div",{className:c})}function u(e){var t=e.theme||"light";return Object(s.jsxs)("div",{className:"skeleton-wrapper ".concat(t),children:[Object(s.jsxs)("div",{className:"skeleton-article",children:[Object(s.jsx)(x,{type:"title"}),Object(s.jsx)(x,{type:"text"}),Object(s.jsx)(x,{type:"text"}),Object(s.jsx)(x,{type:"text"})]}),Object(s.jsx)(d,{})]})}function h(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){setTimeout(Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)}))),5e3)})),Object(s.jsxs)("div",{className:"articles",children:[Object(s.jsx)("h2",{children:"Articles"}),c&&c.map((function(e){return Object(s.jsxs)("div",{className:"article",children:[Object(s.jsx)("h3",{children:e.title}),Object(s.jsx)("p",{children:e.body})]},e.id)})),!c&&[1,2,3,4,5].map((function(e){return Object(s.jsx)(u,{},e)}))]})}function O(e){var t=e.theme||"light";return Object(s.jsx)("div",{className:"skeleton-wrapper ".concat(t),children:Object(s.jsxs)("div",{className:"skeleton-profile",children:[Object(s.jsx)("div",{children:Object(s.jsx)(x,{type:"avatar"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{type:"title"}),Object(s.jsx)(x,{type:"text"}),Object(s.jsx)(x,{type:"text"})]})]})})}function p(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){setTimeout(Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/1");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)}))),5e3)})),Object(s.jsxs)("div",{className:"user",children:[Object(s.jsx)("h2",{children:"User"}),c&&Object(s.jsxs)("div",{className:"profile",children:[Object(s.jsx)("h3",{children:c.username}),Object(s.jsx)("p",{children:c.email}),Object(s.jsx)("a",{hre:c.website,children:c.website})]}),!c&&Object(s.jsx)(O,{})]})}var m=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"React Skeleton"})}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)(h,{}),Object(s.jsx)(p,{})]})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c94af1ed.chunk.js.map