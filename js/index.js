window.onload = () => {
    document.getElementById('start').onclick = () => {


        document.querySelector(".start-button").setAttribute('class', 'start-button hidden')
        document.getElementById('score1').classList.toggle('hidden')
        document.querySelector('canvas').classList.toggle('hidden')

        this.music = new Audio("./sound/musicGame.mp3")
        this.music.play()
        this.music.loop = true
        this.music.volumen = 1
        startGame();

    };

    function startGame() {

        ratsAttack.init()
    }
};