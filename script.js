function addToList(name) {
    let Total = Number(document.getElementById('Total').value);
    let Price = Number(name);
    let ulElement = document.querySelector('#myEl');
    let liElement = document.createElement('li');

    let plus = Total + Price;

    // alert(plus);

    document.getElementById('Total').value = plus

    liElement.textContent = name;

    ulElement.appendChild(liElement);
}


document.getElementById('To').addEventListener('click', function(){
    let Total = Number(document.getElementById('Total').value);
    let Rub = Number(prompt('กรอกจำนวนเงินที่รับมา'))
    let Del = Rub - Total ;
    //alert(`ทอนเงินเป็นจำนวน : ${Del}`);
    Swal.fire(
        'ทอนเงินจำนวน',
        `${Del}`,
        'success'
    )
    window.location.reload(true)
})
