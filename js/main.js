
$(document).ready(function () {
    $('#cart-popup').on('click', function () {
        $('.user-cart-modal').css('display', 'block')
    });

    $('.close-popup').on('click', function () {
        $('.user-cart-modal').css('display', 'none')
    });

    $('.cart-block').mouseenter(function () {
        $('.cart-tooltip').css('display', 'flex').animate({opacity: 1}, 700);

        $('.cart-block').mouseleave(function () {
            $('.cart-tooltip').css('display', 'none');
        })
    });


    var htmlData = [];


    ProductsService.fetchProducts().then(renderProducts);

    function  AddToCartEvent (){
        $(".add-to-cart").on('click', function (event) {
            var product = ProductsService.products.filter((p) => {
                return p.id == event.target.attributes["data-id"].value
            }
        )
            [0];

            Cart.addToCart(product);
        });
    }
    AddToCartEvent ();

});


