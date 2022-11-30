
document.querySelector("#place-order").addEventListener("click", function(){
    localStorage.removeItem("cart")

    document.getElementById("order-message").innerText = "Your order is successfully placed"
})

