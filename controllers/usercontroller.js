const session = require('express-session');
const conn = require('./../utils/dbconn');

exports.getSignUp = (req, res) => {
  console.log('GET /signup route requested');
  const { isloggedin } = req.session;

  res.render('signup', { loggedin: isloggedin });
};

exports.postSignUp = (req, res) => {
  console.log('POST /signup route requested');
  const { firstname, surname, email, username, userpass } = req.body;
  const vals = [firstname, surname, email, username, userpass];

  const checkUsernameSQL = 'SELECT * FROM users WHERE username = ?';
  conn.query(checkUsernameSQL, [username], (err, results) => {
    if (err) {
      throw err;
    }

    if (results.length > 0) {
      res.render('signup', { error: 'Username already in use' });
      console.log('Username already in use');
      res.redirect('/')
    } else {
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

          const checkuserSQL = `SELECT u.id, u.username FROM users u WHERE u.username = ? AND u.password = ?`;

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
  console.log('GET /login route requested');
  const { isloggedin } = req.session;

  res.render('login', { loggedin: isloggedin });
};

exports.postLogin = (req, res) => {
  console.log('POST /login route requested');
  const { username, userpass } = req.body;
  const vals = [username, userpass];
  console.log(vals);

  const checkuserSQL = `SELECT u.id, u.username FROM users u WHERE u.username = ? AND u.password = ?`;

  conn.query(checkuserSQL, vals, (err, rows) => {
    if (err) throw err;
    const numrows = rows.length;
    console.log(numrows);

    if (numrows > 0) {
      console.log(rows);
      const session = req.session;
      session.UserID = rows[0].id;
      session.isloggedin = true;
      console.log(session);
      res.redirect('/logbook');
    } else {
      res.redirect('/');
    }
  });
};

exports.getLogout = (req, res) => {
  console.log('GET /logout route requested');
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.getindex = (req, res) => {
  console.log('GET /index route requested');
  const { isloggedin, UserID } = req.session;
  console.log(`User logged in: ${isloggedin}`);
  console.log(UserID);

  const selectSQL = `SELECT * FROM users WHERE ID = '${UserID}'`;

  conn.query(selectSQL, (err, rows) => {
    if (err) throw err;
    const numrows = rows.length;

    if (numrows > 0) {
      const FirstName = rows[0].FirstName;
      console.log(FirstName);
      console.log('Name returned successfully');

      res.render('index', { loggedin: isloggedin, FirstName: FirstName });
    } else {
      res.render('index', { loggedin: isloggedin });
    }
  });
};

exports.getabout = (req, res) => {
  console.log('GET /about route requested');
  const { isloggedin } = req.session;

  res.render('about', { loggedin: isloggedin });
};

exports.getcontact = (req, res) => {
  console.log('GET /contact route requested');
  const { isloggedin } = req.session;

  res.render('contact', { loggedin: isloggedin });
};

exports.postcontact = (req, res) => {
  console.log('POST /contact route requested');
  const { email, message, date } = req.body;
  const vals = [email, message, date];
  console.log(vals);

  const InsertSQL = `INSERT INTO emails (email, message, Date) VALUES (?, ?, ?)`;
  conn.query(InsertSQL, vals, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.redirect('/contact');
      console.log('Email Sent Successfully');
    }
  });
};
