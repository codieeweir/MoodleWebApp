-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 10:33 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `FirstName` varchar(25) NOT NULL,
  `Surname` varchar(25) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Username` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `FirstName`, `Surname`, `Email`, `Username`, `Password`) VALUES
(1, 'Courtney', 'Weir', 'courtneyweir14@gmail.com', 'Cweir1', 'WebDev101'),
(2, 'Eoghan ', 'Patterson', 'Epatterson@hotmail.com', 'EPat01', 'WebDev102'),
(8, 'Simone', 'Sleeps', 'SimoneSleeps@Gmail.com', 'Simone1', '1234'),
(9, 'B', 'weir', 'courtneyweir14@gmail.com', 'bweir', '3456'),
(11, 'Sammy', 'Sleeps', 'Sam01@hotmail.com', 'sam01', '8765'),
(14, 'Courtney', 'Weir', 'cweir22@qub.ac.uk', 'cordie25', '12345'),
(16, 'Courtney', 'Weir', 'courtneyweir14@gmail.com', 'Cweir22', 'BernieSanders'),
(17, 'Courtney', 'Weir', 'courtneyweir14@gmail.com', 'Cweir44', 'Password'),
(18, 'Courtney', 'Weir', 'courtneyweir14@gmail.com', 'Courtney12', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
