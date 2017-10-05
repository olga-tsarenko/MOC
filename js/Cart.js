(function () {
    Cart = function () {
        this.totalAmount = 0;
        this.items = [];
    };

    var StartCount;

    Cart.prototype.addToCart = function (product) {

        itemID = this.items.findIndex(function (currentProduct) {

            return currentProduct.id === product.id;
        });

        if (itemID == -1) {
            product.count = 1;
            this.items.push(product);

        } else {
            product.count += 1;

        }
        StartCount = 0;
        this.items.forEach(function (item) {
            StartCount += (item.price * item.count * 100);

        });
        this.totalAmount = (StartCount) / 100;
    };


    Cart.prototype.RemoveCartItem = function (product) {
        itemID = this.items.findIndex( function(currentProduct) {
            return currentProduct.id === product.id;
        });

        this.items.splice(itemID, 1);
        if (!Cart.items.length) {
            this.totalAmount = 0;
        }
        else {
            StartCount = 0;
            this.items.forEach(function(item) {
                StartCount += (item.price * item.count * 100);

            });
            this.totalAmount = (StartCount) / 100;
        }
    };

    this.Cart = new Cart();





})();


