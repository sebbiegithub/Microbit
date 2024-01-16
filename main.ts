input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    temp = input.temperature()
    console.log("Temp:{}")
    basic.showNumber(temp)
})
let temp = 0
input.temperature()
