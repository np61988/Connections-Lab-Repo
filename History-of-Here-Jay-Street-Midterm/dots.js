class Dot {  
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = color; 
  }

  show() {
  noStroke();
  fill(this.color);
  ellipse(this.x, this.y, this.radius);

  } 
}