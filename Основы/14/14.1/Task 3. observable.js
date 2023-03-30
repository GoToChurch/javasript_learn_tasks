let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function(handler) {
        this[handlers].push(handler);
    };

    return new Proxy(target, {
        set(target, p, value, receiver) {
            let result = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
            if (result) {
                target[handlers].forEach(handler => handler(p, value));
            }
            return result;
        }
    })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John";