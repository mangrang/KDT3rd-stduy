console.log('!!');

// 반복문
// - for 문
// - while 문

// for 문
/*

for( 초기값 ; 조건식 ; 증감값 ) {
    // 반복할 코드
}

*/

// 증감 < 후위 연산자
// n++ : if(n=10) -> n++ = n+1
// n-- : if(n=10) -> n-- = n-1

// case1. 0~4 출력
for (let i = 0; i < 5; i++) {
    console.log(i);    
}
console.log('반복문 끝');

// case2. 1~5 출력
for (let i = 1; i < 6; i++) {
    console.log(i);    
}
console.log('반복문 끝');

// case2. 1~5 출력
for (let i = 0; i < 5; i++) {
    console.log(i + 1);    
}
console.log('반복문 끝');

// case2. 1~5 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);    
}
console.log('반복문 끝');

// case3. 5부터 1까지 출력
for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log('반복문 끝');

// case4. 1부터 10까지 출력 (단, 짝수만)
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i);
    }   
}
console.log('반복문 끝');

for (let i = 1; i <= 5; i++){
    console.log(i*2);
}

// 퀴즈) 1부터 10까지 합 구하기
let sum = 0; // 합을 저장할 변수 생성
for (i = 1; i <= 10; i++) {
    sum = i + sum
}  
console.log(`1부터 10까지 모두 더한 값: ${sum}`); //55
    

// 퀴즈2) 1부터 10까지 짝수의 합 구하기
let sum2 = 0; // 합을 저장할 변수 생성
for (i = 1; i <= 5; i++) {
    sum2 = (i * 2) + sum2
}  
console.log(`1부터 10까지 짝수를 모두 더한 값: ${sum2}`); //30

// =====================================================
// while 문
/*

while (조건식) {
    // 반복할 코드
}
=> 조건식 만족; 블럭{{}} 내부 코드 실행
=> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
    - if 문; 조건식 true; 블럭 코드 1번 실행
    - while 문; 조건식이 true; "계속" 반복
=> 조건식 false; 블럭을 빠져나옴 (= 반복 종료)

*/


// case1. 1~5 반복
var n = 1; // 반복 변수 초기값 설정
while (n <= 5){ // 조건식
    console.log(n);
    n = n + 1; // n++; // 증감값
}
console.log('반복문이 끝났습니다');

// 퀴즈) 
// case2. 9부터 4까지 while문으로 반복
var a = 1;
while (a < 10) {
    console.log(a);
    a = a + 1
}
console.log('퀴즈 case2 반복문이 끝났습니다');

// Case3. 1부터 10까지 짝수 출력
// ver1
n = 1; 
while (n <= 10) { // n: 1 ~ 10
	if (n % 2 == 0) {
		console.log(n);
	}
	n = n + 1;
}
console.log('반복문 끝');


// ver2
n = 2;
while (n <= 10) { // n: 2, 4, 6, 8, 10
	console.log(n);
	n = n + 2;
}
console.log('반복문 끝');


// Case4. 10부터 1까지 홀수 출력
// ver1
n = 10;
while (n >= 1) { // n: 10 ~ 1
	if (n % 2 === 1) {
		console.log(n);
	}
	n = n - 1;
}
console.log('반복문 끝');

// ver2
n = 9;
while (n >= 1) { // n: 9 7 5 3 1
	console.log(n);
	n = n - 2;
}
console.log('반복문 끝');



// ===============================
// 무한루프
// : 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태
// 의도적으로 무한루프를 만들어서 특정 조건이 만족될 때까지 반복하여서 코드를 작성하기도 함
/*

while (true) {
    ...
    // 탈출 조건 만들기
}
*/

// 조건문 등을 이용해 탈출 조건을 만들어 주고
// break 키워드 -> 블록 {{}}을 빠져나옴

// let go = confirm('계속 진행할까요?');
// console.log(go);
// [확인]: true
// [취소]: false

var count = 0;
while (true) {
    if (confirm('계속 진행하겠습니까?') === true){
        alert(`${count}번째 반복입니다`);
        count = count + 1;
    } else { // [취소] false 반환
        break;
    }
}
console.log('무한루프 탈출 성공!');

