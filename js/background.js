class Background {

    constructor(ctx, gameSize) {

        this.ctx = ctx
        this.backgroundPosition = { x: 0, y: 0 }
        this.backgroundSize = { w: gameSize.w, h: gameSize.h }

        this.imageInstance = new Image()
        this.imageInstance.src = `./img/background.jpeg`
        this.velY = 1
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.backgroundPosition.x, this.backgroundPosition.y, this.backgroundSize.w, this.backgroundSize.h)
        this.ctx.drawImage(this.imageInstance, this.backgroundPosition.x, this.backgroundPosition.y - this.backgroundSize.h, this.backgroundSize.w, this.backgroundSize.h)
        this.move()
    }

    move() {
        if (this.backgroundPosition.y >= this.backgroundSize.h) {
            this.backgroundPosition.y = 0
        }
        this.backgroundPosition.y += this.velY
    }
}







