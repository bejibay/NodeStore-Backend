var express = require express();
var router = express.Router();
var stuffRoute = require('../controllers/controllers');

Router.post('/','createOneThing.stuffRoute');
Router.get('/:id','getOneThing.stuffRoute');
Router.put('/','modifyOneThing.stuffRoute');
Router.get('/','getAllThings.stuffRoute');
