input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("go")
    basic.showString("go")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("stop")
    basic.showString("stop")
})
radio.setGroup(25)
