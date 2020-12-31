var expName = document.getElementById('name');
var date = document.getElementById('date');
var amount = document.getElementById('amount');
var addButton = document.getElementById('AddButton');

console.log(expName,date,amount);

addButton.addEventListener('click',addFunc);

function addFunc(e){

    var table = document.getElementById('table');
    var tableRow = document.createElement('tr');

    var cName = document.createElement('td');
    var cDate = document.createElement('td');
    var cAmount = document.createElement('td');

    cName.appendChild(document.createTextNode(expName.value));
    cDate.appendChild(document.createTextNode(date.value));
    cAmount.appendChild(document.createTextNode(amount.value));

    tableRow.appendChild(cName);
    tableRow.appendChild(cDate);
    tableRow.appendChild(cAmount);


    table.append(tableRow);
}
