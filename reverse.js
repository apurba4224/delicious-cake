function reverseString(text) {
    let reverse = '';
    for (let i = 0; i <= text.length; i++) {
        const element = text[i];
        reverse = reverse + element;
        console.log(element, reverse);
    }
    return reverse;
}
const input = 'I am a good Stdent'
const output = reverseString(input);
console.log(output);