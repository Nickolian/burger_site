//document.getElementsByClassName("main-title")[0].style.color = "red"

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        })
        alert("Спасибо за заказ. С вами скоро свяжутся!")
    }

}


let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let current_currency = e.target.innerText;

    let new_currency = "$";
    let x = 1;

    if (current_currency === "$") {
        new_currency = "₽";
        x = 96;
    } else if (current_currency==="₽") {
        new_currency = "BYN";
        x = 3;
    } else if (current_currency==="BYN") {
        new_currency = "€";
        x = 0.9;
    } else if (current_currency==="€") {
        new_currency = "¥";
        x = 6.9;
    }

    e.target.innerText = new_currency

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * x).toFixed(1) + " " + new_currency;
    }
}