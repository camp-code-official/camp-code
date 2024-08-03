(()=>{"use strict";var e,t={767:(e,t,n)=>{n.r(t),n.d(t,{auth:()=>s});var a=n(323),r=n(442),i=n(735);const o=(0,a.Wp)({apiKey:"AIzaSyAqfJN22AYzDo0M08UJqGf5y1j_sEcpoVM",authDomain:"camp-code-auth.firebaseapp.com",projectId:"camp-code-auth",storageBucket:"camp-code-auth.appspot.com",messagingSenderId:"55915909282",appId:"1:55915909282:web:eb8ade8b7e91dd8019c7fb",measurementId:"G-2NKF6W8K1T"}),s=(0,r.xI)(o);(0,i.P5)(o)},577:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(n(540)),l=o(n(788)),d=o(n(31)),u=o(n(721));t.default=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1);return s.default.createElement("div",{style:{padding:"20px"}},e?s.default.createElement(u.default,null):n?s.default.createElement(s.default.Fragment,null,s.default.createElement(d.default,{onSignUp:()=>{a(!1),t(!0)}}),s.default.createElement("button",{onClick:()=>a(!1),style:{marginTop:"10px"}},"Back to Login")):s.default.createElement(s.default.Fragment,null,s.default.createElement(l.default,{onLogin:()=>{t(!0)}}),s.default.createElement("button",{onClick:()=>a(!0),style:{marginTop:"10px"}},"Sign Up")))}},749:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(540)),i=a(n(961)),o=a(n(577));i.default.render(r.default.createElement(r.default.StrictMode,null,r.default.createElement(o.default,null)),document.getElementById("root"))},494:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(277),s=i(n(186));class l extends o.Scene3D{constructor(){super({key:"MainScene"}),this.canJump=!0,this.isJumping=!1,this.move=!1,this.moveTop=0,this.moveRight=0}init(){this.accessThirdDimension()}create(){if(this.third.warpSpeed("camera","sky","grid","ground","light"),this.third.physics.add.box({x:-1,y:2}),this.third.haveSomeFun(),this.third.load.gltf("/assets/glb/box_man.glb").then((e=>{const t=e.scene.children[0];this.man=new o.ExtendedObject3D,this.man.name="man",this.man.rotateY(Math.PI+.1),this.man.add(t),this.man.traverse((e=>{e.isMesh&&(e.shape="convex",e.castShadow=e.receiveShadow=!0,e.material instanceof s.MeshStandardMaterial&&(e.material.roughness=1,e.material.metalness=0))})),this.third.animationMixers.add(this.man.anims.mixer),e.animations.forEach((e=>{if(e.name){if(e.tracks.forEach((e=>{if(/(scale|position)/.test(e.name)){const t=e.values.map((e=>1*e));e.values=t}})),!this.man)return;this.man.anims.add(e.name,e)}})),this.man.anims.play("idle"),this.man.position.set(0,2,8),this.man&&(this.third.add.existing(this.man),this.third.physics.add.existing(this.man,{shape:"capsule",radius:.2,height:.6,offset:{y:-.55}}),this.man.body.setFriction(.8),this.man.body.setAngularFactor(0,0,0)),this.man&&(this.controls=new o.ThirdPersonControls(this.third.camera,this.man,{offset:new s.Vector3(0,1,0),targetRadius:3}))})),this.keys={w:this.input.keyboard.addKey("w"),space:this.input.keyboard.addKey(32)},!("ontouchstart"in window)){const e=new o.PointerLock(this.game.canvas);new o.PointerDrag(this.game.canvas).onMove((t=>{if(!e.isLocked())return;const{x:n,y:a}=t;this.moveTop=-a,this.moveRight=n}))}}jump(){this.man&&(this.canJump=!1,this.isJumping=!0,this.man.anims.play("jump_running"),this.time.addEvent({delay:750,callback:()=>{this.canJump=!0}}),this.time.addEvent({delay:750,callback:()=>{this.man&&(this.man.anims.play("idle"),this.isJumping=!1)}}),this.man.body.applyForceY(4))}update(e,t){if(this.man&&this.man.body&&this.controls&&this.controls.update){this.controls.update(3*this.moveRight,3*-this.moveTop),"ontouchstart"in window||(this.moveRight=this.moveTop=0);const e=4,t=new s.Vector3,n=this.third.camera.getWorldDirection(t),a=Math.atan2(n.x,n.z),r=this.man.getWorldDirection(t),i=Math.atan2(r.x,r.z);this.man.body.setAngularVelocityY(0);const o=Math.abs(a-i);let l="ontouchstart"in window?2:4,d=Math.PI/24;if(o>d&&(o>Math.PI-d&&(l*=-1),a<i&&(l*=-1),this.man.body.setAngularVelocityY(l)),this.keys.w.isDown||this.move){"idle"!==this.man.anims.current||this.isJumping||this.man.anims.play("run");const t=Math.sin(a)*e,n=this.man.body.velocity.y,r=Math.cos(a)*e;this.man.body.setVelocity(t,n,r)}else"run"!==this.man.anims.current||this.isJumping||this.man.anims.play("idle");this.keys.space.isDown&&this.canJump&&this.jump()}}}t.default=l},30:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){}create(){this.scene.start("MainScene")}}t.default=n},721:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(n(540)),l=i(n(440)),d=n(277),u=o(n(494)),c=o(n(30));t.default=()=>{const e=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const t=Object.assign({type:l.WEBGL,transparent:!0,scale:{mode:l.Scale.FIT,autoCenter:l.Scale.CENTER_BOTH,width:1280,height:720},scene:[c.default,u.default]},(0,d.Canvas)());return e.current=(0,d.enable3d)((()=>new l.Game(t))).withPhysics("assets/ammo"),()=>{e.current&&(e.current.destroy(!0),e.current=null)}}),[]),s.default.createElement("div",{id:"phaser-game",style:{width:"100%",height:"100%"}})}},788:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(540));t.default=({onLogin:e})=>{const[t,n]=(0,o.useState)(""),[a,r]=(0,o.useState)("");return o.default.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f4f4f4"}},o.default.createElement("form",{onSubmit:t=>{t.preventDefault(),e()},style:{background:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%"}},o.default.createElement("h1",{style:{marginBottom:"20px",fontSize:"24px",color:"#333"}},"Login"),o.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Email:",o.default.createElement("input",{type:"email",value:t,onChange:e=>n(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),o.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Password:",o.default.createElement("input",{type:"password",value:a,onChange:e=>r(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),o.default.createElement("button",{type:"submit",style:{backgroundColor:"#007bff",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px"}},"Login")))}},31:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},o=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=i(n(540)),l=n(502),d=n(767);t.default=({onSignUp:e})=>{const[t,n]=(0,s.useState)(""),[a,r]=(0,s.useState)(""),[i,u]=(0,s.useState)(""),[c,h]=(0,s.useState)("");return s.default.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f4f4f4"}},s.default.createElement("form",{onSubmit:n=>o(void 0,void 0,void 0,(function*(){if(n.preventDefault(),a===i)try{yield(0,l.createUserWithEmailAndPassword)(d.auth,t,a),e()}catch(e){e instanceof Error?h("Error creating user: "+e.message):h("An unknown error occurred.")}else h("Passwords do not match.")})),style:{background:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%"}},s.default.createElement("h1",{style:{marginBottom:"20px",fontSize:"24px",color:"#333"}},"Sign Up"),s.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Email:",s.default.createElement("input",{type:"email",value:t,onChange:e=>n(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),s.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Password:",s.default.createElement("input",{type:"password",value:a,onChange:e=>r(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),s.default.createElement("label",{style:{display:"block",marginBottom:"10px",fontWeight:"bold",color:"#555"}},"Confirm Password:",s.default.createElement("input",{type:"password",value:i,onChange:e=>u(e.target.value),required:!0,style:{width:"100%",padding:"10px",margin:"5px 0 20px",border:"1px solid #ddd",borderRadius:"4px"}})),c&&s.default.createElement("p",{style:{color:"red"}},c),s.default.createElement("button",{type:"submit",style:{backgroundColor:"#007bff",color:"white",border:"none",padding:"10px 15px",borderRadius:"4px",cursor:"pointer",width:"100%",fontSize:"16px"}},"Sign Up")))}}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,n,r,i)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[o,s,l]=n,d=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var u=l(a)}for(t&&t(n);d<o.length;d++)i=o[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[96],(()=>a(749)));r=a.O(r)})();