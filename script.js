score = 0;
cross = true
audiogo=new Audio('gameover.mp3')
audio=new Audio('music.mp3')

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("key code=" + e.keyCode);
    if (e.keyCode == 38) {
        // upar jaane ke liye 
        dino = document.querySelector('.dino')
        dino.classList.add('animatedino')
        setTimeout(() => {
            // remove krdi class jisse process rpt kr sko
            dino.classList.remove('animatedino')
        }, 700);
    }
    if (e.keyCode == 39) {
        // aage peeche 

        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    } if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }
}
// game over checker 
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    // gives calculated/computed  value of current left value  and parse ke bina px me value ret kr rha hai
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)

    if (offsetX < 93 && offsetY < 52) {
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('obstacleAni')
        // game over animation bnd no use of updown keys
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
        }, 1000);
    }
    else if (offsetX < 143 && cross) {
        // dono pass me ho aur cross krlen tbhi score bdhao 
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
            // 1s baad firse cross true 
        }, 1000);

        // score bdhe so does the spd of obstacle 
        setTimeout(() => {
            // ye effect 500 ms baad aye 
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';


        }, 500);
    }
}, 10);

function updateScore(score) {
    scorecont.innerText = "your score :" + score

}