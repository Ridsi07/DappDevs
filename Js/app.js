
function myFunction() {

    var x = document.getElementsByClassName("display");
	var y = document.getElementsByClassName("list");
	document.getElementById("list1").style.cssFloat = "right";
	document.getElementById("list1").style.marginLeft = "auto";
	document.getElementById("list1").style.marginRight = "auto";
    var i;
    for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") 
	{
        x[i].style.display = "block";
		y[i].style.cssFloat = "none";
		y[i].style.display = "block";
		
    } 
	else {
        x[i].style.display = "none";
    }
   }
}