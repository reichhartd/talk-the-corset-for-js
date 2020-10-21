function bar(x) {
    if (x) {
        return x;
    }
    return 'default string';
}

const output: string = bar(2);
console.log(output);
