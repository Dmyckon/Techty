

function menuView() {
    document.getElementById("menu").style.display = "block"
    document.getElementById("logo").style.display = "none"
    document.getElementById("butt").style.display = "none"
    document.getElementById("harm").style.display = "none"
    document.getElementById("ex").style.display = "block"
}

function cancelView() {
    document.getElementById("menu").style.display = "none"
    document.getElementById("logo").style.display = "block"
    document.getElementById("butt").style.display = "block"
    document.getElementById("harm").style.display = "block"
    document.getElementById("ex").style.display = "none"
}


var testimony = [document.getElementById("one").innerHTML, document.getElementById("two").innerHTML, document.getElementById("three").innerHTML, document.getElementById("four").innerHTML, document.getElementById("five").innerHTML, document.getElementById("six").innerHTML
]
var index = 0
var index = 5

function nextClick() {
    index++
            if (index >= testimony.length) {
                index = 0
            }
            document.getElementById("one").innerHTML = testimony[index]
}

function prevClick() {
    index--
    if (index >= testimony.length) {
        index = 5
    }
    document.getElementById("one").innerHTML = testimony[index]
}

