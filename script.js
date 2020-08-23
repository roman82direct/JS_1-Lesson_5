var main = document.getElementsByTagName('main')[0];
main.style = 'display: flex;'
            + 'justify-content: center;'
            + 'align-items: center;'
            + 'height: 100vh;';

var table = document.createElement('table');
table.style.borderCollapse = 'collapse';
main.insertAdjacentElement('afterBegin', table);
var tr = document.getElementsByTagName('tr');
    for (var i = 0; i <=9; i++){
        table.insertRow();
        for (var j = 0; j <= 9; j++){
            var td = document.createElement('td');
            td.innerHTML = i + '-' + j;
            // td.style.border = '1px solid #000';
            tr[i].appendChild(td);
                if (j % 2 == 0 && i % 2 != 0 || j % 2 != 0 && i % 2 == 0){
                    td.style.backgroundColor = '#555';
                }
        }
    }