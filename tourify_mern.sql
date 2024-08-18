-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: tourify_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking_status_tb`
--

DROP TABLE IF EXISTS `booking_status_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_status_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_status_tb`
--

LOCK TABLES `booking_status_tb` WRITE;
/*!40000 ALTER TABLE `booking_status_tb` DISABLE KEYS */;
INSERT INTO `booking_status_tb` VALUES (201,'booked','2024-05-03 17:58:51'),(202,'cancelled','2024-05-03 17:58:51'),(203,'checkout','2024-05-03 17:58:51');
/*!40000 ALTER TABLE `booking_status_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings_tb`
--

DROP TABLE IF EXISTS `bookings_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `user_id` int NOT NULL,
  `property_id` int NOT NULL,
  `status_id` int NOT NULL DEFAULT '201',
  `bill` double DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `status_id` (`status_id`),
  KEY `user_id` (`user_id`),
  KEY `property_id` (`property_id`),
  CONSTRAINT `bookings_tb_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `booking_status_tb` (`id`),
  CONSTRAINT `bookings_tb_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users_tb` (`id`),
  CONSTRAINT `bookings_tb_ibfk_3` FOREIGN KEY (`property_id`) REFERENCES `properties_tb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings_tb`
--

LOCK TABLES `bookings_tb` WRITE;
/*!40000 ALTER TABLE `bookings_tb` DISABLE KEYS */;
INSERT INTO `bookings_tb` VALUES (1,'2024-06-20','2024-06-25',3,1,201,19635,'2024-06-18 23:26:35'),(2,'2024-06-25','2024-06-29',3,3,201,180000,'2024-06-18 23:27:06'),(3,'2024-06-20','2024-06-24',2,4,201,25600,'2024-06-19 18:38:50'),(4,'2024-06-23','2024-06-26',3,3,201,135000,'2024-06-22 19:56:20'),(5,'2024-06-28','2024-07-05',3,4,201,44800,'2024-06-26 14:18:20'),(6,'2024-06-27','2024-06-30',3,2,201,18000,'2024-06-26 15:33:53'),(7,'2024-07-05','2024-07-11',3,1,201,23562,'2024-06-26 15:48:58'),(8,'2024-06-27','2024-06-30',3,5,201,21000,'2024-06-26 16:04:12');
/*!40000 ALTER TABLE `bookings_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_tb`
--

DROP TABLE IF EXISTS `categories_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_tb`
--

LOCK TABLES `categories_tb` WRITE;
/*!40000 ALTER TABLE `categories_tb` DISABLE KEYS */;
INSERT INTO `categories_tb` VALUES (301,'Villa','A villa is a type of large, luxurious house that is often      used as a vacation or holiday home. Villas are typically located in scenic or desirable locations and often have amenities such as pools, gardens, and spacious living areas.','2024-05-03 18:19:09'),(302,'Bunglow',' A small, single-story house or cottage, typically with a veranda.','2024-05-03 18:19:09'),(303,'Mansion','A mansion tends to have a huge kitchen, not to mention a large laundry room, big bathrooms, walk-in closets, dressing rooms. All are often equipped with state-of-the-art appliances and high-end fixtures, and other coveted add-ons. Smart technology and systems are throughout. Entertainment areas.','2024-05-03 18:19:09');
/*!40000 ALTER TABLE `categories_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places_tb`
--

DROP TABLE IF EXISTS `places_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `places_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places_tb`
--

LOCK TABLES `places_tb` WRITE;
/*!40000 ALTER TABLE `places_tb` DISABLE KEYS */;
INSERT INTO `places_tb` VALUES (1,'Pune','2024-05-03 17:35:37'),(2,'Guwahati','2024-05-03 17:35:37'),(3,'Jammu & Kashmir','2024-05-03 17:35:37'),(4,'Manali','2024-05-03 17:35:37'),(5,'Agra','2024-06-03 18:41:13'),(11,'Jaipur','2024-06-19 15:53:02'),(12,'Alleppey','2024-06-19 15:53:02'),(13,'Lakshadweep','2024-06-19 15:53:02'),(14,'Gangtok','2024-06-19 15:53:02'),(15,'Jammu - Kashmir','2024-06-19 15:53:02');
/*!40000 ALTER TABLE `places_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `properties_tb`
--

DROP TABLE IF EXISTS `properties_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `properties_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `rate` double NOT NULL,
  `description` varchar(500) NOT NULL,
  `img` varchar(5000) DEFAULT NULL,
  `is_deleted` int DEFAULT '0',
  `place_id` int NOT NULL,
  `category_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  KEY `place_id` (`place_id`),
  KEY `category_id` (`category_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `properties_tb_ibfk_1` FOREIGN KEY (`place_id`) REFERENCES `places_tb` (`id`),
  CONSTRAINT `properties_tb_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories_tb` (`id`),
  CONSTRAINT `properties_tb_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users_tb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `properties_tb`
--

LOCK TABLES `properties_tb` WRITE;
/*!40000 ALTER TABLE `properties_tb` DISABLE KEYS */;
INSERT INTO `properties_tb` VALUES (1,'Radisson Hotel Agra','Fatehabad Road, Agra',3927,'Overlooking the iconic Taj Mahal, this stunning property features well-appointed rooms, multiple dining spots, a lavish spa and a wide range of upscale amenities.','https://r1imghtlak.mmtcdn.com/0da105f0805911e9bfbb0242ac110004.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,16&output-format=jpg&downsize=821:550&crop=821:550',0,5,302,8,'2024-06-18 22:44:23'),(2,'ITC Mughal - A Luxury Collection Hotel','Fatehabad Road, Agra',6000,'Time-travel into a Mughal era with a stay at the opulent ITC Mughal, A Luxury Collection Resort & Spa, Agra','https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmughal-agra/images/overview-landing-page/overview/desktop/spa-pool.png',0,5,301,8,'2024-06-18 22:47:58'),(3,'The Oberoi Amarvilas, Agra','Taj East Gate Road, Agra, Uttar Pradesh, 28 2001',45000,'You can look forward to a poolside bar, shopping on-site and a garden at The Oberoi Amarvilas, Agra. Treat yourself to a body treatment, a massage or a body scrub at The Oberoi Spa, the on-site spa. At the two on-site restaurants, enjoy breakfast, lunch, dinner and international cuisine.','https://images.trvl-media.com/lodging/1000000/560000/551400/551355/e3371e9e.jpg?impolicy=resizecrop&rw=1200&ra=fit',0,5,301,8,'2024-06-18 23:18:14'),(4,'Trident Agra','Fatehabad Road, 282001 Agra, India ',6400,'Located 1.5 km from Taj Mahal, Trident Agra features an outdoor pool and 24-hour front desk. A business centre, restaurant and bar are available. Some rooms offer garden or pool views. Free WiFi is available in the rooms of the property.','https://cf2.bstatic.com/xdata/images/hotel/max1280x900/205127985.jpg?k=d9d77d113744673503c360665e6b6b936e0c82084eeb6ff4b5f56a554ea9ce93&o=&hp=1',0,5,301,14,'2024-06-19 17:48:07'),(5,'DoubleTree by Hilton Agra','B/H - 1&2, Taj Nagri Phase II, Taj Ganj, 282001 Agra, India',7000,'DoubleTree by Hilton Hotel, Agra, is 7 km from Agra Cantonment Railway Station and 14 km from Agra Airport. The Taj Mahal is 2.7 km from the hotel, while Agra Fort is less than 5 km away. The property is a over 5 km from Sadar Bazaar and around 17 km from Akbar\'s Tomb. Mehtab Bagh is 9 km and Fatehpur Sikri is 42 km away.\n','https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483827601.jpg?k=92796143b249ac85d9ba6c9fcf68a6af539d7904c1e60ba9f071abebe192d065&o=&hp=1',0,5,303,14,'2024-06-26 15:52:29');
/*!40000 ALTER TABLE `properties_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews_tb`
--

DROP TABLE IF EXISTS `reviews_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `property_id` int NOT NULL,
  `review` varchar(500) DEFAULT NULL,
  `rating` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `property_id` (`property_id`),
  CONSTRAINT `reviews_tb_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties_tb` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews_tb`
--

LOCK TABLES `reviews_tb` WRITE;
/*!40000 ALTER TABLE `reviews_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_tb`
--

DROP TABLE IF EXISTS `roles_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_tb`
--

LOCK TABLES `roles_tb` WRITE;
/*!40000 ALTER TABLE `roles_tb` DISABLE KEYS */;
INSERT INTO `roles_tb` VALUES (101,'normal_user','2024-05-03 16:07:07'),(102,'property_owner','2024-05-03 16:07:07'),(103,'admin','2024-05-03 16:07:07');
/*!40000 ALTER TABLE `roles_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_tb`
--

DROP TABLE IF EXISTS `users_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(100) NOT NULL,
  `role_id` int NOT NULL,
  `is_deleted` int DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_tb_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles_tb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_tb`
--

LOCK TABLES `users_tb` WRITE;
/*!40000 ALTER TABLE `users_tb` DISABLE KEYS */;
INSERT INTO `users_tb` VALUES (2,'Tony Stark','tony@gmail.com','1f7cbaa9168ffce48872d8fc4e5429dee55ed8f21d8d84bccd6aaa2a72ae1d79','9805636963','USA',101,0,'2024-05-03 16:10:08'),(3,'Piyush Shinde','piyush@gmail.com','ef3959ff4177a890922f2784e5e9ef854e7d992f39e23d94d9087b90af621c42','+91 7218118601','Buldana',101,0,'2024-05-03 17:25:04'),(4,'Jarvis Shinde','jarvis@gmail.com','dcb08f2193bf02837eb5902e71da69a5396b68d75b5ca426142b819a85e7f968','9856362546','Tony\'s Home',101,0,'2024-05-09 18:24:11'),(5,'Virat Kohli','virat@gmail.com','e57a847cac4d1ee17cc29b29774052e3f404d5f6a3a564234c01292d68352541','9836251478','Delhi, India',101,0,'2024-05-09 18:33:00'),(6,'M.S. Dhoni','dhoni@gmail.com','db483c4e3344d495ee6eec3285eeec37a36abf66124b159fb18505018313c7f5','9856231456','Ranchi, Jharkhand',101,0,'2024-05-13 15:32:52'),(7,'Saurabh Pable','saurabh@gmail.com','75276fac02487c1489148daaa4d9c648908b13e70110e0119dc328bdcd999cd9','9146427233','Pirungut, Pune',101,0,'2024-05-14 15:07:59'),(8,'Cristiano Ronaldo','cristiano@gmail.com','b89d996c381a3fa1fa8ef1edb7d559ded68029cbf1dd1ee94c4745bd8569a030','23568269','FCB',102,0,'2024-05-14 15:58:51'),(10,'Admin','admin@gmail.com','e86f78a8a3caf0b60d8e74e5942aa6d86dc150cd3c03338aef25b7d2d7e3acc7','7218118602','Goa',103,0,'2024-05-14 16:09:58'),(11,'Ishwar Inamdar','ishwar@gmail.com','23a0f9a204c349cdfb59b8d72c7ee0d47325de59610c7c28fa28c345e2fd3eb5','9865023645','Solapur, Maharashtra',101,0,'2024-05-16 15:09:36'),(12,'Saylee','saylee@gmail.com','8f0b0c36b1c175c97d94d989e4ca54e3264b93aa64fa30a81e429442b74c6e75','98563625678','Akola',101,0,'2024-05-19 09:01:07'),(14,'Property Owner 1','owner@gmail.com','553feacf899a72916b2b50e4c95f587a06d6d1b8b4e6b433beb5fea315d0acb0','9067585394','Sikkim, Gangtok',102,0,'2024-06-19 15:11:57');
/*!40000 ALTER TABLE `users_tb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-04 22:52:58
