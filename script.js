

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

function menuView2() {
    document.getElementById("menu2").style.display = "block"
    document.getElementById("logo2").style.display = "none"
    document.getElementById("butt2").style.display = "none"
    document.getElementById("harm2").style.display = "none"
    document.getElementById("ex2").style.display = "block"
}

function cancelView2() {
    document.getElementById("menu2").style.display = "none"
    document.getElementById("logo2").style.display = "block"
    document.getElementById("butt2").style.display = "block"
    document.getElementById("harm2").style.display = "block"
    document.getElementById("ex2").style.display = "none"
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

var team = [document.getElementById("image1").innerHTML, document.getElementById("image2").innerHTML, document.getElementById("image2").innerHTML, document.getElementById("image4").innerHTML
]

function nextClick2() {
    index++
            if (index >= team.length) {
                index = 0
            }
            document.getElementById("image1").innerHTML = team[index]
}

function prevClick2() {
    index--
    if (index >= team.length) {
        index = 5
    }
    document.getElementById("image1").innerHTML = team[index]
}

