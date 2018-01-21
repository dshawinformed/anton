
exports.register = function(server, options, next) {
  server.route({
    path: '/',
    method: 'GET',
    handler:   function (request, reply) {
      reply.view('home');
    }
  });
  var io = require('socket.io')(server.listener);
  io.on('connection', function (socket) {
  }); 

  server.route({
    path: '/seeorder',
    method: 'GET',
    handler: function (request, reply) {
      var fs = require('fs'),
        path = require('path'),    
        filePath = path.join(__dirname, '/../../message.txt');

      return fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
          console.log('received data: ' + data);
          let k = data.split("\n");
          console.log(k);
          let art = "";
          for(let i=0;i<k.length;i++){
            art+=k[i]+'|\r\n';
          }
          reply.view('screen',{data:art});
        } else {
          console.log(err);
        }
      });
      
    }
  });

  server.route({
    path: '/order123',
    method: 'GET',
    handler: function (request, reply) {
      console.log('request of sendOrder',request.query);
      var fs = require('fs');
      fs.appendFile('message.txt', '\n'+request.query.item, function (err) {
        if (err) throw err;
        console.log('Saved!');
      }); 
      //io.sockets.emit('orderReceived', request.query.item);
      reply('hello');
    }
  });

  server.route({
    path: '/danny',
    method: 'GET',
    handler: function (request, reply){
      let dannyController = require('../controller/dannySpeaks.js').dannySpeaks;
      if (request.query.speech != undefined){
        let output = dannyController.main(request.query.speech);
        reply(output).code(200);
      }
      else reply('Bad Request').code(400);
    }
  });

  server.route({
    path: '/assets/{path*}',
    method: 'GET',
    handler:   {
      directory: {
        path: 'app/views/assets',
        redirectToSlash: true,
        index: true,
      }
    }
  });

  server.route({
    path: '/src/{path*}',
    method: 'GET',
    handler:   {
      directory: {
        path: 'app/views/src',
        redirectToSlash: true,
        index: true,
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: 'homeRoute',
  version: require('../../package.json').version,
};

