var LP = 0;
var clickingpower = 1;
var vaynehave = 0;
var vaynecost = 50;
var vayneupgradecost = 500;
var ashehave = 0;
var ashecost = 100;
var kaisahave = 0;
var kaisacost = 250;
var caitlynhave = 0;
var caitlyncost = 500;
var missfortunehave = 0;
var missfortunecost = 1000;
var jinxhave = 0;
var jinxcost = 2500;



function addToLP(amount) {
	LP = LP +amount;
	document.getElementById("LP").innerHTML = LP;
}

function updateLPPS() {
	LPPS = ashehave + kaisahave * 5 + caitlynhave * 10 + missfortunehave * 15 + jinxhave * 20;
	document.getElementById("LPPS").innerHTML = LPPS;
}


function buyvayne() {
	if (LP >= vaynecost) {
		LP = LP - vaynecost;
		vaynehave += 1;
		clickingpower += 1;
		vaynecost = Math.round(vaynecost * 1.15);

		document.getElementById("LP").innerHTML = LP;
		document.getElementById("vaynecost").innerHTML = vaynecost;
		document.getElementById("vaynehave").innerHTML = vaynehave;
		document.getElementById("PointsPerClick").innerHTML = clickingpower;
	}
}

function buyashe() {
	if (LP >= ashecost) {
		LP = LP - ashecost;
		ashehave += 1;
		ashecost = Math.round(ashecost * 1.15);

		document.getElementById("LP").innerHTML = LP;
		document.getElementById("ashecost").innerHTML = ashecost;
		document.getElementById("ashehave").innerHTML = ashehave;
		updateLPPS();
	}
}


function buykaisa() {
	if (LP >= kaisacost) {
		LP = LP - kaisacost;
		kaisahave += 1;
		kaisacost = Math.round(kaisacost * 1.15);

		document.getElementById("LP").innerHTML = LP;
		document.getElementById("kaisacost").innerHTML = kaisacost;
		document.getElementById("kaisahave").innerHTML = kaisahave;
		updateLPPS();
	}
}


function buycaitlyn() {
	if (LP >= caitlyncost) {
		LP = LP - caitlyncost;
		caitlynhave += 1;
		caitlyncost = Math.round(caitlyncost * 1.15);

		document.getElementById("LP").innerHTML = LP;
		document.getElementById("caitlyncost").innerHTML = caitlyncost;
		document.getElementById("caitlynhave").innerHTML = caitlynhave;
		updateLPPS();
	}
}


function buymissfortune() {
	if (LP >= missfortunecost) {
		LP = LP - missfortunecost;
		missfortunehave += 1;
		missfortunecost = Math.round(missfortunecost * 1.15);

		document.getElementById("LP").innerHTML = LP;
		document.getElementById("missfortunecost").innerHTML = missfortunecost;
		document.getElementById("missfortunehave").innerHTML = missfortunehave;
		updateLPPS();
	}
}

function buyjinx() {
	if (LP >= jinxcost) {
		LP = LP - jinxcost;
		jinxhave += 1;
		jinxcost = Math.round(jinxcost * 1.15);

		document.getElementById("LP").innerHTML = LP;
		document.getElementById("jinxcost").innerHTML = jinxcost;
		document.getElementById("jinxhave").innerHTML = jinxhave;
		updateLPPS();
	}
}
setInterval(function () {
	LP = LP + ashehave;
	LP = LP + kaisahave * 5;
	LP = LP + caitlynhave * 10;
	LP = LP + missfortunehave * 15;
	LP = LP + jinxhave * 20;
	document.getElementById("LP").innerHTML = LP;
	document.getElementById("ashecost").innerHTML = ashecost;
	document.getElementById("ashehave").innerHTML = ashehave;
	document.getElementById("kaisacost").innerHTML = kaisacost;
	document.getElementById("kaisahave").innerHTML = kaisahave;
	document.getElementById("caitlyncost").innerHTML = caitlyncost;
	document.getElementById("caitlynhave").innerHTML = caitlynhave;
	document.getElementById("missfortunecost").innerHTML = missfortunecost;
	document.getElementById("missfortunehave").innerHTML = missfortunehave;
	document.getElementById("jinxcost").innerHTML = jinxcost;
	document.getElementById("jinxhave").innerHTML = jinxhave;
	document.getElementById("PointsPerClick").innerHTML = clickingpower;
	updateLPPS();
}, 1000);