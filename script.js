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
    { name: "The Fool",           description: ".", image: "" },
    { name: "The Magician",       description: ".", image: "" },
    { name: "The High Priestess", description: ".", image: "" },
    { name: "The Empress",        description: "s.", image: "" },
    { name: "The Lovers",         description: ".", image: "" },
    { name: "The Star",           description: ".", image: "" },
    { name: "The Moon",           description: ".", image: "" },
    { name: "The Sun",            description: ".", image: "" }
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
