module.exports = class ShoppingCart {
    constructor() {
        this.cart = []
    }
    getItems() {
        return this.cart
    }
    addItem(itemName, quantity, price) {
        return this.cart
            .push({name: itemName, 
                quantity: quantity, 
                pricePerUnit: price})
    }
    clear() {
        return this.cart = []
    }
    total() {
        return this.cart
            .map(items => items.quantity * items.pricePerUnit)
            .reduce((totalItems, currentItem) => totalItems + currentItem, 0)
    }
}
