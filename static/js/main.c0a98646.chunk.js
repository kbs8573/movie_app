(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{12:function(e,t,n){},20:function(e,t,n){e.exports=n(44)},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(13),r=n.n(s),i=n(2),c=n.n(i),l=n(14),m=n(15),u=n(16),p=n(19),v=n(18),g=n(17),d=n.n(g);n(12);var f=function(e){var t=e.title,n=e.url,a=(e.rating,e.summary),s=e.genres;return o.a.createElement("div",{className:"movie"},o.a.createElement("img",{src:n,title:t}),o.a.createElement("a",{className:"title"},t),o.a.createElement("p",null,a.slice(0,140),"..."),o.a.createElement("ul",{className:"genres"},s.map((function(e,t){return o.a.createElement("li",{key:t},e)}))))},h=(n(43),function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={isLoading:!0,movies:[{title:"test"}]},a.getMovies=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getMovies"),e.next=3,d.a.get("https://yts-proxy.now.sh/list_movies.json");case 3:t=e.sent,console.log(t.data.data.movies),a.setState({isLoading:!1,movies:t.data.data.movies});case 6:case"end":return e.stop()}}),e)}))),console.log("Constructor"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("componet Mount"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("componet Update")}},{key:"render",value:function(){return console.log("componet Render"),o.a.createElement("div",{className:"movies"},this.state.isLoading?"Loading...":this.state.movies.map((function(e){return o.a.createElement(f,{key:e.id,title:e.title,url:e.large_cover_image,rating:e.rating,summary:e.summary,genres:e.genres})})))}}]),n}(o.a.Component));r.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c0a98646.chunk.js.map