// Dynamic dispatch enables polymorphism by selecting the appropiate method to 
// based on the parameters that get passed to the method at run time


var methods = {
    init: function(args) {
        return 'initializing...';
    },
    hello: function(args) {
        return 'Hello, ' + args;
    },
    goodbye: function(args) {
        return 'Goodbye, cruel ' + args;
    }
},

greet = function greet(options) {
    var args = [].slice.call(arguments, 0),
        initialized = false,
        action = 'init';

    if (typeof options === 'string' &&
        typeof methods[options] === 'function') {
            console.log('options',options)
            console.log('method', typeof methods[options])
            action = options;
            args.shift();
        }

        return methods[action](args);
}

var test1 = greet(),
    test2 = greet('hello', 'world!'),
    test3 = greet('goodbye', 'world!');

    console.log('test2', test2)

    console.log('test3', test3)