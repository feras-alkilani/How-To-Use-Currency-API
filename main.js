fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b19f5dd30d81462c84de7374101e78b5") .then((result) => {
    console.log(result)
    
    let myData = result.json();
    console.log(myData);

    return myData;
})
.then ((currency) => {



    let amount = document.querySelector(".amount");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");
    let sypPrice = document.querySelector(".syr span");

    egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);
    sypPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SYP"]);


    console.log(currency.rates["EGP"]);
    console.log(currency.rates["SAR"]);

});
