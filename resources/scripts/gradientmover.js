var elem = document.getElementById("gradiented1");
var gradientgrowth = (Math.random() *40);
var growthcounter = 0;
var currentgradient = 55;
/* linear-gradient(rgb(39, 25, 25), 65%, rgb(153, 58, 4)) --- Initial value reference */

this.addEventListener("load", InFader);
function InFader ()
{
    var texto = document.getElementById("midtext1");
    texto.style["animation-name"] = "fadein";
    texto.style["animation-duration"] = "10s";
    texto.style["animation-fill-mode"] = "forwards";
};

setInterval(GradientFloat, 250);

function GradientFloat ()
{
    if (growthcounter < gradientgrowth) /* Gradient grows */
    {
        currentgradient++;
        growthcounter++;
        var value ="linear-gradient(rgb(39, 25, 25), " + currentgradient +"%, rgb(153, 58, 4))"
        elem.style["background"] = value;


    }
    else { if (growthcounter >= gradientgrowth, growthcounter < (gradientgrowth * 2)) /* Gradient lowers */
            { 
                currentgradient--;
                growthcounter++;
                var value ="linear-gradient(rgb(39, 25, 25), " + currentgradient +"%, rgb(153, 58, 4))"
                elem.style["background"] = value;
            } else {
            gradientgrowth = (Math.random() *40);
            growthcounter = 0;}
         };
};