// //0
// // undefined
// // ''
// // Nan
// // null
// // false
//
// // || возвращает либо первый true, либо последний false
//
// console.log(1 || false || true || {} || 654654)    //как только находит первый true? компилить перестает
//
// console.log(" " || 0 || (7 || null))  //вернет пробел
//
// console.log([] + null + 1)   //null1
//
// console.log(false || 0 || (7 || null))   //вернет 7
//
// console.log('foo' + +'bar')  //fooNaN
//
// console.log(false || +"0" || 7)  //7
//
// console.log(+'0')  //0
//
// console.log(!!'false' == !!'true')   //true
//
// if (5 || 0 || 6) {
//     console.log('this is true')
// } else 'this is false'
//
// if (null || 0 || 6) {
//     console.log('this is true')
// } else 'this is false'
//
//
// // && возвращает первое false или последнее true
// console.log(4 && 5)  //5
//
// if (null && 0 && 6) {
//     console.log('this is true')
// } else console.log('this is false')
//
// let userData = {
//     email: '',
//     password: 'sgsdfghsdh'
// }
// if (userData.email && userData.password) {
//     console.log('login')
// } else console.log('this user does not exist')
//
//
// console.log(!!false)
// console.log(!!true)
// console.log(!!'hello')
// console.log(!!'false' == !!'true')  //true
// console.log(!!false == !!true)      //false
//
//
// // ++a a++ --a a--
//
// let a = 1
// let b = a++
// console.log(a++)
// console.log(a)
// console.log(b)
//
// let c = 1
// let d = --c
//
// console.log(c)
// console.log(d)
//
// console.log(5 && false || null && 0)  //(5 && false) || (null && 0) //возвращает последний false - null
//

function solution(str) {
    let strArr = str.split('')
    strArr.reverse()
    str = strArr.join('')
    return str
}

console.log(solution('Hello'))