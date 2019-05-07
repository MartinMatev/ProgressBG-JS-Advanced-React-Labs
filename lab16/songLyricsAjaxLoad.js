let nodes = document.querySelectorAll('.songSelectWrapper img');
let output = document.querySelector('.lyrics pre');


function AJAXcall(dataURL){
  console.log(`AJAXcall start...`);
  // create a XMLHttpRequest object
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
          new ActiveXObject("Microsoft.XMLHTTP");

  // initializes the request:
  xhr.open("GET", dataURL, false);

  // EventHandler, that will be fired each time when the xhr state changes
  xhr.onreadystatechange = function() {
    console.log(`readyState: ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      // finally do something with content:
      console.log(`response type: ${xhr.responseType}`);
      output.innerHTML = this.responseText;
    };
  };

  // sends the request:
  xhr.send();
  console.log(`AJAXcall end...`);
};

function sendRequest(event){
  let result = AJAXcall(`lyrics/${this.id}.txt`);
  console.log(`AJAX call finish!`);

  // send request to server with param: group=${this.id};
  // and get returned txt in result
  // output.innerHTML = result;
}

nodes.forEach( img =>{
  img.addEventListener('click', sendRequest );
})