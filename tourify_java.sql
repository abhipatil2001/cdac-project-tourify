-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: tourify_java_db
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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int DEFAULT '0',
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_status_tb`
--

LOCK TABLES `booking_status_tb` WRITE;
/*!40000 ALTER TABLE `booking_status_tb` DISABLE KEYS */;
INSERT INTO `booking_status_tb` VALUES (201,'2024-06-26 05:41:56',0,'booked'),(202,'2024-06-26 05:41:56',0,'cancelled'),(203,'2024-06-26 05:41:56',0,'checkout');
/*!40000 ALTER TABLE `booking_status_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings_tb`
--

DROP TABLE IF EXISTS `bookings_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `bill` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `from_date` date NOT NULL,
  `is_deleted` int DEFAULT '0',
  `to_date` date NOT NULL,
  `property_id` bigint DEFAULT NULL,
  `status_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5v3nmre9hd5ft3s2jmyaa2w3c` (`property_id`),
  KEY `FKrc15f2q24jkl6n5cr3rip46or` (`status_id`),
  KEY `FKq7he3hvsfqwmfdptkcm1gu30k` (`user_id`),
  CONSTRAINT `FK5v3nmre9hd5ft3s2jmyaa2w3c` FOREIGN KEY (`property_id`) REFERENCES `properties_tb` (`id`),
  CONSTRAINT `FKq7he3hvsfqwmfdptkcm1gu30k` FOREIGN KEY (`user_id`) REFERENCES `users_tb` (`id`),
  CONSTRAINT `FKrc15f2q24jkl6n5cr3rip46or` FOREIGN KEY (`status_id`) REFERENCES `booking_status_tb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings_tb`
--

LOCK TABLES `bookings_tb` WRITE;
/*!40000 ALTER TABLE `bookings_tb` DISABLE KEYS */;
INSERT INTO `bookings_tb` VALUES (1,19560,'2024-06-26 07:30:51','2024-05-26',0,'2024-05-30',1,201,3),(2,19560,'2024-06-26 07:31:58','2024-05-20',0,'2024-05-25',2,201,3),(3,1220,'2024-06-26 07:34:02','2024-05-25',0,'2024-05-23',1,201,3),(4,1220,'2024-06-26 07:36:02','2024-05-25',0,'2024-05-30',1,201,3),(5,36452,'2024-06-28 12:16:36','2024-06-01',0,'2024-06-05',2,201,3),(6,363636,'2024-06-28 12:21:47','2024-07-02',0,'2024-06-06',2,201,3);
/*!40000 ALTER TABLE `bookings_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_tb`
--

DROP TABLE IF EXISTS `categories_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(500) NOT NULL,
  `is_deleted` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_tb`
--

LOCK TABLES `categories_tb` WRITE;
/*!40000 ALTER TABLE `categories_tb` DISABLE KEYS */;
INSERT INTO `categories_tb` VALUES (301,'Villa','2024-06-26 05:47:26','A villa is a type of large, luxurious house that is often      used as a vacation or holiday home. Villas are typically located in scenic or desirable locations and often have amenities such as pools, gardens, and spacious living areas.',0),(302,'Bunglow','2024-06-26 05:47:26',' A small, single-story house or cottage, typically with a veranda.',0),(303,'Mansion','2024-06-26 05:47:26','A mansion tends to have a huge kitchen, not to mention a large laundry room, big bathrooms, walk-in closets, dressing rooms. All are often equipped with state-of-the-art appliances and high-end fixtures, and other coveted add-ons. Smart technology and systems are throughout. Entertainment areas.',0);
/*!40000 ALTER TABLE `categories_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places_tb`
--

DROP TABLE IF EXISTS `places_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `places_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int DEFAULT '0',
  `place` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places_tb`
--

LOCK TABLES `places_tb` WRITE;
/*!40000 ALTER TABLE `places_tb` DISABLE KEYS */;
INSERT INTO `places_tb` VALUES (1,'2024-06-26 05:50:25',0,'Pune'),(2,'2024-06-26 05:50:25',0,'Guwahati'),(3,'2024-06-26 05:50:25',0,'Jammu & Kashmir'),(4,'2024-06-26 05:50:25',0,'Manali'),(5,'2024-06-26 05:50:25',0,'Agra'),(6,'2024-06-26 05:50:55',0,'Jaipur'),(7,'2024-06-26 05:50:55',0,'Alleppey'),(8,'2024-06-26 05:50:55',0,'Lakshadweep'),(9,'2024-06-26 05:50:55',0,'Gangtok'),(10,'2024-06-26 05:50:55',0,'Jammu - Kashmir');
/*!40000 ALTER TABLE `places_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `properties_tb`
--

DROP TABLE IF EXISTS `properties_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `properties_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(500) NOT NULL,
  `img` varchar(5000) NOT NULL,
  `is_deleted` int DEFAULT '0',
  `rate` double NOT NULL,
  `title` varchar(100) NOT NULL,
  `category_id` bigint DEFAULT NULL,
  `place_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh0enc1y18e3eqewpjsbbbtrib` (`category_id`),
  KEY `FKrlhwl9t9vg2yd3qbh6ngqj1nn` (`place_id`),
  KEY `FKrg0v1hdx9ohe2o0n7j0lgn41g` (`user_id`),
  CONSTRAINT `FKh0enc1y18e3eqewpjsbbbtrib` FOREIGN KEY (`category_id`) REFERENCES `categories_tb` (`id`),
  CONSTRAINT `FKrg0v1hdx9ohe2o0n7j0lgn41g` FOREIGN KEY (`user_id`) REFERENCES `users_tb` (`id`),
  CONSTRAINT `FKrlhwl9t9vg2yd3qbh6ngqj1nn` FOREIGN KEY (`place_id`) REFERENCES `places_tb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `properties_tb`
--

LOCK TABLES `properties_tb` WRITE;
/*!40000 ALTER TABLE `properties_tb` DISABLE KEYS */;
INSERT INTO `properties_tb` VALUES (1,'Fatehabad Road, Agra','2024-06-26 06:01:36','Overlooking the iconic Taj Mahal, this stunning property features well-appointed rooms, multiple dining spots, a lavish spa and a wide range of upscale amenities.','https://r1imghtlak.mmtcdn.com/0da105f0805911e9bfbb0242ac110004.jpg?&output-quality=75&downsize=520:350&crop=520:350;0,16&output-format=jpg&downsize=821:550&crop=821:550',0,3927,'Radisson Hotel Agra',302,5,6),(2,'Fatehabad Road, Agra','2024-06-26 06:01:43','Time-travel into a Mughal era with a stay at the opulent ITC Mughal, A Luxury Collection Resort & Spa, Agra','https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmughal-agra/images/overview-landing-page/overview/desktop/spa-pool.png',0,6000,'ITC Mughal - A Luxury Collection Hotel',301,5,6),(3,'Taj East Gate Road, Agra, Uttar Pradesh, 28 2001','2024-06-26 12:25:25','You can look forward to a poolside bar, shopping on-site and a garden at The Oberoi Amarvilas, Agra. Treat yourself to a body treatment, a massage or a body scrub at The Oberoi Spa, the on-site spa. At the two on-site restaurants, enjoy breakfast, lunch, dinner and international cuisine.','https://images.trvl-media.com/lodging/1000000/560000/551400/551355/e3371e9e.jpg?impolicy=resizecrop&rw=1200&ra=fit',0,1902,'The Oberoi Amarvilas',301,5,6);
/*!40000 ALTER TABLE `properties_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews_tb`
--

DROP TABLE IF EXISTS `reviews_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int DEFAULT '0',
  `rating` int NOT NULL,
  `review` varchar(500) NOT NULL,
  `property_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKi8y3hxyo3uwg83pffdfj0bio0` (`property_id`),
  CONSTRAINT `FKi8y3hxyo3uwg83pffdfj0bio0` FOREIGN KEY (`property_id`) REFERENCES `properties_tb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews_tb`
--

LOCK TABLES `reviews_tb` WRITE;
/*!40000 ALTER TABLE `reviews_tb` DISABLE KEYS */;
INSERT INTO `reviews_tb` VALUES (2,'2024-06-26 10:43:18',0,5,'Best hospitality',2),(3,'2024-06-28 12:30:57',0,4,'Beautiful place',3);
/*!40000 ALTER TABLE `reviews_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_tb`
--

DROP TABLE IF EXISTS `roles_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int DEFAULT '0',
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_tb`
--

LOCK TABLES `roles_tb` WRITE;
/*!40000 ALTER TABLE `roles_tb` DISABLE KEYS */;
INSERT INTO `roles_tb` VALUES (101,'2024-06-25 16:26:06',0,'normal_user'),(102,'2024-06-25 16:26:06',0,'property_owner'),(103,'2024-06-25 16:26:06',0,'admin');
/*!40000 ALTER TABLE `roles_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_tb`
--

DROP TABLE IF EXISTS `users_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_tb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(100) NOT NULL,
  `is_deleted` int DEFAULT '0',
  `name` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKjs3e7oaq89mxg4klr7dp33sx5` (`email`),
  UNIQUE KEY `UK8p1lem9ron27ls4c4jxwkpn97` (`phone`),
  KEY `FKcdd2blpkfx09rfx5rf4tldr9r` (`role_id`),
  CONSTRAINT `FKcdd2blpkfx09rfx5rf4tldr9r` FOREIGN KEY (`role_id`) REFERENCES `roles_tb` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_tb`
--

LOCK TABLES `users_tb` WRITE;
/*!40000 ALTER TABLE `users_tb` DISABLE KEYS */;
INSERT INTO `users_tb` VALUES (3,'pune','2024-06-25 16:32:39','piyush@g.com',0,'Piyush','piyush','7218118601',101),(6,'Pune, India','2024-06-26 05:54:54','owner@g.com',0,'owner','owner','7218118604',102),(8,'vijay update','2024-06-26 10:40:55','vijay@g.com',0,'vijay update','vijayupdate','9850118666',101),(9,'Stark Industries','2024-06-28 11:47:20','tony@g.com',0,'tony','tony','9850689141',102);
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

-- Dump completed on 2024-07-04 22:53:51
