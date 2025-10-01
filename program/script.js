let ctx;

//let chara

//key move
let zPressed = false;
let xPressed = false;
let cPressed = false;

let pPressed = false;

let mof, moffr;

let mto1, mto2, mto3, mto4, mto5, mto6;

let mx1 = 360;
let my1 = 0;
let mx2 = 400;
let my2 = 32;
let mx3 = 480;
let my3 = 64;
let mx4 = 500;
let my4 = 72;
let mx5 = 520;
let my5 = 128;
let mx6 = 540;
let my6 = 208;

let cnt = 0;

let scor = 0;

let bone, pbone, goldbone;

let bns = 1;

let bnx = 720;
let bny = 128;

let hk, go, ttl;
let up;

let at,it;

let ux = 1000;
let uy = 160;

let anm = 1;

let x = 128;
let y = 150;
let v = 0;

let tlx = 96;
let gx = 512;

let spd = 2.5;

let gameprst = 1;
let mtk = false;
let m = 0;

let spduper = 1;

let life = 3;

onload = function() {
		ctx = document.getElementById("canvas").getContext("2d");
		mof = document.getElementById("mof");
		moffr = document.getElementById("moffr");
		hk = document.getElementById("hk");
		mto1 = document.getElementById("mto1");
		mto2 = document.getElementById("mto1");
		mto3 = document.getElementById("mto1");
		mto4 = document.getElementById("mto2");
		mto5 = document.getElementById("mto2");
		mto6 = document.getElementById("mto3");

		bone = document.getElementById("bone");
		goldbone = document.getElementById("goldbone");
		pbone = document.getElementById("pbone");
		
		ttl = document.getElementById("ttl");
		go = document.getElementById("go");
		
		up = document.getElementById("up");
		
		at = document.querySelector("#at");
		it = document.querySelector("#it");
	}
	//key
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.key === "Z" || e.key === "z") {
		zPressed = true;
		anm = 2;
	} else if (e.key === "X" || e.key === "x") {
		xPressed = true;
	} else if (e.key === "C" || e.key === "c") {
		cPressed = true;
		spd = 5;
	} else if (e.key === "P" || e.key === "p") {
		pPressed = true;
		alert("PAUSE")
	}
	return false;
}

function keyUpHandler(e) {
	if (e.key === "Z" || e.key === "z") {
		zPressed = false;
		anm = 1;
	} else if (e.key === "X" || e.key === "x") {
		xPressed = false;
	} else if (e.key === "C" || e.key === "c") {
		cPressed = false;
		spd = 2 * spduper;
	} else if (e.key === "P" || e.key === "p") {
		pPressed = false;
	}
	return false;
}


//key move
function key() {
	if (zPressed) {
		v -= 0.1;
		y += v;
	} else if (xPressed) {
		v += 0.05;
		y += v;
	} else if (cPressed) {

	}
}

function bn() {
	bnx -= spd;
	if (bnx < 0) {
		bnx = 360 + Math.floor(Math.random() * 2160);
		bns = 1 + Math.floor(Math.random() * 5);
	}
}


function atari () {
	if (y < my1 + 13 && y > my1 - 13 && mx1 < 140 && mx1 > 120) {
		gameprst = 3;
		if (mtk &&m < 10) {
		m ++;
		scor += 50;
		}
	}
	if (y < my2 + 13 && y > my2 - 13 && mx2 < 140 && mx2 > 120) {
		gameprst = 3;
		if (mtk &&m < 10) {
		m ++;
		scor += 50;
		}
	}
	if (y < my3 + 13 && y > my3 - 13 && mx3 < 140 && mx3 > 120) {
		gameprst = 3;
		if (mtk &&m < 10) {
		m ++;
		scor += 50;
		}
	}
	if (y < my4 + 15 && y > my4 - 15 && mx4 < 145 && mx4 > 120) {
		gameprst = 3;
		if (mtk &&m < 10) {
		m ++;
		scor += 50;
		}
	}
	if (y < my5 + 15 && y > my5 - 15 && mx5 < 145 && mx5 > 120) {
		gameprst = 3;
		if (mtk &&m < 10) {
		m ++;
		scor += 50;
		}
	}
	if (y < my6 + 17 && y > my6 - 17 && mx6 < 150 && mx6 > 120) {
		gameprst = 3;
		if (mtk &&m < 10) {
		m ++;
		scor += 50;
		}
	}
	if (y < bny + 13 && y > bny - 13 && bnx < 140 && bnx > 120) {
	it.play();
		if(bns == 1) {
			scor += 200;
			bnx = -16;
		}
		if (bns == 4) {
			scor += 600;
			bnx = -16;
		}
		if (bns == 6) {
			scor += 1000;
			bnx = -16;
			mx1 += 360;
			mx2 += 360;
			mx3 += 360;
			mx4 += 360;
			mx5 += 360;
			mx6 += 360;
		}
	}
	if (y < uy + 13 && y > uy - 13 && ux < 140 && ux > 120){
		life ++;
		ux = 5000;
	}
}

function meteo() {
	mx1 -= spd;
	mx2 -= spd;
	mx3 -= spd;
	mx4 -= spd;
	mx5 -= spd;
	mx6 -= spd;
	ux -= spd;

	if (mx1 < -32) {
		mx1 = 512;
		my1 = Math.floor(Math.random() * 320);
	}
	if (mx2 < -32) {
		mx2 = 512;
		my2 = Math.floor(Math.random() * 320);
	}
	if (mx3 < -32) {
		mx3 = 512;
		my3 = Math.floor(Math.random() * 320);
	}
	if (mx4 < -32) {
		mx4 = 512;
		my4 = Math.floor(Math.random() * 320);
	}
	if (mx5 < -32) {
		mx5 = 512;
		my5 = Math.floor(Math.random() * 320);
	}
	if (mx6 < -32) {
		mx6 = 512;
		my6 = Math.floor(Math.random() * 320);
	}
}

function enscr() {
	cnt ++;
	if (cnt == 12) {
	scor += 10;
	cnt = 0;
	if (spd == 5) {
		scor += 10;
		cnt = 0;
	}
	}
}

function game() {
	if (gameprst == 1) {
		if (zPressed) {
		gameprst = 2;
		zPressed == false;
		tlx = -400;
		}
	} else if (gameprst == 2) {
	at.play();
		v += 0.05;
		y += v;
		key();
		meteo();
		bn();
		atari();
		enscr();
		if (y < -39 || y > 320) {
			gameprst = 3;
		}
	} else if (gameprst == 3) {
		if (life == 0) {
			gx = 200;
		} else {
		life --;
		gameprst = 2;
		y = 64 + Math.floor(Math.random() * 192);
		v = 0;
		}
	}
	
}

function draw() {
	game();
	ctx.drawImage(hk, 0, 0);
	ctx.font = "16px serif";
	ctx.fillText("Scor: "+scor+ "        Mof:"+life+"                   2025 Mof labo,Oshima Tech", 0, 300);
	if (life > 0){
		if (anm == 1) {
			ctx.drawImage(mof, x, y);
		} else if (anm == 2) {
			ctx.drawImage(moffr, x, y);
		}
	}
	ctx.drawImage(mto1, mx1, my1);
	ctx.drawImage(mto2, mx2, my2);
	ctx.drawImage(mto3, mx3, my3);
	ctx.drawImage(mto4, mx4, my4);
	ctx.drawImage(mto5, mx5, my5);
	ctx.drawImage(mto6, mx6, my6);
	if (bns == 1 || bns == 2 || bns == 3) {
		ctx.drawImage(bone, bnx, bny);
	}
	if (bns == 4 || bns == 5) {
		ctx.drawImage(goldbone, bnx, bny);
	}
	if (bns == 6) {
		ctx.drawImage(pbone, bnx, bny);
	}
	ctx.drawImage(ttl, tlx, 32,);
	ctx.drawImage(go, gx, 128);
	ctx.drawImage(up, ux, uy);
}
setInterval(draw, 30);
