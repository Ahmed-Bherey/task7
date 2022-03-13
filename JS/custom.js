// Swiper in Html
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});


// let moonIcon = document.querySelector(".dark-theme"),
//     skinIcon = document.querySelector("#skin-icon");
// // console.log(moonIcon)
// moonIcon.addEventListener("click", () => {
//     skinIcon.setAttribute("href", "CSS/main -dark.css");
// });

// sunIcon.addEventListener("click", () => {
//     skinIcon.setAttribute("href", "css/main.css");
// });

$(document).ready(function() {
    $(".dark-theme").on("click", function() {
        $("#skin-icon").attr("href", "CSS/main -dark.css");
        localStorage.setItem("dark-theme", "CSS/main -dark.css");
    });
    if (localStorage.getItem("dark-theme")) {
        $("#skin-icon").attr("href", "CSS/main -dark.css");
    }
    $(".light-theme").on("click", function() {
        $("#skin-icon").attr("href", "CSS/main.css");
        localStorage.removeItem("dark-theme", "CSS/main -dark.css");
    });


    $(window).on("scroll", function() {
        // here $(this) => $("html ,body")
        if ($(this).scrollTop() >= 200) {
            $(".go-top").fadeIn();
        } else {
            $(".go-top").fadeOut();
        }
    });
    $(".go-top").on("click", function() {
        $("html ,body").animate({ scrollTop: 0 }, 0);
    });


    $(window).on("scroll", function() {
        if ($(this).scrollTop() >= 200) {
            $(".sticky-navbar").fadeIn();
        } else {
            $(".sticky-navbar").fadeOut();
        }
    })


    $(".linkItem").on("click", function() {
        $(".linkItem").removeClass("active");
        $(this).addClass("active")
    })


    $(".search-icon").on("click", function() {
        $(".searchinput").css("display", "inline-block");
    });


    // $(".btn-serv").on("click", function() {
    //     $(".show-img").fadeToggle("show-item");
    // });

    $(".btn-serv").on("click", function() {
        $(".show-hide").fadeToggle();
        if ($(".show-hide").css("display") == "none") {
            $(".btn-serv").html("Click To Show More");
        } else {
            $(".btn-serv").html("Click To Show Less");
        }
    })

});