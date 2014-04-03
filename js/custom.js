 (function($) {
     "use strict";
     $(document).ready(function() {
         $(".scrollup").hide();
         $(window).scroll(function() {
             if($(this).scrollTop() > 400) {
                 $('.scrollup').fadeIn();
             } else {
                 $('.scrollup').fadeOut();
             }
         });
         $('.scrollup').click(function() {
             $("html, body").animate({
                 scrollTop: 0
             }, 800);
             return false;
         });
     });
 })(jQuery);
 (function($) {
     "use strict";
     $(document).ready(function() {
         $('#navigation-button').click(function() {
             $('.drop-down').toggleClass('active');
         });
     });
 })(jQuery);
 (function($) {
     "use strict";
     $('html').scrollspy({
         target: '.top-menu'
     });
 })(jQuery);
 (function($) {
     "use strict";
     var $accordion = $('#accordion .panel a');
     $accordion.click(function() {
         $accordion.removeClass('selected');
         $(this).addClass('selected');
     });
     $('#accordion .panel a').on('click', function(e) {
         if($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
             $accordion.removeClass('selected');
         }
     });
 })(jQuery);