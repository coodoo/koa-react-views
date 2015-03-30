
var render = require('co-render');
var views = require('co-views');
var koa = require('koa');
var co = require('co');
var router = require('koa-router')();

var app = koa();

// 掛上 router
app.use( router.routes() );

// 假資料要餵給 react template
var loki = {
  name: 'loki',
  species: 'ferret'
};

// router 只處理 GET / 的請求
router.get( '/', function *(){

	// opts: 
	// isNonStatic: 是否打上 data-react-id
	// 		- 差別就在 (isNonStatic) ? engine.renderToString(parsed) : engine.renderToStaticMarkup(parsed);
	// enableCache: true|false
	// base: html base file
	// tags: html 內 {{content}} 的變數名稱
	
	// 將常用參數預先傳入，得回一支 render() 指令，方便之後用
	var render = views( 'templates', 
						{ default: 'jsx', 
						  map:{ jsx: 'react'}, 
						  locals: {tags: 'content', base:'templates/index.html'}});
	
	// 之後使用時只要指定需要的 tempalte file 名稱，就會去 'templates/user.jsx' 內找檔案
	var resultString = yield render( 'user', 
									 // 這個是真正傳入 react template 的資料
									 { user: loki });

	// 示範如要用傳統 jade, handlebar 等模板的語法
	// var b = render( 'templates/user.jade', { user: loki, engine: 'jade' });
	
	console.log( '\n\n最終: ', resultString );

	this.body = resultString;
})

app.listen(3000);