let b1;
let balletjes = [];
let ab = [4]
let status = "spelen"
class Ball{
	constructor(x, y, r, k, xs, ys){
  	this.xPos = x;
    this.yPos = y;
    this.straal = r;
    this.color = k;
    this.xSpeed = xs;
    this.ySpeed = ys;

   }

  teken () {
	fill(this.color);
  ellipse (this.xPos, this.yPos, this.straal*2, this.straal*2)

	}


  bots () {

  	let afstand = dist(this.xPos, this.yPos, b1.xPos, b1.yPos)
    if (afstand < (this.straal + b1.straal)){
			this.ySpeed = -this.ySpeed;
      this.xSpeed = -this.xSpeed;
      status = "af"
    }
    for (var i = 0; i < balletjes.length; i++){
   		if (balletjes[i] != this){
        let afstandPlayer = dist(this.xPos, this.yPos,   balletjes[i].xPos, balletjes[i].yPos)
        if (afstandPlayer < this.straal + balletjes[i].straal){
          this.ySpeed = -this.ySpeed;
          this.xSpeed = -this.xSpeed;

        }
      }
    }
  }

      move(){
      if (keyIsDown(UP_ARROW)){
        this.yPos -= this.ySpeed;
      } else if (keyIsDown(DOWN_ARROW)){
        this.yPos += this.ySpeed;
      } else if (keyIsDown(LEFT_ARROW)){
        this.xPos -= this.xSpeed;
      } else if (keyIsDown(RIGHT_ARROW)){
        this.xPos += this.xSpeed;
      }
  }
	update (){
    if (this.xPos > width - this.straal || this.xPos < this.straal){
      this.xSpeed = -this.xSpeed;
    }
    if (this.yPos > height - this.straal || this.yPos < this.straal){
      this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }

}

function keyPressed(){
  if(keyCode === ENTER){
    status = "spelen"
    b1 = new Ball(200, 20, 20, "yellow", 10, 10);
  }
}

function setup() {
  createCanvas(400, 400);

  b1 = new Ball(200, 20, 20, "yellow", 10, 10);

  for(let i = 0; i < ab; i++){
		let b = new Ball(random(20,100), random(20,100), 10, color(random(255),random(255),random(255)), random(1,5),random(1,5));
  	balletjes.push(b);
  }
}

function draw(){
  background(220);



  if (status == "spelen") {
    for (var i = 0; i < balletjes.length; i++){
      text("ONTWIJK DE BALLETJES!", 130, 20)
      bal = balletjes[i];
      bal.teken();
      bal.update();
      bal.bots();
    }
    b1.teken();
    b1.move();
  } else if (status == "af") {
    fill(255,0,0)
    text("Druk op enter om het nog een keer te proberen", 60, 200)
  }
}
