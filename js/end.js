const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const labelLine = document.querySelector('.label-line');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem('hightScore')) || []

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
    labelLine.style.opacity = !username.value ? '1' : '0'
})

function saveHighScore (e) {
    e.preventDefault()
    
    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value,
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = '../index.html'; // Redirect to another page
}