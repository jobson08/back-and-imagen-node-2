const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(() => console.log('MongoDB atlas conectado...'))
  .catch(err => console.log(err));
