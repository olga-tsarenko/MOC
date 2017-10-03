$(document).ready(function () {
    $('#cart-popup').on('click', function () {
        $('.user-cart-modal').css('display', 'block');
    });

    $('#cart-popup').on('click', RenderCart)


    $('.close-popup').on('click', function (event) {
        $('.user-cart-modal').css('display', 'none');
        $('.cart-added-list').empty();
    });


    $('.cart-block').mouseenter(function () {
        $('.cart-tooltip').css('display', 'flex').animate({opacity: 1}, 700);

        $('.cart-block').mouseleave(function () {
            $('.cart-tooltip').css('display', 'none');
        })
    });

    function owlInit() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            items: 1
        });
    };

    function AddToCartEvent() {
        $(".add-to-cart").on('click', function (event) {
            var product = ProductsService.products.filter(function (p) {
                return p.id == event.target.attributes["data-id"].value;
            })[0];

            Cart.addToCart(product);

        });
    }


    ProductsService.fetchProducts().then(renderProducts).then(owlInit).then(AddToCartEvent);


});






