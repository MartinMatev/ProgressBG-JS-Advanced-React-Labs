// create the subject
let xCompany = new Subject();

// create observers:
let pesho = new Observer('Pesho');
let maria = new Observer('Maria');
let asen = new Observer('Asen');
pesho.update = function(){
  console.log(`Pesho is IN`);
}
maria.update = function(){
  console.log(`Maria is IN`);
}
asen.update = function(){
  console.log(`Asen is IN`);
}
// add observers to subject's observers list:
xCompany.addObserver([pesho,maria,asen])
// xCompany.observerList.forEach(o=>{
//   console.log(o.name);
// })

// xCompany.removeObserver([pesho,asen])
// xCompany.observerList.forEach(o=>{
//   console.log('#####',o.name);
// })







// console.log(`observer list: ${xCompany.observerList.forEach(o=>o.name)}`);


// on click notifyAllBtn :
//   pesho.update(): 'pesho: Ye, I'm in!!!''
//   maria.update(): 'maria: Nice!!!;
//   asen.update():  'asen: Horrrrreeeeeeyyy!!!1'

