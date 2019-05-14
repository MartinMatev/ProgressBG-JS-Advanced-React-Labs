let AJAXcallWrapper = document.querySelector('.AJAXcallWrapper');
let output = document.querySelector('.output');


function xhrSyncAJAXcall(url){
  // this is just a demo: NEVER use sunc AJAX calls
  console.log(`xhrAJAXcall start`);  
  let data;
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
            new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", url, false);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
    };
  };

  xhr.send();
  return data;
}
function xhrAJAXcall(url,callback){
  console.log(`xhrAJAXcall start`);  
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
            new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {        
        callback(this.responseText,'data received by XHR object:\n')
    };
  };

  xhr.send();
}
function jQueryAJAXcall(url, callback){
  console.log(`jQueryAJAXcall start`);  
  // $.get(url, function(data, status){
  //   console.log(`status: ${status}`);
  //   callback(data);
  // });

  $.ajax({
    url: url,   
    success: result => {
      callback(result,'data received by Jquery.ajax:\n')
    },
    error: _=>console.log(`Error on $.ajax call`)
  });
}
function fetchAJAXcall(url,callback){
  console.log(`fetchAJAXcall start`);  
  fetch(url)
    .then(handleErrors)
    .then( response => response.text() )
    .then( responseText => 
      callback(responseText,'data received by Fetch API:\n')
    )
    .catch( err=> console.log(err) );
}
function processData(data,msg){
  console.log(`data: ${data}`);
  output.innerHTML = `<p>${msg}</p>`;
  output.innerHTML += data;
}
function handleErrors(response){
  if( !response.ok ){
    throw Error(`${response.status}: ${response.statusText}`);
  }

  return response;
}


function makeAJAXcall(id){
  switch (id) {
    case 'xhrAJAX': xhrAJAXcall(url,processData); break;
    case 'jQueryAJAX': jQueryAJAXcall(url, processData); break;
    case 'fetchAJAX': fetchAJAXcall(url, processData); break;
    default:
      console.log(`can not find proper function...`);      
  }
}

AJAXcallWrapper.addEventListener('click', function(e){
  if(e.target.nodeName === 'LI'){
    makeAJAXcall(e.target.id);
  }  
})

let url = 'data/lorem.txt';


// sync asunc test
// let data = xhrSyncAJAXcall(url);
// console.log(`data in main: ${data}`);