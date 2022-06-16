class Player {
    constructor(ctx, posX, posY, playerImg, gameSize) {

        this.ctx = ctx
        this.positionPlayer = { x: posX, y: posY }
        this.playerSize = { w: 80, h: 80 }
        this.playerImg = playerImg
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()
    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = `./img/player2.png`
    }


    draw() {

        this.moveLeft()
        this.moveRight()
        this.ctx.drawImage(this.imageInstance, this.positionPlayer.x, this.positionPlayer.y, this.playerSize.w, this.playerSize.h)
    }

    //All moves

    moveLeft() {
        if (this.positionPlayer.x < 10) {
            this.positionPlayer.x = 10
        }
        this.positionPlayer.x -= 20
    }

    moveRight() {
        if (this.positionPlayer.x >= 1180) {
            this.positionPlayer.x -= 15
        }
        this.positionPlayer.x += 20
    }

    shoot(bullet) {

        bullet.push(new Cheese(this.ctx, this.positionPlayer.x, this.positionPlayer.y, this.playerSize.w, this.playerSize.h - 75))
    }



}






