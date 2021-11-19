const colorName = document.getElementById("#color")
const colorPrice = document.getElementsByClassName("price")


function appear(color, cPrice) {
    let name = document.querySelector("#color")
    let price = document.querySelector(".price")
    name.textContent = color
    price.textContent = cPrice
    return name, price
}

function disappear(color, cPrice) {
    let stuff = appear(color, cPrice)
    stuff.remove(color, cPrice)
}


function img1() {
    $(document).ready(function () {
        $("#pn1").mouseover(function () {
            $("#pn1").css("opacity", "0.5")
            appear("white", "$12")
        })
        $("#pn1").mouseout(function () {
            $("#pn1").css("opacity", "1")
            disappear()
        });
    })
}

img1()


// function test() {
//     appear("white", "$12")
// }

// test()