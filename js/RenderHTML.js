function renderProducts() {
    var mylist = $('.catalog-item-block');
    var MyRender;
    var noImage = "http://telegram.org.ru/uploads/posts/2017-03/1490220314_4.png";

    Template = function (defaultTemplate) {
        this.defaultTemplate = defaultTemplate
    };


    ProductsService.products.forEach(function (item) {
        var images = "";
        item.images.forEach(function (listItem) {
            var isImage = listItem ? listItem : noImage;
            images += '<li><img src ="' + isImage + '"></li>'
        });


        var myRender = new Template(
            '<li class="catalog-item">'
            + "<ul class='owl-carousel owl-theme'>" + images + "</ul>"
            + "<div class='block-desctiption'>"
            + "<h2 class='item-title'> " + item.title + "</h2>"
            + "<div class='item-description'>" + item.description + "</div>"
            + "<div class='item-price-block'>"
            + "<div class='item-price'> " + item.price + "</div>"
            + "<button type='button' class='add-to-cart' data-id=" + item.id + "> add to cart</button>"
            + "</div>"
            + "</div>"
            + "</li>"
            )
        ;
        $(myRender.defaultTemplate).appendTo(mylist)
    });

}


var RenderCart = function () {

    var myCartList = $('.cart-added-list');
    var MyRenderCart;

    TemplateCart = function (defaultTemplateCart) {
        this.defaultTemplateCart = defaultTemplateCart
    };

    Cart.items.forEach(function (item) {
        var newPrice = (item.count * item.price).toFixed(2);
        myRenderCart = new TemplateCart(
            '<li id=' + item.id + '  class="cart-added-list-item">'
            + "<button type='button' class='remove-cart-item' data-id=" + item.id + " ></button>"
            + "<a href='#' class='item-title'>" + item.title + "</a>"
            + "<div class='count-selected-items'>" + item.count + "</div>"
            + "<div class='cart-item-price'>" + newPrice + "</div>"
            + "</li>"
        );

        $(myRenderCart.defaultTemplateCart).appendTo(myCartList);

    });

    $(".remove-cart-item").on('click', function (event) {
        var reduce = Cart.items.filter(function (r) {
            return r.id == event.target.attributes["data-id"].value;
        })[0];


        var itemRemoveID = document.getElementById(reduce.id);

        Cart.RemoveCartItem(reduce);

        $(itemRemoveID).remove();

        $('.cart-total-amount').text((Cart.totalAmount).toFixed(2))
    });

    $('.cart-total-amount').append('<p>' + (Cart.totalAmount).toFixed(2) + '</p>');


};









