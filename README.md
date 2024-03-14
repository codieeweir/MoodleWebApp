Emotional Wellness Web Application
This web application is designed to help users track their emotional well-being and gain insights into their mood patterns over time. It provides features for logging daily emotions, visualizing mood data through charts and graphs, and accessing personalized insights based on user activity.

Features
Logbook: Allows users to view, add, edit, and delete daily mood logs.
Statistics: Provides monthly averages and visualizations of mood data to help users understand their emotional patterns.
Contact Form: Enables users to get in touch with the application administrators for support or inquiries.
Files and Directories
index.html: Main HTML file containing the structure of the web application.
logbook.html: HTML file for displaying the user's mood logbook.
logmood.html: HTML file for logging daily mood data.
updatelog.html: HTML file for editing existing mood log entries.
mystyles.css: CSS file containing styles for the web application.
logbookcontroller.js: Node.js file containing server-side logic for handling logbook-related requests.
usercontroller.js: Node.js file containing server-side logic for user-related operations such as authentication and user profile management.
statscontroller.js: Node.js file containing server-side logic for generating statistics and insights based on user mood data.
utils/dbconn.js: Node.js file for establishing a connection to the database.
views/header.ejs: EJS file containing the header component for all pages.
views/footer.ejs: EJS file containing the footer component for all pages.
views/signup.ejs: EJS file for the user signup page.
views/login.ejs: EJS file for the user login page.
views/profile.ejs: EJS file for displaying user profile information.
views/stats.ejs: EJS file for displaying personalized statistics and insights.
README.md: This file, providing an overview of the project.
Usage
Clone the repository to your local machine.
Install dependencies using npm install.
Run the application using npm start.
Access the application through your web browser at http://localhost:3000.
Technologies Used
Frontend: HTML, CSS, JavaScript, EJS (Embedded JavaScript)
Backend: Node.js, Express.js
Database: MySQL
Additional Libraries: Chart.js for data visualization
