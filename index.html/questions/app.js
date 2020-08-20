//const btn = document.querySelectorAll('.btn');



/*
btn.forEach(item =>{
	item.addEventListener('click',function(e){
const question = e.currentTarget.parentElement.parentElement;


question.classList.toggle('show-text');

item.classList.toggle('active');

if(question !== )

			

	})

})

*/
const questions = document.querySelectorAll('.questions');

questions.forEach(question =>{

	const btn = question.querySelector('.btn');

	btn.addEventListener('click',function(){

		questions.forEach( item=>{

			if(item !== question){
				item.classList.remove('show-text');
			}
		})
		question.classList.toggle('show-text');

	})
})