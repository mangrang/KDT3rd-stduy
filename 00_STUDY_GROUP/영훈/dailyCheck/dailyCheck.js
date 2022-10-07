let attend = ['김영훈', '오성인', '남궁수정', '염정호', '천현승', '강민성']


// for (i=1; i < attend.length; i++){
//     const $form = document.querySelector('form')
//     let $input = document.createElement('input')
//     let $label = document.createElement('label')
//     $input.setAttribute('type','checkbox')
//     $input.setAttribute('id',`name${i}`)
//     $input.setAttribute('name','attendance')
//     $label.setAttribute('for',`name${i}`)
//     $label.innerText=`${attend[i]}\n`
//     $form.append($input)
//     $form.append($label)
// }

const form = document.querySelector('form')
const button = document.querySelector('button')
const input = document.querySelector('input')

var checkbox = document.querySelector("input[name=attendance]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});