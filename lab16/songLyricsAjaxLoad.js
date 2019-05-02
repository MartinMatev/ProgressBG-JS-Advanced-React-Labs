let nodes = document.querySelectorAll('.songSelectWrapper img');
let output = document.querySelector('lyrics pre');


function AJAXcall(dataURL){
  // create a XMLHttpRequest object
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
          new ActiveXObject("Microsoft.XMLHTTP");

  // initializes the request:
  xhr.open("GET", dataURL, true);

  // EventHandler, that will be fired each time when the xhr state changes
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // finally do something with content:
      nodes.output.innerHTML = this.responseText;
    };
  };

  // sends the request:
  xhr.send();
};

function sendRequest(event){
  let result = AJAXcall('lyrics/group1.txt')
  // send request to server with param: group=${this.id};
  // and get returned txt in result
  output.innerHTML = result;
}

nodes.forEach( img =>{
  img.addEventListener('click', sendRequest );
})