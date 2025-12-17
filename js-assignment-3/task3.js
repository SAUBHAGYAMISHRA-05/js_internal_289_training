// ========== TASK 3: Shopping Cart ==========

console.log("\n=== Task 3: Shopping Cart ===");

// Creating shopping cart object
let cart = {
    item: "Laptop",
    price: 45000,
    quantity: 2
};

// Method 1: Direct calculation
const totalBill1 = cart.price * cart.quantity;
console.log(`Method 1 - Total Bill: ₹${totalBill1}`);

// Method 2: Using object method
cart.calculateTotal = function() {
    return this.price * this.quantity;
};
console.log(`Method 2 - Total Bill: ₹${cart.calculateTotal()}`);

// Method 3: Detailed invoice
console.log("\n=== SHOPPING INVOICE ===");
console.log(`Item: ${cart.item}`);
console.log(`Price per unit: ₹${cart.price}`);
console.log(`Quantity: ${cart.quantity}`);
console.log(`Total Amount: ₹${cart.price * cart.quantity}`);

// Method 4: With discount calculation
const discount = 10; // 10% discount
const discountedTotal = totalBill1 - (totalBill1 * discount / 100);
console.log(`\nWith ${discount}% discount: ₹${discountedTotal}`);

// Method 5: Creating multiple cart items
let cartItems = [
    {item: "Laptop", price: 45000, quantity: 1},
    {item: "Mouse", price: 500, quantity: 2},
    {item: "Keyboard", price: 1200, quantity: 1}
];

const grandTotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log("\n=== MULTIPLE ITEMS CART ===");
cartItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item.item}: ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}`);
});
console.log(`Grand Total: ₹${grandTotal}`);