//importing the express module
const express = require('express')

//create an instance of express (create the server)
const app = express()

//allows frontend to server static files
app.use(express.static('public'))

//create a route for the root path
app.get('/test', function (req, res) {
    res.send('Hello World')
}) 

//sets the port to listen on
app.listen(3500, () => {
    console.log('Server listening on port 3500')
})