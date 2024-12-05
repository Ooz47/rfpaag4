(function ($, Drupal) {
  Drupal.behaviors.mySidebarMenu = {
    attach: function (context, settings) {

 /** Gestion ordre élément firstsidebar**/
 $(context)
 .find(".logo_menus")
 .once("some-arbitrary-but-unique-key7")
 .each(function () {
   window.addEventListener("load", function () {
     const container = document.querySelector(".principale");
     const one = document.querySelector(".logo_menus");
     const three = document.querySelector(".blocs_comp");

     // Fonction pour regrouper One et Three en mode desktop
     function adjustLayout() {
       const isDesktop = window.innerWidth >= 768; // Bootstrap breakpoint

       if (isDesktop && !container.querySelector(".aside")) {
       
         // Crée l'élément <aside>
         const aside = document.createElement("aside");
         aside.className =
           "aside layout-sidebar-first col-12 col-md-4 col-lg-3 mb-5 mb-md-0";

         // Déplace les éléments dans l'aside
         if (one) {
           aside.appendChild(one);
         }

         if (three) {
           aside.appendChild(three);
         }

         // Ajoute l'aside au container
         container.insertBefore(
           aside,
           container.querySelector(".contenuprincipal")
         );

     

      } else if (!isDesktop && container.querySelector(".aside")) {
         // Restaure la structure originale en mode mobile
         if (one) {
           container.insertBefore(
             one,
             container.querySelector(".contenuprincipal")
           );
           
         }

         if (three) {
           container.insertBefore(
             three,
             container.querySelector(".contenuprincipal")
           );
         }

         container.querySelector(".aside").remove();
        //  $(".logo_menus").css("display", "block").css("animation-duration","0.75s").css("animation-name","animate-fade");
       }
       $(".logo_menus").css("display", "block").css("animation-duration","0.75s").css("animation-name","animate-fade");
     }

     // Ajuste la disposition au chargement
     adjustLayout();

     // Réajuste la disposition lors du redimensionnement
     window.addEventListener("resize", adjustLayout);
   });
 });

/** Gestion ordre élément firstsidebar**/

/** Gestion position sticky */

$(context)
//élément contenant les menus
 .find(".logo_menus")
 .once("some-arbitrary-but-unique-key8")
 .each(function () {
   var $element = $(this).find(".menu-item--active-trail a.is-active");
   var $sub = $element.parent().children("div").children("ul");
   $sub.removeClass("collapse");

   $.fn.isInViewport = function () {
     var elementTop = $(this).offset().top;
     var elementBottom = elementTop + $(this).outerHeight();

     var viewportTop = $(window).scrollTop();
     var viewportBottom = viewportTop + $(window).height();

     return elementBottom > viewportTop && elementTop < viewportBottom;
   };

   $(window).on("load resize", function () {
     var sidebarcontentheight = 0;

     //soit élémnent unique, soit deux
     $(".aside")
       .children()
       .each(function () {
         sidebarcontentheight =
           sidebarcontentheight + $(this).outerHeight(true);
       });

     var contenuPrincipalHeight =
       $(".contenuprincipal").outerHeight(true);

     if (
       contenuPrincipalHeight >= sidebarcontentheight &&
       sidebarcontentheight < $(window).height()
     ) {
       $(".aside > aside").css("position", "sticky");
       $(".aside > aside").css("top", "100px");
       $(".aside > aside").css("height", "auto");
     }
   });
 });

    }
  };
})(jQuery, Drupal);
