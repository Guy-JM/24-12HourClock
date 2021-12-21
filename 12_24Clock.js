

//12 hour clock
function currentTime12(){
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let session = "AM";

	if (hh== 0) {
		hh = 12;
	}

	if (hh > 12) {
		hh == hh - 12;
		let session = "PM"
	}
	




	hh = (hh < 10 ) ? "0" + hh :hh;
	mm = (mm < 10 ) ? "0" + mm :mm;
	ss = (ss < 10 ) ? "0" + ss :ss; 

	let time = hh + ":" + mm + ":" + ss;


	document.getElementById("clock").innerText = time;

	var t = setTimeout(function(){ currentTime12() }, 1000);




}
currentTime12();


//24 hour clock
function currentTime24(){
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let session = "AM";

	const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10 ) ? "0" + hh :hh;
	mm = (mm < 10 ) ? "0" + mm :mm;
	ss = (ss < 10 ) ? "0" + ss :ss; 

	let time = hh + ":" + mm + ":" + ss;

	document.getElementById("clock").innerText = time;

	var t = setTimeout(function(){ currentTime24() }, 1000);




}
currentTime24();



















