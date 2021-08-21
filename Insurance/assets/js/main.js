(function ($) {
    "use-strict";
  
    $(document).ready(function () {
        $(".staff-list").owlCarousel({
           items: 4,
           autoplay: false,
           loop: true,
           margin: 30,
           nav: true,
           navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"]
        });
    }); 

})(jQuery);








