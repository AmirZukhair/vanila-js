const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');


slides.forEach(function(slider,index){
	
  slider.style.cssText = `top: ${index * 100}%`;

});
let counter = 0;

nextBtn.addEventListener('click', function(){
	counter++;
	carousel();
	
})
prevBtn.addEventListener('click', function(){
	counter--;
	carousel();
})

function carousel(){
	/*
	if(counter === slides.length){
		counter = 0;
	} 
	if(counter < 0){
		counter = slides.length -1;
	}
	*/
	if(counter < slides.length -1){
		nextBtn.style.display = 'block';
	} else{
		nextBtn.style.display = 'none';
	}

	if(counter > 0){
		prevBtn.style.display = 'block';
	} else{
		prevBtn.style.display = 'none';
	}
	slides.forEach(slider=>{
		slider.style.transform = `translateY(-${counter * 100}%)`;
	})
}


