(function () {
    Cart = function () {
        this.totalAmount = 0;
        this.items = [];

    };


    Cart.prototype.addToCart = function (product) {
        // console .log(product);
        itemID = this.items.findIndex((currentProduct) => {

            return currentProduct.id === product.id;
        });

        if (itemID == -1) {
            product.count = 1;
            this.items.push(product);

        } else {
            alert('This Product is already in Your Cart! Add one more?')
            product.count += 1;

        }

        this.items.forEach((item) => {
            this.totalAmount += (item.price * item.count);

        });
    };



    Cart.prototype.RemoveCart = function (product) {
        itemID = this.items.findIndex((currentProduct) => {
            return currentProduct.id === product.id;
        });

        if (itemID == 0) {
            console.log('rere')
            this.items.splice(itemID, 1);

        } else {
            product.count -= 1;
        }

        this.items.forEach((item) => {
            this.totalAmount += (item.price * item.count);

        });
    };

    this.Cart = new Cart();


})();