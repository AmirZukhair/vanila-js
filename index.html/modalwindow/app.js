const openM = document.querySelector('.btn-modal');
const modalW = document.querySelector('.modal-overlay');
const closeM = document.querySelector('.close-btn');


openM.addEventListener('click',function(){
	modalW.classList.add('show-modal');
})


closeM.addEventListener('click',function(){
	modalW.classList.remove('show-modal');
})




