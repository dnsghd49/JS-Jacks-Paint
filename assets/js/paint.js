const colorName = document.getElementById("#color")
const colorPrice = document.getElementsByClassName("price")
const floatRight = document.querySelector(".floatRight")


function appear(color, cPrice) {
    let name = document.createElement("h1")
    name.textContent = color
    let price = document.createElement("h2")
    price.textContent = cPrice
    floatRight.append(name, price)
}

$(document).ready(function () {
    $("#pn1").mouseover(function () {
        $("#pn1").css("opacity", "0.5")
    })
    $("#pn1").mouseout(function () {
        $("#pn1").css("opacity", "1")
    });
})

// function test() {
//     appear("white", "$12")
// }

// test()