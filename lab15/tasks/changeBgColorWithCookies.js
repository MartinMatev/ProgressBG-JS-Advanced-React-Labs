let colorSelectNode = document.querySelector('.bgChoice select');
let changeBgBtn = document.querySelector('.bgChoice button');

changeBgBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = colorSelectNode.value;
  setCookie('color', colorSelectNode.value); // `color=${colorSelectNode.value}`
  setCookie('fontSize', 16);
})

function setCookie(name, value){
  let now = new Date();
  now.setMinutes( now.getMinutes() + 1 );
     
  document.cookie = `${name}=${value};expires=${now.toString()};path=/`;  
  console.log(`cookie set: ${document.cookie}`);
}

function readCookie(name){
  let cookies = document.cookie // '';
   
  // let pattern1 = `${name}=(.+?);`;
  // let pattern2 = `${name}=(.+)$`;
  // let pattern = `${pattern1}|${pattern2}` => works with if(pattern1) else if(pattern2)

  let pattern = `${name}=(.+?)(?=;|$)`;

  // color=#FF0099
  let re = new RegExp(pattern, 'i');    
  let match = cookies.match(re);

  console.log(`cookies: ${cookies}`);
  console.dir(match);


  if(match){
    return match[1];
  }else{
    return false;
  }
}


let color = readCookie('color');
if(color){
  document.body.style.backgroundColor = color;
}

