var express = require('express');
var app = express();
//작성한 유저 모듈을 가져오기
var user = require('./routes/user')


//미들웨어작성
var myLogger = (req, res, next) => {
  console.log(" middleware : ",req.url);
  next();
};
//작성한 미들웨어를 서버에 등록
app.use(myLogger);

app.use('/user', user);
// '/'로 요청이있을때 퍼블릭폴더안의것을 사용해줘 라는 의미
app.use('/', express.static('public'))

// app.get('/', (req, res)=> {
//   res.send("Hello World")
// })

app.listen(3000, () => {
  console.log("Example App is listening on port 3000")
})

//미들웨어
//요청 오브젝트(request), 응답 오브젝트(response),그리고 애플리케이션의 요청과 응답 주기 중
//그 다음의 미들웨어 함수에 대한 액세스권한을 갖는 함수입니다.??

  