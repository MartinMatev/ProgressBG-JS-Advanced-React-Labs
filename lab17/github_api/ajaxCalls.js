let ajaxCallBtn = document.querySelector('.ajaxCall button');
let output = document.querySelector('.output ul');


function AJAXcallWithXHR(dataURL,callback){
  // create a XMLHttpRequest object
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
          new ActiveXObject("Microsoft.XMLHTTP");

  // initializes the request:
  xhr.open("GET", dataURL, true);

  // EventHandler, that will be fired each time when the xhr state changes
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // finally do something with content:
      console.log(`!!!!!! responseText: ${xhr.responseText}`);
      callback(xhr.responseText);
    };
  };

  // sends the request:
  xhr.send();
};

function AJAXcallWithFetch(dataURL,callback){
  fetch(dataURL)
    .then(function (response){
      return response.text();
    })
    .then(function (responseText){
      // do something with responseText
      // nodes.output.innerHTML = responseText;
      callback(responseText);
    })
}


function sendRequest(url){
  // AJAXcallWithXHR(url,displayResult);  
  AJAXcallWithFetch(url,displayResult);  
}

function displayResult(jsonStr){
  let jsonObj = JSON.parse(jsonStr);
   // create li DOM element:
  let li = document.createElement('li');
  li.innerHTML = jsonStr;

  // append created LI element into UL:
  output.appendChild(li);
}

function clickHandler(e){
    // send request and get response
    let apiEndPoint = 'test.json';

    sendRequest(apiEndPoint);   
}


ajaxCallBtn.addEventListener('click', clickHandler );
