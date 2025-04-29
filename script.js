

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

function menuView3() {
    document.getElementById("menu3").style.display = "block"
    document.getElementById("logo3").style.display = "none"
    document.getElementById("butt3").style.display = "none"
    document.getElementById("harm3").style.display = "none"
    document.getElementById("ex3").style.display = "block"
}

function cancelView3() {
    document.getElementById("menu3").style.display = "none"
    document.getElementById("logo3").style.display = "block"
    document.getElementById("butt3").style.display = "block"
    document.getElementById("harm3").style.display = "block"
    document.getElementById("ex3").style.display = "none"
}

function menuView4() {
    document.getElementById("menu4").style.display = "block"
    document.getElementById("logo4").style.display = "none"
    document.getElementById("butt4").style.display = "none"
    document.getElementById("harm4").style.display = "none"
    document.getElementById("ex4").style.display = "block"
}

function cancelView4() {
    document.getElementById("menu4").style.display = "none"
    document.getElementById("logo4").style.display = "block"
    document.getElementById("butt4").style.display = "block"
    document.getElementById("harm4").style.display = "block"
    document.getElementById("ex4").style.display = "none"
}

function menuView5() {
    document.getElementById("menu5").style.display = "block"
    document.getElementById("logo5").style.display = "none"
    document.getElementById("butt5").style.display = "none"
    document.getElementById("harm5").style.display = "none"
    document.getElementById("ex5").style.display = "block"
}

function cancelView5() {
    document.getElementById("menu5").style.display = "none"
    document.getElementById("logo5").style.display = "block"
    document.getElementById("butt5").style.display = "block"
    document.getElementById("harm5").style.display = "block"
    document.getElementById("ex5").style.display = "none"
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

function homeClick() {
    document.getElementById("home").style.display = "block"
    document.getElementById("about").style.display = "none"
    document.getElementById("service").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementById("homegreen").style.color = "#28D08A"
}
function aboutClick() {
    document.getElementById("home").style.display = "none"
    document.getElementById("about").style.display = "block"
    document.getElementById("service").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementById("aboutgreen2").style.color = "#28D08A"
}
function serviceClick() {
    document.getElementById("home").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("service").style.display = "block"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementById("servicegreen3").style.color = "#28D08A"
}
function blogClick() {
    document.getElementById("home").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("service").style.display = "none"
    document.getElementById("blog").style.display = "block"
    document.getElementById("contact").style.display = "none"
    document.getElementById("bloggreen4").style.color = "#28D08A"
}
function contactClick() {
    document.getElementById("home").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("service").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "block"
    document.getElementById("contactgreen5").style.color = "#28D08A"
}

// function ideaView() {
//     document.getElementById("ideas").style.display = "flex"
//     document.getElementById("ideas3").style.color = "#28D08A"
//     document.getElementById("ideas1").style.display = "flex"
//     document.getElementById("ideas2").style.display = "block"

//     document.getElementById("data").style.display = "none"
//     document.getElementById("data1").style.display = "none"
//     document.getElementById("data2").style.display = "none"
//     document.getElementById("data3").style.color = "#28D08A"
// }

// function dataView() {
//     document.getElementById("data").style.display = "flex"
//     document.getElementById("data1").style.display = "flex"
//     document.getElementById("data2").style.display = "block"
//     document.getElementById("data3").style.color = "#28D08A"

//     document.getElementById("ideas").style.display = "none"
//     document.getElementById("ideas3").style.color = "black"
//     document.getElementById("ideas1").style.display = "none"
//     document.getElementById("ideas2").style.display = "none"
// }