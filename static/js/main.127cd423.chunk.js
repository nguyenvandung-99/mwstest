(this.webpackJsonpmwstest=this.webpackJsonpmwstest||[]).push([[0],{38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(30),i=a.n(r),o=(a(38),a(11)),j=a(2);function l(e){return Object(n.jsx)(n.Fragment,{children:"A fancy footer"})}var h=a(13),u=a(14),m=a(10),d=a(16),b=a(15),p=a(12),O=a.n(p),x=a(19),g=a(40).default,f=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("https://api.collegefootballdata.com/teams").then((function(e){return e.data.filter((function(e){return null!==e.mascot}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("https://api.collegefootballdata.com/games",{params:{year:2020,team:t}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function N(e){return Object(n.jsx)("div",{children:0===e.teams.length?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsx)("ul",{className:"teams",children:e.teams.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)(o.b,{to:"/teamdetail/"+e.school,children:[Object(n.jsx)("img",{src:e.logos?e.logos[0]:"",alt:e.abbreviation}),Object(n.jsx)("p",{children:e.school})]})},e.id)}))})})}var y=a(32);function S(e){var t=Object(s.useState)(e.page),a=Object(y.a)(t,2),c=a[0],r=a[1],i=function(t){r(t),e.pageNavi(t)};return Object(n.jsxs)("div",{className:"pagination",children:[Object(n.jsx)("button",{disabled:1===e.page,onClick:function(){return i(e.page-1)},children:"<"}),Object(n.jsx)("button",{disabled:1===e.page,onClick:function(){return i(1)},children:"Page 1"}),Object(n.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.pageNavi(c)},children:Object(n.jsx)("input",{name:"page",type:"number",value:c,min:1,max:e.pagemax,title:"page",onChange:function(e){return r(parseInt(e.target.value))}})}),Object(n.jsxs)("button",{disabled:e.page===e.pagemax,onClick:function(){return i(e.pagemax)},children:["Page ",e.pagemax]}),Object(n.jsx)("button",{disabled:e.page===e.pagemax,onClick:function(){return i(e.page+1)},children:">"})]})}function w(e){return Object(n.jsx)("input",{type:"text",placeholder:"Search...",title:"search",onChange:function(t){return e.searchTeams(t.target.value)}})}var _=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).pageNavi=n.pageNavi.bind(Object(m.a)(n)),n.searchTeams=n.searchTeams.bind(Object(m.a)(n)),n.state={teams:sessionStorage.teams?JSON.parse(sessionStorage.teams):[],page:e.match.params.page?parseInt(e.match.params.page):1,entries:localStorage.entries?JSON.parse(localStorage.entries):10,searchWord:""},n}return Object(u.a)(a,[{key:"pageNavi",value:function(e){window.history.pushState({},"","/page/"+JSON.stringify(e)),window.scrollTo({top:0,behavior:"smooth"}),this.setState({page:e})}},{key:"refreshTeams",value:function(){var e=this;f().then((function(t){sessionStorage.setItem("teams",JSON.stringify(t)),e.setState({teams:t})}))}},{key:"searchTeams",value:function(e){this.pageNavi(1),""===e?this.setState({teams:JSON.parse(sessionStorage.teams)}):this.setState({teams:JSON.parse(sessionStorage.teams).filter((function(t){return t.school.toLowerCase().includes(e.toLowerCase())}))})}},{key:"componentDidMount",value:function(){this.refreshTeams()}},{key:"render",value:function(){var e=this.state,t=e.page,a=e.entries,s=e.teams,c=e.searchWord;return Object(n.jsxs)("div",{className:"homescreen",children:[Object(n.jsx)(w,{searchTeams:this.searchTeams,searchWord:c}),Object(n.jsx)(N,{teams:s.slice((t-1)*a,t*a)}),Object(n.jsx)(S,{page:t,pagemax:Math.ceil(s.length/a),pageNavi:this.pageNavi})]})}}]),a}(c.a.Component);function k(e){return Object(n.jsx)("div",{children:0===e.upcoming.length?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Upcoming Games"}),Object(n.jsx)("ul",{className:"upcoming games",children:e.upcoming.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsx)("div",{className:"game-time",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("tr",{children:new Date(e.start_date).toString().slice(4,10)}),Object(n.jsx)("tr",{children:e.start_date.slice(11,16)})]})}),Object(n.jsx)("div",{className:"game-team",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("tr",{children:e.home_team}),Object(n.jsx)("tr",{children:e.away_team})]})}),Object(n.jsx)("div",{className:"game-score",children:Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"-"}),["-","-","-","-"].map((function(e){return Object(n.jsx)("td",{children:e})}))]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"-"}),["-","-","-","-"].map((function(e){return Object(n.jsx)("td",{children:e})}))]})]})})]},e.id)}))})]})})}function C(e){var t=function(e){return e.home_points>e.away_points};return Object(n.jsx)("div",{children:e.previous.length>0&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Previous Games "}),Object(n.jsx)("ul",{className:"previous games",children:e.previous.map((function(a){return Object(n.jsxs)("li",{style:{backgroundColor:a.home_team===e.team===t(a)?"#afa":"#faa"},children:[Object(n.jsx)("div",{className:"game-time",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("tr",{children:new Date(a.start_date).toString().slice(4,10)}),Object(n.jsx)("tr",{children:a.start_date.slice(11,16)})]})}),Object(n.jsx)("div",{className:"game-team",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("tr",{style:t(a)?{fontWeight:"bold"}:{},children:a.home_team}),Object(n.jsx)("tr",{style:t(a)?{}:{fontWeight:"bold"},children:a.away_team})]})}),Object(n.jsx)("div",{className:"game-score",children:Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:a.home_points}),a.home_line_scores.map((function(e){return Object(n.jsx)("td",{children:e})}))]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:a.away_points}),a.away_line_scores.map((function(e){return Object(n.jsx)("td",{children:e})}))]})]})})]},a.id)}))})]})})}var T=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={team:e.match.params.team?e.match.params.team:"",previous:[],upcoming:[]},n}return Object(u.a)(a,[{key:"refreshGames",value:function(){var e=this,t=[],a=[];v(this.state.team).then((function(e){return e.forEach((function(e){e.home_points?t.unshift(e):a.push(e)}))})).then((function(){return e.setState({previous:t,upcoming:a})}))}},{key:"componentDidMount",value:function(){this.refreshGames()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"team-detail",children:[Object(n.jsx)("h2",{children:this.state.team}),Object(n.jsx)(k,{upcoming:this.state.upcoming}),Object(n.jsx)(C,{previous:this.state.previous,team:this.state.team})]})}}]),a}(c.a.Component);var J=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:Object(n.jsx)(o.b,{to:"/page/1",children:"Home"})}),Object(n.jsx)("main",{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/",component:_,exact:!0}),Object(n.jsx)(j.a,{path:"/page/:page",component:_,exact:!0}),Object(n.jsx)(j.a,{path:"/teamdetail/:team",component:T})]})}),Object(n.jsx)("footer",{children:Object(n.jsx)(l,{})})]})})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.127cd423.chunk.js.map