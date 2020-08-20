// select items 

const alert = document.querySelector('.alert');
const form = document.querySelector('.form-list');
const list = document.querySelector('#list');
const submitBtn = document.querySelector('.btn-submit');

const container = document.querySelector('.todo-container');
const containerList = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');


// select edits 

let editElement;
let editFlag = false;
let editID = '';


form.addEventListener('submit',addItem);
clearBtn.addEventListener('click', clearItems);

//load items
window.addEventListener('DOMContentLoaded',setupItems);

function addItem(e){
	e.preventDefault();
	const value = list.value;

	const id = new Date().getTime().toString();
	if(value  && !editFlag){
		createItemList(id,value);
					//display alert 
					displayAlert('item added to the list','nodanger');
					//show container 
					container.classList.add('active');

					//add to local Storage

					addToLocalStorage(id,value);

					//set back to defauld
					setbackToDefauld();


	}
	else if(value  && editFlag ){
		editElement.innerHTML = value;
		displayAlert('value changed ', 'nodanger');

		editLocalStorage(editID,value);
		setbackToDefauld();
	}
		else{
			
displayAlert('please enter value', 'danger');
		}
}

//Display alert
function displayAlert(text,action){
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);
	//remove alert
	setTimeout(function(){
		alert.textContent = '';
	alert.classList.remove(`alert-${action}`);
	}, 1000);
}


//clear items 


function clearItems(){
	const items = document.querySelectorAll('.todo-item');
	if(items.length > 0 ){
		items.forEach(item=>{
			containerList.removeChild(item);
		})
	}
	container.classList.remove('active');
	setbackToDefauld();
	displayAlert('list is empty', 'danger' );

	 localStorage.removeItem('list');
}

//delete functuion
function deleteItem(e){
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	containerList.removeChild(element);
	if(containerList.children.length === 0){
		container.classList.remove('active');
	}
	displayAlert('item removed', 'danger');
	setbackToDefauld();

	//removeFromLocalStorage(id);
}
//edit function//
function editItem(e){
	const element = e.currentTarget.parentElement.parentElement;
	//set edit item 
	editElement = e.currentTarget.parentElement.previousElementSibling;

	list.value  = editElement.innerHTML;
	editFlag  = true;
	editID = element.dataset.id;
	submitBtn.textContent = 'edit';
}
//set back to default 
function setbackToDefauld(){
	list.value = '';
	let editFlag = false;
	let editId = '';
	submitBtn.textContent = 'submit';
}

//local storage

function addToLocalStorage(id, value){
	const grocery = {id,value};
	let items  = getLocalStorage();
	console.log(items);
 items.push(grocery);
 localStorage.setItem('list', JSON.stringify(items));

}  



function removeFromLocalStorage(id){
  let items = getLocalStorage();
  items = items.filter(item=>{
  	if(item.id !==id){
  		return item;
  	}
  })
   localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id,value){
	let items = getLocalStorage();
	items = items.map(item=>{
		if(item.id === id){
			item.value = value;
		}
		return item;
	})
	localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage(){
	return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];

	
}


//setupitems
 function setupItems(){
 	let items = getLocalStorage();
 	if(items.length > 0){
        items.forEach(item=>{
        	createItemList(item.id,item.value);
        })
        container.classList.add('active');
 	}
 }

 function createItemList(id,value){
 	const element  = document.createElement('article');
		//add class
		element.classList.add('todo-item');
		//add id
		const attr = document.createAttribute('data-id');
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = `<p class="title">${value}</p>
					<div class="btn-container">
						<button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>

						<button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
					</div>`;

					const deleteBtn = element.querySelector('.delete-btn');
					const editBtn = element.querySelector('.edit-btn');

                  deleteBtn.addEventListener('click',deleteItem);
                  editBtn.addEventListener('click',editItem);


					//append child
					containerList.appendChild(element);
 }