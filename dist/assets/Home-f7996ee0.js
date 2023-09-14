import{u as se,V as I,a as ae,b as ie,m as le,c as ue,d as re,e as ce,M as de,f as ve,g as H,h as me,i as fe,j as he,k as ge,l as ye,n as _e,o as Ce,p as Ve,q as be,r as ke,s as we,t as Be,v as Pe,_ as N,w as Se}from"./VGrid-0bed2d7b.js";import{k as z,p as b,m as G,g as k,b as O,u as q,d as U,e as $,f as _,s as T,h as B,i as xe,a as l,j as J,l as Ie,I as $e,n as Te,q as Ee,F as K,t as S,v as E,x as De,y as Le,z as Re,A as Me,o as P,c as D,w as V,B as Xe,C as Ye,D as W,r as A}from"./index-77101d54.js";import{m as x,a as L,u as w,b as He}from"./tag-fbe48af7.js";import{a as We,V as Ae}from"./VApp-27dc943f.js";const je=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,i=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function Fe(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ne(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),je(o)}function ze(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Ge(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Fe(t,o),touchend:t=>Ne(t,o),touchmove:t=>ze(t,o)}}function Oe(e,o){var u;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},i=(u=o.instance)==null?void 0:u.$.uid;if(!n||!i)return;const s=Ge(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=s,z(s).forEach(r=>{n.addEventListener(r,s[r],a)})}function qe(e,o){var i,s;const t=(i=o.value)!=null&&i.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];z(a).forEach(u=>{t.removeEventListener(u,a[u])}),delete t._touchHandlers[n]}const Q={mounted:Oe,unmounted:qe},Z=Symbol.for("vuetify:v-window"),p=Symbol.for("vuetify:v-window-group"),ee=b({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...x(),...L(),...G()},"VWindow"),j=k()({name:"VWindow",directives:{Touch:Q},props:ee(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=O(e),{isRtl:a}=q(),{t:i}=U(),s=se(e,p),u=$(),r=_(()=>a.value?!e.reverse:e.reverse),c=T(!1),h=_(()=>{const v=e.direction==="vertical"?"y":"x",y=(r.value?!c.value:c.value)?"-reverse":"";return`v-window-${v}${y}-transition`}),m=T(0),g=$(void 0),C=_(()=>s.items.value.findIndex(v=>s.selected.value.includes(v.id)));B(C,(v,f)=>{const y=s.items.value.length,Y=y-1;y<=2?c.value=v<f:v===Y&&f===0?c.value=!0:v===0&&f===Y?c.value=!1:c.value=v<f}),xe(Z,{transition:h,isReversed:c,transitionCount:m,transitionHeight:g,rootRef:u});const d=_(()=>e.continuous||C.value!==0),R=_(()=>e.continuous||C.value!==s.items.value.length-1);function M(){d.value&&s.prev()}function X(){R.value&&s.next()}const ne=_(()=>{const v=[],f={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,ariaLabel:i("$vuetify.carousel.prev")};v.push(d.value?t.prev?t.prev({props:f}):l(I,f,null):l("div",null,null));const y={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,ariaLabel:i("$vuetify.carousel.next")};return v.push(R.value?t.next?t.next({props:y}):l(I,y,null):l("div",null,null)),v}),oe=_(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?M():X()},right:()=>{r.value?X():M()},start:f=>{let{originalEvent:y}=f;y.stopPropagation()}},...e.touch===!0?{}:e.touch});return w(()=>J(l(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var v,f;return[l("div",{class:"v-window__container",style:{height:g.value}},[(v=t.default)==null?void 0:v.call(t,{group:s}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[ne.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[Ie("touch"),oe.value]])),{group:s}}}),Ue=b({color:String,cycle:Boolean,delimiterIcon:{type:$e,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ee({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Je=k()({name:"VCarousel",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Te(e,"modelValue"),{t:a}=U(),i=$();let s=-1;B(n,r),B(()=>e.interval,r),B(()=>e.cycle,c=>{c?r():window.clearTimeout(s)}),Ee(u);function u(){!e.cycle||!i.value||(s=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(s),window.requestAnimationFrame(u)}return w(()=>{const[c]=j.filterProps(e);return l(j,S({ref:i},c,{modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:E(e.height)},e.style]}),{default:t.default,additional:h=>{let{group:m}=h;return l(K,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[m.items.value.length>0&&l(ae,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[m.items.value.map((g,C)=>{const d={id:`carousel-item-${g.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",C+1,m.items.value.length),class:[m.isSelected(g.id)&&"v-btn--active"],onClick:()=>m.select(g.id,!0)};return t.item?t.item({props:d,item:g}):l(I,S(g,d),null)})]})]),e.progress&&l(ie,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(m.getItemIndex(n.value)+1)/m.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),te=b({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...x(),...le(),...ue()},"VWindowItem"),F=k()({name:"VWindowItem",directives:{Touch:Q},props:te(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=De(Z),a=re(e,p),{isBooted:i}=He();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=T(!1),u=_(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var d;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=E((d=n.rootRef.value)==null?void 0:d.clientHeight)),n.transitionCount.value+=1)}function h(){r()}function m(d){s.value&&Re(()=>{!u.value||!s.value||!n||(n.transitionHeight.value=E(d.clientHeight))})}const g=_(()=>{const d=n.isReversed.value?e.reverseTransition:e.transition;return u.value?{name:typeof d!="string"?n.transition.value:d,onBeforeEnter:c,onAfterEnter:r,onEnterCancelled:h,onBeforeLeave:c,onAfterLeave:r,onLeaveCancelled:h,onEnter:m}:!1}),{hasContent:C}=ce(e,a.isSelected);return w(()=>l(de,{transition:g.value,disabled:!i.value},{default:()=>{var d;return[J(l("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[C.value&&((d=t.default)==null?void 0:d.call(t))]),[[Le,a.isSelected.value]])]}})),{groupItem:a}}}),Ke=b({...ve(),...te()},"VCarouselItem"),Qe=k()({name:"VCarouselItem",inheritAttrs:!1,props:Ke(),setup(e,o){let{slots:t,attrs:n}=o;w(()=>{const[a]=H.filterProps(e),[i]=F.filterProps(e);return l(F,S({class:"v-carousel-item"},i),{default:()=>[l(H,S(n,a),t)]})})}});const Ze=b({color:String,...me(),...x(),...fe(),...he(),...ge(),...ye(),..._e(),...L(),...G()},"VSheet"),pe=k()({name:"VSheet",props:Ze(),setup(e,o){let{slots:t}=o;const{themeClasses:n}=O(e),{backgroundColorClasses:a,backgroundColorStyles:i}=Ce(Me(e,"color")),{borderClasses:s}=Ve(e),{dimensionStyles:u}=be(e),{elevationClasses:r}=ke(e),{locationStyles:c}=we(e),{positionClasses:h}=Be(e),{roundedClasses:m}=Pe(e);return w(()=>l(e.tag,{class:["v-sheet",n.value,a.value,s.value,r.value,h.value,m.value,e.class],style:[i.value,u.value,c.value,e.style]},t)),{}}}),et={data(){return{images:["https://gaspor.github.io/setupMe/resources/images/imagem-slide1.svg","https://gaspor.github.io/setupMe/resources/images/imagem-slide2.svg","https://gaspor.github.io/setupMe/resources/images/imagem-slide3.svg","https://gaspor.github.io/setupMe/resources/images/imagem-slide4.svg"]}}},tt={class:"d-flex fill-height justify-center align-center"},nt=["src"];function ot(e,o,t,n,a,i){return P(),D(Je,{cycle:"",height:"400","hide-delimiter-background":"","show-arrows":"hover"},{default:V(()=>[(P(!0),Xe(K,null,Ye(a.images,(s,u)=>(P(),D(Qe,{key:u},{default:V(()=>[l(pe,{height:"100%"},{default:V(()=>[W("div",tt,[W("img",{src:s,alt:"Slide {{ i + 1 }}"},null,8,nt)])]),_:2},1024)]),_:2},1024))),128))]),_:1})}const st=N(et,[["render",ot]]),at=b({fluid:{type:Boolean,default:!1},...x(),...L()},"VContainer"),it=k()({name:"VContainer",props:at(),setup(e,o){let{slots:t}=o;const{rtlClasses:n}=q();return w(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},t)),{}}}),lt={components:{Navbar:Se,Carousel:st},data(){return{}}};function ut(e,o,t,n,a,i){const s=A("Navbar"),u=A("Carousel");return P(),D(We,null,{default:V(()=>[l(s),l(Ae,null,{default:V(()=>[l(it,{class:"mt-10"},{default:V(()=>[l(u)]),_:1})]),_:1})]),_:1})}const mt=N(lt,[["render",ut]]);export{mt as default};