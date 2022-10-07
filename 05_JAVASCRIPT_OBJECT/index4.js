console.log("connected");


// document 요소 다루기 (읽고 쓰기)

// 1. HTML 요소 내용(content)을 읽고 쓰기
let div1 = document.getElementById('div1');
console.log(div1);

// innetHTML 속성
// : 요소 안의 "코드"를 가져오거나 수정
// => 입력된 문자열을 HTML 형식으로!
// => 읽기: 요소.innerHTML
// => 쓰기: 요소.innerHTML = 수정하려는 태그
console.log(div1.innerHTML); // 읽기
div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &star;'

// innerText 속성 
// : 요소 안의 "텍스트"를 가져오거나 수정
// => 입력된 문자열을 그대로!!
// 읽기: 요소.innerText
// 쓰기: 요소.innetText = 수정하려는 텍스트
console.log(div1.innerText); // 읽기
div1.innerText = '여기는 <b>첫번째</b> 태그입니다. &star;' // 쓰기
div1.innerText = '안녕하세요!'; // 쓰기

// textContent 속성
// : innerText와 마찬가지로 텍스트 정보를 표시
// IE9 이전 버전에서는 사용 불가능
console.log(div1.textContent); // 읽기
div1.textContent = "안녕하세요222!1!!"

// ===================================
// 2. 속성 접근
// 요소.속성명
// let beach = document.querySelector('#beach');
let beach = document.getElementById('beach');
console.log(beach.id);
console.log(beach.src);
console.log(beach.width);
console.log(beach.alt);

let google = document.getElementById('google');
console.log(google);
console.log(google.href);
console.log(google.target);
console.log(google.id);

// getAttribute(): 속성값 가져오기
// setAttribute(): 속성값 설정하기
console.log(google.getAttribute('href'));
google.setAttribute('href', 'https://www.naver.com');
google.innerText = 'naver';

// (연습)
// 이미지 요소
// - 이미지 바꾸기
// - width/heigth 바꾸기
console.log(beach);

beach.setAttribute('src', './image/baseball.png');
beach.setAttribute('width', '400');
beach.setAttribute('id', 'baseball');
beach.setAttribute('alt', 'baseball');

console.log(beach);

// let baseball = document.querySelector('baseball');
let baseball = document.getElementById('baseball');
console.log(baseball);

// ========================================================
// 3. 스타일(css) 제어
// : javascript로 css 설정 가능

let h1 = document.querySelector('h1');

// 3-1 inline style 방식

// console.log(h1);
// console.log(h1.style);
// console.log(h1.style.fontSize); // camel case

// h1.style.color = 'limegreen';
// h1.style.backgroundColor = 'skyblue';
// h1.style.border = '4px solid brown'
// h1.style.textShadow = '2px 2px 10px #f005'; // #ff000050

let lis = document.querySelectorAll('li')
// console.log(lis);

// 반복문을 이용해서 여러 요소 스타일을 한번에 설정
// for (let i = 0; i < lis.length; i ++) {
//     console.log(lis[i]);
//     lis[i].style.color= 'rgb(0, 100, 200)';
//     lis[i].style.fontSize= '20px';
//     lis[i].style.backgroundColor= '#ddd';
// }

// for...of 반복문
// for (let 반복변수 of 배열)
const mylists = ['a', 'b', 'c', 'd'];
for (let list of mylists) {
    console.log(list);     
}

// for (let li of lis) {
//     console.log(li);
//     li.style.color= 'rgb(0, 100, 200)';
//     li.style.position= 'relative';
//     li.style.fontSize= '20px';
//     li.style.backgroundColor= '#ddd';
// }

// 3-2 클래스 제어 방식
// classList 속성
// - add(클래스명): 클래스 추가
// - remove(클래스명): 클래스 삭제
// - toggle(클래스명): 클래스 있으면 제거, 없으면 추가
// - contains(클래스명): 해당 클래스가 있는지 boolean 값으로 반환


// lis에 저장되어 있는 각각 li 요소에 접근해 .list-style 클래스 추가하기
// 반복문 사용하기~
// for (let i = 0; i < lis.length; i++) {
// 	lis[i].classList.add('list-style');
// }

// for .. of 반복문
// lis: li 태그를 모두 가져오는 배열
for (let li of lis) {
	// console.log(li);
	li.classList.add('list-style');
}

// remove()
console.log(h1.classList); // 삭제 전
h1.classList.remove('title');
console.log(h1.classList); // 삭제 후

// toggle()
h1.classList.toggle('happy'); // 없어서 추가
h1.classList.toggle('happy'); // 있어서 제거

// contains()
console.log(h1.classList.contains('header-color')); // true
console.log(h1.classList.contains('lukcy')); // false

// ============================================
// 계층 이동
// 부모, 자식 형제
const apple = document.querySelector('li');
const fruits = document.querySelector('ul');
console.log(apple);



// 1. 부모 노드 찾기
// 직속 부모는 하나
console.log(apple.parentElement); // ul#fruits
console.log(apple.parentElement.parentElement); // body

// 2. 자식 노드 찾기
console.log(fruits.children); // li*4
console.log(fruits.children[0]); // 0 번 자식 요소
console.log(fruits.children[1]); // 1 번 자식 요소
console.log(fruits.children[2]); // 2 번 자식 요소
console.log(fruits.children[3]); // 3 번 자식 요소


//부모 -> 자식 -> 부모
console.log(fruits.children[0].parentElement);

// 3. 형제 노드
const lists = document.querySelectorAll('li')
console.log(lists); // li*4
const listOrange = lists[2]; // 아래 코드와 동일
// const listOrange = document.querselectorAll('li')[2]
console.log(listOrange);
console.log(listOrange.previousElementSibling);
console.log(listOrange.nextElementSibling);

console.log('=======================================');

const $numbers = document.querySelectorAll('.numbers')
const $num = document.querySelector('.numbers')
// $num = $numbers[0]
const $numDown = $num.children[3].children[2].parentElement.parentElement.previousElementSibling.children[1];
console.log($numDown);


