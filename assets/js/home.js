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
        infinite: false,
        dots: false,
        speed: 300,
        slidesToShow: 5,
        prevArrow:
            '<button type="button" class="slick-prev slick-tab-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-tab-next"></button>',
    });
});

$(document).ready(function () {
    $(".list-place").slick({
        infinite: false,
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
        infinite: false,
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
        infinite: false,
        dots: false,
        slidesToShow: 3,
        prevArrow:
            '<button type="button" class="slick-prev slick-guide-prev"></button>',
        nextArrow:
            '<button type="button" class="slick-next slick-guide-next"></button>',
    });
});

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
    $('.select-location').select2({
        placeholder: "Địa điểm",
        matcher: matchCustom,
        width: 'resolve' 
    });

    $('.select-language').select2({
        placeholder: "Chọn ngôn ngữ dành cho hướng dẫn viên",
        matcher: matchCustom,
        width: 'resolve' 
    });
});

$(document).ready(function () {
    $("#endDateService").addClass("disable-custom");

    $('#startDateService').daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        showDropdowns: true,
        opens: 'center',
        drops: "auto",
        autoApply: true,
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " đến ",
            "applyLabel": "",
            "cancelLabel": "",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "firstDay": 1
        },
    }, function (start, end, label) {
        $("#endDateService").removeClass("disable-custom");
        $('#endDateService').data('daterangepicker').minDate = start
    });

    $('#endDateService').daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        opens: 'center',
        drops: "auto",
        showDropdowns: true,
        autoApply: true,
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " đến ",
            "applyLabel": "",
            "cancelLabel": "",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "firstDay": 1
        },
    });

    $('#startDateService').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });

    $('#endDateService').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });
});

$(document).ready(function () {
    $("#endDateTour").addClass("disable-custom");

    $('#startDateTour').daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        showDropdowns: true,
        opens: 'center',
        drops: "auto",
        autoApply: true,
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " đến ",
            "applyLabel": "",
            "cancelLabel": "",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "firstDay": 1
        },
    }, function (start, end, label) {
        $("#endDateTour").removeClass("disable-custom");
        $('#endDateTour').data('daterangepicker').minDate = start
    });

    $('#endDateTour').daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        opens: 'center',
        drops: "auto",
        showDropdowns: true,
        autoApply: true,
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " đến ",
            "applyLabel": "",
            "cancelLabel": "",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "firstDay": 1
        },
    });

    $('#startDateTour').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });

    $('#endDateTour').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });
});

$(document).ready(function () {
    $("#endDateEvent").addClass("disable-custom");

    $('#startDateEvent').daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        showDropdowns: true,
        opens: 'center',
        drops: "auto",
        autoApply: true,
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " đến ",
            "applyLabel": "",
            "cancelLabel": "",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "firstDay": 1
        },
    }, function (start, end, label) {
        $("#endDateEvent").removeClass("disable-custom");
        $('#endDateEvent').data('daterangepicker').minDate = start
    });

    $('#endDateEvent').daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        opens: 'center',
        drops: "auto",
        showDropdowns: true,
        autoApply: true,
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " đến ",
            "applyLabel": "",
            "cancelLabel": "",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "firstDay": 1
        },
    });

    $('#startDateEvent').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });

    $('#endDateEvent').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });
});

$(document).ready(function () {
    $('.dropdown-rooms .btn-minus').click(function (e) {
        e.stopPropagation();
        var parent = $(this).closest('.dropdown-center');
        var input = parent.find('.dropdown-rooms [name=' + $(this).data('input') + ']');
        var min = parseInt(input.attr('min'));
        var old = parseInt(input.val());

        if (old <= min) {
            return;
        }
        input.val(old - 1);
        updateGuestCountText(parent);
    });

    $('.dropdown-rooms .btn-add').click(function (e) {
        e.stopPropagation();
        var parent = $(this).closest('.dropdown-center');
        var input = parent.find('.dropdown-rooms [name=' + $(this).data('input') + ']');
        var max = parseInt(input.attr('max'));
        var old = parseInt(input.val());

        if (old >= max) {
            return;
        }
        input.val(old + 1);
        updateGuestCountText(parent);
    });

    $('.dropdown-rooms input').keyup(function (e) {
        var parent = $(this).closest('.dropdown-center');
        updateGuestCountText(parent);
    });
    $('.dropdown-rooms input').change(function (e) {
        var parent = $(this).closest('.dropdown-center');
        updateGuestCountText(parent);
    });

    function updateGuestCountText(parent) {
        var adults = parseInt(parent.find('[name=adults]').val());
        var children = parseInt(parent.find('[name=children]').val());
        var rooms = parseInt(parent.find('[name=rooms]').val());

        var adultsHtml = parent.find('.render .adults .multi').data('html');
        console.log(parent, adultsHtml);
        parent.find('.render .adults .multi').html(adultsHtml.replace(':count', adults));

        var childrenHtml = parent.find('.render .children .multi').data('html');
        parent.find('.render .children .multi').html(childrenHtml.replace(':count', children));

        var roomHtml = parent.find('.render .rooms .multi').data('html');
        parent.find('.render .rooms .multi').html(roomHtml.replace(':count', rooms));


        if (adults > 1) {
            parent.find('.render .adults .multi').removeClass('d-none');
            parent.find('.render .adults .one').addClass('d-none');
        } else {
            parent.find('.render .adults .multi').addClass('d-none');
            parent.find('.render .adults .one').removeClass('d-none');
        }

        if (children > 1) {
            parent.find('.render .children .multi').removeClass('d-none');
            parent.find('.render .children .one').addClass('d-none');
        } else {
            parent.find('.render .children .multi').addClass('d-none');
            parent.find('.render .children .one').removeClass('d-none').html(parent.find('.render .children .one').data('html').replace(':count', children));
        }

        if (rooms > 1) {
            parent.find('.render .rooms .multi').removeClass('d-none');
            parent.find('.render .rooms .one').addClass('d-none');
        } else {
            parent.find('.render .rooms .multi').addClass('d-none');
            parent.find('.render .rooms .one').removeClass('d-none').html(parent.find('.render .rooms .one').data('html').replace(':count', rooms));
        }

    }
});



