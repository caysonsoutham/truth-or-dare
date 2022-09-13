while (true) {
    basic.showIcon(IconNames.Silly)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    music.stopMelody(MelodyStopOptions.All)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
}
basic.forever(function () {
	
})
