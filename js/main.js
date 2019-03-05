$(function() {
  $(".loader").fadeOut();

  const cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", e => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  });

  window.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });

  const menuBtn = $(".menu-btn");
  const menu = $(".menu");
  const menuNav = $(".menu-nav");
  const menuBranding = $(".menu-branding");
  const navItems = $(".nav-item");

  // initial state of menu

  let showMenu = false;

  $(".menu").on("click", () => {
    if (showMenu) {
      toggleMenu();
    }
  });

  menuBtn.on("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.addClass("close");
      menu.addClass("show");
      menuNav.addClass("show");
      menuBranding.addClass("show");
      navItems.each(function() {
        $(this).addClass("show");
      });

      showMenu = true;
    } else {
      menuBtn.removeClass("close");
      menu.removeClass("show");
      menuNav.removeClass("show");
      menuBranding.removeClass("show");
      navItems.each(function() {
        $(this).removeClass("show");
      });

      showMenu = false;
    }
  }
  $(document).on("click", 'a[href^="#"].nav-link', function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
  });
  /*tagCloud*/
  if (
    !$("#myCanvas").tagcanvas({
      textColour: "#42e8e0",
      outlineThickness: 1.5,
      outlineColour: "#42e8e0",
      maxSpeed: 0.06,
      freezeActive: false,
      shuffleTags: true,
      shape: "sphere",
      zoom: 1,
      noSelect: false,
      textFont: null,
      pinchZoom: true,
      freezeDecel: false,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 0.8,
      repeatTags: 1
    })
  ) {
    // TagCanvas failed to load
    $("#myCanvasContainer").hide();
  }

  let emoji = ["😂🔫", "☕", "💻", "✋📱"];
  let i = 0;
  setInterval(function() {
    $("#madeWith")
      .hide()
      .html(emoji[i])
      .fadeIn(500);

    if (i === 3) {
      i = -1;
    }
    i++;
  }, 2000);

  $(".head-grid-container").css("margin-top", -1 * $(".bg-text").height());
  $(window).resize(function() {
    $(".head-grid-container").css("margin-top", -1 * $(".bg-text").height());
  });

  function splitWords(element) {
    var output = [];
    var words = $(element)
      .html()
      .split(" ");
    $.each(words, function(key, word) {
      if (word.trim().length) {
        var word_output =
          '<span class="word"><span class="holder">' + word + "</span></span>";

        if (word_output.indexOf("<br>") > -1) {
          word_output = word_output.replace("<br>", "");
          word_output += "<br />";
        }

        output.push(word_output);
      }
    });

    $(element).html(output.join(" "));
  }

  var controller = new ScrollMagic.Controller();

  $("h1, h3 , h2").each(function() {
    var $this = this;

    $(this).css("visibility", "visible");
    splitWords($this);

    var headingTween = new TimelineLite()
      .staggerFrom(
        $(this).find("span.holder"),
        1.5,
        { ease: Power4.easeOut, y: "100%", force3D: true, rotation: 0.01 },
        0.1
      )
      .delay(0.2);
    new ScrollMagic.Scene({ triggerHook: 0.9, triggerElement: $this })
      .addTo(controller) //.addIndicators()
      .setTween(headingTween);
  });

  var clientsTween = new TimelineLite().staggerFrom(
    ".project-box",
    1,
    { opacity: 0 },
    0.1
  );

  new ScrollMagic.Scene({ triggerHook: 0.8, triggerElement: ".project-box" })
    .addTo(controller) //.addIndicators()
    .setTween(clientsTween);

  var oldId = null;

  $(".tabs-controls__link").click(function(e) {
    e.preventDefault();

    if ($(this).hasClass("tabs-controls__link--active")) {
      return false;
    }

    var currentId = parseInt($(this).data("id"), 10);
    $(".tabs-controls__link--active").removeClass(
      "tabs-controls__link--active"
    );
    $(this).addClass("tabs-controls__link--active");

    if (currentId < oldId) {
      // item is hidden
      var timing = $(".card.hidden").length * 100;
      $(".card").each(function(index) {
        if (index > currentId - 1 || index == currentId - 1) {
          window.setTimeout(function() {
            $(".card")
              .eq(index)
              .removeClass("hidden");
          }, timing - index * 100);
        }
      });
    } else {
      $(".card").each(function(index) {
        if (index < currentId - 1) {
          window.setTimeout(function() {
            $(".card")
              .eq(index)
              .addClass("hidden");
          }, index * 100);
        }
      });
    }

    oldId = currentId;
  });
});
