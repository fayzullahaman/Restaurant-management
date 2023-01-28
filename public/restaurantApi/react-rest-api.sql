-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2022 at 12:20 AM
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
-- Database: `react-rest-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(64) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `image`) VALUES
(1, 'Aman', 'admin@gmail.com', 'admin', 'admin.jpg'),
(3, 'asdf', 'asd@gmail.com', '1234', 'image.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `boking`
--

CREATE TABLE `boking` (
  `bok-id` int(11) NOT NULL,
  `bok-name` varchar(100) NOT NULL,
  `bok-email` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `people` varchar(100) NOT NULL,
  `sp-request` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chefs`
--

CREATE TABLE `chefs` (
  `chf_id` int(11) NOT NULL,
  `chf_name` varchar(100) NOT NULL,
  `chf_designation` varchar(50) NOT NULL,
  `chf_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chefs`
--

INSERT INTO `chefs` (`chf_id`, `chf_name`, `chf_designation`, `chf_image`) VALUES
(1, 'Allauddin Alo', 'Main Chef', 'https://static.vecteezy.com/system/resources/previews/002/521/567/original/cartoon-cute-italian-chef-with-tongue-out-serving-food-vector.jpg'),
(2, 'Fayzullah Aman', 'Main Chef', 'https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=2000'),
(3, 'Naymur Rahman', 'Main Chef', 'https://img.freepik.com/premium-vector/chef-mascot-cartoon-illustration_27088-397.jpg?w=2000'),
(4, 'Golam Rabbany', 'Main Chef', 'https://i.pinimg.com/736x/81/93/e9/8193e901ae655dd2fb89354e1ac6331a.jpg'),
(5, 'Aklima Akter', 'Main Chef', 'https://static.vecteezy.com/system/resources/previews/005/604/210/original/a-woman-chef-wearing-a-white-coat-red-apron-and-a-kitchen-hood-on-her-head-while-smiling-free-vector.jpg'),
(6, 'Sharmin Sultana', 'Main Chef', 'https://previews.123rf.com/images/mexart/mexart2104/mexart210400047/168248871-girl-chef-logo-cartoon-vector-icon-illustration-isolated-on-premium-vector.jpg'),
(7, 'Jannatul Ferdaus', 'Main Chef', 'https://img.freepik.com/premium-vector/cute-chef-girl-uniform-logo-cartoon-premium-vector_511562-35.jpg?w=2000'),
(8, 'Anamul Islam', 'Main Chef', 'https://anantacreative.com/wp-content/uploads/2020/10/Restaurant-Man-1.png'),
(10, 'asdfasdf', 'main chefs', 'C:fakepathphoto_2022-03-28_19-54-35.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `message` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `subject`, `message`) VALUES
(1, 'aman', 'aman@gmail.com', 'food', 'asd asdf asdf '),
(2, 'asdfasdf', 'alo@gmail.com', 'food', 'asdf asdf asd fasdf');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `details` varchar(200) NOT NULL,
  `price` varchar(20) NOT NULL,
  `category` varchar(50) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `details`, `price`, `category`, `image`) VALUES
(1, 'Chicken Burger', 'Ipsum ipsum clita erat amet dolor justo diam', '115', 'breakfast', 'https://simply-delicious-food.com/wp-content/uploads/2022/06/Grilled-chicken-burgers2-500x500.jpg'),
(4, 'Parata', 'If you are visiting Bangladesh, the most authentic local way of starting your day', '20.00', 'breakfast', 'https://getyourfish.com/wp-content/uploads/2021/01/Parata-iii.jpg'),
(8, 'Bhuna Chichuri', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '60', 'breakfast', 'https://cookishcreation.com/wp-content/uploads/2022/05/Beef-Khichuri-500x500.jpg'),
(9, 'Vat Dal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '50', 'breakfast', 'https://static.hungrynaki.com/hungrynaki-v4/restaurants/nababi_voj_restaurant/items/nababi_voj_restaurant_sada_vat_thumbnail_1623501021410.png'),
(10, 'Kacchi Biriyani', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'lunch', 'https://cdn.shopify.com/s/files/1/0576/5355/9461/products/KacchiBiryaniMutton_large.jpg?v=1625888199'),
(11, 'Beef Kala Bhuna', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '200', 'lunch', 'https://foodsfinding.com/wp-content/uploads/2022/07/beef-kala-bhuna-recipe.jpg'),
(12, 'Bhuna Khichuri', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '80', 'lunch', 'https://cookishcreation.com/wp-content/uploads/2022/05/Beef-Khichuri-500x500.jpg'),
(13, 'Morog Polao', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'lunch', 'https://www.chinipatadoi.com/wp-content/uploads/2020/06/Morog-Polao-3-1-500x500.jpg'),
(14, 'Kacchi Biriyani', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'dinner', 'https://cdn.shopify.com/s/files/1/0576/5355/9461/products/KacchiBiryaniMutton_large.jpg?v=1625888199'),
(15, 'Grilled Chicken', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '200', 'dinner', 'https://easychickenrecipes.com/wp-content/uploads/2020/06/grilled-chicken-recipe-best-5-of-6-500x500.jpg'),
(16, 'Bhuna Khichuri', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '80', 'dinner', 'https://cookishcreation.com/wp-content/uploads/2022/05/Beef-Khichuri-500x500.jpg'),
(17, 'Morog Polao', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'dinner', 'https://www.chinipatadoi.com/wp-content/uploads/2020/06/Morog-Polao-3-1-500x500.jpg'),
(19, 'Fuska', 'lorem lorem', '150', 'breakfast', 'https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/dahi-puri/dahi-puri.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `message` varchar(200) NOT NULL,
  `order_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `email`, `address`, `contact`, `message`, `order_time`) VALUES
(6, 'Alauddin', 'alo@gmail.com', 'Banasree', '32416598', 'Ami ki khabo', '2022-12-20 11:16:05'),
(8, 'asdfasd', 'asdf@example.com', 'Badda', '86154354', 'asdf asdf asdf ', '2022-12-20 15:06:26'),
(9, 'asdf', 'alo@gmail.com', 'Banasree', '861543546546', 'sadf asdf ', '2022-12-20 16:28:20'),
(10, 'asdf', 'asdf@example.com', 'Banasree', '86154354', 'asdf asdf asd', '2022-12-20 19:08:13');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `details` varchar(100) NOT NULL,
  `icon` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `details`, `icon`) VALUES
(1, 'Master Chefs', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://thumbs.dreamstime.com/b/logo-template-restaurant-chef-vector-stock-happy-face-wearing-hat-69432796.jpg'),
(2, 'Quality Food', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://img.freepik.com/free-vector/burger-with-fried-chicken-french-fries-soda-cartoon-vector-icon-illustration-fast-food-icon_138676-1972.jpg?w=2000'),
(3, 'Online Order', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-online-food-background-with-gourmet-menu-phone-interface-png-image_3683985.jpg'),
(4, '24/7 Service', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://images.all-free-download.com/images/graphiclarge/service_and_support_for_customers_24_hours_a_day_and_7_days_a_week_icon_open_around_the_vector_clock_6833320.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `contact`, `address`, `password`, `create_time`) VALUES
(1, 'asdfasdf', 'asdf@example.com', '86154354', 'fds gfdg ghfdy hgf', '1234', '2022-12-20 17:45:47'),
(2, 'Aman', 'aman@gmail.com', '86154354', 'badda', '1234', '2022-12-20 18:44:37'),
(3, 'Aman', 'aman@gmail.com', '86154354', 'badda', '1234', '2022-12-20 18:44:41'),
(4, 'Aman', 'aman@gmail.com', '86154354', 'badda', '1234', '2022-12-20 18:44:50'),
(5, 'Aman', 'aman@gmail.com', '86154354', 'badda', '1234', '2022-12-20 18:44:51'),
(6, 'Aman', 'aman@gmail.com', '86154354', 'badda', '1234', '2022-12-20 18:44:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `boking`
--
ALTER TABLE `boking`
  ADD PRIMARY KEY (`bok-id`);

--
-- Indexes for table `chefs`
--
ALTER TABLE `chefs`
  ADD PRIMARY KEY (`chf_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `boking`
--
ALTER TABLE `boking`
  MODIFY `bok-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chefs`
--
ALTER TABLE `chefs`
  MODIFY `chf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
