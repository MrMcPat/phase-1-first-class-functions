function receivesAFunction (callback) {
    let spy = "callback";
    callback(spy);
}

function returnsANamedFunction () {
    return function named(){return "Stuff";};
}

function returnsAnAnonymousFunction () {
    return function (){return "Stuff";};
}