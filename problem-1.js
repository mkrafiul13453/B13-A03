function newPrice(currentPrice , discount ) {
    if(typeof currentPrice!=="number"){
        return "Invalid";
    }
    if(typeof discount!=="number" || discount < 0 || discount > 100){
        return "Invalid";
    }
    const discountAmount= (currentPrice * discount) / 100;
    const afterDiscountPrice=currentPrice-discountAmount;
    const finalPrice=afterDiscountPrice.toFixed(3);
    return finalPrice;
}

const price=newPrice(1500,20);
console.log(price);
