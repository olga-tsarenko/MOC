$(document).ready(function () {
    $('#cart-popup').on('click', function () {
        $('.user-cart-modal').css('display', 'flex');
        RenderCart();
        $('.wrapper').css('overflow', 'hidden')
    });


    $('.close-popup').on('click', function (event) {
        $('.user-cart-modal').css('display', 'none');
        $('.cart-added-list').empty();
        $('.cart-total-amount').empty();
        $('.wrapper').css('overflow', 'auto')
    });


    $('.cart-block').mouseenter(function () {
        var numb= 0;
        Cart.items.forEach((item) =>{
           numb += item.count;
        });

        $('.cart-tooltip p').text(numb);
        $('.cart-tooltip').css('display', 'flex').animate({opacity: 1}, 700);

        $('.cart-block').mouseleave(function () {
            $('.cart-tooltip').css('display', 'none');
        })
    });

    function owlInit() {
        $('.owl-carousel').owlCarousel({
            margin: 0,
            loop: true,
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
    }

    ProductsService.fetchProducts().then(renderProducts).then(owlInit).then(AddToCartEvent);

});






