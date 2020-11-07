let D = 0
basic.forever(function () {
    D = grove.measureInCentimeters(DigitalPin.P2)
    if (D < 100) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showNumber(D)
        basic.showIcon(IconNames.Sad)
        music.ringTone(200)
    } else {
        music.rest(music.beat(BeatFraction.Sixteenth))
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
