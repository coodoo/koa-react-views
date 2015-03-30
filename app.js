
var co = require('co');
var koa = require('koa');
var render = require('co-render');
var views = require('co-views');
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

	// co-views  的好處是將 template engine 必用參數預先傳入，
	// 得回一支 render() 指令，方便之後用
	
	// 'templates' 是放 jsx 檔案的位置
	var render = views( 'templates', 
						
						{ 
							// 預設副檔名，將來 render() 時就不用重寫
							default: 'jsx', 

							// 指定 jsx 副檔名要使用 react template engine 來處理
							map:{ jsx: 'react'}, 

							// 這是最終要傳入 consolidate 內的參數，參數有: 
							// isNonStatic: 是否打上 data-reactid
							// 	 - 差別就在 (isNonStatic) ? engine.renderToString(parsed) : engine.renderToStaticMarkup(parsed);
							// enableCache: true|false
							// base: html base file
							// tags: html 內 {{content}} 的變數名稱
							locals: {
								isNonStatic: false,
								tags: 'content', 
								base:'templates/index.html'}
						});
	
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