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


function row1() {
    $(document).ready(function () {
        $("#pn1").mouseover(function () {
            $("#pn1").css("opacity", "0.5")
            appear("Lime Green", "$14.99")
        })
        $("#pn1").mouseout(function () {
            $("#pn1").css("opacity", "1")
            disappear()
        })

        $("#pn2").mouseover(function () {
            $("#pn2").css("opacity", "0.5")
            appear("Medium Brown", "$11.14")
        })
        $("#pn2").mouseout(function () {
            $("#pn2").css("opacity", "1")
            disappear()
        })

        $("#pn3").mouseover(function () {
            $("#pn3").css("opacity", "0.5")
            appear("Royal Blue", "$22.99")
        })
        $("#pn3").mouseout(function () {
            $("#pn3").css("opacity", "1")
            disappear()
        })
    })
}

function row2() {
    $(document).ready(function () {
        $("#pn4").mouseover(function () {
            $("#pn4").css("opacity", "0.5")
            appear("Solid Red", "$13.42")
        })
        $("#pn4").mouseout(function () {
            $("#pn4").css("opacity", "1")
            disappear()
        })

        $("#pn5").mouseover(function () {
            $("#pn5").css("box-shadow", "10px 10px 10px 10px #888888")
            appear("Solid White", "$21.98")
        })
        $("#pn5").mouseout(function () {
            $("#pn5").css("box-shadow", "none")
            disappear()
        })

        $("#pn6").mouseover(function () {
            $("#pn6").css("opacity", "0.5")
            appear("Solid Black", "$4.99")
        })
        $("#pn6").mouseout(function () {
            $("#pn6").css("opacity", "1")
            disappear()
        })
    })
}

function row3() {
    $(document).ready(function () {
        $("#pn7").mouseover(function () {
            $("#pn7").css("opacity", "0.5")
            appear("Solid Cyan", "$8.22")
        })
        $("#pn7").mouseout(function () {
            $("#pn7").css("opacity", "1")
            disappear()
        })

        $("#pn8").mouseover(function () {
            $("#pn8").css("opacity", "0.5")
            appear("Solid Purple", "$11.99")
        })
        $("#pn8").mouseout(function () {
            $("#pn8").css("opacity", "1")
            disappear()
        })

        $("#pn9").mouseover(function () {
            $("#pn9").css("opacity", "0.5")
            appear("Solid Yellow", "$14.99")
        })
        $("#pn9").mouseout(function () {
            $("#pn9").css("opacity", "1")
            disappear()
        })
    })
}

row1()
row2()
row3()
