var entry=document.getElementById("btn");
entry.addEventListener("click",displayPatient);//Adding Event Listener to the button element


var row=1;
//Function for getting the data from index.html
function displayPatient(){
    var pname=document.getElementById("pname").value;
    var add=document.getElementById("add").value;
    var mobile=document.getElementById("mobile").value;
    var problem=document.getElementById("problem").value;
    //console.log(problem);
    //Alert message if user have not filled all the fields
    if(!pname||!add||!mobile||!problem){
        alert("Please fill the fields!")
        return;
    }
    //Display entered data using a table
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
   //anchor tag to remove a row
  
   cell6.innerHTML=`<input type="button" style={color:red} id="delbtn" value="x" onClick="onDelete(this)"></input>`;
    
    
   
    function onDelete(roww){
        var d=roww.parentNode.parentNode.rowIndex;
        document.getElementById("display").deleteRow(d);
    }




    
    //  console.log(problem);

}