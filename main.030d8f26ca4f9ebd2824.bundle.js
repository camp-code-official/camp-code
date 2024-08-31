(()=>{"use strict";var e,t,n,a={767:(e,t,n)=>{n.r(t),n.d(t,{auth:()=>l});var a=n(223),o=n(969),r=n(75);const i=(0,a.Wp)({apiKey:"AIzaSyAqfJN22AYzDo0M08UJqGf5y1j_sEcpoVM",authDomain:"camp-code-auth.firebaseapp.com",projectId:"camp-code-auth",storageBucket:"camp-code-auth.appspot.com",messagingSenderId:"55915909282",appId:"1:55915909282:web:eb8ade8b7e91dd8019c7fb",measurementId:"G-2NKF6W8K1T"}),l=(0,o.xI)(i);(0,r.P5)(i)},577:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=n(648),i=a(n(318)),l=a(n(860)),s=a(n(721)),d=a(n(788)),c=a(n(927));t.default=()=>o.default.createElement(r.HashRouter,null,o.default.createElement("div",{style:{padding:"20px"}},o.default.createElement(r.Routes,null,o.default.createElement(r.Route,{path:"/",element:o.default.createElement(i.default,null)}),o.default.createElement(r.Route,{path:"/about",element:o.default.createElement(l.default,null)}),o.default.createElement(r.Route,{path:"/game",element:o.default.createElement(s.default,null)}),o.default.createElement(r.Route,{path:"/login",element:o.default.createElement(d.default,{onLogin:()=>{}})}),o.default.createElement(r.Route,{path:"/dashboard",element:o.default.createElement(c.default,null)})," ")))},749:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=a(n(961)),i=a(n(577));r.default.render(o.default.createElement(o.default.StrictMode,null,o.default.createElement(i.default,null)),document.getElementById("root"))},774:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=n(277),l=r(n(186));class s extends i.Scene3D{constructor(){super({key:"MainScene"}),this.canJump=!0,this.isJumping=!1,this.commandQueue=[],this.processingQueue=!1}init(){this.accessThirdDimension()}create(){this.setupScene(),this.loadPlayer(),this.setupInput(),this.createCommandLibrary()}setupScene(){this.third.warpSpeed("camera","sky","ground","light"),this.createTerrain(),this.addEnvironmentalElements();const e=new l.AmbientLight(11184810,.6);this.third.scene.add(e);const t=new l.DirectionalLight(16777215,.8);t.position.set(50,100,50),t.castShadow=!0,this.third.scene.add(t)}createTerrain(){const e=new l.PlaneGeometry(100,100,64,64),t=new l.MeshStandardMaterial({color:5197647}),n=new i.ExtendedObject3D,a=new l.Mesh(e,t);a.rotation.x=-Math.PI/2,a.position.y=.1,a.receiveShadow=!0;const o=a.geometry.getAttribute("position");for(let e=0;e<o.count;e++){const t=o.getY(e);o.setY(e,t+2*Math.random()-1)}o.needsUpdate=!0,a.geometry.computeVertexNormals(),n.add(a),this.third.add.existing(n),this.third.physics.add.existing(n,{mass:0})}addEnvironmentalElements(){const e=new l.CylinderGeometry(.2,.5,3,8),t=new l.MeshStandardMaterial({color:9127187}),n=new l.ConeGeometry(1,2,8),a=new l.MeshStandardMaterial({color:2263842});[{x:-15,z:-10},{x:-10,z:-20},{x:-5,z:-5},{x:5,z:-15},{x:10,z:-25},{x:15,z:-10},{x:-20,z:5},{x:20,z:-5},{x:-25,z:-15},{x:15,z:10}].forEach((({x:o,z:r})=>{const s=new i.ExtendedObject3D,d=new l.Mesh(e,t);d.position.set(o,1.5,r),d.castShadow=!0,s.add(d),this.third.add.existing(s);const c=new i.ExtendedObject3D,u=new l.Mesh(n,a);u.position.set(o,3,r),u.castShadow=!0,c.add(u),this.third.add.existing(c)}));for(let e=0;e<10;e++){const e=.5*Math.random()+.1,t=new l.DodecahedronGeometry(e),n=new l.MeshStandardMaterial({color:8421504}),a=new i.ExtendedObject3D,o=new l.Mesh(t,n),r=50*Math.random()-25,s=50*Math.random()-25;o.position.set(r,e/2,s),o.castShadow=!0,a.add(o),this.third.add.existing(a),this.third.physics.add.existing(a,{mass:0})}for(let e=0;e<30;e++){const e=.1*Math.random()+.05,t=new l.SphereGeometry(e,8,8),n=new l.MeshStandardMaterial({color:6908265}),a=new i.ExtendedObject3D,o=new l.Mesh(t,n),r=50*Math.random()-25,s=50*Math.random()-25;o.position.set(r,e/2,s),o.castShadow=!0,a.add(o),this.third.add.existing(a),this.third.physics.add.existing(a,{mass:0})}}loadPlayer(){this.third.load.gltf("/assets/glb/box_man.glb").then((e=>{const t=e.scene.children[0];this.man=new i.ExtendedObject3D,this.man.name="man",this.man.add(t),this.setupPlayerPhysics(),this.setupPlayerAnimations(e.animations),this.addThirdPersonControls()}))}setupPlayerPhysics(){this.man&&(this.man.traverse((e=>{e.isMesh&&(e.shape="convex",e.castShadow=e.receiveShadow=!0,e.material instanceof l.MeshStandardMaterial&&(e.material.roughness=1,e.material.metalness=0))})),this.man.position.set(0,2,8),this.third.add.existing(this.man),this.third.physics.add.existing(this.man,{shape:"capsule",radius:.2,height:.6,offset:{y:-.55}}),this.man.body.setFriction(.8),this.man.body.setAngularFactor(0,0,0))}setupPlayerAnimations(e){var t;this.man&&(this.third.animationMixers.add(this.man.anims.mixer),e.forEach((e=>{var t;e.name&&(null===(t=this.man)||void 0===t||t.anims.add(e.name,e))})),null===(t=this.man)||void 0===t||t.anims.play("idle"))}addThirdPersonControls(){this.man&&(this.controls=new i.ThirdPersonControls(this.third.camera,this.man,{offset:new l.Vector3(0,1,0),targetRadius:3}))}setupInput(){const e=document.createElement("textarea");e.placeholder='Enter commands...\n(e.g., "for (let i = 0; i < 3; i++) {\n  forward();\n}")',Object.assign(e.style,{position:"fixed",top:"20px",right:"20px",width:"400px",height:"200px",fontSize:"16px",backgroundColor:"#f5f5f5",color:"#333",border:"2px solid #ddd",padding:"10px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",zIndex:"1000",outline:"none",fontFamily:"monospace",whiteSpace:"pre-wrap"}),document.body.appendChild(e),e.focus(),e.addEventListener("keydown",(t=>{if("Tab"===t.key){t.preventDefault();const n=e.selectionStart,a=e.selectionEnd;e.value=e.value.substring(0,n)+"\t"+e.value.substring(a),e.selectionStart=e.selectionEnd=n+1}}));const t=document.createElement("button");t.textContent="Run",Object.assign(t.style,{position:"fixed",top:"240px",right:"calc(20px + 150px)",width:"100px",height:"50px",marginTop:"20px",fontSize:"16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",zIndex:"1000",cursor:"pointer"}),document.body.appendChild(t),t.addEventListener("click",(()=>{const t=e.value;this.commandQueue=[];const n=t.split("\n").map((e=>e.trim()));let a="",o=!1;n.forEach(((e,t)=>{e.startsWith("for ")?(o=!0,a+=e+" "):o&&e.endsWith("}")?(o=!1,a+=e,this.handleForLoop(a,t),a=""):o?a+=e+" ":this.isValidCommand(e)?this.commandQueue.push(e):alert(`Error on line ${t+1}: Invalid command '${e}'`)})),this.processCommands(),e.value=""}))}handleForLoop(e,t){try{const n=e.match(/for\s*\(\s*let\s*(\w+)\s*=\s*(\d+)\s*;\s*\w+\s*<\s*(\d+)\s*;\s*\w+\+\+\s*\)\s*\{\s*([^}]*)\s*\}/);if(!n)throw new Error(`Syntax error in for-loop at line ${t+1}`);const[a,o,r,i,l]=n,s=parseInt(r),d=parseInt(i);for(let e=s;e<d;e++)l.split(";").map((e=>e.trim())).filter((e=>e.length>0)).forEach((e=>{if(!this.isValidCommand(e))throw new Error(`Invalid command '${e}' inside for-loop at line ${t+1}`);this.commandQueue.push(e)}))}catch(e){alert(e.message)}}isValidCommand(e){return["forward()","backward()","left()","right()","jump()","jump_forward()","jump_left()","jump_right()"].includes(e)}createCommandLibrary(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",top:"20px",left:"20px",width:"300px",maxHeight:"300px",overflowY:"auto",backgroundColor:"#333",color:"white",padding:"10px",borderRadius:"12px",fontSize:"14px",zIndex:"1000",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.2)",transition:"max-height 0.3s ease"});const t=document.createElement("button");t.textContent="Command Library ▼",Object.assign(t.style,{display:"block",width:"100%",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",padding:"5px",cursor:"pointer",marginBottom:"10px",textAlign:"left"});const n=document.createElement("div");n.innerHTML='\n      <h2 style="margin-top: 0;">Command Library</h2>\n      <ul style="padding-left: 20px; list-style: none; line-height: 1.6;">\n        <li><strong>forward()</strong> - Move forward</li>\n        <li><strong>backward()</strong> - Move backward</li>\n        <li><strong>left()</strong> - Move left</li>\n        <li><strong>right()</strong> - Move right</li>\n        <li><strong>jump()</strong> - Jump up</li>\n        <li><strong>jump_forward()</strong> - Jump forward</li>\n        <li><strong>jump_left()</strong> - Jump left</li>\n        <li><strong>jump_right()</strong> - Jump right</li>\n        <li><strong>for loop</strong> - Repeat commands\n          <ul style="padding-left: 20px;">\n            <li>Syntax: <code>for (let i = 0; i < n; i++) {</code></li>\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>command;</code></li>\n            <li><code>}</code></li>\n            <li>Example:</li>\n            <li><code>for (let i = 0; i < 3; i++) {</code></li>\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>forward();</code></li>\n            <li><code>}</code></li>\n          </ul>\n        </li>\n      </ul>\n    ',n.style.display="none",t.addEventListener("click",(()=>{const e="none"===n.style.display;n.style.display=e?"block":"none",t.textContent=e?"Command Library ▲":"Command Library ▼"})),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}executeCommand(e){switch(e){case"forward()":this.moveInDirection(0);break;case"backward()":this.moveInDirection(Math.PI);break;case"left()":this.moveInDirection(Math.PI/2);break;case"right()":this.moveInDirection(-Math.PI/2);break;case"jump()":this.jump();break;case"jump_forward()":this.jumpAndMove(0);break;case"jump_left()":this.jumpAndMove(Math.PI/2);break;case"jump_right()":this.jumpAndMove(-Math.PI/2);break;default:console.log("Unknown command:",e)}}processCommands(){if(0===this.commandQueue.length||this.processingQueue)return;this.processingQueue=!0;const e=this.commandQueue.shift();e&&this.executeCommand(e),this.time.addEvent({delay:500,callback:()=>{this.processingQueue=!1,this.processCommands()}})}moveInDirection(e){var t;if(this.man&&this.man.body){const n=4,a=new l.Vector3,o=this.third.camera.getWorldDirection(a),r=Math.atan2(o.x,o.z)+e,i=Math.sin(r)*n,s=this.man.body.velocity.y,d=Math.cos(r)*n;this.man.body.setVelocity(i,s,d),this.isJumping||null===(t=this.man)||void 0===t||t.anims.play("idle")}}jump(){var e;this.man&&this.canJump&&this.man.body&&(this.canJump=!1,this.isJumping=!0,null===(e=this.man)||void 0===e||e.anims.play("jump_running"),this.man.body.applyForceY(4),this.time.addEvent({delay:750,callback:()=>{this.canJump=!0}}),this.time.addEvent({delay:750,callback:()=>{var e;this.man&&(null===(e=this.man)||void 0===e||e.anims.play("idle"),this.isJumping=!1)}}))}jumpAndMove(e){this.jump(),this.moveInDirection(e)}update(e,t){this.man&&this.man.body&&this.controls&&this.controls.update&&this.controls.update(0,0)}}t.default=s},734:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){}create(){this.scene.start("MainScene")}}t.default=n},860:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=n(648),i={backgroundImage:"url(https://www.clipartmax.com/png/full/107-1074090_cartoon-medal-badge-png.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",padding:"20px",marginBottom:"40px",borderRadius:"15px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",width:"80%",marginLeft:"10%",position:"relative",border:"4px solid #f0f8ff",borderImage:"linear-gradient(to right, #87cefa, #ffeb3b) 1"};t.default=()=>o.default.createElement("div",{style:{fontFamily:"Arial, sans-serif",backgroundColor:"#ffffff",color:"#333",margin:0,padding:0}},o.default.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",padding:"20px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}},o.default.createElement("div",{style:{display:"flex",alignItems:"center"}},o.default.createElement("img",{src:"../assets/img/campcode.png",alt:"Camp Code Logo",style:{height:"50px",marginRight:"10px"}})),o.default.createElement("nav",null,o.default.createElement("ul",{style:{listStyle:"none",margin:"0",padding:"0",display:"flex",justifyContent:"flex-end"}},o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"/",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Home")),o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"/about",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"About")),o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"#",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Contact")),o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"/login",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Login"))))),o.default.createElement("main",{className:"content",style:{textAlign:"center",padding:"50px 20px"}},o.default.createElement("h1",{style:{color:"#ff8c00",fontSize:"36px"}},"About Camp Code"),o.default.createElement("p",{style:{fontSize:"18px",lineHeight:"1.6",maxWidth:"800px",margin:"0 auto"}},"Camp Code is an immersive coding program designed to help you learn Python in a fun and adventurous way. Imagine yourself in a camping scenario where each coding task you complete helps you survive and thrive in the wild. From building a shelter to foraging for food, your coding skills will be your key to mastering the forest.")),o.default.createElement("div",{className:"forest-border",style:{paddingTop:"50px"}},o.default.createElement("div",{style:i},o.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Learn Survival Coding"),o.default.createElement("p",{style:{fontSize:"16px"}},"As you navigate through the forest, you'll learn the basics of Python programming. Each challenge is a step towards mastering coding fundamentals while you gather resources, set up camp, and keep the forest critters at bay.")),o.default.createElement("div",{style:i},o.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Advanced Coding Challenges"),o.default.createElement("p",{style:{fontSize:"16px"}},"Once you've set up camp, it's time to delve deeper into Python. Advanced coding challenges will test your skills as you build tools, solve puzzles, and unlock new areas of the forest.")),o.default.createElement("div",{style:i},o.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Earn Badges & Rewards"),o.default.createElement("p",{style:{fontSize:"16px"}},"Complete tasks and challenges to earn badges that showcase your coding prowess. Collect rewards as you progress, and watch your coding skills grow alongside your survival instincts."))))},927:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(540)),l=n(648),s={username:"User",progress:"Level 7",badges:[{name:"Skill 1",description:"Blah Blah"},{name:"Skill 2",description:"Blah Blah"}],character:{name:"",avatarUrl:"/assets/img/user-avatar.png"}},d={dashboard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",backgroundImage:"url(/assets/img/camp-background1.webp)",backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",color:"#fff",fontFamily:"Arial, sans-serif"},userInfo:{textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"20px",borderRadius:"10px",marginBottom:"20px",width:"80%"},characterInfo:{display:"flex",flexDirection:"column",alignItems:"center"},characterAvatar:{width:"150px",height:"150px",borderRadius:"50%",border:"5px solid #FFA500",marginBottom:"10px"},progressInfo:{marginTop:"20px"},badgesInfo:{marginTop:"20px",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"20px",borderRadius:"10px",width:"80%"},badgeList:{listStyle:"none",padding:"0"},badgeItem:{marginBottom:"10px",backgroundColor:"#4CAF50",padding:"10px",borderRadius:"5px"},playButton:{textDecoration:"none",backgroundColor:"#ff5722",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginTop:"20px",display:"inline-block"}};t.default=()=>{const[e,t]=(0,i.useState)(s);return(0,i.useEffect)((()=>{}),[]),i.default.createElement("div",{style:d.dashboard},i.default.createElement("div",{style:d.userInfo},i.default.createElement("h1",null,"Welcome, ",e.username),i.default.createElement("div",{style:d.characterInfo},i.default.createElement("img",{src:e.character.avatarUrl,alt:e.character.name,style:d.characterAvatar}),i.default.createElement("p",null,e.character.name)),i.default.createElement("div",{style:d.progressInfo},i.default.createElement("h2",null,"Progress"),i.default.createElement("p",null,e.progress)),i.default.createElement(l.Link,{to:"/game",style:d.playButton},"Play")),i.default.createElement("div",{style:d.badgesInfo},i.default.createElement("h2",null,"Badges"),i.default.createElement("ul",{style:d.badgeList},e.badges.map(((e,t)=>i.default.createElement("li",{key:t,style:d.badgeItem},i.default.createElement("h3",null,e.name),i.default.createElement("p",null,e.description)))))))}},721:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(540)),s=r(n(440)),d=n(277),c=i(n(774)),u=i(n(734));t.default=()=>{const e=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const t=Object.assign({type:s.WEBGL,transparent:!0,scale:{mode:s.Scale.FIT,autoCenter:s.Scale.CENTER_BOTH,width:1280,height:720},scene:[u.default,c.default]},(0,d.Canvas)());return(0,d.enable3d)((()=>{const n=new s.Game(t);return e.current=n,n})).withPhysics("assets/ammo"),()=>{e.current&&(e.current.destroy(!0),e.current=null)}}),[]),l.default.createElement("div",{id:"phaser-game",style:{width:"100%",height:"100%"}})}},318:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=n(648);t.default=()=>o.default.createElement("div",null,o.default.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",padding:"20px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}},o.default.createElement("div",{style:{display:"flex",alignItems:"center"}},o.default.createElement("img",{src:"../assets/img/campcode.png",alt:"Camp Code Logo",style:{height:"50px",marginRight:"10px"}})),o.default.createElement("nav",null,o.default.createElement("ul",{style:{listStyle:"none",margin:"0",padding:"0",display:"flex",justifyContent:"flex-end"}},o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"/",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Home")),o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"/about",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"About")),o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"#",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Contact")),o.default.createElement("li",{style:{marginLeft:"20px"}},o.default.createElement(r.Link,{to:"/login",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Login"))))),o.default.createElement("main",null,o.default.createElement("section",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"50px",backgroundColor:"#ffffff"}},o.default.createElement("div",{style:{maxWidth:"50%"}},o.default.createElement("h1",{style:{fontSize:"4em",color:"#ff9800",marginBottom:"20px"}},"CAMP CODE"),o.default.createElement("p",{style:{fontSize:"1.2em",color:"#757575",marginBottom:"40px"}},"A fun and easy way to learn code."),o.default.createElement(r.Link,{to:"/game",style:{textDecoration:"none",backgroundColor:"#ff5722",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginRight:"20px"}},"Play"),o.default.createElement(r.Link,{to:"/game",style:{textDecoration:"none",backgroundColor:"#ff5722",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginRight:"20px"}},"Learn More"),o.default.createElement(r.Link,{to:"/dashboard",style:{textDecoration:"none",backgroundColor:"#007BFF",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase"}},"Dashboard")),o.default.createElement("div",{style:{maxWidth:"50%"}},o.default.createElement("img",{src:"https://i.pinimg.com/564x/c5/3a/44/c53a44d3af7099b6bb7e7bd5bb472e41.jpg",alt:"Camping Image",style:{maxWidth:"100%",height:"auto"}})))))},788:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(540)),s=n(648),d=n(52),c=n(767);t.default=({onLogin:e})=>{const[t,n]=(0,l.useState)(""),[a,o]=(0,l.useState)(""),[r,u]=(0,l.useState)(""),p=(0,s.useNavigate)();return l.default.createElement("div",null,l.default.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",padding:"20px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}},l.default.createElement("div",{style:{display:"flex",alignItems:"center"}},l.default.createElement("img",{src:"../assets/img/campcode.png",alt:"Camp Code Logo",style:{height:"50px",marginRight:"10px"}})),l.default.createElement("nav",null,l.default.createElement("ul",{style:{listStyle:"none",margin:"0",padding:"0",display:"flex",justifyContent:"flex-end"}},l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(s.Link,{to:"/",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Home")),l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(s.Link,{to:"/about",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"About")),l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(s.Link,{to:"/contact",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Contact")),l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(s.Link,{to:"/login",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Login"))))),l.default.createElement("main",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 80px)"}},l.default.createElement("form",{onSubmit:n=>i(void 0,void 0,void 0,(function*(){n.preventDefault();try{yield(0,d.signInWithEmailAndPassword)(c.auth,t,a),e(),p("/game")}catch(e){e instanceof Error?u(e.message):u("An unexpected error occurred.")}})),style:{background:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%"}},l.default.createElement("h1",{style:{marginBottom:"20px",fontSize:"24px",color:"#333"}},"Login"),r&&l.default.createElement("p",{style:{color:"red",marginBottom:"10px"}},r),l.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Email:",l.default.createElement("input",{type:"email",value:t,onChange:e=>n(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),l.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Password:",l.default.createElement("input",{type:"password",value:a,onChange:e=>o(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),l.default.createElement("button",{type:"submit",style:{backgroundColor:"#007bff",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px"}},"Login"),l.default.createElement("button",{onClick:()=>{p("/signup")},style:{backgroundColor:"#FFA500",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px",marginTop:"10px"}},"Sign Up"))))}}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return a[e].call(n.exports,n,n.exports,r),n.exports}r.m=a,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],l=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var l=2&a&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,r.d(o,i),o},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,l,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(s)var c=s(r)}for(t&&t(n);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[96],(()=>r(749)));i=r.O(i)})();