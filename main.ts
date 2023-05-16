input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Silly)
    soundExpression.soaring.playUntilDone()
    basic.showIcon(IconNames.Tortoise)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Duck)
    soundExpression.spring.playUntilDone()
    basic.showIcon(IconNames.Ghost)
})
basic.showIcon(IconNames.Rollerskate)
