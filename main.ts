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
    cooldown = 2000
    if (game.runtime() - press >= cooldown) {
        mySprite.sayText("im ready", 200, false)
        projectile = sprites.createProjectileFromSprite(bamboompow[randint(0, bamboompow.length - 1)], mySprite, 0, 0)
        mySprite.setImage(assets.image`strapped`)
        pause(100)
        mySprite.setImage(assets.image`strapped`)
        pause(200)
        projectile.destroy()
        press = game.runtime()
        if (projectile.overlapsWith(foe)) {
            info.changeLifeBy(1)
        }
    } else {
        mySprite.sayText("not yet", 200, false)
    }
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
    mySprite.setImage(img`
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
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    gottem = 1
    tiles.placeOnRandomTile(openchest, sprites.dungeon.chestClosed)
    pause(1000)
    game.showLongText("Hooray! You made it!", DialogLayout.Bottom)
    game.showLongText("Those ducks are vicious huh?", DialogLayout.Bottom)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    pause(200)
    game.over(false)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (pointingLeft == 1) {
        mySprite.setImage(img`
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
            `)
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
    } else {
        mySprite.setImage(assets.image`oiraM`)
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
    }
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(foe, assets.tile`myTile8`)
    foe.follow(mySprite, 75)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 b c 5 5 d 4 c . . 
        . b b b b 5 5 5 b f d d 4 4 4 b 
        . b d 5 b 5 5 b c b 4 4 4 4 b . 
        . . b 5 5 b 5 5 5 4 4 4 4 b . . 
        . . b d 5 5 b 5 5 5 5 5 5 b . . 
        . b d b 5 5 5 d 5 5 5 5 5 5 b . 
        b d d c d 5 5 b 5 5 5 5 5 5 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `)
    sprite.setImage(img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e e 4 f 4 . . . . . 
        . . . e 4 e 4 4 4 f 4 4 4 . . . 
        . . . e 4 e e 4 4 4 e 4 4 4 . . 
        . . . e e 4 4 4 4 e e e e . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . 2 2 8 2 2 2 . . . . . . 
        . . . 2 2 2 8 2 2 8 2 2 2 . . . 
        . . 2 2 2 2 8 2 2 8 2 2 2 2 . . 
        . . 4 4 8 8 5 8 8 5 8 8 4 4 . . 
        . . 4 4 4 8 8 8 8 8 8 4 4 4 . . 
        . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . 8 8 8 . . . . 8 8 8 . . . 
        . . 8 8 8 8 . . . . 8 8 8 8 . . 
        `)
    info.changeLifeBy(-1)
    pause(500)
    otherSprite.destroy()
    mySprite.setImage(img`
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
        `)
})
let cloudTypeTwo: Sprite = null
let cloudTypeOne: Sprite = null
let foe: Sprite = null
let projectile: Sprite = null
let press = 0
let cooldown = 0
let mySprite: Sprite = null
let bamboompow: Image[] = []
let openchest: Sprite = null
let pointingLeft = 0
let gottem = 0
let level = 0
level = 0
gottem = 0
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
info.setLife(20)
pointingLeft = 0
setLevel(level)
pause(1000)
createFoe()
bamboompow = [img`
    .33...................44......
    .33...................44......
    .3333............33..344......
    .3333............33..344......
    .44d111111444411111441111111..
    .4411111114444111114411111111.
    ..1118888811118888811888888811
    .11888888888ff8888888f88888811
    .11888888888ff8888888f88888811
    .11888858888ff8558888f8811111.
    .11888858888ff8558888f8811111.
    .11888858888ff8558888f881111..
    .11888858888ff8118888f888811..
    .11888818888ff8118888f888811..
    .11888818888ff8118888f888811..
    .11888818888ff8558888f8811....
    .11888818888ff8558888f8811....
    ...118888811888888888f8811....
    .2233888881111888881188811....
    .2233888881111888881188811....
    .2233888881111888881188811....
    .22551111155dd111115511122....
    .22551111155dd111115511122....
    .2222dd222dddd2443322d44......
    ...2255222442244422222....22..
    ...2255222442244422222....22..
    .225544...44442......42222....
    .225544...44442......42222....
    22244.................2222....
    ..............................
    `, img`
    ...............................
    ...............................
    .......22222222222222..........
    .....224444455544444422222.....
    .....224444455544444422222.....
    .2222555dd4455555444444422.....
    .2222555dd4455555444444422.....
    .11111151111dd51155115512211...
    166666616666111661166166116611.
    166666616666611661166166116611.
    166116616611661661166166116611.
    166116616611661661166166116611.
    166666116611661661166166666611.
    166666116611661661166166666611.
    166166616666611661166166116611.
    166116616611661661166166116611.
    166116616611661661166166116611.
    1666666166111661166111661166...
    1666661166111661166111111111...
    b11111bb11224412211bbbbdddbb...
    b11111bb11224412211bbbbdddbb...
    bddddbbbbbbbbbbbbbbbbbbdddbb...
    bbbdd111331111d11dd1111dbbbb...
    bbbdd111331111d11dd1111dbbbb...
    ...bbbbddd11113dddd11bbb.......
    ...bbbbddd11113dddd11bbb.......
    ...222244444444444444222.......
    ...222244444444444444222.......
    .....222444444444222222........
    ...............................
    `, assets.image`sabre`]
game.onUpdateInterval(3000, function () {
    createFoe()
})
game.onUpdateInterval(200, function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.castle.saplingOak)) {
        if (gottem == 1) {
            game.over(true)
        }
    }
})
