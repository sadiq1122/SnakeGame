const keyCodes = {
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    UP: 'UP',
    DOWN: 'DOWN'
}

var view = document.getElementById('container')

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 19; j++) {
        let element = document.createElement('div')
        element.setAttribute('class', 'square')
        element.setAttribute('id', JSON.stringify({ x: j, y: i }))
        element.addEventListener('click', () => console.log('Position', element.getAttribute('id')))
        view.appendChild(element)
    }
}
const clear = () => {
    let elements = document.getElementsByClassName('square')
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('style', 'background-color:white')
    }
}


const drawSnake = () => {
    clear()
    snake.forEach(a => {
        let x = document.getElementById(JSON.stringify(a))
        x.setAttribute('style', 'background-color:red')
    })
}
var snake = [{ x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }]
var previousDirection = keyCodes.RIGHT

drawSnake()
handleEvent = (key) => {
    switch (key) {
        case keyCodes.ARROW_UP: {

            if (previousDirection !== keyCodes.ARROW_DOWN && previousDirection !== keyCodes.ARROW_UP) {
                let last = snake[snake.length - 1]
                snake.push({ x: last.x, y: last.y + 1 })
                snake.shift()
                drawSnake()
            }

        }

        case keyCodes.ARROW_DOWN: {

        }

        case keyCodes.ARROW_LEFT: {

        }

        case keyCodes.ARROW_RIGHT: {

        }

        default: console.log("Wrong Key Pressed!")
    }
}

document.addEventListener('keydown', (e) => {
    handleEvent(e.key)
})






