let firstRun = true
let img;
let img2;
let img3;

// vocal=bass, drum=snare, bass=kick, other=hihat
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // rectMode(CENTER)
  if (firstRun){ //images
    img = loadImage('/assets/mugs.png'); //mugshots picture
    img2 = loadImage('/assets/wheel1.png'); //wheel 1
    img3 = loadImage('/assets/strip1.png'); //strip 1
    firstRun = false
  }

  frameRate(60)

  // let hihat = map(bass, 0, 100, 0, 10)
  
  background(255);

  let snare = map(drum, 0, 80, 0, 10000);

  image(img3, 1050, snare -2000);// image(img, -960, -540);

  let kick = map(bass, 0, 80, 0, 360);

  push();
  imageMode(CENTER)
  translate(1620, 1080);
  rotate(kick);
  image(img2, 0, 0);//wheel 1
  pop();

  //image(img2, 448, 156)//reference image is 1024x768 / 2 = 512x384, 1920x1080 / 2 = 960x540
  
  //port hole = 480*270

  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rect(0, 0, 1920, 225);//top horizontal

  rect(0, 0, 480, 1080);//left vertical

  rect(1440, 0, 480, 1080);//right vertical

  push();
  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rectMode(CENTER)
  rect(960, 0, 120, 2160);//center vertical
  
  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rectMode(CENTER)
  rect(0, 540, 3840, 120);//center horizontal
  pop();
  
  rect(0, 855, 1920, 225);//bottom horizontal

  fill(255);
  ellipse(1720, 1080, 10, 10);//reference dot




}

