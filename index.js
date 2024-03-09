//javascript is synchronous single threaded language

//callback function is to set the timeout and given the time in millyseconds 

setTimeout(function () {
    console.log("javascript");
}, 5000);

const cart = ["pants", "shoes", "kurthas"]

api.createOrder(cart, function () {

    api.porceedToPayment(function () {

        api.showOrderSummery(

            function () {
                api.showOrderSummery()
            }
        )
    })
})



