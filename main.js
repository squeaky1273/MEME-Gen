const tText = document.getElementById('tText')
const tColor = document.getElementById('tColor')

const bText = document.getElementById('bText')
const bColor = document.getElementById('bColor')

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

// Bottom Text Event Handler
bText.addEventListener('change', function() {
    bottomDisplay.innerHTML = bText.value
})

// Bottom Text Color Handler
bColor.addEventListener('change', function() {
    bottomDisplay.style.color = bColor.value
})