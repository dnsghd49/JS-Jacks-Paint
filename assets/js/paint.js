function appear(color, cPrice) {
    let name = document.querySelector("#color")
    name.textContent = color
    let price = document.querySelector("#ppg")
    price.textContent = cPrice
    return name, price
}

function disappear(color, cPrice) {
    let removeText = appear(color, cPrice)
    removeText.remove
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