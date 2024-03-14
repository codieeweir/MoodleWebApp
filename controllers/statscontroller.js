const session = require('express-session');
const conn = require('./../utils/dbconn');

exports.getStatsVals = (req, res) => {
  console.log('GET /stats route requested');
  const { isloggedin, UserID } = req.session;

  const selectSQL = `SELECT Cast(AVG(Enjoyment) as decimal(2,1)) as Enjoyment, Cast(AVG(Sadness) as decimal(2,1)) as Sadness
                        , Cast(AVG(Anger) as decimal(2,1)) as Anger, Cast(AVG(Contempt) as decimal(2,1)) as Contempt, Cast(AVG(Disgust) as decimal(2,1)) as Disgust, Cast(AVG(Fear) as decimal(2,1)) as Fear
                        , Cast(AVG(Surprise) as decimal(2,1)) as Surprise FROM logbook where UserID = '${UserID}' AND DateOfLog >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH)`;

  conn.query(selectSQL, (err, rows) => {
    if (err) {
      throw err;
    } else {
      const selectQuery = `SELECT COUNT(*) AS total FROM logbook WHERE UserID = '${UserID}'AND DateOfLog >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH)`;
      conn.query(selectQuery, (err, vals) => {
        if (err) {
          throw err;
        } else {
          const Total = vals[0].total;
          console.log(rows);
          res.render('vizstats', { details: rows, loggedin: isloggedin, Count: Total });
        }
      });
    }
  });
};
