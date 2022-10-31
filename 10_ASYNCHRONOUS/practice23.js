function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000)
    });
}

function back() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {  
            txt = 'back'
            console.log(txt);
            resolve(txt);
        }, 1000)
    })
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            message ='callback'
            resolve(message);
        }, 1000)
    })
}

let txt
let message

call('kim').then(function (name) {
    console.log(name + ' 반가워');
    return back()
}).then(function () {
    console.log(txt + '을 실행했구나');
    return hell()
}).then(function () {
    console.log('여기는 ' + message);
})