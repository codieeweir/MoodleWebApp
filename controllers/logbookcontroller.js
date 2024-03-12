const session = require('express-session');
const conn = require('./../utils/dbconn');


          exports.getLogbook = (req, res) => {
            const { isloggedin, UserID} = req.session;
            const session = req.session;
        
            const selectSQL = `SELECT * FROM logbook where UserID = '${UserID}'`;
                  conn.query(selectSQL, (err, rows) => {
                    if (err) {
                      throw err;
                    } else {
                      res.render('logbook', { schedule: rows, loggedin: isloggedin });
                }
                  })
          };

          exports.getlogmood = (req, res) => {
            res.render('logmood');

          };

          exports.InsertLog = (req, res) => {
            console.log('POST /logMood route requested');
            const session = req.session;
            const {enjoyment, fear, contempt, disgust, sadness, anger, surprise, new_details, new_date } = req.body;
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
          const { ID } = req.params;
          console.log(ID);
          const selectSQL = `SELECT * FROM logbook WHERE ID = ${ID}`;
          conn.query(selectSQL, (err, rows) => {
          if (err) {
          throw err;
          } else {
          console.log(rows);
          res.render('updatelog', {details: rows});
          }
          });
        }

        exports.postgetEdit = (req, res) => {
          const ID = req.params.ID; 
          const { enjoyment, fear, contempt, disgust, sadness, anger, surprise, new_details, new_date } = req.body;
          const vals = [new_date, enjoyment, fear, contempt, disgust, sadness, anger, surprise, new_details, ID];
        
          const updateSQL = `UPDATE logbook SET DateOfLog = ?, Enjoyment = ?, Fear = ?,Contempt = ?,Disgust = ?,Sadness = ?,Anger = ?,Surprise = ?,EventTrigger = ? WHERE ID = ?`;
          conn.query(updateSQL, vals, (err, rows) => {
            if (err) {
              throw err;
            } else {
              res.redirect('/logbook');
              console.log('Updated Successfully')
            }
          });
        };


        exports.postDeleteLog = (req, res) => {
          const ID = req.params.ID;
          const deleteSQL = `DELETE FROM logbook WHERE ID = ${ID}`;
          conn.query(deleteSQL, (err, rows) => {
          if (err) {
          throw err;
          } else {
          res.redirect('/logbook');
          console.log('Log Removed')
          }
          });
          };