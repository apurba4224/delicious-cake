function maxinarray(number) {
    let largest = number[0];
    for (let i = 0; i < number.length; i++) {
        const index = [i];
        const element = number[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;

}
const height = [10, 20, 46, 58, 53, 45, 74];
const tallest = maxinarray(height);
console.log(tallest);