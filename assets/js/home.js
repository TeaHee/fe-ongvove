$(document).ready(function () {
    $(".list-tour").slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        prevArrow:
            '<button type="button" class="slick-prev slick-content-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-content-next"></button>',
    });
});

$(document).ready(function () {
    $(".list-event").slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        prevArrow:
            '<button type="button" class="slick-prev slick-content-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-content-next"></button>',
    });
});

$(document).ready(function () {
    $(".nav-tours").slick({
        // infinite: false,
        dots: false,
        speed: 300,
        slidesToShow: 9,
        prevArrow:
            '<button type="button" class="slick-prev slick-tab-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-tab-next"></button>',
    });
});

$(document).ready(function () {
    $(".list-place").slick({
        dots: false,
        slidesToShow: 6,
        prevArrow:
            '<button type="button" class="slick-prev slick-place-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-place-next"></button>',
    });
});

$(document).ready(function () {
    $(".list-hotel").slick({
        dots: false,
        slidesToShow: 4,
        prevArrow:
            '<button type="button" class="slick-prev slick-hotel-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-hotel-next"></button>',
    });
});

$(document).ready(function () {
    $(".list-guide").slick({
        dots: false,
        slidesToShow: 3,
        prevArrow:
            '<button type="button" class="slick-prev slick-guide-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-guide-next"></button>',
    });
});

// $(document).ready(function () {
//     $('.datepicker').pickadate()
// })

function matchCustom(params, data) {
    // If there are no search terms, return all of the data
    if ($.trim(params.term) === '') {
      return data;
    }

    // Do not display the item if there is no 'text' property
    if (typeof data.text === 'undefined') {
      return null;
    }

    // `params.term` should be the term that is used for searching
    // `data.text` is the text that is displayed for the data object
    if (data.text.indexOf(params.term) > -1) {
      var modifiedData = $.extend({}, data, true);

      // You can return modified objects from here
      // This includes matching the `children` how you want in nested data sets
      return modifiedData;
    }

    // Return `null` if the term should not be displayed
    return null;
}

$(document).ready(function () {
    $('.select-address').select2({
        placeholder: "Địa điểm",
        matcher: matchCustom
    });
});

