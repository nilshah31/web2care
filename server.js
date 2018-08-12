
const express     = require('express')
const app         =  express()
const router      = express.Router();
const bodyParser  = require('body-parser')
const path        = require('path')
const apiRoutings = require('./rest-api/global')(app)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/api', router);

app.listen(process.env.PORT || 3000,()=>{
  console.log("server started on 3000")
})


app.use('/user', express.static(path.join(__dirname, './client-app')));
app.use('/', express.static(path.join(__dirname, './admin-app')));