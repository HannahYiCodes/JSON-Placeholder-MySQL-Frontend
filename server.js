//importing the express module
const express = require('express')

//create an instance of express (create the server)
const app = express()

//allows frontend to server static files
app.use(express.static('public'))
app.use(express.json())

//create a route for the root path
// app.get('/test', function (req, res) {
//     console.log(req.body);
//     res.send('Hello World')
// }) 

//sets the port to listen on
app.listen(4000, () => {
    console.log('Server listening on port 4000')
})