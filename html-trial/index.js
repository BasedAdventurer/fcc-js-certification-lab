const rect = document.getElementById("rect");

let position = 0;

function update() {
    // Move the rectangle 2px to the right
    rect.style.left = position + "px";
    position += 2;

    if (position > window.innerWidth) {
        // Move the rectangle just outside the left side of the screen
        position = -rect.offsetWidth;
    }
}

function animate() {
    update();

    // request the next frame
    requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);
