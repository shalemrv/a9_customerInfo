const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/angular9_customers'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/angular9_customers/index.html'));});
app.listen(process.env.PORT || 8080, ()=>{ console.log(`Listening in on PORT ${process.env.PORT || 8080}`)});
