type ExchangeRateT13Type={
    currency:string;
    value:number;
}

let ExchangeRateT13:ExchangeRateT13Type[]=[
    {
        currency:'USD',
        value:25,
    },
    {
        currency:'EUR',
        value:42,
    }
]
let exchangeT13=(sumUAH:number,currencyValues:ExchangeRateT13Type[],exchangeCurrency:string):number=>{
    if (exchangeCurrency==='USD'){
        return sumUAH/currencyValues[0].value;
    }
    if (exchangeCurrency==='EUR'){
        return sumUAH/currencyValues[1].value;
    }
    else {
        return 0;
    }
}
let RateT13=Math.round(exchangeT13(10000,ExchangeRateT13,'USD')*100)/100;
document.write(`UAN=>USD ${RateT13} <br>`);
RateT13=Math.round(exchangeT13(10000,ExchangeRateT13,'EUR')*100)/100;
document.write(`UAN=>EUR ${RateT13}`);

