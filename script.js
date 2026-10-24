console.log("RAINBOW TRAIL IS WORKING!");

let lastX = 0;
let lastY = 0;

// How far the mouse must move before creating another sparkle
const sparkleDistance = 35;

document.addEventListener("mousemove", function(event) {

    const x = event.clientX;
    const y = event.clientY;

    // Calculate distance from the previous sparkle
    const distance = Math.sqrt(
        (x - lastX) ** 2 +
        (y - lastY) ** 2
    );

    // Don't create a sparkle until the mouse has moved far enough
    if (distance < sparkleDistance) {
        return;
    }

    // Remember this position
    lastX = x;
    lastY = y;

    // Create sparkle
    const sparkle = document.createElement("div");

    sparkle.classList.add("rainbow-sparkle");

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    // Rainbow colors
    const colors = [
        "#ff9ecf",
        "#ffb7a5",
        "#ffe58f",
        "#b8e6b8",
        "#9fd8ff",
        "#c8b6ff"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    sparkle.style.backgroundColor = randomColor;

    sparkle.style.filter = `
        drop-shadow(0 0 4px ${randomColor})
        drop-shadow(0 0 8px ${randomColor})
    `;

    document.body.appendChild(sparkle);

    // Remove after animation
    sparkle.addEventListener("animationend", function() {
        sparkle.remove();
    });

});






const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// ==========================================
// TAROT
// ==========================================

const deck = [
    { name: "The Fool",           description: "The Fool card is numbered 0, which is considered to be a number of infinite potential. Consider him a blank slate, for The Fool has yet to develop a clear personality. He is the symbol of innocence - his journey to come will shape his character yet.", image: "thefool.png" },
    { name: "The Magician",       description: "The Magician is the representation of pure willpower. With the power of the elements and the suits, he takes the potential innate in the fool and molds it into being with the power of desire.", image: "magician.png" },
    { name: "The High Priestess", description: "The High Priestess is related with inner knowledge. Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind.", image: "priest.png" },
    { name: "The Empress",        description: "The Empress represents abundance, creativity, and nurturing growth. It signals a fruitful time for bringing new ideas into a physical reality.", image: "empress.png" },
    { name: "The Lovers",         description: "One meaning behind the lovers card is the concept of choice - a choice between things that are opposing and mutually exclusive. This could be a dilemma that you need to think about carefully and make the best decision for your situation.", image: "thelovers.png" },
    { name: "The Star",           description: "The Star brings hope, renewed power, and strength to carry on with life. It shows how abundantly blessed you are by the universe as evidenced by the various things around you.", image: "Pink Border Image(1).png" },
    { name: "The Moon",           description: "On one hand, the Moon card can symbolize your imagination is taking the best of you. In the dark of the night, you are taking a path that you are unsure of, for there could be danger lurking in its depths.", image: "themoon.png" },
    { name: "The Sun",            description: "The Sun card represents success, abundance, and radiance. Like the sun itself, it gives strength and vitality to all those that are lucky enough to feel its rays. There is much joy and happiness that is coming to you.", image: "thesun.png" }
];

const tarotCard = document.getElementById("tarot-card");
const drawButton = document.getElementById("draw");
const cardImage = document.getElementById("card-image");
const cardName = document.getElementById("card-name");
const cardDesc = document.getElementById("card-desc");

const FLIP_TIME = 800;
let lastIndex = -1;
let busy = false;

function drawCard() {
  
    let index;
    do {
        index = Math.floor(Math.random() * deck.length);
    } while (index === lastIndex);
    lastIndex = index;

    const picked = deck[index];

   
    cardImage.src = picked.image;
    cardImage.alt = picked.name;
    cardName.textContent = picked.name;
    cardDesc.textContent = picked.description;

    tarotCard.classList.add("is-flipped");
    drawButton.textContent = "Draw again ♡";

    setTimeout(() => { busy = false; }, FLIP_TIME);
}

drawButton.addEventListener("click", function () {
    if (busy) return;       
    busy = true;

    if (tarotCard.classList.contains("is-flipped")) {
        
        tarotCard.classList.remove("is-flipped");
        setTimeout(drawCard, FLIP_TIME);
    } else {
        drawCard();
    }
});
