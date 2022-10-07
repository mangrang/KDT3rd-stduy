const btn = document.querySelectorAll('.nameBtn')
const sum = document.querySelector('.sum')
const empty = document.querySelector('.empty')
const total = document.getElementsByClassName('nameBtn')
const allCo = document.querySelector('.w-btn-neon2')
btn.forEach((button) => {
  button.addEventListener('click', function ()   {
    button.classList.toggle('w-btn-gra3')
    
    let names = document.getElementsByClassName('w-btn-gra3')
    let totalNum = total.length;
    let sumNum = names.length;
    let emptyNum = totalNum-sumNum;
    sum.innerText = sumNum;
    empty.innerText = emptyNum
  })

})


allCo.addEventListener('click', function ()   {
  // button.classList.toggle('w-btn-gra3')
  let names = document.getElementsByClassName('w-btn-gra3')
  let totalNum = total.length;
  let sumNum = names.length;
  let emptyNum = totalNum-sumNum;
  
  if (emptyNum == 0){
    btn.forEach((button) => {
    button.classList.toggle('w-btn-gra3')
    }
 )}else{
    btn.forEach((button) => {
    button.classList.remove('w-btn-gra3')
    button.classList.toggle('w-btn-gra3')
  })}
  totalNum = total.length;
  sumNum = names.length;
  emptyNum = totalNum-sumNum;
  sum.innerText = sumNum;
  empty.innerText = emptyNum
  
})
