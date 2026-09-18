const quotes = [
 { 
  text: "a type of computer programming in which the goal is to create something expressive instead of something functional", 
  source: "Wikipedia" 
 },
 { 
  text: "is a process, based on exploration, iteration, reflection and discovery, where code is used as the primary medium to create a wide range of media artifacts", 
  source: "Tim" 
 },
 { 
  text: "a broad term that describes the process of using code, low-level technology, and computers as artistic and design tools", 
  source: "University of Montana" 
 },
 { 
  text: "a place where experience in the field of design, love of explorative creativity and skills as a programmer come together", 
  source: "Patrik" 
 },
 { 
  text: "the act of writing code for the pure pleasure of it, where the goal is not functional but creative and expressive; where code becomes a medium, just like a canvas for a painter", 
  source: "Alessia" 
 },
 { 
  text: "doing it for the love of the game", source: "Me" 
 },
 { 
  text: "silicon valley nerd stuff", source: "me" 
 },
];

let current;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pickQuote();
}

function pickQuote() {
  current = random(quotes);
}

function draw() {
  background(255, 20, 250);

  fill(10, 255, 10);
  textAlign(CENTER, CENTER);

  // Heading
  textSize(22);
  textStyle(NORMAL);
  text(
    "Creative Coding is...",
    width / 2,
    height * 0.28
  );

  // Main definition
  textSize(34);
  textStyle(BOLD);

  text(
    "“" + current.text + "”",
    width * 0.15,
    height * 0.35,
    width * 0.70,
    height * 0.30
  );

  // Source
  textSize(18);
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);

  text(
    "- " + current.source,
    width / 2,
    height * 0.72
  );

  // Small instruction
  textSize(14);

  text(
    "click anywhere for another definition",
    width / 2,
    height * 0.88
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  pickQuote();
}

