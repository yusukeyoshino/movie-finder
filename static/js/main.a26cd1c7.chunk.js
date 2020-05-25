(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){e.exports=a(44)},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),o=a.n(i),c=a(6),s=a.n(c),l=a(18),u=a(2),m=a(3),p=a(5),d=a(4),g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onInputSubmit=function(t){t.preventDefault(),e.props.onTermSubmit(e.state.term),console.log(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"0 auto",display:"flex",justifyContent:"center",marginBottom:"70px"}},r.a.createElement("form",{onSubmit:this.onInputSubmit},r.a.createElement("input",{onChange:this.onInputChange,type:"text",name:"title",style:{width:"200px"}}),r.a.createElement("button",{className:"btn",onClick:this.onInputSubmit,style:{backgroundColor:"#16CE89",color:"white"}},"Search"))))}}]),a}(n.Component),v=function(){return r.a.createElement("div",{style:{height:"60px",color:"#A1A1A1",textAlign:"center",fontSize:"25px",display:"flex",alignItems:"center",justifyContent:"center",letterSpacing:"2px",marginTop:"10px"}},"MOVIE FINDER")},h=(a(26),function(e){var t=e.movies.map((function(e){return r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("div",{className:"card__img"},r.a.createElement("img",{alt:"movie-poster",src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)})),r.a.createElement("div",{className:"description"},r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"#747474",fontSize:"30px",marginBottom:"20px"}},e.title),r.a.createElement("h4",{style:{color:"#B4B4BA"}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=[];return e.length>t?(e.split(" ").reduce((function(e,n){return e+n.length<=t&&a.push(n),e+n.length}),0),"".concat(a.join(" "),"...")):e}(e.overview))),r.a.createElement("div",{className:"description__detail"},r.a.createElement("h5",{style:{marginTop:"20px"}},"Release Date: ".concat(e.release_date)),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("button",{className:"detail-btn"},"See Detail")))))}));return e.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"cards"},t)}),f=a(19),b=a.n(f),y=(a(16),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],errorMessage:"",loading:!1},e.onSubmitClick=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=17;break}return e.setState({movies:[],loading:!0,errorMessage:""}),t.prev=2,t.next=5,b.a.get("https://api.themoviedb.org/3/search/movie?api_key=ceb0bffcd90a1d670903f250bde029d8&language=en-US&query=".concat(a,"&include_adult=false"));case 5:n=t.sent,console.log(n.data.results),e.setState({loading:!1}),0!=n.data.results.length?e.setState({movies:n.data.results}):e.setState({errorMessage:'There is no "'.concat(a,'" results.')}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),e.setState({loading:!1}),e.setState({errorMessage:"Request failed. Please Try it again."});case 15:t.next=18;break;case 17:e.setState({errorMessage:"Input is empty. Try it again."});case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(g,{onTermSubmit:this.onSubmitClick}),r.a.createElement("div",{style:{color:"red",textAlign:"center"}},this.state.errorMessage),r.a.createElement(h,{movies:this.state.movies,loading:this.state.loading}))}}]),a}(n.Component));o.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a26cd1c7.chunk.js.map