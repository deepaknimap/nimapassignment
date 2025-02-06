function fun() {
    console.log('hello , world');
}

function fun2(action) {
    return action;
}

const action = fun2(fun);

action();
action();
action();
action();
