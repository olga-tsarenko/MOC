function renderProducts() {
    var mylist = $('.catalog-item-block');
    var MyRender;
    var noImage = "http://telegram.org.ru/uploads/posts/2017-03/1490220314_4.png";

    Template = function (defaultTemplate) {
        this.defaultTemplate = defaultTemplate
    };


    ProductsService.products.forEach((item) => {
        var images = "";
        item.images.forEach(function (listItem) {
            var isImage = listItem ? listItem : noImage;
            images += '<li><img src ="' + isImage + '"></li>'
        });
        // console.log("images", images);
        var myRender = new Template(
            '<li class="catalog-item">'
            + "<ul class='owl-carousel owl-theme'>" + images + "</ul>"
            + "<div class='block-desctiption'>"
            + "<div class='item-title'> " + item.title + "</div>"
            + "<div class='item-description'></div>"
            + "<div class='item-price-block'>"
            + "<div class='item-price'></div>"
            + "<div class='add-to-cart' data-id=" + item.id + " ></div>"
            + "</div>"
            + "</div>"
            + "</li>"
            )
        ;
        $(myRender.defaultTemplate).appendTo(mylist)
    });


}


function RenderCart() {

    $('#cart-popup').on('click', function () {

        var myCartList = $('.cart-added-list');
        var MyRenderCart;

        TemplateCart = function (defaultTemplateCart) {
            this.defaultTemplateCart = defaultTemplateCart
        };

        Cart.items.forEach(function (item) {
            var newPrice = item.count * item.price;
            var myRenderCart = new TemplateCart(
                '<li class="cart-added-list-item">'
                + "<div class='remove-cart-item' data-id=" + item.id + " ></div>"
                + "<a href='#' class='item-title'>" + item.title + "</a>"
                + "<div class='count-selected-items'>" + item.count + "</div>"
                + "<div class='cart-item-price'>" + newPrice + "</div>"
                + "</li>"
            );

            $(myRenderCart.defaultTemplateCart).appendTo(myCartList);

            $(".remove-cart-item").on('click', function (event) {
                console.log(event)
                var reduce = Cart.items.filter(function (r) {
                    return r.id == event.target.attributes["data-id"].value;
                })[0];

                // Cart.RemoveCart(reduce);
            });
        });

        $('.cart-total-amount').append('<p>' + Cart.totalAmount + '</p>');
    });



};









