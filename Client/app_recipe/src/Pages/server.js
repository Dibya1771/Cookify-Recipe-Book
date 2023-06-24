const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 8000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/register', (req, res) => {
  const newUser = req.body;
  const users = router.db.get('users');
  users.push(newUser);
  router.db.set('users', users).write();
  res.json(newUser);
});

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = router.db
    .get('users')
    .find({ email, password })
    .value();
  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
