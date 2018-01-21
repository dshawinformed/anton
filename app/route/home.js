
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
    path: '/sendOrder',
    method: 'GET',
    handler: function (request, reply) {
      console.log('request of sendOrder',request.query);
      k=request.query.item;
        io.sockets.emit('orderReceived', k); 
      reply('orders received');
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

