let counterText = document.querySelector('#counter');
let btnPlus = document.querySelector('#countPlus');
let btnMinus = document.querySelector('#countMinus');

let count = 0;



btnPlus.addEventListener('click', incrementCounter);
btnMinus.addEventListener('click', decrementCounter);



function incrementCounter() {
	count++;
	counterText.innerHTML = count;
	if (count > 0) {
		counterText.style.color = 'green';

	} else if(count === 0){
        counterText.style.color = 'white';
	}

	Animation();
}

function  decrementCounter (){
	count --;
	counterText.innerHTML = count;
	if (count < 0) {
		counterText.style.color = 'red';

	}else if(count === 0){
        counterText.style.color = 'white';
	}

	Animation();
}

function Animation () {
	counterText.animate([{opacity:'0.0'},{opacity: '1.0'}],{duration:500,fill: 'forwards'})
}