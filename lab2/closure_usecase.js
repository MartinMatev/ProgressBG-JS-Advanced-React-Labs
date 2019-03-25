var cats = [];

for (let i = 0; i < 3; i++) {
    cats[i] = function(){
        console.log(`Cat ${i} is ready!`);
    }
}



cats[0](); // 'Cat 0 is ready!''
cats[1](); // 'Cat 1 is ready!''
cats[2](); // 'Cat 2 is ready!''

