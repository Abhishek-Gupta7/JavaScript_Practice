function getUserId(id,placeOrder){
    return placeOrder(id,payment);
}

getUserId(2,placeOrder);


function placeOrder(id,payment){
    console.log("Order is Place for user : ",id);
    let orderId = 10;
    return payment(orderId,summaryOfOrder);
}
function payment(orderId,summaryOfOrder) {
    console.log("Payment amount for order id :",orderId);
    let paymentId = 7;
    return summaryOfOrder(paymentId);
}

function summaryOfOrder(paymentId) {
    console.log("Summary",paymentId);
}