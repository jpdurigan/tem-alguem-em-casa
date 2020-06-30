class Grua {
  constructor(camera) {
    this.cam = camera;
    this.distanciaMax = 1600;
    this.distanciaMin = 200;
    this.distancia = this.distanciaMax;
    this.angulo = 0;
    this.ratio = 0.05;
  }

  alterarDistancias(dmin, dmax) {
    this.distanciaMax = dmin;
    this.distanciaMin = dmax;
    this.distancia = this.distanciaMax;
  }

  rotacionar() {
    let delta = (mouseX - width/2) / (width/2);
    this.angulo += delta;
  }

  aproximar() {
    let delta = (mouseY - height/2) / (height/2);

    if (delta < 0) {
      this.distancia = lerp(this.distancia, this.distanciaMin, this.ratio * abs(delta));
    } else if (delta > 0) {
      this.distancia = lerp(this.distancia, this.distanciaMax, this.ratio * abs(delta));
    } 
  }

  moverCamera() {
    this.cam.setPosition(this.distancia * sin(this.angulo), 0, this.distancia * cos(this.angulo));
    this.cam.lookAt(0, 0, 0);
  }
}