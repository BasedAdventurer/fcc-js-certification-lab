// function processInput(input) {
//   if (typeof input !== "string") {
//     throw new TypeError("Input must be a string.");
//   }

//   return input.toUpperCase();
// }

// try {
//   console.log("Starting to process input...");
//   const result = processInput(9);
//   console.log("Processed result:", result);
// } catch (error) {
//   console.error("Error occurred:", error.message);
// }

function calculateTotalPrice(price, discountPercentage) {
 debugger
 let discountAmount = (price * discountPercentage) / 100
 let totalPrice = price - discountAmount

 console.log(`Original Price: ${price}`)
 console.log(`Discount Amount: ${discountAmount}`)
 console.log(`Total Price after Discount: ${totalPrice}`)

 return totalPrice
}

let price = 100
let discount = 15

let finalPrice = calculateTotalPrice(price, discount)
console.log(`Final Price: ${finalPrice}`);
