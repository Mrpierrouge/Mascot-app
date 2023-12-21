-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 21, 2023 at 12:38 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mascotte`
--

-- --------------------------------------------------------

--
-- Table structure for table `background`
--

CREATE TABLE `background` (
  `id` int NOT NULL,
  `lien` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `background`
--

INSERT INTO `background` (`id`, `lien`) VALUES
(3, 'Background1.png'),
(4, 'Background2.png'),
(5, 'Background3.png'),
(6, 'Background4.png'),
(7, 'Background5.png'),
(8, 'Background6.png'),
(9, 'Background7.png'),
(10, 'Background8.png'),
(11, 'Background9.png'),
(12, 'Background10.png'),
(13, 'Background11.png'),
(14, 'Background12.png'),
(15, 'Background13.png'),
(16, 'Background14.png'),
(17, 'Background15.png');

-- --------------------------------------------------------

--
-- Table structure for table `corps`
--

CREATE TABLE `corps` (
  `id` int NOT NULL,
  `lien` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `color` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `corps`
--

INSERT INTO `corps` (`id`, `lien`, `color`) VALUES
(8, 'Formes1-Zoom.png', 'red'),
(9, 'Formes2-Zoom.png', 'red'),
(10, 'Formes3-Zoom.png', 'red'),
(11, 'Formes4-Zoom.png', 'red'),
(12, 'Formes5-Zoom.png', 'red'),
(13, 'Formes11-Zoom.png', 'yellow'),
(14, 'Formes12-Zoom.png', 'yellow'),
(15, 'Formes13-Zoom.png', 'yellow'),
(16, 'Formes14-Zoom.png', 'yellow'),
(17, 'Formes15-Zoom.png', 'yellow'),
(18, 'Formes21-Zoom.png', 'green'),
(19, 'Formes22-Zoom.png', 'green'),
(20, 'Formes23-Zoom.png', 'green'),
(21, 'Formes24-Zoom.png', 'green'),
(22, 'Formes25-Zoom.png', 'green'),
(23, 'Formes26-Zoom.png', 'blue'),
(24, 'Formes27-Zoom.png', 'blue'),
(25, 'Formes28-Zoom.png', 'blue'),
(26, 'Formes29-Zoom.png', 'blue'),
(27, 'Formes30-Zoom.png', 'blue'),
(28, 'Formes41-Zoom.png', 'black'),
(29, 'Formes42-Zoom.png', 'black'),
(30, 'Formes43-Zoom.png', 'black'),
(31, 'Formes44-Zoom.png', 'black'),
(32, 'Formes45-Zoom.png', 'black');

-- --------------------------------------------------------

--
-- Table structure for table `hat`
--

CREATE TABLE `hat` (
  `id` int NOT NULL,
  `lien` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hat`
--

INSERT INTO `hat` (`id`, `lien`) VALUES
(1, 'Ha-zoom.png'),
(5, 'Hat1-Zoom.png'),
(6, 'Hat2-Zoom.png'),
(7, 'Hat3-Zoom.png'),
(8, 'Hat4-Zoom.png'),
(9, 'Hat5-Zoom.png'),
(10, 'Hat6-Zoom.png'),
(11, 'Hat7-Zoom.png'),
(12, 'Hat8-Zoom.png'),
(13, 'Hat9-Zoom.png'),
(14, 'Hat10-Zoom.png'),
(15, 'Hat11-Zoom.png'),
(16, 'Hat12-Zoom.png');

-- --------------------------------------------------------

--
-- Table structure for table `mascottes`
--

CREATE TABLE `mascottes` (
  `id` int NOT NULL,
  `lien_corps` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'Formes1-Zoom.png',
  `lien_visage` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'Emotions1-Zoom.png',
  `lien_accessoire` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'Ha-zoom.png',
  `lien_sport` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'Accessoire-zoom.png',
  `lien_background` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'Background1.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sport`
--

CREATE TABLE `sport` (
  `id` int NOT NULL,
  `lien` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sport`
--

INSERT INTO `sport` (`id`, `lien`) VALUES
(1, 'Accessoire-zoom.png'),
(15, 'Accessoires1-Zoom.png'),
(16, 'Accessoires2-Zoom.png'),
(17, 'Accessoires3-Zoom.png'),
(18, 'Accessoires4-Zoom.png'),
(19, 'Accessoires5-Zoom.png'),
(20, 'Accessoires6-Zoom.png'),
(21, 'Accessoires7-Zoom.png'),
(22, 'Accessoires8-Zoom.png'),
(23, 'Accessoires9-Zoom.png'),
(24, 'Accessoires10-Zoom.png'),
(25, 'Accessoires11-Zoom.png'),
(26, 'Accessoires12-Zoom.png'),
(27, 'Accessoires13-Zoom.png'),
(28, 'Accessoires14-Zoom.png');

-- --------------------------------------------------------

--
-- Table structure for table `visage`
--

CREATE TABLE `visage` (
  `id` int NOT NULL,
  `lien` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visage`
--

INSERT INTO `visage` (`id`, `lien`) VALUES
(1, 'Emotions1-Zoom.png'),
(2, 'Emotions2-Zoom.png'),
(3, 'Emotions3-Zoom.png'),
(4, 'Emotions4-Zoom.png'),
(5, 'Emotions5-Zoom.png'),
(6, 'Emotions6-Zoom.png'),
(7, 'Emotions7-Zoom.png'),
(8, 'Emotions8-Zoom.png'),
(9, 'Emotions9-Zoom.png'),
(10, 'Emotions10-Zoom.png'),
(11, 'Emotions11-Zoom.png'),
(12, 'Emotions12-Zoom.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `background`
--
ALTER TABLE `background`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `corps`
--
ALTER TABLE `corps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hat`
--
ALTER TABLE `hat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mascottes`
--
ALTER TABLE `mascottes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sport`
--
ALTER TABLE `sport`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visage`
--
ALTER TABLE `visage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `background`
--
ALTER TABLE `background`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `corps`
--
ALTER TABLE `corps`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `hat`
--
ALTER TABLE `hat`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `mascottes`
--
ALTER TABLE `mascottes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sport`
--
ALTER TABLE `sport`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `visage`
--
ALTER TABLE `visage`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
