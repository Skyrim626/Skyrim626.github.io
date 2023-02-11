/* var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
}); */

/*Navigation Bar Scroll Event */
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

/* Change   Image in 3 seconds */
/* function changeProject1() {
    var img = document.getElementById("project1Image");
    var images = [
        'img/header.jpg',
        'img/atmProjectImage.jpg',
        'img/wallpaperMain.jpg'
    ];
    var curIndex = 0;

    setInterval(function() {
        curIndex = (curIndex + 1) % images.length;
        img.style.opacity = 0;

        setTimeout(function() {
            img.src = images[curIndex];
            img.style.opacity = 1;

        }, 1000);

    }, 5000);
    

} */