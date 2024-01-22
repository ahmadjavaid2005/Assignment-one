// Question No 6 :  E-Commerce Platform
function calculateProcessingFee(paymentMethod) {
     let processingFee;

     switch (paymentMethod) {
          case "credit":
               processingFee = 2;
               break;
          case "debit":
               processingFee = 1.5;
               break;
          case "paypal":
               processingFee = 3;
               break;
          default:
               console.log("Invalid payment method");
               return;
     }

     console.log(`Processing fee for ${paymentMethod}: ${processingFee}%`);
}

// Example usage:
const paymentMethod = "credit";
calculateProcessingFee(paymentMethod);
