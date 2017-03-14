function showPara(event) {
	//bar Value Setter
	document.getElementById('bulb').style.top = window.innerHeight / 2 - 25 + 'px';
	document.getElementById('bulb').style.left = window.innerWidth / 2 - 25 + 'px';
	//X,Y Value Setter
	document.getElementById('xxx').textContent = event.clientX;
	document.getElementById('yyy').textContent = event.clientY;
	//bar Value Setter
	document.getElementById('damping').innerHTML = document.getElementById('dampingbar').value;
	
	var startT = Date.now();
	var startX = event.clientX;
	var startY = event.clientY;
	var endT = startT;
	console.log(startX+","+endX);
	while (endT < startT + 10) {
		endT = Date.now();
	}
	var endX = event.clientX;
	var endY = event.clientY;
	var distance = Math.sqrt(Math.pow((endX - startX), 2) + Math.pow((endY - startY), 2));
	var velocity = distance/100;
	console.log(endT - startT);
	console.log(startX+","+endX);
	
	//velcocity Setter
	document.getElementById('vel').innerHTML = velocity;
}
