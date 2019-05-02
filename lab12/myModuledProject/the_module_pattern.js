var myModule = (function(){  
  // private
  var config = {
    encoding: 'UTF8',
    maxLength: '2048'
  };

  var log = function(value, msg){
    msg?
      console.log(`${msg}: ${value}\n\n`):
      console.log(`${value}\n\n`);

  };

  // API
  // TODO: update in presentation (curently broken)
  var showConfig =  function(){
    console.dir(config);
    for( c in config ){
      // config.log(config[c], config)
      console.log(config[c])
    }
  }

  return {
    showConfig: showConfig,
    log:log
  }
})();
