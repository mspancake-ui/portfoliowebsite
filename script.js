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


function card (name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;



    var deck = [
        new card('Temperance', 'card details', 'photo name'),
        new card 


];


    function getRandom(num){
        var randomNumber = Math.floor(Math.random() * num);
        return randomNumber;
            
            }

    document.getElementById("draw").onclick
    = function(){
        var index = getRandom(8);
        var currentCard = deck[index];



        document.getElementById("display").innerHTML = '<img src="images/' +
            currentCard.image + '.jpg"><h3>'
        currentCard.name + '</h3><p>' + 
            currentCard.description + '</p>';
    };

