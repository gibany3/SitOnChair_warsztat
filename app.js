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

    var boxes = document.querySelectorAll(".allbox .box");

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function(event) {
            var fChild = this.firstElementChild;
            if (fChild.className.indexOf('bgTitleBox') >= 0) {
                fChild.style.display = "none";
            };
        });
        boxes[i].addEventListener("mouseout", function(event) {
            var fChild = this.firstElementChild;
            if (fChild.className.indexOf('bgTitleBox') >= 0) {
                fChild.style.display = "block";
            }
        });
    };






});
