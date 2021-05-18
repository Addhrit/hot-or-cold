input.onButtonPressed(Button.A, function () {
    tempereture += 1
    if (tempereture > 18) {
        basic.showString("H")
    } else {
        basic.showString("C")
    }
})
input.onButtonPressed(Button.AB, function () {
    tempereture = 15
    basic.showNumber(15)
})
input.onButtonPressed(Button.B, function () {
    tempereture += -1
    if (tempereture < 18) {
        basic.showString("C")
    } else {
        basic.showString("H")
    }
})
let tempereture = 0
tempereture = 15
