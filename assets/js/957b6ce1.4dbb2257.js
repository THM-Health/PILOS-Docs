"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[181],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),f=i,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return r?t.createElement(m,l(l({ref:n},u),{},{components:r})):t.createElement(m,l({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3647:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={title:"Benutzerprofil"},l=void 0,o={unversionedId:"user/profile",id:"user/profile",title:"Benutzerprofil",description:"Sie k\xf6nnen Ihr Benutzerprofil \xf6ffnen, indem Sie in der Men\xfcleiste oben rechts auf Ihren eigenen Namen klicken.",source:"@site/docs/user/user/profile.mdx",sourceDirName:"user",slug:"/user/profile",permalink:"/user/user/profile",draft:!1,tags:[],version:"current",frontMatter:{title:"Benutzerprofil"},sidebar:"tutorialSidebar",previous:{title:"Anmelden",permalink:"/user/user/intro"}},s={},d=[{value:"Stammdaten \xe4ndern",id:"stammdaten-\xe4ndern",level:2},{value:"Profilbild \xe4ndern",id:"profilbild-\xe4ndern",level:2},{value:"Passwort \xe4ndern",id:"passwort-\xe4ndern",level:2},{value:"Sprache \xe4ndern",id:"sprache-\xe4ndern",level:2},{value:"Echo-Test deaktivieren",id:"echo-test-deaktivieren",level:2}],u={toc:d};function c(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Sie k\xf6nnen Ihr Benutzerprofil \xf6ffnen, indem Sie in der Men\xfcleiste oben rechts auf Ihren eigenen Namen klicken.\nIn dem sich \xf6ffnenden Dropdown-Men\xfc w\xe4hlen Sie den Eintrag "Profil" aus.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"profil men\xfc",src:r(709).Z,width:"465",height:"194"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"profile",src:r(6735).Z,width:"942",height:"879"})),(0,i.kt)("h2",{id:"stammdaten-\xe4ndern"},"Stammdaten \xe4ndern"),(0,i.kt)("p",null,"Wenn Sie ein Benutzerkonto ohne LDAP haben und Ihre Berechtigungen es zulassen, k\xf6nnen Sie Ihren Vor- und Nachnamen und eMail-Adresse \xe4ndern.\nSollte die Ihnen automatisch zugewiesene Rolle Ihrer Meinung nach falsch sein, kontaktieren Sie bitte den Support."),(0,i.kt)("p",null,"In dieser Ansicht k\xf6nnen Sie ebenfalls Ihre Zeitzone einstellen, in diesem Fall werden die Datum- und Uhrzeitangaben in PILOS und in Emails in der gew\xfcnschten Zeitzone angezeigt."),(0,i.kt)("h2",{id:"profilbild-\xe4ndern"},"Profilbild \xe4ndern"),(0,i.kt)("p",null,"Sie k\xf6nnen Ihrem Benutzerkonto ein Profilbild hinzuf\xfcgen. Dieses wird in der Videokonferenz neben Ihrem Namen angezeigt. Auch wird es f\xfcr den Raumeigent\xfcmer und die Miteigent\xfcmer in der Liste der Raummitglieder dargestellt.\nDas Bild k\xf6nnen Sie jederzeit l\xf6schen oder durch ein anderes Bild ersetzen."),(0,i.kt)("p",null,"Wenn Sie ein neues Bild hochladen (png oder jpg) k\xf6nnen Sie es \xfcber eine Dialogbox auf das Format 1x1 zuschneiden."),(0,i.kt)("img",{src:r(7137).Z,width:"350"}),(0,i.kt)("h2",{id:"passwort-\xe4ndern"},"Passwort \xe4ndern"),(0,i.kt)("p",null,"Benutzer ohne LDAP k\xf6nnen Ihr Passwort in PILOS selbst\xe4ndig \xe4ndern. LDAP Nutzer m\xfcssen das Passwort in der Passwortverwaltung der Hochschule \xe4ndern lassen."),(0,i.kt)("admonition",{title:"Passwortrichtlinie",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Passwort muss mindestens 8 Zeichen lang sein"),(0,i.kt)("li",{parentName:"ul"},"Das Passwort muss mindestens ein Zeichen aus jeder der folgenden vier Kategorien enthalten:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Gro\xdfbuchstaben (A - Z)"),(0,i.kt)("li",{parentName:"ul"},"Kleinbuchstaben (a - z)"),(0,i.kt)("li",{parentName:"ul"},"Zahlen (0 - 9)"),(0,i.kt)("li",{parentName:"ul"},"nicht alphanumerisches Zeichen (zum Beispiel: !, $, #, oder %)"))))),(0,i.kt)("h2",{id:"sprache-\xe4ndern"},"Sprache \xe4ndern"),(0,i.kt)("p",null,"Sie k\xf6nnen jederzeit Ihre bevorzugte Sprache \xfcber die Men\xfcleiste \xe4ndern.\n",(0,i.kt)("img",{alt:"lang language",src:r(295).Z,width:"465",height:"194"})),(0,i.kt)("p",null,"Alternativ k\xf6nnen Sie die Sprache auch in Ihrem Benutzerprofil \xe4ndern."),(0,i.kt)("h2",{id:"echo-test-deaktivieren"},"Echo-Test deaktivieren"),(0,i.kt)("p",null,'Der Echo-Test wird standardm\xe4\xdfig bei jedem Beitritt in eine Videokonferenz durchgef\xfchrt und hilft Probleme mit dem Mikrofon und den Lautsprechern fr\xfchzeitig zu erkennen und zu beheben.\nUm diesen regelm\xe4\xdfigen Test zu umgehen, aktivieren Sie den Schalter "Echo-Test deaktivieren".'))}c.isMDXComponent=!0},7137:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/profile-image-crop-9d3ee655dc117f3e147ff9b2eef76ea1.png"},295:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/lang-selector-86027f3d586dc76e19c9f65165941c4d.png"},709:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/profile-menu-a69f3563d2aae600b58fefbc60374385.png"},6735:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/profile-aa6d91549f37b5026c31437438366c78.png"}}]);