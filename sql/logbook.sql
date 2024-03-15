-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 10:25 AM
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

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `logbook`
--
ALTER TABLE `logbook`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
