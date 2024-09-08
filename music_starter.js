let firstRun = true
let img;
let img2;

// vocal=bass, drum=snare, bass=kick, other=hihat
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // rectMode(CENTER)
  if (firstRun){ //images
    img = loadImage('/assets/wheel1.png'); //wheel 1
    img2 = loadImage('/assets/mugs.png'); //mugshots picture
    firstRun = false
  }

  // let hihat = map(bass, 0, 100, 0, 10)

  
  
  background(0);

  let hihat = map(other, 0, 80, 0, 360);

  push();
  translate(960, 540);
  rotate(hihat);
  image(img, -960, -540);
  pop();

  //image(img2, 448, 156)//1024x768 / 2 = 512x384, 1920x1080 / 2 = 960x540
  
  fill(0);
  ellipse(960, 540, 10, 10);

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




}

