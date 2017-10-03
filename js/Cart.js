(function () {
    Cart = function () {
        this.totalAmount = 0;
        this.items = [];

    };
    var TotalItemValue;

    var y = 0;
    Cart.prototype.addToCart = function (product) {
        // console .log(product);
        itemID = this.items.findIndex((currentProduct) => {

            return currentProduct.id === product.id;
        });

        if (itemID == -1) {
            product.count = 1;
            this.items.push(product);


        } else {
            // alert('This Product is already in Your Cart! Add one more?')
            product.count += 1;

        }

        this.items.forEach((item) => {

            var b = parseFloat(item.price);

            x = (b * item.count);
            console.log(x);
            z= (y += x);
            console.log(z);
            this.totalAmount = z ;
        });



    };

    //
    // Cart.prototype.RemoveCart = function (product) {
    //     itemID = this.items.findIndex((currentProduct) => {
    //         return currentProduct.id === product.id;
    //     });
    //
    //     this.items.splice(itemID, 1);
    //     if (!Cart.items.length) {
    //         this.totalAmount = 0;
    //     }
    //     else {
    //         this.items.forEach((item) => {
    //             this.totalAmount -= (item.price * item.count);
    //         });
    //     }
    //
    // };

    this.Cart = new Cart();

})();


