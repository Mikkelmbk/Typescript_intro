// let button: Element = document.querySelectorAll('.testButton')[0];
let input = document.querySelector('.testInput') as HTMLInputElement;


document.querySelectorAll('.testButton')[0].addEventListener('click',(e):void =>{
	e.preventDefault();
	console.log(input.value);
});


