var expName = document.getElementById('name');
var date = document.getElementById('date');
var amount = document.getElementById('amount');
var table = document.getElementById('table');
// -- Button to add a row --
var addButton = document.getElementById('AddButton');


// -- event ot add a row --
addButton.addEventListener('click',addFunc);
// -- event to remove a row on button  --
table.addEventListener('click', delEntry);

// -- function to add a row on clickig add button --
function addFunc(e)
{

    if (expName.value != "" && date.value != "" && amount.value != "")
    {  
        var tableRow = document.createElement('tr');
        tableRow.id='row';

        var cName = document.createElement('td');
        var cDate = document.createElement('td');
        var cAmount = document.createElement('td');
        var btnRow = document.createElement('td');
        
        var delBtn = document.createElement('button');
        delBtn.className = "btn btn-danger del";
    
        delBtn.appendChild(document.createTextNode('X'));

        

        btnRow.appendChild(delBtn);

        cName.appendChild(document.createTextNode(expName.value));
        cDate.appendChild(document.createTextNode(date.value));
        cAmount.appendChild(document.createTextNode(amount.value));

        tableRow.appendChild(cName);
        tableRow.appendChild(cDate);
        tableRow.appendChild(cAmount);
        tableRow.appendChild(btnRow);

        table.append(tableRow);
    }

    else
    {
        alert("Please Fill all the fields");
    }
   
    
}
// -- function to remove row on clicking X button --
function delEntry(e)
{   

    if (e.target.classList.contains('del'))
    {
        if (confirm("Are You Sure?"))
        {
            var row = e.target.parentElement.parentElement;
            table.removeChild(row);
        }
        
    }
    
        

}
