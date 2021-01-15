let bearing = 0
input.onButtonPressed(Button.A, function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else {
        basic.showString("")
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(input.temperature())
    basic.showString("TILT RIGHT")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Square)
        basic.pause(200)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # .
        . # . . #
        . . . . #
        . # . . #
        . . . # .
        `)
    basic.showString("TILT LEFT")
})
