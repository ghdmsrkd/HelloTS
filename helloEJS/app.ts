import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import indexRouter from "./routes/index";

//라이브리로드 관련 임포트
const livereload = require("livereload");
var connectLivereload = require("connect-livereload");

const app = express();

//라이브리로드 설정
const liveServer = livereload.createServer({
  // 변경시 다시 로드할 파일 확장자들 설정
  exts: ['html', 'css', 'ejs', 'js', 'ts'],
  debug: true
});
liveServer.watch(__dirname);
app.use(connectLivereload());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  // 템플릿 엔진 설정



app.use('/', indexRouter);
app.use(express.static('public'));

//정적 파일 설정
app.use('/public', express.static(__dirname + '/public'));



// const appDir = path.dirname(__dirname);
// console.log(appDir)
// app.use((request, response, next) => 
// { 
//     response.locals.someVar = 'value of someVar'; 
//     response.locals.appDir = appDir;
//     return next();
// });

app.listen(8001, () => {  // 포트번호 설정
  console.log('8001번 포트에서 서버 대기중입니다!');
});



