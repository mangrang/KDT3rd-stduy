const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

// session({ 세션모듈_옵션 })
// - secret: 세션 발급시 사용되는 키 -> 반드시 필요한 옵션
// - resave: 매 요청마다 세션을 다시 저장할 것인지
// - saveUninitialized: 초기값이 지정되지 않은 상태에서도 처음부터 세션 생성할지
// - secure: true 설정시 https에서만 세션을 주고 받음
// - name: 세션 쿠키명 (connet.sid 이지만 다른 이름 줄수도 있음)
app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
  })
);

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// req.session: "사용자별"로 해당 객체 안에 세션 정보 유지됨

// 세션쿠키 설정
// req.session.키 = 값

// 세션쿠키 사용
// req.session.키
// npm i express ejs express-session cookie-parser
// 세션 삭제
// req.session.destroy(콜백함수)
// - 콜백함수: 세션 삭제시 호출할 콜백함수
const userInfo = {id: 'a', pw : '1'};
app.get('/', (req, res) => {
  // 세션 설정
  // 응답 보냄
  console.log(req.session.user);

  // if (req.session.user == undefined){
  //   res.send(`
  //   <a href="/login">로그인</a>
  //   `)
  // } else {
  //   res.send(`
  //   ${req.session.user}님 환영합니다
  //   <a href="/">로그아웃</a>
  //   `)
  // }
  const user = req.session.user
  if (user !== undefined){
    res.render('index', {isLogin: true, user: user})

  } else {
    res.render('index', {isLogin: false})
  }
  // console.log(req.session.user);
  // res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login')
});


app.post('/login', (req, res) => {

       
        // console.log(res.session.loginPW);

    if (userInfo.id === req.body.id && userInfo.pw === req.body.pw){
        req.session.user = req.body.id;

        // req.session.loginPW = req.body.pw;
        res.send(`${req.session.user}님 로그인 되었습니다
        <a href="/logout">로그아웃</a>
        <script>
        </script>
        `)
        
        // res.redirect('/')

    } else {
        res.send(
          `<script>
            alert('로그인 실패..');
            document.location.href = '/';
          </script>`

        )

    };
});

app.get('/logout', (req, res) => {
  const user = req.session.user;
  if (user !== undefined){
  req.session.destroy((err) => {
    if (err) {
      throw err;
    } else {
      res.redirect('/')
      res.render('index222',)
    }})
  }else {
    res.send(`
      <script>
      alert('잘못된 접근입니다');
      document.location.href = '/';
      </script>
    `)
  }
})

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});