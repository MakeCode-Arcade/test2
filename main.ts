sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (ball.vy > 0) {
        ball.setVelocity(ball.vx, ball.vy * -1)
        info.changeScoreBy(1)
        music.playTone(523, music.beat(BeatFraction.Eighth))
    }
})
let ball: Sprite = null
game.setDialogFrame(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 1 1 1 1 1 1 1 1 1 1 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
game.showLongText("操作平台來擊球!", DialogLayout.Bottom)
info.setScore(0)
let paddle = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Player)
paddle.setPosition(80, 96)
controller.moveSprite(paddle, 150, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
ball = sprites.createProjectileFromSprite(img`
. . 5 5 . . 
. 5 5 5 5 . 
5 5 5 5 5 5 
5 5 5 5 5 5 
. 5 5 5 5 . 
. . 5 5 . . 
`, paddle, 50, -50)
ball.setFlag(SpriteFlag.BounceOnWall, true)
forever(function () {
    if (ball.y > 112) {
        game.over(false)
    }
})
forever(function () {
    pause(5000)
    if (ball.vx >= 0) {
        ball.vx += 5
    } else {
        ball.vx += -5
    }
    if (ball.vy >= 0) {
        ball.vy += 5
    } else {
        ball.vy += -5
    }
})
