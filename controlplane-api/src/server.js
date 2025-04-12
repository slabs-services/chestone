const Fastify = require('fastify');
const Routes = require('./routes');

const server = Fastify();
server.register(Routes, { prefix: '/' });

server.listen({ port: 80, host: '0.0.0.0' });