function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9-а-яА-Я]/g, '').toLowerCase();

    return str === cleanStr.split('').reverse().join('');
}

const inputStr = prompt('Введите что нибудь')
const result = isPalindrome(inputStr);
console.log(result);