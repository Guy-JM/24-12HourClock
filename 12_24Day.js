function currentDay(){
	const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let d = new Date();
	let today = weekdays[d.getDay()];
	


	if (weekdays[d.getDay()] === "Sunday") {
		document.getElementById("zero").style.color = "#00FF97";
	}else if (weekdays[d.getDay()] === "Monday") {
		document.getElementById("one").style.color = "#00FF97";
	}else if (weekdays[d.getDay()] === "Tuesday") {
		document.getElementById("two").style.color = "#00FF97";
		
	}else if (weekdays[d.getDay()] === "Wednesday") {
		document.getElementById("three").style.color = "#00FF97";
		
	}else if (weekdays[d.getDay()] === "Thursday") {
		document.getElementById("four").style.color = "#00FF97";
		
	}else if (weekdays[d.getDay()] === "Friday") {
		document.getElementById("five").style.color = "#00FF97";
		
	}else if (weekdays[d.getDay()] === "Saturday") {
		document.getElementById("six").style.color = "#00FF97";
		
	}

}
currentDay();



