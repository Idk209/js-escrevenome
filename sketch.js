
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;


let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;




function setup() {
  createCanvas(600, 400);
   
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    
  }
}

function verificaColisaoRaquete(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    
  }
}

function movimentaRaqueteOponente() {
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function incluiPlacar() {
  stroke("white")
  textSize(16);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill("white");
  text(meusPontos, 170, 26);
 fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill("white");
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 588) {
    meusPontos += 1;
    
  }
  if (xBolinha < 14) {
    pontosDoOponente += 1;
    
  }
}

