(self.webpackChunkheidelbergman_site=self.webpackChunkheidelbergman_site||[]).push([[5134],{8348:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>B});var n=t(7294),a=t(6040),r=t(9960),i=t(2263);const d={headerTagline:"headerTagline_Ht_L",buttons:"buttons_r1J4",button:"button_LHJ3",headerImageContainer:"headerImageContainer_Zb2U",headerImageLogo:"headerImageLogo_OpIo",headerBackground:"headerBackground_HOce",floatingHeaderDivGroup:"floatingHeaderDivGroup_o0Qg",floatingHeaderDiv:"floatingHeaderDiv_tefl",floatingDivRoundImageContainer:"floatingDivRoundImageContainer__nSK",floatingHeaderDivImage:"floatingHeaderDivImage_NBmc",floatingHeaderDivTextField:"floatingHeaderDivTextField_reCU",floatingHeaderDivTextHeader:"floatingHeaderDivTextHeader_s29O",floatingHeaderDivTextDesc:"floatingHeaderDivTextDesc_iuyZ",floatingHeaderDivButton:"floatingHeaderDivButton_ZJAc",floatingHeaderDivButtonStyle:"floatingHeaderDivButtonStyle__nzw",headerBackgroundVideo:"headerBackgroundVideo_pMX3"},c=e=>[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)],l="showCounter_QHhv",o="countdownDiv_qj48",g="showCounterP_Z2DF",u="showCounterSpan_zJ0U",m="countDownHeader_cD_D";var h=t(5893);const p=e=>{let{value:s,type:t}=e;return(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("p",{className:g,children:s}),(0,h.jsx)("span",{className:u,children:t})]})},f=e=>{let{days:s,hours:t,minutes:n,seconds:a,text:r}=e;return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:m,children:r}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)(p,{value:s,type:"Tagen"}),(0,h.jsx)("p",{children:":"}),(0,h.jsx)(p,{value:t,type:"Stunden"}),(0,h.jsx)("p",{children:":"}),(0,h.jsx)(p,{value:n,type:"Minuten"}),(0,h.jsx)("p",{children:":"}),(0,h.jsx)(p,{value:a,type:"Sekunden"})]})]})},b=e=>{let{targetDate:s,text:t,expiredNotice:a}=e;const[r,i,d,l]=(e=>{const s=new Date(e).getTime(),[t,a]=(0,n.useState)(s-(new Date).getTime());return(0,n.useEffect)((()=>{const e=setInterval((()=>{a(s-(new Date).getTime())}),1e3);return()=>clearInterval(e)}),[s]),c(t)})(s);return r+i+d+l<=0?a:(0,h.jsx)(f,{days:r,hours:i,minutes:d,seconds:l,text:t})},x=[{img_path:"img/header/s03.png",headline:"Anmeldung",text:"Die Anmeldung \xf6ffnet am 01.01.2024 um 12:00 Uhr.",button_text:"Anmeldung",button_link:"#"},{img_path:"img/header/s01.png",headline:"Strecke",text:"1.600 m Schwimmen im malerischen Neckar, 36 km Rennradfahren hinauf zum majest\xe4tischen K\xf6nigstuhl und 10 km Laufen am Philosophenweg.",button_text:"Strecke",button_link:"/Strecke/Uebersicht"},{img_path:"img/header/s02.png",headline:"Ergebnisse",text:"Die Ergebnisse des letzten HEIDELBERGMAN findest du hier.",button_text:"Ergebnisse",button_link:"/Wettkampf/Ergebnisse/"}];function j(e){return(0,h.jsxs)("div",{className:d.floatingHeaderDiv,children:[(0,h.jsx)("div",{className:d.floatingDivRoundImageContainer,children:(0,h.jsx)("img",{className:d.floatingHeaderDivImage,src:e.img_path,alt:"Logo"})}),(0,h.jsxs)("div",{className:d.floatingHeaderDivTextField,children:[(0,h.jsx)("h4",{className:d.floatingHeaderDivTextHeader,children:e.headline}),(0,h.jsx)("p",{className:d.floatingHeaderDivTextDesc,children:e.text}),(0,h.jsx)("div",{className:d.floatingHeaderDivButton,children:(0,h.jsx)(r.Z,{className:`button button--primary button--lg ${d.floatingHeaderDivButtonStyle}`,to:e.button_link,children:e.button_text})})]})]})}function v(){const{siteConfig:e}=(0,i.Z)(),s=e.customFields.HDLogo,t=new Date("2024-01-01T12:00:00.000Z").getTime(),n=(0,h.jsx)("div",{className:d.buttons,children:(0,h.jsx)("div",{className:d.button,children:(0,h.jsx)(r.Z,{className:"button button--primary button--lg",to:"#",children:"Anmeldung"})})});return(0,h.jsxs)("header",{children:[(0,h.jsxs)("div",{className:d.headerBackground,children:[(0,h.jsx)("div",{className:d.headerImageContainer,children:(0,h.jsx)("img",{className:d.headerImageLogo,src:s,alt:"HeidelbergMan Logo"})}),(0,h.jsx)("h1",{className:d.headerTagline,children:" Sonntag, 28. Juli 2024"}),(0,h.jsx)(b,{targetDate:t,text:"Die Anmeldung \xf6ffnet in",expiredNotice:n}),(0,h.jsx)("div",{className:d.floatingHeaderDivGroup,children:x.map(((e,s)=>(0,h.jsx)(j,{...e},s)))})]}),(0,h.jsxs)("video",{className:d.headerBackgroundVideo,autoPlay:!0,loop:!0,muted:!0,poster:"img/header/no_img.jpg",children:[(0,h.jsx)("source",{src:"vids/HDman_teaser.mp4",type:"video/mp4"}),(0,h.jsx)("source",{src:"https://github.com/heidelbergman-de/heidelbergman-de.github.io/raw/main/static/vids/HDMan_teaser.webm",type:"video/webm"})]})]})}const D={gradientDiv:"gradientDiv_ndZ0",leftDiv:"leftDiv_wRAp",rightDiv:"rightDiv_Ps1e"};function _(){return(0,h.jsxs)("div",{className:D.gradientDiv,children:[(0,h.jsxs)("div",{className:D.leftDiv,children:[(0,h.jsxs)("h1",{style:{fontWeight:"normal"},children:[(0,h.jsx)("b",{children:"HEIDEL"}),"BERG",(0,h.jsx)("b",{children:"MAN"})]}),(0,h.jsxs)("p",{style:{fontSize:"medium"},children:["Herzlich willkommen beim HEIDELBERGMAN, dem vielleicht sch\xf6nsten und anspruchsvollsten City-Triathlon \xfcber die Olympische Distanz."," ",(0,h.jsx)("br",{}),"Heidelberg, eine Stadt zwischen Tradition und Moderne, ist der stolze Gastgeber dieses Triathlon-Festivals, bei dem sowohl Freizeitsportler als auch Weltklasseathleten zu einem packenden Wettkampf zusammenkommen. ",(0,h.jsx)("br",{}),"Die anspruchsvolle Strecke des HEIDELBERGMAN f\xfchrt die Athleten durch 1.600 m Schwimmen im malerischen Neckar, 36 km Rennradfahren vorbei an begeisterten Zuschauern entlang des Neckars, durch die charmante Altstadt, hinauf zum majest\xe4tischen K\xf6nigstuhl und schlie\xdflich 10 km Laufen am Philosophenweg mit einem atemberaubenden Blick auf Heidelberg. ",(0,h.jsx)("br",{}),"Der HEIDELBERGMAN stellt die Teilnehmer*innen vor herausfordernde Aufgaben und verspricht ein unvergessliches Erlebnis inmitten dieser einzigartigen Kulisse."]})]}),(0,h.jsxs)("div",{className:D.rightDiv,children:[(0,h.jsx)("h1",{children:"WETTBEWERBE"}),(0,h.jsx)("br",{}),(0,h.jsx)("h2",{style:{fontWeight:"normal"},children:"Olympische Distanz"}),(0,h.jsx)("h2",{style:{fontWeight:"normal"},children:"Staffel"}),(0,h.jsx)("h2",{style:{fontWeight:"normal"},children:"Firmen-Staffel"})]})]})}var N=t(2639),k=t(956),w=t(1798),H=t(4996);const T={carouselContainer:"carouselContainer_ev1x",newsCarousel:"newsCarousel_Cc58",newsCard:"newsCard_DB8R",newsCardImgTop:"newsCardImgTop_BsTN",newsCardText:"newsCardText_H7fi",newsCardLink:"newsCardLink_KAj4"},E=n.forwardRef(((e,s)=>{let{id:t,content:n,metadata:a}=e;const i=n.replace(/\(([^)]+)\)|\[([^]]+)\]/g,"").substring(0,500),d=n.match(/!\[.*\]\((.*)\)/);var c=null;d&&(d[1].startsWith("http")?c=d[1]:(c=d[1].replace("(","").replace(")","").replace("./",a.permalink+"/"),console.log("firstImg",(0,H.Z)(c))));const l=c||"img/header/no_img.jpg";return(0,h.jsxs)(k.Z,{className:T.newsCard,ref:s,children:[(0,h.jsx)(k.Z.Img,{variant:"top",src:l,className:T.newsCardImgTop}),(0,h.jsxs)(k.Z.Body,{children:[(0,h.jsx)("h3",{children:a.title}),(0,h.jsx)("div",{className:T.newsCardText,children:(0,h.jsx)(w.U,{children:i})})]}),(0,h.jsx)(k.Z.Footer,{className:T.newsCardLink,children:(0,h.jsx)(r.Z,{variant:"primary",to:a.permalink,children:"Mehr..."})})]})}));function S(e){let{recentPosts:s}=e;return(0,h.jsxs)("div",{style:{margin:"2rem"},children:[(0,h.jsx)("h1",{style:{textAlign:"center",margin:"1rem"},children:"News"}),(0,h.jsx)("div",{className:T.carouselContainer,children:(0,h.jsx)(N.Z,{"data-bs-theme":"dark",className:T.newsCarousel,children:s.map(((e,s)=>(0,h.jsx)(N.Z.Item,{children:(0,h.jsx)(E,{...e},s)},s)))})})]})}const C={gridWrapper:"gridWrapper_PxmQ",gridWrapperDiv:"gridWrapperDiv_YR23",gridWrapperImg:"gridWrapperImg__uPj",gridWrapperDivWide:"gridWrapperDivWide_OTMW",gridWrapperDivTall:"gridWrapperDivTall_L0wz",gridWrapperDivBig:"gridWrapperDivBig_OiFg"};function W(){const e=t(9957),s=e=>{const s=[C.gridWrapperDiv,C.gridWrapperDivTall,C.gridWrapperDivWide,C.gridWrapperDivBig];return s[Math.floor(Math.random()*s.length)]},n=e.keys().map((t=>[e(t),s(e(t))]));return(0,h.jsx)("div",{className:C.gridWrapper,children:n.map(((e,s)=>(0,h.jsx)("div",{className:e[1],children:(0,h.jsx)("img",{className:C.gridWrapperImg,src:e[0].default,alt:`image-${s}`},s)},s)))})}const y={sponsorSection:"sponsorSection_lhaL",sponsorSectionLogos:"sponsorSectionLogos_zm9P",sponsorLink:"sponsorLink_O1KX",sponsorButton:"sponsorButton_yg7w"};function I(){return(0,h.jsxs)("div",{className:y.sponsorSection,children:[(0,h.jsx)("h1",{children:"SPONSOREN"}),(0,h.jsx)("div",{className:y.sponsorSectionLogos}),(0,h.jsxs)(r.Z,{className:`button button--primary button--lg button--outline button--block ${y.sponsorButton}`,to:"mailto:sponsoring@heidelbergman.de",children:["Sie m\xf6chten den HEIDELBERGMAN gerne unterst\xfctzen? ",(0,h.jsx)("br",{}),"Dann klicken Sie einfach hier und schicken Sie uns eine Nachricht. Wir freuen uns darauf, ",(0,h.jsx)("br",{}),"bald von Ihnen zu h\xf6ren und setzen uns umgehend mit Ihnen in Verbindung."]})]})}function B(e){let{recentPosts:s}=e;const{siteConfig:t}=(0,i.Z)();return(0,h.jsxs)(a.Z,{title:`${t.title} - ${t.tagline}`,description:"HEIDELBERGMAN Triathlon",children:[(0,h.jsx)(v,{}),(0,h.jsxs)("main",{children:[(0,h.jsx)(_,{}),(0,h.jsx)(S,{recentPosts:s}),(0,h.jsx)(W,{}),(0,h.jsx)(I,{})]})]})}},3936:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Anfahrt-9a4808c8a4953d84c0ad56312c67b22c.png"},1691:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Anmeldung-10d6c6c51afa38bc010feaadad425047.png"},5848:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Ausschreibung-e09fb13d389c5d6aad83d825d63b4297.jpeg"},7152:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Ergebnisse-7c8a93cf67b0f01d235419b70a5f41ca.png"},6612:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Fragen_und_Antworten-0d2a563765fdbebc5f55eac47ceb49c3.png"},3855:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/HeartRacer-d8f39c4382a73aeb13bb638281f8e21c.jpeg"},4180:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Historie-b3856f4ae1541471136e0980df62b390.png"},6922:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Laufen-43c8ef4b0c8388e68b5c7a5150c9e8cd.png"},485:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/News-1b8c4de9b7f006c4085f12bf43bab1e2.jpeg"},3232:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Nikar-f5a380a877841faf3ac6c1a2ad5ab7d6.jpeg"},9251:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/OrgaTeam-694a5beecf0a32ab61f6508276411db4.jpeg"},6209:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Presse-f824f6e6e9c070c01153bd658f6d6fbe.jpeg"},3955:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Radfahren-e0dfe158c4bf607c6679201237f63345.png"},3536:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/RundUm-db71697998623e3c35e8824f2c3ff0b5.jpeg"},3841:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Schwimmausstieg-dc0c25eb04f41085f85a342781cc1055.png"},1638:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Schwimmen-8aff22577c1a127173091b073f48ac79.png"},2106:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Sponsoren-bc140e317e0b8c8ba4cf9f58243c8ae3.png"},4310:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Unterkunft-b709964055e0df3d6713aa572604f676.jpeg"},5656:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Wechselzone-63afbc6ffe9d0ce226d7881cf6dd341d.png"},9447:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Zeitlimits-e045dbf27697a123274d155101c00de7.png"},7042:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/Zeitplan-a6b2e0e268b7562df8a30e56fa37d01f.jpeg"},2077:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/tcrn-d822a5a74a8c9b56b7bf4f8af1c0eeeb.jpeg"},9957:(e,s,t)=>{var n={"./Anfahrt.png":3936,"./Anmeldung.png":1691,"./Ausschreibung.jpeg":5848,"./Ergebnisse.png":7152,"./Fragen_und_Antworten.png":6612,"./HeartRacer.jpeg":3855,"./Historie.png":4180,"./Laufen.png":6922,"./News.jpeg":485,"./Nikar.jpeg":3232,"./OrgaTeam.jpeg":9251,"./Presse.jpeg":6209,"./Radfahren.png":3955,"./RundUm.jpeg":3536,"./Schwimmausstieg.png":3841,"./Schwimmen.png":1638,"./Sponsoren.png":2106,"./Unterkunft.jpeg":4310,"./Wechselzone.png":5656,"./Zeitlimits.png":9447,"./Zeitplan.jpeg":7042,"./tcrn.jpeg":2077};function a(e){var s=r(e);return t(s)}function r(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=9957}}]);