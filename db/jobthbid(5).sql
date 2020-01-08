-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2020 at 03:18 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobthbid`
--

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `phone` varchar(225) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `company` varchar(225) NOT NULL,
  `website` varchar(225) NOT NULL,
  `location` varchar(225) NOT NULL,
  `bio` varchar(225) NOT NULL,
  `status` varchar(225) NOT NULL,
  `skills` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `user_id`, `phone`, `address`, `created_at`, `updated_at`, `company`, `website`, `location`, `bio`, `status`, `skills`) VALUES
(1, 52, '7894561230', 'demo', '2019-12-17 17:48:48', '2019-12-17 18:48:48', '', '', '', '', '', ''),
(2, 53, '7894561230', '', '2019-12-23 17:13:24', '2019-12-23 17:13:24', 'asas1', 'dsdsd', '', '', '', ''),
(3, 54, '111111111', '', '2019-12-30 20:20:25', '2019-12-30 20:20:25', 've', 'dsdsds', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role_name` varchar(225) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `role_name`, `created_at`, `status`) VALUES
(1, 'Administrator', '2019-12-31 08:20:09', 1),
(2, 'Manager', '2019-12-31 08:20:55', 1),
(3, 'view_only', '2019-12-31 08:21:58', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `profile_image` varchar(255) NOT NULL,
  `status` tinyint(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`, `profile_image`, `status`, `date`) VALUES
(46, 'ajeet test email', '$2a$10$w0z6KKRdiaUoMXFAnVOvYuhv4T0F1uvrlNy2AgfBxaLeA686JBGb6', 'rlepp@solomonsinnovation.com', '', 1, '2019-12-17 16:32:25'),
(52, 'ajeet', '$2a$10$D6C0q8JmshlCDQySm0yTkOLcfYGsjI76KRaplLxwnp6KzzgLxZJVa', 'akumar78@gmail.com', '', 1, '2019-12-17 16:32:25'),
(53, 'ajeet', '$2a$10$SkppGPNuHWJEEhV0ljR8T.Ijit1rKyDRohZMJntbaoAzPcFiJVf9a', 'akumar80@gmail.com', 'dc12736a767313f970aa9d05c601410f.jpg', 1, '2019-12-17 16:33:15'),
(54, 'ajeet', '$2a$10$LFVrSzEIr2s5KKPlgRmNNuHxVM4LeMRj4lWDP3os9K16.Q/f7oZ/y', 'abc77@gmail.com', '', 1, '2019-12-17 19:46:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
