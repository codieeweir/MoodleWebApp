const express = require('express');
const conn = require('../utils/dbconn');
const controller = require('./../controllers/logbookcontroller');
const router = express.Router();

//router.get('/', controller.getindex);
router.get('/', controller.getindex);
router.get('/login', controller.getLogin);
router.get('/logout', controller.getLogout);
router.get('/logbook', controller.getLogbook)
router.get('/LogMood', controller.getlogmood);
router.get('/edit/:ID', controller.getEdit);
router.get('/signup', controller.getSignUp);

//router.post('/edit/:ID', controller.getEdit);
router.post('/login', controller.postLogin);
router.post('/logMood', controller.InsertLog);
router.post('/edit/:ID', controller.postgetEdit);
router.post('/signup', controller.postSignUp);
router.post('/del/:ID', controller.postDeleteLog);



router.get('/about', (req, res) => {

      res.render('about')
    });

router.get('/contact', (req, res) => {

      res.render('contact')
    });


router.get('*', (req, res) => {
      res.send('<h1> Page cannot be found! :( <h2>')
    });


module.exports = router;