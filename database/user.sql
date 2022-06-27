-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 27 juin 2022 à 14:38
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `codix`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `nickname` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `cpassword` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone` int(15) NOT NULL,
  `country` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`nickname`, `password`, `cpassword`, `email`, `phone`, `country`) VALUES
('ahmed', '123456', '123456', 'ahmed@gmail.com', 123454556, 'france'),
('', '', '', '', 0, ''),
('souissi', '123456', '412563', 'souissi@gmail.com', 123654, 'Taiwan'),
('malek', '123654', '123546', 'malekhh', 74, ''),
('dytug', 'xcgvuhbij', 'cgvuhbij', 'cgvhbjn', 7, ''),
('ghjk', 'uhijok', 'guhijok', 'ygyuhijokp', 0, 'Haiti'),
('', '', 'undefined', 'undefined', 0, 'undefined'),
('ahmed', '123456', 'undefined', 'undefined', 0, 'undefined');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
