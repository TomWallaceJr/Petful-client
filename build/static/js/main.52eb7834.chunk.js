(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},23:function(e,t,n){},28:function(e,t,n){e.exports=n.p+"static/media/adoptkitten.a85db6a3.jpeg"},29:function(e,t,n){e.exports=n.p+"static/media/adopt.d4413ad0.jpeg"},35:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),r=n(20),s=n.n(r),c=n(13),i=n(1),l=n(3),p=n(4),u=n(6),m=n(5),d=n(7);function h(){return o.a.createElement("h1",null,"Welcome To Petful!")}var f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"home-img-wrapper"},o.a.createElement("div",{className:"pics"},o.a.createElement("img",{src:n(28),alt:"cat"})),o.a.createElement("div",null,o.a.createElement(h,null)),o.a.createElement("div",{className:"pics"},o.a.createElement("img",{src:n(29),alt:"puppy"}))),o.a.createElement("div",{className:"home-body"},o.a.createElement("p",null,"This is a Pet adoption agency where you get in line and can either adopt the next dog or next cat in line for adoption!"),o.a.createElement("p",null,"Enjoy your rescue pet!"),o.a.createElement("button",{onClick:function(){return e.props.history.push("/adopt")}},"Adopt Now!")))}}]),t}(o.a.Component),E=o.a.createContext({dogs:{},cats:{},nextDog:{},nextCat:{},adoptedPet:{},people:[],currentUser:"",setDogs:function(){},setCats:function(){},setCurrentUser:function(){},setNextCat:function(){},setNextDog:function(){},setPeople:function(){}}),g=E,x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={dogs:{},cats:{},people:[],currentUser:"",nextCat:{},nextDog:{},adoptedPet:{}},n.setPeople=function(e){n.setState({people:[e]})},n.setCurrentUser=function(e){n.setState({currentUser:e})},n.setCats=function(e){n.setState({cats:e})},n.setDogs=function(e){n.setState({dogs:e})},n.setNextCat=function(e){n.setState({nextCat:e})},n.setNextDog=function(e){n.setState({nextDog:e})},n.setAdoptedPet=function(e){n.setState({adoptedPet:e})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e={dogs:this.state.dogs,cats:this.state.cats,people:this.state.people,currentUser:this.state.currentUser,nextCat:this.state.nextCat,nextDog:this.state.nextDog,adoptedPet:this.state.adoptedPet,setCats:this.setCats,setDogs:this.setDogs,setPeople:this.setPeople,setCurrentUser:this.setCurrentUser,setNextCat:this.setNextCat,setNextDog:this.setNextDog,setAdoptedPet:this.setAdoptedPet};return o.a.createElement(E.Provider,{value:e},this.props.children)}}]),t}(o.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context.cats[0],t=e.age,n=e.breed,a=e.imageDescription,r=e.imageURL,s=e.name,c=e.sex,i=e.story;return s?o.a.createElement("div",{className:"next-pet-container"},o.a.createElement("h2",null,"Meet ",s,"!"),o.a.createElement("img",{src:r,alt:a}),o.a.createElement("p",null,t," year old ",c," ",n),o.a.createElement("p",null,i),o.a.createElement("button",{className:"adopt-button",onClick:this.props.adoptCatNow},"Adopt Now")):o.a.createElement("div",{className:"next-pet-container"},o.a.createElement("label",null,"All of our Cats have been adopted! Try again another day!"))}}]),t}(o.a.Component);N.contextType=g;var v=N,j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context.dogs[0],t=e.age,n=e.breed,a=e.imageDescription,r=e.imageURL,s=e.name,c=e.sex,i=e.story;return s?o.a.createElement("div",{className:"next-pet-container"},o.a.createElement("h2",null,"Meet ",s,"!"),o.a.createElement("img",{src:r,alt:a}),o.a.createElement("p",null,t," year old ",c," ",n),o.a.createElement("p",null,i),o.a.createElement("button",{className:"adopt-button",onClick:this.props.adoptDogNow},"Adopt Now")):o.a.createElement("div",{className:"next-pet-container"},o.a.createElement("label",null,"All of our Dogs have been adopted! Try again another day!"))}}]),t}(o.a.Component);j.contextType=g;var b=j,C={API_BASE_URL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_BASE_URL||"http://localhost:8000"},P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",currentUser:"",nextUp:!1,signedUp:!1,intervalId:0},n.handleNameChange=function(e){n.setState({name:e.currentTarget.value})},n.submitForm=function(e){e.preventDefault();var t=n.state.name;fetch("".concat(C.API_BASE_URL,"/people"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})}).then((function(e){return e.json()})).then((function(e){n.context.setCurrentUser(t),n.context.setPeople(e),n.setState({signedUp:!0,currentUser:t})})).catch((function(e){alert("Something went wrong! ".concat(e.message))})),e.currentTarget.reset(),n.startTimer()},n.startTimer=function(){n.state.intervalId=setInterval((function(){if(n.context.currentuser===n.props.peopleList[1])return n.props.setNextUp(),clearInterval(n.state.intervalId);n.context.currentUser!==n.props.peopleList[0]&&n.props.adoptCatNow()}),5e3)},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){return clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"person-queue"},o.a.createElement("h3",null,"Waiting In Line"),o.a.createElement("ul",null,this.context.people.map((function(e){return e.map((function(e,t){return o.a.createElement("li",{key:t},e)}))}))),o.a.createElement("form",{className:"add-person-form",onSubmit:this.submitForm},o.a.createElement("input",{className:"name-textbox",type:"text",name:"name",onChange:function(t){e.handleNameChange(t)},placeholder:"Your Name",required:!0}),o.a.createElement("button",{className:"line-button",disabled:this.state.signedUp},"Get In Line!"))))}}]),t}(o.a.Component);P.contextType=g;var y=P,U=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context.adoptedPet,t=this.context.currentUser;return o.a.createElement("div",{className:"confirmation-page"},o.a.createElement("h2",null,"Congrats ",t,"! You adopoted ",e.name,"!"),o.a.createElement("div",{className:"confirmPic"},o.a.createElement("img",{src:e.imageURL,alt:e.description}),o.a.createElement(c.b,{to:"/"},o.a.createElement("button",null,"Back to Home!"))))}}]),t}(o.a.Component);U.contextType=g;var O=U,A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",peopleList:[],signedUp:!1,nextUp:!1,realPerson:!1,adopted:!1},n.adoptCatNow=function(){console.log("AdoptCatNow func executed"),n.state.realPerson?(n.context.setAdoptedPet(n.context.cats[0]),n.setState({adopted:!0})):fetch("".concat(C.API_BASE_URL,"/pets/api/removecat"),{method:"delete",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){n.context.setCats(e),n.context.setAdoptedPet(n.context.cats[0])})),fetch("".concat(C.API_BASE_URL,"/people"),{method:"delete",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){n.context.setPeople(e),n.setState({peopleList:e})}))},n.adoptDogNow=function(){n.state.realPerson?(n.context.setAdoptedPet(n.context.dogs[0]),n.setState({adopted:!0})):fetch("".concat(C.API_BASE_URL,"/pets/api/removedog"),{method:"delete",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){n.context.setDogs(e),n.context.setAdoptedPet(n.context.dogs[0])})),fetch("".concat(C.API_BASE_URL,"/people"),{method:"delete",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){n.context.setPeople(e),n.setState({peopleList:e})}))},n.setNextUp=function(){n.setState({nextUp:!0,realPerson:!0})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(C.API_BASE_URL,"/pets/api/getalldogs")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.context.setDogs(t)})),fetch("".concat(C.API_BASE_URL,"/pets/api/getallcats")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.context.setCats(t)})),fetch("".concat(C.API_BASE_URL,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.context.setPeople(t),e.setState({peopleList:t})}))}},{key:"render",value:function(){return this.state.nextUp?this.state.adopted?this.state.adopted?o.a.createElement("div",{className:"confirmation-page"},o.a.createElement(O,null)):void 0:o.a.createElement("div",{className:"adoption-page"},o.a.createElement(h,null),o.a.createElement(y,{startTimer:this.startTimer,adoptCatNow:this.adoptCatNow,adoptDogNow:this.adoptDogNow,peopleList:this.state.peopleList,setNextUp:this.setNextUp,testFunc:this.testFunc}),o.a.createElement("div",{className:"pets-and-queue"},o.a.createElement(v,{adoptCatNow:this.adoptCatNow}),o.a.createElement(b,{adoptDogNow:this.adoptDogNow}))):this.context.currentUser?o.a.createElement("div",{className:"adoption-page"},o.a.createElement(h,null),o.a.createElement("h3",null,"You are in line ",this.context.currentUser," !! Please wait...."),o.a.createElement(y,{startTimer:this.startTimer,adoptCatNow:this.adoptCatNow,adoptDogNow:this.adoptDogNow,peopleList:this.state.peopleList,setNextUp:this.setNextUp,testFunc:this.testFunc})):o.a.createElement("div",{className:"adoption-page"},o.a.createElement(h,null),o.a.createElement("h3",null,"Enter your name to get in line now!"),o.a.createElement(y,{startTimer:this.startTimer,adoptCatNow:this.adoptCatNow,adoptDogNow:this.adoptDogNow,peopleList:this.state.peopleList,setNextUp:this.setNextUp,testFunc:this.testFunc}))}}]),t}(o.a.Component);A.contextType=g;var w=A;function S(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Page Not Found!"))}var D=function(){return o.a.createElement(x,null,o.a.createElement(c.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:f}),o.a.createElement(i.a,{path:"/adopt",component:w}),o.a.createElement(i.a,{component:S}))))};s.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.52eb7834.chunk.js.map