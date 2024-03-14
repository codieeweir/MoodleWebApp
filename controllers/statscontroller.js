const session = require('express-session');
const conn = require('./../utils/dbconn');


exports.getStatsVals = (req,res) => {

  const { isloggedin, UserID} = req.session;
  const session = req.session;

  const selectSQL = `SELECT Cast(AVG(Enjoyment) as decimal(2,1)) as Enjoyment, Cast(AVG(Sadness) as decimal(2,1)) as Sadness
                          , Cast(AVG(Anger) as decimal(2,1)) as Anger, Cast(AVG(Contempt) as decimal(2,1)) as Contempt, Cast(AVG(Disgust) as decimal(2,1)) as Disgust, Cast(AVG(Fear) as decimal(2,1)) as Fear
                          , Cast(AVG(Surprise) as decimal(2,1)) as Surprise FROM logbook where UserID = '${UserID}' AND DateOfLog >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH)`;
        conn.query(selectSQL, (err, rows) => {
          if (err) {
            throw err;
          } else {
            console.log(rows);
            res.render('vizstats', { details: rows, loggedin: isloggedin });
      }
        })
};