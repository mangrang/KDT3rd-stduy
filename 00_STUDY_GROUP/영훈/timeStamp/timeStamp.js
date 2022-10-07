while (true){
    const dDay = prompt('원하는 날짜를 입력해주세요 (2022-12-25)')
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
    } else {
        alert (`${dDate}일 ${dHour}시간 ${dMinunte}분 ${dSecond}초`);
        break;
    } 
}