function makeIterator(array) {
    var index = 0;

    return {
       next: function() {
          // TODO: make it work 
          return index < array.length && array[index]%2==0 ?
            array[index++]:
            false;
       }
    };
};

var it = makeIterator([1,2,3,4,5]);

var element;
while( element = it.next()){
  console.log(`${element}`);
}