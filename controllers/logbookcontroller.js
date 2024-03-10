const session = require('express-session');
const conn = require('./../utils/dbconn');


 // exports.getNewData = (req, res) => {
 //   res.render('logbook')
 // }

  // exports.postNewdata = (req, res) => {
  //  console.log('POST /logMood route requested');
  //  console.log(req.body)
  //  res.render('logbook');
 //};

 exports.getSignUp = (req, res) => {
  res.render('signup');
  };

  exports.postSignUp = (req, res) => {
    console.log('POST /signup route requested');
    
    const { firstname, surname, email, username, userpass } = req.body;
    const vals = [firstname, surname, email, username, userpass];

    // Check if the username already exists
    const checkUsernameSQL = 'SELECT * FROM users WHERE username = ?';
    conn.query(checkUsernameSQL, [username], (err, results) => {
        if (err) {
            throw err;
        }

        // If a user with the same username is found
        if (results.length > 0) {
            res.render('signup', { error: 'Username already in use' });
            console.log('Username already in use');
        } else {
            // If the username is not in use, proceed with the insertion
            const signupSQL = 'INSERT INTO users (firstname, surname, email, username, password) VALUES (?, ?, ?, ?, ?)';
            conn.query(signupSQL, vals, (err, rows) => {
                if (err) {
                    console.error('Error during signup:', err);
                    throw err;
                } else {
                    console.log('Signup successful!');
                    console.log('User details:', {
                        firstname,
                        surname,
                        email,
                        username,
                        userpass: '****' // Redacted for security
                    });

                    // Log in the user after successful signup
                    const checkuserSQL = `SELECT u.id, u.username FROM users u WHERE u.username = '${username}' AND u.password = '${userpass}'`;

                    conn.query(checkuserSQL, [username, userpass], (err, rows) => {
                        if (err) throw err;
                        const numrows = rows.length;
                        console.log(numrows);

                        if (numrows > 0) {
                            console.log('User successfully logged in after signup:', rows);
                            const session = req.session;
                            session.UserID = rows[0].id;
                            session.isloggedin = true;
                            console.log(session);
                            res.redirect('/');
                        } else {
                            console.log('Error logging in after signup. User not found.');
                            res.redirect('/');
                        }
                    });
                }
            });
        }
    });
};





 exports.getLogin = (req, res) => {
  res.render('login');
  };
  
 exports.postLogin = (req, res) => {
  const{ username, userpass } = req.body;
  const vals = [username, userpass];
  console.log(vals);

  const checkuserSQL = `SELECT u.id, u.username FROM users u WHERE u.username = '${ username }' AND u.password = '${ userpass }'`;

      conn.query( checkuserSQL, vals, (err, rows) => {
        if (err) throw err;
        const numrows = rows.length;
        console.log(numrows);
        if (numrows > 0) {
        console.log(rows);
        const session = req.session;
        session.UserID = rows[0].id
        session.isloggedin = true;
        console.log(session);
        res.redirect('/');
        } else {
        res.redirect('/');
        }
        });
        };

        exports.getindex = (req, res) => {

          const { isloggedin, UserID} = req.session;
          console.log(`User logged in: ${isloggedin}`);
          const session = req.session;
        
          res.render('index', {loggedin : isloggedin});
        };

        exports.getLogout = (req, res) => {
          req.session.destroy(() => {
          res.redirect('/');
          });
          };

          
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