let cartArray = JSON.parse(localStorage.getItem("arrakCart"))

console.log(cartArray[0]);


let itemPrice = 0;
let item = 0;

for (let i = 0; i < cartArray.length; i++) {
    document.getElementById("cartLoad").innerHTML += `
                                        <hr class="my-4">
                                        <div class="row mb-4 d-flex justify-content-between align-items-center">
                                            <div class="col-md-2 col-lg-2 col-xl-2">
                                                <img src="${cartArray[i].img}"
                                                    class="img-fluid rounded-3" alt="Cotton T-shirt">
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-3">
                                                <h6 class="mb-0">${cartArray[i].title}</h6>
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i class="fas fa-minus"></i>
                                                </button>

                                                <input id="form1" min="0" name="quantity" value="${cartArray[i].quantity}" type="number"
                                                    class="form-control form-control-sm" />

                                                <button data-mdb-button-init data-mdb-ripple-init
                                                    class="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i class="fas fa-plus"></i>
                                                </button>
                                            </div>
                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 class="mb-0">Rs.${cartArray[i].price}.00</h6>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                                            </div>
                                        </div>
`
    itemPrice += cartArray[i].price * cartArray[i].quantity;
    item += cartArray[i].quantity

}

let discountPrice = itemPrice * 0.2;
let totalPrice = itemPrice - discountPrice;

document.getElementById("itemQty").innerText = item + "  items"
document.getElementById("summryQty").innerText = item + "  items"
document.getElementById("itemPrice").innerText = "Rs." + itemPrice + ".00"
document.getElementById("discountPrice").innerText = "Rs." + discountPrice + ".00"
document.getElementById("totalPrice").innerText = "Rs." + totalPrice + ".00"
