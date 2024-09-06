(()=>{"use strict";var e,t,n,a={767:(e,t,n)=>{n.r(t),n.d(t,{auth:()=>l,db:()=>d});var a=n(223),o=n(969),r=n(594);const i=(0,a.Wp)({apiKey:"AIzaSyAqfJN22AYzDo0M08UJqGf5y1j_sEcpoVM",authDomain:"camp-code-auth.firebaseapp.com",projectId:"camp-code-auth",storageBucket:"camp-code-auth.appspot.com",messagingSenderId:"55915909282",appId:"1:55915909282:web:eb8ade8b7e91dd8019c7fb",measurementId:"G-2NKF6W8K1T"}),l=(0,o.xI)(i),d=(0,r.aU)(i)},577:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=n(648),i=a(n(318)),l=a(n(860)),d=a(n(721)),s=a(n(788)),c=a(n(31)),u=a(n(927));t.default=()=>o.default.createElement(r.HashRouter,null,o.default.createElement("div",{style:{padding:"20px"}},o.default.createElement(r.Routes,null,o.default.createElement(r.Route,{path:"/",element:o.default.createElement(i.default,null)}),o.default.createElement(r.Route,{path:"/about",element:o.default.createElement(l.default,null)}),o.default.createElement(r.Route,{path:"/game",element:o.default.createElement(d.default,null)}),o.default.createElement(r.Route,{path:"/login",element:o.default.createElement(s.default,{onLogin:()=>{}})}),o.default.createElement(r.Route,{path:"/signup",element:o.default.createElement(c.default,{onSignUp:()=>{}})}),o.default.createElement(r.Route,{path:"/dashboard",element:o.default.createElement(u.default,null)})," ")))},749:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=a(n(961)),i=a(n(577));r.default.render(o.default.createElement(o.default.StrictMode,null,o.default.createElement(i.default,null)),document.getElementById("root"))},59:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=n(601),i=n(65),l=n(65);t.default=()=>o.default.createElement("footer",{style:{padding:"20px 20px",textAlign:"center",borderTop:"2px solid #ddd",backgroundColor:"#fff",bottom:0,left:0,width:"100%"}},o.default.createElement("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"center",alignItems:"center"}},o.default.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#333"}},"Created by Camp Code Team")),o.default.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap"}},[{name:"Banibe Ebegbodi",link:"https://www.linkedin.com/in/bani-ebegbodi/"},{name:"Jaden Wong",link:"https://www.linkedin.com/in/jadenawong/"},{name:"Shreya Gogini",link:"https://www.linkedin.com/in/shreya-gogini-917606234/"},{name:"Thompson Ngo",link:"https://www.linkedin.com/in/tngo2001/"}].map(((e,t)=>o.default.createElement("a",{key:t,href:e.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"#007BFF",fontSize:"16px",fontWeight:"bold"}},e.name)))),o.default.createElement("div",{style:{marginTop:"10px"}},o.default.createElement("a",{href:"https://github.com/camp-code-official",target:"_blank",rel:"noopener noreferrer",style:{color:"#333",fontSize:"36px",marginRight:"20px"}},o.default.createElement(r.FontAwesomeIcon,{icon:i.faGithub})),o.default.createElement("a",{href:"https://www.linkedin.com/company/camp-code",target:"_blank",rel:"noopener noreferrer",style:{color:"#333",fontSize:"36px"}},o.default.createElement(r.FontAwesomeIcon,{icon:l.faLinkedin}))))},632:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{d(a.next(e))}catch(e){r(e)}}function l(e){try{d(a.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(540)),d=n(648),s=n(767),c=n(52),u=n(52);t.default=()=>{const[e,t]=(0,l.useState)(!1),n=(0,d.useNavigate)();return(0,l.useEffect)((()=>{const e=(0,u.onAuthStateChanged)(s.auth,(e=>{t(!!e)}));return()=>e()}),[]),l.default.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",padding:"25px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}},l.default.createElement("div",{style:{display:"flex",alignItems:"center"}},l.default.createElement(d.Link,{to:"/",style:{textDecoration:"none"}},l.default.createElement("img",{src:"../assets/img/campcode2.PNG",alt:"Camp Code Logo",style:{height:"70px",marginLeft:"10px",cursor:"pointer",userSelect:"none",pointerEvents:"none",marginTop:"-30px",marginBottom:"-30px"}}))),l.default.createElement("nav",null,l.default.createElement("ul",{style:{listStyle:"none",margin:"0",padding:"0",display:"flex",justifyContent:"flex-end"}},l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(d.Link,{to:"/",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Home")),l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(d.Link,{to:"/about",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"About")),l.default.createElement("li",{style:{marginLeft:"20px"}},l.default.createElement(d.Link,{to:"https://forms.gle/jSQrvAUN3JD93RCi6",target:"_blank",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Contact")),l.default.createElement("li",{style:{marginLeft:"20px"}},e?l.default.createElement("button",{onClick:()=>i(void 0,void 0,void 0,(function*(){yield(0,c.signOut)(s.auth),t(!1),n("/login")})),style:{backgroundColor:"transparent",border:"none",color:"#007BFF",fontWeight:"bold",cursor:"pointer"}},"Logout"):l.default.createElement(d.Link,{to:"/login",style:{textDecoration:"none",color:"#007BFF",fontWeight:"bold"}},"Login")))))}},315:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=n(277),l=r(n(186));class d extends i.Scene3D{constructor(){super({key:"LevelOneScene"}),this.canJump=!0,this.isJumping=!1,this.commandQueue=[],this.processingQueue=!1}init(){this.accessThirdDimension()}create(){this.setupScene(),this.loadPlayer(),this.setupInput(),this.createCommandLibrary()}setupScene(){this.third.warpSpeed("camera","sky","ground","light"),this.loadLandscape();const e=new l.BoxGeometry(100,.01,100),t=new l.MeshStandardMaterial({color:"yellow"}),n=new l.Mesh(e,t);n.position.set(0,0,0),n.receiveShadow=!0;const a=new i.ExtendedObject3D;a.add(n),this.third.add.existing(a),this.third.physics.add.existing(a,{mass:0});const o=new l.AmbientLight(11184810,.6);this.third.scene.add(o);const r=new l.DirectionalLight(16777215,.8);r.position.set(50,100,50),r.castShadow=!0,this.third.scene.add(r)}loadLandscape(){this.third.load.gltf("/assets/glb/camp_code_landscape.glb").then((e=>{const t=e.scene,n=new i.ExtendedObject3D;n.add(t),n.scale.set(1,1,1),n.position.set(-10,.05,-8),n.traverse((e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),n.rotation.set(0,Math.PI/2,0),this.third.scene.add(n),this.third.physics.add.existing(n,{mass:0})}))}loadPlayer(){this.third.load.gltf("/assets/glb/box_man.glb").then((e=>{const t=e.scene.children[0];this.man=new i.ExtendedObject3D,this.man.name="man",this.man.add(t),this.setupPlayerPhysics(),this.setupPlayerAnimations(e.animations),this.addThirdPersonControls()}))}setupPlayerPhysics(){this.man&&(this.man.traverse((e=>{e.isMesh&&(e.shape="convex",e.castShadow=e.receiveShadow=!0,e.material instanceof l.MeshStandardMaterial&&(e.material.roughness=1,e.material.metalness=0))})),this.man.position.set(-10,2,8),this.third.add.existing(this.man),this.third.physics.add.existing(this.man,{shape:"capsule",radius:.2,height:.6,offset:{y:-.55}}),this.man.body.setFriction(.8),this.man.body.setAngularFactor(0,0,0))}setupPlayerAnimations(e){var t;this.man&&(this.third.animationMixers.add(this.man.anims.mixer),e.forEach((e=>{var t;e.name&&(null===(t=this.man)||void 0===t||t.anims.add(e.name,e))})),null===(t=this.man)||void 0===t||t.anims.play("idle"))}addThirdPersonControls(){this.man&&(this.controls=new i.ThirdPersonControls(this.third.camera,this.man,{offset:new l.Vector3(0,1,0),targetRadius:3}))}setupInput(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",bottom:"20px",right:"20px",width:"400px",zIndex:"1000",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"10px"});const t=document.createElement("textarea");t.placeholder='Enter commands...\n(e.g., "for (let i = 0; i < 3; i++) {\n  forward();\n}")',Object.assign(t.style,{width:"100%",height:"200px",fontSize:"16px",backgroundColor:"#f5f5f5",color:"#333",border:"2px solid #ddd",padding:"10px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",outline:"none",fontFamily:"monospace",whiteSpace:"pre-wrap"}),t.addEventListener("keydown",(e=>{if("Tab"===e.key){e.preventDefault();const n=t.selectionStart,a=t.selectionEnd;t.value=t.value.substring(0,n)+"\t"+t.value.substring(a),t.selectionStart=t.selectionEnd=n+1}}));const n=document.createElement("button");n.textContent="Run",Object.assign(n.style,{alignSelf:"center",width:"100px",height:"50px",fontSize:"16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",cursor:"pointer"}),n.addEventListener("click",(()=>{const e=t.value;this.commandQueue=[];const n=e.split("\n").map((e=>e.trim()));let a="",o=!1;n.forEach(((e,t)=>{e.startsWith("for ")?(o=!0,a+=e+" "):o&&e.endsWith("}")?(o=!1,a+=e,this.handleForLoop(a,t),a=""):o?a+=e+" ":this.isValidCommand(e)?this.commandQueue.push(e):alert(`Error on line ${t+1}: Invalid command '${e}'`)})),this.processCommands(),t.value=""})),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}handleForLoop(e,t){try{const n=e.match(/for\s*\(\s*let\s*(\w+)\s*=\s*(\d+)\s*;\s*\w+\s*<\s*(\d+)\s*;\s*\w+\+\+\s*\)\s*\{\s*([^}]*)\s*\}/);if(!n)throw new Error(`Syntax error in for-loop at line ${t+1}`);const[a,o,r,i,l]=n,d=parseInt(r),s=parseInt(i);for(let e=d;e<s;e++)l.split(";").map((e=>e.trim())).filter((e=>e.length>0)).forEach((e=>{if(!this.isValidCommand(e))throw new Error(`Invalid command '${e}' inside for-loop at line ${t+1}`);this.commandQueue.push(e)}))}catch(e){alert(e.message)}}isValidCommand(e){return["forward()","backward()","left()","right()","jump()","jump_forward()","jump_left()","jump_right()"].includes(e)}createCommandLibrary(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",bottom:"20px",left:"20px",width:"300px",maxHeight:"300px",overflowY:"auto",backgroundColor:"#333",color:"white",padding:"10px",borderRadius:"12px",fontSize:"14px",zIndex:"1000",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.2)",transition:"max-height 0.3s ease"});const t=document.createElement("button");t.textContent="Command Library ▼",Object.assign(t.style,{display:"block",width:"100%",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",padding:"5px",cursor:"pointer",marginBottom:"10px",textAlign:"left"});const n=document.createElement("div");n.innerHTML='\n      <h2 style="margin-top: 0;">Command Library</h2>\n      <ul style="padding-left: 20px; list-style: none; line-height: 1.6;">\n        <li><strong>forward()</strong> - Move forward</li>\n        <li><strong>backward()</strong> - Move backward</li>\n        <li><strong>left()</strong> - Move left</li>\n        <li><strong>right()</strong> - Move right</li>\n        <li><strong>jump()</strong> - Jump up</li>\n        <li><strong>jump_forward()</strong> - Jump forward</li>\n        <li><strong>jump_left()</strong> - Jump left</li>\n        <li><strong>jump_right()</strong> - Jump right</li>\n        <li><strong>for loop</strong> - Repeat commands\n          <ul style="padding-left: 20px;">\n            <li>Syntax: <code>for (let i = 0; i < n; i++) {</code></li>\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>command;</code></li>\n            <li><code>}</code></li>\n            <li>Example:</li>\n            <li><code>for (let i = 0; i < 3; i++) {</code></li>\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;<code>forward();</code></li>\n            <li><code>}</code></li>\n          </ul>\n        </li>\n      </ul>\n    ',n.style.display="none",t.addEventListener("click",(()=>{const e="none"===n.style.display;n.style.display=e?"block":"none",t.textContent=e?"Command Library ▲":"Command Library ▼"})),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}executeCommand(e){switch(e){case"forward()":this.moveInDirection(0);break;case"backward()":this.moveInDirection(Math.PI);break;case"left()":this.moveInDirection(Math.PI/2);break;case"right()":this.moveInDirection(-Math.PI/2);break;case"jump()":this.jump();break;case"jump_forward()":this.jumpAndMove(0);break;case"jump_left()":this.jumpAndMove(Math.PI/2);break;case"jump_right()":this.jumpAndMove(-Math.PI/2);break;default:console.log("Unknown command:",e)}}processCommands(){if(0===this.commandQueue.length||this.processingQueue)return;this.processingQueue=!0;const e=this.commandQueue.shift();e&&this.executeCommand(e),this.time.addEvent({delay:500,callback:()=>{this.processingQueue=!1,this.processCommands()}})}moveInDirection(e){var t;if(this.man&&this.man.body){const n=4,a=new l.Vector3,o=this.third.camera.getWorldDirection(a),r=Math.atan2(o.x,o.z)+e,i=Math.sin(r)*n,d=this.man.body.velocity.y,s=Math.cos(r)*n;this.man.body.setVelocity(i,d,s),this.isJumping||null===(t=this.man)||void 0===t||t.anims.play("idle")}}jump(){var e;this.man&&this.canJump&&this.man.body&&(this.canJump=!1,this.isJumping=!0,null===(e=this.man)||void 0===e||e.anims.play("jump_running"),this.man.body.applyForceY(4),this.time.addEvent({delay:750,callback:()=>{this.canJump=!0}}),this.time.addEvent({delay:750,callback:()=>{var e;this.man&&(null===(e=this.man)||void 0===e||e.anims.play("idle"),this.isJumping=!1)}}))}jumpAndMove(e){this.jump(),this.moveInDirection(e)}update(e,t){this.man&&this.man.body&&this.controls&&this.controls.update&&this.controls.update(0,0)}}t.default=d},251:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(440));class r extends o.default.Scene{constructor(){super({key:"MenuScene"}),this.unlockedLevels=new Set}preload(){}create(){this.unlockedLevels.add("LevelOneScene");const e=this.cameras.main.centerX-100;let t=100;[{name:"Level 1",sceneKey:"LevelOneScene"},{name:"Level 2",sceneKey:"LevelTwoScene"},{name:"Level 3",sceneKey:"LevelThreeScene"}].forEach((n=>{const a=this.add.graphics(),r=this.unlockedLevels.has(n.sceneKey),i=r?5025616:10395294;a.fillStyle(i),a.fillRect(e,t,200,50),this.add.text(e+100,t+25,n.name,{fontSize:"16px"}).setOrigin(.5),a.setInteractive(new o.default.Geom.Rectangle(e,t,200,50),o.default.Geom.Rectangle.Contains),a.on("pointerdown",(()=>{r&&this.scene.start(n.sceneKey)})),t+=110}))}unlockLevel(e){this.unlockedLevels.add(e),this.scene.restart()}}t.default=r},734:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){}create(){this.scene.start("MenuScene")}}t.default=n},860:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=a(n(632)),i=a(n(59)),l=a(n(180)),d={backgroundImage:"url(https://www.clipartmax.com/png/full/107-1074090_cartoon-medal-badge-png.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",padding:"20px",marginBottom:"40px",borderRadius:"15px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",width:"80%",marginLeft:"10%",position:"relative",border:"4px solid #f0f8ff",borderImage:"linear-gradient(to right, #87cefa, #ffeb3b) 1"};t.default=()=>((0,l.default)(),o.default.createElement("div",{style:{backgroundColor:"#ffffff",color:"#333",margin:0,padding:0}},o.default.createElement(r.default,null),o.default.createElement("main",{className:"content",style:{textAlign:"center",padding:"50px 20px"}},o.default.createElement("h1",{style:{color:"#ff8c00",fontSize:"36px"}},"About Camp Code"),o.default.createElement("p",{style:{fontSize:"18px",lineHeight:"1.6",maxWidth:"800px",margin:"0 auto"}},"Camp Code is an immersive coding program designed to help you learn programming in a fun and adventurous way. Imagine yourself in a camping scenario where each coding task you complete helps you survive and thrive in the wild. From building a shelter to foraging for food, your coding skills will be your key to mastering the forest.")),o.default.createElement("div",{className:"forest-border",style:{paddingTop:"50px"}},o.default.createElement("div",{style:d},o.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Learn Survival Coding"),o.default.createElement("p",{style:{fontSize:"16px"}},"As you navigate through the forest, you'll learn the basics of programming. Each challenge is a step towards mastering coding fundamentals while you gather resources, set up camp, and keep the forest critters at bay.")),o.default.createElement("div",{style:d},o.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Advanced Coding Challenges"),o.default.createElement("p",{style:{fontSize:"16px"}},"Once you've set up camp, it's time to delve deeper into programming. Advanced coding challenges will test your skills as you build tools, solve puzzles, and unlock new areas of the forest.")),o.default.createElement("div",{style:d},o.default.createElement("h2",{style:{fontSize:"28px",margin:0,paddingTop:"100px"}},"Earn Badges & Rewards"),o.default.createElement("p",{style:{fontSize:"16px"}},"Complete tasks and challenges to earn badges that showcase your coding prowess. Collect rewards as you progress, and watch your programming skills grow alongside your survival instincts."))),o.default.createElement(i.default,null)))},927:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(540)),d=n(648),s=n(52),c=n(767),u=i(n(632)),p=i(n(59)),f=i(n(180)),m={username:"User",progress:"Level 1",badges:[{name:"Skill 1",description:""},{name:"Skill 2",description:""}],character:{name:"",avatarUrl:"/assets/img/user-avatar.png"}},h={dashboard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",backgroundImage:"url(/assets/img/camp-background1.webp)",backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",color:"#fff",fontFamily:"Arial, sans-serif"},userInfo:{textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"20px",borderRadius:"10px",marginBottom:"20px",width:"80%"},characterInfo:{display:"flex",flexDirection:"column",alignItems:"center"},characterAvatar:{width:"150px",height:"150px",borderRadius:"50%",border:"5px solid #FFA500",marginBottom:"10px"},progressInfo:{marginTop:"20px"},badgesInfo:{marginTop:"20px",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"20px",borderRadius:"10px",width:"80%"},badgeList:{listStyle:"none",padding:"0"},badgeItem:{marginBottom:"10px",backgroundColor:"#4CAF50",padding:"10px",borderRadius:"5px"},playButton:{textDecoration:"none",backgroundColor:"#ff5722",color:"#fff",padding:"15px 30px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginTop:"20px",display:"inline-block"}};t.default=()=>{(0,f.default)();const[e,t]=(0,l.useState)(m),n=(0,d.useNavigate)();return(0,l.useEffect)((()=>{}),[]),(0,l.useEffect)((()=>{const e=(0,s.onAuthStateChanged)(c.auth,(e=>{e||n("/login")}));return()=>e()}),[n]),l.default.createElement("div",null,l.default.createElement(u.default,null),l.default.createElement("div",{style:h.dashboard},l.default.createElement("div",{style:h.userInfo},l.default.createElement("h1",null,"Welcome, ",e.username),l.default.createElement("div",{style:h.characterInfo},l.default.createElement("img",{src:e.character.avatarUrl,alt:e.character.name,style:h.characterAvatar}),l.default.createElement("p",null,e.character.name)),l.default.createElement("div",{style:h.progressInfo},l.default.createElement("h2",null,"Progress"),l.default.createElement("p",null,e.progress)),l.default.createElement(d.Link,{to:"/game",style:h.playButton},"Play")),l.default.createElement("div",{style:h.badgesInfo},l.default.createElement("h2",null,"Badges"),l.default.createElement("ul",{style:h.badgeList},e.badges.map(((e,t)=>l.default.createElement("li",{key:t,style:h.badgeItem},l.default.createElement("h3",null,e.name),l.default.createElement("p",null,e.description))))))),l.default.createElement(p.default,null))}},721:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(540)),d=n(648),s=r(n(440)),c=n(277),u=i(n(734)),p=i(n(251)),f=i(n(315)),m=n(52),h=n(767),g=i(n(632));t.default=()=>{const e=(0,l.useRef)(null),t=(0,d.useNavigate)();return(0,l.useEffect)((()=>{const e=(0,m.onAuthStateChanged)(h.auth,(e=>{e||t("/login")}));return()=>e()}),[t]),(0,l.useEffect)((()=>{const t=Object.assign({type:s.WEBGL,transparent:!0,scale:{mode:s.Scale.FIT,autoCenter:s.Scale.CENTER_BOTH,width:1280,height:720},scene:[u.default,p.default,f.default]},(0,c.Canvas)());return(0,c.enable3d)((()=>{const n=new s.Game(t);return e.current=n,n})).withPhysics("assets/ammo"),()=>{e.current&&(e.current.destroy(!0),e.current=null)}}),[]),l.default.createElement("div",null,l.default.createElement(g.default,null),l.default.createElement("div",{id:"phaser-game",style:{width:"100%",height:"calc(100vh - <NavBar height> - 1mm)",margin:0,marginTop:"60px",marginBottom:"30px"}}))}},318:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(540)),r=n(648),i=a(n(632)),l=a(n(59)),d=a(n(180));t.default=()=>((0,d.default)(),o.default.createElement("div",null,o.default.createElement(i.default,null),o.default.createElement("main",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center",padding:"40px 20px",minHeight:"100vh"}},o.default.createElement("section",{style:{marginBottom:"30px",color:"#ffffff",marginTop:"15%"}},o.default.createElement("img",{src:"../assets/img/campcode.png",alt:"Camp Code Logo",style:{height:"100px",marginBottom:"20px",display:"block",margin:"0 auto",pointerEvents:"none",userSelect:"none"}}),o.default.createElement("p",{style:{fontSize:"1.3em",color:"#a0a0a0",marginBottom:"30px"}},"A fun and easy way to learn code."),o.default.createElement(r.Link,{to:"/login",style:{textDecoration:"none",backgroundColor:"#00aaff",color:"#fff",padding:"12px 24px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",marginRight:"15px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}},"Dashboard"),o.default.createElement("button",{onClick:()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},style:{textDecoration:"none",backgroundColor:"#fff",color:"#ff6f00",padding:"12px 24px",borderRadius:"5px",fontWeight:"bold",textTransform:"uppercase",border:"2px solid #ff6f00",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",cursor:"pointer"}},"Learn More")),o.default.createElement("section",{style:{width:"50vw",height:"28.125vw",position:"relative",overflow:"hidden",borderRadius:"10px",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)",marginTop:"20%",backgroundColor:"#f5f5f5",padding:"10px"}},o.default.createElement("p",{style:{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",fontSize:"1em",color:"#333",fontWeight:"bold",backgroundColor:"#fff",padding:"5px 10px",borderRadius:"5px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}},"Game Demo"),o.default.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/MmB9b5njVbA?controls=1&autoplay=1&mute=1&loop=1&playlist=MmB9b5njVbA",title:"YouTube video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,border:"none"}}))),o.default.createElement(l.default,null)))},788:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{d(a.next(e))}catch(e){r(e)}}function l(e){try{d(a.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=r(n(540)),s=n(648),c=n(52),u=n(767),p=l(n(632)),f=l(n(59)),m=l(n(180));t.default=({onLogin:e})=>{(0,m.default)();const[t,n]=(0,d.useState)(""),[a,o]=(0,d.useState)(""),[r,l]=(0,d.useState)(""),h=(0,s.useNavigate)();return(0,d.useEffect)((()=>{const e=(0,c.onAuthStateChanged)(u.auth,(e=>{e&&h("/dashboard")}));return()=>e()}),[h]),d.default.createElement("div",null,d.default.createElement(p.default,null),d.default.createElement("main",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 80px)"}},d.default.createElement("form",{onSubmit:n=>i(void 0,void 0,void 0,(function*(){n.preventDefault();try{yield(0,c.signInWithEmailAndPassword)(u.auth,t,a),e(),h("/dashboard")}catch(e){e instanceof Error?l(e.message):l("An unexpected error occurred.")}})),style:{background:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%"}},d.default.createElement("h1",{style:{marginBottom:"20px",fontSize:"24px",color:"#333"}},"Login"),r&&d.default.createElement("p",{style:{color:"red",marginBottom:"10px"}},r),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Email:",d.default.createElement("input",{type:"email",value:t,onChange:e=>n(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Password:",d.default.createElement("input",{type:"password",value:a,onChange:e=>o(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("button",{type:"submit",style:{backgroundColor:"#007bff",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px"}},"Login"),d.default.createElement("button",{onClick:()=>{h("/signup")},style:{backgroundColor:"#FFA500",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px",marginTop:"10px"}},"Sign Up"))),d.default.createElement(f.default,null))}},31:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,o)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{d(a.next(e))}catch(e){r(e)}}function l(e){try{d(a.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}d((a=a.apply(e,t||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=r(n(540)),s=n(648),c=n(52),u=n(767),p=l(n(632)),f=l(n(59)),m=l(n(180));t.default=({onSignUp:e})=>{(0,m.default)();const[t,n]=(0,d.useState)(""),[a,o]=(0,d.useState)(""),[r,l]=(0,d.useState)(""),[h,g]=(0,d.useState)(""),b=(0,s.useNavigate)();return d.default.createElement("div",null,d.default.createElement(p.default,null),d.default.createElement("main",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},d.default.createElement("form",{onSubmit:n=>i(void 0,void 0,void 0,(function*(){if(n.preventDefault(),a===r)try{yield(0,c.createUserWithEmailAndPassword)(u.auth,t,a),e(),b("/dashboard")}catch(e){e instanceof Error?g("Error creating user: "+e.message):g("An unknown error occurred.")}else g("Passwords do not match.")})),style:{background:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%"}},d.default.createElement("h1",{style:{marginBottom:"20px",fontSize:"24px",color:"#333"}},"Sign Up"),h&&d.default.createElement("p",{style:{color:"red"}},h),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Email:",d.default.createElement("input",{type:"email",value:t,onChange:e=>n(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Password:",d.default.createElement("input",{type:"password",value:a,onChange:e=>o(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Confirm Password:",d.default.createElement("input",{type:"password",value:r,onChange:e=>l(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),d.default.createElement("button",{type:"submit",style:{backgroundColor:"#007bff",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px"}},"Sign Up"),d.default.createElement("button",{onClick:()=>{b("/login")},style:{backgroundColor:"#FFA500",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px",marginTop:"10px"}},"Back to Login"))),d.default.createElement(f.default,null))}},180:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=document.getElementById("root");e&&Array.from(document.body.children).forEach((t=>{t!==e&&document.body.removeChild(t)}))}}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return a[e].call(n.exports,n,n.exports,r),n.exports}r.m=a,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],l=!0,d=0;d<n.length;d++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var l=2&a&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,r.d(o,i),o},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,l,d]=n,s=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(d)var c=d(r)}for(t&&t(n);s<i.length;s++)o=i[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[96],(()=>r(749)));i=r.O(i)})();