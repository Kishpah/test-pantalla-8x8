function pintaImagen (texto: string) {
    for (let index = 0; index <= texto.length; index++) {
        color = texto.substr(index, 1)
        if (color == "." || color == "f") {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            strip.shift(1)
        }
        if (color == "1") {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            strip.shift(1)
        }
        if (color == "3") {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
            strip.shift(1)
        }
        if (color == "8") {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            strip.shift(1)
        }
        if (color == "5") {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
            strip.shift(1)
        }
    }
    // El shield que tengo tiene 5 leds que se añaden a los de la tira. Tenemos que desplazar todo para saltarnos esos leds.
    strip.shift(4)
}
input.onButtonPressed(Button.B, function () {
    cont = cont + 2
    if (cont >= lista.length) {
        cont = 0
    }
    img1 = cont
    img2 = cont + 1
})
let color = ""
let img2 = 0
let img1 = 0
let cont = 0
let lista: string[] = []
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 69, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
lista = [
`
. . 8 8 8 8 . .
. 8 8 8 8 8 8 .
8 8 1 8 8 1 8 8
8 8 8 8 8 8 8 8
8 8 1 8 1 8 1 8
8 1 8 1 8 1 8 8
8 8 8 8 8 8 8 8
8 8 . 8 8 . 8 8`,
`
. . 8 8 8 8 . .
. 8 8 8 8 8 8 .
8 8 1 8 8 1 8 8
8 8 8 8 8 8 8 8
8 1 8 1 8 1 8 8
8 8 1 8 1 8 1 8
8 8 8 8 8 8 8 8
8 8 . 8 8 . 8 8`,
`
. . 3 3 3 3 . .
. 3 3 3 3 3 3 .
3 3 1 3 3 1 3 3
3 3 1 3 3 1 3 3
3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3
3 3 . 3 3 . 3 3`,
`
. . 3 3 3 3 . .
. 3 3 3 3 3 3 .
3 3 3 3 3 3 3 3
3 3 1 3 3 1 3 3
3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3
3 3 3 3 3 3 3 3
. 3 3 . 3 3 . 3`,
`
. . 5 5 5 5 . .
. 5 5 5 5 5 5 .
5 5 f 5 5 5 5 5
5 5 f 5 5 5 5 5
5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5
. 5 5 5 5 5 5 .
. . 5 5 5 5 . .`,
`
. . 5 5 5 5 . .
. 5 5 5 5 5 5 .
5 5 f 5 5 . . .
5 5 f 5 . . . .
5 5 5 5 . . . .
5 5 5 5 5 . . .
. 5 5 5 5 5 5 .
. . 5 5 5 5 . .`
]
cont = 0
img1 = cont
img2 = cont + 1
basic.forever(function () {
    pintaImagen(lista[img1])
    strip.show()
    basic.pause(500)
    pintaImagen(lista[img2])
    strip.show()
    basic.pause(500)
})
