const allSeats = document.getElementsByClassName('seat');
let seatCount = 0;
/* looking for seats */
for(const seat of allSeats){
    seat.addEventListener('click',function(){
        seatCount++;
        /* updating seat count */
        setInnerTextById('seat-count',seatCount);
        /* changing selected seat color */
        seat.classList.remove('bg-primary-text/5');
        seat.classList.add('bg-primary-bg');
        seat.classList.remove('text-primary-text/50');
        seat.classList.add('text-white');
        /* showing selected seat */
        const selectedSeatUpdate = document.getElementById('selected-seat-update');
        document.getElementById('no-seat-selected').classList.add('hidden');
        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('justify-between');
        div.classList.add('mt-3');
        const p1 = document.createElement('p');
        p1.innerText = seat.innerText;
        div.appendChild(p1);
        const p2 = document.createElement('p');
        p2.innerText = 'Ecomony';
        div.appendChild(p2);
        const p3 = document.createElement('p');
        p3.innerText = '550';
        div.appendChild(p3);
        selectedSeatUpdate.appendChild(div);
        /* setting Total Price */
        setInnerTextById('total-price',setTotalPrice(seatCount));
        setInnerTextById('grand-total-price',setTotalPrice(seatCount));
    })
}
/* checking discount */
document.getElementById('buy-ticket-btn').addEventListener('click',function(){
    const cupon = document.getElementById('cupon-input').value;
    if(varifyCupon(cupon)){
        if(cupon.toLowerCase()==='new15'){
            const grandPrice =Number(document.getElementById('grand-total-price').innerText) - Number(document.getElementById('grand-total-price').innerText)*0.15;
            setInnerTextById('grand-total-price',grandPrice);
        }
        else if(cupon.toLowerCase()==='couple20'){
            const grandPrice = Number(document.getElementById('grand-total-price').innerText) - Number(document.getElementById('grand-total-price').innerText)*0.20;
            setInnerTextById('grand-total-price',grandPrice);
        }
    }else{
        setInnerTextById('grand-total-price',getInnerTextById('grand-total-price'))
    }
})
/* hide modal */
function hideModal(){
    document.getElementById('my_modal_1').classList.add("hidden");
    location.reload();
}