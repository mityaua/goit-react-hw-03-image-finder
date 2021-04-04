(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2_F4I","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1Fupk"}},17:function(e,t,a){e.exports={"Button-wrapper":"Button_Button-wrapper__331C2",Button:"Button_Button__2KFf5"}},18:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3u0XI",Modal:"Modal_Modal__-PfKO"}},30:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__x91N2"}},31:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__126uJ"}},33:function(e,t,a){e.exports={Loader:"Loader_Loader__UlGzK"}},34:function(e,t,a){e.exports={Message:"Message_Message__24nKT"}},35:function(e,t,a){e.exports={IconButton:"IconButton_IconButton__spHLI"}},6:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__2NWiS","SearchForm-button":"SearchForm_SearchForm-button__2DtK-","SearchForm-button-label":"SearchForm_SearchForm-button-label__9x3vu","SearchForm-input":"SearchForm_SearchForm-input__1GlMn"}},83:function(e,t,a){e.exports={App:"App_App__2vsp2"}},84:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(7),o=a.n(c),l=a(4),s=a.n(l),i=a(21),u=a(9),h=a(10),m=a(11),d=a(14),g=a(13),b=a(12),p=a(36),j=a(6),f=a.n(j),O=a(0),x=function(e){var t=e.onSearch,a=Object(r.useState)({query:""}),n=Object(p.a)(a,2),c=n[0],o=n[1],l=c.query,s=function(){return o({query:""})};return Object(O.jsxs)("form",{className:f.a.SearchForm,onSubmit:function(e){e.preventDefault(),l&&(t(l),s())},children:[Object(O.jsx)("button",{type:"submit",className:f.a["SearchForm-button"],children:Object(O.jsx)("span",{className:f.a["SearchForm-button-label"],children:"Search"})}),Object(O.jsx)("input",{className:f.a["SearchForm-input"],type:"text",name:"query",value:l,onChange:function(e){var t=e.currentTarget,a=t.name,r=t.value;o(Object(b.a)({},a,r))},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})},y=a(30),v=a.n(y),_=function(e){var t=e.onSearch;return Object(O.jsx)("header",{className:v.a.Searchbar,children:Object(O.jsx)(x,{onSearch:t})})},I=a(16),S=a.n(I),w=function(e){var t=e.image,a=e.onImageClick;return Object(O.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(O.jsx)("img",{src:t.webformatURL,alt:t.tags,className:S.a["ImageGalleryItem-image"],onClick:function(){return a(t.largeImageURL)}})})};w.defaultProps={tags:""};var k=w,C=a(31),L=a.n(C),M=function(e){var t=e.images,a=e.onImageClick;return Object(O.jsx)("ul",{className:L.a.ImageGallery,children:t.map((function(e){return Object(O.jsx)(k,{image:e,onImageClick:a},e.id)}))})},F=a(17),N=a.n(F),B=function(e){var t=e.onClick;return Object(O.jsx)("div",{className:N.a["Button-wrapper"],children:Object(O.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"Load more"})})},G=a(32),P=a.n(G),E=a(33),Q=a.n(E),q=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:Q.a.Loader,children:Object(O.jsx)(P.a,{type:"TailSpin",color:"#02be6e",height:100,width:100})})}}]),a}(r.Component),T=a(34),U=a.n(T),A=function(e){var t=e.children;return Object(O.jsx)("div",{className:U.a.Message,children:t})};A.defaultProps={children:[]};var K=A,R=a(18),z=a.n(R),D=document.querySelector("#modal-root"),J=function(e){var t=e.children,a=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(O.jsx)("div",{className:z.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(O.jsx)("div",{className:z.a.Modal,children:t})}),D)};J.defaultProps={children:null};var H=J,W=a(19),X=a(37),V=a(35),Y=a.n(V),Z=function(e){var t=e.children,a=e.onClick,r=Object(X.a)(e,["children","onClick"]);return Object(O.jsx)("button",Object(W.a)(Object(W.a)({type:"button",className:Y.a.IconButton,onClick:a},r),{},{children:t}))};Z.defaultProps={onClick:function(){return null},children:null};var $,ee=Z;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function re(e,t){var a=e.title,n=e.titleId,c=ae(e,["title","titleId"]);return r.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41.756 41.756",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,$||($=r.createElement("path",{d:"M27.948 20.878L40.291 8.536a5 5 0 10-7.07-7.071L20.878 13.809 8.535 1.465a5 5 0 00-7.07 7.071l12.342 12.342L1.465 33.22a5 5 0 107.07 7.071l12.343-12.342 12.343 12.343c.976.977 2.256 1.464 3.535 1.464s2.56-.487 3.535-1.464a5 5 0 000-7.071L27.948 20.878z"})))}var ne=r.forwardRef(re),ce=(a.p,a(20)),oe=a.n(ce);oe.a.defaults.baseURL="https://pixabay.com/api";var le=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.get("/?q=".concat(t,"&page=").concat(a,"&key=").concat("20008538-9b5c20cc133cf43381bf6ef09","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),se=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,showModal:!1,largeImage:"",error:null},e.onChangeQuery=function(t){e.setState({images:[],currentPage:1,searchQuery:t,isLoading:!1,showModal:!1,largeImage:"",error:null})},e.getImages=Object(u.a)(s.a.mark((function t(){var a,r,n,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.currentPage,n=a.searchQuery,e.setState({isLoading:!0}),t.prev=2,t.next=5,le(n,r);case 5:c=t.sent,o=c.hits,e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(o)),currentPage:e.currentPage+1}})),1!==r&&e.scrollOnLoadButton(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),console.log("Smth wrong with App fetch",t.t0),e.setState({error:t.t0});case 15:return t.prev=15,e.setState({isLoading:!1}),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,11,15,18]])}))),e.handleGalleryItem=function(t){e.setState({largeImage:t,showModal:!0})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal,largeImage:""}}))},e.scrollOnLoadButton=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.showModal,n=e.largeImage,c=e.error,o=t.length>0&&t.length>=12;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_,{onSearch:this.onChangeQuery}),t.length<1&&Object(O.jsxs)(K,{children:[Object(O.jsx)("h2",{children:"The gallery is empty \ud83d\ude41"}),Object(O.jsx)("p",{children:"Use search field!"})]}),Object(O.jsx)(M,{images:t,onImageClick:this.handleGalleryItem}),o&&Object(O.jsx)(B,{onClick:this.getImages}),r&&Object(O.jsxs)(H,{onClose:this.toggleModal,children:[Object(O.jsx)("div",{className:"Close-box",children:Object(O.jsx)(ee,{onClick:this.toggleModal,"aria-label":"Close modal",children:Object(O.jsx)(ne,{width:"20px",height:"20px",fill:"#7e7b7b"})})}),Object(O.jsx)("img",{src:n,alt:"",className:"Modal-image"})]}),a&&Object(O.jsx)(q,{}),c&&Object(O.jsxs)(K,{children:[Object(O.jsx)("h2",{children:"Oops! \ud83d\ude2b"}),Object(O.jsxs)("p",{children:["Sorry, something went wrong. Please try again, or"," ",Object(O.jsx)("a",{href:"/",children:"refresh the page"}),"."]})]})]})}}]),a}(r.Component);a(82),a(83);o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(se,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.28259677.chunk.js.map