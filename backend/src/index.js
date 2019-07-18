require('dotenv').config();

const server = require('./server');
require('./database');


async function main() {
    await server.listen(server.get('port'));
    console.log('Server on port ' + server.get('port') + '....');
}

main();