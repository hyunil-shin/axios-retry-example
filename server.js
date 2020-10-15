const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use((req, res, next) => {

//    res.sendStatus(401)

// })

server.get('/echo', (req, res) => {
  res.sendStatus(500)
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
