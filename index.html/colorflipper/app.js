

const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
let body = document.querySelector('body');
let btn = document.querySelector('button');
let hx = document.querySelector('#hex');

function changeColor(){
  let hex = '#';

	for(let i = 0; i < 6; i++){
		hex+= colors[randomColor()];   
	}
        body.style.backgroundColor = hex;
        hx.innerHTML = hex;
}



btn.addEventListener('click',changeColor);

function randomColor(){
	return Math.floor(Math.random() * colors.length);
}