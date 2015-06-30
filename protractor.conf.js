exports.config = {
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--no-sandbox'] 
    }
  },   
  framework: 'mocha',
  specs: [
    'test/e2e/**/*.spec.js'
  ],
  mochaOpts: {
    enableTimeouts: false
  },
  onPrepare:function(){
    require("./server");
     
  }
}