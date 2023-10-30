$(document).ready(function () {
  $("#basicExample").justifiedGallery({
    rowHeight: 400,
    margins: 20,
    border: 0,
    randomize: false,
    waitThumbnailsLoad: false,
  });
  $("#basicExample2").justifiedGallery({
    rowHeight: 400,
    margins: 20,
    border: 0,
    randomize: false,
    waitThumbnailsLoad: false,
  });
  $("#basicExample3").justifiedGallery({
    rowHeight: 400,
    margins: 20,
    border: 0,
    randomize: false,
    waitThumbnailsLoad: false,
  });
  var $grid = $(".portfolio-active").isotope({
    itemSelector: ".grid-item",
    // percentPosition: true,
    // masonry: {
    //   // use outer width of grid-sizer for columnWidth
    //   columnWidth: 1,
    // },
  });
  $(".portfolio-menu").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $(".portfolio-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
});
