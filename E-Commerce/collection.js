document.addEventListener("DOMContentLoaded", function() {
    var productContainer = document.getElementById("product");
    var search = document.getElementById("search");
    var productlist = productContainer.querySelectorAll(".product-box p");

    search.addEventListener("keyup", function(event) {
        var enteredValue = event.target.value.toUpperCase();

        for (var count = 0; count < productlist.length; count++) {
            var productname = productlist[count].textContent.toUpperCase();

            if (productname.indexOf(enteredValue) < 0) {
                productlist[count].parentNode.style.display = "none";
            } else {
                productlist[count].parentNode.style.display = "block";
            }
        }
    });
});

