input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Direction, 1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(4, 0)
basic.forever(function () {
	
})
