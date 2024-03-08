//your JS code here. If required.
const container = document.querySelector(".container");

for(let i=1;i<=10;i++){
	const div = document.createElement('div');
	div.id = `div${i}`;
	div.innerText = i;
	div.style.backgroundColor = 'green';
	div.style.color = '#ffffff';
	div.style.fontSize = '4vw';
	container.appendChild(div);
}