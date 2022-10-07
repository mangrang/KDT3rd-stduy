
const inputForm = document.querySelector('#timeForm')
inputForm.addEventListener('submit', function(event){
    event.preventDefault();
    const inputDay = document.querySelector('input[name="timeCal"]')
    const dDay = inputDay.value
    const today = new Date()
    const wDay = new Date(dDay)-9*1000*60*60;

    let fDay = wDay-today 
        if (fDay < 0){
            fDay = today-wDay    
    }
    const dDate = Math.floor(fDay/1000/60/60/24)
    let rHour = fDay-dDate*1000*60*60*24
    const dHour = Math.floor(rHour/1000/60/60)
    let rMinute = rHour-dHour*1000*60*60
    const dMinunte = Math.floor(rMinute/1000/60)
    let rSecond = rMinute-dMinunte*1000*60
    const dSecond = Math.floor(rSecond/1000)


    
    if (isNaN(fDay) == true || isNaN(Number(dDay)) == false){
       alert('형식에 맞게 입력해 주세요.')
       inputDay.value = ''
    } else {
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        const body = document.querySelector('body')
        body.append(ul);
        ul.append(li);
        li.innerText = `${dDay}까지 남은 시간은 ${dDate}일 ${dHour}시간 ${dMinunte}분 ${dSecond}초`;
        inputDay.value = ''

    }})


// while (true){
//     const inputDay = document.querySelector('input[name="timeCal"]')
//     const dDay = inputDay.value
//     const today = new Date()
//     const wDay = new Date(dDay)-9*1000*60*60;

//     let fDay = wDay-today 
//         if (fDay < 0){
//             fDay = today-wDay    
//     }
//     const dDate = Math.floor(fDay/1000/60/60/24)
//     let rHour = fDay-dDate*1000*60*60*24
//     const dHour = Math.floor(rHour/1000/60/60)
//     let rMinute = rHour-dHour*1000*60*60
//     const dMinunte = Math.floor(rMinute/1000/60)
//     let rSecond = rMinute-dMinunte*1000*60
//     const dSecond = Math.floor(rSecond/1000)

    
//     if (isNaN(fDay) == true || isNaN(Number(dDay)) == false){
//        console.log('형식에 맞게 입력해 주세요.')
//     } else {
//         console.log(`${dDate}일 ${dHour}시간 ${dMinunte}분 ${dSecond}초`);
//         break;
//     } 
// }