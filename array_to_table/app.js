
function add() {
	var array =[['a','b','c'],
              ['d','e','f'],]

 var table = document.getElementById("table");
 for( var i = 0; i<array.length; i++)
 {
    var row = table.insertRow(table.length);
    for(var j= 0; j <array[i].length; j++)
    {
    	var cell = row.insertCell(j);
    	cell.innerHTML = array[i][j];
    }
   }



 //  alert("Hello! I am an alert box!!");
}