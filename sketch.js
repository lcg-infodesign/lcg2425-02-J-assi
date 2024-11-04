function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0); 
  noLoop();
}

function draw() {
  // Define colors
  let colors = ["#ffffff", "#ff0066", "#888888"]; // White, pink, gray
  
let w = (windowWidth + windowHeight)/6.8;
if(windowWidth / windowHeight < 1){
  w = (windowWidth + windowHeight)/15;}
else {
  w = (windowWidth + windowHeight)/8;
  }

  for (let i = 0; i < w; i++) { // Densità di ripartizione
    let x = random(width);
    let y = random(height);
    let glifi = int(random(5));
    let color = random(colors);
    
    fill(color);
    stroke(color);
    
    switch (glifi) {
      case 1: // Triangoli
        let size = random(20, 45);
        if (random(1) > 0.5) {
          noFill();
        }
        triangle(x, y, x + size, y, x + size / 2, y - size);
        
        fill(color); 
        
      case 2: // Cerchio
        let raggio = random(5, 25);
        ellipse(x, y, raggio);
        break;
      case 3: // Linea ondulata
        strokeWeight(2);
        let lunghezza = random(10, 25);
        if (random(1) > 0.5) {
          line(x, y, x + lunghezza, y); // Orizz.
        } else {
          line(x, y, x, y + lunghezza); // Vert
        }
        break;
        
        case 4:
          noFill();
      beginShape();
      //(x + cos(j * 0.3) * 8, y + j * 3);
      // Lunghezza casuale della linea ondulata
      let p = random(40, 80); 
      
      // Creazione angolo per inclinare la linea (PI/2 verticale, PI/4 obliquo 45°)
      let a = random([PI / 2, PI / 4, 0]); // Alterna casualmente tra verticale e obliquo 
      
      for (let j = 0; j < p; j++) {
        // Definisce la forma della linea ondulata (lunghezza, ampiezza dei saltelli, numero saltelli, altezza dei saltezzi)
        let offsetX = cos(a) * j * 1.5 + cos(j * 0.4) * 3;
        let offsetY = sin(a) * j * 1 + sin(j * 0.4) * 3;
        
        // Disegna la linea ondulata con l'angolo specificato
        vertex(x + offsetX, y + offsetY);
      } 
      endShape();
      break;
      }
    }
  }
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight); 
    background(0); // Ripristina il bg
    redraw(); // Ridisegna il tutto il contenuto
  }