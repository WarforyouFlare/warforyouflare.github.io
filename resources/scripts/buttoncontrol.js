var bt_1 = document.getElementById("button1");
var bt_2 = document.getElementById("button2");
var bt_3 = document.getElementById("button3");
var bt_1_active=1;
var bt_2_active=1;
var bt_3_active=1;
var PageLoaded=0;

bt_1.addEventListener("mouseover", BT1changer);
bt_2.addEventListener("mouseover", BT2changer);
bt_3.addEventListener("mouseover", BT3changer);

bt_1.addEventListener("mouseout", BT1rechanger);
bt_2.addEventListener("mouseout", BT2rechanger);
bt_3.addEventListener("mouseout", BT3rechanger);

bt_1.addEventListener("click", BT1click);
bt_2.addEventListener("click", BT2click);
bt_3.addEventListener("click", BT3click);

function BT1changer(event){
    event.target.src="resources/buttons/btn_hover.png";
};

function BT2changer(event){
    event.target.src="resources/buttons/btn_hover.png";
};

function BT3changer(event){
    event.target.src="resources/buttons/btn_hover.png";
};

function BT1rechanger(event){
    event.target.src="resources/buttons/btn_normal.png";
};

function BT2rechanger(event){
    event.target.src="resources/buttons/btn_normal.png";
};

function BT3rechanger(event){
    event.target.src="resources/buttons/btn_normal.png";
};

var PressedButton = 0;

function BT1click(event){ 
    PressedButton = 1;
    PageSelector();
    event.target.removeEventListener("mouseover", BT1changer);
    event.target.removeEventListener("mouseout", BT1rechanger);
    event.target.src="resources/buttons/btn_pressed.png";
    bt_2.src="resources/buttons/btn_normal.png";
    bt_3.src="resources/buttons/btn_normal.png";
    bt_1_active=0;
    if(bt_2_active===0){bt_2.addEventListener("mouseover", BT2changer); 
    bt_2.addEventListener("mouseout", BT2rechanger); bt_2_active=1;};
    if(bt_3_active===0){bt_3.addEventListener("mouseover", BT3changer); 
    bt_3.addEventListener("mouseout", BT3rechanger); bt_3_active=1;};
};

function BT2click(event){ 
    PressedButton = 2;
    PageSelector();
    event.target.removeEventListener("mouseover", BT2changer);
    event.target.removeEventListener("mouseout", BT2rechanger);
    event.target.src="resources/buttons/btn_pressed.png";
    bt_1.src="resources/buttons/btn_normal.png";
    bt_3.src="resources/buttons/btn_normal.png";
    bt_2_active=0;
    if(bt_1_active===0){bt_1.addEventListener("mouseover", BT1changer); 
    bt_1.addEventListener("mouseout", BT1rechanger); bt_1_active=1;};
    if(bt_3_active===0){bt_3.addEventListener("mouseover", BT3changer); 
    bt_3.addEventListener("mouseout", BT3rechanger); bt_3_active=1;};
};

function BT3click(event){ 
    PressedButton = 3;
    PageSelector();
    event.target.removeEventListener("mouseover", BT3changer);
    event.target.removeEventListener("mouseout", BT3rechanger);
    event.target.src="resources/buttons/btn_pressed.png";
    bt_1.src="resources/buttons/btn_normal.png";
    bt_2.src="resources/buttons/btn_normal.png";
    bt_3_active=0;
    if(bt_2_active===0){bt_2.addEventListener("mouseover", BT2changer); 
    bt_2.addEventListener("mouseout", BT2rechanger); bt_2_active=1;};
    if(bt_1_active===0){bt_1.addEventListener("mouseover", BT1changer); 
    bt_1.addEventListener("mouseout", BT1rechanger); bt_1_active=1;};
};

var contheight="100%";
var contcolor="rgb(255, 175, 0)";
function PageSelector(){
    if (PageLoaded === 0) 
        {
        contcolor = "rgb(0, 0, 0)";
        document.getElementById("welcometext").innerHTML = "";
        document.getElementById("ContentMiddle").style["height"] = "0%";
        document.getElementById("welcometext").style["padding-bottom"] = "0%";
        document.getElementById("ContentMiddle").style["background-color"] = contcolor;
        var counter = 0;
        let intid = setInterval(function()
            {
                if (counter<100) 
                {
                counter++;
                document.getElementById("ContentMiddle").style["height"] = counter +"%";
                } else 
                    {
                    clearInterval(intid); PageLoaded=1; GoChangeText(); AddSliders();
                    };
            },10);
        } else {GoChangeText();};

};

function AddSliders()
{
    var item = document.getElementsByClassName("SC_BTN");
    for (var i = 0 ; i < item.length; i++) {
    item[i].style.visibility='visible';};
};

function GoChangeText()
{
    if (PressedButton === 1)
    {
        document.getElementById("welcometext").innerHTML = "THIS IS THE MAIN TEXT!<br>GO EAT SHAWERMA AND DRINK SOME TEA!";
        document.getElementById("welcometext").style["padding-bottom"] = "20%";
        document.getElementById("ContentMiddle").style["color"] = "rgb(255, 175, 0)";
    }
else if(PressedButton === 2) 
    {
        document.getElementById("welcometext").innerHTML = "THIS IS THE SECOND TEXT!<br>GO DANCE!";
        document.getElementById("welcometext").style["padding-bottom"] = "20%";
        document.getElementById("ContentMiddle").style["color"] = "rgb(255, 175, 0)";
    }
else if(PressedButton === 3) 
    {
        document.getElementById("welcometext").innerHTML = "THIS IS THE LAST TEXT!<br>GO SLEEP!<br>GO!";
        document.getElementById("welcometext").style["padding-bottom"] = "20%";
        document.getElementById("ContentMiddle").style["color"] = "rgb(255, 175, 0)";
    } else {
        document.getElementById("welcometext").innerHTML = "You should have never seen this<br>but something has screwed up!";
        document.getElementById("welcometext").style["padding-bottom"] = "20%";
        document.getElementById("ContentMiddle").style["color"] = "rgb(255, 175, 0)";
        }
};

/*background-color: rgb(0, 0, 0); and height 0% */