let $body = document.querySelector('body')
let $main = document.querySelector('.main')
let $click = document.querySelector('#click')
let $span = document.querySelector('span')


randomColor = ['red', 'blue', 'yellow', 'bluesky', 'gray']


console.log(randomColor);

function changeColor(){
    let num = Math.floor(Math.random()*5)
    $body.style.backgroundColor = randomColor[num]
    $click.style.backgroundColor = randomColor[num]
    $span.style.color = randomColor[num]

}

