function renderProducts() {
    var mylist = $('.catalog-item-block');
    var MyRender;

    Template = function (defaultTemplate) {
        this.defaultTemplate = defaultTemplate
    };

    console.log(item.price);




    ProductsService.products.forEach((item) => {
      var myRender = new Template(
            '<li class="catalog-item">'
            + "<div class='owl'>"+"rere" +"</div>"
            + "<div class='block-desctiption'>"
            + "<div class='item-title'></div>"
            + "<div class='item-description'></div>"
            + "<div class='item-price-block'>"
            + "<div class='item-price'></div>"
            + "<div class='add-to-cart'></div>"
            + "</div>"
            + "</div>"
            + "</li>"
        );
        $(myRender.defaultTemplate).appendTo(mylist)
});
}