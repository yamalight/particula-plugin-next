const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

exports.setup = async () => {
  await app.prepare();
};

exports.postsetup = async server => {
  server.get('*', (req, res) => handle(req, res));
};

exports.name = 'nextjs';
