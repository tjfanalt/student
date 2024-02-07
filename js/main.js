$("#viaSpy").scrollspy({
    activeClass: 'activeNav'
});

$("#toyotaSpy").scrollspy({
    activeClass: 'activeNav'
});

$("#railyardSpy").scrollspy({
    activeClass: 'activeNav'
});

$("#ncixSpy").scrollspy({
    activeClass: 'activeNav'
});


$('.filter-button').on('click', function (e) {
    if ($(e.target).data('filter') === '.long') {
        $('.product-container').addClass('long');
        console.log('Long');
    } else {
        $('.product-container').removeClass('long');
        console.log('Short');
    }
});

$(function () {
    var viewer = ImageViewer();
    $('.gallery-items').click(function () {
        var imgSrc = this.src,
            highResolutionImage = $(this).data('high-res-img');

        viewer.show(imgSrc, highResolutionImage);
    });
});

$(function () {
    document.getElementById('via-quick').focus();

});


$(function () {
    document.getElementById('toyota-quick').focus();

});
