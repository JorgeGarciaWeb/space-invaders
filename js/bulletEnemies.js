class Posits {
    constructor(ctx, enemiesPosX, enemiesPosY, enemiesSizeW, enemiesSizeH) {

        this.ctx = ctx
        this.bulletEnemiesPos = {
            x: enemiesPosX + enemiesSizeW / 2,
            y: enemiesPosY + enemiesSizeH / 2
        }
        this.bulletEnemiesSize = { w: 25, h: 25 }
        this.imageInstance = undefined

        this.initBulletEnemies()

    }

    initBulletEnemies() {

        this.imageInstance = new Image()
        this.imageInstance.src = "./img/posit.png"
    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.bulletEnemiesPos.x, this.bulletEnemiesPos.y, this.bulletEnemiesSize.w, this.bulletEnemiesSize.h)
    }

    moveDown() {

        this.bulletEnemiesPos.y += 4
    }

}