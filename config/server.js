const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'inbox.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
//server.use(router)
server.use('/api', router);

server.listen(3004, () => {
    console.log('JSON Server is running')
})

