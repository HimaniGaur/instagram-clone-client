(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(17),r=a.n(c),m=(a(24),a(25),a(5)),i=function(){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper white"},n.a.createElement(m.b,{to:"/#",className:"brand-logo left"},"Instagram"),n.a.createElement("ul",{id:"nav-mobile",className:"right"},n.a.createElement("li",null,n.a.createElement(m.b,{to:"/login"},"Login")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/signup"},"Signup")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/profile"},"Profile")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/create"},"Post")))))},s=a(1),o=function(){return n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"card home-card"},n.a.createElement("h5",null,"Jimmy"),n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{style:{width:"100%"},src:"https://images.unsplash.com/photo-1539947257641-0f0e9f213528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"})),n.a.createElement("div",{className:"card-content"},n.a.createElement("i",{className:"material-icons",style:{color:"rgb(237, 73, 86)"}},"favorite"),n.a.createElement("i",{className:"material-icons"},"thumb_up"),n.a.createElement("i",{className:"material-icons"},"thumb_down"),n.a.createElement("h6",null,"10 likes"),n.a.createElement("h6",null,"title"),n.a.createElement("p",null,"what a post"),n.a.createElement("input",{type:"text",placeholder:"Comment..."}))),n.a.createElement("div",{className:"card home-card"},n.a.createElement("h5",null,"Jimmy"),n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{src:"https://images.unsplash.com/photo-1539947257641-0f0e9f213528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"})),n.a.createElement("div",{className:"card-content"},n.a.createElement("i",{className:"material-icons",style:{color:"rgb(237, 73, 86)"}},"favorite"),n.a.createElement("i",{className:"material-icons"},"thumb_up"),n.a.createElement("i",{className:"material-icons"},"thumb_down"),n.a.createElement("h6",null,"10 likes"),n.a.createElement("h6",null,"title"),n.a.createElement("p",null,"what a post"),n.a.createElement("input",{type:"text",placeholder:"Comment..."}))),n.a.createElement("div",{className:"card home-card"},n.a.createElement("h5",null,"Jimmy"),n.a.createElement("div",{className:"card-image"},n.a.createElement("img",{src:"https://images.unsplash.com/photo-1539947257641-0f0e9f213528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"})),n.a.createElement("div",{className:"card-content"},n.a.createElement("i",{className:"material-icons",style:{color:"rgb(237, 73, 86)"}},"favorite"),n.a.createElement("i",{className:"material-icons"},"thumb_up"),n.a.createElement("i",{className:"material-icons"},"thumb_down"),n.a.createElement("h6",null,"10 likes"),n.a.createElement("h6",null,"title"),n.a.createElement("p",null,"what a post"),n.a.createElement("input",{type:"text",placeholder:"Comment..."}))))},u=a(9),p=a(7),d=a.n(p),h=function(){var e=Object(s.e)(),t=Object(l.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],i=Object(l.useState)(""),o=Object(u.a)(i,2),p=o[0],h=o[1];return n.a.createElement("div",{className:"mycard"},n.a.createElement("div",{className:"auth-card"},n.a.createElement("h2",null,"Instagram"),n.a.createElement("input",{type:"text",placeholder:"Email",className:"inputstyle",value:p,onChange:function(e){return h(e.target.value)}}),n.a.createElement("input",{type:"text",placeholder:"Password",className:"inputstyle",value:c,onChange:function(e){return r(e.target.value)}}),n.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)?fetch("/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:c,email:p})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?d.a.toast({html:t.error}):(d.a.toast({html:"Successfully Signed in"}),e.push("/"))})).catch((function(e){console.log(e)})):d.a.toast({html:"Invalid Email address"})}},"Login"),n.a.createElement("h6",null,"Don't have an account?",n.a.createElement(m.b,{className:"link",to:"/signup"}," Sign up."))))},E=function(){return n.a.createElement("div",{style:{maxWidth:"550px",margin:" 0px auto"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}},n.a.createElement("div",null,n.a.createElement("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-jimmy-page-1970-chris-walter.jpg"})),n.a.createElement("div",null,n.a.createElement("h4",null,"Jimmy Page"),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},n.a.createElement("h6",null,n.a.createElement("b",null,"10")," posts"),n.a.createElement("h6",null,n.a.createElement("b",null,"40")," followers"),n.a.createElement("h6",null,n.a.createElement("b",null,"1")," following")))),n.a.createElement("div",{className:"gallery"},n.a.createElement("img",{className:"item",src:"https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"}),n.a.createElement("img",{className:"item",src:"https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"}),n.a.createElement("img",{className:"item",src:"https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"}),n.a.createElement("img",{className:"item",src:"https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"}),n.a.createElement("img",{className:"item",src:"https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"}),n.a.createElement("img",{className:"item",src:"https://www.rollingstone.com/wp-content/uploads/2015/02/jimmy-page-led-zeppelin.jpg?resize=1800,1200&w=1200"})))},g=function(){var e=Object(s.e)(),t=Object(l.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],i=Object(l.useState)(""),o=Object(u.a)(i,2),p=o[0],h=o[1],E=Object(l.useState)(""),g=Object(u.a)(E,2),f=g[0],w=g[1];return n.a.createElement("div",{className:"mycard"},n.a.createElement("div",{className:"auth-card"},n.a.createElement("h2",null,"Instagram"),n.a.createElement("input",{type:"text",placeholder:"Username",className:"inputstyle",value:c,onChange:function(e){return r(e.target.value)}}),n.a.createElement("input",{type:"text",placeholder:"Email",className:"inputstyle",value:f,onChange:function(e){return w(e.target.value)}}),n.a.createElement("input",{type:"text",placeholder:"Password",className:"inputstyle",value:p,onChange:function(e){return h(e.target.value)}}),n.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(f)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,password:p,email:f})}).then((function(e){return e.json()})).then((function(t){t.error?d.a.toast({html:t.error}):(d.a.toast({html:t.message}),e.push("/login"))})).catch((function(e){console.log(e)})):d.a.toast({html:"Invalid Email address"})}},"Signup"),n.a.createElement("h6",null,"Already have an account?",n.a.createElement(m.b,{to:"/login"}," Sign in."))))},f=function(){return n.a.createElement("div",{className:"card input-filled",style:{margin:"20px auto",maxWidth:"500px",padding:"20px",textAlign:"center"}},n.a.createElement("input",{type:"text",placeholder:"title"}),n.a.createElement("input",{type:"text",placeholder:"body"}),n.a.createElement("div",{className:"file-field input-field"},n.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},n.a.createElement("span",null,"Upload"),n.a.createElement("input",{type:"file",multiple:!0})),n.a.createElement("div",{className:"file-path-wrapper"},n.a.createElement("input",{className:"file-path validate",type:"text",placeholder:"Upload one or more files"}))),n.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1"},"Submit Post"))};var w=function(){return n.a.createElement(m.a,null,n.a.createElement(i,null),n.a.createElement(s.a,{exact:!0,path:"/"},n.a.createElement(o,null)),n.a.createElement(s.a,{path:"/login"},n.a.createElement(h,null)),n.a.createElement(s.a,{path:"/profile"},n.a.createElement(E,null)),n.a.createElement(s.a,{path:"/signup"},n.a.createElement(g,null)),n.a.createElement(s.a,{path:"/create"},n.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.2e657807.chunk.js.map