let firstRun = true

let img1;
let img2;
let img3;
let img4;
let img5;

let mur = [];
let noo = [];
let hob = [];
let twod = [];

// vocal=bass, drum=snare, bass=kick, other=hihat
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // rectMode(CENTER)
  if (firstRun){ //images
    img1 = loadImage('/assets/mugs.png'); //mugshots picture taken from 'https://static.wikia.nocookie.net/kong/images/a/a1/Gorillaz-dd-768_orig.jpg/'
    img2 = loadImage('/assets/wheel1.png'); //star wheel
    img3 = loadImage('/assets/strip1.png'); //image no longer used
    img4 = loadImage('/assets/bass.png'); //fret board
    img5 = loadImage('/assets/strings.png'); //bass strings


    noo.push(loadImage('/assets/noo1.png'));  //Noodle animation taken from 'https://tenor.com/view/noodle-rotate-spin-spinning-gorillaz-gif-18012651'
    noo.push(loadImage('/assets/noo2.png'));
    noo.push(loadImage('/assets/noo3.png'));
    noo.push(loadImage('/assets/noo4.png'));
    noo.push(loadImage('/assets/noo5.png'));
    noo.push(loadImage('/assets/noo6.png'));
    noo.push(loadImage('/assets/noo7.png'));

    mur.push(loadImage('/assets/mur1.png')); //Murdoc animation taken from 'https://giphy.com/stickers/gorillaz-reaction-murdoc-niccals-cSncFNjpq5VDWJQY4f'
    mur.push(loadImage('/assets/mur2.png'));
    mur.push(loadImage('/assets/mur3.png'));
    mur.push(loadImage('/assets/mur4.png'));
    mur.push(loadImage('/assets/mur5.png'));
    mur.push(loadImage('/assets/mur6.png'));
    mur.push(loadImage('/assets/mur7.png'));
    mur.push(loadImage('/assets/mur8.png'));
    mur.push(loadImage('/assets/mur9.png'));
    mur.push(loadImage('/assets/mur10.png'));
    mur.push(loadImage('/assets/mur11.png'));
    mur.push(loadImage('/assets/mur12.png'));
    mur.push(loadImage('/assets/mur13.png'));
    mur.push(loadImage('/assets/mur14.png'));
    mur.push(loadImage('/assets/mur15.png'));
    mur.push(loadImage('/assets/mur16.png'));
    mur.push(loadImage('/assets/mur17.png'));
    mur.push(loadImage('/assets/mur18.png'));
    mur.push(loadImage('/assets/mur19.png'));
    mur.push(loadImage('/assets/mur20.png'));
    mur.push(loadImage('/assets/mur21.png'));
    mur.push(loadImage('/assets/mur22.png'));
    mur.push(loadImage('/assets/mur23.png'));
    mur.push(loadImage('/assets/mur24.png'));
    mur.push(loadImage('/assets/mur25.png'));
    mur.push(loadImage('/assets/mur26.png'));
    mur.push(loadImage('/assets/mur27.png'));
    mur.push(loadImage('/assets/mur28.png'));
    mur.push(loadImage('/assets/mur29.png'));
    mur.push(loadImage('/assets/mur30.png'));
    mur.push(loadImage('/assets/mur31.png'));
    mur.push(loadImage('/assets/mur32.png'));
    mur.push(loadImage('/assets/mur33.png'));
    mur.push(loadImage('/assets/mur34.png'));
    mur.push(loadImage('/assets/mur35.png'));
    mur.push(loadImage('/assets/mur36.png'));
    mur.push(loadImage('/assets/mur37.png'));
    mur.push(loadImage('/assets/mur38.png'));
    mur.push(loadImage('/assets/mur39.png'));
    mur.push(loadImage('/assets/mur40.png'));
    mur.push(loadImage('/assets/mur41.png'));
    mur.push(loadImage('/assets/mur42.png'));
    mur.push(loadImage('/assets/mur43.png'));
    mur.push(loadImage('/assets/mur44.png'));
    mur.push(loadImage('/assets/mur45.png'));
    mur.push(loadImage('/assets/mur46.png'));
    mur.push(loadImage('/assets/mur47.png'));
    mur.push(loadImage('/assets/mur48.png'));
    mur.push(loadImage('/assets/mur49.png'));
    mur.push(loadImage('/assets/mur50.png'));
    mur.push(loadImage('/assets/mur51.png'));
    mur.push(loadImage('/assets/mur52.png'));
    mur.push(loadImage('/assets/mur53.png'));
    mur.push(loadImage('/assets/mur54.png'));
    mur.push(loadImage('/assets/mur55.png'));
    mur.push(loadImage('/assets/mur56.png'));
    mur.push(loadImage('/assets/mur57.png'));
    mur.push(loadImage('/assets/mur58.png'));
    mur.push(loadImage('/assets/mur59.png'));
    mur.push(loadImage('/assets/mur60.png'));
    mur.push(loadImage('/assets/mur61.png'));
    mur.push(loadImage('/assets/mur62.png'));
    mur.push(loadImage('/assets/mur63.png'));
    mur.push(loadImage('/assets/mur64.png'));
    mur.push(loadImage('/assets/mur65.png'));
    mur.push(loadImage('/assets/mur66.png'));
    mur.push(loadImage('/assets/mur67.png'));
    mur.push(loadImage('/assets/mur68.png'));
    mur.push(loadImage('/assets/mur69.png'));
    mur.push(loadImage('/assets/mur70.png'));
    mur.push(loadImage('/assets/mur71.png'));
    mur.push(loadImage('/assets/mur72.png'));
    mur.push(loadImage('/assets/mur74.png'));
    mur.push(loadImage('/assets/mur73.png'));

    hob.push(loadImage('/assets/hob1.png')); //Hobbs animation taken from 'https://media.tenor.com/VzqZa6Fpg2oAAAAi/gorillaz-russel-hobbes.gif'
    hob.push(loadImage('/assets/hob2.png'));
    hob.push(loadImage('/assets/hob3.png'));
    hob.push(loadImage('/assets/hob4.png'));
    hob.push(loadImage('/assets/hob5.png'));
    hob.push(loadImage('/assets/hob6.png'));
    hob.push(loadImage('/assets/hob7.png'));
    hob.push(loadImage('/assets/hob8.png'));
    hob.push(loadImage('/assets/hob9.png'));
    hob.push(loadImage('/assets/hob10.png'));
    hob.push(loadImage('/assets/hob11.png'));
    hob.push(loadImage('/assets/hob12.png'));
    hob.push(loadImage('/assets/hob13.png'));
    hob.push(loadImage('/assets/hob14.png'));
    hob.push(loadImage('/assets/hob15.png'));
    hob.push(loadImage('/assets/hob16.png'));
    hob.push(loadImage('/assets/hob17.png'));
    hob.push(loadImage('/assets/hob18.png'));
    hob.push(loadImage('/assets/hob19.png'));
    hob.push(loadImage('/assets/hob20.png'));
    hob.push(loadImage('/assets/hob21.png'));
    hob.push(loadImage('/assets/hob22.png'));
    hob.push(loadImage('/assets/hob23.png'));
    hob.push(loadImage('/assets/hob24.png'));
    hob.push(loadImage('/assets/hob25.png'));
    hob.push(loadImage('/assets/hob26.png'));
    hob.push(loadImage('/assets/hob27.png'));
    hob.push(loadImage('/assets/hob28.png'));
    hob.push(loadImage('/assets/hob29.png'));
    hob.push(loadImage('/assets/hob30.png'));
    hob.push(loadImage('/assets/hob31.png'));
    hob.push(loadImage('/assets/hob32.png'));
    hob.push(loadImage('/assets/hob33.png'));
    hob.push(loadImage('/assets/hob34.png'));
    hob.push(loadImage('/assets/hob35.png'));
    hob.push(loadImage('/assets/hob36.png'));
    hob.push(loadImage('/assets/hob37.png'));
    hob.push(loadImage('/assets/hob38.png'));
    hob.push(loadImage('/assets/hob39.png'));
    hob.push(loadImage('/assets/hob40.png'));
    hob.push(loadImage('/assets/hob41.png'));
    hob.push(loadImage('/assets/hob42.png'));
    hob.push(loadImage('/assets/hob43.png'));
    hob.push(loadImage('/assets/hob44.png'));
    hob.push(loadImage('/assets/hob45.png'));
    hob.push(loadImage('/assets/hob46.png'));
    hob.push(loadImage('/assets/hob47.png'));
    hob.push(loadImage('/assets/hob48.png'));
    hob.push(loadImage('/assets/hob49.png'));
    hob.push(loadImage('/assets/hob50.png'));
    hob.push(loadImage('/assets/hob51.png'));
    hob.push(loadImage('/assets/hob52.png'));
    hob.push(loadImage('/assets/hob53.png'));
    hob.push(loadImage('/assets/hob54.png'));
    hob.push(loadImage('/assets/hob55.png'));
    hob.push(loadImage('/assets/hob56.png'));
    hob.push(loadImage('/assets/hob57.png'));
    hob.push(loadImage('/assets/hob58.png'));

    twod.push(loadImage('/assets/2d1.png')); //2d animation taken from 'https://media.tenor.com/npz_uBxhkBYAAAAi/2d-gorillaz.gif'
    twod.push(loadImage('/assets/2d2.png'));
    twod.push(loadImage('/assets/2d3.png'));
    twod.push(loadImage('/assets/2d4.png'));
    twod.push(loadImage('/assets/2d5.png'));
    twod.push(loadImage('/assets/2d6.png'));
    twod.push(loadImage('/assets/2d7.png'));
    twod.push(loadImage('/assets/2d8.png'));
    twod.push(loadImage('/assets/2d9.png'));
    twod.push(loadImage('/assets/2d10.png'));
    twod.push(loadImage('/assets/2d11.png'));
    twod.push(loadImage('/assets/2d12.png'));
    twod.push(loadImage('/assets/2d13.png'));
    twod.push(loadImage('/assets/2d14.png'));
    twod.push(loadImage('/assets/2d15.png'));
    twod.push(loadImage('/assets/2d16.png'));
    twod.push(loadImage('/assets/2d17.png'));
    twod.push(loadImage('/assets/2d18.png'));
    twod.push(loadImage('/assets/2d19.png'));
    twod.push(loadImage('/assets/2d20.png'));
    twod.push(loadImage('/assets/2d21.png'));
    twod.push(loadImage('/assets/2d22.png'));

    firstRun = false
  }

  frameRate(10);
  
  background(0);

  //port hole = 420*400

  //image(img1, 448, 156)//image notes: reference image is 1024x768 / 2 = 512x384, 1920x1080 / 2 = 960x540

  push();
  scale(0.8);
  image(img4, 615, 100); //fret board
  pop();

  let bas = map(vocal, -10, 110, -3200, 1000);

  push();
  scale(1);
  image(img5, 480, bas / 2); //bass strings
  pop();

  push();
  rect(1020, 600, 420, 400);
  pop();
  
  push();
  fill(0);
  rect(480, 600, 420, 400);
  pop();
  
  let kick = map(bass, 0, 80, 0, 360);

  push();
  scale(0.5);
  imageMode(CENTER);
  translate(800, 2600);
  rotate(kick);
  image(img2, 0, 0);//wheel 1
  pop();

  push();
  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rect(900, 80, 120, 130);
  pop()

  push();
  fill(255);
  rect(1020, 77, 420, 400);
  pop();

  var vox = int(map(other, 0, 100, 0,22));

  push();
  scale(0.8)
  image(twod[vox], 1262, 116)// 2d singing, code borrowed from Phoebe's tutorial "snail sequence" 'https://nuku.wgtn.ac.nz/courses/17233/files/3335656?wrap=1'
  pop();

  var hihat = int(map(drum, 0, 100, 0,7));

  push();
  scale(1.5);
  image(noo[hihat], 360, 425)// noodle spinning, code borrowed from Phoebe's tutorial "snail sequence" 'https://nuku.wgtn.ac.nz/courses/17233/files/3335656?wrap=1'
  pop();

  var snare = int(map(drum, 0, 100, 0,58));

  push();
  scale(1);
  image(hob[snare], 990, 573)// Hobbs drumming, code borrowed from Phoebe's tutorial "snail sequence" 'https://nuku.wgtn.ac.nz/courses/17233/files/3335656?wrap=1'
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
  rect(960, 1290, 120, 2160);//center vertical
  pop()
  
  push()
  fill(1, 24, 37);
  strokeWeight(0);
  stroke(255);
  rectMode(CENTER);
  rect(0, 540, 3840, 120);//center horizontal
  pop();
  
  rect(0, 1000, 1920, 80);//bottom horizontal

  fill(255);
  ellipse(11920, 11080, 10, 10);//reference dot

  if (counter < 450) {
    rect(480, 600, 420, 400);
    rect(1020, 600, 420, 400);
    rect(1020, 77, 420, 400);
    }

  var vox = int(map(other, 0, 100, 0,74));

  if (counter < 430) {
  rect(480, 80, 420, 400);
  }
  
  if (counter < 430) { // murdoch laughing
  push();
  scale(2);
  image(mur[vox], 235, 8)
  pop();
  }  
  
  if (counter < 450) {  
    fill(1, 24, 37);
    strokeWeight(0);
    stroke(255);
    rect(900, 80, 120, 130);
  }






}

