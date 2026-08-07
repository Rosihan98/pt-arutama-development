const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}