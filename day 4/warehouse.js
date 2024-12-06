function checkInventory(productName, quantity) {
    if (quantity < 10) {
        console.log(`${productName}: Restock Immediately`);
    } else if (quantity >= 10 && quantity <= 20) {
        console.log(`${productName}: Stock is Low`);
    } else {
        console.log(`${productName}: Adequate stock`);
    }
}
checkInventory("Product A", 5);  // Output: Product A: Restock Immediately
checkInventory("Product B", 15); // Output: Product B: Stock is Low
checkInventory("Product C", 25); // Output: Product C: Adequate stock
