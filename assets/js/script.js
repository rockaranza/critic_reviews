const reviews = [
  {
    autor: "James Berardinelli",
    critic: "Willy Wonka and the Chocolate Factory, like many childhood favorites, is better left in the past and allowed to reside in memories. As an adaptation of Dahl's story, it's inferior to the Burton remake.",
    img: "./assets/img/James Berardinelli.webp",
  },
  {
    autor: "Roger Ebert",
    critic: "Probably the best film of its sort since The Wizard of Oz. It is everything that family movies usually claim to be, but aren't: Delightful, funny, scary, exciting, and, most of all, a genuine work of imagination.",
    img: "./assets/img/Roger Ebert.webp",
  },
  {
    autor: "Joe Lipsett",
    critic: "A timeless classic with an all-time performance from Gene Wilder. This film is a marvel: weird, occasionally terrifying and visually wonderful.That chocolate lake looks disgusting, though.",
    img: "./assets/img/Joe Lipsett.webp",
  },
  {
    autor: "Betsy Bozdech",
    critic: "Director Mel Stuart [doesn't] shy away from bringing Dahl's unique, slightly twisted vision to the screen intact.",
    img: "./assets/img/Betsy Bozdech.webp",
  },
  {
    autor: "Steven D. Greydanus",
    critic: "Aspires to the whimsy and fantasy of The Wizard of Oz but doesn't really capture the magic… more a fond tribute to 'pure imagination' than a triumph of it.",
    img: "./assets/img/Steven D Greydanus.webp",
  },
  {
    autor: "Emanuel Levy",
    critic: "Starring Gene Wilder, this offbeat comedy-fantasy for children has achieved a status in pop culture",
    img: "./assets/img/Emanuel Levy.webp",
  },
  {
    autor: "Sean Axmaker",
    critic: "... that rare breed: an imaginative live-action kid's film that engages and delights adults.",
    img: "./assets/img/Sean Axmaker.webp",
  },
]

// Controls
const backwardBtn = document.getElementById('backward');
const forwardBtn = document.getElementById('forward');
const randomBtn = document.getElementById('random');

// Reviews
const imgCritic = document.getElementById('imgCritic');
const nameCritic = document.getElementById('nameCritic');
const review = document.getElementById('review');

let position = 0;

function increase() {
  position += 1;
  if(position == reviews.length) {
    position = 0;
  }
  console.log(reviews[position]);
  console.log(position);
  imgCritic.src = reviews[position].img;
  nameCritic.textContent = reviews[position].autor;
  review.textContent = `"${reviews[position].critic}"`;
}

function decrease() {
  position -=1;
  if(position == -1) {
    position = 6;
  }
  console.log(reviews[position]);
  console.log(position);
  imgCritic.src = reviews[position].img;
  nameCritic.textContent = reviews[position].autor;
  review.textContent = `"${reviews[position].critic}"`;
}

function random() {

}

forwardBtn.addEventListener('click', increase);
backwardBtn.addEventListener('click', decrease);