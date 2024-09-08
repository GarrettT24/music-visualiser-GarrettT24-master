let firstRun = true
let img;
let img2;
// background(0)

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // rectMode(CENTER)
  if (firstRun) { //images
    img = loadImage('/assets/wheel1.png'); //mugshots picture
    // img2 = loadImage('/assets/2D.jpg'); //2D picture
    firstRun = false
  }
  if (drum > 0) {
  image(img, 0, 0, 1024, 768)
  }
  let hihat = map(vocal, 0, 100, 0, 10)

// if (vocal > 8) {
// image(img2, 0, 0)
// }
// if (hihat > 6) {
// strokeWeight(0)
// fill(1,25,37)
//   rect(0, 0, 1024, 50);
// } else {
//   strokeWeight(0)
//   rect(0, 50, 1024, 50);
// }

// if (hihat > 6) {
//   rect(0, 50, 1024, 50)
//   }
}







  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);
  
  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
