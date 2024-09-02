(()=>{"use strict";var e,t,n,a={767:(e,t,n)=>{n.r(t),n.d(t,{auth:()=>l});var a=n(223),r=n(969),o=n(75);const i=(0,a.Wp)({apiKey:"AIzaSyAqfJN22AYzDo0M08UJqGf5y1j_sEcpoVM",authDomain:"camp-code-auth.firebaseapp.com",projectId:"camp-code-auth",storageBucket:"camp-code-auth.appspot.com",messagingSenderId:"55915909282",appId:"1:55915909282:web:eb8ade8b7e91dd8019c7fb",measurementId:"G-2NKF6W8K1T"}),l=(0,r.xI)(i);(0,o.P5)(i)},577:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(540)),o=n(648),i=a(n(318)),l=a(n(860)),d=a(n(721)),s=a(n(788)),c=a(n(31)),u=a(n(927));t.default=()=>r.default.createElement(o.HashRouter,null,r.default.createElement("div",{style:{padding:"20px"}},r.default.createElement(o.Routes,null,r.default.createElement(o.Route,{path:"/",element:r.default.createElement(i.default,null)}),r.default.createElement(o.Route,{path:"/about",element:r.default.createElement(l.default,null)}),r.default.createElement(o.Route,{path:"/game",element:r.default.createElement(d.default,null)}),r.default.createElement(o.Route,{path:"/login",element:r.default.createElement(s.default,{onLogin:()=>{}})}),r.default.createElement(o.Route,{path:"/signup",element:r.default.createElement(c.default,{onSignUp:()=>{}})}),r.default.createElement(o.Route,{path:"/dashboard",element:r.default.createElement(u.default,null)}))))},749:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(540)),o=a(n(961)),i=a(n(577));o.default.render(r.default.createElement(r.default.StrictMode,null,r.default.createElement(i.default,null)),document.getElementById("root"))},59:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(540)),o=n(601),i=n(65),l=n(65);t.default=()=>r.default.createElement("footer",{style:{padding:"20px 20px",textAlign:"center",borderTop:"2px solid #ddd",backgroundColor:"#fff",bottom:0,left:0,width:"100%"}},r.default.createElement("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"center",alignItems:"center"}},r.default.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#333"}},"Created by Camp Code Team")),r.default.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap"}},[{name:"Banibe Ebegbodi",link:"https://www.linkedin.com/in/bani-ebegbodi/"},{name:"Jaden Wong",link:"https://www.linkedin.com/in/jadenawong/"},{name:"Shreya Gogini",link:"https://www.linkedin.com/in/shreya-gogini-917606234/"},{name:"Thompson Ngo",link:"https://www.linkedin.com/in/tngo2001/"}].map(((e,t)=>r.default.createElement("a",{key:t,href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#007BFF",fontSize:"16px",fontWeight:"bold"}},e.name)))),r.default.createElement("div",{style:{marginTop:"10px"}},r.default.createElement("a",{href:"https://github.com/camp-code-official",target:"_blank",rel:"noopener noreferrer",style:{color:"#333",fontSize:"36px",marginRight:"20px"}},r.default.createElement(o.FontAwesomeIcon,{icon:i.faGithub})),r.default.createElement("a",{href:"https://www.linkedin.com/company/camp-code",target:"_blank",rel:"noopener noreferrer",style:{color:"#333",fontSize:"36px"}},r.default.createElement(o.FontAwesomeIcon,{icon:l.faLinkedin}))))},632:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(e){o(e)}}function l(e){try{d(a.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(540)),d=n(648),s=n(767),c=n(52),u=n(52);t.default=()=>{const[e,t]=(0,l.useState)(!1),n=(0,d.useNavigate)();return(0,l.useEffect)((()=>{const e=(0,u.onAuthStateChanged)(s.auth,(e=>{t(!!e)}));return()=>e()}),[]),l.default.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",padding:"20px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}},l.default.createElement("div",{style:{display:"flex",alignItems:"center"}},l.default.createElement(d.Link,{to:"/",style:{textDecoration:"none"}},l.default.createElement("img",{src:"../assets/img/campcode.png",alt:"Camp Code Logo",style:{height:"50px",marginRight:"10px",cursor:"pointer",userSelect:"none",pointerEvents:"none"}}))),l.default.createElement("nav",null,l.default.createElement("ul",{style:{listStyle:"none",margin:"0",padding:"0",display:"flex",justifyContent:"flex-end"}},l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(d.Link,{to:"/",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Home")),l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(d.Link,{to:"/about",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"About")),l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(d.Link,{to:"https://forms.gle/jSQrvAUN3JD93RCi6",target:"_blank",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Contact")),l.default.createElement("li",{style:{marginLeft:"20px"}},e?l.default.createElement("button",{onClick:()=>i(void 0,void 0,void 0,(function*(){yield(0,c.signOut)(s.auth),t(!1),n("/login")})),style:{backgroundColor:"transparent",border:"none",color:"#007BFF",fontWeight:"bold",cursor:"pointer"}},"Logout"):l.default.createElement(d.Link,{to:"/login",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Login")))))}},315:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=n(277),l=o(n(186));class d extends i.Scene3D{constructor(){super({key:"LevelOneScene"}),this.canJump=!0,this.isJumping=!1,this.commandQueue=[],this.processingQueue=!1}init(){this.accessThirdDimension()}create(){this.setupScene(),this.loadPlayer(),this.setupInput(),this.createCommandLibrary()}setupScene(){this.third.warpSpeed("camera","sky","ground","light"),this.createTerrain(),this.addEnvironmentalElements();const e=new l.AmbientLight(11184810,.6);this.third.scene.add(e);const t=new l.DirectionalLight(16777215,.8);t.position.set(50,100,50),t.castShadow=!0,this.third.scene.add(t)}createTerrain(){const e=new l.PlaneGeometry(100,100,64,64),t=new l.MeshStandardMaterial({color:5197647}),n=new i.ExtendedObject3D,a=new l.Mesh(e,t);a.rotation.x=-Math.PI/2,a.position.y=.1,a.receiveShadow=!0;const r=a.geometry.getAttribute("position");for(let e=0;e<r.count;e++){const t=r.getY(e);r.setY(e,t+2*Math.random()-1)}r.needsUpdate=!0,a.geometry.computeVertexNormals(),n.add(a),this.third.add.existing(n),this.third.physics.add.existing(n,{mass:0})}addEnvironmentalElements(){const e=new l.CylinderGeometry(.2,.5,3,8),t=new l.MeshStandardMaterial({color:9127187}),n=new l.ConeGeometry(1,2,8),a=new l.MeshStandardMaterial({color:2263842});[{x:-15,z:-10},{x:-10,z:-20},{x:-5,z:-5},{x:5,z:-15},{x:10,z:-25},{x:15,z:-10},{x:-20,z:5},{x:20,z:-5},{x:-25,z:-15},{x:15,z:10}].forEach((({x:r,z:o})=>{const d=new i.ExtendedObject3D,s=new l.Mesh(e,t);s.position.set(r,1.5,o),s.castShadow=!0,d.add(s),this.third.add.existing(d);const c=new i.ExtendedObject3D,u=new l.Mesh(n,a);u.position.set(r,3,o),u.castShadow=!0,c.add(u),this.third.add.existing(c)}));for(let e=0;e<10;e++){const e=.5*Math.random()+.1,t=new l.DodecahedronGeometry(e),n=new l.MeshStandardMaterial({color:8421504}),a=new i.ExtendedObject3D,r=new l.Mesh(t,n),o=50*Math.random()-25,d=50*Math.random()-25;r.position.set(o,e/2,d),r.castShadow=!0,a.add(r),this.third.add.existing(a),this.third.physics.add.existing(a,{mass:0})}for(let e=0;e<30;e++){const e=.1*Math.random()+.05,t=new l.SphereGeometry(e,8,8),n=new l.MeshStandardMaterial({color:6908265}),a=new i.ExtendedObject3D,r=new l.Mesh(t,n),o=50*Math.random()-25,d=50*Math.random()-25;r.position.set(o,e/2,d),r.castShadow=!0,a.add(r),this.third.add.existing(a),this.third.physics.add.existing(a,{mass:0})}}loadPlayer(){this.third.load.gltf("/assets/glb/box_man.glb").then((e=>{const t=e.scene.children[0];this.man=new i.ExtendedObject3D,this.man.name="man",this.man.add(t),this.setupPlayerPhysics(),this.setupPlayerAnimations(e.animations),this.addThirdPersonControls()}))}setupPlayerPhysics(){this.man&&(this.man.traverse((e=>{e.isMesh&&(e.shape="convex",e.castShadow=e.receiveShadow=!0,e.material instanceof l.MeshStandardMaterial&&(e.material.roughness=1,e.material.metalness=0))})),this.man.position.set(0,2,8),this.third.add.existing(this.man),this.third.physics.add.existing(this.man,{shape:"capsule",radius:.2,height:.6,offset:{y:-.55}}),this.man.body.setFriction(.8),this.man.body.setAngularFactor(0,0,0))}setupPlayerAnimations(e){var t;this.man&&(this.third.animationMixers.add(this.man.anims.mixer),e.forEach((e=>{var t;e.name&&(null===(t=this.man)||void 0===t||t.anims.add(e.name,e))})),null===(t=this.man)||void 0===t||t.anims.play("idle"))}addThirdPersonControls(){this.man&&(this.controls=new i.ThirdPersonControls(this.third.camera,this.man,{offset:new l.Vector3(0,1,0),targetRadius:3}))}setupInput(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",bottom:"20px",right:"20px",width:"400px",zIndex:"1000",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"10px"});const t=document.createElement("textarea");t.placeholder='Enter commands...\n(e.g., "for (let i = 0; i < 3; i++) {\n  forward();\n}")',Object.assign(t.style,{width:"100%",height:"200px",fontSize:"16px",backgroundColor:"#f5f5f5",color:"#333",border:"2px solid #ddd",padding:"10px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",outline:"none",fontFamily:"monospace",whiteSpace:"pre-wrap"}),t.addEventListener("keydown",(e=>{if("Tab"===e.key){e.preventDefault();const n=t.selectionStart,a=t.selectionEnd;t.value=t.value.substring(0,n)+"\t"+t.value.substring(a),t.selectionStart=t.selectionEnd=n+1}}));const n=document.createElement("button");n.textContent="Run",Object.assign(n.style,{alignSelf:"center",width:"100px",height:"50px",fontSize:"16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",cursor:"pointer"}),n.addEventListener("click",(()=>{const e=t.value;this.commandQueue=[];const n=e.split("\n").map((e=>e.trim()));let a="",r=!1;n.forEach(((e,t)=>{e.startsWith("for ")?(r=!0,a+=e+" "):r&&e.endsWith("}")?(r=!1,a+=e,this.handleForLoop(a,t),a=""):r?a+=e+" ":this.isValidCommand(e)?this.commandQueue.push(e):alert(`Error on line ${t+1}: Invalid command '${e}'`)})),this.processCommands(),t.value=""})),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}handleForLoop(e,t){try{const n=e.match(/for\s*\(\s*let\s*(\w+)\s*=\s*(\d+)\s*;\s*\w+\s*<\s*(\d+)\s*;\s*\w+\+\+\s*\)\s*\{\s*([^}]*)\s*\}/);if(!n)throw new Error(`Syntax error in for-loop at line ${t+1}`);const[a,r,o,i,l]=n,d=parseInt(o),s=parseInt(i);for(let e=d;e<s;e++)l.split(";").map((e=>e.trim())).filter((e=>e.length>0)).forEach((e=>{if(!this.isValidCommand(e))throw new Error(`Invalid command '${e}' inside for-loop at line ${t+1}`);this.commandQueue.push(e)}))}catch(e){alert(e.message)}}isValidCommand(e){return["forward()","backward()","left()","right()","jump()","jump_forward()","jump_left()","jump_right()"].includes(e)}createCommandLibrary(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",bottom:"20px",left:"20px",width:"300px",maxHeight:"300px",overflowY:"auto",backgroundColor:"#333",color:"white",padding:"10px",borderRadius:"12px",fontSize:"14px",zIndex:"1000",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.2)",transition:"max-height 0.3s ease"});const t=document.createElement("button");t.textContent="Command Library ▼",Object.assign(t.style,{display:"block",width:"100%",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",padding:"5px",cursor:"pointer",marginBottom:"10px",textAlign:"left"});const n=document.createElement("div");n.innerHTML='\n      <h2 style="margin-top: 0;">Command Library</h2>\n      <ul style="padding-left: 20px; list-style: none; line-height: 1.6;">\n        <li><strong>forward()</strong> - Move forward</li>\n        <li><strong>backward()</strong> - Move backward</li>\n        <li><strong>left()</strong> - Move left</li>\n        <li><strong>right()</strong> - Move right</li>\n        <li><strong>jump()</strong> - Jump up</li>\n        <li><strong>jump_forward()</strong> - Jump forward</li>\n        <li><strong>jump_left()</strong> - Jump left</li>\n        <li><strong>jump_right()</strong> - Jump right</li>\n        <li><strong>for loop</strong> - Repeat commands\n          <ul style="padding-left: 20px;">\n            <li>Syntax: <code>for (let i = 0; i < n; i++) {</code></li>\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>command;</code></li>\n            <li><code>}</code></li>\n            <li>Example:</li>\n            <li><code>for (let i = 0; i < 3; i++) {</code></li>\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>forward();</code></li>\n            <li><code>}</code></li>\n          </ul>\n        </li>\n      </ul>\n    ',n.style.display="none",t.addEventListener("click",(()=>{const e="none"===n.style.display;n.style.display=e?"block":"none",t.textContent=e?"Command Library ▲":"Command Library ▼"})),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}executeCommand(e){switch(e){case"forward()":this.moveInDirection(0);break;case"backward()":this.moveInDirection(Math.PI);break;case"left()":this.moveInDirection(Math.PI/2);break;case"right()":this.moveInDirection(-Math.PI/2);break;case"jump()":this.jump();break;case"jump_forward()":this.jumpAndMove(0);break;case"jump_left()":this.jumpAndMove(Math.PI/2);break;case"jump_right()":this.jumpAndMove(-Math.PI/2);break;default:console.log("Unknown command:",e)}}processCommands(){if(0===this.commandQueue.length||this.processingQueue)return;this.processingQueue=!0;const e=this.commandQueue.shift();e&&this.executeCommand(e),this.time.addEvent({delay:500,callback:()=>{this.processingQueue=!1,this.processCommands()}})}moveInDirection(e){var t;if(this.man&&this.man.body){const n=4,a=new l.Vector3,r=this.third.camera.getWorldDirection(a),o=Math.atan2(r.x,r.z)+e,i=Math.sin(o)*n,d=this.man.body.velocity.y,s=Math.cos(o)*n;this.man.body.setVelocity(i,d,s),this.isJumping||null===(t=this.man)||void 0===t||t.anims.play("idle")}}jump(){var e;this.man&&this.canJump&&this.man.body&&(this.canJump=!1,this.isJumping=!0,null===(e=this.man)||void 0===e||e.anims.play("jump_running"),this.man.body.applyForceY(4),this.time.addEvent({delay:750,callback:()=>{this.canJump=!0}}),this.time.addEvent({delay:750,callback:()=>{var e;this.man&&(null===(e=this.man)||void 0===e||e.anims.play("idle"),this.isJumping=!1)}}))}jumpAndMove(e){this.jump(),this.moveInDirection(e)}update(e,t){this.man&&this.man.body&&this.controls&&this.controls.update&&this.controls.update(0,0)}}t.default=d},251:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(440));class o extends r.default.Scene{constructor(){super({key:"MenuScene"}),this.unlockedLevels=new Set}preload(){}create(){this.unlockedLevels.add("LevelOneScene");const e=this.cameras.main.centerX-100;let t=100;[{name:"Level 1",sceneKey:"LevelOneScene"},{name:"Level 2",sceneKey:"LevelTwoScene"},{name:"Level 3",sceneKey:"LevelThreeScene"}].forEach((n=>{const a=this.add.graphics(),o=this.unlockedLevels.has(n.sceneKey),i=o?5025616:10395294;a.fillStyle(i),a.fillRect(e,t,200,50),this.add.text(e+100,t+25,n.name,{fontSize:"16px"}).setOrigin(.5),a.setInteractive(new r.default.Geom.Rectangle(e,t,200,50),r.default.Geom.Rectangle.Contains),a.on("pointerdown",(()=>{o&&this.scene.start(n.sceneKey)})),t+=110}))}unlockLevel(e){this.unlockedLevels.add(e),this.scene.restart()}}t.default=o},30:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){}create(){this.scene.start("MenuScene")}}t.default=n},860:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(540)),o=a(n(632)),i=a(n(59)),l={backgroundImage:"url(https://www.clipartmax.com/png/full/107-1074090_cartoon-medal-badge-png.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",padding:"20px",marginBottom:"40px",borderRadius:"15px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",width:"80%",marginLeft:"10%",position:"relative",border:"4px solid #f0f8ff",borderImage:"linear-gradient(to right, #87cefa, #ffeb3b) 1"};t.default=()=>r.default.createElement("div",{style:{backgroundColor:"#ffffff",color:"#333",margin:0,padding:0}},r.default.createElement(o.default,null),r.default.createElement("main",{className:"content",style:{textAlign:"center",padding:"50px 20px"}},r.default.createElement("h1",{style:{color:"#ff8c00",fontSize:"36px"}},"About Camp Code"),r.default.createElement("p",{style:{fontSize:"18px",lineHeight:"1.6",maxWidth:"800px",margin:"0 auto"}},"Camp Code is an immersive coding program designed to help you learn programming in a fun and adventurous way. Imagine yourself in a camping scenario where each coding task you complete helps you survive and thrive in the wild. From building a shelter to foraging for food, your coding skills will be your key to mastering the forest.")),r.default.createElement("div",{className:"forest-border",style:{paddingTop:"50px"}},r.default.createElement("div",{style:l},r.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Learn Survival Coding"),r.default.createElement("p",{style:{fontSize:"16px"}},"As you navigate through the forest, you'll learn the basics of programming. Each challenge is a step towards mastering coding fundamentals while you gather resources, set up camp, and keep the forest critters at bay.")),r.default.createElement("div",{style:l},r.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Advanced Coding Challenges"),r.default.createElement("p",{style:{fontSize:"16px"}},"Once you've set up camp, it's time to delve deeper into programming. Advanced coding challenges will test your skills as you build tools, solve puzzles, and unlock new areas of the forest.")),r.default.createElement("div",{style:l},r.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Earn Badges & Rewards"),r.default.createElement("p",{style:{fontSize:"16px"}},"Complete tasks and challenges to earn badges that showcase your coding prowess. Collect rewards as you progress, and watch your programming skills grow alongside your survival instincts."))),r.default.createElement(i.default,null))},927:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(540)),d=n(648),s=n(52),c=n(767),u=i(n(632)),p=i(n(59)),f={username:"User",progress:"Level 7",badges:[{name:"Skill 1",description:"Blah Blah"},{name:"Skill 2",description:"Blah Blah"}],character:{name:"",avatarUrl:"/assets/img/user-avatar.png"}},m={dashboard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",backgroundImage:"url(/assets/img/camp-background1.webp)",backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",color:"#fff",fontFamily:"Arial, sans-serif"},userInfo:{textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"20px",borderRadius:"10px",marginBottom:"20px",width:"80%"},characterInfo:{display:"flex",flexDirection:"column",alignItems:"center"},characterAvatar:{width:"150px",height:"150px",borderRadius:"50%",border:"5px solid #FFA500",marginBottom:"10px"},progressInfo:{marginTop:"20px"},badgesInfo:{marginTop:"20px",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"20px",borderRadius:"10px",width:"80%"},badgeList:{listStyle:"none",padding:"0"},badgeItem:{marginBottom:"10px",backgroundColor:"#4CAF50",padding:"10px",borderRadius:"5px"},playButton:{textDecoration:"none",backgroundColor:"#ff5722",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginTop:"20px",display:"inline-block"}};t.default=()=>{const[e,t]=(0,l.useState)(f),n=(0,d.useNavigate)();return(0,l.useEffect)((()=>{}),[]),(0,l.useEffect)((()=>{const e=(0,s.onAuthStateChanged)(c.auth,(e=>{e||n("/login")}));return()=>e()}),[n]),l.default.createElement("div",null,l.default.createElement(u.default,null),l.default.createElement("div",{style:m.dashboard},l.default.createElement("div",{style:m.userInfo},l.default.createElement("h1",null,"Welcome, ",e.username),l.default.createElement("div",{style:m.characterInfo},l.default.createElement("img",{src:e.character.avatarUrl,alt:e.character.name,style:m.characterAvatar}),l.default.createElement("p",null,e.character.name)),l.default.createElement("div",{style:m.progressInfo},l.default.createElement("h2",null,"Progress"),l.default.createElement("p",null,e.progress)),l.default.createElement(d.Link,{to:"/game",style:m.playButton},"Play")),l.default.createElement("div",{style:m.badgesInfo},l.default.createElement("h2",null,"Badges"),l.default.createElement("ul",{style:m.badgeList},e.badges.map(((e,t)=>l.default.createElement("li",{key:t,style:m.badgeItem},l.default.createElement("h3",null,e.name),l.default.createElement("p",null,e.description))))))),l.default.createElement(p.default,null))}},721:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(540)),d=n(648),s=o(n(440)),c=n(277),u=i(n(30)),p=i(n(251)),f=i(n(315)),m=n(52),h=n(767),g=i(n(632));t.default=()=>{const e=(0,l.useRef)(null),t=(0,d.useNavigate)();return(0,l.useEffect)((()=>{const e=(0,m.onAuthStateChanged)(h.auth,(e=>{e||t("/login")}));return()=>e()}),[t]),(0,l.useEffect)((()=>{const t=Object.assign({type:s.WEBGL,transparent:!0,scale:{mode:s.Scale.FIT,autoCenter:s.Scale.CENTER_BOTH,width:1280,height:720},scene:[u.default,p.default,f.default]},(0,c.Canvas)());return(0,c.enable3d)((()=>{const n=new s.Game(t);return e.current=n,n})).withPhysics("assets/ammo"),()=>{e.current&&(e.current.destroy(!0),e.current=null)}}),[]),l.default.createElement("div",null,l.default.createElement(g.default,null),l.default.createElement("div",{id:"phaser-game",style:{width:"100%",height:"100%"}}))}},318:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(540)),o=n(648),i=a(n(632)),l=a(n(59));t.default=()=>r.default.createElement("div",null,r.default.createElement(i.default,null),r.default.createElement("main",null,r.default.createElement("section",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"50px"}},r.default.createElement("div",{style:{maxWidth:"50%"}},r.default.createElement("h1",{style:{fontSize:"4em",color:"#ff9800",marginBottom:"20px"}},"CAMP CODE"),r.default.createElement("p",{style:{fontSize:"1.2em",color:"#757575",marginBottom:"40px"}},"A fun and easy way to learn code."),r.default.createElement(o.Link,{to:"/login",style:{textDecoration:"none",backgroundColor:"#007BFF",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginRight:"20px"}},"Dashboard"),r.default.createElement(o.Link,{to:"/about",style:{textDecoration:"none",backgroundColor:"#ff5722",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginRight:"20px"}},"Learn More")),r.default.createElement("div",{style:{maxWidth:"50%"}},r.default.createElement("img",{src:"https://i.pinimg.com/564x/c5/3a/44/c53a44d3af7099b6bb7e7bd5bb472e41.jpg",alt:"Camping Image",style:{maxWidth:"100%",height:"auto",userSelect:"none",pointerEvents:"none"}})))),r.default.createElement(l.default,null))},788:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(e){o(e)}}function l(e){try{d(a.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=o(n(540)),s=n(648),c=n(52),u=n(767),p=l(n(632)),f=l(n(59));t.default=({onLogin:e})=>{const[t,n]=(0,d.useState)(""),[a,r]=(0,d.useState)(""),[o,l]=(0,d.useState)(""),m=(0,s.useNavigate)();return(0,d.useEffect)((()=>{const e=(0,c.onAuthStateChanged)(u.auth,(e=>{e&&m("/dashboard")}));return()=>e()}),[m]),d.default.createElement("div",null,d.default.createElement(p.default,null),d.default.createElement("main",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 80px)"}},d.default.createElement("form",{onSubmit:n=>i(void 0,void 0,void 0,(function*(){n.preventDefault();try{yield(0,c.signInWithEmailAndPassword)(u.auth,t,a),e(),m("/dashboard")}catch(e){e instanceof Error?l(e.message):l("An unexpected error occurred.")}})),style:{background:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%"}},d.default.createElement("h1",{style:{marginBottom:"20px",fontSize:"24px",color:"#333"}},"Login"),o&&d.default.createElement("p",{style:{color:"red",marginBottom:"10px"}},o),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Email:",d.default.createElement("input",{type:"email",value:t,onChange:e=>n(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Password:",d.default.createElement("input",{type:"password",value:a,onChange:e=>r(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("button",{type:"submit",style:{backgroundColor:"#007bff",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px"}},"Login"),d.default.createElement("button",{onClick:()=>{m("/signup")},style:{backgroundColor:"#FFA500",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px",marginTop:"10px"}},"Sign Up"))),d.default.createElement(f.default,null))}},31:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{d(a.next(e))}catch(e){o(e)}}function l(e){try{d(a.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=o(n(540)),s=n(648),c=n(52),u=n(767),p=l(n(632)),f=l(n(59));t.default=({onSignUp:e})=>{const[t,n]=(0,d.useState)(""),[a,r]=(0,d.useState)(""),[o,l]=(0,d.useState)(""),[m,h]=(0,d.useState)(""),g=(0,s.useNavigate)();return d.default.createElement("div",null,d.default.createElement(p.default,null),d.default.createElement("main",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},d.default.createElement("form",{onSubmit:n=>i(void 0,void 0,void 0,(function*(){if(n.preventDefault(),a===o)try{yield(0,c.createUserWithEmailAndPassword)(u.auth,t,a),e(),g("/dashboard")}catch(e){e instanceof Error?h("Error creating user: "+e.message):h("An unknown error occurred.")}else h("Passwords do not match.")})),style:{background:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%"}},d.default.createElement("h1",{style:{marginBottom:"20px",fontSize:"24px",color:"#333"}},"Sign Up"),m&&d.default.createElement("p",{style:{color:"red"}},m),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Email:",d.default.createElement("input",{type:"email",value:t,onChange:e=>n(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Password:",d.default.createElement("input",{type:"password",value:a,onChange:e=>r(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Confirm Password:",d.default.createElement("input",{type:"password",value:o,onChange:e=>l(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("button",{type:"submit",style:{backgroundColor:"#007bff",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px"}},"Sign Up"),d.default.createElement("button",{onClick:()=>{g("/login")},style:{backgroundColor:"#FFA500",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px",marginTop:"10px"}},"Back to Login"))),d.default.createElement(f.default,null))}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return a[e].call(n.exports,n,n.exports,o),n.exports}o.m=a,e=[],o.O=(t,n,a,r)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,r]=e[c],l=!0,d=0;d<n.length;d++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var i={};t=t||[null,n({}),n([]),n(n)];for(var l=2&a&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(r,i),r},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[i,l,d]=n,s=0;if(i.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(d)var c=d(o)}for(t&&t(n);s<i.length;s++)r=i[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[96],(()=>o(749)));i=o.O(i)})();