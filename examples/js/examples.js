// JQUERY

$('.box').click(function () {
    //$('.box.active').removeClass('active');
    $('.thumb').removeClass('p3 df fixed l0 t0 wfull hfull aic bg-gray zi10');
    $('.pic').removeClass('wa ma max-wfull max-hfull');

    $('.info').removeClass('active2');

    $('.zoom').removeClass('vh');
    $('.close-box').removeClass('df');

    $(this)
        .find('.thumb')
        .addClass('p3 df fixed l0 t0 wfull hfull aic bg-gray zi10');
    $(this).find('.pic').addClass('wa ma max-wfull max-hfull');
    $(this).find('.zoom').addClass('vh');
    $(this).find('.close-box').addClass('df');
    $(this).children('.info').addClass('active2');
});

$(document).on('click', '.close-box', function () {
    $(this).removeClass('df');
    $('.zoom').removeClass('vh');

    $('.thumb').removeClass('p3 df fixed l0 t0 wfull hfull aic bg-gray zi10');
    $('.pic').removeClass('wa ma max-wfull max-hfull');

    $('.info').removeClass('active2');

    $('.zoom').removeClass('close-box');
});
