function work(a, b) {
    console.log(a + b);
}

function spy(func) {
    function f(...args) {
        f.calls.push(args);
        return func.apply(this, args);
    }

    f.calls = [];
    
    return f;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}