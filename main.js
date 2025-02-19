const image1 = document.getElementById("#image1")


image1.addEventListener("mouseenter", function () {
    gsap.to("#image1", {
        scale: 1
    })
})