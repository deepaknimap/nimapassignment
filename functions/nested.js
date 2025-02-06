function parent() {
    let a = 1;
    function child() {
        console.log(a++);
    }
    return child;
}


let child = parent();
child()
child()
child()
child()
child()