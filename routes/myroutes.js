const express = require('express');
const conn = require('../utils/dbconn');
const router = express.Router();

const logbookcontroller = require('./../controllers/logbookcontroller');
const usercontroller = require('./../controllers/usercontroller');
const statscontroller = require('./../controllers/statscontroller');


router.get('/', usercontroller.getindex);
router.get('/login', usercontroller.getLogin);
router.get('/logout', usercontroller.getLogout);
router.get('/signup', usercontroller.getSignUp);
router.get('/contact', usercontroller.getcontact);

router.get('/logbook', logbookcontroller.getLogbook)
router.get('/LogMood', logbookcontroller.getlogmood);
router.get('/edit/:ID', logbookcontroller.getEdit);

router.get('/vizstats', statscontroller.getStatsVals);

router.post('/signup', usercontroller.postSignUp);
router.post('/login', usercontroller.postLogin);

router.post('/logMood', logbookcontroller.InsertLog);
router.post('/edit/:ID', logbookcontroller.postgetEdit);
router.post('/del/:ID', logbookcontroller.postDeleteLog);
router.post('/contactform', usercontroller.postcontact);

router.get('*', (req, res) => {
      res.send('<h1> Page cannot be found! :( <h2>')
    });


module.exports = router;