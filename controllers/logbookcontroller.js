const session = require('express-session');
const conn = require('./../utils/dbconn');


          exports.getLogbook = (req, res) => {
            const { isloggedin, UserID} = req.session;
            const session = req.session;
        
            const selectSQL = `SELECT u.id, t.Type FROM logbook l
                                left join users u on u.id = l.userid
                                left join logbook_users lu on lu.userid = u.id
                                left join user_types t on t.id = lu.type_id
                                where u.ID = '${UserID}'`;
                  conn.query(selectSQL, (err, vals) => {
                    if (err) {
                      throw err;
                    } else {
                      const type = vals[0].Type;
                      console.log(type);
                      if(type =='Admin'){
                        const AdminSQL = `SELECT * FROM logbook`;
                        conn.query(AdminSQL,(err,rows) => {
                          if (err) {
                            throw err;
                          } else {
                            res.render('logbook', { schedule: rows, loggedin: isloggedin })
                          }
                        })
                      } else {
                        const AdminSQL = `SELECT * FROM logbook where userid = '${UserID}'`;
                        conn.query(AdminSQL,(err,rows) => {
                          if (err) {
                            throw err;
                          } else {
                            res.render('logbook', { schedule: rows, loggedin: isloggedin })
                          }
                        })
                      }
                    }
                  } )
                };

          exports.getlogmood = (req, res) => {
            const { isloggedin} = req.session;
            const session = req.session;

            res.render('logmood', {loggedin :isloggedin})

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
          const {isloggedin} = req.session;
          const session = req.session;
          const { ID } = req.params;
          console.log(ID);
          const selectSQL = `SELECT * FROM logbook WHERE ID = ${ID}`;
          conn.query(selectSQL, (err, rows) => {
          if (err) {
          throw err;
          } else {
          console.log(rows);
          res.render('updatelog', {details: rows, loggedin: isloggedin});
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