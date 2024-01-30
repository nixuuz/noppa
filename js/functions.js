const dice = document.querySelector("#dice");
const images = [
"./kuvat/1.png",
"./kuvat/2.png",
"./kuvat/3.png",
"./kuvat/4.png",
"./kuvat/5.png",
"./kuvat/6.png",
];

dice.addEventListener("click", function() {
    const randomindex = Math.floor(Math.random() * images.length);
    const randomimage = images[randomindex];
    const img = document.querySelector("#dice img");
    img.src = randomimage;
});