function bar(x) {
    if (x) {
        return x;
    }
    return 'default string';
}

const output = bar(2);
console.log(output);
console.log(typeof output);
