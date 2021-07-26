CREATE DATABASE assignment2;
use assignment2;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `cars`;
CREATE TABLE `cars` (
  `car_id` int(10) unsigned DEFAULT NULL,
  `car_category` varchar(20) DEFAULT NULL,
  `car_name` varchar(20) DEFAULT NULL,
  `car_availability` bit DEFAULT NULL,
  `car_brand` varchar(20) DEFAULT NULL,
  `car_model` varchar(20) DEFAULT NULL,
  `car_model_year` int(10) DEFAULT NULL,
  `car_mileage` int(10) DEFAULT NULL,
  `car_fuel_type` varchar(20) DEFAULT NULL,
  `car_seats` int(10) DEFAULT NULL,
  `car_price_per_day` float(8,2) DEFAULT NULL,
  `car_description` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
-- BEGIN;
-- INSERT INTO `products` VALUES (1000, 'Fish Fingers', 2.55, '500 gram', 1500);
-- INSERT INTO `products` VALUES ();
-- INSERT INTO `products` VALUES ();
-- COMMIT;
