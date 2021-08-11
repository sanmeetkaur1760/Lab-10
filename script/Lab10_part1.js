function changeColor(){

    var radio_buttons = document.getElementsByName('color');

    for (var i = 0, length = radio_buttons.length; i < length; i++) {
      if (radio_buttons[i].checked) {
        changeFontColor(radio_buttons[i].value);
        break;
      }
    }
}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(color){

    var td = document.getElementById("td_text");
    td.style.color = color;

}

function changeBgColor(color){

    var td = document.getElementById("td_text");
    td.style.backgroundColor = color;
}

function changeBg(){

    var drop_list = document.getElementById('colorsel');
    changeBgColor(drop_list.value)
}
