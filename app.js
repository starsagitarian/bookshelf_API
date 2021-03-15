require('dotenv').config();
const express = require('express');
const logger = require('morgan');
//const router = require('./routes');
const db = require('./server/models')
const app = express();

app.use(logger('dev'));
app.use(express.json());
//app.use(router);


PORT = process.env.PORT || 3003;

app.listen(PORT, async() => {
    console.log(`The server is active at port http://localhost:${PORT}`);
    try {
        await db.sequelize.sync(
            //{force: true}
            ); 
        console.log('DataBase synced');
    } catch (err) {
        console.log(err);
    }
});
