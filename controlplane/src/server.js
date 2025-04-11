const Fastify = require('fastify');

const server = Fastify();

server.get('/', function (request, reply) {
    return {
        success: true
    }
});

server.listen({ port: 8080, host: '0.0.0.0' });