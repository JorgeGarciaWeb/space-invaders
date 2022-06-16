class Cheese {
    constructor(ctx, playerPosX, playerPosY, playerSizeW, playerSizeH) {

        this.ctx = ctx
        this.bulletPos = {
            x: playerPosX + playerSizeW / 2,
            y: playerPosY + playerSizeH / 2
        }
        this.bulletSize = { w: 25, h: 25 }
        this.imageInstance = undefined

        this.initBullet()
    }

    initBullet() {

        this.imageInstance = new Image()
        this.imageInstance.src = "./img/javascript.png"
    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.w, this.bulletSize.h)
    }

    moveUp() {
        this.bulletPos.y -= 10
    }
}