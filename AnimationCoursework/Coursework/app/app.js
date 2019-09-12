var canvas = document.getElementById('canvas'),
stage = new createjs.Stage(canvas);

var box1 = new createjs.Shape();//1 часть черного куба
var box2 = new createjs.Shape();//2 часть черного куба
var box3 = new createjs.Shape();//3 часть черного куба
var box4 = new createjs.Shape();//4 часть черного куба

var b1 = new createjs.Shape();//1 часть белого куба
var b2 = new createjs.Shape();//2 часть белого куба
var b3 = new createjs.Shape();//3 часть белого куба
var b4 = new createjs.Shape();//4 часть белого куба

var k1 = new createjs.Shape();//1 часть центрального черного куба
var k2 = new createjs.Shape();//2 часть центрального черного куба
var k3 = new createjs.Shape();//3 часть центрального черного куба
var k4 = new createjs.Shape();//4 часть центрального черного куба

var circ = new createjs.Shape();//окружность

var htora1 = new createjs.Shape();//штора закрывающая сцену для текста
var htora2 = new createjs.Shape();//штора закрывающая сцену для текста

var logo1 = new createjs.Shape();//сцена для текста
var logo2 = new createjs.Shape();//сцена для текста

var txt = new createjs.Text("YOUR NAME", "70px sans-serif", "#DFDFDF")//текст
txt.x = 630; txt.y = 380;
txt.regX = 200; txt.regY = 60;
txt.scaleX = 0; txt.scaleY = 0;

var cont_box = new createjs.Container();	
cont_box.rotation = 0;

cont_box.x = 640;
cont_box.y = 360;
cont_box.regX = 640;
cont_box.regY = 360;
cont_box.addChild(circ,box1,box2,box3,box4,b1,b2,b3,b4,k1,k2,k3,k4);	
stage.addChild(cont_box);

stage.addChild(htora1);
stage.addChild(htora2);

var kr ={
	t:0, //толщина
	x:640, // x-координата
	y:0, // y-координата
	w:0, // ширина
	h:0, //высота
	r:0, //радиус
	}; 

//наружный квадрат
var p1 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
box1.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p1.x0, p1.y0).lt(p1.x1, p1.y1).lt(p1.x2, p1.y2).lt(p1.x3, p1.y3).cp()
.ef()
.endStroke();

var p2 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
box2.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p2.x0, p2.y0).lt(p2.x1, p2.y1).lt(p2.x2, p2.y2).lt(p2.x3, p2.y3).cp()
.ef()
.endStroke();

var p3 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
box3.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p3.x0, p3.y0).lt(p3.x1, p3.y1).lt(p3.x2, p3.y2).lt(p3.x3, p3.y3).cp()
.ef()
.endStroke();

var p4 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
box4.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p4.x0, p4.y0).lt(p4.x1, p4.y1).lt(p4.x2, p4.y2).lt(p4.x3, p4.y3).cp()
.ef()
.endStroke();

//внутренний квадрат
var v1 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
b1.graphics
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v1.x0, v1.y0).lt(v1.x1, v1.y1).lt(v1.x2, v1.y2).lt(v1.x3, v1.y3).cp()
.ef()
.endStroke();

var v2 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
b2.graphics
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v2.x0, v2.y0).lt(v2.x1, v2.y1).lt(v2.x2, v2.y2).lt(v2.x3, v2.y3).cp()
.ef()
.endStroke();

var v3 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
b3.graphics
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v3.x0, v3.y0).lt(v3.x1, v3.y1).lt(v3.x2, v3.y2).lt(v3.x3, v3.y3).cp()
.ef()
.endStroke();

var v4 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
b4.graphics
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v4.x0, v4.y0).lt(v4.x1, v4.y1).lt(v4.x2, v4.y2).lt(v4.x3, v4.y3).cp()
.ef()
.endStroke();

//центральный квадрат 
var f1 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
k1.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f1.x0, f1.y0).lt(f1.x1, f1.y1).lt(f1.x2, f1.y2).lt(f1.x3, f1.y3).cp()
.ef()
.endStroke();

var f2 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
k2.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f2.x0, f2.y0).lt(f2.x1, f2.y1).lt(f2.x2, f2.y2).lt(f2.x3, f2.y3).cp()
.ef()
.endStroke();

var f3 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
k3.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f3.x0, f3.y0).lt(f3.x1, f3.y1).lt(f3.x2, f3.y2).lt(f3.x3, f3.y3).cp()
.ef()
.endStroke();

var f4 ={x0:640,y0:360,x1:640,y1:360,x2:640,y2:360,x3:640,y3:360};
k4.graphics
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f4.x0, f4.y0).lt(f4.x1, f4.y1).lt(f4.x2, f4.y2).lt(f4.x3, f4.y3).cp()
.ef()
.endStroke();

//штора
var h1 ={x0:0,y0:-360,x1:1280,y1:-360,x2:1280,y2:0,x3:0,y3:0};
htora1.graphics
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(h1.x0, h1.y0).lt(h1.x1, h1.y1).lt(h1.x2, h1.y2).lt(h1.x3, h1.y3).cp()
.ef()
.endStroke();

var h2 ={x0:0,y0:720,x1:1280,y1:720,x2:1280,y2:1080,x3:0,y3:1080};
htora2.graphics
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(h2.x0, h2.y0).lt(h2.x1, h2.y1).lt(h2.x2, h2.y2).lt(h2.x3, h2.y3).cp()
.ef()
.endStroke();

//прямоугольник для текста
var l1 ={x0:390,y0:260,x1:890,y1:260,x2:890,y2:260,x3:390,y3:260};
logo1.graphics
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(l1.x0, l1.y0).lt(l1.x1, l1.y1).lt(l1.x2, l1.y2).lt(l1.x3, l1.y3).cp()
.ef()
.endStroke();

var l2 ={x0:390,y0:460,x1:890,y1:460,x2:890,y2:460,x3:390,y3:460};
logo2.graphics
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(l2.x0, l2.y0).lt(l2.x1, l2.y1).lt(l2.x2, l2.y2).lt(l2.x3, l2.y3).cp()
.ef()
.endStroke();

//линия времени
var playLine = new TimelineMax({});	

playLine.to(p1, 1, {x0:490,y0:210,x1:640,y1:210,x2:640,y2:360,x3:490,y3:360,
	onUpdate: function () {
		box1.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p1.x0, p1.y0).lt(p1.x1, p1.y1).lt(p1.x2, p1.y2).lt(p1.x3, p1.y3).cp()
.ef()
.endStroke();
},delay:0.5});

playLine.to(v1, 1, {x0:555,y0:275,x1:640,y1:275,x2:640,y2:360,x3:555,y3:360,
	onUpdate: function () {
		b1.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v1.x0, v1.y0).lt(v1.x1, v1.y1).lt(v1.x2, v1.y2).lt(v1.x3, v1.y3).cp()
.ef()
.endStroke();
}},"-=1");

playLine.to(p2, 0.9, {x0:640,y0:210,x1:790,y1:210,x2:790,y2:360,x3:640,y3:360,
	onUpdate: function () {
		box2.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p2.x0, p2.y0).lt(p2.x1, p2.y1).lt(p2.x2, p2.y2).lt(p2.x3, p2.y3).cp()
.ef()
.endStroke();
}},"-=0.9");

playLine.to(v2, 0.9, {x0:640,y0:275,x1:725,y1:275,x2:725,y2:360,x3:640,y3:360,
	onUpdate: function () {
		b2.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v2.x0, v2.y0).lt(v2.x1, v2.y1).lt(v2.x2, v2.y2).lt(v2.x3, v2.y3).cp()
.ef()
.endStroke();
}},"-=0.9");

playLine.to(p3, 0.8, {x0:640,y0:360,x1:790,y1:360,x2:790,y2:510,x3:640,y3:510,
	onUpdate: function () {
		box3.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p3.x0, p3.y0).lt(p3.x1, p3.y1).lt(p3.x2, p3.y2).lt(p3.x3, p3.y3).cp()
.ef()
.endStroke();
}},"-=0.8");

playLine.to(v3, 0.8, {x0:640,y0:360,x1:725,y1:360,x2:725,y2:445,x3:640,y3:445,
	onUpdate: function () {
		b3.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v3.x0, v3.y0).lt(v3.x1, v3.y1).lt(v3.x2, v3.y2).lt(v3.x3, v3.y3).cp()
.ef()
.endStroke();
}},"-=0.8");

playLine.to(p4, 0.7, {x0:490,y0:360,x1:640,y1:360,x2:640,y2:510,x3:490,y3:510,
	onUpdate: function () {
		box4.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(p4.x0, p4.y0).lt(p4.x1, p4.y1).lt(p4.x2, p4.y2).lt(p4.x3, p4.y3).cp()
.ef()
.endStroke();
}},"-=0.7");

playLine.to(v4, 0.7, {x0:555,y0:360,x1:640,y1:360,x2:640,y2:445,x3:555,y3:445,
	onUpdate: function () {
		b4.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(v4.x0, v4.y0).lt(v4.x1, v4.y1).lt(v4.x2, v4.y2).lt(v4.x3, v4.y3).cp()
.ef()
.endStroke();
}},"-=0.7");

///////////////////////////////////////////////////////
playLine.to(cont_box, 0.7, {rotation:90},"-=0.9");
//////////////////////////////////////////////////////

playLine.to(f1, 1, {x0:580,y0:300,x1:640,y1:300,x2:640,y2:360,x3:580,y3:360,
	onUpdate: function () {
		k1.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f1.x0, f1.y0).lt(f1.x1, f1.y1).lt(f1.x2, f1.y2).lt(f1.x3, f1.y3).cp()
.ef()
.endStroke();
},delay:0.3});

playLine.to(f2, 0.9, {x0:640,y0:300,x1:700,y1:300,x2:700,y2:360,x3:640,y3:360,
	onUpdate: function () {
		k2.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f2.x0, f2.y0).lt(f2.x1, f2.y1).lt(f2.x2, f2.y2).lt(f2.x3, f2.y3).cp()
.ef()
.endStroke();
}},"-=0.9");

playLine.to(f3, 0.8, {x0:640,y0:360,x1:700,y1:360,x2:700,y2:420,x3:640,y3:420,
	onUpdate: function () {
		k3.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f3.x0, f3.y0).lt(f3.x1, f3.y1).lt(f3.x2, f3.y2).lt(f3.x3, f3.y3).cp()
.ef()
.endStroke();
}},"-=0.8");

playLine.to(f4, 0.7, {x0:580,y0:360,x1:640,y1:360,x2:640,y2:420,x3:580,y3:420,
	onUpdate: function () {
		k4.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f4.x0, f4.y0).lt(f4.x1, f4.y1).lt(f4.x2, f4.y2).lt(f4.x3, f4.y3).cp()
.ef()
.endStroke();
}},"-=0.7");

//////////////////////////////////////////////////////
playLine.to(cont_box, 1, {rotation:180},"-=0.9");
//////////////////////////////////////////////////////

//выпадение центрального куба
playLine.to(f1, 0.3, {x0:580,y0:0,x1:640,y1:0,x2:640,y2:60,x3:580,y3:60,
	onUpdate: function () {
		k1.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f1.x0, f1.y0).lt(f1.x1, f1.y1).lt(f1.x2, f1.y2).lt(f1.x3, f1.y3).cp()
.ef()
.endStroke();
},delay:0.3});

playLine.to(f2, 0.3, {x0:640,y0:0,x1:700,y1:0,x2:700,y2:60,x3:640,y3:60,
	onUpdate: function () {
		k2.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f2.x0, f2.y0).lt(f2.x1, f2.y1).lt(f2.x2, f2.y2).lt(f2.x3, f2.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

playLine.to(f3, 0.3, {x0:640,y0:60,x1:700,y1:60,x2:700,y2:120,x3:640,y3:120,
	onUpdate: function () {
		k3.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f3.x0, f3.y0).lt(f3.x1, f3.y1).lt(f3.x2, f3.y2).lt(f3.x3, f3.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

playLine.to(f4, 0.3, {x0:580,y0:60,x1:640,y1:60,x2:640,y2:120,x3:580,y3:120,
	onUpdate: function () {
		k4.graphics
		.clear()
.beginStroke("#FDFDFD")
.f("#FDFDFD")
.setStrokeStyle(1)
.mt(f4.x0, f4.y0).lt(f4.x1, f4.y1).lt(f4.x2, f4.y2).lt(f4.x3, f4.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

//реверс цвета + окружность
playLine.to(kr, 0.5, {t:1, x:-360, y:-1000, w:2000, h:2000, r:1000, 
onUpdate: function () {
circ.graphics
.clear()
.beginStroke("#D7D7D7")
.setStrokeStyle(kr.t)
.f("#D7D7D7")
.rr(kr.x, kr.y, kr.w, kr.h, kr.r)
.ef()
.endStroke();}});

//смена цвета
playLine.call(function () {
		box1.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(p1.x0, p1.y0).lt(p1.x1, p1.y1).lt(p1.x2, p1.y2).lt(p1.x3, p1.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.4");

playLine.call(function () {
		b1.graphics
		.clear()
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(v1.x0, v1.y0).lt(v1.x1, v1.y1).lt(v1.x2, v1.y2).lt(v1.x3, v1.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.4");

playLine.call(function () {
		box2.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(p2.x0, p2.y0).lt(p2.x1, p2.y1).lt(p2.x2, p2.y2).lt(p2.x3, p2.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.4");

playLine.call(function () {
		b2.graphics
		.clear()
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(v2.x0, v2.y0).lt(v2.x1, v2.y1).lt(v2.x2, v2.y2).lt(v2.x3, v2.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.4");

playLine.call(function () {
		box3.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(p3.x0, p3.y0).lt(p3.x1, p3.y1).lt(p3.x2, p3.y2).lt(p3.x3, p3.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.3");

playLine.call(function () {
		b3.graphics
		.clear()
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(v3.x0, v3.y0).lt(v3.x1, v3.y1).lt(v3.x2, v3.y2).lt(v3.x3, v3.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.3");

playLine.call(function () {
		box4.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(p4.x0, p4.y0).lt(p4.x1, p4.y1).lt(p4.x2, p4.y2).lt(p4.x3, p4.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.3");

playLine.call(function () {
		b4.graphics
		.clear()
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(v4.x0, v4.y0).lt(v4.x1, v4.y1).lt(v4.x2, v4.y2).lt(v4.x3, v4.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.3");

playLine.call(function () {
		k1.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f1.x0, f1.y0).lt(f1.x1, f1.y1).lt(f1.x2, f1.y2).lt(f1.x3, f1.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.5");

playLine.call(function () {
		k2.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f2.x0, f2.y0).lt(f2.x1, f2.y1).lt(f2.x2, f2.y2).lt(f2.x3, f2.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.5");

playLine.call(function () {
		k3.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f3.x0, f3.y0).lt(f3.x1, f3.y1).lt(f3.x2, f3.y2).lt(f3.x3, f3.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.5");

playLine.call(function () {
		k4.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f4.x0, f4.y0).lt(f4.x1, f4.y1).lt(f4.x2, f4.y2).lt(f4.x3, f4.y3).cp()
.ef()
.endStroke();
},null,null,"-=0.5");

//Окружность в прямоугольник
playLine.to(kr, 0.2, {t:1, x:-500, y:0, w:2280, h:720, r:0, 
onUpdate: function () {
circ.graphics	
.clear()
.beginStroke("#D7D7D7")
.setStrokeStyle(kr.t)
.f("#D7D7D7")
.rr(kr.x, kr.y, kr.w, kr.h, kr.r)
.ef()
.endStroke();}});

//прыжок центрального куба
playLine.to(f1, 0.2, {x0:580,y0:45,x1:640,y1:45,x2:640,y2:105,x3:580,y3:105,
	onUpdate: function () {
		k1.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f1.x0, f1.y0).lt(f1.x1, f1.y1).lt(f1.x2, f1.y2).lt(f1.x3, f1.y3).cp()
.ef()
.endStroke();
}},"-=0.6");

playLine.to(f2, 0.2, {x0:640,y0:45,x1:700,y1:45,x2:700,y2:105,x3:640,y3:105,
	onUpdate: function () {
		k2.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f2.x0, f2.y0).lt(f2.x1, f2.y1).lt(f2.x2, f2.y2).lt(f2.x3, f2.y3).cp()
.ef()
.endStroke();
}},"-=0.6");

playLine.to(f3, 0.2, {x0:640,y0:105,x1:700,y1:105,x2:700,y2:165,x3:640,y3:165,
	onUpdate: function () {
		k3.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f3.x0, f3.y0).lt(f3.x1, f3.y1).lt(f3.x2, f3.y2).lt(f3.x3, f3.y3).cp()
.ef()
.endStroke();
}},"-=0.6");

playLine.to(f4, 0.2, {x0:580,y0:105,x1:640,y1:105,x2:640,y2:165,x3:580,y3:165,
	onUpdate: function () {
		k4.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f4.x0, f4.y0).lt(f4.x1, f4.y1).lt(f4.x2, f4.y2).lt(f4.x3, f4.y3).cp()
.ef()
.endStroke();
}},"-=0.6");

//возврат
playLine.to(f1, 0.3, {x0:580,y0:0,x1:640,y1:0,x2:640,y2:60,x3:580,y3:60,
	onUpdate: function () {
		k1.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f1.x0, f1.y0).lt(f1.x1, f1.y1).lt(f1.x2, f1.y2).lt(f1.x3, f1.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

playLine.to(f2, 0.3, {x0:640,y0:0,x1:700,y1:0,x2:700,y2:60,x3:640,y3:60,
	onUpdate: function () {
		k2.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f2.x0, f2.y0).lt(f2.x1, f2.y1).lt(f2.x2, f2.y2).lt(f2.x3, f2.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

playLine.to(f3, 0.3, {x0:640,y0:60,x1:700,y1:60,x2:700,y2:120,x3:640,y3:120,
	onUpdate: function () {
		k3.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f3.x0, f3.y0).lt(f3.x1, f3.y1).lt(f3.x2, f3.y2).lt(f3.x3, f3.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

playLine.to(f4, 0.3, {x0:580,y0:60,x1:640,y1:60,x2:640,y2:120,x3:580,y3:120,
	onUpdate: function () {
		k4.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f4.x0, f4.y0).lt(f4.x1, f4.y1).lt(f4.x2, f4.y2).lt(f4.x3, f4.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

//поворот белого фона и скольжение центрального куба
playLine.call(function () {
circ.regX = 640;
circ.regY = 360;
circ.x = 640;
circ.y = 360;	
});

playLine.to(cont_box, 1.5, {rotation:270});
playLine.to(f1, 1.5, {x0:-120,y0:0,x1:-60,y1:0,x2:-60,y2:60,x3:-120,y3:60,
	onUpdate: function () {
		k1.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f1.x0, f1.y0).lt(f1.x1, f1.y1).lt(f1.x2, f1.y2).lt(f1.x3, f1.y3).cp()
.ef()
.endStroke();
}},"-=1.5");

playLine.to(f2, 1.5, {x0:-60,y0:0,x1:0,y1:0,x2:0,y2:60,x3:-60,y3:60,
	onUpdate: function () {
		k2.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f2.x0, f2.y0).lt(f2.x1, f2.y1).lt(f2.x2, f2.y2).lt(f2.x3, f2.y3).cp()
.ef()
.endStroke();
}},"-=1.5");

playLine.to(f3, 1.5, {x0:-60,y0:60,x1:0,y1:60,x2:0,y2:120,x3:-60,y3:120,
	onUpdate: function () {
		k3.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f3.x0, f3.y0).lt(f3.x1, f3.y1).lt(f3.x2, f3.y2).lt(f3.x3, f3.y3).cp()
.ef()
.endStroke();
}},"-=1.5");

playLine.to(f4, 1.5, {x0:-120,y0:60,x1:-60,y1:60,x2:-60,y2:120,x3:-120,y3:120,
	onUpdate: function () {
		k4.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(f4.x0, f4.y0).lt(f4.x1, f4.y1).lt(f4.x2, f4.y2).lt(f4.x3, f4.y3).cp()
.ef()
.endStroke();
}},"-=1.5");

//блок для текста
playLine.to(h1, 0.5, {x0:0,y0:0,x1:1280,y1:0,x2:1280,y2:360,x3:0,y3:360,
	onUpdate: function () {
		htora1.graphics
		.clear()
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(h1.x0, h1.y0).lt(h1.x1, h1.y1).lt(h1.x2, h1.y2).lt(h1.x3, h1.y3).cp()
.ef()
.endStroke();
}});
playLine.to(h2, 0.5, {x0:0,y0:360,x1:1280,y1:360,x2:1280,y2:720,x3:0,y3:720,
	onUpdate: function () {
		htora2.graphics
		.clear()
.beginStroke("#D7D7D7")
.f("#D7D7D7")
.setStrokeStyle(1)
.mt(h2.x0, h2.y0).lt(h2.x1, h2.y1).lt(h2.x2, h2.y2).lt(h2.x3, h2.y3).cp()
.ef()
.endStroke();
}},"-=0.5");

playLine.call(function () {
stage.addChild(logo1);
stage.addChild(logo2);
},null,null,"-=0.3");

playLine.to(l1, 0.3, {x0:390,y0:260,x1:890,y1:260,x2:890,y2:360,x3:390,y3:360,
	onUpdate: function () {
		logo1.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(l1.x0, l1.y0).lt(l1.x1, l1.y1).lt(l1.x2, l1.y2).lt(l1.x3, l1.y3).cp()
.ef()
.endStroke();
}},"-=0.3");
playLine.to(l2, 0.3, {x0:390,y0:360,x1:890,y1:360,x2:890,y2:460,x3:390,y3:460,
	onUpdate: function () {
		logo2.graphics
		.clear()
.beginStroke("#333333")
.f("#333333")
.setStrokeStyle(1)
.mt(l2.x0, l2.y0).lt(l2.x1, l2.y1).lt(l2.x2, l2.y2).lt(l2.x3, l2.y3).cp()
.ef()
.endStroke();
}},"-=0.3");

//текст
playLine.call(function () {
stage.addChild(txt);
},null,null,"-=0.3");

playLine.to(txt, 1, {rotation:-360, scaleX:1, scaleY:1, ease: Elastic.easeOut},"-=0.3");

TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);