(function(g){var window=this;var LBa=function(a,b,c,d){var e=b.ac();g.U(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.ed(c,d?d:"mqdefault.jpg");var k=b instanceof g.yO?g.TU(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.uQ(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.yO?b.Fa:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,aria_label:b.ql||g.V("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Sl(c),is_live:m,
is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.wQ&&(c.playlist_length=b.getLength());a.update(c)},C5=function(a,b){g.DH.call(this,{J:"div",
fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.A=a;this.created=!1},D5=function(a){g.W.call(this,{J:"div",
N:"ytp-upnext",U:{"aria-label":"{{aria_label}}"},P:[{J:"div",N:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{J:"span",N:"ytp-upnext-top",P:[{J:"span",N:"ytp-upnext-header",ca:"Siguiente"},{J:"span",N:"ytp-upnext-title",ca:"{{title}}"},{J:"span",N:"ytp-upnext-author",ca:"{{author}}"}]},{J:"a",N:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente v\u00eddeo"},P:[{J:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},P:[{J:"circle",
N:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{J:"circle",N:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{J:"path",N:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{J:"span",N:"ytp-upnext-bottom",P:[{J:"span",N:"ytp-upnext-cancel"},{J:"span",N:"ytp-upnext-paused",ca:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});
this.D=null;var b=this.o["ytp-upnext-cancel"];this.D=new g.W({J:"button",fa:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},ca:"Cancelar"});g.N(this,this.D);this.D.W("click",this.KR,this);this.D.wa(b);this.A=a;this.L=this.o["ytp-svg-autoplay-ring"];this.H=this.G=this.C=this.F=null;this.I=new g.gu(this.jo,5E3,this);g.N(this,this.I);this.K=0;this.R(this.o["ytp-upnext-autoplay-icon"],"click",this.UT);this.pD();this.R(a,"autonavvisibility",
this.pD);this.R(a,"mdxnowautoplaying",this.jT);this.R(a,"mdxautoplaycanceled",this.kT);this.R(a,"mdxautoplayupnext",this.aG);3==this.A.Ra()&&(a=(a=g.ZT(g.TT(this.A)))?a.HK():null)&&this.aG(a)},MBa=function(a,b){a.F=b;
LBa(a,b,g.Y(a.A),"hqdefault.jpg")},E5=function(a,b){if(!a.C){g.eG("a11y-announce","Siguiente "+a.F.title);
a.K=g.pG();a.C=new g.gu((0,g.A)(a.Sr,a,b),25);a.Sr(b);var c=b||g.Y(a.A).experiments.A("autoplay_time")||1E4;a.A.xa("onAutonavCoundownStarted",c)}g.wq(a.element,"ytp-upnext-autoplay-paused")},G5=function(a){F5(a);
a.K=g.pG();a.Sr();g.T(a.element,"ytp-upnext-autoplay-paused")},F5=function(a){a.C&&(a.C.dispose(),a.C=null)},H5=function(a,b){b=void 0===b?!1:b;
var c=g.Y(a.A);if(c.experiments.o("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.F.ac(),a.jo(),a.G=new window.Notification("Siguiente",{body:d.title,icon:d.ed(c)}),a.H=a.R(a.G,"click",a.JT),a.I.start())}F5(a);a.A.yk(!1,b)},NBa=function(a){C5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.C=new g.W({J:"div",N:"ytp-subscribe-card",P:[{J:"img",N:"ytp-author-image",U:{src:b.profilePicture}},{J:"div",N:"ytp-subscribe-card-right",P:[{J:"div",N:"ytp-author-name",ca:b.author},{J:"div",N:"html5-subscribe-button-container"}]}]});g.N(this,this.C);this.C.wa(this.element);this.D=new g.JZ("Suscribirse",null,"Cancelar suscripcion",null,!0,!1,b.Mf,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.D);this.D.wa(this.C.o["html5-subscribe-button-container"]);this.hide()},
I5=function(a){var b=g.Y(a),c=g.NI||g.nf?{style:"will-change: opacity"}:void 0,d=b.o,e=["ytp-videowall-still"];
b.A&&e.push("ytp-videowall-show-text");g.W.call(this,{J:"a",fa:e,U:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{J:"div",N:"ytp-videowall-still-image",U:{style:"{{background}}"}},{J:"span",N:"ytp-videowall-still-info",P:[{J:"span",N:"ytp-videowall-still-info-bg",P:[{J:"span",N:"ytp-videowall-still-info-content",U:c,P:[{J:"span",N:"ytp-videowall-still-info-title",ca:"{{title}}"},{J:"span",
N:"ytp-videowall-still-info-author",ca:"{{author_and_views}}"},{J:"span",N:"ytp-videowall-still-info-live",ca:"En directo"},{J:"span",N:"ytp-videowall-still-info-duration",ca:"{{duration}}"}]}]}]},{J:"span",fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{J:"span",N:"ytp-videowall-still-listlabel-icon"},"Lista de reproducci\u00f3n",{J:"span",N:"ytp-videowall-still-listlabel-length",P:[" (",{J:"span",ca:"{{playlist_length}}"},")"]}]},{J:"span",fa:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],P:[{J:"span",N:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{J:"span",N:"ytp-videowall-still-listlabel-length",ca:" (50+)"}]}]});this.F=d;this.A=a;this.C=null;this.D=new g.NF(this);g.N(this,this.D);this.W("click",this.H);this.W("keypress",this.I);this.D.R(a,"videodatachange",this.G);g.Y(a).Z&&(a=a.app.ia,b=this.element,g.Oa(a.o,b),g.Ra(a.o,b),c=String(a.H++),b.setAttribute("data-visual-id",c),g.hf(this,(0,g.A)(a.G,a,b)));this.G()},J5=function(a){C5.call(this,a,
"videowall-endscreen");
this.M=a;this.H=0;this.D=[];this.I=this.G=this.F=null;this.K=this.T=!1;this.Y=new g.NF(this);g.N(this,this.Y);this.L=new g.gu(g.Fa(g.T,this.element,"ytp-show-tiles"),0);g.N(this,this.L);var b=new g.W({J:"button",fa:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Anterior"},P:[g.OU()]});g.N(this,b);b.wa(this.element);b.W("click",this.GP,this);this.O=new g.xH({J:"div",N:"ytp-endscreen-content"});g.N(this,this.O);this.O.wa(this.element);b=new g.W({J:"button",fa:["ytp-button","ytp-endscreen-next"],
U:{"aria-label":"Siguiente"},P:[g.PU()]});g.N(this,b);b.wa(this.element);b.W("click",this.FP,this);this.C=new D5(a);g.N(this,this.C);g.tU(this.A,this.C.element,4);this.hide()},K5=function(a){return g.vU(a.A)&&a.Cy()&&!a.I},OBa=function(a,b){return(0,g.I)(b.suggestions,function(b){b=g.yX(b);
g.N(a,b);return b})},L5=function(a){var b=a.bv();
b!=a.T&&(a.T=b,a.A.V("autonavvisibility"))},M5=function(a){g.BU.call(this,a);
this.A=null;this.B=new g.NF(this);g.N(this,this.B);this.C=g.Y(a);PBa(a)?this.A=new J5(this.o):this.C.Ga?this.A=new NBa(this.o):this.A=new C5(this.o);g.N(this,this.A);g.tU(this.o,this.A.element,4);this.LE();this.B.R(a,"videodatachange",this.LE,this);this.B.R(a,"crn_endscreen",this.FN,this);this.B.R(a,"crx_endscreen",this.GN,this)},PBa=function(a){a=g.Y(a);
return a.md&&!a.Ga};
g.t(C5,g.DH);C5.prototype.create=function(){this.created=!0};
C5.prototype.destroy=function(){this.created=!1};
C5.prototype.Cy=function(){return!1};
C5.prototype.bv=function(){return!1};g.t(D5,g.W);g.h=D5.prototype;g.h.jo=function(){this.G&&(this.I.stop(),this.Ha(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.pD=function(){g.CH(this,g.UT(this.A))};
g.h.JT=function(){window.focus();this.jo()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Sr=function(a){a=a||g.Y(this.A).experiments.A("autoplay_time")||1E4;var b=Math.min(g.pG()-this.K,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.A.Ra()?H5(this,!0):this.C&&this.C.start()};
g.h.UT=function(a){!g.Wd(this.D.element,g.BF(a))&&g.yW(a,this.A)&&H5(this)};
g.h.KR=function(){g.WT(this.A,!0)};
g.h.jT=function(a){this.A.Ra();this.show();E5(this,a)};
g.h.aG=function(a){this.A.Ra();this.F&&this.F.ac().videoId==a.ac().videoId||MBa(this,a)};
g.h.kT=function(){this.A.Ra();F5(this);this.hide()};
g.h.X=function(){F5(this);this.jo();g.W.prototype.X.call(this)};g.t(NBa,C5);g.t(I5,g.W);I5.prototype.Pk=function(){g.yU(this.A,this.element);var a=this.C.ac().videoId,b=this.C.getPlaylistId();g.Z_(this.A.app,a,this.C.Ud,b,void 0,void 0,void 0)};
I5.prototype.H=function(a){g.yW(a,this.A,this.F,this.C.Ud||void 0)&&this.Pk()};
I5.prototype.I=function(a){switch(a.keyCode){case 13:case 32:g.GF(a)||(this.Pk(),g.FF(a))}};
I5.prototype.G=function(){var a=this.A.getVideoData(),b=g.Y(this.A);this.F=a.isDni?!1:b.o};g.t(J5,C5);g.h=J5.prototype;g.h.create=function(){C5.prototype.create.call(this);var a=this.A.getVideoData();a&&(this.F=OBa(this,a),this.G=a);this.Qg();this.Y.R(this.A,"appresize",this.Qg);this.Y.R(this.A,"onVideoAreaChange",this.Qg);this.Y.R(this.A,"videodatachange",this.HP);this.Y.R(this.A,"autonavchange",this.nC);this.Y.R(this.A,"autonavcancel",this.EP);this.Y.R(this.element,"transitionend",this.mV)};
g.h.destroy=function(){g.PF(this.Y);g.kf(this.D);this.D=[];this.F=null;C5.prototype.destroy.call(this);g.wq(this.element,"ytp-show-tiles");this.L.stop()};
g.h.Cy=function(){return 1!=this.G.autonavState};
g.h.show=function(){C5.prototype.show.call(this);g.wq(this.element,"ytp-show-tiles");g.Y(this.A).A?g.iu(this.L):this.L.start();(this.K||this.I&&this.I!=this.G.clientPlaybackNonce)&&g.WT(this.A,!1);K5(this)?(L5(this),2==this.G.autonavState?g.Y(this.A).experiments.o("fast_autonav_in_background")&&3==this.A.Zi()?H5(this.C,!0):E5(this.C):3==this.G.autonavState&&G5(this.C)):(g.WT(this.A,!0),L5(this))};
g.h.hide=function(){C5.prototype.hide.call(this);G5(this.C);L5(this)};
g.h.mV=function(a){g.BF(a)==this.element&&this.Qg()};
g.h.Qg=function(){if(this.F&&this.F.length){g.T(this.element,"ytp-endscreen-paginate");var a=g.lU(this.M,!0),b=g.RH(this.M);b&&(b=b.yd()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.F.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,r=e/2,u=b<=f-2&&n>=r*m,D=e<=k-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&D)n-=p*m,e+=2;else if(u)n-=r*m,b+=2;else if(D)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.id(a.width/m||1,1,1.21);n*=g.id(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.O.element;g.Qh(a,m,n);g.xh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});MBa(this.C,this.F[0]);g.U(this.element,"ytp-endscreen-takeover",K5(this));L5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&
2>f?0==k&&0==f&&(r=2):r=2),p=g.jd(p+this.H,l),0!=r){u=this.D[c];u||(u=new I5(this.A),this.D[c]=u,a.appendChild(u.element));D=Math.floor(n*k/e);var H=Math.floor(m*f/b),L=Math.floor(n*(k+r)/e)-D-4,S=Math.floor(m*(f+r)/b)-H-4;g.Eh(u.element,H,D);g.Qh(u.element,S,L);g.xh(u.element,"transitionDelay",(k+f)/20+"s");g.U(u.element,"ytp-videowall-still-mini",1==r);g.U(u.element,"ytp-videowall-still-large",2<r);r=u;p=this.F[p];r.C!=p&&(r.C=p,LBa(r,p,g.Y(r.A),g.uq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":
"mqdefault.jpg"),u=(p=p.Ud)&&p.itct)&&(p=r.A,g.Y(p).Z&&(p=p.app.ia,r=r.element,D=r.getAttribute("data-visual-id"),g.Oa(p.o,r),g.wU(p,"onLogServerVeCreated",{id:D,tracking_params:u})));c++}g.U(this.element,"ytp-endscreen-paginate",c<l);for(b=this.D.length-1;b>=c;b--)e=this.D[b],g.Qd(e.element),g.jf(e);this.D.length=c}};
g.h.HP=function(){var a=this.A.getVideoData();this.G!=a&&(this.H=0,this.F=OBa(this,a),this.G=a,this.Qg())};
g.h.FP=function(){this.H+=this.D.length;this.Qg()};
g.h.GP=function(){this.H-=this.D.length;this.Qg()};
g.h.LM=function(){return!!this.C.C};
g.h.nC=function(a){1==a?(this.K=!1,this.I=this.G.clientPlaybackNonce,F5(this.C),this.B&&this.Qg()):(this.K=!0,this.B&&K5(this)&&(2==a?E5(this.C):3==a&&G5(this.C)))};
g.h.EP=function(a){if(a){for(a=0;a<this.D.length;a++)g.zU(this.M,this.D[a].element,!0);this.nC(1)}else this.I=null,this.K=!1;this.Qg()};
g.h.bv=function(){return this.B&&K5(this)};g.t(M5,g.BU);g.h=M5.prototype;g.h.MB=function(){var a=this.o.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!PBa(this.o)||b;a=g.WO(a,"ypc_module");var c=g.C_(this.o.app);return b&&!a&&!c};
g.h.LB=function(){return this.A.bv()};
g.h.HM=function(){return this.LB()?this.A.LM():!1};
g.h.X=function(){g.rU(this.o,"endscreen");g.BU.prototype.X.call(this)};
g.h.load=function(){g.BU.prototype.load.call(this);this.A.show()};
g.h.unload=function(){g.BU.prototype.unload.call(this);this.A.hide();this.A.destroy()};
g.h.FN=function(a){this.MB()&&(this.A.created||this.A.create(),"load"==a.getId()&&this.load())};
g.h.GN=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.LE=function(){g.rU(this.o,"endscreen");var a=Math.max(1E3*(this.o.getVideoData().lengthSeconds-10),0);a=new g.rQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.N(this,a);var b=new g.rQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.N(this,b);g.oU(this.o,[a,b])};g.sX.endscreen=M5;})(_yt_player);
