$(function () {
  // Modal functionality
  let $modal = $("#nutrition-modal");
  let $openBtn = $("#open-nutrition-modal");
  let $closeBtn = $("#nutrition-modal-close");

  // Open modal
  $openBtn.on("click", function () {
    $modal.removeClass("hidden").addClass("flex");
  });

  // Close modal
  $closeBtn.on("click", function () {
    $modal.removeClass("flex").addClass("hidden");
  });

  // Close modal when clicking outside
  $modal.on("click", function (e) {
    if (e.target === this) {
      $modal.removeClass("flex").addClass("hidden");
    }
  });

  // Slick slider render data
  let productImages = [
    { src: "./assets/images/product-1.webp", alt: "Main Product Image" },
    { src: "./assets/images/product-2.webp", alt: "Product Image 2" },
    { src: "./assets/images/product-3.webp", alt: "Product Image 3" },
    { src: "./assets/images/product-4.webp", alt: "Product Image 4" },
    { src: "./assets/images/product-5.webp", alt: "Product Image 5" },
    { src: "./assets/images/product-6.webp", alt: "Product Image 6" },
    { src: "./assets/images/product-7.webp", alt: "Product Image 7" },
    { src: "./assets/images/product-8.webp", alt: "Product Image 8" },
    { src: "./assets/images/product-9.webp", alt: "Product Image 9" },
    { src: "./assets/images/product-10.webp", alt: "Product Image 10" },
  ];

  // video slider data
  let productVideos = [
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
      src: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
      src: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
      src: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
      src: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
      src: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
      src: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
      src: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
      src: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
      src: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
    },
    {
      poster:
        "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
      src: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
    },
  ];

  // Render Main Slider
  let $mainSlider = $(".slider-for");
  let mainSliderHtml = $.map(productImages, function (img, idx) {
    if (idx === 0) {
      return [
        "<figure>",
        '<div class="main-image relative flex justify-center">',
        '<img loading="eager" src="' +
          img.src +
          '" alt="' +
          img.alt +
          '" class="product-img">',
        '<img src="./assets/images/nysale.avif" alt="" class="product-img block absolute right-4 top-4 max-w-[80px]">',
        '<div class="absolute flex justify-center items-center gap-2 py-2 px-6 bottom-8 leading-[1.2em] max-w-[290px] border bg-[#ffffffd9] rounded-[24px] cursor-pointer z-2 text-sm" id="open-nutrition-modal">',
        '<img src="./assets/icons/nutri-icon.png" alt="Nutrition Icon" class="product-img w-6">',
        "<span>Nutritional Information</span>",
        "</div>",
        "</div>",
        "</figure>",
      ].join("");
    } else {
      return [
        "<figure>",
        '<img loading="eager" src="' +
          img.src +
          '" alt="' +
          img.alt +
          '" class="product-img w-full h-auto">',
        "</figure>",
      ].join("");
    }
  }).join("");
  $mainSlider.html(mainSliderHtml);

  // Render Thumbnail Slider
  let $thumbSlider = $(".slider-nav");
  let thumbSliderHtml = $.map(productImages, function (img, idx) {
    return [
      '<figure class="px-1">',
      '<img loading="eager" src="' +
        img.src +
        '" alt="Thumbnail ' +
        (idx + 1) +
        '" class="product-img w-full h-auto rounded-lg">',
      "</figure>",
    ].join("");
  }).join("");
  $thumbSlider.html(thumbSliderHtml);

  $(".buy-option").click(function () {
    $(".buy-option").removeClass("active");
    $(this).addClass("active");
  });

  $(".product_tab-block").click(function () {
    $(this).toggleClass("active");
    $(this).find(".product_tab-content").slideToggle();
  });

  $(".product-table-item").click(function () {
    $(this).find(".product-table-item-content").slideToggle();
  });

  $(".open-form").click(function (e) {
    e.preventDefault();
    $(".form-wrapper").slideToggle();
  });

  $(".close-form").click(function (e) {
    e.preventDefault();
    $(".form-wrapper").slideToggle();
  });

  // Initialize Slick sliders
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-nav",
    prevArrow:
      '<button type="button" class="slick-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-transparent rounded-full cursor-pointer"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281" alt="Previous" class="size-full"></button>',
    nextArrow:
      '<button type="button" class="slick-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-transparent rounded-full cursor-pointer"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281" alt="Next" class="size-full"></button>',
  });

  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    arrows: false,
  });

  // Render stories-slider from productVideos
  let $storiesSlider = $(".stories-slider");
  if ($storiesSlider.length && typeof productVideos !== "undefined") {
    let storiesHtml = productVideos
      .map(function (video) {
        return [
          '<div class="rounded relative overflow-hidden cursor-pointer story-video">',
          '<img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"',
          ' class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[5] size-8">',
          '<video playsinline class="rounded overflow-hidden object-cover aspect-[9/16]"',
          ' poster="' + video.poster + '">',
          '<source src="' + video.src + '" type="video/mp4">',
          "</video>",
          "</div>",
        ].join("");
      })
      .join("");
    $storiesSlider.html(storiesHtml);
  }

  // Story video play/pause and toggle play icon
  $(document).on("click", ".story-video", function () {
    var $img = $(this).find("img");
    var $video = $(this).find("video")[0];
    if ($video.paused) {
      // Pause all other videos and show their play icons
      $(".story-video video").each(function () {
        if (!this.paused) {
          this.pause();
          $(this).closest(".story-video").find("img").removeClass("!hidden");
        }
      });
      $img.addClass("!hidden");
      $video.play();
    } else {
      $video.pause();
      $img.removeClass("!hidden");
    }
  });

  // When video ends, show play icon again
  $(document).on("ended", ".story-video video", function () {
    $(this).closest(".story-video").find("img").removeClass("!hidden");
  });

  $storiesSlider.slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 677,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".stories-nav-prev").click(function () {
    $(".stories-slider .slick-prev").trigger("click");
  });

  $(".stories-nav-next").click(function () {
    $(".stories-slider .slick-next").trigger("click");
  });

  $(".faq-box").click(function () {
    $(this).toggleClass("active");
    $(this).find(".faq-content").slideToggle();
  });
});
