const tText = document.getElementById('tText')
const tColor = document.getElementById('tColor')
const tFontSize = document.getElementById('tFontSize')

const bText = document.getElementById('bText')
const bColor = document.getElementById('bColor')
const bFontSize = document.getElementById('bFontSize')

const fontType = document.getElementById('fontType')

const topDisplay = document.getElementById('topDisplay')
const bottomDisplay = document.getElementById('bottomDisplay')


// Top Text Event Handler
tText.addEventListener('change', function() {
    topDisplay.innerHTML = tText.value
})

// Top Text Color Event Handler
tColor.addEventListener('change', function() {
    topDisplay.style.color = tColor.value
})

// Top Text Size Event Handler
tFontSize.addEventListener('change', function() {
    topDisplay.style.fontSize = tFontSize.value + "px"
})

// Bottom Text Event Handler
bText.addEventListener('change', function() {
    bottomDisplay.innerHTML = bText.value
})

// Bottom Text Color Handler
bColor.addEventListener('change', function() {
    bottomDisplay.style.color = bColor.value
})

// Bottom Text Size Handler
bFontSize.addEventListener('change', function() {
    bottomDisplay.style.fontSize = bFontSize.value + "px"
})

// Top & Bottom Text Type Handler
fontType.addEventListener('change', function() {
    topDisplay.style.fontFamily = fontType.value
    bottomDisplay.style.fontFamily = fontType.value
})

// from https://coderdojoscotland.com/wp-content/uploads/2018/03/CoderDojo-Meme-Website.pdf
function update_image(){
    var img = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    img.src =  window.URL.createObjectURL(file);
}