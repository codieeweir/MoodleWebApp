const session = require('express-session');
const conn = require('./../utils/dbconn');

exports.getSignUp = (req, res) => {

   
                const { isloggedin} = req.session;
                const session = req.session;

                res.render('signup', {loggedin :isloggedin})
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
    const { isloggedin} = req.session;
    const session = req.session;

    res.render('login', {loggedin :isloggedin})
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

          exports.getLogout = (req, res) => {
            req.session.destroy(() => {
            res.redirect('/');
            });
            };

            exports.getindex = (req, res) => {

                const { isloggedin, UserID} = req.session;
                console.log(`User logged in: ${isloggedin}`);
                const session = req.session;
              
                res.render('index', {loggedin : isloggedin});
              };

              exports.getabout = (req, res) => {

                const { isloggedin} = req.session;
                const session = req.session;

                res.render('about', {loggedin :isloggedin})
              };

              exports.getcontact = (req, res) => {

                const { isloggedin} = req.session;
                const session = req.session;

                res.render('contact', {loggedin :isloggedin})
              };