function outer(){
    var x = 5;
    let inner = function(){
        console.log(x);
    }
    inner();

    return inner;
}

let f = outer();
f();
