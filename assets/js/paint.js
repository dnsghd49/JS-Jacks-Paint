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

// function appear2(cPrice){

//     floatRight.append(cPrice)
// }

appear("white", "$12")