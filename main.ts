input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Tortoise)
    } else {
        basic.showIcon(IconNames.Duck)
    }
})
basic.forever(function () {
	
})
