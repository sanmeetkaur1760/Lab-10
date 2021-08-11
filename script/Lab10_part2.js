var topPosition = -175;
var leftPosition = -200;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");
    puppy.style.visibility = "visible";
    puppy.style.position = "relative";

    if ((leftPosition + 200) <= window.screen.availWidth && (topPosition + 175) <= window.screen.availHeight) {
        puppy.style.left = leftPosition + 10 + "px";
        leftPosition = leftPosition + 10;
    
        puppy.style.top = topPosition + 10 + "px";
        topPosition = topPosition + 10;
    }
// add if it reaches the screen end (you can check with screen.availwidth)					
}
