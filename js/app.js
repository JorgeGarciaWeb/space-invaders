const ratsAttack = {
    name: "Rats Attack",
    author: "Jorge García & Mónica Sánchez",
    version: "1.0.0 Beta Version",
    License: undefined,
    description: "Kill the enemies",
    gameSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    playerRat: undefined,
    bullet: [],
    enemies: [],
    bulletsEnemies: [],
    lives: 3,
    livesTotal: undefined,
    storeRandomEnemy: [],
    framesIndex: 0,
    score: 0,
    scorePlayer: undefined,
    FPS: 60,
    music: undefined,
    collindingBulletIdx: false,
    background: undefined,
    init(canvasId) {

        this.ctx = document.querySelector(canvasId).getContext("2d")
        this.scorePlayer = document.querySelector("#scoreTotal")
        this.livesTotal = document.querySelector('#livesTotal')
        // this.music = new Audio("./sound/musicGame.mp3")
        // this.music.play()
        // this.music.loop = true
        // this.music.volumen = 1
        this.setDimensions(canvasId)
        this.setEventListeners()
        this.createPlayer()
        this.createEnemies()
        this.drawAll()
        this.resetPlayer()

    },

    //Dimensions
    setDimensions(canvasId) {

        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight - 150
        }
        document.querySelector(canvasId).setAttribute("width", this.gameSize.w)
        document.querySelector(canvasId).setAttribute("height", this.gameSize.h)
    },

    //Move the player
    setEventListeners() {

        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.playerRat.moveLeft()
                    break;
                case 'ArrowRight':
                    this.playerRat.moveRight()
                    break;
                case ' ':
                    this.playerRat.shoot(this.bullet)
                    break;

            }
        }
    },

    //Create player
    createPlayer() {

        this.playerRat = new Player(this.ctx, 160, 80, 40, 3, this.gameSize)

    },

    resetPlayer() {

        this.playerRat.positionPlayer.x = this.gameSize.w / 2
        this.playerRat.positionPlayer.y = this.gameSize.h - 85
    },


    //Create enemies
    createEnemies() {

        //Enemies row one
        this.enemies.push(new Octopus(this.ctx, 50, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 100, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 150, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 200, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 250, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 300, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 350, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 400, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 450, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 500, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 550, 20, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 50, 90, 80, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 100, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 150, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 200, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 250, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 300, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 350, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 400, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 450, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 500, 90, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 550, 90, 40, 1, 1, this.gameSize))



        // // //Enemies row two

        this.enemies.push(new Octopus(this.ctx, 50, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 100, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 150, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 200, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 250, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 300, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 350, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 400, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 450, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 500, 170, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 550, 170, 40, 1, 1, this.gameSize))


        // // //Enemies row three

        this.enemies.push(new Piton(this.ctx, 50, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 100, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 150, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 200, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 250, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 300, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 350, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 400, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 450, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 500, 270, 40, 1, 1, this.gameSize))
        this.enemies.push(new Piton(this.ctx, 550, 270, 40, 1, 1, this.gameSize))

        // // //Enemies row three

        this.enemies.push(new Octopus(this.ctx, 50, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 100, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 150, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 200, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 250, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 300, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 350, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 400, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 450, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 500, 370, 40, 1, 1, this.gameSize))
        this.enemies.push(new Octopus(this.ctx, 550, 370, 40, 1, 1, this.gameSize))
    },

    //DrawAll
    drawAll() {
        this.reset()
        intervalId = setInterval(() => {
            this.framesIndex++
            if (this.framesIndex % 50 === 0) {
                this.enemies[0].shootEnemies(this.bulletsEnemies, this.storeRandomEnemy)
            }
            this.clearAll()
            this.background.draw()
            this.playerRat.draw()

            this.bullet.forEach((elem) => {
                elem.moveUp()
                elem.draw()
                this.clearBullet()
            })

            this.bulletsEnemies.forEach((elmBullets) => {

                elmBullets.moveDown()
                elmBullets.draw()
                this.clearBulletEnemies()
            })

            this.enemies.forEach((elm) => {
                elm.move()
                elm.draw()
                this.clearOctopus()

            })
            this.randomEnemies()
            this.collisionDeadEnemy()
            this.collisionDeadPlayer()
            this.collisionEnemies()
            this.gameOver()

        }, 750 / 60)
    },

    reset() {
        this.background = new Background(this.ctx, this.gameSize)
    },

    //Shoot random enemies
    randomEnemies() {

        this.storeRandomEnemy = this.enemies[Math.floor(Math.random() * this.enemies.length)]

    },

    //CLEAR
    clearAll() {

        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    clearBullet() {

        this.bullet = this.bullet.filter(elem => elem.bulletPos.y >= 0)
    },
    clearOctopus() {

        this.enemies = this.enemies.filter(elem => elem.positionEnemy.y >= 0)
    },
    clearBulletEnemies() {

        this.bulletsEnemies = this.bulletsEnemies.filter(elm => elm.bulletEnemiesPos.y >= 0)
    },

    //COLLISIONS
    collisionDeadEnemy() {

        this.enemies.forEach((elmEnemy) => {
            this.bullet.forEach((elmBullet) => {
                if (elmEnemy.positionEnemy.x < elmBullet.bulletPos.x + elmBullet.bulletSize.w &&
                    elmEnemy.positionEnemy.x + elmEnemy.enemySize.w > elmBullet.bulletPos.x &&
                    elmEnemy.positionEnemy.y < elmBullet.bulletPos.y + elmBullet.bulletSize.h &&
                    elmEnemy.enemySize.h + elmEnemy.positionEnemy.y > elmBullet.bulletPos.y) {
                    this.score += 25
                    console.log(this.score)
                    this.scorePlayer.innerHTML = this.score
                    const enemiesRemove = this.enemies.indexOf(elmEnemy)
                    this.enemies.splice([enemiesRemove], 1)
                    this.bullet.shift()

                }
            })
        })
    },

    //COLLISIONS PLAYER

    collisionDeadPlayer() {


        this.bulletsEnemies.forEach((elem, idx) => {
            if (this.playerRat.positionPlayer.x < elem.bulletEnemiesPos.x + elem.bulletEnemiesSize.w &&
                this.playerRat.positionPlayer.x + this.playerRat.playerSize.w > elem.bulletEnemiesPos.x &&
                this.playerRat.positionPlayer.y < elem.bulletEnemiesPos.y + elem.bulletEnemiesSize.h &&
                this.playerRat.playerSize.h + this.playerRat.positionPlayer.y > elem.bulletEnemiesPos.y) {
                this.lives--
                this.livesTotal.innerHTML = this.lives
                this.removeBullet(idx)


            }
        })
    },

    //COLLISION PLAYER
    collisionEnemies() {
        this.enemies.forEach((elm) => {

            if (elm.positionEnemy.x < this.playerRat.positionPlayer.x + this.playerRat.playerSize.w &&
                elm.positionEnemy.x + elm.enemySize.w > this.playerRat.positionPlayer.x &&
                elm.positionEnemy.y < this.playerRat.positionPlayer.y + this.playerRat.playerSize.h &&
                elm.enemySize.h + elm.positionEnemy.y > this.playerRat.positionPlayer.y) {

            }
        })
    },

    removeBullet(idx) {

        this.bulletsEnemies.splice(idx, 1)
    },


    //END OF GAME

    gameOver() {

        if (this.lives <= 0) {

            this.ctx.font = "50px Audiowide"
            this.ctx.fillStyle = 'white';
            this.ctx.textAlign = "center"
            this.ctx.textBaseline = "middle"
            this.ctx.fillText("GAME OVER!", window.innerWidth / 2, window.innerHeight / 2);
            clearInterval(intervalId)
        }
    }

}













