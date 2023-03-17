console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form was Submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover',() =>{
	alert('Your hair looks great today!')
})