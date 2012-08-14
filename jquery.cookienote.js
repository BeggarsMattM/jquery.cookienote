(function($) {

  $.fn.cookieNote = function(options) {
    // set up the plugin defaults - these should be pretty sensible out of the box
    var settings = {
      'width': 100,
      'height': 80,
      'textColor': '#505050',
      'linkColor': '#cc0000',
      'backgroundColor': '#323232',
      'animate': false,
      'animationStyle': 'slideDown',
      'animationSpeed': "slow",
      'position': 'top',
      'headingTextColor': '#ffffff',
      'headingText': 'Cookies on this website',
      'headingTextSize': 18,
      'explainationText': 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on the this website.',
      'confirmText': 'Continue'
    };

    var options = $.extend(settings, options);

    return this.each(function() {
      $(this).css({'display':'none'});

      // apply some initial css to the container div, overrides will happen if set
      $(this).css({
        'width': settings.width+'%',
        'height': settings.height+'px',
        'z-index': '1000',
        'backgroundColor': settings.backgroundColor,
        'position': 'absolute',
        'color': 'textColor'
      });

      // check where the user wants the notice displayed, sensible is top, they might pick bottom
      if (settings.position === 'bottom') {
        $(this).css({'bottom': '0'});
      } else {
        $(this).css({'top': '0'});
      }

      // set the header div and style it
      var containerDiv = "<div id='cookienote-container'></div>";
      $(this).append(containerDiv);

      // set the css for the container
      $('#cookienote-container').css({
        'color': settings.headingTextColor,
        'font-family': 'Arial, sans-serif',
        'width': '740px',
        'position': 'relative',
        'margin': '0 auto'
      });

      // add the header text
      var h2 = "<h2>"+settings.headingText+"</h2>";
      $('#cookienote-container').append(h2);

      // set the css for the h2 header text
      $('#cookienote-container h2').css({
        'font-size': settings.headingTextSize+'px',
        'float': 'left',
        'text-align': 'right',
        'width': '140px',
        'font-weight': 'bold',
        'line-height': '1.12'
      });

      // add the explainer text
      var p = "<p>"+settings.explainationText+"</p>";
      $('#cookienote-container').append(p);

      // set the css for the h2 header text
      $('#cookienote-container p').css({
        'font-size': settings.headingTextSize+'px',
        'float': 'left',
        'width': '460px',
        'line-height': '1.24',
        'color': '#BEBEBE',
        'margin-left': '20px',
        'font-size': '12px'
      });


      // display the div
      if (settings.animate === true && settings.animationStyle === "slideDown") {
        $(this).css({'height': '0px'}).show();
        $(this).animate({height: settings.height+'px', display: 'block'}, settings.animationSpeed, function() {
          // callback for slideDown
        });
      } else if (settings.animate === true && settings.animationStyle === "fadeIn") {
        $(this).css({'opacity': '0'}).show();
        $(this).animate({opacity: '1'}, settings.animationSpeed, function() {
          // callback for slideDown
        });
      } else {
        $(this).css({'display':'block'})
      }

    });
  
  };

})(jQuery);