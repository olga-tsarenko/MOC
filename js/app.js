$(document).ready(function () {
    $('#cart-popup').on('click', function () {
        $('.user-cart-modal').css('display', 'flex');
        RenderCart()
    });

    // $('#cart-popup').on('click', RenderCart);


    $('.close-popup').on('click', function (event) {
        $('.user-cart-modal').css('display', 'none');
        $('.cart-added-list').empty();
        $('.cart-total-amount').empty();
    });


    $('.cart-block').mouseenter(function () {
        $('.cart-tooltip p').text(Cart.items.length);
        $('.cart-tooltip').css('display', 'flex').animate({opacity: 1}, 700);

        $('.cart-block').mouseleave(function () {
            $('.cart-tooltip').css('display', 'none');
        })
    });

    function owlInit() {
        $('.owl-carousel').owlCarousel({
            margin: 0,
            loop:true,
            nav: true,
            dots: false,
            items: 1
        });
        $('.owl-prev').empty();
        $('.owl-next').empty();
    };

    function AddToCartEvent() {
        $(".add-to-cart").on('click', function (event) {
            var product = ProductsService.products.filter(function (p) {
                return p.id == event.target.attributes["data-id"].value;
            })[0];

            Cart.addToCart(product);

        });
    };


    ProductsService.fetchProducts().then(renderProducts).then(owlInit).then(AddToCartEvent);


});






