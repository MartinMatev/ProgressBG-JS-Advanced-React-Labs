let colorSelectNode = document.querySelector('.bgChoice select');
let changeBgBtn = document.querySelector('.bgChoice button');
let localStorage = window.localStorage;

function setLocalStorage(name, value){
  localStorage.setItem(name, value);
}

function getFromLocalStorage(name){
  let value = localStorage.getItem(name);

  if(value){
    return value;
  }else{
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function(){
  let color = getFromLocalStorage('color');
  if(color){
    document.body.style.backgroundColor = color;
  }
});

changeBgBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = colorSelectNode.value;
  // set local/session storage
  setLocalStorage('color', colorSelectNode.value);
})


