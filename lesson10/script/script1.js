// Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта. Вывести массив в консоль.

let form = document.forms.product_form; //поиск формы по name
let productArray = [];

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let fname = form.querySelector('.name_input');
	let price = form.querySelector('.price_input');
	// console.log(`Товар: ${fname.value}`);
	// console.log(`Цена: ${price.value}`);
	let product = {
		title: fname.value,
		price: Number(price.value),
	};
	productArray.push(product);
	console.log(productArray);
	form.reset();
});
