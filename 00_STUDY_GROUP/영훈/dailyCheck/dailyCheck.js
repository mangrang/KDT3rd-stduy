const btn = document.querySelectorAll('.nameBtn')
const sum = document.querySelector('.sum')
const empty = document.querySelector('.empty')
const latBoy = document.querySelector('.latBoy')
const total = document.getElementsByClassName('nameBtn')
const allCo = document.querySelector('.w-btn-neon2')
const chgClr = document.querySelector('.chgClr')
const latBtn = document.querySelector('.latBtn')
let randomBtn = ['w-btn-blue','w-btn-pink', 'w-btn-green', 'w-btn-brown', 'w-btn-gra3', 'w-btn-green2', 'w-btn-gray', 'w-btn-skin', 'w-btn-yellow', '.w-btn-gra1']
let namClr = 'w-btn-gra3'
let redClr = 'w-btn-red'
let num = Math.floor(Math.random()*12)

chgClr.addEventListener('click', function(){
  btn.forEach((button) => {
    button.classList.remove(namClr)

    })

    num = Math.floor(Math.random()*4)
    namClr = randomBtn[num]


    let names = document.getElementsByClassName(namClr)
    let totalNum = total.length;
    let sumNum = names.length;
    let emptyNum = totalNum-sumNum;
    sum.innerText = sumNum;
    empty.innerText = emptyNum

})

btn.forEach((button) => {
  button.addEventListener('click', function ()   {
    button.classList.remove(redClr)
    button.classList.toggle(namClr)
    let names = document.getElementsByClassName(namClr)
    let redNames = document.getElementsByClassName(redClr)
    let totalNum = total.length;
    let redNum = redNames.length;
    let sumNum = names.length;
    let emptyNum = totalNum-sumNum-redNum;
    sum.innerText = sumNum;
    latBoy.innerText = redNum
    empty.innerText = emptyNum
    
  })


  button.addEventListener('dblclick', function(){
    button.classList.remove(namClr)
    button.classList.toggle(redClr)
    let names = document.getElementsByClassName(namClr)
    let redNames = document.getElementsByClassName(redClr)
    let totalNum = total.length;
    let redNum = redNames.length;
    let sumNum = names.length;
    let emptyNum = totalNum-sumNum-redNum;
    sum.innerText = sumNum;
    latBoy.innerText = redNum
    empty.innerText = emptyNum

  })

})




allCo.addEventListener('click', function ()   {
  // button.classList.toggle(namClr)
  let names = document.getElementsByClassName(namClr)
  
  let totalNum = total.length;
  let sumNum = names.length;
  let emptyNum = totalNum-sumNum;
  
  if (emptyNum == 0){
    btn.forEach((button) => {
    button.classList.toggle(namClr)
    button.classList.remove(redClr)
    }
 )}else{
    btn.forEach((button) => {
    button.classList.remove(redClr)
    button.classList.remove(namClr)
    button.classList.toggle(namClr)
  })}
  let redNames = document.getElementsByClassName(redClr)
  let redNum = redNames.length;
  totalNum = total.length;
  sumNum = names.length;
  emptyNum = totalNum-sumNum-redNum;
  sum.innerText = sumNum;
  latBoy.innerText = redNum
  empty.innerText = emptyNum
  
})
