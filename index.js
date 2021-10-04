//index.js



document.addEventListener("DOMContentLoaded", function() {

    var imageArray = [
        "https://external-preview.redd.it/6tUWru2FCykc9l8dyAT1gKp2XMywYi8of5g3u2B7jLI.jpg?auto=webp&s=10fe062a45d138a8ee4ed3d40675508210e0a8dc",
        "http://www.classic-castle.com/moc/articles/images/cb100working.jpg",
        "https://lh5.googleusercontent.com/-izAYG72F_eE/Tk5ZWCUyJHI/AAAAAAAABQw/POUr3PKPmBo/s512/IMGP8894.JPG",
        "https://file.bricklink.info/19/1158/1158302.F04967E85C795551.png",
        "https://i.pinimg.com/originals/49/d5/3a/49d53a3760a7af7da610f8a09a31a2cf.jpg",
        "https://live.staticflickr.com/65535/51110148187_89f658e613_b.jpg"
    ];

    var imageArrayIndex = 0 // Creates a variable image index

    var imgCarousel = document.querySelector("#imgCarousel");

    var leftButton = document.querySelector("#leftButton");
    var rightButton = document.querySelector("#rightButton");

    imgCarousel.src = imageArray[imageArrayIndex];

    rightButton.addEventListener('click', function(){
        if (imageArrayIndex < imageArray.length - 1) {
            imageArrayIndex++; // Increments the index
            imgCarousel.src = imageArray[imageArrayIndex]; // changes src to next index 
        }
        else {
            imageArrayIndex = 0;
            imgCarousel.src = imageArray[imageArrayIndex];
            //Will not show image at index 0 but will not error out either
        }
    })

    leftButton.addEventListener('click', function(){
        if (imageArrayIndex > 0) {
            imageArrayIndex--; // Increments the index
            imgCarousel.src = imageArray[imageArrayIndex]; // changes src to next index 
        }
        else {
            imageArrayIndex = imageArray.length -1;
            imgCarousel.src = imageArray[imageArrayIndex];
            //Will not show image at index 0 but will not error out either
        }
    })

})
