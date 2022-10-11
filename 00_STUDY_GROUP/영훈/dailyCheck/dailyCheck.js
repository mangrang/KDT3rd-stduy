const btn = document.querySelectorAll('.nameBtn')
const sum = document.querySelector('.sum')
const empty = document.querySelector('.empty')
const total = document.getElementsByClassName('nameBtn')
const allCo = document.querySelector('.w-btn-neon2')
const chgClr = document.querySelector('.chgClr')
let randomBtn = ['w-btn-blue','w-btn-pink', 'w-btn-green', 'w-btn-brown', 'w-btn-gra3', 'w-btn-green2', 'w-btn-gray', 'w-btn-red', 'w-btn-skin', 'w-btn-yellow', '.w-btn-gra1']
let nameBtn = 'w-btn-gra3'
let num = Math.floor(Math.random()*4)

chgClr.addEventListener('click', function(){
  chgClr.classList.remove(randomBtn[num])
  num = Math.floor(Math.random()*4)
  nameBtn = randomBtn[num]
  chgClr.classList.add(randomBtn[num])
  
})

btn.forEach((button) => {
  button.addEventListener('click', function ()   {
  
    button.classList.toggle(nameBtn)
    
    let names = document.getElementsByClassName(nameBtn)
    let totalNum = total.length;
    let sumNum = names.length;
    let emptyNum = totalNum-sumNum;
    sum.innerText = sumNum;
    empty.innerText = emptyNum
  })

})


allCo.addEventListener('click', function ()   {
  // button.classList.toggle(nameBtn)
  let names = document.getElementsByClassName(nameBtn)
  let totalNum = total.length;
  let sumNum = names.length;
  let emptyNum = totalNum-sumNum;
  
  if (emptyNum == 0){
    btn.forEach((button) => {
    button.classList.toggle(nameBtn)
    }
 )}else{
    btn.forEach((button) => {
    button.classList.remove(nameBtn)
    button.classList.toggle(nameBtn)
  })}

  totalNum = total.length;
  sumNum = names.length;
  emptyNum = totalNum-sumNum;
  sum.innerText = sumNum;
  empty.innerText = emptyNum
  
})
