var cats = [];

function catMaker(j){
    return function(){
        console.log(`Cat ${j} is ready!`);
    }
}

for (var i = 0; i < 3; i++) {
    cats[i] = catMaker(i);
}

cats[0](); //Cat 0 is ready!
cats[1](); //Cat 1 is ready!
cats[2](); //Cat 2 is ready!