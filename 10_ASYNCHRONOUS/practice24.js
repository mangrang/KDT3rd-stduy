function changeColor (color){
    return new Promise (function(resolve, reject){
        setTimeout(function (){
            let body = document.querySelector('body');
            body.style.backgroundColor = color;
            resolve(color)
        }, 1000)
    })
}

changeColor('red')
    .then(function () {
        return changeColor('orange');
    }).then(function () {
        return changeColor('yellow');
    }).then(function () {
        return changeColor('green');
    }).then(function () {
        return changeColor('blue');
    })