console.log('!');
function addNode() {
    // alert('버튼을 클릭하셨군요!');
    let div = document.getElementById('div1');
    // 요소 생성하기
    // createElement()
    let p = document.createElement('p'); // p 태그 생성 // <p> 태그</p>
    p.innerText = '버튼을 눌러 만들어진 p 태그'; // <p> 버튼을 눌러 만들어진 p 태그 </p>
    p.style.fontWeight = '700'   
    p.classList.add('append-p')

    // div.appendChild(p);
    // div.append('1번 추가');
    // div.append(p,'2번 추가')
    div.append(p)
}

function removeNode() {
    // alert('삭제 버튼 클릭')
    let div = document.querySelector('#div1');
    let p = document.querySelector('#div1 > p');

    // div.removeChild(p);
    p.remove();
}



// 노드 생성/추가/삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한 번에 한 개
// append(): 노드 객체 or 텍스트 추가, 한 번에 여러 개 가능

// 3. 노드 삭제
// 부모노드.removeChild(자식노드): 부모요소의 자식노드를 삭제
// 노드.romove(): "선택한 요소"를 삭제

// =============================================
let ul = document.querySelector('ul')
let li = document.createElement('li')
li.innerText = '오렌지'; // <li>오렌지</li>

ul.append(li);

let container = document.querySelector('.container');


let img = document.createElement('img'); 
img.setAttribute('src', './image/beach1.jpg'); 
img.setAttribute('alt', '해변');
let title = document.createElement('div')
title.innerText = '강아지입니다';

container.append(img);
container.append(title);


let btn = document.querySelector('.btn')

let button1 = document.createElement('button');
button1.setAttribute('onclick',"addNode()");
button1.innerText = "추가";

let button2 = document.createElement('button');
button2.setAttribute('onclick',"removeNode()");
button2.innerText = "삭제";


btn.append(button1);
btn.append(button2);

