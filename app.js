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
function assembleGoblin(goblin, index) {
    const goblinDiv = document.createElement('div');
    const nameH = document.createElement('h3');
    const hpP = document.createElement('p');

    nameH.textContent = goblin.name;
    hpP.id = `goblin-health-${index}`;
    hpP.textContent = `health: ${goblin.hp}`;
    goblinDiv.append(nameH, hpP);

    return goblinDiv;
}

// todo: write the actual game code here
function attackHandler() {}

// iterate over array, showing goblins, you know the drill
function displayGoblins() {
    goblins.textContent = '';
    for (const [index, item] of goblinArray.entries()) {
        const target = assembleGoblin(item, index);
        target.addEventListener('click', () => {
            attackHandler(item);
        });
        goblins.append(target);
    }
}

function init() {
    makeGoblin('Ackazar, The Mighty, Ruler of Mordor', 1);
    makeGoblin('bob', 5);
    displayGoblins();
}
init();
console.log(goblinArray);
