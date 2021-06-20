
let telai;
//let onca;
var amazonia;
//let caborja;

//let botaoO = false;
//let botaoC = false;
//let b_caborja = false;
//let b_onca = false;
//let resistencia = false;
//let createA1 = false;
//let createA2 = false;
//let bt2 = false;
//let bt3 = false;

let posX = 0;
let posY = 0;
let posZ = -200;
let zz;
let scl = 1.0;

let posx1 = [];
let posy1 = [];
let posz1 = [];
let posx11 = [];
let posy11 = [];
let posz11 = [];
let velx1 = [];
let vely1 = [];
let velz1 = [];

let posx2 = [];
let posy2 = [];
let posz2 = [];
let posx22 = [];
let posy22 = [];
let posz22 = [];
let velx2 = [];
let vely2 = [];
let velz2 = [];


let posx3 = [];
let posy3 = [];
let posz3 = [];
let posx33 = [];
let posy33 = [];
let posz33 = [];
let velx3 = [];
let vely3 = [];
let velz3 = [];


let img;

let lideranças = [];
let etnomidia = [];
let artes = [];

// let conX, conY;

//let alpha1 = 0;
//let alphaCaborja = 0;

// let etnomidia;
// let et_y = 235;
// let velet_y = 2;

let t = 0;

var font;

function preload() {
  amazonia = loadImage('img/amaz.jpg');

  telai = loadImage('img/tela_inicial.jpg');
}


function setup() {
  createCanvas(1080, 720, WEBGL);

  //physics = new VerletPhysics2D();
  //physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.01)));
  //physics.setWorldBounds(new Rect(0, 0, width, height));

  //resist = new Blanket(40, 40, 200, 0.1, 60, 100);

  // b = new Blanket(20, 20, 150, 0.05, 300, 100);
  // b2 = new Blanket(60, 60, 150, 0.01, 300, 100);
  // b3 = new Blanket(30, 30, 150, 0.01, 300, 200);

  for (let i = 0; i < 9; i++) {
    posx1[i] = width/2+cos(i)*300;
    posy1[i] = height/2+sin(i)*333;
    posz1[i] = 0-noise(i)*450;

    posx11[i] = width/2+cos(i)*300;
    posy11[i] = height/2+sin(i)*333;
    posz11[i] = 0-noise(i)*450;

    velx1[i] = 5;
    vely1[i] = 7;
    velz1[i] = 11;
  }
  for (let i = 0; i < 15; i++) {
    posx2[i] = width/2+cos(i)*350;
    posy2[i] = height/2+map(noise(i), 0, 1, -1, 1)*333;
    posz2[i] = 0-noise(i)*450;

    posx22[i] = width/2+cos(i)*350;
    posy22[i] = height/2+map(noise(i), 0, 1, -1, 1)*333;
    posz22[i] = 0-noise(i)*450;

    velx2[i] = 4.1;
    vely2[i] = 12;
    velz2[i] = 10.7;
  }
  for (let i = 0; i < 10; i++) {
    posx3[i] = width/2+map(noise(i), 0, 1, -1, 1)*253;
    posy3[i] = height/2+cos(i)*333;
    posz3[i] = 0-noise(i)*450;

    posx33[i] = width/2+map(noise(i), 0, 1, -1, 1)*253;
    posy33[i] = height/2+cos(i)*333;
    posz33[i] = 0-noise(i)*450;

    velx3[i] = 9.1;
    vely3[i] = 8;
    velz3[i] = 4.7;
  }

  font = loadFont('data/SourceSansPro-Regular.otf');
  textFont(font);
  textSize(40);

  amazonia.resize(1280/4, 720/4);

  smooth();
}


function draw() {
  translate(-width/2, -height/2);
  background(0);

  noFill();
  stroke(240);
  strokeWeight(1);

  rect(3, 3, width-4, height-4);
  //textFont(font1);
  //tela inicial --------------------------------
  push();
  if (frameCount > 0 && frameCount < 2*30) {
    textSize(50);
    fill(240, 240);
    text("assombrações pandêmicas", 100, height/2-250);

    push();
    translate(100, height/2-230, 120);
    for (let x = 0; x < telai.width; x+= 5) {
      for (let y = 0; y < telai.height; y+= 5) {
        let c = telai.get(x, y);
        let b = brightness(c);
        let z = map(b, 0, 255, -200, 0);
        push();
        translate(0, 0, z);
        noStroke();
        fill(c);
        rect(x*1.3, y, 3, 3);
        pop();
      }
    }
    pop();
  }
  pop();

  t += 0.01;

  translate(0, 0, posZ);

  // posX = constrain(posX, -600, 600);
  // posY = constrain(posY, -600, 600);

  strokeWeight(2);

  //textFont(font2);
  if (frameCount > 3*30) {
    translate(0, 0, 0);
    beginShape();
    noFill();
    stroke(240, 0, 0, 150);
    for (let  i = 0; i < 9; i ++) {

      if (mouseIsPressed && posZ > -100 && posZ < 400) {
        if (dist(posx1[i], posy1[i], mouseX+cos(i*0.1)*10, mouseY+sin(i*0.1)*10) < 180) {
          if (posx1[i] - mouseX > 20) {
            posx1[i] = posx1[i]+20;
          } else {
            posx1[i] = posx1[i]-20;
          }
          if (posy1[i] - mouseY > 20) {
            posy1[i] = posy1[i]+20;
          } else {
            posy1[i] = posy1[i]-20;
          }
        }
      }

      //obtendo a diferença e testando
      if (posx1[i] - posx11[i] > 0) {
        //se a diferença for maior que 0 a posição 1 decrementa
        posx1[i]-= velx1[i];
        //quando a posição 1 decresce até a posição 2, permanece nesta
        if (posx1[i] <= posx11[i]) {
          posx1[i] = posx11[i];
        }
      } else {
        //se a diferença for menor que 0 a posição 1 incrementa
        posx1[i]+=velx1[i];
        //quando a posição 1 alcança a posição 2, permanece nesta
        if (posx1[i] >= posx11[i]) {
          posx1[i] = posx11[i];
        }
      }
      if (posy1[i] - posy11[i] > 0) {
        posy1[i]-=vely1[i];
        if (posy1[i] <= posy11[i]) {
          posy1[i] = posy11[i];
        }
      } else {
        posy1[i]+=vely1[i];
        if (posy1[i] >= posy11[i]) {
          posy1[i] = posy11[i];
        }
      }
      if (posz1[i] - posz11[i] > 0) {
        posz1[i]-= velz1[i];
        if (posz1[i] <= posz11[i]) {
          posz1[i] = posz11[i];
        }
      } else {
        posz1[i] += velz1[i];
        if (posz1[i] >= posz11[i]) {
          posz1[i] = posz11[i];
        }
      }

      let cx = cos(posx1[i]*0.01+t)*80;
      let ny = map(noise(posy1[i]*0.01+t), 0, 1, -1, 1)*80;
      let nz = noise(posz1[i]*0.01+t)*80;

      curveVertex(posx1[i]+cx, posy1[i]+ny, posz1[i]-nz);
    }
    endShape();

    beginShape();
    stroke(50, 100, 0, 150);
    for (let  i = 0; i < 15; i ++) {
      if (mouseIsPressed && posZ > 400 && posZ < 800) {
        if (dist(posx2[i], posy2[i], mouseX+cos(i*0.1)*10, mouseY+sin(i*0.1)*10) < 180) {
          if (posx2[i] - mouseX > 20) {
            posx2[i] = posx2[i]+20;
          } else {
            posx2[i] = posx2[i]-20;
          }
          if (posy2[i] - mouseY > 20) {
            posy2[i] = posy2[i]+20;
          } else {
            posy2[i] = posy2[i]-20;
          }
        }
      }

      //obtendo a diferença e testando
      if (posx2[i] - posx22[i] > 0) {
        //se a diferença for maior que 0 a posição 1 decrementa
        posx2[i]-= velx2[i];
        //quando a posição 1 decresce até a posição 2, permanece nesta
        if (posx2[i] <= posx22[i]) {
          posx2[i] = posx22[i];
        }
      } else {
        //se a diferença for menor que 0 a posição 1 incrementa
        posx2[i]+=velx2[i];
        //quando a posição 1 alcança a posição 2, permanece nesta
        if (posx2[i] >= posx22[i]) {
          posx2[i] = posx22[i];
        }
      }
      if (posy2[i] - posy22[i] > 0) {
        posy2[i]-=vely2[i];
        if (posy2[i] <= posy22[i]) {
          posy2[i] = posy22[i];
        }
      } else {
        posy2[i]+=vely2[i];
        if (posy2[i] >= posy22[i]) {
          posy2[i] = posy22[i];
        }
      }
      if (posz2[i] - posz22[i] > 0) {
        posz2[i]-= velz2[i];
        if (posz2[i] <= posz22[i]) {
          posz2[i] = posz22[i];
        }
      } else {
        posz2[i] += velz2[i];
        if (posz2[i] >= posz22[i]) {
          posz2[i] = posz22[i];
        }
      }

      let cx = cos(posx2[i]*0.01+t)*80;
      let ny = map(noise(posy2[i]*0.01+t), 0, 1, -1, 1)*80;
      let nz = noise(posz2[i]*0.01+t)*80;

      curveVertex(posx2[i]+cx, posy2[i]+ny, -200+posz2[i]+nz);
    }
    endShape();
    beginShape();
    stroke(50, 10, 200, 150);
    for (let  i = 0; i < 10; i ++) {

      if (mouseIsPressed && posZ > 800 && posZ < 1200) {
        if (dist(posx3[i], posy3[i], mouseX+cos(i*0.1)*10, mouseY+sin(i*0.1)*10) < 180) {
          if (posx3[i] - mouseX > 20) {
            posx3[i] = posx3[i]+20;
          } else {
            posx3[i] = posx3[i]-20;
          }
          if (posy3[i] - mouseY > 20) {
            posy3[i] = posy3[i]+20;
          } else {
            posy3[i] = posy3[i]-20;
          }
        }
      }

      //obtendo a diferença e testando
      if (posx3[i] - posx33[i] > 0) {
        //se a diferença for maior que 0 a posição 1 decrementa
        posx3[i]-= velx3[i];
        //quando a posição 1 decresce até a posição 2, permanece nesta
        if (posx3[i] <= posx33[i]) {
          posx3[i] = posx33[i];
        }
      } else {
        //se a diferença for menor que 0 a posição 1 incrementa
        posx3[i]+=velx3[i];
        //quando a posição 1 alcança a posição 2, permanece nesta
        if (posx3[i] >= posx33[i]) {
          posx3[i] = posx33[i];
        }
      }
      if (posy3[i] - posy33[i] > 0) {
        posy3[i]-=vely3[i];
        if (posy3[i] <= posy33[i]) {
          posy3[i] = posy33[i];
        }
      } else {
        posy3[i]+=vely3[i];
        if (posy3[i] >= posy33[i]) {
          posy3[i] = posy33[i];
        }
      }
      if (posz3[i] - posz33[i] > 0) {
        posz3[i]-= velz2[i];
        if (posz3[i] <= posz33[i]) {
          posz3[i] = posz33[i];
        }
      } else {
        posz3[i] += velz3[i];
        if (posz3[i] >= posz33[i]) {
          posz3[i] = posz33[i];
        }
      }

      let cx = cos(posx3[i]*0.01+t)*80;
      let ny = map(noise(posy3[i]*0.01+t), 0, 1, -1, 1)*80;
      let nz = noise(posz3[i]*0.01+t)*80;

      curveVertex(posx3[i]+cx, posy3[i]+ny, -400+posz3[i]+nz);
    }
    endShape();

    //LIDERANÇAS-------------------------------------------------------------------
    for (let  i = 0; i < 9; i ++) {
      //b.springs[i].out();

      let cx = cos(posx1[i]*0.01+t)*80;
      let ny = map(noise(posy1[i]*0.01+t), 0, 1, -1, 1)*80;
      let nz = noise(posz1[i]*0.01+t)*80;

      noStroke();
      fill(200, 100, 15);
      if (i >= 1 && i <= 7) {
        push();
        translate(0, 0, posz1[i]-nz);
        ellipse(posx1[i]+cx, posy1[i]+ny, 8, 8);
        pop();
      }
      fill(240);
      textSize(20);
      let cx8 = cos(posx1[8]*0.01+t)*80;
      let ny8 = map(noise(posy1[8]*0.01+t), 0, 1, -1, 1)*80;
      text("LIDERANÇAS", posx1[8]+cx8, posx1[8]+ny8);

      textSize(15);
      let cx1 = cos(posx1[1]*0.01+t)*80;
      let ny1 = map(noise(posy1[1]*0.01+t), 0, 1, -1, 1)*80;
      let nz1 = noise(posz1[1]*0.01+t)*80;

      //textAlign(LEFT, BOTTOM);
      if (dist(posx1[1]+cx1, posy1[1]+ny1, mouseX, mouseY) < 50 && posZ > -100 && posZ < 400) {
        fill(240);
        img = createImg('img/sonia-guajajarajpg-03052021211741293.jpeg');
        img.position(1090, 20);
        img.size(600, 400);
        lideranças[1] = true;
      } else {
        fill(200, 100, 15);
        lideranças[1] = false;
      }
      push();
      translate(0, 0, posz1[1]-nz1);
      text("Sonia Guajajara", posx1[1]+cx1, posy1[1]+ny1);
      pop();

      let cx2 = cos(posx1[2]*0.01+t)*80;
      let ny2 = map(noise(posy1[2]*0.01+t), 0, 1, -1, 1)*80;
      let nz2 = noise(posz1[2]*0.01+t)*80;
      if (dist(posx1[2]+cx2, posy1[2]+ny2, mouseX, mouseY) < 50 && posZ > -100 && posZ < 400) {
        fill(240);
        fill(240);
        img = createImg('img/krenak_joao_kehl.jpg');
        img.position(1090, 20);
        img.size(600, 400);
        lideranças[2] = true;
      } else {
        fill(200, 100, 15);
        lideranças[2] = false;
      }

      push();
      translate(0, 0, posz1[2]-nz2);
      text("Ailton Krenak", posx1[2]+cx2, posy1[2]+ny2);
      pop();

      let cx3 = cos(posx1[3]*0.01+t)*80;
      let ny3 = map(noise(posy1[3]*0.01+t), 0, 1, -1, 1)*80;
      let nz3 = noise(posz1[3]*0.01+t)*80;
      if (dist(posx1[3]+cx3, posy1[3]+ny3, mouseX, mouseY) < 50 && posZ > -100 && posZ < 400) {
        fill(240);
        lideranças[3] = true;
      } else {
        fill(200, 100, 15);
        lideranças[3] = false;
      }
      push();
      translate(0, 0, posz1[3]-nz3);
      text("Celia Xakriabá", posx1[3]+cx3, posy1[3]+ny3);
      pop();

      let cx4 = cos(posx1[4]*0.01+t)*80;
      let ny4 = map(noise(posy1[4]*0.01+t), 0, 1, -1, 1)*80;
      let nz4 = noise(posz1[4]*0.01+t)*80;
      if (dist(posx1[4]+cx4, posy1[4]+ny4, mouseX, mouseY) < 50 && posZ > -100 && posZ < 400) {
        fill(240);
        lideranças[4] = true;
      } else {
        fill(200, 100, 15);
        lideranças[4] = false;
      }
      push();
      translate(0, 0, posz1[4]-nz4);
      text("Denilson Baniwa", posx1[4]+cx4, posy1[4]+ny4);
      pop();

      let cx5 = cos(posx1[5]*0.01+t)*80;
      let ny5 = map(noise(posy1[5]*0.01+t), 0, 1, -1, 1)*80;
      let nz5 = noise(posz1[5]*0.01+t)*80;
      if (dist(posx1[5]+cx5, posy1[5]+ny5, mouseX, mouseY) < 50 && posZ > -100 && posZ < 400) {
        fill(240);
        lideranças[5] = true;
      } else {
        fill(200, 100, 15);
        lideranças[5] = false;
      }
      push();
      translate(0, 0, posz1[5]-nz5);
      text("Jaider Esbell", posx1[5]+cx5, posy1[5]+ny5);
      pop();

      let cx6 = cos(posx1[6]*0.01+t)*80;
      let ny6 = map(noise(posy1[6]*0.01+t), 0, 1, -1, 1)*80;
      let nz6 = noise(posz1[6]*0.01+t)*80;
      if (dist(posx1[6]+cx6, posy1[6]+ny6, mouseX, mouseY) < 50 && posZ > -100 && posZ < 400) {
        fill(240);
        lideranças[6] = true;
      } else {
        fill(200, 100, 15);
        lideranças[6] = false;
      }
      push();
      translate(0, 0, posz1[6]-nz6);
      text("Cacique Babau Tupinamba", posx1[6]+cx6, posy1[6]+ny6);
      pop();

      let cx7 = cos(posx1[7]*0.01+t)*80;
      let ny7 = map(noise(posy1[7]*0.01+t), 0, 1, -1, 1)*80;
      let nz7 = noise(posz1[7]*0.01+t)*80;
      if (dist(posx1[7]+cx7, posy1[7]+ny7, mouseX, mouseY) < 50 && posZ > -100 && posZ < 400) {
        fill(240);
        lideranças[7] = true;
      } else {
        fill(200, 100, 15);
        lideranças[7] = false;
      }
      push();
      translate(0, 0, posz1[7]-nz7);
      text("Daiara Tukano", posx1[7]+cx7, posy1[7]+ny7);
      pop();
    }

    ////ETNOMÍDIA-------------------------------------------------------------------
    for (let  i = 0; i < 15; i ++) {

      let cx = cos(posx2[i]*0.01+t)*80;
      let ny = map(noise(posy2[i]*0.01+t), 0, 1, -1, 1)*80;
      let nz = noise(posz2[i]*0.01+t)*80;

      noStroke();
      fill(200, 100, 15);
      if (i >= 1 && i <= 13) {
        push();
        translate(0, 0, -200+posz2[i]+nz);
        ellipse(posx2[i]+cx, posy2[i]+ny, 8, 8);
        pop();
      }

      let cx14 = cos(posx2[14]*0.01+t)*80;
      let ny14 = map(noise(posy2[14]*0.01+t), 0, 1, -1, 1)*80;

      textSize(20);
      fill(240);
      push();
      translate(0, 0, -200);
      text("ETNOMÍDIA", posx2[14]+cx14, posy2[14]+ny14);
      pop();

      textSize(10);
      let cx1 = cos(posx2[1]*0.01+t)*80;
      let ny1 = map(noise(posy2[1]*0.01+t), 0, 1, -1, 1)*80;
      let nz1 = noise(posz2[1]*0.01+t)*80;

      if (dist(posx2[1]+cx1, posy2[1]+ny1, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[1] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[1] = false;
      }
      push();
      translate(0, 0, -200+posz2[1]-nz1);
      text("Midia India", posx2[1]+cx1, posy2[1]+ny1);
      pop();

      let cx2 = cos(posx2[2]*0.01+t)*80;
      let ny2 = map(noise(posy2[2]*0.01+t), 0, 1, -1, 1)*80;
      let nz2 = noise(posz2[2]*0.01+t)*80;
      if (dist(posx2[2]+cx2, posy2[2]+ny2, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[2] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[2] = false;
      }
      push();
      translate(0, 0, -200+posz2[2]-nz2);
      text("Radio Yande", posx2[2]+cx2, posy2[2]+ny2);
      pop();

      let cx3 = cos(posx2[3]*0.01+t)*80;
      let ny3 = map(noise(posy2[3]*0.01+t), 0, 1, -1, 1)*80;
      let nz3 = noise(posz2[3]*0.01+t)*80;
      if (dist(posx2[3]+cx3, posy2[3]+ny3, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[3] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[3] = false;
      }
      push();
      translate(0, 0, -200+posz2[3]-nz3);
      text("Video nas Aldeias", posx2[3]+cx3, posy2[3]+ny3);
      pop();

      let cx4 = cos(posx2[4]*0.01+t)*80;
      let ny4 = map(noise(posy2[4]*0.01+t), 0, 1, -1, 1)*80;
      let nz4 = noise(posz2[4]*0.01+t)*80;
      if (dist(posx2[4]+cx4, posy2[4]+ny4, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[4] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[4] = false;
      }
      push();
      translate(0, 0, -200+posz2[4]-nz4);
      text("Tingui Filmes", posx2[4]+cx4, posy2[4]+ny4);
      pop();

      let cx5 = cos(posx2[5]*0.01+t)*80;
      let ny5 = map(noise(posy2[5]*0.01+t), 0, 1, -1, 1)*80;
      let nz5 = noise(posz2[5]*0.01+t)*80;
      if (dist(posx2[5]+cx5, posy2[5]+ny5, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[5] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[5] = false;
      }
      push();
      translate(0, 0, -200+posz2[5]-nz5);
      text("Selvagem Ciclo", posx2[5]+cx5, posy2[5]+ny5);
      pop();

      let cx6 = cos(posx2[6]*0.01+t)*80;
      let ny6 = map(noise(posy2[6]*0.01+t), 0, 1, -1, 1)*80;
      let nz6 = noise(posz2[6]*0.01+t)*80;
      if (dist(posx2[6]+cx6, posy2[6]+ny6, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[6] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[6] = false;
      }
      push();
      translate(0, 0, -200+posz2[6]-nz6);
      text("Cristin Wariu", posx2[6]+cx6, posy2[6]+ny6);
      pop();

      let cx7 = cos(posx2[7]*0.01+t)*80;
      let ny7 = map(noise(posy2[7]*0.01+t), 0, 1, -1, 1)*80;
      let nz7 = noise(posz2[7]*0.01+t)*80;
      if (dist(posx2[7]+cx7, posy2[7]+ny7, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[7] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[7] = false;
      }
      push();
      translate(0, 0, -200+posz2[7]-nz7);
      text("APIB", posx2[7]+cx7, posy2[7]+ny7);
      pop();

      let cx8 = cos(posx2[8]*0.01+t)*80;
      let ny8 = map(noise(posy2[8]*0.01+t), 0, 1, -1, 1)*80;
      let nz8 = noise(posz2[8]*0.01+t)*80;
      if (dist(posx2[8]+cx8, posy2[8]+ny8, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[8] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[8] = false;
      }
      push();
      translate(0, 0, -200+posz2[8]-nz8);
      text("Alice Pataxó", posx2[8]+cx8, posy2[8]+ny8);
      pop();

      let cx9 = cos(posx2[9]*0.01+t)*80;
      let ny9 = map(noise(posy2[9]*0.01+t), 0, 1, -1, 1)*80;
      let nz9 = noise(posz2[9]*0.01+t)*80;
      if (dist(posx2[9]+cx9, posy2[9]+ny9, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[9] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[9] = false;
      }
      push();
      translate(0, 0, -200+posz2[9]-nz9);
      text("Takumã Pataxó", posx2[9]+cx9, posy2[9]+ny9);
      pop();

      let cx10 = cos(posx2[10]*0.01+t)*80;
      let ny10 = map(noise(posy2[10]*0.01+t), 0, 1, -1, 1)*80;
      let nz10 = noise(posz2[10]*0.01+t)*80;
      if (dist(posx2[10]+cx10, posy2[10]+ny10, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[10] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[10] = false;
      }
      push();
      translate(0, 0, -200+posz2[10]-nz10);
      text("Weena Tikuna", posx2[10]+cx10, posy2[10]+ny10);
      pop();

      let cx11 = cos(posx2[11]*0.01+t)*80;
      let ny11 = map(noise(posy2[11]*0.01+t), 0, 1, -1, 1)*80;
      let nz11 = noise(posz2[11]*0.01+t)*80;
      if (dist(posx2[11]+cx11, posy2[11]+ny11, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[11] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[11] = false;
      }
      push();
      translate(0, 0, -200+posz2[11]-nz11);
      text("Mi Mawai", posx2[11]+cx11, posy2[11]+ny11);
      pop();

      let cx12 = cos(posx2[12]*0.01+t)*80;
      let ny12 = map(noise(posy2[12]*0.01+t), 0, 1, -1, 1)*80;
      let nz12 = noise(posz2[12]*0.01+t)*80;
      if (dist(posx2[12]+cx12, posy2[12]+ny12, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[12] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[12] = false;
      }
      push();
      translate(0, 0, -200+posz2[12]-nz12);
      text("Cunumi MC", posx2[12]+cx12, posy2[12]+ny12);
      pop();

      let cx13 = cos(posx2[13]*0.01+t)*80;
      let ny13 = map(noise(posy2[13]*0.01+t), 0, 1, -1, 1)*80;
      let nz13 = noise(posz2[13]*0.01+t)*80;
      if (dist(posx2[13]+cx13, posy2[13]+ny13, mouseX, mouseY) < 50 && posZ > 400 && posZ < 800) {
        fill(240);
        etnomidia[13] = true;
      } else {
        fill(129, 49, 128);
        etnomidia[13] = false;
      }
      push();
      translate(0, 0, -200+posz2[13]-nz13);
      text("Tingui Botó", posx2[13]+cx13, posy2[13]+ny13);
      pop();
    }
    //
    ////ARTES-------------------------------------------------------------------
    for (let  i = 0; i < 10; i ++) {

      let cx = cos(posx3[i]*0.01+t)*80;
      let ny = map(noise(posy3[i]*0.01+t), 0, 1, -1, 1)*80;
      let nz = noise(posz3[i]*0.01+t)*80;

      noStroke();
      fill(100, 255, 255);
      if (i >= 1 && i <= 8) {
        push();
        translate(0, 0, -400+posz3[i]+nz);
        ellipse(posx3[i]+cx, posy3[i]+ny, 8, 8);
        pop();
      }

      let cx9 = cos(posx3[9]*0.01+t)*80;
      let ny9 = map(noise(posy3[9]*0.01+t), 0, 1, -1, 1)*80;
      textSize(20);
      fill(240);
      push();
      translate(0, 0, -400);
      text("CIRCUITO DAS ARTES", posx3[9]+cx9, posy3[9]+ny9);
      pop();

      textSize(10);

      let cx1 = cos(posx3[1]*0.01+t)*80;
      let ny1 = map(noise(posy3[1]*0.01+t), 0, 1, -1, 1)*80;
      let nz1 = noise(posz3[1]*0.01+t)*80;
      if (dist(posx3[1]+cx1, posy3[1]+ny1, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[1] = true;
      } else {
        fill(80, 200, 80);
        artes[1] = false;
      }
      push();
      translate(0, 0, -400+posz3[1]-nz1);
      text("Projeto um Outro Céu", posx3[1]+cx1, posy3[1]+ny1);
      pop();

      let cx2 = cos(posx3[2]*0.01+t)*80;
      let ny2 = map(noise(posy3[2]*0.01+t), 0, 1, -1, 1)*80;
      let nz2 = noise(posz3[2]*0.01+t)*80;
      if (dist(posx3[2]+cx2, posy3[2]+ny2, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[2] = true;
      } else {
        fill(80, 200, 80);
        artes[2] = false;
      }
      push();
      translate(0, 0, -400+posz3[2]-nz2);
      text("A cidade precisa de você", posx3[2]+cx2, posy3[2]+ny2);
      pop();

      let cx3 = cos(posx3[3]*0.01+t)*80;
      let ny3 = map(noise(posy3[3]*0.01+t), 0, 1, -1, 1)*80;
      let nz3 = noise(posz3[3]*0.01+t)*80;
      if (dist(posx3[3]+cx3, posy3[3]+ny3, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[3] = true;
      } else {
        fill(80, 200, 80);
        artes[3] = false;
      }
      push();
      translate(0, 0, -400+posz3[3]-nz3);
      text("Exposição Vexoá: Nós sabemos", posx3[3]+cx3, posy3[3]+ny3);
      pop();

      let cx4 = cos(posx3[4]*0.01+t)*80;
      let ny4 = map(noise(posy3[4]*0.01+t), 0, 1, -1, 1)*80;
      let nz4 = noise(posz3[4]*0.01+t)*80;
      if (dist(posx3[4]+cx4, posy3[4]+ny4, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[4] = true;
      } else {
        fill(80, 200, 80);
        artes[4] = false;
      }
      push();
      translate(0, 0, -400+posz3[4]-nz4);
      text("Exposição Mundos Indígenas", posx3[4]+cx4, posy3[4]+ny4);
      pop();

      let cx5 = cos(posx3[5]*0.01+t)*80;
      let ny5 = map(noise(posy3[5]*0.01+t), 0, 1, -1, 1)*80;
      let nz5 = noise(posz3[5]*0.01+t)*80;
      if (dist(posx3[5]+cx5, posy3[5]+ny5, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[5] = true;
      } else {
        fill(80, 200, 80);
        artes[5] = false;
      }
      push();
      translate(0, 0, -400+posz3[5]-nz5);
      text("Denilson Baniwa", posx3[5]+cx5, posy3[5]+ny5);
      pop();

      let cx6 = cos(posx3[6]*0.01+t)*80;
      let ny6 = map(noise(posy3[6]*0.01+t), 0, 1, -1, 1)*80;
      let nz6 = noise(posz3[6]*0.01+t)*80;
      if (dist(posx3[6]+cx6, posy3[6]+ny6, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[6] = true;
      } else {
        fill(80, 200, 80);
        artes[6] = false;
      }
      push();
      translate(0, 0, -400+posz3[6]-nz6);
      text("Exposição Netos de Macunaimi", posx3[6]+cx6, posy3[6]+ny6);
      pop();

      let cx7 = cos(posx3[7]*0.01+t)*80;
      let ny7 = map(noise(posy3[7]*0.01+t), 0, 1, -1, 1)*80;
      let nz7 = noise(posz3[7]*0.01+t)*80;
      if (dist(posx3[7]+cx7, posy3[7]+ny7, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[7] = true;
      } else {
        fill(80, 200, 80);
        artes[7] = false;
      }
      push();
      translate(0, 0, -400+posz3[7]-nz7);
      text("34° Bienal de São Paulo", posx3[7]+cx7, posy3[7]+ny7);
      pop();

      let cx8 = cos(posx3[8]*0.01+t)*80;
      let ny8 = map(noise(posy3[8]*0.01+t), 0, 1, -1, 1)*80;
      let nz8 = noise(posz3[8]*0.01+t)*80;
      if (dist(posx3[8]+cx8, posy3[8]+ny8, mouseX, mouseY) < 50 && posZ > 800 && posZ < 1200) {
        fill(240);
        artes[8] = true;
      } else {
        fill(80, 200, 80);
        artes[8] = false;
      }
      push();
      translate(0, 0, -400+posz3[8]-nz8);
      text("Premio PIPA", posx3[8]+cx8, posy3[8]+ny8);
      pop();
    }

    push();
    translate(-50, height-100, -800);
    rotateX(radians(448));
    beginShape(LINE_LOOP);
    for (let x = 0; x < width; x+= 15) {
      for (let y = 0; y < height; y+= 15) {
        let c = amazonia.get(int(x*0.25), int(y*0.25));

        let d = dist(x, y, mouseX+cos(x*0.1)*2, mouseY+sin(y*0.1)*2);
        let mD = dist(0, 0, width/2, height/2);
        let mapD = map(d, 0, mD, 0, 20);
        //strokeWeight(1);

        let z = map(brightness(c), 0, 255, -200, 0);
        noStroke();
        fill(c);
        vertex(x+cos(x*0.01+t)*50+mapD, y+sin(y*0.05+t)*50+mapD, z);
      }
    }
    endShape();
    pop();
  }
}

function mousePressed() {
  //LIDERANÇAS
  if (lideranças[1]) {
    img = window.open('https://www.instagram.com/guajajarasonia/');
  }
  if (lideranças[2]) {
    img = window.open('https://pt.wikipedia.org/wiki/Ailton_Krenak');
  }
  if (lideranças[3]) {
    img = window.open('https://www.instagram.com/celia.xakriaba/');
  }
  if (lideranças[4]) {
    img = window.open("https://www.behance.net/denilsonbaniwa");
  }
  if (lideranças[5]) {
    img = window.open("https://www.instagram.com/jaider_esbell/");
  }
  if (lideranças[6]) {
    img = window.open("https://pt.wikipedia.org/wiki/Babau_Tupinamb%C3%A1");
  }
  if (lideranças[7]) {
    img = window.open("https://www.instagram.com/daiaratukano/");
  }

  //ETNOMIDIA
  if (etnomidia[1]) {
    img = window.open("https://www.instagram.com/midiaindiaoficial/");
  }
  if (etnomidia[2]) {
    img = window.open("https://radioyande.com/");
  }
  if (etnomidia[3]) {
    img = window.open("http://www.videonasaldeias.org.br/2009/");
  }
  if (etnomidia[4]) {
    img = window.open("https://www.instagram.com/tingui.filmes/");
  }
  if (etnomidia[5]) {
    img = window.open("selvagemciclo.com.br");
  }
  if (etnomidia[6]) {
    img = window.open("https://www.instagram.com/cristianwariu/");
  }
  if (etnomidia[7]) {
    img = window.open("https://www.instagram.com/apiboficial/");
  }
  if (etnomidia[8]) {
    img = window.open("https://www.instagram.com/alice_pataxo/");
  }
  if (etnomidia[9]) {
    img = window.open("https://www.instagram.com/tukuma_pataxo/");
  }
  if (etnomidia[10]) {
    img = window.open("https://www.instagram.com/weena_tikuna/");
  }
  if (etnomidia[11]) {
    img = window.open("https://www.instagram.com/mimawai/");
  }
  if (etnomidia[12]) {
    img = window.open("https://www.instagram.com/kunumi.mc/");
  }
  if (etnomidia[13]) {
    img = window.open("https://jairantinguiboto.com/");
  }

  //CIRCUITO DAS ARTES
  if (artes[1]) {
    img = window.open("https://umoutroceu.ufba.br");
  }
  if (artes[2]) {
    img = window.open("https://festivalacidadeprecisa.org/denilson-baniwa/");
  }
  if (artes[3]) {
    img = window.open("https://pinacoteca.org.br/programacao/vexoa-nos-sabemos/");
  }
  if (artes[4]) {
    img = window.open("https://youtu.be/XjQ64Wv6WGE");
  }
  if (artes[5]) {
    img = window.open("https://www.behance.net/denilsonbaniwa");
  }
  if (artes[6]) {
    img = window.open("http://www.musa.ufpr.br/createAs/exposicoes/2019/2019_Makunaimi.html");
  }
  if (artes[7]) {
    img = window.open("http://34.bienal.org.br/exposicoes/8462#:~:text=A%20mostra%20reunir%C3%A1%20trabalhos%20de,%2C%20Xirixana%2C%20Wapichana%20e%20Yanomami");
  }
  if (artes[8]) {
    img = window.open("https://www.premiopipa.com/");
  }

  //if (mouseX > 0 && mouseX < onca.width && mouseY > 0 && mouseY < onca.height && posZ > 700) {
  //  botaoO =! botaoO;
  //  botaoC = false;
  //};

  //if (mouseX > 600 && mouseX < 600+caborja.width && mouseY > 200 && mouseY < 200+caborja.height && posZ > 200 && posZ < 400) {
  //  botaoC =! botaoC;
  //  botaoO = false;
  //}
}

function mouseReleased() {
  for (let i = 0; i < 7; i++) {
    lideranças[i] = false;
  }
  for (let i = 0; i < 13; i++) {
    etnomidia[i] = false;
  }
  for (let i = 0; i < 8; i++) {
    artes[i] = false;
  }
}

function mouseWheel(event) {
  let inc = keyIsPressed & keyCode == CONTROL ? -1.0 : 1.0;
  posZ = constrain(posZ + event.delta*inc, -200, 1200);
  //scl += event.delta;
}
