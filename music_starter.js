let firstRun = true

let img;
let img2;
let img3;
let img4;

let noo = [];

// vocal=bass, drum=snare, bass=kick, other=hihat
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // rectMode(CENTER)
  if (firstRun){ //images
    img = loadImage('/assets/mugs.png'); //mugshots picture
    img2 = loadImage('/assets/wheel1.png'); //
    img3 = loadImage('/assets/strip1.png'); //Russel Hobbs animation taken from 'https://tenor.com/view/gorillaz-russel-hobbes-russel-russel-gorillaz-gorillaz-drummer-gif-19558804'
    img4 = loadImage('/assets/noo1.png'); //Noodle animation taken from 'https://tenor.com/view/noodle-rotate-spin-spinning-gorillaz-gif-18012651'

    // noo.push(loadImage('/assets/noo1.png'));
    noo.push(loadImage('noo1.png'));

    firstRun = false
  }

  frameRate(8)
  
  background(0);

  //port hole = 420*400

  //image(img2, 448, 156)//reference image is 1024x768 / 2 = 512x384, 1920x1080 / 2 = 960x540
  
  push();
  rect(1020, 80, 420, 400);
  let snare = map(drum, 0, 70, 0, 23458);
  pop();

  push();
  translate(1050, 77);
  image(img3, 0, 0 - snare);//Hobbs, image(img, -960, -540);
  pop();

  let kick = map(bass, 0, 80, 0, 360);

  push();
  imageMode(CENTER)
  translate(1620, 1080);
  rotate(kick);
  image(img2, 0, 0);//wheel 1
  pop();

  var hihat = map (vocal, 0, 100, 0, 7);

  rect(480, 600, 420, 400);

  push();
  scale(1.5);
  // image(img4, 360, 425)// noodle
  image(noo[hihat], width/2, height/2)
  pop();

  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rect(0, 0, 1920, 80);//top horizontal

  rect(0, 0, 480, 1080);//left vertical

  rect(1440, 0, 480, 1080);//right vertical

  push();
  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rectMode(CENTER);
  rect(960, 0, 120, 2160);//center vertical
  
  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rectMode(CENTER);
  rect(0, 540, 3840, 120);//center horizontal
  pop();
  
  rect(0, 1000, 1920, 80);//bottom horizontal

  fill(255);
  ellipse(1720, 1080, 10, 10);//reference dot




}

