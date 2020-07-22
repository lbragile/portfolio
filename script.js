var nav_menu = $(".fa-bars");
var nav_options = nav_menu.next();
var up_arrow = $(".fa-arrow-up").next();
var banner_image = $(".banner-img");
var banner_text = $(".banner-text");
var text_area = $("textarea");
var form_buttons = $(".form-buttons");

var main_sections = [".about", ".projects", ".contact"];

const nav_menu_border = nav_menu.css("border");

// document will be ready if Javascript is placed at end of body
banner_text.fadeIn(2000, "linear");

// clear the text area to show the placeholder text
text_area.val("");

// attempt at making sections viewable (appear) when scrolled to
// $.fn.isInViewport = function () {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();
//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();
//   return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// $(window).on("scroll", function () {
//   main_sections.forEach((item) => {
//     if ($(item).isInViewport()) {
//       $(item).children().show(2000);
//     }
//   });
// });

form_buttons.on("click", function () {
  text_area.val("");
});

nav_menu.on("click", function () {
  if (nav_options.css("display") == "none") {
    nav_options.show(400);
    nav_menu.css("border", "none");
  } else {
    nav_options.hide(400);
    nav_menu.css("border", nav_menu_border);
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
