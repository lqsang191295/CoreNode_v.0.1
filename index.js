require('./db');
const express = require('express');
const app = express();
const appConfig = require('./config') || {};
const PORT = appConfig.PORT || 2345;
const routers = require('./routers');
const {logger} = require('./utils/logger');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routers);

app.use((err, req, res, next) => {
    logger.error(JSON.stringify(err));
})

app.listen(PORT, () => {
    logger.info('Listen port %s', PORT)
})