(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/The_Weather_Channel_logo.72a5cf38.svg"},214:function(e,t,a){e.exports=a(353)},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},348:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),i=a(33),s=a(24),l=(a(223),a(124)),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_WEATHER":return t.payload;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_RESULTS":return t.payload;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITES":return t.payload;default:return e}},h=Object(i.c)({currentWeather:u,searchLocation:p,favorites:f}),m=a(8),d=a.n(m),v=a(12),E=a(36),b=a.n(E),g=d.a.mark(x),O=d.a.mark(y);function x(e){var t,a;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("fetchCurrentWeather saga",e.payload),n.prev=1,t=e.payload,n.next=5,Object(v.b)(b.a.post,"/api/owm/",t);case 5:return a=n.sent,n.next=8,Object(v.c)({type:"SET_CURRENT_WEATHER",payload:a.data});case 8:console.log("response.data",a.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("error",n.t0);case 14:case"end":return n.stop()}},g,this,[[1,11]])}function y(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)("FETCH_CURRENT_WEATHER",x);case 2:case"end":return e.stop()}},O,this)}var j=y,T=d.a.mark(S),R=d.a.mark(w);function S(e){var t,a;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("searchLocation saga",e.payload),n.prev=1,t=e.payload,n.next=5,Object(v.b)(b.a.post,"/api/search",t);case 5:return a=n.sent,n.next=8,Object(v.c)({type:"SET_CURRENT_WEATHER",payload:a.data});case 8:console.log("response.data",a.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("error",n.t0);case 14:case"end":return n.stop()}},T,this,[[1,11]])}function w(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)("FETCH_SEARCH_RESULTS",S);case 2:case"end":return e.stop()}},R,this)}var C=w,_=d.a.mark(F),k=d.a.mark(L),A=d.a.mark(H),N=d.a.mark(I);function F(e){var t;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.payload,console.log("favorite",t),a.next=5,Object(v.b)(b.a.post,"/api/favorites",t);case 5:return a.next=7,Object(v.c)({type:"FETCH_FAVORITES"});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("ERROR adding favorite",a.t0);case 12:case"end":return a.stop()}},_,this,[[0,9]])}function L(){var e;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetchFavorites Saga"),t.prev=1,t.next=4,Object(v.b)(b.a.get,"/api/favorites");case 4:return e=t.sent,t.next=7,Object(v.c)({type:"SET_FAVORITES",payload:e.data});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("ERROR fetching favorites",t.t0);case 12:case"end":return t.stop()}},k,this,[[1,9]])}function H(e){var t;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.payload,a.next=4,Object(v.b)(b.a.delete,"/api/favorites/".concat(t));case 4:return a.next=6,Object(v.c)({type:"FETCH_FAVORITES"});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("ERROR removing favorite",a.t0);case 11:case"end":return a.stop()}},A,this,[[0,8]])}function I(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)("FETCH_FAVORITES",L);case 2:return e.next=4,Object(v.d)("ADD_TO_FAVORITES",F);case 4:return e.next=6,Object(v.d)("REMOVE_LOCATION_FROM_FAVORITES",H);case 6:case"end":return e.stop()}},N,this)}var W=I,U=d.a.mark(V);function V(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([j(),C(),W()]);case 2:case"end":return e.stop()}},U,this)}a(244);var B=a(27),M=a(28),D=a(30),G=a(29),P=a(31),z=a(358),J=a(360),q=a(359),K=a(357),Q=(a(245),a(57)),X=a(59),Y=(a(246),function(){return r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),Z=a(58),$=a(10),ee=a(11),te=a(115),ae=a.n(te),ne=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(D.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleChange=function(e){return function(t){a.setState(Object(Z.a)({},e,t.target.value))}},a.handleSubmit=function(e){e.preventDefault(),a.props.dispatch({type:"FETCH_SEARCH_RESULTS",payload:a.state}),a.setState({search:""})},a}return Object(P.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("section",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ee.f,{className:e.paper,elevation:1},r.a.createElement(ee.e,{className:e.input,type:"text",onChange:this.handleChange("search"),name:"search",value:this.state.search,placeholder:"Search..."}),r.a.createElement(ee.d,{className:e.iconButton,"aria-label":"Search",type:"submit"},r.a.createElement(ae.a,null)))))}}]),t}(n.Component),re=Object(s.b)(function(e){return{reduxState:e}})(Object($.withStyles)({paper:{padding:"4px 2px",display:"flex",alignItems:"center",margin:"auto",width:"300px"},input:{marginLeft:"10px",flex:1},submit:{padding:"10px"}})(ne)),ce=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(D.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).state={lat:void 0,lng:void 0,cityID:void 0,unit:!0,search:""},a.getGeoLocation=Object(X.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.geolocation.getCurrentPosition(function(e){console.log("currentPosition",e.coords),a.setState(Object(Q.a)({},a.state,{lat:e.coords.latitude,lng:e.coords.longitude})),a.props.dispatch({type:"FETCH_CURRENT_WEATHER",payload:a.state})});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("ERROR in getGeoLocation:",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])})),a.toggleUnit=function(){a.setState({unit:!a.state.unit})},a.toFahrenheit=function(e){var t=9*(e-273.15)/5+32;return Math.round(t)},a.toCelsius=function(e){var t=e-273.15;return Math.round(t)},a}return Object(P.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.getGeoLocation(),this.props.dispatch({type:"FETCH_FAVORITES"})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.unit;return r.a.createElement("section",null,!this.props.name&&r.a.createElement(Y,null),r.a.createElement(ee.i,{className:e.location,variant:"h3"},this.props.name&&this.props.name),r.a.createElement(ee.i,{className:e.description,variant:"h4"},this.props.description&&this.props.description[0].main),t?r.a.createElement(ee.i,{className:e.temperature,variant:"h1"},this.toFahrenheit(this.props.temperature&&this.props.temperature.temp)," \xb0"):r.a.createElement(ee.i,{className:e.temperature,variant:"h1"},this.toCelsius(this.props.temperature&&this.props.temperature.temp)," \xb0"),r.a.createElement(ee.h,{title:"Toggle Unit","aria-label":"Toggle Unit"},r.a.createElement(ee.b,{className:e.toggle,color:"primary",variant:"contained",onClick:this.toggleUnit},this.state.unit?r.a.createElement("span",null,"\u2103 / ",r.a.createElement("b",null,"\u2109")):r.a.createElement("span",null,r.a.createElement("b",null,"\u2103")," / \u2109"))),r.a.createElement(re,{search:this.state.search}))}}]),t}(n.Component),oe=Object(s.b)(function(e){return{currentWeather:e.currentWeather,name:e.currentWeather.name,description:e.currentWeather.weather,temperature:e.currentWeather.main}})(Object($.withStyles)({location:{color:"#ffffff",marginBottom:"15px"},description:{color:"#ffffff",marginBottom:"15px"},temperature:{color:"#ffffff"},toggle:{margin:"50px",border:"1px solid #ffffff"}})(ce)),ie=a(116),se=a.n(ie),le=new Date;var ue=Object(s.b)(function(e){return{reduxState:e}})(Object($.withStyles)({appBar:{position:"fixed",top:0,textAlign:"center",padding:"19px 0px",borderBottom:"1px solid #ffffff"},date:{color:"#ffffff",textAlign:"center"}})(function(e){var t=e.classes;return r.a.createElement(ee.a,{position:"static",color:"primary",className:t.appBar},r.a.createElement(ee.i,{className:t.date,variant:"h5"},se()(le).format("LLL")))})),pe=(a(348),a(47)),fe=a.n(pe),he=a(118),me=a.n(he),de=a(117),ve=a.n(de),Ee=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(D.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).state={lat:void 0,lng:void 0,cityID:void 0},a.viewThisLocation=function(e){console.log("cityID",e)},a.toggleUnit=function(){a.setState({unit:!a.state.unit})},a.removeLocation=function(e){console.log("id",e),a.props.dispatch({type:"REMOVE_LOCATION_FROM_FAVORITES",payload:e})},a}return Object(P.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_FAVORITES"})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"favorites"},r.a.createElement("ul",null,this.props.reduxState.favorites.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("div",{onClick:function(){return e.viewThisLocation(t.cityID)}},t.name),r.a.createElement(fe.a,{className:"remove-btn",color:"secondary",onClick:function(){return e.removeLocation(t.id)}},r.a.createElement(ve.a,null)))})),r.a.createElement(re,null),r.a.createElement(fe.a,{className:"remove-btn",color:"secondary",onClick:function(){return e.addFavorite(e.props.reduxState.currentWeather)}},r.a.createElement(me.a,null)))}}]),t}(n.Component),be=Object(s.b)(function(e){return{reduxState:e}})(Ee),ge=a(356),Oe=a(119),xe=a.n(Oe),ye=a(120),je=a.n(ye),Te=a(121),Re=a.n(Te),Se=function(e){function t(){var e,a;Object(B.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(D.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).viewFavorites=function(){a.props.history.push("/favorites")},a.goHome=function(){a.props.history.push("/home")},a.getGeoLocation=Object(X.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.geolocation.getCurrentPosition(function(e){console.log("currentPosition",e.coords),a.setState(Object(Q.a)({},a.state,{lat:e.coords.latitude,lng:e.coords.longitude})),a.props.dispatch({type:"FETCH_CURRENT_WEATHER",payload:a.state})});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("ERROR in getGeoLocation:",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])})),a}return Object(P.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ee.a,{position:"fixed",color:"primary",className:e.appBar},r.a.createElement(ee.g,{className:e.toolbar},r.a.createElement("a",{href:"https://weather.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:e.logo,src:xe.a,alt:"The Weather Channel"})),r.a.createElement(ee.h,{title:"Current Location","aria-label":"Current Location"},r.a.createElement(ee.c,{color:"primary","aria-label":"My Location",className:e.fabButton,onClick:this.getGeoLocation},r.a.createElement(je.a,null))),r.a.createElement(ee.d,{color:"inherit",fontSize:"large"},r.a.createElement(Re.a,null))))}}]),t}(n.Component),we=Object(s.b)(function(e){return{reduxState:e}})(Object($.withStyles)({appBar:{top:"auto",bottom:0,borderTop:"1px solid #ffffff"},toolbar:{alignItems:"center",justifyContent:"space-between"},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto",border:"1px solid #ffffff"},logo:{verticalAlign:"bottom",display:"inline-block",width:"50px",height:"auto"}})(Object(ge.a)(Se))),Ce=a(55),_e=a.n(Ce),ke=Object($.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{light:"#4fc3f7",main:"#039be5",dark:"#01579b",contrastText:"#ffffff"}}}),Ae=a(123),Ne=a(42);Ae.a.add(Ne.b,Ne.a,Ne.c,Ne.e,Ne.d);var Fe=function(e){function t(){return Object(B.a)(this,t),Object(D.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,null,r.a.createElement($.MuiThemeProvider,{theme:ke},r.a.createElement("main",{className:"App"},r.a.createElement(_e.a,null),r.a.createElement(ue,null),r.a.createElement("div",null,r.a.createElement(J.a,null,r.a.createElement(q.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(K.a,{exact:!0,path:"/home",component:oe}),r.a.createElement(K.a,{exact:!0,path:"/favorites",component:be}),r.a.createElement(K.a,{render:function(){return r.a.createElement("h1",null,"404")}}))),r.a.createElement(we,{favorites:this.props.reduxState.favorites}))))}}]),t}(n.Component),Le=Object(s.b)(function(e){return{reduxState:e}})(Fe),He=Object(l.a)(),Ie=[He],We=Object(i.e)(h,i.a.apply(void 0,Ie));He.run(V),o.a.render(r.a.createElement(s.a,{store:We},r.a.createElement(Le,null)),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.62f7fb97.chunk.js.map