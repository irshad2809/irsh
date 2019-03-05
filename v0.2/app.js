  var arrowInterval;
  $(document).ready(function() {

    /*fullpage.js*/
    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
      menu: '#menu',
      css3: true,
      scrollBar: false,
      scrollingSpeed: 1000,
      navigation: true,
      slidesNavigation: true,
      responsiveHeight: 330,
      controlArrows: true,
      verticalCentered: true,
      paddingTop: "20px",
      responsiveWidth: "600px",
      responsiveHeight: "600px",
      scrollOverflow: true,
      onLeave: function(index, nextIndex, direction) {
        var leavingSection = $(this);
        gtag('config', 'UA-111195684-3', {
          'page_title': window.location.href.substr(35),
          'page_path': window.location.href.substr(33),
          'page_location': window.location.href
        });
        callAnim();

        if ($(window).width() < "600") {

          if (direction == "up") {
            $('.navbar').fadeIn();
          } else {
            $('.navbar').fadeOut();
          }
        }
      },
      afterLoad: function(anchorLink, index) {
        if (index == 3) {
          console.log(index);
          controlArrow(true);
        } else {
          clearInterval(arrowInterval);
        }

      }

    });
    /*=====  End of Section comment block  ======*/

    /*tagCloud*/
    if (!$('#myCanvas').tagcanvas({
        textColour: "#08fdd8",
        outlineThickness: 1.5,
        outlineColour: '#fe0853',
        maxSpeed: 0.06,
        freezeActive: true,
        shuffleTags: true,
        shape: 'sphere',
        zoom: 1,
        noSelect: false,
        textFont: null,
        pinchZoom: true,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 0.8,
        repeatTags: 1
      })) {
      // TagCanvas failed to load
      $('#myCanvasContainer').hide();

    }



    /*=====  End of Section comment block  ======*/
    /*blasting*/
    $("h1").blast({
      delimiter: "word",
      tag: "span"
    });


    a = 0;


    $(".blast").each(function() {

      var el = $(this);

      setTimeout(function() {

        el.addClass('animated bounceInUp');


      }, a);


      a = a + 50;

    });

    setTimeout(function() {

      $(".blast").removeClass('animated bounceInUp');
      $(".blast").css('opacity', 1);

      $(".blast").mouseenter(function() {

        var el = $(this);

        $(this).addClass('animated rubberBand');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

          el.removeClass('animated rubberBand');

        });

      });


    }, 1000);
    /*=====  End of Section comment block  ======*/

    $("#myimg").hover(function() {
      $(this).addClass("animated swing");
      $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

        $(this).removeClass('animated swing');

      });
    });
  }); /*doc.end*/



  /*=====  End of Section comment block  ======*/
  /*controlArrows*/
  function controlArrow(index) {
    if (index)

      arrowInterval = setInterval(function() {
        $(".fp-controlArrow").each(function(index) {

          $(this).addClass("animated bounce");
          $(this).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

            $(this).removeClass('animated bounce');
            console.log("called");
          });

        });
      }, 1000);
  }
  /*=====  End of Section comment block  ======*/

  /*callAnim*/
  function callAnim() {
    if (innerWidth < 600) {
      $(".portfolio-box-caption").css("opacity", 1);
      $(".portfolio-box-caption").addClass("portfolio-box-sm");
    }
    $("h1").addClass('animated bounceInUp');
    $("h1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

      $(this).removeClass('animated bounceInUp');

    });

    $(".rounded-circle").addClass('animated bounceInDown');
    $("h1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

      $(this).removeClass('animated bounceInDown');

    });



    $("img").each(function(index) {
      if (innerWidth > 600)

        if (index % 2) {
          $(this).addClass("animated bounceInUp");
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

            $(this).removeClass('animated bounceInUp');

          });
        } else {

          $(this).addClass("animated bounceInDown");
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

            $(this).removeClass('animated bounceInDown');

          });
        }
    });


  }
  /*=====  End of Section comment block  ======*/





  /*emoji*/

  let emoji = ["😂🔫", "☕", "💻", "✋📱"];
  let i = 0;
  setInterval(function() {
    $("#madeWith").hide().html(emoji[i]).fadeIn(500);


    if (i === 3) {
      i = -1;

    }
    i++;

  }, 2000);


  /*=====  End of Section comment block  ======*/

  /*shuffling */
  (function($) {
    $.fn.shuffle = function() {
      var allElems = this.get(),
        getRandom = function(max) {
          return Math.floor(Math.random() * max);
        },
        shuffled = $.map(allElems, function() {
          var random = getRandom(allElems.length),
            randEl = $(allElems[random]).clone(true)[0];
          allElems.splice(random, 1);
          return randEl;
        });

      this.each(function(i) {
        var my_random_value = Math.floor(800 + (2000 - 700) * Math.random());
        var my_random_value1 = Math.floor(800 + (2000 - 700) * Math.random());
        $(this).fadeOut(my_random_value, function() {
          $(this).replaceWith($(shuffled[i]).hide());
          $(shuffled[i]).fadeIn(my_random_value1);
        });


      });

      return $(shuffled);
    };
  })(jQuery);

  /*=====  End of Section comment block  ======*/