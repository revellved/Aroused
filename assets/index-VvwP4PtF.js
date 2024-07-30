var zt=Object.defineProperty;var Xt=(i,s,e)=>s in i?zt(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e;var t=(i,s,e)=>Xt(i,typeof s!="symbol"?s+"":s,e);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function e(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(o){if(o.ep)return;o.ep=!0;const d=e(o);fetch(o.href,d)}})();function Ht(i){return typeof i=="function"?i():i}function*Ft(i,s){for(let e=i;e<=s;e++)yield e}function*Rt(i,s=1){if(s>0)for(let e=0;e<s;e++)yield i(e);else if(s<0)for(let e=0;e>s;e--)yield i(e)}class w{}t(w,"Funcfi",Ht),t(w,"Timesi",Rt),t(w,"Listsi",Ft);let at=[];function O(i=0,s=9){return Math.round(Math.random()*(s-i))+i}function r(i,s=0,e=-1){return i?i[O(s,e>=i.length||e===-1?i.length-1:e)]:null}function qt(i=6,s=!0,e=!0,n){for(;!n||s&&at.indexOf(n)!==-1;)n=[...Rt(()=>`${O()}`,i)].reduce((o,d)=>o+d);return e&&at.push(n),n}class P{}t(P,"Erandi",r),t(P,"Nrandi",O);const Z=document.documentElement,B=document.createElement("div"),ht=document.createElement("span"),ut=document.createElement("a"),dt=document.createElement("p"),lt=document.createElement("h1"),St=document.createElement("h2"),Tt=document.createElement("h3"),mt=document.createElement("h4"),ft=document.createElement("h5");function Zt(i="div"){return document.createElement(i)}function Qt(i){return document.getElementById(i)||B}function Q(i,s=Z){return s.getAttribute(i)||""}function Lt(i,s,e=Z){return e.setAttribute(i,s),Q(i)}function wt(){return Q("data-theme")||""}function Jt(){return Lt("data-theme",wt()==="dark"?"light":"dark")}class a{}t(a,"DOC",Z),t(a,"DIV",B),t(a,"SPAN",ht),t(a,"ANCHOR",ut),t(a,"PARAGPH",dt),t(a,"HEADING1",lt),t(a,"HEADING2",St),t(a,"HEADING3",Tt),t(a,"HEADING4",mt),t(a,"HEADING5",ft),t(a,"D",B),t(a,"S",ht),t(a,"A",ut),t(a,"P",dt),t(a,"H1",lt),t(a,"H2",St),t(a,"H3",Tt),t(a,"H4",mt),t(a,"H5",ft),t(a,"El",Zt),t(a,"Id",Qt),t(a,"GetAttr",Q),t(a,"SetAttr",Lt),t(a,"GetTheme",wt),t(a,"ToggleTheme",Jt);let R=0,yt;function Y(i){return R=i[R]===yt&&R+1<i.length?R+1:0,yt=i[R]}function J(i,s){for(let e in i){const n=i[e];s(e,n,i)}}function M(i,s,e){return J(i,(n,o)=>s=e(s,n,o)),s}function te(i){return M(i,{},(s,e,n)=>(s[n]||(s[n]=0),s[n]++,s))}function Pt(i){return M(i,[],(s,e,n)=>s.length===0?n:s.flatMap(o=>n.flatMap(d=>o+d)))}function ee(i){return M(i,[null,null],(n,o,d)=>n[1]<d?[o,d]:n)}function k(i,s,e){return s[i.indexOf(e)]||e}function se(i,s,e,n=-1){return n=n===-1?e:n,i.slice(0,e)+s+i.slice(n,i.length)}function Nt(i,s=" ",e=""){return i.map(n=>e+(typeof n=="function"?n():n)).join(s)}function kt(i,s=-1){(s>=i.length||s<0)&&(s=i.length);let e,n=[];for(i=i.concat();n.length<s;){do e=O(0,i.length);while(i[e]===void 0);n.push(i[e]),delete i[e]}return n}function*ie(i){for(let s in i)yield s}class S{}t(S,"Amemsi",Y),t(S,"Combti",Pt),t(S,"Counti",te),t(S,"Fjoini",Nt),t(S,"Forchi",J),t(S,"Inceri",se),t(S,"Mmmaxi",ee),t(S,"Mrandi",kt),t(S,"Reduci",M),t(S,"Swithi",k),t(S,"Rkeysi",ie);const xt="`qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?".split(""),bt="ёйцукенгшщзхъфывапролджэячсмитьбю.ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,".split(""),tt="йцякенгхзъфвапролджэясмитьбюЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ".split(""),et="qwykenghzbfvaproldjaycmitbbuEQCYKENGHHZHBFAVAPROLDJAICCMITBBU".split(""),Ut={donut:"донат",ruby:"руби",anna:"анна",dark:"дарк",hima:"хима",kate:"кейт",lucy:"люси",lzzy:"лизи",mini:"мини",nika:"ника",poly:"поля",vika:"вика"};function ne(i){return i.split(" ").filter(s=>s!=="").join(" ")}function N(i){return i&&i[0].toUpperCase()+i.slice(1).toLowerCase()||""}function re(i,s=". "){return i.split(s).map(e=>N(e)).join(s)}function oe(i){return i=M(Ut,i,(s,e,n)=>s.indexOf(n)!==-1?s.replaceAll(n,e):s),i.split("").map(s=>k(tt,et,s)).join("")}function U(i){return i=M(Ut,i,(s,e,n)=>s.indexOf(e)!==-1?s.replaceAll(e,n):s),i.split("").map(s=>k(et,tt,s)).join("")}function pt(i){return M(i,"",(s,e,n)=>s+k(bt,xt,n))}function ce(i){return M(i,"",(s,e,n)=>s+k(xt,bt,n))}function ae(i){return tt.indexOf(i)!==-1}function Gt(i){return et.indexOf(i)!==-1}class m{}t(m,"Inengi",Gt),t(m,"Inlati",ae),t(m,"Latini",ce),t(m,"Latisi",U),t(m,"Normli",re),t(m,"Qwerti",pt),t(m,"Tittli",N),t(m,"Transi",oe),t(m,"Trimsi",ne);class l{}t(l,"Mainsi",w),t(l,"Randsi",P),t(l,"Itersi",S),t(l,"Langsi",m),t(l,"Funcfi",w.Funcfi),t(l,"Erandi",P.Erandi),t(l,"Nrandi",P.Nrandi),t(l,"amemsi",S.Amemsi),t(l,"Combti",S.Combti),t(l,"Counti",S.Counti),t(l,"Fjoini",S.Fjoini),t(l,"Forchi",S.Forchi),t(l,"Inceri",S.Inceri),t(l,"Mmmaxi",S.Mmmaxi),t(l,"Mrandi",S.Mrandi),t(l,"Reduce",S.Reduci),t(l,"Reduci",S.Reduci),t(l,"Swithi",S.Swithi),t(l,"Inengi",m.Inengi),t(l,"Inlati",m.Inlati),t(l,"Latini",m.Latini),t(l,"Latisi",m.Latisi),t(l,"Normli",m.Normli),t(l,"Qwerti",m.Qwerti),t(l,"Tittli",m.Tittli),t(l,"Transi",m.Transi),t(l,"Trimsi",m.Trimsi);class Kt{}t(Kt,"META_NAME_CLASS");const u=class u extends Kt{};t(u,"DEV","development"),t(u,"PROD","production"),t(u,"NVER","no version"),t(u,"EMPTY","empty"),t(u,"CURSOR_HTAG","<span class='aroused__cursor'></span>"),t(u,"CURSOR_CODE","&787526"),t(u,"OPTS_DELIMS",";"),t(u,"OPTS_SYMBOL","%"),t(u,"SPARKS_CMD",";) "),t(u,"LS_DOCTWERK","doc-twerk-dead"),t(u,"LS_CURS","aroused-cursor"),t(u,"LS_TEXT","aroused-screen-text"),t(u,"ID_SCREEN","elArousedScreen"),t(u,"ID_TITTLE","elArousedTittle"),t(u,"ID_AUTHOR","elArousedAuthor"),t(u,"ID_SAVING","elArousedSaving"),t(u,"ID_TOGGLE","elToggleTheme"),t(u,"IAuthor","Revellved"),t(u,"OurMail","revellved@gmail.com"),t(u,"AppName","Aroused"),t(u,"Slogans","Your Personal Muse and Creative Table for Inspiration"),t(u,"ArousedTitle","Я сегодня слишком Aroused"),t(u,"ListProducts","Список покупок: печенье, кетчуп, резиновый фаллос"),t(u,"ShouldntShow",`Ты не должен это видеть! Если видишь, то пиши на почту: ${u.OurMail}`),t(u,"DocTwerkWarning",`
! Будешь ещё трясти?`),t(u,"DocHelp",s=>["",`! Aroused is ${u.Slogans}`,"---","Хэй! Я Док «Not Blank Papper» и я ненавижу чистые листы. Кстати, как насчёт того, чтобы пописать?",`- ${s}.`,`/" этот текст исчезает при вводе любого символа (кроме «${u.OPTS_SYMBOL}») `].join(`
`)),t(u,"ArousedHelp",["!! Aroused | Ликбез","1. Ты можешь использовать специальные символы в начале строки для форматирования как в Markdown.","   Только это не Markdown, это SlavaRight! и он отлично адаптирован под русскую раскладку клавиатуры. Смотри сам.","* Используй ! для заголовков;",'* Используй " для цитат и "" для цитат с отступом;',"* Используй - и * для ненумерованных списков (отличаются отступом);","* Используй . и , для нумерованных списков (отличаются отступом);","* Используй Aroused с наслаждением.",'Перемещайся по тексту используя "⬅️⬇️⬆️➡️" или "hjkl" (с зажатым Control) как в священом Виме, но без режимов','"" плюс тебе не нужно переключать раскладку, можешь использовать "ролд"'].join(`
`)),t(u,"ArrSparksMessages",["Слушаю тебя","Да да","Тута я, что у тебя","Блин, даже ногти докрасить не дают, ну зачем пожаловал"]),t(u,"RecThemes",{ruby:"ruby",anna:"anna",dark:"dark",lzzy:"lzzy",hima:"hima",kate:"kate",mini:"mini",nika:"nika",poly:"poly",vika:"vika",lucy:"lucy"});let z=u;const T=z,he="Aroused",ue="0.0.29",de="Ruslan D. Revellved (https://revellved.github.io)",le="module",Se="index.html",Te={dev:"vite",preview:"vite preview","build-unsafe":"vite build",build:"vue-tsc -b && vite build","vue-check":"vue-tsc -b","ts-check":"tsc -b",check:"npm run ts-check && npm run vue-check","git-source-update":`git add . && git commit -m "(AROUSED-SOURCES) 🍩 UPDATE 
$(git status -s)" && git push`,"git-dist-update":`cd dist && git add . && git commit -m "(AROUSED) 🍩 UPDATE 
$(git status -s)" && git push`,"git-update":"npm run git-source-update && npm run git-dist-update",prod:"npm run build && npm run git-update"},me={vue:"^3.4.21"},fe={"@types/node":"^20.14.12","@vitejs/plugin-vue":"^5.0.4",sass:"^1.75.0","selenium-webdriver":"^4.23.0","ts-node":"^10.9.2",typescript:"^5.5.2",vite:"^5.2.0","vite-plugin-terminal":"^1.2.0","vue-tsc":"^2.0.28"},ye={name:he,private:!0,version:ue,author:de,type:le,main:Se,scripts:Te,dependencies:me,devDependencies:fe},c=class c{constructor(){}static CleanUpLS(){localStorage.setItem(this.LS_CURS,""),localStorage.setItem(this.LS_TEXT,"")}static CleanUpDev(){this.DevMsg=this.DEV_MSG_DEFAULT}static CleanUpAll(){this.CleanUpDev(),this.CleanUpLS()}};t(c,"VER",ye.version),t(c,"ENV","production"),t(c,"DEV",c.ENV===T.DEV),t(c,"DEV_MSG_DEFAULT",[`${c.ENV} ${c.VER}`,T.ListProducts,T.ShouldntShow]),t(c,"SAVETEXT_BACKUP",!c.DEV),t(c,"REFRESH_CLEANUP",!0),t(c,"SLOGAN_TEXT",T.Slogans),t(c,"TITTLE_TEXT",T.ArousedTitle),t(c,"CURSOR_HTAG",T.CURSOR_HTAG),t(c,"CURSOR_CODE",T.CURSOR_CODE),t(c,"OPTS_DELIMS",T.OPTS_DELIMS),t(c,"OPTS_SYMBOL",T.OPTS_SYMBOL),t(c,"OPTS_SYMLEN",c.OPTS_SYMBOL.length),t(c,"HISTORYSIZE",1e3),t(c,"HISTMINSTEP",7),t(c,"ATTRS_EMPTY",T.EMPTY),t(c,"LS_DOCTWERK","doc-twerk-dead"),t(c,"LS_CURS","aroused-cursor"),t(c,"LS_TEXT","aroused-screen-text"),t(c,"SPARKS_WORK",!1),t(c,"SPARKS_CMD",T.SPARKS_CMD),t(c,"SPARKS_LEN",c.SPARKS_CMD.length),t(c,"SPARKS_MSG",""),t(c,"SPARKS_MSGS",T.ArrSparksMessages),t(c,"COMMAND_SPEC",":"),t(c,"COMMAND_SPEC_LEN",c.COMMAND_SPEC.length),t(c,"THEMES",["ruby","anna","dark","lzzy","hima","kate","mini","nika","poly","vika","lucy"]),t(c,"DOC_TWERK_DICT",{50:"Хватит трясти старика",70:"Я тебе что сказал!",100:"Всё хана тебе!!!"}),t(c,"DevMsg",c.DEV_MSG_DEFAULT),t(c,"FStack",[]),t(c,"TextsContent",[""]);let A=c;const I=class I extends A{static GiveMePerson(){return h()}static GiveMeLines(s){return kt(this.recomendationsList,s)}static GiveMeLine(){return I.GiveMeLines(1)[0]()}static GiveMeList(s){return Nt(I.GiveMeLines(s),`;
- `)}static GiveMeText(s=!0,e=3){return localStorage.getItem(T.LS_DOCTWERK)==="true"&&(this.saveMeTexts=T.DocTwerkWarning),(s||!this.saveMeTexts)&&(this.saveMeTexts=T.DocHelp(I.GiveMeList(e))+`
`+T.ArousedHelp),this.saveMeTexts}};t(I,"saveMeTexts",""),t(I,"recomendationsList",[()=>`${N($e())}. ${Ce()}`,()=>`${b()} об Aroused т.к самому автору лень`,()=>`${r([b(),"Дорожные правила"])} для ${He()} ${h()}ов`,()=>`Ещё одну строчку для Доктора «Doс Blank Papper». Как говорит сам Док: «${ge()}»`,()=>"Завлекающий текст для рекламы прокладок, чтобы ваши трубы не протекали",()=>`Записку на WikiHow о том как правильно ${Mt()} всего за ${O(1,20)} шагов`,()=>`О ${h()}е, который говорит «${It()}», когда у него ${Dt()}`,()=>`${b()} раскрывающий правду о ${At()}ах`,()=>`Рецепт ${E()} если ты на ${p()} в услоиях ${Ct()}`,()=>`План ${We()} если ты ${At()}`,()=>`Историю о том как ${h()} подглядывал за ${h()}ом, когда тот смотрел «${L()}»`,()=>`Письмо с ${_e()} ${h()}у из ${it()}, которое начинается со слов «${N(It())}»`,()=>`Варианты нового нейминга для ${F()} «${L()}» ${$t()}`,()=>`Выскопроизводительный код на ${Oe()} для ${r([vt(),h()])}а`,()=>`Выскопроизводительный код на Python для работы важной части МКС ${$t()}`,()=>`Высокоинтелектульный рэп в стиле «${jt()}»`,()=>`Гневный коментарий под ${De()} ${h()}а, потому-что ${Re()}`,()=>`Подробный декодинг фильма «${L()}» на ${O(10,50)}${r([0,O(5,9)])} страниц`,()=>`${b()}, где ${Et()} окажется ${h()}ом твоего ${h()}а, которому мерещится ${j()}`,()=>`Завлекающий текст для рекламы ${E()}`,()=>`Инструкции по использованию ${vt()}а, которую никто не будет читать`,()=>`Инструкцию по использованию ${E()} в условиях ${Ct()}`,()=>`Концертную программу для ${r(["зверей (не группа «Звери»)",W()])}`,()=>`${N(X())} ${h()}а нуждается в манящем описании для «${Ve()}». Займёшься этим?`,()=>`Меню вашего пристижного заведения, что расположенно на ${p()}`,()=>`Надпись на этикетку ${E()}`,()=>`О своей первой любви ${Ue()} по имени ${j()}, с которой ты познакомились в ${pe()}`,()=>`О ${Wt()} по имени ${st()}`,()=>`О том как правильно ${Mt()}`,()=>`Об очень интересном производителе ${E()}`,()=>`Имена тех, кого ты ${V()} ${xe()}`,()=>`Об очень интересном производителе ${E()}, владелец которого к тому же ${h()}`,()=>`Объяснительную  для магазина «${Ke()}» насчёт того куда подевалось ${Ot()}`,()=>`Описание концепта арт-альбома к новому релизу группы ${W()}`,()=>"Очень большой список литературы на лето (спициально для злых учителей)",()=>`Развёрнутый ответ ${h()}у, который тебе прислал ${Pe()}`,()=>`Рассказ повествующий о ${h()}е, что скрывается от ${h()}а ${h()}а`,()=>"Резюме в компанию HeadHunter (боюсь представить как они нанимают сотрудников)",()=>`Резюме в компанию ${F()}`,()=>`Стихи для ${r(["мамы",`мамочки ${ve()} ${h()}а`,`${h()}а`])}`,()=>`Сценарий ${Me()} фильма, что ${je()} «${L()}»`,()=>`Текст ${Le()}`,()=>`Программу выступления для ${r([W(),h()+"а"])}`,()=>"Текст лецензии свободного программного обеспечения",()=>`То самое сообщение ${h()}у с возмущением по поводу ${Be()}`,()=>`То самое сообщение ${h()}у с разъеснением, почему вам надо расстаться`,()=>`О том как ${h()} ${gt()} попытки стать ${Et()} на ${p()}`,()=>`Ты знаешь что нужно написать${r([", "+r([j(),h()]),""])}`,()=>`О том чтобы ты ${gt()}, если у тебя: ${Dt()}`,()=>`Поэму о ${h()}е, который украл ${Ot()} у ${h()}а`,()=>"Эй, ты вообще читаешь это текст? Я для кого распинаюсь",()=>"Неважно какая долгая предстоит дорога. Главное выходя не забудь сохранить свой текст нажав Ctrl+S",()=>`А знаешь где самые масштабные многопользоватильские онлайн бои? Конечно же в Aroused, просто введи «${I.COMMAND_SPEC}startgame» и нажми enter`]);let K=I;const $e=()=>r(["Bruh!..","Хьььь-я","Эх","Хррп-хрппп... Аа.. Что?"]),Ce=()=>r(["Якорь мне в стол","Юнга неси ручку","Когда-то и меня вели тетради приключений","Я тебе покажу Музькину мать"]),ge=()=>r(["Ещё по одной!","То что Доктор прописал","О, да у вас нехватка мотивации в крови","Если тебе плеют в спину","Сделал дело гуляй с мелом","Работа не волк, волк — это ходить","Знаешь солнечнозащитные очки? Я их защитил"]),$t=()=>r(["(это шутка)","(я не шучу)","(эх жаль)","(я ничего об этом не знаю)"]),Ct=()=>r(["крайней жары","дождя","пустыни","крайнего севера","дедлайна","повышеной кислотности","заморозков","полного упадка сил","обезвоживания","потери веса"]),De=()=>r([`видео на обзор «${L()}»`,`фото с ${h()}ом`,`постом с рецептом ${E()}`]),Ee=()=>r(["старого переносного","нового крутого","убийственного","заляпанного","дикого (как Юрский Период)","бабушкинного","присловутого"]),Me=()=>r(["комедийного","ужасного","драматического"]),Ie=()=>r(["граммов","кило","тонны"]),Oe=()=>r(["Rust","C/C++","Fortran","Java","JavaScript","TypeScript","Ruby (кстати любимый язык моей дочери)","Kotlin","Prolog","Haskell","Haskell","Brainfuck","1С","C","C++","Go","Lisp","пхп",""]),Vt=()=>r(["DVD-плеер","холодильник","космолёт","телевизор","ноутбук","магнитофон"]),gt=()=>r(["делал","сделал","предпринял"]),ve=()=>r(["плохого","хорошего","забавного","странного","красивого","лучшего"]),V=()=>r(Pt([["не "," "],["","прям "],["весьма","очень","очень"],[" даже",""]])),Ae=()=>r(["плохая","хорошая","забавная","странная","красивая"].concat(V())),He=()=>r(["агресивных","добродушных","одиозных","грязных"]),Re=()=>r(["тебя не дарит вниманием",`у тебя ${_t()} день`,"просто так",`он твой ${st()}`]),_t=()=>r(["плохой","хороший","забавный","странный","красивый","лучший","пожилой","винценосный","убийственный"]),Le=()=>r([`идущего к ${Ge()}`,`диктатора ${F()}`]),we=()=>r([`нападение ${h()}ов`,"всемирный потоп",`уничтожение ${Wt()}ов`]),Pe=()=>r([`${V()} ${_t()} мем`,`картинку ${E()}`,`доставку еды из ${r([it(),`заведения на ${p()}`])}`]),b=()=>r(["Статью","Сообщение","Текст","Детективный роман","Рассказ","Притчу"]),Ne=()=>r(["ночью","утром","между обедом и ужином","всегда","когда не надо",`когда происходит ${we}`]),ke=()=>r(["играют в футбол","смеются над прохожими",`крехтят ${Ne()}`,`ловят ${h()}ов`]),xe=()=>r(["любишь","ненавидишь","презераешь","раздражаешь","поддерживаешь"]),st=()=>r(["Тайлер Дёрден","Мишаня","Кончита","Боря","Вовыч","Борат","Богдан","Олег Олегович","Тони","Винсент","Ван-Гог","Майкл Киттон","Джо Блэк","Луи Блум","Хантер Томпсон","Борис Анатолич","Генадий Горин","Денис Мучитель","Донни Дарко","Ктулху","Бронетраспортёр потёмкин","Эди Мёрфи","Масяня"]),be=()=>r(["Леди Гага","Маша","Даша","Саша Дрей","Малинка","Алина","Катя из соседнего подъезда","Катя Самбука","Анастасия Самбурская","Ксения Собчак","Ольга Павловна","Зенаида Петровная","Алиса","Маня","Ева","Марь Ивановна","Ксюша","солистка группы Мираж","Хэлоу Китти","Каталина","киска","блудница","расхитительница гробниц"]),Wt=()=>r(["морской свинье","зебре","носороге","мартыхе","иноплнетном чудовище","стиче","лисе","чеширском мануле","малюске","Насти Рыбке","колобке",""]),h=()=>r(["кумир","вампир","призидент","садовник","сосед","самокатчик","бомж","Хесус","морж","друг","враг","дурак","инопланетянин","Ван-Гог","Майкл","Борат","паровозик","монополист","стоматолог","врач","хомяк","суслик","павлин","киллер","повар","хозяин","барин","матадор","полиcмен","маг","беларус","монстр","шиномонтажник","кучер","Бог","алкоголик","контрибътор","Тор","Винсент","Борис","Ленин","Томас","Дорн","Богдан","охотник"," Revellved","одноклаcсник","кролик","пингвин","рокер","винценосный художник"].concat(jt())),Dt=()=>r([`${X()} в туалете`,`${h()}ы на чердаке`,`${X()} на газе`,`появляется девушка-${h()}, но ${V()} ${Ae()}`,`соседи, которые ${ke()}`,`просыпается ${h()}`]),Ue=()=>r(["из паралейного класса","с одного района","с одного полка","из разных концов света","с одного дома"]),pe=()=>r([`школе для ${h()}ов`,"армейской столовой","собачем приюте","спецприёмнике","Африке","Беверли Хилз"]),it=()=>r(["Чехословакии","России","Америки","Бангладеша","Египта","Мальдив","Сочи","Москвы","Санкт-Петербурга","Нью-Йорка","Боливии","Беларусии","Гималай","Урала","Люберцев","Турции","Шоушенка","Африки"]),p=()=>r(["вокзале",`площади ${h()}а`,"Марсе","47 этаже Высоцкого","Васильском острове","Плутоне","другом конце Галактики","Каилиманджаро","стене"]),Ge=()=>r(["реке","стене","вулкану",`Балканскому острову, что подвергся атаки ${h()}`]),X=()=>r(["Жигули с обвесами","баклажановая Лада Седан","Эскорт Форд","хорошенький Митсубиси","сердцу дорогая Копейка","Ласточка","какой-то японец","машина времени","спорткар","та самая мазда из Underground 2","та самая BMV из Most Wanted","битая Семёрка","паравоз","катапульта","танк из дуло которого вылазят цветы"]),Ke=()=>r(["МБ","Чёрное&Красное","Чистый секонд","Магнитное поле","Бабушкины радости","Аргонианская дева","В копеичку","Туалетные утята","Катапульты по акции","Радиоприёмник (и не только приёмник)","Норка под шубой","У нас есть всё","FixSpice","ИГЕЯ"]),E=()=>r(["элитного алкоголя","чёрных бананов","долготающего мороженого","освежителя воздуха","спёртого воздуха","творжных сырков","продукции простоквашино","брюссельской капусты","себирской пиццы","стеклянных кеглей","бумажных салфеток","подсолнечного масло","перепелинных яиц","радио-машинок","канделябров","постиранных занавесок","футболок с Баксом Банни","квадртных шаров для боулинга","котлеток с пюрешкой","баскетбольных сеток","этих, как их...","сгущенки по акции","элитных ёршиков","кабриолета","замороженных блинчиков"]),Et=()=>r(["убийцей","певцом","отравителем","главным злодеем","стендапером","автомабилистом","таксистом","обувным магазином","колясочником","унитазом","мимом","хорошим человеком","мореплавателем","хокеистом","атеистом","верующим","философом","городничим","машинистом поезда","авиатраcнпортом","поталогаанатом","ковобоем","Киану Ривзом","лучше себя вчерашнего"]),Ve=()=>r(["Абито","ХаХа.ru","Драм","ДомОнКлик","ЯнИндекс & ЯньПандекс","Mail.fu","Гулгел","АлиЭкспрессо"]),W=()=>r(["Звери","Disturbed","Metallica","Element Eighty","Пионерлагерь Пыльная Радуга","Megadedth","Rob Zombie","Marilyn Manson","The Pretty Reckless","Halestorm","Nine Ich Nails","Ramstein","SOiL","The Massive Attack","Thirty Second To Mars","Metric","CoЯn","SKYND","Maneskin","Ozzy Osborne","из Японии"]),jt=()=>r(["Платина","Oxxxymiron","Слава КПСС","Замай","Obladaet","Kendric Lamar","Tyler The Creator","Emminem","Notorius B.I.G","Palmdropov","Rickey F","Alphavite","Руслан СМН","Murda Killa","Овсянкин","ViTAMiN","Жека Расту","Pra (killa'gramm)","Кто ТАМ?","ATL","Серёжа Местный","Гамора","ЛСП","Noize.MC","Джизус","Kanye West","NF","Yanix"]),L=()=>r(["Чужие","Хэнкок","Человек-муравей","Донни Дарко","Челюсти 3D","Матрица","Не грози южному централу, попивая сок у себя в квартале","Человек-невидмка","Всё для Евы","Бёрдмен","Американские животные","Маленький помощник Сатаны","Гражданин Кейн","Апокалипсис сегодня","Стрингер","Король комедии","Таксист","Джокер","Галгофа","Страсти христовы","Пленицы","Дорогой Винсент","Вечное сияние чистого разума","Душа","Криминальное Чтиво","Место под соснами","Антихрист","Дом, который построил Джек","Хостел","Пила","Денис Мучитель","Трудный ребёнок","Маяк","Лекарство от здоровья","Тетрадь смерти","Крёстный отец","Лицо с шрамом","Каспер","Даша путешественница в кино","По ту сторону чёрной радуги","Маяк","Начало","Довод"]),Mt=()=>r(["топить щенков","красить кросовки губной помадой","вкрутить лампочку","плясать под дудку","кричать на кактус","молиться господу","входить в автобус","пропускать левый похороный","есть поп-корн в кино"]),It=()=>r(["но это уже совсем другая история","нихера ты баклажан","я всё это хаваю у меня нет выбора","мох","на этом наши полномочия всё","минут пять... десять... пятого","ломай меня полностью","я могу присесть 500 раз","сколько ты зарабатываешь","Медведь сел в машину и сгорел","чем помочь?","опять это секс инструктор из НАТО","15 см — это очень мало","с вами Юрий Хованский","дорогой чех","это ты украл мою жену?","хватит притворяться","как дела?","а ты всё также встаёшь по утрам","ну как прошла оперция","долар по пятнадцать рублей"]),j=()=>r([st(),be()]),Ot=()=>`${O(1,5)} ${Ie()} ${E()}`,vt=()=>`${Ee()} ${Vt()}`,At=()=>r([Vt(),h()]),_e=()=>r(["благодарностью","возмущением","подарком","просьбой"]),We=()=>r(["правильного питания","по захвату вселенной",`побега из ${it()}`]),F=()=>r(["стомотолигечкой клиники","кошачего приюта","издательского агенства"]),je=()=>r(["пародирует клише из","копирует стиль","пытается быть похожим на","точь в точь","вдохновлён","будет лучше чем"]),Be=()=>r(["расстования","убийства","молитвы","хомяка, что утонул в нефти"]);class Ye extends A{constructor(){super();t(this,"Static",A);t(this,"Doctor",K);t(this,"Elemsi",a);t(this,"Funcsi",l);t(this,"TextChange",!0);t(this,"SaveText",this.Static.SAVETEXT_BACKUP);t(this,"CursorLS",localStorage.getItem(this.Static.LS_CURS)||"");t(this,"BackupLS",localStorage.getItem(this.Static.LS_TEXT)||"");t(this,"Number",0);t(this,"TabMax",3);t(this,"CurMin",0);t(this,"Cursor",Number(this.SaveText&&this.CursorLS||0));t(this,"TTLMax",this.Static.TITTLE_TEXT.length);t(this,"ArousedScreen",a.Id(T.ID_SCREEN)||a.DIV);t(this,"ArousedTittle",a.Id(T.ID_TITTLE)||a.DIV);t(this,"ArousedAuthor",a.Id(T.ID_AUTHOR)||a.DIV);t(this,"ArousedSaving",a.Id(T.ID_SAVING)||a.SPAN);t(this,"elToggleTheme",a.Id(T.ID_TOGGLE)||a.SPAN);t(this,"ArousedDownld",a.ANCHOR);t(this,"AuthourName",T.IAuthor);t(this,"ArousedName",T.AppName);t(this,"TextContent",this.SaveText&&this.BackupLS||this.ArousedScreen.innerHTML);t(this,"CountSymbol",0);t(this,"TwerksCount",0);t(this,"HistoryIndx",0);t(this,"HistoryEnds",0);t(this,"HistoryStep",0);t(this,"HistoryMove",!1);t(this,"HistoryText",[this.TextContent]);t(this,"HistoryCurs",[this.Cursor]);t(this,"Placeholder",this.Doctor.GiveMeText||"");this.ArousedScreen.focus()}}class ze extends Ye{constructor(){super(...arguments);t(this,"prettyDevs",()=>this.Funcsi.Fjoini(this.Static.DevMsg.filter(e=>e),"</p>",'<p class="dev-msg" spellcheck="false">')+"</p>");t(this,"getDevMsgs",()=>this.Static.DEV?this.prettyDevs():"");t(this,"Lines",()=>this.TextContent.split(`
`));t(this,"PrevText",()=>this.TextContent.slice(this.CurMin,this.Cursor).split("").reverse());t(this,"StartLine",()=>this.PrevText().indexOf(`
`));t(this,"IsSparksLine",e=>e.toLowerCase().startsWith(this.Static.SPARKS_CMD))}async addCursor(e=1){this.setCursor(this.Cursor+e)}async subCursor(e=1){this.setCursor(this.Cursor-e)}async setCursor(e){e=Math.max(this.CurMin,Math.min(e,this.TextContent.length)),this.Cursor=e,this.TextChange=!0}async TextIncerti(e,n,o=-1){o=o===-1?n:o,this.TextContent=this.Funcsi.Inceri(this.TextContent,e,n,o),this.Static.TextsContent[this.Number]=this.TextContent}AddHistoryI(){this.HistoryIndx=this.HistoryIndx<this.Static.HISTORYSIZE?this.HistoryIndx+1:0}SubHistoryI(){this.HistoryIndx=this.HistoryIndx>=0?this.HistoryIndx-1:this.Static.HISTORYSIZE}SaveHistory(){this.HistoryEnds=this.HistoryIndx+1,this.HistoryText[this.HistoryIndx]=this.TextContent,this.HistoryCurs[this.HistoryIndx]=this.Cursor}fromHistory(){this.HistoryMove=!0,this.TextContent=this.HistoryText[this.HistoryIndx],this.Cursor=this.HistoryCurs[this.HistoryIndx]}PushHistory(){if(this.HistoryStep>0){this.HistoryStep-=1;return}else this.HistoryStep=Math.min(this.Static.HISTMINSTEP,Math.round(this.Cursor/5));this.AddHistoryI(),this.SaveHistory()}UndoHistory(){if(this.HistoryText[this.HistoryIndx-1]===void 0||this.HistoryIndx-1===this.HistoryEnds){this.TextChange=!1;return}this.SubHistoryI(),this.fromHistory()}RedoHistory(){if(this.HistoryText[this.HistoryIndx+1]===void 0||this.HistoryIndx+1===this.HistoryEnds){this.TextChange=!1;return}this.AddHistoryI(),this.fromHistory()}async AddSymbol(e){const n=e.length;this.CountSymbol+=n,this.TextIncerti(e,this.Cursor),this.addCursor(n)}async DelSymbol(e){if(this.Cursor===this.CurMin){this.Static.DOC_TWERK_DICT[this.TwerksCount]&&alert(this.Static.DOC_TWERK_DICT[this.TwerksCount]),this.TwerksCount===100&&(localStorage.setItem(this.Static.LS_DOCTWERK,"true"),this.ArousedScreen.setAttribute("dead","true")),this.TwerksCount+=1;return}this.TwerksCount=0,e===-1&&(e=this.Cursor),this.CountSymbol-=e,this.TextIncerti("",this.Cursor-e,this.Cursor),this.subCursor(e)}DelWord(){const e=this.PrevText(),n=e.indexOf(" ",1),o=e.indexOf(`
`)||1;this.DelSymbol(Math.max(1,Math.min(n,o===-1?n:o)))}setTitle(e){this.ArousedName=e.slice(0,this.TTLMax),this.ArousedTittle.innerText=this.ArousedName,document.title=this.ArousedName||"Aroused"}Download(){const e=new Blob(this.Static.TextsContent,{type:"application/json"});this.ArousedDownld.href=URL.createObjectURL(e),this.ArousedDownld.download=`${this.ArousedName}.md`,this.ArousedDownld.click()}ToggleSpellcheck(){this.TextChange=!1,this.ArousedScreen.spellcheck=!this.ArousedScreen.spellcheck}}class G extends A{static Formatter(s,e,n,o=this.SLAVARIGHT_TO_HTML_DICT){const d=n[e+1]||"",f=n[e-1]||"";f===""?this.countSyms=0:this.countSyms+=f.length;for(let y in o){if(y.startsWith("@$")&&s===y.slice(2))return o[y];if(s.startsWith(y)){let $=(o[y]||"").split(" "),g=["","",""],C=$.shift()||"",x=`prevCountSyms="${this.countSyms}"`;return $=$.join(" ")+x,["ul","ol","li"].indexOf(C)>=0&&(f.startsWith(y)||(g[0]=`<${C}>
`),d.startsWith(y)||(g[2]=`
</${C}>`),C="li"),y.startsWith('"')?(f.startsWith(y)||(g[0]=`<${C} ${$}>`),d.startsWith(y)||(g[2]=`</${C}>`),g[0]+s.slice(y.length)+g[2]):(C=="hr"?g[1]="<hr>":g[1]=`<${C} ${$}>${s.slice(y.length)}</${C}>`,g.join(""))}}return`<span>${s}</span>`}}t(G,"countSyms",0),t(G,"SLAVARIGHT_TO_HTML_DICT",{"! ":"h1","!! ":"h2","!!! ":"h3","!!!! ":"h4","!!!!! ":"h5",'" ':"div class='note'",'"" ':"div class='note2'",'/" ':"div class='note new'",'/"" ':"div class='note2 new'","- ":"ul class='list1'","* ":"ul class='list2'",". ":"ol class='list1'",", ":"ol class='list2'","@$---":"<hr>"}),t(G,"SLAVARIGHT_TO_MD_DICT",{"! ":"# ","!! ":"## ","!!! ":"### ","!!!! ":"#### ","!!!!! ":"##### ",'" ':"> ",'"" ':"> ",'/" ':"> ",'/"" ':"> ","- ":"- ","* ":"* ",". ":"1. ",", ":"1. "});class _ extends ze{constructor(){super(...arguments);t(this,"COMMAND_DICT",{startgame:()=>"Вот умора... Какие игры? Пиши: "+this.Doctor.GiveMeLine(),cleanmdev:()=>(this.Static.CleanUpDev(),""),cleanmall:()=>(this.Static.CleanUpAll(),""),newdevmsg:e=>(this.Static.DevMsg.push(e),"")});t(this,"OPT_DICT",{tittle:e=>(this.setTitle(e),[]),theme:e=>(document.body.className=this.Funcsi.Transi(e.toLowerCase()),this.Static.THEMES)});t(this,"EXPRESION_DICT",{en:e=>`<span lang="en">${e}</span>`,ns:e=>`<span spellcheck="false">${e}</span>`})}static Hey(){return new _}SetCaret(){var o,d;const e=window.getSelection(),n=Number(((d=(o=e==null?void 0:e.focusNode)==null?void 0:o.parentElement)==null?void 0:d.getAttribute("prevCountSyms"))||0);this.setCursor(n+((e==null?void 0:e.focusOffset)||0)),this.TextChange=!1}Render(){if(this.TextChange)this.TextChange=!1;else return;this.HistoryMove||this.PushHistory(),this.HistoryMove=!1,this.Static.SAVETEXT_BACKUP&&(localStorage.setItem(this.Static.LS_TEXT,this.TextContent),localStorage.setItem(this.Static.LS_CURS,String(this.Cursor))),window.scrollTo({top:screen.height*.05*this.Lines.length-screen.height/2}),this.ArousedScreen.setAttribute(this.Static.ATTRS_EMPTY,`${!this.TextContent}`),this.ArousedScreen.innerHTML=this.getDevMsgs()+this.parseContent(this.Funcsi.Inceri(this.TextContent||this.Placeholder(),this.Static.CURSOR_CODE,this.Cursor).replaceAll("<","&lt;"),!!this.TextContent).replaceAll(this.Static.CURSOR_CODE,this.Static.CURSOR_HTAG)}parseContent(e,n=!0){return e=e.replaceAll(`
`,"\\n"),e.indexOf(":%")!==-1&&J(this.EXPRESION_DICT,(o,d)=>{if(e.indexOf(":%"+o)!==-1)for(let f of e.matchAll(new RegExp(":%"+o+"\\((.*?)\\)%","g")))f[1]&&(e=e.replaceAll(`:%${o}(${f[1]})%`,d(f[1])))}),e=e.replaceAll("\\n",`
`),this.ArousedScreen.spellcheck=n,`
`+e.split(`
`).map((o,d,f)=>{if(o.indexOf(this.Static.CURSOR_CODE)!==-1){if(o.startsWith(this.Static.OPTS_SYMBOL))return`<span spellcheck="false">${this.Static.OPTS_SYMBOL+this.setOptions(o.slice(this.Static.OPTS_SYMLEN))}</span>`+(f.length===1?this.parseContent(this.Placeholder(!1),!1):"");if(o.startsWith(this.Static.COMMAND_SPEC))for(let $ in this.COMMAND_DICT)$=o.slice(this.Static.COMMAND_SPEC_LEN,$.length+this.Static.COMMAND_SPEC_LEN),this.COMMAND_DICT[$]&&(o=this.COMMAND_DICT[$](o.slice(this.Static.COMMAND_SPEC_LEN)+" "))}return G.Formatter(o,d,f)}).join(`
`)}setOptions(e){return" "+e.toLowerCase().split(this.Static.OPTS_DELIMS).map((n,o,d)=>{var ot,ct;const f=d[o+1]===void 0,y=this.Funcsi.Trimsi(n.replaceAll(this.Static.CURSOR_CODE,"")).split(":");let $=this.Funcsi.Transi(((ot=y[0])==null?void 0:ot.trim())||""),g=((ct=y[1])==null?void 0:ct.trim())||"",C=y.length<2&&f?M(this.OPT_DICT,[],(v,H)=>H.startsWith($)?v.concat(H):v):this.OPT_DICT[$]?this.OPT_DICT[$](g):[];if(!f||C.length===0)return n;Gt(n[0])||(C=C.map(v=>U(v)),$=U($),g=U(g));const x=(v,H,Bt)=>((v.filter(Yt=>Yt.startsWith(H))[0]||"")+Bt).slice(H.length),rt=y.length<2?x(C,$,":"):x(C,g,";");return n+'<span class="tip">'+(C.length===1?rt:`${rt} [${C.join(", ")}]`)+"</span>"}).join(this.Static.OPTS_DELIMS)}}class nt extends _{constructor(){super(...arguments);t(this,"actionFunction",()=>{throw Error("ERROR: Not Inplemented Action Func")});t(this,"lastKeyPressed",0);t(this,"countKeyPressed",0);t(this,"timeoutEntering");t(this,"keysReplace",{"[a] -":"—",'[a] "':()=>Y(["«","»"]),"[a] '":()=>Y(["«","»"]),"[a] .":"…"});t(this,"keysActions",{"[c] h":"ArrowLeft","[c] l":"ArrowRight","[c] k":"ArrowUp","[c] j":"ArrowDown","[c] [a] backspace":"DeleteAll","[c] backspace":"DeleteLine","[a] backspace":"DeleteWord","[c] z":"Undo","[c] u":"Redo","[c] ,":"ToggleTheme","[c] [a] s":"ToggleSpellcheck","[c] s":"Download"});t(this,"funcActionsDict",{ArrowLeft:()=>{this.subCursor()},ArrowRight:()=>{this.addCursor()},ArrowUp:()=>{this.subCursor(1+this.PrevText().indexOf(`
`))},ArrowDown:()=>{this.addCursor(1+this.TextContent.slice(this.Cursor).indexOf(`
`))},Enter:()=>{this.TextIncerti(`
`,this.Cursor),this.addCursor()},Tab:()=>{this.TextIncerti(" ".repeat(this.TabMax),this.Cursor),this.addCursor(this.TabMax)},Backspace:()=>{this.DelSymbol(1)},DeleteAll:()=>{this.TextContent="",this.Cursor=this.CurMin},DeleteLine:()=>{this.DelSymbol(this.PrevText().indexOf(`
`)||1)},DeleteWord:()=>{this.DelWord()},Undo:()=>{this.UndoHistory()},Redo:()=>{this.RedoHistory()},ToggleSpellcheck:()=>{this.ToggleSpellcheck()},ToggleTheme:()=>{this.Elemsi.ToggleTheme(),this.TextChange=!1},Download:()=>{this.Download()}})}static Hey(){return new nt}async KeyPress(e){let n=`${e.ctrlKey?"[c] ":""}${e.altKey?"[a] ":""}${e.key}`;if(n=String(Ht(this.keysReplace[n])||n),n.length===1)this.actionFunction=()=>this.AddSymbol(n);else{const o=this.keysActions[pt(n).toLowerCase()]||n;if(this.funcActionsDict[o])this.actionFunction=()=>this.funcActionsDict[o](e);else return}e.preventDefault(),this.setEntering(),this.actionFunction(),this.Render()}setEntering(){this.TextChange=!0,this.countKeyPressed+=1,clearTimeout(this.timeoutEntering),this.timeoutEntering=setTimeout(()=>this.Elemsi.SetAttr("entering","false"),2e3),!(this.countKeyPressed<this.lastKeyPressed+4)&&(this.lastKeyPressed=this.countKeyPressed,this.Elemsi.SetAttr("entering","true"))}}const D=class D extends _{static Init(s,e){return`${s.target}${e}`,D.Hey(e)}static Hey(s=1){const e=D.Units[s]?D.Units[s]:D.New(s),n=e.aroused;return e.id,n}static New(s){return D.Units[s]={id:qt(6),aroused:new D(s)},`${s}${D.Units[s].id}`,D.Units[s]}constructor(s){D.REFRESH_CLEANUP&&D.CleanUpAll(),super();const e=nt.Hey();this.Number=s,this.AuthourName=K.GiveMePerson(),this.ArousedAuthor.innerText=`${this.ArousedName} (Version: ${D.VER}) Все права пренадлежат ${this.AuthourName}у`,this.ArousedSaving.addEventListener("click",()=>this.Download()),this.elToggleTheme.addEventListener("click",this.Elemsi.ToggleTheme),window.addEventListener("keydown",n=>e.KeyPress(n)),this.Render()}};t(D,"Units",[]);let q=D;window.addEventListener("load",i=>{q.Init(i,1)});
