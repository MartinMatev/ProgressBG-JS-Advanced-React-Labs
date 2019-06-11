// TASK: implement same functionality with fetch
// TODO: send as HW
function fetchData(url){
  fetch(url)
    .then( response => response.json() )// get user data
    .then( data =>{
      // https://api.github.com/users/WWWCourses/repos
      fetch(data.repos_url)
        .then( response => response.json() )
        .then( data=>console.dir(data) )
    } )
    .then( a=>console.dir(a) );
}
function printNow(){
  let now = new Date();
  console.log(`${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`);  
}

function processData(data){
  console.log(`data: ${data}`);
  let userGithubReposUrl = JSON.parse(data).repos_url;
  xhrSyncAJAXcall(userGithubReposUrl, updageUI);
}
function updageUI(data){
  let repos = JSON.parse(data);
  // console.dir(repos);
  repos.forEach(e=>{
    let li = createDOMElement('LI', e.full_name);
    output.appendChild(li);
  })
}
function createDOMElement(tagName, content){
  let e = document.createElement(tagName);
  e.innerHTML = content;
  return e;
}

let ghBtn = document.querySelector('.gh button');
let url = 'https://api.github.com/users/WWWCourses';
let output = document.querySelector('.output');

ghBtn.addEventListener('click', function(){
  fetchData(url) 
})
