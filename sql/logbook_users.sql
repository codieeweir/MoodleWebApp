-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 10:26 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdevproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `logbook_users`
--

CREATE TABLE `logbook_users` (
  `UserID` int(11) NOT NULL,
  `Type_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logbook_users`
--

INSERT INTO `logbook_users` (`UserID`, `Type_ID`) VALUES
(1, 1),
(2, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `logbook_users`
--
ALTER TABLE `logbook_users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `FK_USERID_USERSType` (`Type_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `logbook_users`
--
ALTER TABLE `logbook_users`
  ADD CONSTRAINT `FK_USERID_USERSType` FOREIGN KEY (`Type_ID`) REFERENCES `user_types` (`ID`),
  ADD CONSTRAINT `FK_USERTYPES_TYPEID` FOREIGN KEY (`UserID`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
