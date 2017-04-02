function calc() {
	var num = document.getElementById("num").value;
	var multi = document.getElementById("multi").value;
	console.log(num +" * "+multi);
	document.getElementById("ans").innerHTML = num*multi;
}

function calcN() {
	var num = parseInt(document.getElementById("num").value);
	var per = document.getElementById("twoSsPer").value;
	var ans = 0;

	var workspace = document.getElementById("working");
	var calculations = "";

	console.log(num+1);
	for (var i = 1; i < num+1; i++) {
		ans++;
		calculations += "<div style='width:55px; float: left'>St "+i+": </div>"+ans

		if (i % per == 0) {
			ans++
			calculations += " " + ans
		}
		calculations += "<br clear='both'>"

	}
	document.getElementById("ans").innerHTML = ans;
	workspace.innerHTML = calculations;
}