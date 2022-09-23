const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

// $(".hover").mouseleave(function () {
//   $(this).removeClass("hover");
// });

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

//  waypoints

$(function () {
  function onScrollInit(items, trigger) {
    items.each(function () {
      var element = $(this),
        animationClass = element.attr("data-animation"),
        animationDelay = element.attr("data-animation-delay");

      element.css({
        "-webkit-animation-delay": animationDelay,
        "-moz-animation-delay": animationDelay,
        "animation-delay": animationDelay,
      });

      var Trigger = trigger ? trigger : element;

      Trigger.waypoint(
        function () {
          element.addClass("animated").addClass(animationClass);
        },
        {
          triggerOnce: true,
          offset: "90%",
        }
      );
    });
  }

  onScrollInit($(".animation"));
  onScrollInit($(".animation"), $(".animation-container"));
});

//  about
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});
