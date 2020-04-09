const cors = require('cors'); 
const express = require('express');
const morgan = require('morgan')
const path = require('path');


const app = express();

require('./database') 


//midelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//rutas 


//app.use('/api/login',require('./routes/Login.js'));
//app.use('/api',require('./routes/ClientesCrud.js'));
app.use('/api/cupo',require('./routes/CreditosCrud.js'));
//app.use('/api/contabilidad',require('./routes/Contabilidad.js'));
//midelware para vuejs reouter modo history
//const history = require('connect-history-api-fallback')
//app.use(history())
//app.use(express.static(path.join(__dirname,'public')));



const host = process.env.HOST || '0.0.0.0';
const port  = process.env.PORT || 9000



app.listen(port,host,() => {
    console.log('server on port',port);
});