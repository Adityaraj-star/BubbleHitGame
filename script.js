const panelMain = document.querySelector('#panel-main');
const timer = document.querySelector('#timer');
const hit = document.querySelector('#hit');
const score = document.querySelector('#score');


let timerVal = 60;
let scoreVal = 0; 
let hitVal = 0;


function renderBubbles() {
    let bubblesHTML = '';

    for (let i = 0; i < 286; i++) {
        const html = 
            `
            <div class="bubble">${Math.floor(Math.random() * 10)}</div>
            `;
        bubblesHTML += html;
    }

    panelMain.innerHTML = bubblesHTML;
}

function runTimer() {
    const interval = setInterval(() => {
        if (timerVal >= 0) {
            timer.textContent = `${timerVal--}`;
        } else {
            clearInterval(interval);
            panelMain.innerHTML = '';
        }
    }, 1000);
}

function getNewHit() {
    hitVal = Math.floor(Math.random() * 10)
    hit.textContent = `${hitVal}`;
}

function increaseScore() {
    scoreVal += 10;
    score.textContent = `${scoreVal}`;
}

function decreaseScore() {
    scoreVal -= 5;

    if (scoreVal < 0) {
        scoreVal = 0;
    }

    score.textContent = `${scoreVal}`
}

panelMain.addEventListener('click', (event) => {
    const bubbleVal = Number(event.target.innerText);

    if (hitVal === bubbleVal) {
        increaseScore();
        renderBubbles();
        getNewHit();
    } else {
        decreaseScore();
    }
});

renderBubbles();
runTimer();
getNewHit();



