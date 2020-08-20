const reviews = [


{
	id: 1,
	name: 'Amir Zukhair',
	job: 'front-end',
	img: 'img/icon1.png',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident optio dolorum quos non expedita, ad architecto minus voluptatum praesentium. Possimus!',

},

{
	id: 1,
	name: 'Nazar Skuba',
	job: 'candie man',
	img: 'img/icon2.png',
	text: 'Just Lorem Bla bla bla bla and more bla bla bla hahahahha write book see mountain Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, alias.',

},

{
	id: 2,
	name: 'Illia Voda',
	job: 'game tester',
	img: "img/icon3.png",
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident optio dolorum quos non expedita, ad architecto minus voluptatum praesentium. Possimus!',

},


{
	id: 2,
	name: 'American Sniper',
	job: 'NBA player',
	img: 'img/icon4.png',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident optio dolorum quos non expedita, ad architecto minus voluptatum praesentium. Possimus!',

}



];


let img = document.querySelector('#person-img');
let author = document.querySelector('.author');
let job = document.querySelector('.job');
let text = document.querySelector('.text');
let btnL = document.querySelector('.button-left');
let btnR = document.querySelector('.button-right');
let btnRand = document.querySelector('.random-btn');


let currentItem = 0;



window.addEventListener('DOMContentLoaded', function(){
 showPerson(currentItem);
})


function showPerson(person) {
  const item = reviews[person];
   img.src =  item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   text.textContent = item.text;

}

//show next person
btnR.addEventListener('click',function(){
	currentItem++;
	if(currentItem > reviews.length -1){
		currentItem = 0;
	}
	if(currentItem == 3){
		img.style.cssText = `background: linear-gradient(red,transparent)`;
	} else{
		img.style.cssText = ' background-color: transparent';

	}
	showPerson(currentItem);
});

//show prev person

btnL.addEventListener('click',function(){
	currentItem--;
	if(currentItem < 0){
		currentItem = reviews.length -1;
	}

	if(currentItem == 3){
		img.style.cssText = `background: linear-gradient(transparent,red)`;
	} else{
		img.style.cssText = ' background-color: transparent';

	}
	showPerson(currentItem);
});
//show random person
btnRand.addEventListener('click',function(){
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
	if(currentItem == 3){
		img.style.cssText = `background: linear-gradient(red,transparent)`;
	} else{
		img.style.cssText = ' background-color: transparent';

	}
})