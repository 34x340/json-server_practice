// try {
//     console.log('Виконання коду в середині try...catch')
//     userName;
//     console.log('Код пілся userName')  
// } catch (error) {
//     console.log('Помилка')
// }
// console.log('Код після try...catch')

const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд повернув якусь нісенітницю }';

try {
    const parse = JSON.parse(validJSON)
    console.log(parse)
} catch (error) {
    console.log(validJSON)
}

try {
    const parseInvalid = JSON.parse(invalidJSON)
    console.log(parseInvalid)
} catch (error) {
    console.log(error)
}  