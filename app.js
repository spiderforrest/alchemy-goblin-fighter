import { getRandName } from './lib/gen-rand-name.js';

const wincount = document.getElementById('wincount');
const health = document.getElementById('health');
const player = document.getElementById('player');
const addGoblinInput = document.getElementById('add-goblin-input');
const submit = document.getElementById('submit');
const goblins = document.getElementById('goblins');

let hp = 10;
let wins = 0;
let goblinArray = [];

// adds a new goblin
function makeGoblin(name, health) {
    const newGoblin = {
        name: name,
        hp: health,
    };
    goblinArray.push(newGoblin);
}

// put together the goblin div
function assembleGoblin(index) {
    const goblinDiv = document.createElement('div');
    const nameH = document.createElement('h3');
    const hpP = document.createElement('p');

    nameH.textContent = goblinArray[index].name;
    hpP.textContent = `health: ${goblinArray[index].hp}`;
    goblinDiv.append(nameH, hpP);
    goblinDiv.addEventListener('click', () => {
        attackHandler(index);
    });
    return goblinDiv;
}

// todo: write the actual game code here
function attackHandler(index) {
    // check if he ded
    if (goblinArray[index].hp === 0) return;
    // player attack
    if (Math.floor(Math.random() * 2) === 1) {
        alert(`Hit! ${goblinArray[index].name} takes 1 damage.`);
        goblinArray[index].hp--;
        displayGoblins();
        if (goblinArray[index].hp === 0) {
            wins++;
            displayPlayer();
            alert(`You killed ${goblinArray[index].name}!`);
        }
    } else {
        alert('Miss!');
    }

    // him attack
    if (Math.floor(Math.random() * 2) === 1) {
        alert(`Hit! ${goblinArray[index].name} does 1 damage.`);
        hp--;
        displayPlayer();
    } else {
        alert(`${goblinArray[index].name} misses you!`);
    }
}

// iterate over array, showing goblins, you know the drill
function displayGoblins() {
    goblins.textContent = '';
    for (const [index, _item] of goblinArray.entries()) {
        const target = assembleGoblin(index);
        goblins.append(target);
    }
}

function displayPlayer() {
    wincount.textContent =
        wins === 1 ? 'You have defeated 1 goblin!' : `You have defeated ${wins} goblins!`;
    health.textContent = 'HP: ' + hp;
}

submit.addEventListener('click', () => {
    const name = addGoblinInput.value || getRandName();
    makeGoblin(name, 3);
    displayGoblins();
});

function init() {
    makeGoblin('Ackazar, The Mighty, Ruler of Mordor, Slayer of Heros, Harbringer of Calamity', 1);
    makeGoblin('bob', 5);
    displayGoblins();
    displayPlayer();
}
init();
