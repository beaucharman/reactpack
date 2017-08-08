const express = require('express')
const app = express()
const PORT = Number( process.env.PORT || 4000 )

function sendFile(name) {
  return function(req, res) {
    res.sendFile(__dirname + '/dist/' + name)
  };
}

app.use(express.static(__dirname + '/dist'));

app.get('/', sendFile('index.html'))
app.get('/bundle.js', sendFile('bundle.js'))
app.get('/style.css', sendFile('style.css'))

app.listen(PORT, console.log.bind(null, 'Server running on port ' + PORT))
