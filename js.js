function calc() {
	var num = document.getElementById("num").value;
	var multi = document.getElementById("multi").value;
	console.log(num +" * "+multi);
	document.getElementById("ans").innerHTML = num*multi;
	document.getElementById("working").innerHTML = "";
}

function calcN() {
	var num = parseInt(document.getElementById("num").value);
	var per = parseInt(document.getElementById("incrementPer").value);
	var numIncrement = parseInt(document.getElementById("numIncrement").value);
	var ans = 0;

	var workspace = document.getElementById("working");
	var calculations = "";

	for (var i = 1; i < num+1; i++) {
		ans++;
		calculations += "<div style='width:55px; float: left'>St "+i+": </div>"+ans

		if (i % per == 0) {
			// num increment - 1 because you added the first one above
			for (var j = 0; j < (numIncrement-1); j++) {
				ans++; 
				calculations += " " + ans;	
			}
		}
		calculations += "<br clear='both'>"

	}
	document.getElementById("ans").innerHTML = ans;
	workspace.innerHTML = calculations;
}