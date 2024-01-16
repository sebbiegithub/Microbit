
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    temp = input.temperature()
    date = timeanddate.dateTime()
    console.log(date + " Temp: " + temp)
    basic.showNumber(temp)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    mylight = input.lightLevel()
    date = timeanddate.dateTime()
    console.log(date + " Light: " + mylight)
    basic.showNumber(mylight)
})
let temp = 0
let mylight = 0
let date = ""
input.temperature()
input.lightLevel()
