let colorSelectNode = document.querySelector('.bgChoice select');
let changeBgBtn = document.querySelector('.bgChoice button');

changeBgBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = colorSelectNode.value;
  setCookie('color', colorSelectNode.value); // `color=${colorSelectNode.value}`
})

function setCookie(name, value){
  let now = new Date();
  now.setMinutes( now.getMinutes() + 1 );
     
  document.cookie = `${name}=${value};`
  document.cookie = `expires=${now.toUTCString()}`;
  console.log(`cookie set: ${document.cookie}`);
}

function readCookie(name){
  let cookies = document.cookie // '';
  console.log(`cookies = ${cookies}`); 
  
  let re = /color=(.+?);/; 
}


let color = readCookie('color');
if(color){
  document.body.style.backgroundColor = color;
}

