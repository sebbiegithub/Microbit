def on_button_pressed_a():
    global temp
    temp = input.temperature()
    print("Temp:{0}".format(temp))
    basic.show_number(temp)
input.on_button_pressed(Button.A, on_button_pressed_a)

temp = 0
input.temperature()