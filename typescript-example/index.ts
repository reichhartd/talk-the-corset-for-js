function foo(x) {
    if (x) {
        return x;
    }
    return 'default string';
}

const bar = foo(2);
console.log(bar);
