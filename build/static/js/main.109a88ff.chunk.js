(this.webpackJsonppokeapi=this.webpackJsonppokeapi||[]).push([[0],{159:function(e,n,t){e.exports=t.p+"static/media/pokeball.00e50e53.svg"},161:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB7ZrBTcMwFIZ/Rwj1RkcIG8ABUW50A9gAJgAmACaADRgBNoATIHGgG2AmINwCojUvbYqqkqR2/Oy2qT/JquQ+WfmUOP5lBwgEAoEJ1P5+O2vwTASPqL29K6TpR9bU7u4VPOJNVHU651Dq9K9DiNNhnycEPJALXZT8fSGeny/hGOei9Iie0N27riwS4kw8PVXXWOJUlObkAT2ut1rFQhyS7B0c4UxU7exsIYruSUDvDStEgp+frnh56cEBTkRpTsb0c08thhmSWpfmrAQz7KIWkmMkHMiyig6DQJq+or7kGIlWa1s8PCRggncd/fqyuZOTxPlYbLCJ0iN7Q2/YLXBBYw3HZIJFNA8ER+DniCs9Wc/RGamHC+v0ZCWqlXq4sExPtUWNUg8XFumplqhx6uHCIj0ZizIEAlskagQKI9EFkBwjYSirLcqYergwSk/66yhf6uHCKD1pibKnHi4M0tNMUYephwut9FQ5Rz2lHi4q01OpqNfUw0VFeioUnUvq4aIkPRXPUaW8bi4zc1N0EvBPNA8FMZYVpdr4/t6Y7i5+dDudNyyvrKSX0uZ051pJcZdatj7FBf/FWAxkSd9xUXGdUL8Id7vwrlXh9TRtngTRphFEm8bKiK7BPdmaLGfUxBht0TjDvWgUvYnHx/eqElqb4fwysCIE0aYRRJtGEG0aQbQCaVKM9fXPmTVpmtBej/4XKCa1Oeai/f4ZdGSzi8n2WTUOgUSvl1CC0ju6z8YdDI5hSP0T79FuYTmtVmL6nVB+YtfmHjcQCCw+v2iS6ugccBpLAAAAAElFTkSuQmCC"},162:function(e,n,t){e.exports=t.p+"static/media/menu-icon.12e8b34c.svg"},164:function(e,n,t){e.exports=t(303)},172:function(e,n){},174:function(e,n){},187:function(e,n){},189:function(e,n){},217:function(e,n){},218:function(e,n){},223:function(e,n){},225:function(e,n){},232:function(e,n){},251:function(e,n){},302:function(e,n,t){},303:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(154),i=t.n(o),l=t(11),c=t(163),m=t(7),s=t(10),u=t(155),d=t.n(u),p=Object(a.createContext)();function f(e){var n=e.children,t=Object(m.g)(),o=Object(a.useState)(!1),i=Object(s.a)(o,2),l=i[0],c=i[1];return r.a.createElement(p.Provider,{value:{authenticated:l,setAuthenticated:c,onLogin:function(){var e=d.a.sign({username:"theonlyuser"},"somesupersecretsecret",{expiresIn:"10min"});localStorage.setItem("token",JSON.stringify(e)),c(!0),t.push("/")},onLogout:function(){localStorage.removeItem("token"),c(!1)}}},n)}var g,b,h,x,E=t(1),y=t(2),v=y.b.button(g||(g=Object(E.a)(["\n  cursor: pointer;\n\n  min-width: 180px;\n\n  border: ",";\n  border-radius: 20px;\n\n  padding: 1rem 3rem;\n\n  background-color: ",";\n\n  color: ",";\n  font-size: 2rem;\n"])),(function(e){return e.secondaryStyle?"3px solid #ff3838":"none"}),(function(e){return e.secondaryStyle?"white":"#ff3838"}),(function(e){return e.secondaryStyle?"black":"white"})),w=t(35),j=t.n(w),A=y.b.main(b||(b=Object(E.a)(["\n  margin-top: 4rem;\n\n  text-align: center;\n  width: 95%;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  /* This is just a bit of styling I thought looked nice */\n  & p {\n    max-width: 530px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]))),O=y.b.img.attrs((function(){return{src:j.a,alt:"Pokemon playground logo"}}))(h||(h=Object(E.a)(["\n  width: 90%;\n  max-width: 422px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 4rem;\n"]))),k=y.b.div(x||(x=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 95%;\n  max-width: 450px;\n\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 3rem;\n\n  & button {\n    margin-bottom: 1.5rem;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 0;\n  }\n"])));var C,S,B=function(){return r.a.createElement(A,null,r.a.createElement(O,null),r.a.createElement("p",{style:{fontSize:"2.5rem",marginBottom:"2.5rem"}},"Welcome to the pokemon playground!"),r.a.createElement(k,null,r.a.createElement(l.b,{to:"/pokemons"},r.a.createElement(v,{secondaryStyle:!0},"Pokemons")),r.a.createElement(l.b,{to:"/types"},r.a.createElement(v,{secondaryStyle:!0},"Types"))),r.a.createElement("p",{style:{marginBottom:"2rem"}},"You need to be logged in in order to be able to enjoy every corner of this site!"),r.a.createElement("p",null,"Not logged in? ",r.a.createElement(l.b,{to:"/login"},"Click here.")))},L=t(159),U=t.n(L),R=y.b.form(C||(C=Object(E.a)(["\n  width: 95%;\n  max-width: 340px;\n  background-color: #f8f8f8;\n\n  border-radius: 15px;\n  border: 1px solid #b7b7b7;\n\n  box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);\n\n  padding: 3rem 2.5rem;\n\n  text-align: center;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),I=y.b.div(S||(S=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-bottom: 2.5rem;\n"])));var z,D,P=function(){var e=Object(a.useContext)(p),n=e.onLogin;return e.authenticated?r.a.createElement(m.a,{to:"/"}):r.a.createElement("main",null,r.a.createElement(R,{onSubmit:function(e){e.preventDefault(),n()}},r.a.createElement("img",{src:U.a,alt:"A pokeball",style:{width:"40px",marginBottom:"1.5rem"}}),r.a.createElement(I,null,r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{name:"username",id:"username"})),r.a.createElement(I,null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",id:"password",type:"password"})),r.a.createElement(v,{type:"submit",style:{marginBottom:"1rem",marginTop:"1rem"}},"Go")))},V=t(21),N=t(13),T=t.n(N),X=t(22),F=t(38),J=t.n(F),H=Object(y.c)(z||(z=Object(E.a)(["\n    to{\n        transform: translateY(-48px);\n    }\n"]))),W=y.b.div(D||(D=Object(E.a)(["\n  width: 100px;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  display: flex;\n  justify-content: space-between;\n\n  & img {\n    animation-name: ",";\n    animation-duration: 400ms;\n    animation-direction: alternate;\n    animation-iteration-count: infinite;\n    animation-timing-function: cubic-bezier(0, -0.01, 0.32, 1.24);\n  }\n"])),H);var q,G,M,Q=function(e){var n=e.style;return r.a.createElement(W,{style:n},r.a.createElement("img",{src:J.a,alt:"Pokeball"}),r.a.createElement("img",{style:{animationDelay:"400ms"},src:J.a,alt:"Pokeball"}),r.a.createElement("img",{style:{animationDelay:"800ms"},src:J.a,alt:"Pokeball"}))},Y=t(160),Z=t.n(Y).a.create({baseURL:"https://pokeapi.co/api/v2"}),K=y.b.main(q||(q=Object(E.a)(["\n  margin-top: 3rem;\n\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n"]))),_=y.b.h2(G||(G=Object(E.a)(["\n  max-width: 200px;\n  padding: 1.5rem;\n\n  border-radius: 10px;\n\n  color: #ff3838;\n  font-weight: bold;\n\n  cursor: pointer;\n\n  &:hover {\n    color: white;\n    background-color: #ff3838;\n  }\n"]))),$=y.b.div(M||(M=Object(E.a)(["\n  margin-top: 3rem;\n  margin-bottom: 50px;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 1rem;\n  justify-items: center;\n\n  max-width: 1800px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"])));var ee,ne,te,ae=function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(!1),c=Object(s.a)(i,2),m=c[0],u=c[1];Object(a.useEffect)((function(){Object(X.a)(T.a.mark((function e(){var n,t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.get("/pokemon",{params:{limit:40}});case 2:n=e.sent,t=n.data.results,o(t);case 5:case"end":return e.stop()}}),e)})))()}),[]);var d=function(){var e=Object(X.a)(T.a.mark((function e(){var n,a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length,u(!0),e.next=4,Z.get("/pokemon",{params:{limit:40,offset:n}});case 4:a=e.sent,r=a.data.results,o((function(e){return[].concat(Object(V.a)(e),Object(V.a)(r))})),u(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!t)return r.a.createElement(Q,null);var p=t.map((function(e){return r.a.createElement(l.b,{key:e.name,to:"/pokemon/".concat(e.name),style:{textDecoration:"none"}},r.a.createElement(_,null,e.name.charAt(0).toUpperCase()+e.name.slice(1)))}));return r.a.createElement(K,null,r.a.createElement("h1",{style:{marginBottom:"2rem"}},"All Pokemons"),r.a.createElement("p",{style:{maxWidth:"330px",marginLeft:"auto",marginRight:"auto"}},"Click a name to see the pokemon's details!"),r.a.createElement($,null,p),m?r.a.createElement(Q,{style:{marginBottom:"100px"}}):r.a.createElement(v,{onClick:d,style:{marginBottom:"100px"}},"Load more"))},re=t(39),oe=t(36),ie=y.b.div(ee||(ee=Object(E.a)(["\n  display: flex;\n  align-items: center;\n"]))),le=y.b.span(ne||(ne=Object(E.a)(["\n  font-size: 1.8rem;\n  color: #ff3838;\n  font-weight: bold;\n  margin-right: 8px;\n"]))),ce=y.b.small(te||(te=Object(E.a)(["\n  font-size: 1.5rem;\n  font-weight: lighter;\n  margin-right: 5px;\n"])));var me=function(e){var n=e.name,t=e.value,a=e.style;return r.a.createElement(ie,{style:a},r.a.createElement(le,null,n),r.a.createElement(ce,null,t))},se=t(57);t(302);var ue,de,pe,fe,ge,be=function(){return r.a.createElement("div",{className:"loader"})},he=t(37),xe=t.n(he),Ee=y.b.article(ue||(ue=Object(E.a)(["\n  text-align: center;\n"]))),ye=y.b.div(de||(de=Object(E.a)(["\n  font-size: 1.8rem;\n\n  padding: 1rem 1.5rem;\n\n  background-color: #eeeeee;\n\n  cursor: pointer;\n\n  margin: 8px;\n\n  &.selected {\n    color: white;\n    background-color: #ff3838;\n  }\n"]))),ve=y.b.div(pe||(pe=Object(E.a)(["\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n\n  margin-bottom: 1.5rem;\n\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  @media (min-width: 992px) {\n    justify-content: flex-start;\n    width: 95%;\n  }\n"]))),we=y.b.div(fe||(fe=Object(E.a)(["\n  position: relative;\n\n  border-radius: 15px;\n\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: #eeeeee;\n\n  max-height: 0;\n\n  overflow: hidden;\n\n  &.expanded {\n    transition: max-height 700ms ease-out;\n    padding: 2.5rem;\n    max-height: 500px;\n  }\n\n  @media (min-width: 992px) {\n    text-align: left;\n  }\n"]))),je=y.b.img.attrs((function(){return{src:xe.a,alt:"Close icon"}}))(ge||(ge=Object(E.a)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  cursor: pointer;\n"])));var Ae,Oe,ke,Ce,Se,Be,Le,Ue=function(e){var n=e.values,t=e.acessPoint,o=(e.baseURL,Object(a.useState)((function(){var e,a={},r=Object(oe.a)(n);try{for(r.s();!(e=r.n()).done;){a[e.value[t].name]=null}}catch(o){r.e(o)}finally{r.f()}return a}))),i=Object(s.a)(o,2),l=i[0],c=i[1],m=Object(a.useState)(null),u=Object(s.a)(m,2),d=u[0],p=u[1],f=Object(a.useState)(!1),g=Object(s.a)(f,2),b=g[0],h=g[1],x=Object(a.useRef)(null),E=Object(a.useRef)(null),y=function(){var e=Object(X.a)(T.a.mark((function e(n){var t,a,r,o,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.current&&x.current.classList.remove("selected"),t=n.target.textContent,x.current=n.target,n.target.classList.add("selected"),p(t),E.current.classList.contains("expanded")||E.current.classList.add("expanded"),Boolean(l[t])){e.next=18;break}return h(!0),a=x.current.getAttribute("data-url"),e.next=13,Z.get(a);case 13:r=e.sent,o=r.data.effect_entries,i=o.find((function(e){return"en"===e.language.name})).effect.split("\n").join(" "),c((function(e){return Object(re.a)(Object(re.a)({},e),{},Object(se.a)({},t,i))})),h(!1);case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=n.map((function(e){return r.a.createElement(ye,{onClick:y,key:e[t].name,"data-url":e[t].url,style:{fontSize:"1.6rem",borderRadius:"15px"}},e[t].name)}));return r.a.createElement(Ee,null,r.a.createElement(ve,null,v),r.a.createElement(we,{ref:E},r.a.createElement(je,{onClick:function(){E.current.classList.remove("expanded")}}),b?r.a.createElement(be,null):null,!b&&d?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{color:"#FF3838",marginBottom:"1.5rem"}},d),r.a.createElement("p",{style:{fontSize:"1.8rem"}},l[d])):null))};function Re(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ie(e){return function e(n,t){var a=n.evolves_to;if(a!==[]){var r,o=Object(oe.a)(a);try{for(o.s();!(r=o.n()).done;){var i=r.value;t.push(i.species),e(i,t)}}catch(l){o.e(l)}finally{o.f()}return t}}(e,[e.species])}var ze=y.b.main(Ae||(Ae=Object(E.a)(["\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 100px;\n  margin-top: 4rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n"]))),De=y.b.section(Oe||(Oe=Object(E.a)(["\n  background-color: #f8f8f8;\n\n  border-radius: 15px;\n\n  box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);\n\n  width: 95%;\n  max-width: 350px;\n\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 4rem;\n\n  padding: 4rem 2rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 992px) {\n    margin: 0;\n  }\n"]))),Pe=y.b.div(ke||(ke=Object(E.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]))),Ve=y.b.section(Ce||(Ce=Object(E.a)(["\n  @media (min-width: 992px) {\n    margin-left: 7rem;\n  }\n"]))),Ne=y.b.article(Se||(Se=Object(E.a)(["\n  text-align: center;\n\n  margin-bottom: 1.5rem;\n\n  & h2 {\n    margin-bottom: 2rem;\n  }\n\n  @media (min-width: 992px) {\n    text-align: left;\n  }\n"]))),Te=y.b.div(Be||(Be=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),Xe=y.b.div.attrs((function(e){return{className:e.isCurrentPokemon?"selected":null}}))(Le||(Le=Object(E.a)(["\n  cursor: pointer;\n\n  margin-bottom: 1.5rem;\n  padding: 1rem 2.5rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  background-color: #eeeeee;\n\n  border-radius: 15px;\n\n  &.selected {\n    color: white;\n    background-color: #ff3838;\n  }\n\n  & h4 {\n    font-weight: normal;\n  }\n\n  @media (min-width: 992px) {\n    margin-right: 1.5rem;\n  }\n"])));var Fe,Je,He,We,qe=Object(m.i)((function(e){var n,t=Object(m.h)().name,o=Object(m.g)(),i=Object(a.useState)(!0),l=Object(s.a)(i,2),c=l[0],u=l[1],d=Object(a.useState)({}),p=Object(s.a)(d,2),f=p[0],g=p[1];return Object(a.useEffect)((function(){Object(X.a)(T.a.mark((function e(){var n,a,r,o,i,l,c,m,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.get("/pokemon/".concat(t));case 2:return n=e.sent,a=n.data,g(a),e.next=7,Z.get("/pokemon-species/".concat(t));case 7:return n=e.sent,a=n.data,e.next=11,Z.get(a.evolution_chain.url);case 11:n=e.sent,a=n.data,r=Ie(a.chain),o=[],i=Object(oe.a)(r),e.prev=16,i.s();case 18:if((l=i.n()).done){e.next=30;break}if((c=l.value).name!==f.name){e.next=23;break}return o.push({name:f.name,image:f.sprites.front_default}),e.abrupt("continue",28);case 23:return e.next=25,Z.get("/pokemon/".concat(c.name));case 25:m=e.sent,s=m.data,o.push({name:s.name,image:s.sprites.front_default});case 28:e.next=18;break;case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(16),i.e(e.t0);case 35:return e.prev=35,i.f(),e.finish(35);case 38:g((function(e){return Object(re.a)(Object(re.a)({},e),{},{evolutionChain:o})})),u(!1);case 40:case"end":return e.stop()}}),e,null,[[16,32,35,38]])})))()}),[t,f.name,null===(n=f.sprites)||void 0===n?void 0:n.front_default]),c?r.a.createElement(Q,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}):r.a.createElement(ze,null,r.a.createElement(De,null,r.a.createElement("h1",{style:{fontWeight:"bold",marginBottom:"2.5rem"}},Re(f.name)),r.a.createElement("img",{src:f.sprites.front_default,alt:f.name,style:{marginBottom:"2rem"}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"210px",marginBottom:"3rem"}},r.a.createElement(me,{name:"height",value:f.height}),r.a.createElement(me,{name:"weight",value:f.weight})),r.a.createElement("h2",{style:{marginBottom:"1.5rem"}},"Base stats"),r.a.createElement(Pe,null,f.stats.map((function(e){return r.a.createElement(me,{style:{marginBottom:"1rem"},key:e.stat.name,name:e.stat.name,value:e.base_stat})})))),r.a.createElement(Ve,null,r.a.createElement(Ne,null,r.a.createElement("h2",null,"Abilities"),r.a.createElement(Ue,{values:f.abilities,acessPoint:"ability"})),r.a.createElement(Ne,null,r.a.createElement("h2",null,"Evolution Chain"),r.a.createElement(Te,null,f.evolutionChain.map((function(e){return r.a.createElement(Xe,{onClick:function(){o.push("/pokemon/".concat(e.name))},key:e.name,isCurrentPokemon:e.name===f.name},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("h4",null,Re(e.name)))})))),r.a.createElement(Ne,null,r.a.createElement("h2",null,"Moves"),r.a.createElement(Ue,{values:f.moves.slice(0,5),acessPoint:"move"}))))})),Ge=Object(y.c)(Fe||(Fe=Object(E.a)(["\n    from {\n        transform: scale(0);\n    } \n    to {\n        transform: scale(1);\n    }\n\n"]))),Me=y.b.div(Je||(Je=Object(E.a)(["\n  background-color: rgba(0, 0, 0, 0.25);\n  width: 100%;\n  height: 100vh;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Qe=y.b.div(He||(He=Object(E.a)(["\n  width: 90%;\n  max-width: 530px;\n\n  padding: 2rem;\n\n  background-color: white;\n  border-radius: 10px;\n\n  box-shadow: 9px -9px #ff3838;\n\n  animation: "," 300ms ease-in;\n\n  position: relative;\n"])),Ge),Ye=y.b.img.attrs((function(){return{src:xe.a,alt:"Close icon"}}))(We||(We=Object(E.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n"])));var Ze,Ke,_e,$e,en=function(e){var n=e.content,t=e.onIconClick;return r.a.createElement(Me,null,r.a.createElement(Qe,null,r.a.createElement(Ye,{onClick:t}),n))},nn={bug:"#95a217",dark:"#3a2d24",dragon:"#62cad9",electric:"#f0bd19",fairy:"#e91368",fighting:"#ef6239",fire:"#fd4b5a",flying:"#94b2c7",ghost:"#906791",grass:"#27cb50",ground:"#6e491f",ice:"#d8f0fa",normal:"#ca98a6",poison:"#9b69da",psychic:"#f71d92",rock:"#8b3e22",steel:"#43bd94",water:"#85a8fb"},tn=y.b.main(Ze||(Ze=Object(E.a)(["\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n"]))),an=y.b.button(Ke||(Ke=Object(E.a)(["\n  padding: 1.5rem 3rem;\n\n  border-radius: 10px;\n\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: white;\n\n  background-color: ",";\n\n  width: 168px;\n\n  cursor: pointer;\n"])),(function(e){return e.bgColor})),rn=y.b.div(_e||(_e=Object(E.a)(["\n  margin-top: 3rem;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1rem;\n  row-gap: 2rem;\n  justify-items: center;\n\n  @media (min-width: 768px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n  @media (min-width: 1500px) {\n    grid-template-columns: repeat(6, 1fr);\n  }\n"]))),on=y.b.div($e||($e=Object(E.a)(["\n  text-align: center;\n  margin-bottom: 2.5rem;\n\n  & h2 {\n    margin-bottom: 1rem;\n  }\n"])));var ln,cn=function(){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),c=l[0],m=l[1],u=Object(a.useState)({}),d=Object(s.a)(u,2),p=d[0],f=d[1],g=t||!c?r.a.createElement(be,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginBottom:"3rem",fontWeight:"bold"}},p.title),p.damageRelations.map((function(e){return r.a.createElement(on,{key:e.title},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.values.map((function(e){return e.name})).join(", ")))}))),b=function(){var e=Object(X.a)(T.a.mark((function e(n){var t,a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),m(!0),document.querySelector("body").classList.add("no-scroll"),t=n.target.getAttribute("data-type"),e.next=6,Z.get("/type/".concat(t));case 6:a=e.sent,r=a.data,console.log(r),f({title:"".concat(Re(r.name)," type"),damageRelations:[{title:"Super effective against",values:[].concat(Object(V.a)(r.damage_relations.double_damage_to),Object(V.a)(r.damage_relations.no_damage_from))},{title:"Not very effective against",values:[].concat(Object(V.a)(r.damage_relations.half_damage_to),Object(V.a)(r.damage_relations.half_damage_from))},{title:"Completely ineffective against",values:[].concat(Object(V.a)(r.damage_relations.no_damage_to),Object(V.a)(r.damage_relations.double_damage_from))}]}),o(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(tn,null,c?r.a.createElement(en,{content:g,onIconClick:function(){m(!1),document.querySelector("body").classList.remove("no-scroll")}}):null,r.a.createElement("h1",{style:{marginBottom:"2.5rem"}},"All types"),r.a.createElement("p",{style:{maxWidth:"590px",marginLeft:"auto",marginRight:"auto"}},"There are a lot of types in the pokemon universe. Some of them are effective against others, and some are not. ",r.a.createElement("br",null),"Click and find out!"),r.a.createElement(rn,null,Object.keys(nn).map((function(e){return r.a.createElement(an,{bgColor:nn[e],key:e,"data-type":e,onClick:b},Re(e))}))))};function mn(e){var n=e.isPrivate,t=Object(c.a)(e,["isPrivate"]),o=Object(a.useContext)(p).authenticated;return n&&!o?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(m.b,t)}function sn(){return r.a.createElement(m.d,null,r.a.createElement(mn,{exact:!0,path:"/"},r.a.createElement(B,null)),r.a.createElement(mn,{exact:!0,path:"/login"},r.a.createElement(P,null)),r.a.createElement(mn,{exact:!0,path:"/pokemons"},r.a.createElement(ae,null)),r.a.createElement(mn,{exact:!0,path:"/types"},r.a.createElement(cn,null)),r.a.createElement(mn,{isPrivate:!0,render:function(e){return r.a.createElement(qe,{key:e.location.pathname})},path:"/pokemon/:name"}))}var un=y.b.footer(ln||(ln=Object(E.a)(["\n  position: fixed;\n  bottom: 0;\n\n  background-color: #383838;\n\n  height: 50px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var dn,pn,fn,gn=function(){return r.a.createElement(un,null,r.a.createElement("img",{src:J.a,alt:"Pokeball",style:{width:"26px",height:"26px"}}))},bn=t(161),hn=t.n(bn),xn=y.b.header(dn||(dn=Object(E.a)(["\n  display: none;\n\n  @media (min-width: 992px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    margin-bottom: 4rem;\n\n    padding: 2.5rem 2rem;\n\n    width: 100%;\n  }\n"]))),En=y.b.img.attrs((function(){return{src:hn.a,alt:"Home icon"}}))(pn||(pn=Object(E.a)([""])));y.b.img.attrs((function(){return{src:j.a,alt:"Pokemon playground logo"}}))(fn||(fn=Object(E.a)(["\n  height: 80px;\n"])));var yn,vn,wn=function(){var e=Object(a.useContext)(p),n=e.authenticated,t=e.onLogout;return r.a.createElement(xn,null,r.a.createElement(l.b,{to:"/"},r.a.createElement(En,null)),n?r.a.createElement(v,{onClick:t},"Logout"):r.a.createElement(l.b,{to:"/login"},r.a.createElement(v,null,"Login")))},jn=y.b.div(yn||(yn=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n\n  border-right: 3px solid #eeeeee;\n\n  padding-top: 75px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n\n  height: 100vh;\n  width: 280px;\n\n  background-color: white;\n  transform: translateX(-100%);\n\n  transition: all 400ms ease-in;\n  &.show {\n    transform: translateX(0);\n  }\n\n  @media (min-width: 992px) {\n    display: none;\n  }\n"]))),An=y.b.img.attrs((function(){return{src:xe.a,alt:"close icon"}}))(vn||(vn=Object(E.a)(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n\n  width: 50px;\n"])));var On,kn=function(e){var n=e.show,t=e.closeSidedrawer,o=Object(m.g)(),i=Object(a.useContext)(p),l=i.authenticated,c=i.onLogout,s=function(e){t();var n=e.target.getAttribute("data-target");o.push("/".concat(n))};return r.a.createElement(jn,{className:n?"show":null},r.a.createElement(An,{onClick:t}),r.a.createElement("img",{"data-target":"",onClick:s,src:j.a,alt:"Logo",style:{width:"80%",marginLeft:"auto",marginRight:"auto"}}),r.a.createElement("div",{style:{marginTop:"7rem",textAlign:"center"}},r.a.createElement(v,{onClick:s,"data-target":"pokemons",secondaryStyle:!0,style:{marginBottom:"2rem"}},"Pokemons"),r.a.createElement(v,{secondaryStyle:!0,"data-target":"types",onClick:s},"Types")),l?r.a.createElement(v,{onClick:function(){t(),c(),o.push("/")},style:{position:"absolute",bottom:"130px"}},"Logout"):r.a.createElement(v,{"data-target":"login",onClick:s,style:{position:"absolute",bottom:"130px"}},"Login"))},Cn=t(162),Sn=t.n(Cn),Bn=y.b.img.attrs((function(){return{src:Sn.a,alt:"Menu icon."}}))(On||(On=Object(E.a)(["\n  z-index: 1;\n\n  width: 60px;\n\n  margin-left: 10px;\n  margin-top: 10px;\n\n  @media (min-width: 992px) {\n    display: none;\n  }\n"])));var Ln=function(e){var n=e.children,t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(kn,{show:i,closeSidedrawer:function(){l(!1),document.querySelector("body").classList.remove("no-scroll")}}),r.a.createElement(Bn,{onClick:function(){l(!0),document.querySelector("body").classList.add("no-scroll")}}),r.a.createElement(wn,null),n,r.a.createElement(gn,null))};var Un,Rn=function(){return r.a.createElement(Ln,null,r.a.createElement(sn,null))},In=Object(y.a)(Un||(Un=Object(E.a)(['\n\n    /* reset css */\n    *,\n    *::before,\n    *::after {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: "Oxygen";\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n\n\n    /* actual styles */\n    body {\n        font-family: "Oxygen";\n    }\n\n    body.no-scroll{\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    h1{\n        font-size: 3rem;\n        font-weight: normal;\n    }\n    h2{\n        font-size: 2.5rem;\n        font-weight: normal;\n    }\n    h3 {\n        font-size: 2.3rem;\n    }\n    h4{\n        font-size: 2.2rem;\n    }\n\n    p{\n        font-size: 2rem;\n    }\n    a, \n    a:visited,\n    a:focus {\n        color: #ff3838;\n    }\n\n    label {\n        font-size: 2rem;\n        margin-bottom: 1.5rem;\n    }\n    input {\n        width: 100%;\n\n        border: none;\n\n        font-size: 1.8rem;\n\n        padding: 1.5rem 2rem;\n\n        border-radius: 10px;\n        border: 2px solid #b7b7b7;\n\n        &:focus {\n            border: 2px solid #ff3838;\n        }\n\n    }\n\n    button {\n        border: none;\n    }\n\n\n'])));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(f,null,r.a.createElement(In,null),r.a.createElement(Rn,null)))),document.getElementById("root"))},35:function(e,n,t){e.exports=t.p+"static/media/logo.437f1ba2.png"},37:function(e,n,t){e.exports=t.p+"static/media/close-icon.3e157548.svg"},38:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMxSURBVHgBtVZfSJNRFD/f/BQjTKeSiloJhjimDDfd1tIGRcvNCXvJB6FCHwJNXwKhKEJIsyDUpB5cNcgX52MvSb5M0DVpLmtTMmQwprLVZP7ZnGu42/kGC8z9+dD1g9+27+yc+7v33HPudylIAolEIsevK6coSloUDlfnUVR+CA2/CdlcpKiFECGfaZp+Mzs7u5xoHCqRABfgkQpALsNnQRy/r8j3SBshJgf6z83NfWQlJJfLc4LB4PPrhLS143MWsIMLqUeOA7z2eDx3VlZWgnGFZDLZmaz9fcNjgDIhHA2LyHuELP/EdOPqVg8JVVRUZFVyuZZXAOVFcDw4kbcxm4HMzHqDwbDJ2DjRP7lc7tOBFIgwKEX2AvD39vaGorY05qOuru5GO0X1XYXUoRjpxxryFhcb19bW7JEVneVwHtyC1IMpJi5F3Wd+p0ml0ktqgLsSSD0ykLsA5zwlJdM0IeSmgmXgAnIayTRsJVLFIuYiUgdwjc7HmHIWAegMvzQaaG1tBQ6HA2azGTpHRmBgZydhr/GQpwlR0LkAIksSER9yVamEhz09f21qtRoKCwvhbXc31CeJz6Co8/QPALoTkuOl6nCiamtroa+gAMbd7mThJznAEoFAIKYd9xjYgM7NzQ3gAXoikZPf7wfscOaIOmC32+2A8SASiRKFw8zMzC5oNJovhAW0Wi0ZHR0lW1tbJBQKkfn5edLR0UHcbnfSWIVCMZ2WnZ1d3tDQcCEvLy/hrGpqagAHBb1eD1NTU5GUdXV1RVaUCEtLSzAxMfEh8t5hZvu/0N/fT1BDHFFtbGw0bG9vk1SDSXNLS4uZ0YhU3cbGxhOdTgepxtjYGDgcjmcHjGKx+B12O0kVrFYrwXN06JC6QCDIUSqVVqfTSY6L9fV1olKprEKhMD3mUrHTS5ubm7/bbDZyVBiNRqacl3GsQkgEHo+XgVWiHR4eJi6Xi7UAU0yDg4NMhb1gLjj/jhv3uoUzulxWVtZbVVUla2pqYlIb089isTCdD5OTkwav19trMpkMsfziCkWBG1oeDofb8JIo4fP51enp6XiHpABL14V78c3n831CN0M8gSj+ABVyBOZ1LOWeAAAAAElFTkSuQmCC"}},[[164,1,2]]]);
//# sourceMappingURL=main.109a88ff.chunk.js.map