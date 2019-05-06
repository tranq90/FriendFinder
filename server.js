var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));


// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
require('./controllers/html-routes.js')(app);
require('./controllers/api-routes.js')(app);
// app.use('/', routes);
module.exports = new Promise(function (resolve, reject) {
  // Start our server so that it can begin listening to client requests.
  db.sequelize.sync({ force: false }).then(function () {
    resolve(app.listen(PORT, function () {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    }));
  });

})