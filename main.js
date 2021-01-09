const fontType = document.getElementById('fontType')

// Top & Bottom Text Type Handler
fontType.addEventListener('change', function() {
    topDisplay.style.fontFamily = fontType.value
    bottomDisplay.style.fontFamily = fontType.value
})

function update_top_text(){
    var top_text = document.getElementById("top_text");
    var topDisplay = document.getElementById('topDisplay');
    var tColor = document.getElementById('tColor');
    var tFontSize = document.getElementById('tFontSize');

    topDisplay.innerHTML = top_text.value;
    topDisplay.style.color = tColor.value
    topDisplay.style.fontSize = tFontSize.value + "px"
}

function update_bottom_text(){
    var bottom_text = document.getElementById("bottom_text");
    var bottomDisplay = document.getElementById('bottomDisplay');
    var bColor = document.getElementById('bColor');
    var bFontSize = document.getElementById('bFontSize');

    bottomDisplay.innerHTML = bottom_text.value
    bottomDisplay.style.color = bColor.value
    bottomDisplay.style.fontSize = bFontSize.value + "px"
}

// from https://coderdojoscotland.com/wp-content/uploads/2018/03/CoderDojo-Meme-Website.pdf
function update_image(){
    var img = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    img.src =  window.URL.createObjectURL(file);
}