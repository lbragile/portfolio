var nav_menu = $(".fa-bars"); // hamburger menu
var nav_exit = $(".fa-times"); // 'x' mark to exit menu
var nav_options = nav_exit.next();
var up_arrow = $(".fa-arrow-up").next();
var banner_image = $(".banner-img");
var banner_text = $(".banner-text");
var text_area = $("textarea");

var main_sections = [".about", ".projects", ".contact"];

const nav_menu_border = nav_menu.css("border");

// document will be ready if Javascript is placed at end of body
banner_text.fadeIn(2000, "linear");

// make sections viewable (appear) only when scrolled to
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("scroll", function () {
  main_sections.forEach((item, index) => {
    if ($(item).isInViewport() && index != main_sections.length - 1) {
      $(item).find(":not(h1)").fadeIn(2000);
    }
    // don't do this for the form
    else if (index == main_sections.length - 1) {
      $(item).find(":not(h1)").show();
    }
  });
});

// toggle the menu if the user clicks on the menu/exit 'buttons'
nav_menu.add(nav_exit).on("click", function () {
  if (nav_options.css("display") == "none") {
    nav_menu.css("display", "none");
    nav_exit.css("visibility", "visible");
    nav_options.show(400);
  } else {
    nav_options.hide(400);
    nav_exit.css("visibility", "hidden");
    nav_menu.show();
  }
});

$.fn.scrollToThis = function (speed) {
  $("html, body").animate(
    {
      scrollTop: $(this).offset().top,
    },
    speed
  );
};

main_sections.forEach((item, index) => {
  nav_options
    .first()
    .children()
    .eq(index)
    .on("click", function () {
      $(item).scrollToThis(1000);
    });
});

// arrow effects
up_arrow.on("mouseenter", function () {
  $(this).prev().animate({ height: "+=10px" }, 400);
});

up_arrow.on("mouseleave", function () {
  $(this).prev().animate({ height: "-=10px" }, 400);
});

up_arrow.on("click", function () {
  banner_image.scrollToThis(2000);
});
