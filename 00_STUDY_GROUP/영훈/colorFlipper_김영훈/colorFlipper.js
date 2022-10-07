let $body = document.querySelector('body')
let $main = document.querySelector('.main')
let $click = document.querySelector('#click')
let $span = document.querySelector('span')


randomColor = ['rgba(133,122,200)', 'green', 'F15025', 'Red']


console.log(randomColor);

function changeColor(){
    let num = Math.floor(Math.random()*4)
    $body.style.backgroundColor = randomColor[num]
    $click.style.backgroundColor = randomColor[num]
    $span.style.color = randomColor[num]
    $span.innerText = randomColor[num]
}

function simpleColor(){
    $body.style.backgroundColor = '#f3b6e8'
    $click.style.backgroundColor = '#f3b6e8'
    $span.style.color = '#f3b6e8'
    $span.innerText = '#f3b6e8'
}


function hoverCol() {
    $click.style.backgroundColor = 'black'
    $click.style.color = 'white'
}

function outCol() {
    let spanStyle = $span.style.color
    $click.style.backgroundColor = spanStyle
    $click.style.color = 'black'
}


$click.addEventListener('mouseover', hoverCol)
$click.addEventListener('mouseout', outCol)
