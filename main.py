D = 0

def on_forever():
    global D
    D = grove.measure_in_centimeters(DigitalPin.P2)
    if D < 100:
        music.ring_tone(200)
        basic.show_number(D)
        basic.show_icon(IconNames.SAD)
        pins.digital_write_pin(DigitalPin.P1, 1)
    else:
        basic.show_icon(IconNames.HAPPY)
        pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
