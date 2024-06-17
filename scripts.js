$(document).ready(function () {
  setScript();

  $(window).resize(function () {
    setScript();
  });

  function setScript() {
    if ($(window).outerWidth(true) >= 1024) {
      // PC
      pcScript();
    } else {
      // Mobile
      mobileScript();
    }
  }

  function pcScript() {
    $(".menu").removeClass("on");
    $(".menu>ul>li")
      .off("mouseenter mouseleave")
      .on("mouseenter", function () {
        $(this).addClass("on");
      })
      .on("mouseleave", function () {
        $(this).removeClass("on");
      });
  }

  function mobileScript() {
    $(".menu").removeClass("on");
    $("#menuOpen, #menuClose")
      .off("click")
      .on("click", function () {
        $(".menu").toggleClass("on");
      });

    $(".menu>ul>li")
      .off("click")
      .on("click", function () {
        if ($(this).hasClass("on")) {
          $(this).removeClass("on");
        } else {
          $(".menu>ul>li").removeClass("on");
          $(this).addClass("on");
        }
      });
  }

  $(".language button").click(function () {
    $(".language").toggleClass("on");
  });

  $(".tsns button").click(function () {
    $(".tsns").toggleClass("on");
  });

  $(".search button").click(function () {
    $(".search").toggleClass("on");
  });
});
