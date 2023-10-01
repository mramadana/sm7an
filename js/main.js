$(document).ready(function () {
    "use strict";
    var isRtl = $("html[lang='ar']").length > 0;
    $(".btn-nav-lang").click(function (e) {
        e.stopPropagation();
        $(".drop-lang").removeClass("show");
        $(this).find(".drop-lang").addClass("show");
    });

    /* ======================= drop-down-lang =============================*/
    $(document).click(function () {
        $(".drop-lang").removeClass("show");
    });
    // ========================= hover-links ==================================
    $(".head-link .inner .left .links a").hover(function () {
        $(".head-link .inner .left .links a").removeClass('active');
        $(this).addClass('active')
    });
    // ====================== main slider ======================================
    $(".main-slider").owlCarousel({
        items: 1,
        loop: true,
        rtl: isRtl,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplayHoverPause: false,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });
    console.log(isRtl);

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 5000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }

    // slider >>> payments
    $('.payment-slider').owlCarousel({
        loop: false,
        rtl: isRtl,
        margin: 10,
        nav: false,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplay: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            600: {
                items: 3,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            1000: {
                items: 4
            }
        }
    });


    /*===================== slider-category =========================*/

    $('.slider-category').owlCarousel({
        loop: true,
        margin: 10,
        rtl: isRtl,
        autoplay: false,
        dots: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
                dots: false,
                autoplay: true,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 2000,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    /*===================== products-slide =========================*/

    $('.products-slide').owlCarousel({
        loop: true,
        margin: 10,
        rtl: isRtl,
        autoplay: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 2000,
            },
            600: {
                items: 3,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            1000: {
                items: 4
            }
        }
    });

    // slider >>> shopping
    $('.brand-slider').owlCarousel({
        loop: false,
        rtl: isRtl,
        margin: 10,
        nav: false,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplay: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },

            375: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },

            425: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            600: {
                items: 3,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            1024: {
                items: 4
            },
            1025: {
                items: 5
            }
        }
    });

    /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
    $(".nav-btn").click(function () {
        $(".side-bar-content").addClass('active');
    });

    $(".service-box .close-nav").click(function () {
        $(this).parents('.side-bar-content').removeClass('active')
    });

    $(".side-bar-content .mobil-nav li a").click(function (e) {
        e.preventDefault();
        $(this).next('.menu-ul').addClass('active')
    });

    $(".side-bar-content .mobil-nav li .back").click(function (e) {
        e.preventDefault();
        $(this).parents('ul').removeClass('active');
    });

    /*============= toggle-class-open in responsive-sc when i click it =========================*/
    $(".responsive-search-btn").click(function (e) {
        $(".search-container").addClass('active');
    });

    $(".search-container .close-search").click(function (e) {
        $(".search-container").removeClass('active')
    });

    $(".btn-section .btn-det").hover(function () {
        $(".btn-section .btn-det").removeClass('active');
        $(this).addClass('active');
    });


    /*====================== responsive-footer-links-collapse=======================*/
    if ($(window).width() <= 768) {
        $(".footer .foot-title").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).siblings(".links").stop().slideUp();
            } else {
                $(".footer .foot-title").removeClass('active')
                $(".footer .links").stop().slideUp();
                $(this).addClass('active')
                $(this).siblings(".links").stop().slideDown();
            }
        });
    };

    $(".bottom-nav a").click(function () {
        $(".bottom-nav a").removeClass('active');
        $(this).addClass('active')
    });
    // when i click on cart ==========================================
    $(".cart-over-lay").click(function () {
        $(".over-lay-cart").addClass('active')
    })
    $(".close-cart").click(function () {
        $(".over-lay-cart").removeClass('active')
    });



    $(".header-nav .user").click(function (e) {
        e.preventDefault();
    });

    /*=================== when click btn-ad-cart- open-modal ===========================*/
    $(".ad-cart").click(function (e) {
        e.preventDefault();
        setTimeout(function () {
            $("#cart_success").modal("show");
        }, 500);
    });

    $(".sign-link").click(function () {
        $(".modal-login").fadeIn(100, function () {
            $(".box-form").addClass('show');
        })
    });


    $(".modal-login .close-form, .modal-login-2 .close-form").click(function (e) {
        e.preventDefault();
        $(".modal-login, .modal-login-2").fadeOut(500, function () {
            $(".box-form").removeClass('show');
        })
    });


    $(".Register-link").click(function () {
        $(".modal-login-2").fadeIn(100, function () {
            $(".box-form").addClass('show');
        })
    });

    $('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function () {
        $('#qty_input').val(parseInt($('#qty_input').val()) + 1);
    });
    $('#minus-btn').click(function () {
        $('#qty_input').val(parseInt($('#qty_input').val()) - 1);
        if ($('#qty_input').val() == 0) {
            $('#qty_input').val(1);
        }
    });

    $(".dark-mode").click(function () {
        $(this).toggleClass('active');
        $("body").toggleClass('dark-theme');
        if ($(this).hasClass('active')) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
        console.log(localStorage.mode)
    });

    /*============= if ================*/
    if (localStorage.mode == "dark") {
        $("body").addClass('dark-theme');
        $(".dark-mode").addClass('active')
    };
});
    $(window).on('load', function () {
        setTimeout(function () {
            $(".loader-container").fadeOut();
            $("body").css("overflow", "auto");
            $(".loader-container").hide()
        }, 3000)
    })

$(".btn").click(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1?fbclid=IwAR2qSjRNEyFxdkN5iN0IcZl1g8Vo351Y5NBmXgPNXHSZ55qYl9Rx0VLSM-g",
        data: {name: 'mohamed'},
        success: function(r) {
            console.log(r)
            $('.payments').append(`
                <div class="product">
                    <p class="complete">
                        complete:${r.completed ? 'yes' : "no"}
                    </p>
                    <p class="title">
                        ${r.title}
                    </p>
                </div>
            `)
        },
      });
})