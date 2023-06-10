input.onButtonPressed(Button.A, function () {
    if (!(isPlaying)) {
        isPlaying = true
        playSong()
    }
})
function playSong () {
    if (currentIndex < firstLine.length) {
        firstNote = firstLine[currentIndex]
        secondNote = secondLine[currentIndex]
        music.playTone(firstNote, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(secondNote, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        currentIndex += 1
        playSong()
    } else {
        currentIndex = 0
        isPlaying = false
    }
}
input.onButtonPressed(Button.B, function () {
    if (isPlaying) {
        isPlaying = false
        music.stopMelody(MelodyStopOptions.All)
    }
})
let secondNote = 0
let firstNote = 0
let currentIndex = 0
let isPlaying = false
let secondLine: number[] = []
let firstLine: number[] = []
firstLine = [
262,
330,
392,
523,
494,
440,
392,
330,
392,
523,
494,
440,
392,
330,
392,
523,
494,
523,
440,
392,
523,
330,
294,
330,
262,
262,
262,
262,
262,
330,
330,
349,
392,
392,
349,
330,
330,
294,
294,
262,
262,
262,
262,
262,
523,
523,
494,
494,
440,
440,
392,
392,
392,
392,
392,
330,
330,
294,
294,
262,
262,
262,
262,
262,
523,
523,
494,
494,
440,
440,
392,
392,
349,
349,
330,
330,
294
]
secondLine = [
523,
587,
659,
698,
784,
880,
988,
1047,
1047,
988,
880,
784,
698,
659,
587,
523,
523,
587,
659,
698,
784,
880,
988,
1047,
1047,
988,
880,
784,
698,
659,
587,
523,
523,
587,
659,
698,
784,
880,
988,
1047,
1047,
988,
880,
784,
698,
659,
587,
523,
523,
587,
659,
698,
784,
880,
988,
1047,
1047,
988,
880,
784,
698,
659,
587,
523,
523,
587,
659,
698,
784,
880,
988,
1047
]
