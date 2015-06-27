var ws = require("ws");
var _ = require("lodash");
var clients = [];


exports.connect = function(server) {
    var wss = new ws.Server({server:server});
    wss.on("connection",function(ws){
       clients.push(ws);
       //console.log(ws);
       exports.broadcast("New Client Joined")
    });
    
    wss.on('close',function() {
        _.remove(clients,wss);
    })
    
};

exports.broadcast=function(topic,data){
    var json = JSON.stringify({topic:topic,data:data});
    
    clients.forEach(function (client) {
         if(client.readyState != client.OPEN){
                console.error('Client state is ' + client.readyState);
            }
            else{
                client.send(json);
            }
        
    })
};
