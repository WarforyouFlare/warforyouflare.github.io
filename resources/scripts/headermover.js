var HeaderClickCounter = 0;

var item = document.getElementsByClassName("MovingHeader");
for (var i = 0 ; i < item.length; i++) {
item[i].addEventListener("click", MoveToCenter);}

function MoveToCenter(event)
{  
    if(navigator.userAgent.indexOf('AppleWebKit') != -1 ) 
        {   
            event.target.removeEventListener("click", MoveToCenter);
            event.target.style["animation-name"] = "movetocenter, fadeout";
            event.target.style["animation-delay"] = "0s, 2s";
            event.target.style["animation-duration"] = "3s, 2s";
            event.target.style["animation-fill-mode"] = "forwards";
            HeaderClickCounter++;
            if (HeaderClickCounter === 3)
                {setTimeout(ChangePage, 6000);}
        }  
   else {event.target.innerHTML = "Sorry, but your browser version is oudated and thus not supported";}
};

for (var i = 0 ; i < item.length; i++) {
item[i].addEventListener("animationend", ReplaceText)}

function ReplaceText(event)
{   
    event.target.removeEventListener("animationend", ReplaceText);
    event.target.className = "Middle";
    event.target.style["animation-name"] = "fadein";
    event.target.style["animation-delay"] = "0s";
    event.target.style["animation-duration"] = "3s";
    event.target.style["animation-fill-mode"] = "forwards";
    if(event.target.innerHTML === "Fireworks") {
        event.target.innerHTML = "Explode in the heat <br>of the summer dusk";}

    else if(event.target.innerHTML === "Ghost Notes") {
            event.target.innerHTML = "Ring between <br>the quiet echoes";}

    else if(event.target.innerHTML === "Remorse") {
            event.target.innerHTML = "Dissolves into cold rays <br>of the morning sun";} 
};

var NPLint = undefined
function ChangePage()
{ 
    if (HeaderClickCounter === 3)
    {
    var item = document.getElementsByClassName("Middle");
    setTimeout(function () {
    NPLint = setInterval(NewPageLoader, 100);}, 3000);
    for (var i = 0 ; i < item.length; i++) 
        { 
        item[i].style["animation-name"] = "fadeout2";
        item[i].style["animation-duration"] = "3.5s";
        item[i].style["animation-fill-mode"] = "forwards";
        
        }
    };
};

var fadecounter = 0;
function NewPageLoader() 
{
    if (fadecounter < 55)
    {
    var blackness = (fadecounter * 0.02);
    var value = "rgba(0, 0, 0, " + blackness +")";
    var fadingitem = document.getElementById("fader");
    fadingitem.style["background-color"] = value;
    fadecounter++;   
    } else {clearInterval(NPLint); setTimeout(Questions, 2000);};
};

function TextFaderOut(elem){
    elem.style["animation-name"] = "fadeout";
    elem.style["animation-duration"] = "2s";
    elem.style["animation-fill-mode"] = "forwards";
};
function TextFaderIn(elem){
    elem.style["animation-name"] = "fadeinfull";
    elem.style["animation-duration"] = "3s";
    elem.style["animation-fill-mode"] = "forwards";
};

var QuestionBox
function Questions()
{
    QuestionBox = document.createElement('div');
    QuestionBox.innerHTML = "Are you here?";
    document.body.append(QuestionBox);
    QuestionBox.className  = "Question";
    TextFaderIn(QuestionBox);
    QuestionBox.addEventListener("click", Questions2);
};
function Questions2(event)
{TextFaderOut(event.target);
    event.target.removeEventListener("click", Questions2);
    setTimeout(Questions3, 3000);
};
function Questions3()
{
    QuestionBox.innerHTML = "Can you hear me?";
    TextFaderIn(QuestionBox);
    QuestionBox.addEventListener("click", Questions4);
};
function Questions4(event)
{TextFaderOut(event.target);
    event.target.removeEventListener("click", Questions4);
    setTimeout(Questions5, 3000);
};
function Questions5()
{
    QuestionBox.style["font-size"] = "200%";
    QuestionBox.innerHTML = "I will come back for you. <br>I promise.";
    TextFaderIn(QuestionBox);
    setTimeout(Questions6, 3000);
};
function Questions6()
{
    QuestionBox.removeEventListener("click", Questions4);
    TextFaderOut(QuestionBox);
    setTimeout(Questions7, 3000);
};
function Questions7()
{
    QuestionBox.style["font-size"] = "250%";
    QuestionBox.innerHTML = "Please, wait for me.";
    TextFaderIn(QuestionBox);
    QuestionBox.addEventListener("click", QuestionsEnd);
};
function QuestionsEnd(event)
{
    event.target.removeEventListener("click", Questions5);
    TextFaderOut(event.target);
    setTimeout(function(){event.target.remove(); window.location.replace("ghost_notes.html");}, 3000); /* cleanup */
};
