 //variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18
let raio = diametro/2

 //movimento da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variaveis das raquetes
let xRaquete1 = 3;
let yRaquete1 = 150;

let xRaquete2 = 587;
let yRaquete2 = 160;

let largRaquete = 10;
let compRaquete = 90;

let velocidadeYRaquete2;
let chanceDeErrar = 0;

//placar do jogo

let pontosJ1 = 0;
let pontosJ2 = 0;

// sons do jogo

let raquetada;
let somPonto;
let musicaFundo;

function preload(){
  musicaFundo = loadSound("trilha.mp3");
  somPonto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}


function setup() {
  createCanvas(600, 400);
  musicaFundo.loop();
}

function draw() {
  background(0);
  bolinha();
  movimentoBolinha();
  colisaoBolinha();
  raquete(xRaquete1,yRaquete1);
  raquete(xRaquete2,yRaquete2);
  movimentoRaquete();
  movimentoRaquete2();
  colisaoRaqueteBiblioteca(xRaquete1,yRaquete1);
  colisaoRaqueteBiblioteca(xRaquete2,yRaquete2);
  placar();
  pontos();
  
 


}

function bolinha(){
  circle(xBolinha, yBolinha, diametro);

}

 function movimentoBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  
}

function colisaoBolinha(){
   
    if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha*= -1;
  }
  
    if (yBolinha + raio > height || yBolinha - raio <0 ){
    velocidadeYBolinha *= -1
  }
  
}

function raquete(x,y){
    rect(x, y, largRaquete, compRaquete, 10 );
  
}




function movimentoRaquete(){
  
  if(keyIsDown (UP_ARROW)) {
    yRaquete2 -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete2 += 10;
    
  }
}
function movimentoRaquete2(){
  
  if(keyIsDown (87)) {
    yRaquete1 -= 10;
  }
  
  if(keyIsDown(83)){
    yRaquete1 += 10;
    
  }
}

//function movimentoRaquete2(){
  velocidadeYRaquete2 = yBolinha-yRaquete2-largRaquete /2 - 30;
  yRaquete2 += velocidadeYRaquete2 + chanceDeErrar;
calculaChanceDeErrar();
  
//}


let colidiu = false

function colisaoRaqueteBiblioteca(x,y){
  colidiu= 
  collideRectCircle(x, y, largRaquete, compRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
      velocidadeXBolinha *=-1
      raquetada.play()

  }
}



function placar(){
    stroke(255);
    textAlign(CENTER);
    textSize(20);
    
    fill(color(0,128,128));
    rect(150,9,40,20);
    fill(255);
    text(pontosJ1,170,26);
    
    fill(color(0,128,128));
    rect(450,9,40,20);
    fill(255);
    text(pontosJ2,470,26);
  
}



function pontos(){
  if (xBolinha > 590){
    pontosJ1+=1
    somPonto.play();
  }
  if (xBolinha - raio < 1){
    pontosJ2 +=1
    somPonto.play()
  }
}

//function calculaChanceDeErrar(){
  function calculaChanceDeErrar() {
  if (pontosJ2 >= pontosJ1) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
//}
}