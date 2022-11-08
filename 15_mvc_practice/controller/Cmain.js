const Login = require("../model/Login");

exports.main = (req, res) => {
  res.render("index", { title: "동적 폼 실습" });
};

exports.sub = (req, res) => {
//   console.log(req.body.userId);
//   console.log(Login.userInfo()[0]);
  for (let i = 0; i < Login.userInfo().length; i++) {
    if (
      req.body.userId === Login.userInfo()[i].realId &&
      req.body.userPw === Login.userInfo()[i].realPw
    ) {
      return res.send({ userInfo: Login.userInfo()[i], isSuccess: true,});
    }
  }
  res.send({ isSuccess: false });
};
