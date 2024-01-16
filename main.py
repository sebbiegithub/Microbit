def on_button_pressed_a():
    global temp
    temp = input.temperature()
    print("Temp:"+temp)
    basic.show_number(temp)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global mylight
    print("Light:"+light)
    mylight = input.light_level()
    basic.show_number(mylight)

input.on_button_pressed(Button.B, on_button_pressed_b)

temp = 0
mylight = 0
input.temperature()
input.light_level()

