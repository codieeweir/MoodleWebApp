const session = require('express-session');
const conn = require('./../utils/dbconn');

exports.getLogbook = (req, res) => {
  console.log('GET /logbook route requested');
  const { isloggedin, UserID } = req.session;
  
  const selectSQL = `SELECT u.id, t.Type FROM logbook l
                     LEFT JOIN users u ON u.id = l.userid
                     LEFT JOIN logbook_users lu ON lu.userid = u.id
                     LEFT JOIN user_types t ON t.id = lu.type_id
                     WHERE u.ID = '${UserID}'`;

  conn.query(selectSQL, (err, vals) => {
    if (err) {
      throw err;
    } else {
      // Check if vals array is not empty
      if (vals.length > 0) {
        const type = vals[0].Type;
        console.log(type);
        if (type === 'Admin') {
          console.log('Admin user detected');
          const AdminSQL = `SELECT * FROM logbook`;
          conn.query(AdminSQL, (err, rows) => {
            if (err) {
              throw err;
            } else {
              res.render('logbook', { schedule: rows, loggedin: isloggedin });
            }
          });
        } else {
          console.log('Non-admin user detected');
          const AdminSQL = `SELECT * FROM logbook WHERE userid = '${UserID}'`;
          conn.query(AdminSQL, (err, rows) => {
            if (err) {
              throw err;
            } else {
              res.render('logbook', { schedule: rows, loggedin: isloggedin });
            }
          });
        }
      } else {
        console.log('No user logs:', UserID);
        res.redirect('/logmood');
      }
    }
  });
};


exports.getlogmood = (req, res) => {
  console.log('GET /logmood route requested');
  const { isloggedin } = req.session;
  res.render('logmood', { loggedin: isloggedin });
};

exports.InsertLog = (req, res) => {
  console.log('POST /logMood route requested');
  const session = req.session;
  const { enjoyment, fear, contempt, disgust, sadness, anger, surprise, new_details, new_date } = req.body;
  const vals = [new_date, enjoyment, fear, contempt, disgust, sadness, anger, surprise, new_details];
  const userID = session.UserID;
  const insertSQL = 'INSERT INTO logbook (UserID, DateOfLog, Enjoyment, Sadness, Anger, Contempt, Disgust, Fear, Surprise, EventTrigger) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  conn.query(insertSQL, [userID, ...vals], (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.redirect('/logbook');
    }
  });
};

exports.getEdit = (req, res) => {
  console.log('GET /edit/:ID route requested');
  const { isloggedin } = req.session;
  const { ID } = req.params;
  console.log(ID);
  const selectSQL = `SELECT * FROM logbook WHERE ID = ${ID}`;
  conn.query(selectSQL, (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log(rows);
      res.render('updatelog', { details: rows, loggedin: isloggedin });
    }
  });
};

exports.postgetEdit = (req, res) => {
  console.log('POST /edit/:ID route requested');
  const ID = req.params.ID;
  const { enjoyment, fear, contempt, disgust, sadness, anger, surprise, new_details, new_date } = req.body;
  const vals = [new_date, enjoyment, fear, contempt, disgust, sadness, anger, surprise, new_details, ID];

  const updateSQL = `UPDATE logbook SET DateOfLog = ?, Enjoyment = ?, Fear = ?,Contempt = ?,Disgust = ?,Sadness = ?,Anger = ?,Surprise = ?,EventTrigger = ? WHERE ID = ?`;
  conn.query(updateSQL, vals, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.redirect('/logbook');
      console.log('Updated Successfully');
    }
  });
};

exports.postDeleteLog = (req, res) => {
  console.log('POST /delete/:ID route requested');
  const ID = req.params.ID;
  const deleteSQL = `DELETE FROM logbook WHERE ID = ${ID}`;
  conn.query(deleteSQL, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.redirect('/logbook');
      console.log('Log Removed');
    }
  });
};
