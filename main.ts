controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -132.5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (level == 0) {
        game.over(false)
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
}
function levels () {
    // level 1
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
function spawnPlayer () {
    pixelsToMeters = 30
    mySprite = sprites.create(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 250
    scene.cameraFollowSprite(mySprite)
}
let pixelsToMeters = 0
let cloudTypeTwo: Sprite = null
let cloudTypeOne: Sprite = null
let mySprite: Sprite = null
let level = 0
level = 0
spawnPlayer()
levels()
