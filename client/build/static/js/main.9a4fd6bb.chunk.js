(window["webpackJsonppersonal-site"]=window["webpackJsonppersonal-site"]||[]).push([[0],{46:function(e,a,t){e.exports=t(72)},51:function(e,a,t){},53:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(20),o=t.n(i),r=(t(51),t(52),t(5)),c=(t(53),t(10)),m=t(44),s=t(73),u=t(74),g=function(e){var a=e.GDIMPoff;return l.a.createElement("main",{className:"home-container"},l.a.createElement("h1",null,"Welcome to Bella Nikom's Site!"),l.a.createElement("p",null,"you might be wondering - who am I? good question!"),l.a.createElement("p",null,"ok bye now."),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(u.a,{xs:{size:6,offset:6}},l.a.createElement("img",{className:"star",src:"/images/png_star.png",alt:"star"}),l.a.createElement("p",{className:"you-did-it"},"you did it"))),l.a.createElement("img",{src:"/images/aristocats.png",className:"aristocats",alt:"aristocats"})))},d=t(45),h=t(19),f=t(38),p=t.n(f),E=t(39),y=[{city:"Amsterdam",country:"Netherlands",image:"/images/amsterdam.jpg",comments:null,latitude:52.370216,longitude:4.895168},{city:"Barcelona",country:"Spain",image:"/images/la_segrada_barcelona.jpg",comments:"La Segrada Familia Church",latitude:41.3851,longitude:2.1734},{city:"Bath",country:"United Kingdom",image:"/images/bath.jpg",comments:null,latitude:51.3811,longitude:-2.359},{city:"Berlin",country:"Germany",image:"/images/berlin_map.jpg",comments:"absolutely scandalized at the art of the Berlin Wall",latitude:52.52,longitude:13.405},{city:"Burano",country:"Italy",image:"/images/burano.jpg",comments:"Actually an island off Venice called Burano - known for incredible lace",latitude:45.4408,longitude:12.3155},{city:"Cordoba",country:"Spain",image:"/images/mesquita_spain.jpg",comments:"The Mosque-Cathedral of Cordoba, also known as The Mezquita",latitude:37.8882,longitude:-4.7794},{city:"The Dead Sea",country:"Israel",image:"/images/israel.jpg",comments:null,latitude:31.559,longitude:35.4732},{city:"Ehlanzeni",country:"South Africa",image:"/images/southafrica.jpeg",comments:"Also known as Bourke's Luck Potholes",latitude:-25.3946,longitude:31.2626},{city:"Gedi",country:"Kenya",image:"/images/gedi.jpg",comments:"Ruins of an ancient mosque that is carbon dated to be around 1000 years old!",latitude:-3.3064,longitude:40.0114},{city:"Granada",country:"Spain",image:"/images/granada.jpg",comments:"The Alhambra!!!! incredible to see in person",latitude:37.1773,longitude:-3.5986},{city:"Jerusalem",country:"Israel",image:"/images/israel2.jpg",comments:null,latitude:31.7683,longitude:35.2137},{city:"Kilimanjaro",country:"Tanzania",image:"/images/tanzania.jpg",comments:"This was... a hike",latitude:-3.0674,longitude:37.3556},{city:"Knossos",country:"Greece",image:"/images/greece.jpg",comments:"Serving looks and water",latitude:35.2985,longitude:25.1596},{city:"Krakow",country:"Poland",image:"/images/poland.jpg",comments:"The historic Jewish ghetto in Krakow",latitude:50.0647,longitude:19.945},{city:"Lisbon",country:"Portugal",image:"/images/lisbon.jpg",comments:"old train car",latitude:38.7223,longitude:9.1393},{city:"Lake Baikal, Siberia",country:"Russia",image:"/images/siberia.jpg",comments:"WAAAAY hotter here than you think",latitude:51.85,longitude:104.866667},{city:"London",country:"United Kingdom",image:"/images/london.jpg",comments:"A tea store for the experienced",latitude:51.5074,longitude:.1278},{city:"Munich",country:"Germany",image:"/images/munich.jpg",comments:"The overhead view of the Christmas Market",latitude:48.1351,longitude:11.582},{city:"Paris",country:"France",image:"/images/notre_dame.jpg",comments:"The Notre Dame Cathedral stained glass window - shiny",latitude:48.8566,longitude:2.3522},{city:"Petra",country:"Jordan",image:"/images/jordan.jpg",comments:null,latitude:30.3285,longitude:35.4444},{city:"Prague",country:"Czech Republic",image:"/images/prague.jpg",comments:"Statue of Franz Kafka. Ever heard of him?",latitude:50.0755,longitude:14.4378},{city:"Rabat",country:"Morocco",image:"/images/morocco.jpg",comments:null,latitude:33.9716,longitude:6.8498},{city:"Rome",country:"Italy",image:"/images/colloseum_italy.jpg",comments:"Colloseum? more like Call-Them-As-I-See-Them",latitude:41.9028,longitude:12.4964},{city:"St. Petersburg",country:"Russia",image:"/images/stpetersburg.jpg",comments:null,latitude:59.9343,longitude:30.3351},{city:"Teotihuacan",country:"Mexico",image:"/images/mexico_city.jpeg",comments:"Ready to be sacrificed",latitude:19.4326,longitude:-99.1332}],b={latitude:37.61859557982719,longitude:-2.0274437500523406,zoom:1},w=function(){var e=Object(n.useState)(b),a=Object(r.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)(!1),c=Object(r.a)(o,2),m=c[0],s=c[1],u=Object(n.useState)(null),g=Object(r.a)(u,2),f=g[0],w=g[1];return l.a.createElement("main",null,l.a.createElement(h.d,Object.assign({width:"100%",height:"80vh",mapStyle:"mapbox://styles/mapbox/streets-v9",mapboxApiAccessToken:"pk.eyJ1IjoiYm5pa29tIiwiYSI6ImNrMHNxbjgwNjAxN2MzbnBlZXNnZ3Rtc2gifQ.PQbU0Gc9uGPX90rMxbJcaw",onViewportChange:function(e){e.width,e.height;var a=Object(d.a)(e,["width","height"]);return i(a)},onClick:function(e){e.lngLat,e.leftButton}},t),l.a.createElement("div",{className:"navigation-control"},l.a.createElement(h.b,{onViewportChange:function(e){return i(e)}})),y.map((function(e){return l.a.createElement(h.a,{key:p()(),latitude:e.latitude,longitude:e.longitude,offsetLeft:-10,offsetTop:-30},l.a.createElement(E.a,{icon:"map-pin",size:"2x",color:"red",onClick:function(){w(e),s(!0)},style:{cursor:"pointer"}}))})),m&&l.a.createElement(h.c,{latitude:f.latitude,longitude:f.longitude,closeButton:!0,closeOnClick:!1,onClose:function(){return s(!1)},anchor:"top"},l.a.createElement("div",null,l.a.createElement("p",null,f.city,", ",f.country),l.a.createElement("img",{src:f.image,className:"travel-img",alt:"".concat(f.city,", ").concat(f.country)}),l.a.createElement("p",null,f.comments)))))},j=function(e){var a=e.GDIMPoff;return l.a.createElement("main",{className:"home-container"},l.a.createElement(s.a,null,l.a.createElement(u.a,{xs:a?6:12},l.a.createElement("h1",null,"You should donate to:"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://action.aclu.org/give/donate-to-aclu-multistep"},"ACLU")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.plannedparenthood.org/get-involved/other-ways-give"},"Planned Parenthood")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.raicestexas.org/donate/"},"RAICES")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://yellowhammerfund.org/"},"Yellowhammer Fund")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://hispanicfederation.org/unidos/"},"Hispanic Federation/Unidos")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://suicidepreventionlifeline.org/donate/"},"National Suicide Prevention Lifeline")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.inara.org/donate"},"International Network for Aid, Relief and Assistance/Inara")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://donate.wikimedia.org/wiki/Ways_to_Give"},"Wikipedia")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://alotrolado.org/take-action/donate/"},"Al Otro Lado")))),a&&l.a.createElement(u.a,null,l.a.createElement("img",{src:"images/give-dat.png",alt:"give dat",className:"give-dat"}),l.a.createElement("img",{src:"images/money.gif",alt:"green money",className:"green-money"}),l.a.createElement("img",{src:"images/money3.gif",className:"fire-money",alt:"fire money"}))))},I=function(e){var a=e.GDIMPoff;return l.a.createElement(m.a,{context:{}},l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(g,Object.assign({},e,{GDIMPoff:a}))}}),l.a.createElement(c.a,{path:"/map",component:w}),l.a.createElement(c.a,{path:"/charities",render:function(e){return l.a.createElement(j,Object.assign({},e,{GDIMPoff:a}))}})))},v=t(75),N=t(76),k=t(77),P=t(81),M=t(78),G=t(79),S=t(80),A=function(e){var a=e.GDIMPoff,t=Object(n.useState)(!0),i=Object(r.a)(t,2),o=i[0],c=i[1];return l.a.createElement("header",null,l.a.createElement(v.a,{color:"faded",light:!0},l.a.createElement(N.a,{href:"/",className:"mr-auto"},a?l.a.createElement("div",{className:"slogan"},l.a.createElement("h1",{className:"first"},"BELLA NIKOM"),l.a.createElement("h1",{className:"second"},"BELLA NIKOM"),l.a.createElement("h1",{className:"third"},"BELLA NIKOM")):l.a.createElement("img",{src:"images/bella_logo.png",className:"logo",alt:"Bella Logo"})),l.a.createElement(k.a,{onClick:function(){return c(!o)},className:"mr-2"}),l.a.createElement(P.a,{isOpen:!o,navbar:!0},l.a.createElement(M.a,{navbar:!0},l.a.createElement(G.a,null,l.a.createElement(S.a,{href:"/map",className:"pl-2"},"Where have I gone?")),l.a.createElement(G.a,null,l.a.createElement(S.a,{href:"/charities",className:"pl-2"},"Charities ~~~~"))))))},C=t(42),D=t.n(C),O=function(e){var a=e.handleGDIMPTheme,t=e.GDIMPoff;return l.a.createElement("footer",null,l.a.createElement("hr",{className:"mt-0"}),l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement("h5",{className:"font-weight-bold"},"Important Links/Things:"),l.a.createElement("ul",{className:"list-unstyled ml-4"},l.a.createElement("li",null,"(The world is ending!!!!!!)"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/bnikom/"},"LinkedIn")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/bnikom"},"Github")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/thebasketcase25"},"Personal Twitter")))),l.a.createElement(u.a,{xs:6},l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",null,"Normal"),l.a.createElement(D.a,{className:"mx-2",id:"GDIMP-label",icons:!1,defaultChecked:"true"===localStorage.getItem("GDIMPoff")||t,onChange:function(){return a(!t)},"aria-label":"toggle to change colour formatting"}),l.a.createElement("span",null,"Graphic Design Is My Passion")))))};var x=function(){var e=Object(n.useState)("true"===localStorage.getItem("GDIMPoff")||!1),a=Object(r.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)((function(){var e="true"===localStorage.getItem("GDIMPoff")?"gdimp":"normal";document.body.className=e,i("true"===localStorage.getItem("GDIMPoff"))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(A,{GDIMPoff:t}),l.a.createElement(I,{GDIMPoff:t}),l.a.createElement(O,{handleGDIMPTheme:function(){i(!t);var e=t?"normal":"gdimp";document.body.className=e,localStorage.setItem("GDIMPoff",!t)},GDIMPoff:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(17),T=t(43);L.b.add(T.a),o.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.9a4fd6bb.chunk.js.map