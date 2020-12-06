var entry=document.getElementById("btn");
entry.addEventListener("click",displayPatient);

var row=1;

function displayPatient(){
    var pname=document.getElementById("pname").value;
    var add=document.getElementById("add").value;
    var mobile=document.getElementById("mobile").value;
    var problem=document.getElementById("problem").value;
    
    console.log(problem);
    if(!pname||!add||!mobile||!problem){
        alert("Please fill the fields!")
        return;
    }
    var display=document.getElementById("display");

    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);

    cell1.innerHTML=1;
    cell2.innerHTML=pname;
    cell3.innerHTML=add;
    cell4.innerHTML=mobile;
    cell5.innerHTML=problem;
cell6.innerHTML=`<a href="#" target="_blank" onClick="onDelete(this)">x</a>`;
    row++;
    function onDelete(){
        document.getElementById("display").deleteRow(newRow.rowIndex);
    }




    
    //  console.log(problem);

}