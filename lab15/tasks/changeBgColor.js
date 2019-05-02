let colorSelectNode = document.querySelector('.bgChoice select');
let changeBgBtn = document.querySelector('.bgChoice button');

function setCookie(name, value){
  let now = new Date();
  now.setMinutes( now.getMinutes() + 1 );
     
  document.cookie = `${name}=${value}; Expires=${now.toString()}; Path=/`
  console.log(`cookie set: ${document.cookie}`);
}

function readCookie(name){
  // get all cookies
  let cookies = document.cookie;
  console.log(`cookies = ${cookies}`); 
  
  // check if we have ${name} cookie set, and get its value (note the use of lookahed):
  // see regex explaind here: https://regex101.com/r/0pOjkH/4
  let pattern = `${name}=(.+?)(?=;|$)`; 
  let re = new RegExp(pattern,'i');
  
  let match = cookies.match(re);
  console.log(match);


  if(match){
    return match[1]; // return the 1st capture group
  }else{
    return false;
  }
}

changeBgBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = colorSelectNode.value;
  setCookie('color', colorSelectNode.value); // `color=${colorSelectNode.value}`
})


document.addEventListener('DOMContentLoaded', function(){
  let color = readCookie('color');

  if(color){
    document.body.style.backgroundColor = color;
  }
});


