(function(global) {
    var REQUEST_OPTIONS = {
        url: 'https://shop.bremont.com/products.json',
        dataType: 'json'
    };

    ProductsService = function() {
        this.products = [];
    };

    Product = function(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.body_html;
        this.price = data.variants[0].price;
        this.count = 0;
        this.images = [];

        data.images.forEach((image) => {
            this.images.push(image.src);
        });
    };

    ProductsService.prototype.fetchProducts = function () {
        return $.ajax(REQUEST_OPTIONS).then((data) => {

            data.products.forEach((productData) => {
                this.products.push(new Product(productData));
            });
        });
    };

    window.ProductsService = new ProductsService();
})(window);



