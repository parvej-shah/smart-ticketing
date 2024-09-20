function setInnerTextById(elementId,value){
    document.getElementById(elementId).innerText = value;
}
function getInnerTextById(elementId){
 return document.getElementById(elementId).innerText;
}
function setTotalPrice(totalSeat){
    return Number(totalSeat)*550;
}
function varifyCupon(cupon){
    const cupon1 = 'new15';
    const cupon2 = 'couple20';
    if(cupon.toLowerCase()===cupon1 || cupon.toLowerCase()===cupon2){
        return true;
    }
    else{
        return false;
    }
}