let num = document.querySelector('.num')
let number = 0;
function inc (){
    number = number+1
    num.innerHTML=number
    if (number != 0) {
        num.style.color = 'red'
    }   else {
        num.style.color = 'black'
    }
}
function res (){
    number = 0
    num.innerHTML=number
    num.style.color = 'black'
}
function dec (){
    number = number-1
    num.innerHTML=number
    if (number != 0) {
        num.style.color = 'red'
    } else {
        num.style.color = 'black'
    }
}

