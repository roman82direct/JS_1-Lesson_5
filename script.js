var main = document.getElementsByTagName('main')[0];
main.style = 'display: flex;'
            + 'justify-content: center;'
            + 'align-items: center;'
            + 'height: 100vh;';

var table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.border = '3px solid black';
main.insertAdjacentElement('afterBegin', table);
var tr = document.getElementsByTagName('tr');
    for (var i = 0; i < 10; i++){
        table.insertRow();
        for (var j = 0; j < 10; j++){
            var tdNew = document.createElement('td');
            tdNew.innerHTML = '<p class="pole"></p>';
            tr[i].appendChild(tdNew);
                if (j % 2 == 0 && i % 2 != 0 || j % 2 != 0 && i % 2 == 0){
                    tdNew.style.backgroundColor = '#555';
                }
        }
    }

tr[0].style = 'height: 50px; background-color: #fff';
tr[9].style = 'height: 50px; background-color: #fff';
for (i = 1; i <= 8; i++){
    tr[i].style.height = '90px';
}

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var td = document.getElementsByTagName('td');
for (i = 1, k = 91; i < 9; i++, k++){
    td[i].style = 'background-color: #fff; text-align: center; font-size: 2em; border-bottom: 1px solid';
    td[k].style = 'background-color: #fff; text-align: center; font-size: 2em; border-top: 1px solid';
    td[i].innerHTML = '<p class="edge rotate">' + letters[i-1] + '</p>';
    td[k].innerHTML = '<p class="edge">' + letters[i-1] + '</p>';
}

for (i = 10; i < 90; i+=10){//формат первого и последнего столбца
    td[i].style = 'width: 50px; background-color: #fff; text-align: center; font-size: 2em; border-right: 1px solid';
    td[i+9].style = 'width: 50px; background-color: #fff; text-align: center; font-size: 2em; border-left: 1px solid';
}
for (i = 1; i < 9; i++){// ширина столбцов со второго по предпоследний
    td[i].style.width = '90px';
}

for (i = 10; i < 90; i+=10){
    td[i].innerHTML = '<p class="edge">' + (9 - i/10) + '</p>';
    td[i+9].innerHTML = '<p class=" edge rotate">' + (9 - i/10) + '</p>';
}
var rotate = document.getElementsByClassName('rotate');
for (i = 0; i < rotate.length; i++){
    rotate[i].style = 'transform: rotate(180deg);';
}

td[09].style.backgroundColor = '#fff';
td[90].style.backgroundColor = '#fff'; 


// &#9812; - белый король
// &#9813; - ферзь
// &#9814; - ладья
// &#9815; - слон
// &#9816; - конь
// &#9817; - пешка

// &#9818; - черный король
// &#9819; - ферзь
// &#9820; - ладья
// &#9821; - слон
// &#9822; - конь
// &#9823; - пешка