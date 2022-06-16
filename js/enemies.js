class Octopus {
    constructor(ctx, enemyPosX, enemyPosY, enemyImg, speed, damage, gameSize) {

        this.ctx = ctx
        this.positionEnemy = { x: enemyPosX, y: enemyPosY }
        this.enemySize = { w: 40, h: 40 }
        this.enemiesSpeed = speed
        this.damage = damage
        this.enemyImg = enemyImg
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()

    }

    //Load image
    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = `./img/piton2.png`
    }

    //Draw the enemies
    draw() {

        this.move()
        this.ctx.drawImage(this.imageInstance, this.positionEnemy.x, this.positionEnemy.y, this.enemySize.w, this.enemySize.h)

    }

    //Bullet enemies
    shootEnemies(bulletsEnemies, storeRandomEnemy) {

        bulletsEnemies.push(new Posits(this.ctx, storeRandomEnemy.positionEnemy.x, storeRandomEnemy.positionEnemy.y, this.enemySize.w, this.enemySize.h))

    }

    //Move the enemies
    move() {

        if (this.positionEnemy.x >= this.gameSize.w - this.enemySize.w || this.positionEnemy.x < 0) {
            this.moveDown()
            this.turnAround()
        }
        this.positionEnemy.x += this.enemiesSpeed


    }

    moveDown() {

        this.positionEnemy.y += 40
    }

    turnAround() {

        this.enemiesSpeed *= -1

    }
}

//Class second enemies
class Piton {
    constructor(ctx, posX, posY, enemyImg, speed, damage, gameSize) {
        this.ctx = ctx
        this.positionEnemy = { x: posX, y: posY }
        this.enemySize = { w: 50, h: 50 }
        this.enemiesSpeed = speed
        this.damage = damage
        this.enemyImg = enemyImg
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()

    }

    //Load image
    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = 'img/octopus1.png'
    }

    //Draw the enemies
    draw() {

        this.move()
        this.ctx.drawImage(this.imageInstance, this.positionEnemy.x, this.positionEnemy.y, this.enemySize.w, this.enemySize.h)

    }

    //Bullet enemies
    shootEnemies(bulletsEnemies, storeRandomEnemy) {

        bulletsEnemies.push(new Posits(this.ctx, storeRandomEnemy.positionEnemy.x, storeRandomEnemy.positionEnemy.y, this.enemySize.w, this.enemySize.h))

    }

    //Move the enemies
    move() {

        if (this.positionEnemy.x >= this.gameSize.w - this.enemySize.w || this.positionEnemy.x < 0) {
            this.moveDown()
            this.turnAround()
        }
        this.positionEnemy.x += this.enemiesSpeed


    }

    moveDown() {

        this.positionEnemy.y += 40
    }

    turnAround() {

        this.enemiesSpeed *= -1

    }
}











