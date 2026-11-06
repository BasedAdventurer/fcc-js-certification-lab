const imgGallery = [
    {
        id: 1,
        image: "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg",
        thumbnail: "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg"
    },
    {
        id: 2,
        image: "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg",
        thumbnail: "https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg"
    },
    {
        id: 3,
        image: "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg",
        thumbnail: "https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg"
    }
];

const gallery = document.querySelector(".gallery");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach((galleryItem, index) => {
    galleryItem.addEventListener("click", () => {
        console.log(`gallery Item dengan index ${index} diklik`);

        lightbox.hidden = false;
        lightbox.style.display = "flex";
        lightboxImg.src = imgGallery[index].image;
    })
});

closeBtn.addEventListener("click", () => {
    lightbox.hidden = true;
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightbox.querySelector("img")) {
        lightbox.hidden = true;
    }
});
