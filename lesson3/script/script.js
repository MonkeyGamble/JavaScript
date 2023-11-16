// let users = [
// 	['John', 'Smith', 23],
// 	['Lily', 'Hardy', 45],
// 	['Bob', 'Brown', 16],
// ]

// console.log(users[1])

// console.log(users[1][1]) //выводим элемент с индексом 1 из массива с индексом 1

// console.log(users[2][2])

// let product = [
// 	['iphone X', 900, ['blue', 256, 48]],
// 	['iphone XR', 800, ['black', 128, 48]],
// ]

// console.log(product[1][2][0])

// for (let i = 0; i < users.length; i++) {
// 	for (let j = 0; j < users[i].length; j++) {
// 		console.log(users[i][j])
// 	}
// }

// //0,1,2
// for (let i = 0; i <= 5; i++) {
// 	console.log(i)
// 	if (i == 2) {
// 		break
// 	}
// }

// //0,1
// for (let i = 0; i <= 5; i++) {
// 	if (i == 2) {
// 		break
// 	}
// 	console.log(i)
// }

// //0,1,3,4,5
// for (let i = 0; i <= 5; i++) {
// 	if (i == 2) {
// 		continue
// 	}
// 	console.log(i)
// }

// let num = 5

// // >0 %3==0

// if (num > 0 && num % 3 == 0 && num % 5 == 0) {
// 	console.log('true')
// } else {
// 	console.log('false')
// }

// let num = 15

// if (num > 0 || num % 3 == 0 || num % 5 == 0) {
// 	console.log('true')
// }

for (let i = 100; i < 1000; i += 5) {
	if (i % 3 == 0) {
		console.log(i)
	}
}
