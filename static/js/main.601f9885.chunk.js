(this.webpackJsonpknowrecipe=this.webpackJsonpknowrecipe||[]).push([[0],{10:function(e,t,a){e.exports={recipes:"recipe_recipes__2GpBA",foodimg:"recipe_foodimg__2lVPA",inglist:"recipe_inglist__GvoFs",label:"recipe_label__BJXFp",text:"recipe_text__1bcJv",calorie:"recipe_calorie__2X4B3"}},11:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo.8325a79f.png"},23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),i=a.n(r),o=(a(28),a(6)),s=a.n(o),c=a(9),u=a(10),d=a.n(u),m=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return l.a.createElement("div",{className:d.a.recipes},l.a.createElement("h1",null,t),l.a.createElement("h3",null,"Ingredients"),l.a.createElement("ol",{className:d.a.inglist},r.map((function(e){return l.a.createElement("li",null,e.text)}))),l.a.createElement("div",{className:d.a.calorie},l.a.createElement("b",{className:d.a.label},"Calories:"),l.a.createElement("p",{className:d.a.text},a.toFixed(0),"kcal")),l.a.createElement("img",{className:d.a.foodimg,src:n,alt:t}))},h=(a(11),function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(c.a)(i,2),u=o[0],d=o[1],h=Object(n.useState)("chicken"),p=Object(c.a)(h,2),y=p[0],f=p[1];Object(n.useEffect)((function(){b()}),[y]);var b=function(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch("https://api.edamam.com/search?q=".concat(y,"&app_id=").concat("801cb971","&app_key=").concat("57456b2221bd3c8ddbde9794103e1110")));case 2:return e=a.sent,a.next=5,s.a.awrap(e.json());case 5:t=a.sent,r(t.hits);case 7:case"end":return a.stop()}}))};return l.a.createElement("div",{className:"App"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u&&(f(u),d(""))},className:"search-form"},l.a.createElement("input",{placeholder:"Default:chicken",className:"search-bar",type:"text",value:u,onChange:function(e){d(e.target.value)}}),l.a.createElement("button",{className:"search-button",type:"submit"},"Search")),l.a.createElement("div",{className:"recipes"},a.map((function(e){return l.a.createElement(m,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))}),p=a(7),y=a(5),f=a(19),b=a.n(f),E=function(){var e={color:"black"};return l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav-links"},l.a.createElement(p.b,{to:"/home"},l.a.createElement("li",null,l.a.createElement("img",{style:{height:"10vh"},src:b.a,alt:"logo"}))),l.a.createElement(p.b,{style:e,to:"/home"},l.a.createElement("li",null,"Home")),l.a.createElement(p.b,{style:e,to:"/services"},l.a.createElement("li",null,"Nutrition Analysis")),l.a.createElement(p.b,{style:e,to:"/about"},l.a.createElement("li",null,"About Us")),l.a.createElement(p.b,{style:e,to:"/contactus"},l.a.createElement("li",null,"Contact Us"))))},g=function(){return l.a.createElement("div",{className:"about-box"},l.a.createElement("h1",null,"About Food Recipe"),l.a.createElement("p",null,'A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food. The term recipe is also used in medicine or in information technology (e.g., user acceptance). A doctor will usually begin a prescription with recipe, Latin for take, usually abbreviated as Rx or the equivalent symbol (\u211e). Contents 1 History 1.1 Early examples 1.2 Modern recipes and cooking advice 2 Components 3 Internet and television recipes 4 Recipe design tools 5 See also 6 References 7 External links History Early examples Apicius, De re culinaria, an early collection of recipes. The earliest known written recipes date from approximately 1600 BC and come from an Akkadian tablet from southern Babylonia.[1] There are also works in ancient Egyptian hieroglyphs depicting the preparation of food.[2] Many ancient Greek recipes are known. Mithaecus\'s cookbook was an early one, but most of it has been lost; Athenaeus quotes one short recipe in his Deipnosophistae. Athenaeus mentions many other cookbooks, all of them lost.[3] Roman recipes are known starting in the 2nd century BCE with Cato the Elder\'s De Agri Cultura. Many authors of this period described eastern Mediterranean cooking in Greek and in Latin.[3] Some Punic recipes are known in Greek and Latin translation.[3] The large collection of recipes De re coquinaria, conventionally titled Apicius, appeared in the 4th or 5th century and is the only complete surviving cookbook from the classical world.[3] It lists the courses served in a meal as Gustatio (appetizer), Primae Mensae (main course) and Secundae Mensae (dessert).[4] Each recipe begins with the Latin command "Take...," "Recipe...."[5] Arabic recipes are documented starting in the 10th century; see al-Warraq and al-Baghdadi. The earliest recipe in Persian dates from the 14th century. Several recipes have survived from the time of Safavids, including Karnameh (1521) by Mohammad Ali Bavarchi, which includes the cooking instruction of more than 130 different dishes and pastries, and Madat-ol-Hayat (1597) by Nurollah Ashpaz.[6] Recipe books from the Qajar period are numerous, the most notable being Khorak-ha-ye Irani by prince Nader Mirza.[7] King Richard II of England commissioned a recipe book called Forme of Cury in 1390,[8] and around the same time, another book was published entitled Curye on Inglish, "cury" meaning cooking.[9] Both books give an impression of how food for the noble classes was prepared and served in England at that time. The luxurious taste of the aristocracy in the Early Modern Period brought with it the start of what can be called the modern recipe book. By the 15th century, numerous manuscripts were appearing detailing the recipes of the day. Many of these manuscripts give very good information and record the re-discovery of many herbs and spices including coriander, parsley, basil and rosemary, many of which had been brought back from the Crusades.[10]'),l.a.createElement("h1",null,"Nutrition Analysis"),l.a.createElement("p",null,"Nutrition analysis refers to the process of determining the nutritional content of foods and food products. The process can be performed through a variety of certified methods. Methods Laboratory analysis Traditionally, food companies would send food samples to laboratories for physical testing. Typical analysis includes: Moisture (water) by loss of mass at 102 \xb0C, Protein by analysis of total nitrogen, either by Dumas or Kjeldahl methods, Total fat, traditionally by a solvent extraction, but often now by secondary methods such as NMR, Crude ash (total inorganic matter) by combustion at 550C, Estimated dietary fibre by various AOAC methods such as 985.29, Sodium (and thereby Salt) either by flame photometry, AA or ICP-OES, Total sugars, normally by a liquid chromatography technique, such as IC-HPAED or HPLC-RI, Fatty acids by GC-FID, Carbohydrates and energy values are normally calculated from these analytical values. Software Software is available as an alternative to laboratory nutrition analysis. This software typically utilizes a database of ingredients that have previously been laboratory tested. The user can input ingredient data by matching their ingredients to ingredients found in the database; the analysis can then be calculated. Online nutrition analysis In recent years, web-based nutrition analysis software services have become more popular. Online nutrition analysis allows users to access online databases and draw from certified ingredients to produce instant nutrition information. Turnkey nutrition analysis services Another emerging trend is the use of nutritional analysis services that do a complete analysis of any recipe by using their proprietary database. Users provide recipes, cooking methods and serving sizes. In turn, the service provides a complete nutritional analysis. Applications In the United States, nutrition information is required on packaged retail foods in the form of nutrition facts panels as a result of food labeling regulations.[1] In recent years, many restaurants have begun posting nutrition information as a result of both customer demand and menu-labeling laws.[2] Nutrition facts label Main article: Nutrition facts label Menu-labeling The Patient Protection and Affordable Care Act, signed into law March 23, 2010, includes a provision that creates a national, uniform nutrition-disclosure standard for food service establishments. The nutrition-disclosure provision requires chain restaurants, similar retail food establishments and vending machines with 20 or more locations to provide specific nutrition labeling information. Those establishments must post calories on menus, menu boards and drive-thru boards. Buffets, salad bars and other self-service items are also included and will be required to provide caloric information adjacent to the item.[3] Recently many state and local menu-labeling laws have been passed requiring restaurants to post nutrition information on menus and menu boards, or have it readily available upon customer request.[4] Restaurants have had to perform nutrition analysis in order to generate nutrition information and conform to these laws. More recently national legislation has been introduced that would set a national standard for menu labeling, the most popular of which is the LEAN act."))},N=a(22),v=(a(35),function(e){var t=0,a="-",n="-",r="-",i="-",o="-",s="-",c="-",u="-",d="-",m="-",h="-",p="-",y="-",f="-",b="-",E="-",g="-",N="-",v="-",A="-",C="-",k="-",w="-",D="-",T="-";if(e.results&&!e.results.error){var S=e.results;return"undefined"!=typeof S.totalNutrients.ENERC_KCAL&&(t=Math.round(S.totalNutrients.ENERC_KCAL.quantity)),"undefined"!=typeof S.totalNutrients.FAT&&(a=Math.round(10*S.totalNutrients.FAT.quantity)/10+" "+S.totalNutrients.FAT.unit),"undefined"!=typeof S.totalDaily.FAT&&(n=Math.round(S.totalDaily.FAT.quantity)+" "+S.totalDaily.FAT.unit),"undefined"!=typeof S.totalNutrients.FASAT&&(r=Math.round(10*S.totalNutrients.FASAT.quantity)/10+" "+S.totalNutrients.FASAT.unit),"undefined"!=typeof S.totalDaily.FASAT&&(i=Math.round(S.totalDaily.FASAT.quantity)+" "+S.totalDaily.FASAT.unit),"undefined"!=typeof S.totalNutrients.FATRN&&(o=Math.round(10*S.totalNutrients.FATRN.quantity)/10+" "+S.totalNutrients.FATRN.unit),"undefined"!=typeof S.totalNutrients.CHOLE&&(s=Math.round(10*S.totalNutrients.CHOLE.quantity)/10+" "+S.totalNutrients.CHOLE.unit),"undefined"!=typeof S.totalDaily.CHOLE&&(c=Math.round(S.totalDaily.CHOLE.quantity)+" "+S.totalDaily.CHOLE.unit),"undefined"!=typeof S.totalNutrients.NA&&(u=Math.round(10*S.totalNutrients.NA.quantity)/10+" "+S.totalNutrients.NA.unit),"undefined"!=typeof S.totalDaily.NA&&(d=Math.round(S.totalDaily.NA.quantity)+" "+S.totalDaily.NA.unit),"undefined"!=typeof S.totalNutrients.CHOCDF&&(m=Math.round(10*S.totalNutrients.CHOCDF.quantity)/10+" "+S.totalNutrients.CHOCDF.unit),"undefined"!=typeof S.totalDaily.CHOCDF&&(h=Math.round(S.totalDaily.CHOCDF.quantity)+" "+S.totalDaily.CHOCDF.unit),"undefined"!=typeof S.totalNutrients.FIBTG&&(p=Math.round(10*S.totalNutrients.FIBTG.quantity)/10+" "+S.totalNutrients.FIBTG.unit),"undefined"!=typeof S.totalDaily.FIBTG&&(y=Math.round(S.totalDaily.FIBTG.quantity)+" "+S.totalDaily.FIBTG.unit),"undefined"!=typeof S.totalNutrients.SUGAR&&(f=Math.round(10*S.totalNutrients.SUGAR.quantity)/10+" "+S.totalNutrients.SUGAR.unit),"undefined"!=typeof S.totalNutrients.SUGARadded&&(b=Math.round(10*S.totalNutrients.SUGARadded.quantity)/10+" "+S.totalNutrients.SUGARadded.unit),"undefined"!=typeof S.totalNutrients.PROCNT&&(E=Math.round(10*S.totalNutrients.PROCNT.quantity)/10+" "+S.totalNutrients.PROCNT.unit),"undefined"!=typeof S.totalDaily.PROCNT&&(g=Math.round(S.totalDaily.PROCNT.quantity)+" "+S.totalDaily.PROCNT.unit),"undefined"!=typeof S.totalNutrients.VITD&&(N=Math.round(10*S.totalNutrients.VITD.quantity)/10+" "+S.totalNutrients.VITD.unit),"undefined"!=typeof S.totalDaily.VITD&&(v=Math.round(S.totalDaily.VITD.quantity)+" "+S.totalDaily.VITD.unit),"undefined"!=typeof S.totalNutrients.CA&&(A=Math.round(10*S.totalNutrients.CA.quantity)/10+" "+S.totalNutrients.CA.unit),"undefined"!=typeof S.totalDaily.CA&&(C=Math.round(S.totalDaily.CA.quantity)+" "+S.totalDaily.CA.unit),"undefined"!=typeof S.totalNutrients.FE&&(k=Math.round(10*S.totalNutrients.FE.quantity)/10+" "+S.totalNutrients.FE.unit),"undefined"!=typeof S.totalDaily.FE&&(w=Math.round(S.totalDaily.FE.quantity)+" "+S.totalDaily.FE.unit),"undefined"!=typeof S.totalNutrients.K&&(D=Math.round(10*S.totalNutrients.K.quantity)/10+" "+S.totalNutrients.K.unit),"undefined"!=typeof S.totalDaily.K&&(T=Math.round(S.totalDaily.K.quantity)+" "+S.totalDaily.K.unit),l.a.createElement("div",null,l.a.createElement("h2",null,"Nutrition Results"),l.a.createElement("table",{className:"performance-facts__table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"3",className:"amps"},"Amount Per Serving"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2",id:"lkcal-val-cal"},l.a.createElement("b",null,"Calories")),l.a.createElement("td",{className:"nob"},t)),l.a.createElement("tr",{className:"thick-row"},l.a.createElement("td",{colSpan:"3",className:"small-info"},l.a.createElement("b",null,"% Daily Value*"))),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},l.a.createElement("b",null,"Total Fat"),a),l.a.createElement("td",null,l.a.createElement("b",null,n))),l.a.createElement("tr",null,l.a.createElement("td",{className:"blank-cell"}),l.a.createElement("th",null,"Saturated Fat ",r),l.a.createElement("td",null,l.a.createElement("b",null,i))),l.a.createElement("tr",null,l.a.createElement("td",{className:"blank-cell"}),l.a.createElement("th",null,"Trans Fat ",o),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},l.a.createElement("b",null,"Cholesterol")," ",s),l.a.createElement("td",null,l.a.createElement("b",null,c))),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},l.a.createElement("b",null,"Sodium")," ",u),l.a.createElement("td",null,l.a.createElement("b",null,d))),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},l.a.createElement("b",null,"Total Carbohydrate")," ",m),l.a.createElement("td",null,l.a.createElement("b",null,h))),l.a.createElement("tr",null,l.a.createElement("td",{className:"blank-cell"}),l.a.createElement("th",null,"Dietary Fiber ",p),l.a.createElement("td",null,l.a.createElement("b",null,y))),l.a.createElement("tr",null,l.a.createElement("td",{className:"blank-cell"}),l.a.createElement("th",null,"Total Sugars ",f),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",{className:"blank-cell"}),l.a.createElement("th",null,"Includes ",b," Added Sugars"),l.a.createElement("td",null)),l.a.createElement("tr",{className:"thick-end"},l.a.createElement("th",{colSpan:"2"},l.a.createElement("b",null,"Protein")," ",E),l.a.createElement("td",null,l.a.createElement("b",null,g))))),l.a.createElement("table",{className:"performance-facts__table--grid"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Vitamin D ",N),l.a.createElement("td",null,l.a.createElement("b",null,v))),l.a.createElement("tr",null,l.a.createElement("th",null,"Calcium ",A),l.a.createElement("td",null,l.a.createElement("b",null,C))),l.a.createElement("tr",null,l.a.createElement("th",null,"Iron ",k),l.a.createElement("td",null,l.a.createElement("b",null,w))),l.a.createElement("tr",{className:"thin-end"},l.a.createElement("th",null,"Potassium ",D),l.a.createElement("td",null,l.a.createElement("b",null,T))))))}return e.results.error?l.a.createElement("h2",null,"Insufficient Data to Analyse"):""}),A=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(c.a)(i,2),u=o[0],d=o[1];Object(n.useEffect)((function(){}),[u]);var m=function(e){var t,n;return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return e.next=3,s.a.awrap(fetch("https://api.edamam.com/api/nutrition-details?app_id=".concat("eb911bf0","&app_key=").concat("cd8b3851268befcc06b280ac3008abb0"),{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify({ingr:a.split(/\n|\r/)})}));case 3:return t=e.sent,e.next=6,s.a.awrap(t.json());case 6:n=e.sent,d(n);case 8:case"end":return e.stop()}}))};return l.a.createElement("div",{className:"wrapperdiv"},l.a.createElement("div",{className:"ingredient-box"},l.a.createElement("h1",{style:{color:"orange"}},"Nutrition Analysis"),l.a.createElement("div",{className:"text-box"},l.a.createElement("p",null,"Enter an ingredient list list for what you are cooking, like",l.a.createElement("span",{className:"example"},l.a.createElement("b",null,' "1 cup rice, 10 oz chickpeas" '))," etc.",l.a.createElement("p",{style:{fontSize:"small"}},"Enter each ingredient with quantity on a new line.")),l.a.createElement("p",null,l.a.createElement("textarea",{name:"",id:"demoAnalysis",cols:"60",rows:"15",value:a,onChange:function(e){r(e.target.value)},className:"form-control",spellCheck:"true"},"1 cup rice,10 oz chickpeas")),l.a.createElement("p",null,l.a.createElement("button",Object(N.a)({onClick:m,type:"button",className:"calc-analysis-api"},"onClick",m),"Analyze"))),l.a.createElement("div",{className:"result-box"},l.a.createElement(v,{results:u}))))},C=function(){return l.a.createElement("h1",null,"Contact Us")},k=function(){return l.a.createElement("h1",null,"Page Not found ",l.a.createElement("p",null,"(Error 404)"))},w=function(){return l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/",component:h}),l.a.createElement(y.a,{path:"/home",component:h}),l.a.createElement(y.a,{path:"/about",component:g}),l.a.createElement(y.a,{path:"/services",component:A}),l.a.createElement(y.a,{path:"/contactus",component:C}),l.a.createElement(y.a,{component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.601f9885.chunk.js.map