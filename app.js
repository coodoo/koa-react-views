
var render = require('co-render');
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
	// 差別就在 (isNonStatic) ? engine.renderToString(parsed) : engine.renderToStaticMarkup(parsed);
	// enableCache: true|false
	// base: html base file
	var resultString = yield render( 'templates/user.jsx', 
									 { 
										// 這個是真正傳入 react template 的資料
										user: loki, 

										// 下面這三個是給 template engine 看的
										engine: 'react', 
										tags: 'content', 
										base:'templates/index.html' 
									 });

	// 示範如要用傳統 jade, handlebar 等模板的語法
	// var b = render( 'templates/user.jade', { user: loki, engine: 'jade' });
	
	console.log( '\n\n最終: ', resultString );

	this.body = resultString;
})

app.listen(3000);