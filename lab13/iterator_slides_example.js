function makeIterator(array) {
    var index = 0;

    return {
       next: function() {
          // TODO: make it work
          if(index < array.length){
            if(array[index]%2==0){
              return array[index++]              
            }else{
              index++;
            }
          }else{
            return false
          }
       }
    };
};

var it = makeIterator([1,2,3,4,5]);

var element;
while( element = it.next()){
  console.log(`${element}`);
}