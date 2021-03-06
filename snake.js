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
var target = { x: 5, y: 5 }
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
    document.getElementById(JSON.stringify(target)).setAttribute('style', 'background-color:green')

}

const isTargetHit = (pos) => {
    debugger
    if (pos.x === target.x && pos.y === target.y)
        return true
    else false
}

const drawSnake = () => {
    clear()
    snake.forEach(a => {
        let x = document.getElementById(JSON.stringify(a))
        x.setAttribute('style', 'background-color:red')
    })
}

const createRandomTarget = (row, col) => {

    let x = Math.floor(Math.random() * row)
    let y = Math.floor(Math.random() * col)
    target = { x, y }
    document.getElementById(JSON.stringify(target)).setAttribute('style', 'background-color:green')
}


var snake = [{ x: 2, y: 3 }, { x: 3, y: 3 }]
var previousDirection = keyCodes.RIGHT

drawSnake()
handleEvent = (key) => {
    switch (key) {
        case keyCodes.ARROW_UP: {

            if (previousDirection !== keyCodes.DOWN) {
                let last = snake[snake.length - 1]
                snake.push({ x: last.x, y: last.y - 1 })
                if (isTargetHit({ x: last.x, y: last.y - 1 })) {
                    snake.push({ x: last.x, y: last.y - 2 })
                    createRandomTarget(18, 18)
                    document.getElementById(JSON.stringify(target)).setAttribute('style', 'background-color:white')

                }
                previousDirection = keyCodes.UP
                snake.shift()
                drawSnake()
            }
            break;
        }

        case keyCodes.ARROW_DOWN: {
            if (previousDirection !== keyCodes.UP) {
                let last = snake[snake.length - 1]
                snake.push({ x: last.x, y: last.y + 1 })
                if (isTargetHit({ x: last.x, y: last.y + 1 })) {
                    snake.push({ x: last.x, y: last.y + 2 })
                    createRandomTarget(18, 18)
                    document.getElementById(JSON.stringify(target)).setAttribute('style', 'background-color:white')


                }
                previousDirection = keyCodes.DOWN
                snake.shift()
                drawSnake()
            }
            break;

        }

        case keyCodes.ARROW_LEFT: {
            if (previousDirection !== keyCodes.RIGHT) {
                let last = snake[snake.length - 1]
                snake.push({ x: last.x - 1, y: last.y })
                if (isTargetHit({ x: last.x - 1, y: last.y })) {
                    snake.push({ x: last.x - 2, y: last.y })
                    createRandomTarget(18, 18)
                    document.getElementById(JSON.stringify(target)).setAttribute('style', 'background-color:white')


                }
                previousDirection = keyCodes.LEFT
                snake.shift()
                drawSnake()
            }
            break;

        }

        case keyCodes.ARROW_RIGHT: {
            if (previousDirection !== keyCodes.LEFT) {
                let last = snake[snake.length - 1]
                snake.push({ x: last.x + 1, y: last.y })
                if (isTargetHit({ x: last.x + 1, y: last.y })) {
                    snake.push({ x: last.x + 2, y: last.y })
                    createRandomTarget(18, 18)
                    document.getElementById(JSON.stringify(target)).setAttribute('style', 'background-color:white')

                }
                previousDirection = keyCodes.RIGHT
                snake.shift()
                drawSnake()
            }
            break;

        }

        default: console.log("Wrong Key Pressed!")
    }
}

document.addEventListener('keydown', (e) => {
    handleEvent(e.key)
})


getApplicableAction = () => {
    switch (previousDirection) {
        case keyCodes.RIGHT:
            return keyCodes.ARROW_RIGHT

        case keyCodes.LEFT:
            return keyCodes.ARROW_LEFT


        case keyCodes.UP:
            return keyCodes.ARROW_UP

        case keyCodes.DOWN:
            return keyCodes.ARROW_DOWN
    }
}


getApplicableSpeed = () => {
    if (snake.length > 5)
        return 1000
    else return 1200
}
setInterval(() => handleEvent(getApplicableAction()),600)






