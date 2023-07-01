// const express = require('express')
// const path = require('path')
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
require('dotenv').config()

const app = express()
const port = process.env.PORT;
//setup ViewEngine
configViewEngine(app);
//InitWebBrowe
initWebRoute(app);




app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})