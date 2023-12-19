-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 19, 2023 at 05:28 PM
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
(1, 'Arc_de_Triomphe.png'),
(2, 'Escalade.png');

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
(1, 'Formes1.png', 'red'),
(2, 'Formes2.png', 'red'),
(3, 'Formes3.png', 'red'),
(4, 'Formes4.png', 'red'),
(5, 'Formes5.png', 'red'),
(6, 'Formes6.png', 'orange'),
(7, 'Formes7.png', 'orange'),
(8, 'Formes8.png', 'orange'),
(9, 'Formes9.png', 'orange'),
(10, 'Formes10.png', 'orange'),
(11, 'Formes11.png', 'jaune'),
(12, 'Formes12.png', 'jaune'),
(13, 'Formes13.png', 'jaune'),
(14, 'Formes14.png', 'jaune'),
(15, 'Formes15.png', 'jaune'),
(16, 'Formes16.png', 'vert-clair'),
(17, 'Formes17.png', 'vert-clair'),
(18, 'Formes18.png', 'vert-clair'),
(19, 'Formes19.png', 'vert-clair'),
(20, 'Formes20.png', 'vert-clair'),
(21, 'Formes21.png', 'vert-fonce'),
(22, 'Formes22.png', 'vert-fonce'),
(23, 'Formes23.png', 'vert-fonce'),
(24, 'Formes24.png', 'vert-fonce'),
(25, 'Formes25.png', 'vert-fonce'),
(26, 'Formes26.png', 'bleu-clair'),
(27, 'Formes27.png', 'bleu-clair'),
(28, 'Formes28.png', 'bleu-clair'),
(29, 'Formes29.png', 'bleu-clair'),
(30, 'Formes30.png', 'bleu-clair'),
(31, 'Formes31.png', 'bleu-fonce'),
(32, 'Formes32.png', 'bleu-fonce'),
(33, 'Formes33.png', 'bleu-fonce'),
(34, 'Formes34.png', 'bleu-fonce'),
(35, 'Formes35.png', 'bleu-fonce'),
(36, 'Formes36.png', 'violet'),
(37, 'Formes37.png', 'violet'),
(38, 'Formes38.png', 'violet'),
(39, 'Formes39.png', 'violet'),
(40, 'Formes40.png', 'violet'),
(41, 'Formes41.png', 'noir'),
(42, 'Formes42.png', 'noir'),
(43, 'Formes43.png', 'noir'),
(44, 'Formes44.png', 'noir'),
(45, 'Formes45.png', 'noir'),
(46, 'Formes46.png', 'gris'),
(47, 'Formes47.png', 'gris'),
(48, 'Formes48.png', 'gris'),
(49, 'Formes49.png', 'gris'),
(50, 'Formes50.png', 'gris');

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
(1, 'Hat1.png'),
(2, 'Hat2.png'),
(3, 'Hat3.png'),
(4, 'Hat4.png'),
(5, 'Hat5.png'),
(6, 'Hat6.png'),
(7, 'Hat7.png'),
(8, 'Hat8.png'),
(9, 'Hat9.png'),
(10, 'Hat10.png'),
(11, 'Hat11.png'),
(12, 'Hat12.png'),
(13, 'Hat13.png'),
(14, 'Hat14.png'),
(15, 'Hat15.png'),
(16, 'Hat16.png');

-- --------------------------------------------------------

--
-- Table structure for table `mascottes`
--

CREATE TABLE `mascottes` (
  `id` int NOT NULL,
  `lien_corps` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `lien_visage` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lien_accessoire` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lien_sport` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lien_background` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
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
(1, 'Accessoires1.png'),
(2, 'Accessoires2.png'),
(3, 'Accessoires3.png'),
(4, 'Accessoires4.png'),
(5, 'Accessoires5.png'),
(6, 'Accessoires6.png'),
(7, 'Accessoires7.png'),
(8, 'Accessoires8.png'),
(9, 'Accessoires9.png'),
(10, 'Accessoires10.png'),
(11, 'Accessoires11.png'),
(12, 'Accessoires12.png'),
(13, 'Accessoires13.png'),
(14, 'Accessoires14.png');

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
(1, 'Emotions1.png'),
(2, 'Emotions2.png'),
(3, 'Emotions3.png'),
(4, 'Emotions4.png'),
(5, 'Emotions5.png'),
(6, 'Emotions6.png'),
(7, 'Emotions7.png'),
(8, 'Emotions8.png'),
(9, 'Emotions9.png'),
(10, 'Emotions10.png'),
(11, 'Emotions11.png'),
(12, 'Emotions12.png');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `corps`
--
ALTER TABLE `corps`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `hat`
--
ALTER TABLE `hat`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `mascottes`
--
ALTER TABLE `mascottes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sport`
--
ALTER TABLE `sport`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `visage`
--
ALTER TABLE `visage`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
