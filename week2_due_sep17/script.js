
const quotes = [
 { text: "a type of computer programming in which the goal is to create something expressive instead of something functional", source: "Wikipedia" },
 { text: "is a process, based on exploration, iteration, reflection and discovery, where code is used as the primary medium to create a wide range of media artifacts", source: "Tim" },
 { text: "a broad term that describes the process of using code, low-level technology, and computers as artistic and design tools", source: "University of Montana" },
 { text: "a place where experience in the field of design, love of explorative creativity and skills as a programmer come together", source: "Patrik" },
 { text: "the act of writing code for the pure pleasure of it, where the goal is not functional but creative and expressive; where code becomes a medium, just like a canvas for a painter", source: "Alessia" },
 { text: "doing it for the love of the game", source: "Me" },
 { text: "silicon valley nerd stuff", source: "me" },
];
// no need to edit anything below this line!
// if you have made an error, you can check your history to see what might have gone wrong


// a variable tht holds the current quote
let current = [];


function setup() {
 createCanvas(windowWidth, windowHeight);
 randomSeed(millis());
 pickQuote(); // calls the function to pick a quote
}


function pickQuote() {
 // take a random number and use that to identify what quote to use
 current = quotes[floor(quotes.length)];
}


function draw() {
 background(255, 20, 250);
 drawQuote(); // draw the quote on screen
}


function drawQuote() {
 // draw text
 fill(10, 255, 10);
 textAlign(CENTER, CENTER);
 text("Creative Coding is.....", width / 2, height / 2 - 48);
 textSize(32);
 textStyle(BOLD);
 text("“" + current.text + "”", width / 2, height / 2);
 textAlign(RIGHT, CENTER);
 text("-" + current.source, width - 100, height - 100);
}


function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}


function newQuote() {
 pickQuote();
 redraw();
}


function mousePressed() {
 newQuote();
}
