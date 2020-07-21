var nav_menu = $(".fa-bars");
var nav_options = nav_menu.next();
var up_arrow = $(".fa-arrow-up").next();
var banner_image = $(".banner-img");
var text_area = $("textarea");
var form_buttons = $(".form-buttons");

var main_sections = [".about", ".projects", ".contact"];

const nav_menu_border = nav_menu.css("border");

nav_menu.show();
nav_options.hide();

// clear the text area to show the placeholder text
text_area.val("");

form_buttons.on("click", function () {
  text_area.val("");
});

nav_menu.on("click", function () {
  if (nav_options.is(":hidden")) {
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
