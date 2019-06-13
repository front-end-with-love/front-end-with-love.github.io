$(document).ready(function () {
    // hide/show faq item
    $('.faq__item-title').on('click', function () {
        $(this).closest('.faq__item').toggleClass('faq__item_active');
    });
});