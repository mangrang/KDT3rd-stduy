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


async function exec () {
    let user = await call('kim');
    console.log(user+ '반가워');
    let videos = await back();
    console.log(videos +'을 실행했구나');
    let title = await hell();
    console.log(title+'을 실행했구나');
}

exec();