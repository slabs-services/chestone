const objectsController = require('./Controllers/Objects');

async function Routes(fastify) {
    fastify.get('/', objectsController.getObjectAcl);
}

module.exports = Routes;