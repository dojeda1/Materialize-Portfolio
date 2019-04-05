  $(document).ready(function () {
      // Materialize functions
      $(".sidenav").sidenav();

      $(".modal").modal();

      $('.parallax').parallax();

      $('.scrollspy').scrollSpy({
          scrollOffset: 100
      });

      $('.carousel').carousel();

      $('.carousel.carousel-slider').carousel({
          fullWidth: true,
          indicators: true
      });

  });