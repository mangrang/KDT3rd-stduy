const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static')); 
// 정적 파일 보관할 폴더 (static)
// css, js, img
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const realId = 'banana';
// const realPw = '4321';

// app.get('/', (req, res) => {
//   res.render('index', { title: '동적 폼 실습' });
// });

// app.post('/practice30', (req, res) => {
//   console.log(req.body);

//   if (realId === req.body.userId && realPw === req.body.userPw) {
//     res.send({ userInfo: req.body, isSuccess: true });
//   } else {
//     res.send({ isSuccess: false });
//   }
// });

// MVC 패턴 적용
// ./routes/index: index는 생략 가능
const indexRouter = require('./routes');
// localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작
app.use('/', indexRouter);



app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
