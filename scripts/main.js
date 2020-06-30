function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES);
	textFont(Abel);

	let cam = createCamera();

	let luz1 = new Luz(160, 0, 255, 100, -60, 100); // roxo
	let luz2 = new Luz(180, 255, 0, -100, -60, 100); // amarelo
	let luz3 = new Luz(0, 255, 255, 100, -60, -100); // ciano
	let luz4 = new Luz(0, 255, 120, -100, -60, -100); // verde
	let preto = color(0);
	let objCasa01 = new Objeto(casa01, 200, 200, 200);
	let objCasa02 = new Objeto(casa02, 160, 160, 160);
	let objCasa03 = new Objeto(casa03, 160, 160, 160);
	let objHomem = new Objeto(homem, 255, 0, 0);
	let CENA0 = new TelaInicial();
	let CENA1 = new Cena(preto, [objCasa01], [luz1, luz2, luz3, luz4], cam);
	let CENA2 = new Cena(preto, [objCasa02], [luz1, luz2, luz3, luz4], cam);
	let CENA3 = new Cena(preto, [objCasa03, objHomem], [luz1, luz2, luz3, luz4], cam);

	cenasArray.push(CENA0);
	cenasArray.push(CENA1);
	cenasArray.push(CENA2);
	cenasArray.push(CENA3);

	cenaAtual = 0;
}

function draw() {
	cenasArray[cenaAtual].desenhar();
}

function mouseClicked() {
	if (cenasArray[cenaAtual].passarDeCena()) {
		let cenaPrev = cenaAtual;
		cenaAtual = (cenaPrev + 1) % cenasArray.length;
		if(typeof cenasArray[cenaPrev].camera != "undefined") {
			cenasArray[cenaAtual].grua = cenasArray[cenaPrev].grua;
		}
	}
}