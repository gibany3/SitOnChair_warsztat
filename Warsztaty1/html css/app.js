document.addEventListener("DOMContentLoaded", function() {

    //menu rozwijane
    var liVisible = document.querySelectorAll(".nav > li");

    for (var i = 0; i < liVisible.length; i++) {

        liVisible[i].addEventListener("mouseover", function(event) {
            if (this.children.length > 0) {
                var liShow = this.children[0];
                liShow.style.display = "block";
            };
        });

        liVisible[i].addEventListener("mouseout", function(event) {
            if (this.children.length > 0) {
                var liHidden = this.children[0];
                liHidden.style.display = "none";
            };
        });
    };

    //slider
    var prevButton = document.getElementById("prevPicture");
    var nextButton = document.getElementById("nextPicture");
    var pictures = document.querySelectorAll(".slider li");
    var currentVisiblePicture = 0;

    pictures[currentVisiblePicture].classList.add("visible");

    prevButton.addEventListener("click", function(event) {
        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture--;
        if (currentVisiblePicture < 0) {
            currentVisiblePicture = pictures.length - 1;
        }
        pictures[currentVisiblePicture].classList.add("visible");
    });
    nextButton.addEventListener("click", function(event) {
        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture++;
        if (currentVisiblePicture > (pictures.length - 1)) {
            currentVisiblePicture = 0;
        }
        pictures[currentVisiblePicture].classList.add("visible");
    });

    //obrazki hover
    var image1 = document.querySelector(".foto1");
    var image2 = document.querySelector(".foto2");
    var text1 = document.querySelector(".foto1 div")
    var text2 = document.querySelector(".foto2 div")

    image1.addEventListener("mouseover", function(event) {
        text1.style.display = "none";
    });
    image1.addEventListener("mouseout", function(event) {
        text1.style.display = "block";
    });

    image2.addEventListener("mouseover", function(event) {
        text2.style.display = "none";
    });

    image2.addEventListener("mouseout", function(event) {
        text2.style.display = "block";
    });





});
