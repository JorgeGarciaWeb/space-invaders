window.onload = () => {
    document.getElementById('start').onclick = () => {


        document.querySelector(".start-button").setAttribute('class', 'start-button hidden')
        document.getElementById('score1').classList.toggle('hidden')
        document.querySelector('canvas').classList.toggle('hidden')

        startGame();

    };

    function startGame() {

        ratsAttack.init()
    }
};