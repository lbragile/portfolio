var nav_menu = $(".fa-bars"); // hamburger menu
var nav_exit = $(".fa-times"); // 'x' mark to exit menu
var nav_options = nav_exit.next();
var up_arrow = $(".fa-arrow-up").next();
var banner_image = $(".banner-img");
var banner_text = $(".banner-text");
var text_area = $("textarea");

var main_sections = [".about", ".projects", ".contact"];

const nav_menu_border = nav_menu.css("border");

var regular_speed = 2000; // 2 seconds

// document will be ready if Javascript is placed at end of body
banner_text.fadeIn(regular_speed, "linear");

// make sections viewable (appear) only when scrolled to
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

// scroll to an element
$.fn.scrollToThis = function (speed) {
  $("html, body").animate(
    {
      scrollTop: $(this).offset().top,
    },
    speed
  );
};

function hideNavigationOptions() {
  nav_options.hide(regular_speed / 4);
  nav_exit.css("visibility", "hidden");
  nav_menu.show();
}

$(window).on("scroll", function () {
  main_sections.forEach((item, index) => {
    if ($(item).isInViewport() && index != main_sections.length - 1) {
      $(item).find(":not(h1)").fadeIn(regular_speed);
    }
    // don't do this for the form
    else if (index == main_sections.length - 1) {
      $(item).find(":not(h1)").show();
    }
  });

  // if user scrolls with the navigation menu open, it should close
  hideNavigationOptions();
});

// toggle the menu if the user clicks on the menu/exit 'buttons'
nav_menu.add(nav_exit).on("click", function () {
  if (nav_options.css("display") == "none") {
    nav_menu.css("display", "none");
    nav_exit.css("visibility", "visible");
    nav_options.show(regular_speed / 4);
  } else {
    hideNavigationOptions();
  }
});

main_sections.forEach((item, index) => {
  nav_options
    .first()
    .children()
    .eq(index)
    .on("click", function () {
      $(item).scrollToThis(regular_speed / 2);
    });
});

// arrow effects
up_arrow.on("mouseenter", function () {
  $(this)
    .prev()
    .animate({ height: "+=10px" }, regular_speed / 4);
});

up_arrow.on("mouseleave", function () {
  $(this)
    .prev()
    .animate({ height: "-=10px" }, regular_speed / 4);
});

up_arrow.on("click", function () {
  banner_image.scrollToThis(regular_speed);
});

$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || "");
    } else {
      o[this.name] = this.value || "";
    }
  });
  return o;
};

$("form").on("submit", (e) => {
  e.preventDefault();
  $("#send").val("Sending...");

  var form_data = $("form").serializeObject();

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form_data),
  };

  fetch("/", options)
    .then((response) => response.json())
    .then((output) => {
      if (output.status == "success") {
        $("#send").val("Sent!");
        document.querySelector("form").reset();
        setTimeout(function () {
          $("#send").val("Send Message");
        }, 5000);
      } else {
        $("#send").val("Error!");
      }
    });
});
