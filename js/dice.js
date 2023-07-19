let selected_amount = 1
let selected_dice = 20

const dices = {
    2: 1,
    4: 2,
    6: 3,
    8: 4,
    10: 5,
    12: 6,
    20: 7,
    100: 8
}

function selectAmount(amount){
    let container = document.getElementById('amount_container')

    for(let child of container.childNodes)
        child.id = ''

    let element = container.childNodes[amount-1]
    console.log(container.childNodes)
    element.id = 'selected_amount'

    selected_amount = amount
    roll()
}

function selectDice(dice){
    let container = document.getElementById('dice_container')

    for(let child of container.childNodes)
        child.id = ''

    let dice_id = dices[dice]
    console.log(container.childNodes)
    let element = container.childNodes[dice_id+2]
    element.id = 'selected_dice'

    selected_dice = dice

    roll()
}

function getPositiveRandom(limit){
    return Math.floor(Math.random() * limit) + 1;
}

function generateDice(value){
    let div = document.createElement('div')
    div.className = 'dice'
    div.innerText = String(value)
    return div
}

function roll(){
    let container = document.getElementById('generator_container')
    container.innerHTML = ''
    container.style.width = (5 * selected_amount) + 'vw'

    let sum = 0

    for(let i = 0; i < selected_amount; i++){
        let rolled = getPositiveRandom(selected_dice)
        let div = generateDice(rolled)

        sum += rolled
        container.appendChild(div)
    }

    let result = document.getElementById('result')
    result.innerText = String(sum)
}

function init(){
    for(let i = 1; i <= 8; i++){
        const dice = document.createElement('button')

        dice.className = 'dice'
        dice.id = (i == selected_amount) ? 'selected_amount' : ''
        dice.innerText = String(i)
        dice.onclick = () => { selectAmount(i) }

        document.getElementById('amount_container').appendChild(dice)
    }

    for(let key in dices){
        const dice = document.createElement('button')

        dice.className = 'dice'
        dice.id = (key == selected_dice) ? 'selected_dice' : ''
        dice.innerText = String(key)
        dice.onclick = () => { selectDice(key) }

        document.getElementById('dice_container').appendChild(dice)
    }
}

roll()
init()