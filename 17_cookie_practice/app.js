const express = require('express');
// cookie-parser
// 요청의 쿠키를 해석해서 req.cookies 객채로 만듦
// ex. name=hello 라는 쿠키를 보내면, req,cookies -> { name: 'hello' }
// 유효기간이 지난 쿠키는 알아서 제거

const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser()); // req.cookie 가능해짐

// res.cookie(키, 값, 옵션)
// : 쿠키를 "설정"

// res.clearCookie(키, 값, 옵션)
// : 쿠키를 "삭제"

const cookieConfig = {
  // 옵션 속성들..
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능 (js에서 접근 불가능)
  maxAge: 60 * 1000, // 1 min: 유효 시간 (단위: 밀리초)
  // expire: 만료 날짜 설정 
  // secure: https 에서만 쿠키 접근
  // signed: 쿠키 암호화 설정

}

app.get('/', (req, res) => {
  res.render('index', { popup: req.cookies.popup });
});

app.post('/setCookie', (req, res) => {
    // 응답이 아니라 쿠키를 생성하는것
  res.cookie('popup', 'hide', cookieConfig); // 쿠키 설정
  res.send(req.cookies.popup); // 응답을 보냄
});

// app.get('/getCookie', (req, res) => {
//   res.send(req.cookies); // 쿠키 해석 (읽기)
// });

app.post('/deleteCookie', (req, res) => {
  res.clearCookie('popup', 'hide', cookieConfig); // 쿠키 삭제
  res.send('clear cookie!!') // 응답을 보냄
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});