function setLevel (level: number) {
    if (level == 0) {
        tiles.setTilemap(tilemap`level1`)
        scene.setBackgroundColor(9)
        tiles.placeOnRandomTile(mySprite, sprites.castle.saplingOak)
    }
    if (level == 1) {
        tiles.setTilemap(tilemap`level2`)
    }
    if (level == 2) {
        tiles.setTilemap(tilemap`level2`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
    pause(500)
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
    pixelsToMeters = 30
    mySprite = sprites.create(assets.image`oiraM`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 250
    scene.cameraFollowSprite(mySprite)
}
let pixelsToMeters = 0
let cloudTypeTwo: Sprite = null
let cloudTypeOne: Sprite = null
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
