(function ($, Drupal) {
  Drupal.behaviors.mySidebarMenu = {
    attach: function (context, settings) {

//       $(context).find(".aside").once("some-arbitrary-but-unique-key").each(function () {

//         var $element = $(this).find('.menu-item--active-trail a.is-active');
//         var $sub = $element.parent().children('div').children('ul');
//         $sub.removeClass('collapse');

//         $.fn.isInViewport = function() {
//           var elementTop = $(this).offset().top;
//           var elementBottom = elementTop + $(this).outerHeight();
      
//           var viewportTop = $(window).scrollTop();
//           var viewportBottom = viewportTop + $(window).height();
      
//           return elementBottom > viewportTop && elementTop < viewportBottom;
//       };

//       $(window).on('load resize', function() {
//       var sidebarcontentheight = 0;

// $(".aside").children().each(function(){
//   sidebarcontentheight = sidebarcontentheight + $(this).outerHeight(true);
// });

// var contenuPrincipalHeight = $(".contenuprincipal").outerHeight(true);
      
//       if ((contenuPrincipalHeight >= sidebarcontentheight) && (sidebarcontentheight < $(window).height()) ){ 

//         $(".aside").css("position", "sticky");
//         $(".aside").css("top", "100px");
//         $(".aside").css("height", "auto");
//       }
//     });

//       });

 

    }
  };
})(jQuery, Drupal);
