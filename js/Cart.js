(function () {
    Cart = function () {
        this.totalAmount = 0;
        this.items = [];

    };

    var StartCount;

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
        var StartCount = 0;
        this.items.forEach((item) => {
            StartCount += (item.price * item.count * 100);
            console.log(StartCount);

        });
        this.totalAmount = (StartCount) / 100;
    };


    Cart.prototype.RemoveCartItem = function (product) {
        itemID = this.items.findIndex((currentProduct) => {
            return currentProduct.id === product.id;
        });

        this.items.splice(itemID, 1);
        if (!Cart.items.length) {
            this.totalAmount = 0;
        }
        else {
            var StartCount = 0;
            this.items.forEach((item) => {
                StartCount += (item.price * item.count * 100);
                console.log(StartCount);

            });
            this.totalAmount = (StartCount) / 100;
        }

    };

    this.Cart = new Cart();



})();


