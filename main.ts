input.onButtonPressed(Button.A, function () {
    radio.sendString("hemmelig besked")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(169)
basic.forever(function () {
	
})
