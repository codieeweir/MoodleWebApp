-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 10:23 AM
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
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `ID` int(3) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Message` varchar(1000) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`ID`, `Email`, `Message`, `Date`) VALUES
(1, 'SimoneSleeps@Gmail.com', 'Testing', '2024-03-14'),
(2, 'courtneyweir14@gmail.com', 'Hey, just checking if this is working ', '2024-03-14'),
(4, 'SimoneSleeps@Gmail.com', 'Testing this out', '2024-03-14'),
(5, 'SimoneSleeps@Gmail.com', 'Test Message', '2024-03-14');

-- --------------------------------------------------------

--
-- Table structure for table `emotion_values`
--

CREATE TABLE `emotion_values` (
  `ID` int(11) NOT NULL,
  `Name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emotion_values`
--

INSERT INTO `emotion_values` (`ID`, `Name`) VALUES
(1, 'Very Low'),
(2, 'Low'),
(3, 'Neautral'),
(4, 'High'),
(5, 'Very High');

-- --------------------------------------------------------

--
-- Table structure for table `logbook`
--

CREATE TABLE `logbook` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `DateOfLog` datetime NOT NULL,
  `Enjoyment` int(1) NOT NULL,
  `Sadness` int(1) NOT NULL,
  `Anger` int(1) NOT NULL,
  `Contempt` int(1) NOT NULL,
  `Disgust` int(1) NOT NULL,
  `Fear` int(1) NOT NULL,
  `Surprise` int(1) NOT NULL,
  `EventTrigger` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logbook`
--

INSERT INTO `logbook` (`ID`, `UserID`, `DateOfLog`, `Enjoyment`, `Sadness`, `Anger`, `Contempt`, `Disgust`, `Fear`, `Surprise`, `EventTrigger`) VALUES
(6, 1, '2024-03-10 20:13:00', 5, 1, 1, 5, 1, 1, 3, 'Update Check II'),
(8, 1, '2024-03-09 20:13:00', 4, 3, 3, 3, 3, 3, 3, 'Trying to Get this to work pt 20000'),
(10, 8, '2024-03-14 12:30:00', 1, 5, 1, 1, 5, 1, 1, 'Im Simone :)'),
(13, 2, '2024-03-12 22:30:00', 5, 3, 1, 2, 4, 3, 2, 'Some details about the mood'),
(25, 14, '2024-03-13 20:55:00', 5, 1, 5, 1, 1, 1, 4, 'Project coming along'),
(26, 8, '2024-03-15 00:00:00', 5, 1, 1, 5, 1, 4, 5, 'Testing New Date format'),
(28, 16, '2024-03-14 00:00:00', 5, 4, 5, 1, 1, 1, 4, 'Last minute error fixes'),
(29, 8, '2024-03-14 00:00:00', 3, 3, 3, 3, 3, 3, 3, 'Testing Validation'),
(30, 17, '2024-03-14 00:00:00', 4, 1, 2, 1, 2, 1, 5, 'Testing during video submission'),
(31, 2, '2024-03-14 00:00:00', 4, 1, 2, 1, 5, 2, 3, 'Test 2');

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

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `ID` int(11) NOT NULL,
  `Type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_types`
--

INSERT INTO `user_types` (`ID`, `Type`) VALUES
(1, 'Admin'),
(2, 'Regular');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `emotion_values`
--
ALTER TABLE `emotion_values`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `logbook`
--
ALTER TABLE `logbook`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_EmotionValues_Enjoyment` (`Enjoyment`),
  ADD KEY `FK_EmotionValues_Anger` (`Anger`),
  ADD KEY `FK_EmotionValues_Surprise` (`Surprise`),
  ADD KEY `FK_EmotionValues_Sadness` (`Sadness`),
  ADD KEY `FK_EmotionValues_Fear` (`Fear`),
  ADD KEY `FK_EmotionValues_Disgust` (`Disgust`),
  ADD KEY `FK_EmotionValues_Contempt` (`Contempt`),
  ADD KEY `FK_USERID_USERS` (`UserID`);

--
-- Indexes for table `logbook_users`
--
ALTER TABLE `logbook_users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `FK_USERID_USERSType` (`Type_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emails`
--
ALTER TABLE `emails`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `emotion_values`
--
ALTER TABLE `emotion_values`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `logbook`
--
ALTER TABLE `logbook`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `logbook`
--
ALTER TABLE `logbook`
  ADD CONSTRAINT `FK_EmotionValues_Anger` FOREIGN KEY (`Anger`) REFERENCES `emotion_values` (`ID`),
  ADD CONSTRAINT `FK_EmotionValues_Contempt` FOREIGN KEY (`Contempt`) REFERENCES `emotion_values` (`ID`),
  ADD CONSTRAINT `FK_EmotionValues_Disgust` FOREIGN KEY (`Disgust`) REFERENCES `emotion_values` (`ID`),
  ADD CONSTRAINT `FK_EmotionValues_Enjoyment` FOREIGN KEY (`Enjoyment`) REFERENCES `emotion_values` (`ID`),
  ADD CONSTRAINT `FK_EmotionValues_Fear` FOREIGN KEY (`Fear`) REFERENCES `emotion_values` (`ID`),
  ADD CONSTRAINT `FK_EmotionValues_Sadness` FOREIGN KEY (`Sadness`) REFERENCES `emotion_values` (`ID`),
  ADD CONSTRAINT `FK_EmotionValues_Surprise` FOREIGN KEY (`Surprise`) REFERENCES `emotion_values` (`ID`),
  ADD CONSTRAINT `FK_USERID_USERS` FOREIGN KEY (`UserID`) REFERENCES `users` (`ID`);

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
