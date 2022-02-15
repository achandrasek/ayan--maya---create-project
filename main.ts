function setLevel (level: number) {
    if (level == 0) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
            7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
            66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
            6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
            6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
            6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
            bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
            bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
            bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
            bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
            bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
            bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
            bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
            bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
            bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
            bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
            b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
            b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
            b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
            b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
            dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
            9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
            9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
            9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
            9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
            99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
            99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
            9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
            9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
            999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
            d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
            dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
            dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
            dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
            d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
            9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
            d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
            ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
            dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
            ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
            dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
            ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
            dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
            ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.saplingOak)
    }
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
        scene.setBackgroundColor(9)
        tiles.placeOnRandomTile(mySprite, sprites.castle.saplingOak)
    }
    if (level == 2) {
        tiles.setTilemap(tilemap`level2`)
        scene.setBackgroundColor(9)
        tiles.placeOnRandomTile(mySprite, sprites.castle.saplingOak)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (pointingLeft == 0) {
        if (mySprite.vy == 0) {
            mySprite.setImage(assets.image`oiraM Jump`)
            mySprite.vy = -132.5
        }
    } else {
        if (mySprite.vy == 0) {
            mySprite.setImage(img`
                d d d . . . . . . . . . . . . . 
                d d d . . 2 2 2 2 2 2 . . . . . 
                d d 2 2 2 2 2 2 2 2 2 2 . . . . 
                2 2 2 . d f d d d e e e . . . . 
                2 2 d d d f d d d d e d e . . . 
                2 d d d e d d d d e e d e . . . 
                . e e e e e d d d d d e e . . . 
                . . e d d d d d d d d . . . . . 
                . . . 2 8 2 2 2 2 8 2 2 2 2 . . 
                2 . . 8 2 2 2 2 8 2 2 2 2 2 2 . 
                2 . . 8 8 8 8 8 8 2 2 2 2 2 d d 
                2 2 8 5 8 5 8 8 8 2 8 . . d d d 
                2 2 8 8 8 8 8 8 8 8 8 . 2 . d . 
                2 2 8 8 8 8 8 8 8 8 8 2 2 2 . . 
                . . . . . 8 8 8 8 8 8 8 2 2 2 . 
                . . . . . . . . 8 8 8 8 . . 2 . 
                `)
            mySprite.vy = -132.5
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`sabre`, mySprite, 0, 0)
    pause(200)
    projectile.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (level == 0) {
        game.over(false)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pointingLeft = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d f d e e e e . . . . 
        . . . d d d f d d d e d e . . . 
        . . d d d e d d d e e d e . . . 
        . . . e e e e d d d d e e . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . 2 2 2 8 2 2 . . . . 
        . . . 2 2 2 8 2 2 8 2 2 2 . . . 
        . . 2 2 2 2 8 2 2 8 2 2 2 2 . . 
        . . d d 8 8 5 8 8 5 8 8 d d . . 
        . . d d d 8 8 8 8 8 8 d d d . . 
        . . d d 8 8 8 8 8 8 8 8 d d . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . 8 8 8 . . . . 8 8 8 . . . 
        . . 8 8 8 8 . . . . 8 8 8 8 . . 
        `,img`
        d d d . . . . . . . . . . . . . 
        d d d . . 2 2 2 2 2 2 . . . . . 
        d d 2 2 2 2 2 2 2 2 2 2 . . . . 
        2 2 2 . d f d d d e e e . . . . 
        2 2 d d d f d d d d e d e . . . 
        2 d d d e d d d d e e d e . . . 
        . e e e e e d d d d d e e . . . 
        . . e d d d d d d d d . . . . . 
        . . . 2 8 2 2 2 2 8 2 2 2 2 . . 
        2 . . 8 2 2 2 2 8 2 2 2 2 2 2 . 
        2 . . 8 8 8 8 8 8 2 2 2 2 2 d d 
        2 2 8 5 8 5 8 8 8 2 8 . . d d d 
        2 2 8 8 8 8 8 8 8 8 8 . 2 . d . 
        2 2 8 8 8 8 8 8 8 8 8 2 2 2 . . 
        . . . . . 8 8 8 8 8 8 8 2 2 2 . 
        . . . . . . . . 8 8 8 8 . . 2 . 
        `],
    180,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`oiraM`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`oiraM`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.placeOnRandomTile(openchest, sprites.dungeon.chestClosed)
    pause(1000)
    game.showLongText("He's improving...", DialogLayout.Bottom)
    game.showLongText("Let's see what else he can do...", DialogLayout.Bottom)
    setLevel(level + 1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pointingLeft = 0
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e e d f d . . . . . 
        . . . e d e d d d f d d d . . . 
        . . . e d e e d d d e d d d . . 
        . . . e e d d d d e e e e . . . 
        . . . . . d d d d d d d . . . . 
        . . . . 2 2 8 2 2 2 . . . . . . 
        . . . 2 2 2 8 2 2 8 2 2 2 . . . 
        . . 2 2 2 2 8 2 2 8 2 2 2 2 . . 
        . . d d 8 8 5 8 8 5 8 8 d d . . 
        . . d d d 8 8 8 8 8 8 d d d . . 
        . . d d 8 8 8 8 8 8 8 8 d d . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . 8 8 8 . . . . 8 8 8 . . . 
        . . 8 8 8 8 . . . . 8 8 8 8 . . 
        `,img`
        . . . . . . . . . . . . . d d d 
        . . . . . 2 2 2 2 2 2 . . d d d 
        . . . . 2 2 2 2 2 2 2 2 2 2 d d 
        . . . . e e e d d d f d . 2 2 2 
        . . . e d e d d d d f d d d 2 2 
        . . . e d e e d d d d e d d d 2 
        . . . e e d d d d d e e e e e . 
        . . . . . d d d d d d d d e . . 
        . . 2 2 2 2 8 2 2 2 2 8 2 . . . 
        . 2 2 2 2 2 2 8 2 2 2 2 8 . . 2 
        d d 2 2 2 2 2 8 8 8 8 8 8 . . 2 
        d d d . . 8 2 8 8 8 5 8 5 8 2 2 
        . d . 2 . 8 8 8 8 8 8 8 8 8 2 2 
        . . 2 2 2 8 8 8 8 8 8 8 8 8 2 2 
        . 2 2 2 8 8 8 8 8 8 8 . . . . . 
        . 2 . . 8 8 8 8 . . . . . . . . 
        `],
    180,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    pause(500)
    mySprite.setImage(assets.image`oiraM`)
})
function clouds () {
    cloudTypeOne = sprites.create(img`
        ........................................
        ........................................
        ...............111......................
        ............1111111.....................
        ...........111111111....................
        ..........1111111111..111...............
        .........11111111111111111......11......
        ....11...11b1111111111111111..11111.....
        ...1111.111bb1111111b111111111111111....
        ..1111111111111111bb11111111111111111...
        bb111111111111111bbb11111111111b1111111.
        .bdd111111d1111ddbbdd111111b1111bb111111
        .bbbdd1ddddb11ddbbdddd1111dbb1d111111111
        ..bbbdddddbbddddddddddd1ddbbbdddd11111..
        ...bbbbbdbbbbbddddbbdddddbbbbbddddd.....
        ....bbbbbbbbbbbbbbbbbbdbbbbbbbbbdd......
        ....bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
        .....bbbbbbb...bbbbbbbbbb..bb...........
        .......bbb......bbbbb...................
        ........................................
        `, SpriteKind.Player)
    cloudTypeOne.setPosition(32, 60)
    cloudTypeTwo = sprites.create(img`
        ........................................
        ........................................
        ......................111...............
        .....................1111111............
        ..............1111..111111111...........
        .............11111111111111b11..........
        .....11.....1111111111111bb1111.........
        ...11111....11111111111bbb11111...11....
        ..1111111..1111111111dbbb1111111.1111...
        ..d1111111111111111111dbb1111111111111..
        .bbd11111111b111111111111111111111111111
        bbbdd11d1111bbb111bd11111d111111b111111.
        bbbbddddd1111bbb11bdd111dd111111bb11111.
        ..bbbddddd111d1111bbddddddddb111111111..
        ....bbdbbdddddd11bbbbbbddddbb1111d1111..
        .....bbbbbddddddbbbbbbbbbbbbbb11dd1b11..
        .....bbbbbbbbdbbbbbbb....bbbbbddddbb....
        .......bbbbbbbbbbbb........bbbbbbbb.....
        ...........bbb................bbb.......
        ........................................
        `, SpriteKind.Player)
    cloudTypeTwo.setPosition(76, 21)
}
function spawnPlayer () {
    clouds()
    mySprite = sprites.create(assets.image`oiraM`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 250
    scene.cameraFollowSprite(mySprite)
}
function createFoe () {
    foe = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(foe, assets.tile`myTile8`)
    foe.follow(mySprite, 75)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let foe: Sprite = null
let cloudTypeTwo: Sprite = null
let cloudTypeOne: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let level = 0
let openchest: Sprite = null
let pointingLeft = 0
pointingLeft = 0
openchest = sprites.create(img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b b b b b b b d d b b b b b b b 
    . b b b b b b c c b b b b b b . 
    b c c c c c b c c b c c c c c b 
    b c c c c c c b b c c c c c c b 
    b c c c c c c c c c c c c c c b 
    b c c c c c c c c c c c c c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Food)
openchest.setPosition(-1000, -1000)
spawnPlayer()
pointingLeft = 0
setLevel(level)
pause(1000)
createFoe()
game.onUpdate(function () {
    animation.stopAnimation(animation.AnimationTypes.All, foe)
    if (foe.vx > 0) {
        animation.runImageAnimation(
        foe,
        [img`
            f f f . . . . . . . . f f f . . 
            c b b c f . . . . . . c c f f . 
            . c b b c f . . . . . . c c f f 
            . c c c b f . . . . . . c f c f 
            . c c b b c f . c c . c c f f f 
            . c b b c b f c c 3 c c 3 c f f 
            . c b c c b f c b 3 c b 3 b f f 
            . . c c c b b c b 1 b b b 1 c . 
            . . . c c c c b b 1 b b b 1 c . 
            . . . . c c b b b b b b b b b c 
            . . . . f b b b b c 1 f f 1 b c 
            . . . c f b b b b f 1 f f 1 f f 
            . . c c f b b b b f 2 2 2 2 f f 
            . . . . f c b b b b 2 2 2 2 f . 
            . . . . . f c b b b b b b f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . f f f . . 
            f f f . . . . . . . . c c f f f 
            c b b c f . . . c c . c c c f f 
            . c b b b f f c c 3 c c 3 c f f 
            . c c c b b f c b 3 c b 3 c f f 
            . c c b c b f c b b b b b b c f 
            . c b b c b b c b 1 b b b 1 c c 
            . c b c c c b b b b b b b b b c 
            . . c c c c c b b c 1 f f 1 b c 
            . . . c f b b b b f 1 f f 1 f c 
            . . . c f b b b b f f f f f f f 
            . . c c f b b b b f 2 2 2 2 f f 
            . . . . f c b b b 2 2 2 2 2 f . 
            . . . . . f c b b b 2 2 2 f . . 
            . . . . . . f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c . c c . . . 
            . . . . . . c c c 3 c c 3 f . . 
            . . . . . c c c b 3 c b 3 c f . 
            . . . . f f b b b b b b b b c f 
            . . . . f f b b b 1 b b b 1 c c 
            . . . f f f c b b b b b b b b c 
            . . . f f f f b b c 1 f f 1 b c 
            . . . b b b c c b f 1 f f 1 f f 
            . . . c c c c f b f f f f f f f 
            . . c c c b b f b f 2 2 2 2 f f 
            . . . c b b c c b 2 2 2 2 2 f . 
            . . c b b c c f f b 2 2 2 f . . 
            . c c c c c f f f f f f f . . . 
            c c c c . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            . c b b c f . . . . . . . c f f 
            . . c b b c f . . . . . . c c f 
            . . c c c b f . . . . . . . f c 
            . . c c b b f f . . . . . f f c 
            . . c b b c b f c c . c c f f f 
            . . c b c c b f c c c c c f f f 
            . . . c c c b c b 3 c c 3 c f . 
            . . . c c c c b b 3 c b 3 b c . 
            . . . . c c b b b b b b b b c c 
            . . . c f b b b 1 1 b b b 1 1 c 
            . . c c f b b b b b b b b b b f 
            . . . . f b b b b c b b b c b f 
            . . . . f c b b b 1 f f f 1 f . 
            . . . . . f c b b b b b b f . . 
            . . . . . . f f f f f f f . . . 
            `],
        100,
        true
        )
    } else if (foe.vx < 0) {
        animation.runImageAnimation(
        foe,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c . . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f b 3 b c 3 b c f b b c c c . 
            . c b b b b b b c f b c b c c . 
            . c b b b b b b c b b c b b c . 
            c b 1 b b b 1 b b b c c c b c . 
            c b b b b b b b b c c c c c . . 
            f b c b b b c b b b b f c . . . 
            f b 1 f f f 1 b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . c c . . c c . . . . . . . . 
            . . c 3 c c 3 c c c . . . . . . 
            . c b 3 b c 3 b c c c . . . . . 
            . c b b b b b b b b f f . . . . 
            c c b b b b b b b b f f . . . . 
            c b 1 b b b 1 b b c f f f . . . 
            c b b b b b b b b f f f f . . . 
            f b c b b b c b c c b b b . . . 
            f b 1 f f f 1 b f c c c c . . . 
            . f b b b b b b f b b c c . . . 
            c c f b b b b b c c b b c . . . 
            c c c f f f f f f c c b b c . . 
            . c c c . . . . . . c c c c c . 
            . . c c c . . . . . . . c c c c 
            . . . . . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c b 1 b b b 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        100,
        true
        )
    }
})
game.onUpdateInterval(100, function () {
	
})
game.onUpdateInterval(3000, function () {
    createFoe()
})
