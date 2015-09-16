Rectangle = function(x, y, w, h) {
  if (x == null || y == null || w == null || h == null) {
    var errorMsg = 'Rectangulo mal definido';
    alert(errorMsg);
    throw new Error(errorMsg);
  }

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.contains = function(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
  }



};
