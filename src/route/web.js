import express from 'express';
import homeController from '../controller/homeContronller'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)

    app.get('/about', (req, res) => {
        res.send('ThienHuynh')
    })
    return app.use('/', router);
}
export default initWebRoute;
// module.exports = initWebRoute;