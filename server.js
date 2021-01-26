const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use((req, res, next) => {

//    res.sendStatus(401)

// })

// curl http://localhost:3000/echo?status=200\&isSuccessful=true

server.get('/pass', (req, res) => {

	res.jsonp({header: {
		isSuccessful: true
	}, data: {field: 'hello'}
	})

})

server.get('/fail', (req, res) => {

	res.jsonp({header: {
		isSuccessful: false
	}, data: {field: 'hello'}
	})

})


server.get('/echo', (req, res) => {
	if(req.query.status == 200) {

  		res.jsonp({header: {
  			isSuccessful: req.query.isSuccessful
  		},
  		data: {field: 'hello'}
  	})
  		//res.sendStatus(req.query.status)
  	}else {
  		res.sendStatus(req.query.status)
  	}
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
