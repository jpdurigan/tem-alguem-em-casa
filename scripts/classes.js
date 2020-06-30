class Luz {
	constructor(r, g, b, x, y, z) {
		this.color = color(r, g, b);
		this.position = new p5.Vector(x, y, z);
	}
}

class Objeto {
	constructor(obj, r, g, b) {
		this.model = obj;
		this.color = color(r, g, b);
	}
}

class Cena {
	constructor(bgcolor, objetos, luzes, camera) {
		this.bgcolor = bgcolor;
		this.objetos = objetos;
		this.luzes = luzes;
		this.camera = camera;
		this.grua = new Grua(camera);
	}

	desenhar() {
		this.grua.rotacionar();
		this.grua.aproximar();
		this.grua.moverCamera();

		background(this.bgcolor);
		this.luzes.forEach( luz => {
			pointLight(luz.color, luz.position);
		});
		translate(0, -40, 0);
		rotateX(180);
		this.objetos.forEach( objeto => {
			noStroke();
			ambientMaterial(objeto.color);
			model(objeto.model);
		});
	}

	passarDeCena() {
		let anguloNorm = (floor(this.grua.angulo) % 360);
		if (anguloNorm < 0) anguloNorm += 360;
		return (anguloNorm > 60 && anguloNorm < 120 && this.grua.distancia < 300);
	}
}

class TelaInicial {
	constructor() {
		//
	}

	desenhar() {
		background(0);
		textAlign(CENTER);
		textSize(60);
		text('TEM ALGUÉM EM CASA?', 0, 0);
		textSize(20);
		text('experiência 3d sem muito sentido | use o mouse', 0, height/8);
	}

	passarDeCena() {
		return true;
	}
}