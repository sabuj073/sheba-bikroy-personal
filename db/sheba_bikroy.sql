-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2021 at 08:03 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sheba_bikroy`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `area_id` int(11) NOT NULL,
  `district_id` int(11) DEFAULT NULL,
  `thana_id` int(11) DEFAULT NULL,
  `area_name` varchar(255) DEFAULT NULL,
  `bn_area_name` text DEFAULT NULL,
  `categories` text DEFAULT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `delivery_charge` text DEFAULT NULL,
  `over_delivery_charge` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`area_id`, `district_id`, `thana_id`, `area_name`, `bn_area_name`, `categories`, `cat_id`, `delivery_charge`, `over_delivery_charge`) VALUES
(7, 8, 9, 'Chairman Bari', 'চেয়ারম্যান বারী', '1,3,4,5', NULL, '50', '1000'),
(8, 8, 9, 'Wirless Gait', 'ওয়্যারলেস চালনা', '1,3,4,5', NULL, '60', '800'),
(12, 0, 0, 'Test Area?', 'পরীক্ষা এলাকা?', '1,3,4,5', NULL, '80', '100'),
(13, 1, 1, 'Test Area', 'পরীক্ষা এলাকা', '1,3', NULL, '50', '200');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand-_id` int(11) NOT NULL,
  `brand_title` text DEFAULT NULL,
  `brand_icon` text DEFAULT NULL,
  `brand_alt` text DEFAULT NULL,
  `brand_slug` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand-_id`, `brand_title`, `brand_icon`, `brand_alt`, `brand_slug`) VALUES
(1, NULL, 'brands/brand01.jpg', NULL, NULL),
(2, NULL, 'brands/brand02.jpg', NULL, NULL),
(3, NULL, 'brands/brand03.jpg', NULL, NULL),
(4, NULL, 'brands/brand04.jpg', NULL, NULL),
(5, NULL, 'brands/brand05.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `cat_title` text DEFAULT NULL,
  `bn_cat_title` text DEFAULT NULL,
  `cat_icon` text DEFAULT NULL,
  `alt` text DEFAULT NULL,
  `cat_image` text DEFAULT NULL,
  `cat_banner` text DEFAULT NULL,
  `cat_banner_2` text DEFAULT NULL,
  `cat_slug` text DEFAULT NULL,
  `area_id` text DEFAULT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_title`, `bn_cat_title`, `cat_icon`, `alt`, `cat_image`, `cat_banner`, `cat_banner_2`, `cat_slug`, `area_id`, `meta_title`, `meta_description`) VALUES
(1, 'Grocery & Cooking', 'মুদি ও রান্না', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1630022666/copczqybnzqe0aqigzoh_rvwftx.png', NULL, 'category/1.GroceryorCooking.jpg', 'ibepxp4iedj0suypobnz.webp', 'Nestle-Offers.webp', 'Grocery-Cooking', '7', NULL, NULL),
(2, 'Drink & Beverage', '\r\nপানীয় এবং পানীয়', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1630022669/d7d17d6afbkhqukiqerz_rmsfcx.png', NULL, 'category/2.Drink&Beverage.png', 'tradesworth.webp', 'xbflsrwz67x8svobddub.webp', 'Drink-Beverage', '7', NULL, NULL),
(3, 'HomeCare & Cleaning', 'হোমকেয়ার এবং পরিষ্কার করা', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1630022669/d7d17d6afbkhqukiqerz_rmsfcx.png', NULL, 'category/3.HomeCare&Cleaning.jpg', 'moshar_jom.webp', 'tradesworth.webp', 'HomeCare-Cleaning', '7', NULL, NULL),
(4, 'Health & Sefty', '\r\nস্বাস্থ্য এবং সচেতনতা', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1630022674/gkuleiicfmqfhomi8dlr_vgrlqg.png', NULL, 'category/4.Health&Sefty.JPG', 'Nestle-Offers.webp', 'moshar_jom.webp', 'Health-Sefty', '7', NULL, NULL),
(5, 'Body & BeautyCare', 'শরীর এবং বিউটি কেয়ার', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1630022677/aqwhvtcqwq0adfeduazj_sqy7go.png', NULL, 'category/5.Body&BeautyCare.JPG', 'tradesworth.webp', 'moshar_jom.webp', 'Body-BeautyCare', '7', NULL, NULL),
(6, 'Baby Health Care', 'শিশুর স্বাস্থ্যসেবা', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1630022680/gtqyjkmqxjtcixw5ybsc_atagg3.png', NULL, 'category/6.BabyHealthCare.jpg', 'xbflsrwz67x8svobddub.webp', 'ibepxp4iedj0suypobnz.webp', 'Baby-Health-Care', '7', NULL, NULL),
(12, 'Electronics', 'Test Uploaded Category', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631248903/beverages_yxgowf.webp', NULL, 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631248903/beverages_exv5ti.webp', NULL, NULL, 'tset', NULL, 'test', 'test'),
(13, 'Test Uploaded Category', 'tresre', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631249923/snacks_djwqqo.webp', NULL, 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631249923/beverages_p3piuh.webp', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631249914/ibepxp4iedj0suypobnz_jzneq1.webp', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631249923/Nestle-Offers_twspr1.webp', 'resr', '7', 'fdsfsd', 'fdsfsdf');

-- --------------------------------------------------------

--
-- Table structure for table `customer_sms`
--

CREATE TABLE `customer_sms` (
  `sms_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `number` text DEFAULT NULL,
  `msg` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer_sms`
--

INSERT INTO `customer_sms` (`sms_id`, `name`, `number`, `msg`) VALUES
(6, 'Mehedi Hasan Sabuj', '01628606201', 'dghdgcbnccfcfh'),
(7, 'Mehedi Hasan Sabuj', '01534574136', 'hgdhvccv'),
(8, '', '', ''),
(9, '', '', ''),
(10, '', '', ''),
(11, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `district_id` int(11) NOT NULL,
  `district_name` text DEFAULT NULL,
  `bn_district_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`district_id`, `district_name`, `bn_district_name`) VALUES
(1, 'Test District', 'পরীক্ষা জেলা'),
(8, 'Dhaka', 'ঢাকা'),
(10, 'Gazipur', 'গাজীপুর'),
(11, 'Rajshahi', 'রাজশাহী'),
(12, 'Rangpur', 'রংপুর');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `info_id` int(11) NOT NULL,
  `shop_name` text DEFAULT NULL,
  `footer_text` text DEFAULT NULL,
  `phone_number` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `bn_address` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `facebook` text NOT NULL,
  `twitter` text NOT NULL,
  `instagram` text NOT NULL,
  `youtube` text DEFAULT NULL,
  `logo` text NOT NULL,
  `logo_alt` text DEFAULT NULL,
  `android` text DEFAULT NULL,
  `ios` text DEFAULT NULL,
  `notice` text DEFAULT NULL,
  `bn_notice` text DEFAULT NULL,
  `privacy_policy` text DEFAULT NULL,
  `bn_privacy_policy` text DEFAULT NULL,
  `return_policy` text DEFAULT NULL,
  `bn_return_policy` text DEFAULT NULL,
  `exchange_policy` text DEFAULT NULL,
  `bn_exchange_policy` text DEFAULT NULL,
  `terms` text DEFAULT NULL,
  `bn_terms` text DEFAULT NULL,
  `contact_us` text DEFAULT NULL,
  `bn_contact_us` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`info_id`, `shop_name`, `footer_text`, `phone_number`, `address`, `bn_address`, `email`, `facebook`, `twitter`, `instagram`, `youtube`, `logo`, `logo_alt`, `android`, `ios`, `notice`, `bn_notice`, `privacy_policy`, `bn_privacy_policy`, `return_policy`, `bn_return_policy`, `exchange_policy`, `bn_exchange_policy`, `terms`, `bn_terms`, `contact_us`, `bn_contact_us`) VALUES
(1, NULL, 'আমি কোনো ভাষাবিজ্ঞানী নই। তাই ভাষাগত, শব্দব্যঞ্জনগত শুদ্ধতা, তাল-লয় -এসব বিষয়ে আমার জ্ঞান খুবই প্রাথমিক। তাই এই লেখায় এসব ভাষাবিজ্ঞানগত তাত্ত্বিক উপাদান খুঁজতে যাওয়া অর্থহীন হবে। আমি চেষ্টা করেছি বাংলা ভাষায় দীর্ঘ শব্দ রাখতে, তবে তা দীর্ঘতম – এমন দাবি আমি করছি না। আমি চেষ্টা করেছি, অংক (সংখ্যা) রাখতে, যাতে ফন্টের অবয়বটা টের পাওয়া যায়। আমি চেষ্টা করেছি যুক্তাক্ষর রাখতে, যতিচিহ্ন রাখতে,… অর্ধমাত্রার অক্ষর, পূর্ণমাত্রার অক্ষর, মাত্রাহীন অক্ষর, কার-ফলাযুক্ত শব্দ, বাক্যের এখানে-ওখানে রাখতে।', '+880-1629 026 387', 'Head Office Sheba Bikroy\r\n3/4 Avenue-5, Block-A, Section-6, Bonani, Dhaka-1215', 'হেড অফিস সেবা বিক্রয়\r\n৩/৪ এভিনিউ-৫, ব্লক-এ, সেকশন-৬, বনানী, ঢাকা-১২১৫', ' info@shebabikroy.com', 'https://www.facebook.com/techdynobd/', 'https://twitter.com/TechDynoBD', 'https://www.instagram.com/techdynobd/', 'https://www.instagram.com/techdynobd/', 'images/logo.png', 'Seba Bikroy', 'https://play.google.com/store/apps', 'https://play.google.com/store/apps', 'Our Service is open Eid-ul-Azha.', 'আমাদের সেবা খোলা Eid দুল  আজহা।', 'When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so, we collect personal information from you that we consider necessary for achieving this purpose.\r\nWhen you use our Website, we collect and store your personal information body item\r\nWe release account and other personal information when we believe release is appropriate to comply with the law; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Chaldal.com, our users, or others. This includes exchanging information with other companies and organizations for fraud protection. When you use our Website, we collect and store your personal', 'যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি এবং সংরক্ষণ করি যা আপনার দ্বারা সময়ে সময়ে প্রদান করা হয়। এটি করার ক্ষেত্রে আমাদের প্রাথমিক লক্ষ্য হল আপনাকে একটি নিরাপদ, দক্ষ, মসৃণ এবং কাস্টমাইজড অভিজ্ঞতা প্রদান করা। এটি আমাদের পরিষেবা এবং বৈশিষ্ট্যগুলি সরবরাহ করতে দেয় যা সম্ভবত আপনার প্রয়োজনগুলি পূরণ করে এবং আপনার অভিজ্ঞতাকে নিরাপদ এবং সহজ করার জন্য আমাদের ওয়েবসাইটটি কাস্টমাইজ করতে পারে। আরও গুরুত্বপূর্ণ, এটি করার সময়, আমরা আপনার কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি যা আমরা এই উদ্দেশ্য অর্জনের জন্য প্রয়োজনীয় বলে মনে করি।\r\nযখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য বডি আইটেম সংগ্রহ এবং সংরক্ষণ করি\r\nআমরা অ্যাকাউন্ট এবং অন্যান্য ব্যক্তিগত তথ্য প্রকাশ করি যখন আমরা বিশ্বাস করি যে রিলিজ আইন মেনে চলার জন্য উপযুক্ত; আমাদের ব্যবহারের শর্তাবলী এবং অন্যান্য চুক্তি প্রয়োগ বা প্রয়োগ করুন; অথবা Chaldal.com, আমাদের ব্যবহারকারীদের বা অন্যদের অধিকার, সম্পত্তি বা নিরাপত্তা রক্ষা করুন। এর মধ্যে রয়েছে জালিয়াতি সুরক্ষার জন্য অন্যান্য কোম্পানি ও সংস্থার সঙ্গে তথ্য আদান -প্রদান। আপনি যখন আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত সংগ্রহ করি এবং সংরক্ষণ করি', 'When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so, we collect personal information from you that we consider necessary for achieving this purpose.\r\nWhen you use our Website, we collect and store your personal information body item\r\nWe release account and other personal information when we believe release is appropriate to comply with the law; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Chaldal.com, our users, or others. This includes exchanging information with other companies and organizations for fraud protection. When you use our Website, we collect and store your personal', 'যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি এবং সংরক্ষণ করি যা আপনার দ্বারা সময়ে সময়ে প্রদান করা হয়। এটি করার ক্ষেত্রে আমাদের প্রাথমিক লক্ষ্য হল আপনাকে একটি নিরাপদ, দক্ষ, মসৃণ এবং কাস্টমাইজড অভিজ্ঞতা প্রদান করা। এটি আমাদের পরিষেবা এবং বৈশিষ্ট্যগুলি সরবরাহ করতে দেয় যা সম্ভবত আপনার প্রয়োজনগুলি পূরণ করে এবং আপনার অভিজ্ঞতাকে নিরাপদ এবং সহজ করার জন্য আমাদের ওয়েবসাইটটি কাস্টমাইজ করতে পারে। আরও গুরুত্বপূর্ণ, এটি করার সময়, আমরা আপনার কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি যা আমরা এই উদ্দেশ্য অর্জনের জন্য প্রয়োজনীয় বলে মনে করি।\r\nযখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য বডি আইটেম সংগ্রহ এবং সংরক্ষণ করি\r\nআমরা অ্যাকাউন্ট এবং অন্যান্য ব্যক্তিগত তথ্য প্রকাশ করি যখন আমরা বিশ্বাস করি যে রিলিজ আইন মেনে চলার জন্য উপযুক্ত; আমাদের ব্যবহারের শর্তাবলী এবং অন্যান্য চুক্তি প্রয়োগ বা প্রয়োগ করুন; অথবা Chaldal.com, আমাদের ব্যবহারকারীদের বা অন্যদের অধিকার, সম্পত্তি বা নিরাপত্তা রক্ষা করুন। এর মধ্যে রয়েছে জালিয়াতি সুরক্ষার জন্য অন্যান্য কোম্পানি ও সংস্থার সঙ্গে তথ্য আদান -প্রদান। আপনি যখন আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত সংগ্রহ করি এবং সংরক্ষণ করি', 'When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so, we collect personal information from you that we consider necessary for achieving this purpose.\r\nWhen you use our Website, we collect and store your personal information body item\r\nWe release account and other personal information when we believe release is appropriate to comply with the law; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Chaldal.com, our users, or others. This includes exchanging information with other companies and organizations for fraud protection. When you use our Website, we collect and store your personal', 'যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি এবং সংরক্ষণ করি যা আপনার দ্বারা সময়ে সময়ে প্রদান করা হয়। এটি করার ক্ষেত্রে আমাদের প্রাথমিক লক্ষ্য হল আপনাকে একটি নিরাপদ, দক্ষ, মসৃণ এবং কাস্টমাইজড অভিজ্ঞতা প্রদান করা। এটি আমাদের পরিষেবা এবং বৈশিষ্ট্যগুলি সরবরাহ করতে দেয় যা সম্ভবত আপনার প্রয়োজনগুলি পূরণ করে এবং আপনার অভিজ্ঞতাকে নিরাপদ এবং সহজ করার জন্য আমাদের ওয়েবসাইটটি কাস্টমাইজ করতে পারে। আরও গুরুত্বপূর্ণ, এটি করার সময়, আমরা আপনার কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি যা আমরা এই উদ্দেশ্য অর্জনের জন্য প্রয়োজনীয় বলে মনে করি।\r\nযখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য বডি আইটেম সংগ্রহ এবং সংরক্ষণ করি\r\nআমরা অ্যাকাউন্ট এবং অন্যান্য ব্যক্তিগত তথ্য প্রকাশ করি যখন আমরা বিশ্বাস করি যে রিলিজ আইন মেনে চলার জন্য উপযুক্ত; আমাদের ব্যবহারের শর্তাবলী এবং অন্যান্য চুক্তি প্রয়োগ বা প্রয়োগ করুন; অথবা Chaldal.com, আমাদের ব্যবহারকারীদের বা অন্যদের অধিকার, সম্পত্তি বা নিরাপত্তা রক্ষা করুন। এর মধ্যে রয়েছে জালিয়াতি সুরক্ষার জন্য অন্যান্য কোম্পানি ও সংস্থার সঙ্গে তথ্য আদান -প্রদান। আপনি যখন আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত সংগ্রহ করি এবং সংরক্ষণ করি', 'When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so, we collect personal information from you that we consider necessary for achieving this purpose.\r\nWhen you use our Website, we collect and store your personal information body item\r\nWe release account and other personal information when we believe release is appropriate to comply with the law; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Chaldal.com, our users, or others. This includes exchanging information with other companies and organizations for fraud protection. When you use our Website, we collect and store your personal', 'যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি এবং সংরক্ষণ করি যা আপনার দ্বারা সময়ে সময়ে প্রদান করা হয়। এটি করার ক্ষেত্রে আমাদের প্রাথমিক লক্ষ্য হল আপনাকে একটি নিরাপদ, দক্ষ, মসৃণ এবং কাস্টমাইজড অভিজ্ঞতা প্রদান করা। এটি আমাদের পরিষেবা এবং বৈশিষ্ট্যগুলি সরবরাহ করতে দেয় যা সম্ভবত আপনার প্রয়োজনগুলি পূরণ করে এবং আপনার অভিজ্ঞতাকে নিরাপদ এবং সহজ করার জন্য আমাদের ওয়েবসাইটটি কাস্টমাইজ করতে পারে। আরও গুরুত্বপূর্ণ, এটি করার সময়, আমরা আপনার কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি যা আমরা এই উদ্দেশ্য অর্জনের জন্য প্রয়োজনীয় বলে মনে করি।\r\nযখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য বডি আইটেম সংগ্রহ এবং সংরক্ষণ করি\r\nআমরা অ্যাকাউন্ট এবং অন্যান্য ব্যক্তিগত তথ্য প্রকাশ করি যখন আমরা বিশ্বাস করি যে রিলিজ আইন মেনে চলার জন্য উপযুক্ত; আমাদের ব্যবহারের শর্তাবলী এবং অন্যান্য চুক্তি প্রয়োগ বা প্রয়োগ করুন; অথবা Chaldal.com, আমাদের ব্যবহারকারীদের বা অন্যদের অধিকার, সম্পত্তি বা নিরাপত্তা রক্ষা করুন। এর মধ্যে রয়েছে জালিয়াতি সুরক্ষার জন্য অন্যান্য কোম্পানি ও সংস্থার সঙ্গে তথ্য আদান -প্রদান। আপনি যখন আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত সংগ্রহ করি এবং সংরক্ষণ করি', 'When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs.', 'যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন, আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি এবং সংরক্ষণ করি যা আপনার দ্বারা সময়ে সময়ে প্রদান করা হয়। এটি করার ক্ষেত্রে আমাদের প্রাথমিক লক্ষ্য হল আপনাকে একটি নিরাপদ, দক্ষ, মসৃণ এবং কাস্টমাইজড অভিজ্ঞতা প্রদান করা। এটি আমাদের পরিষেবা এবং বৈশিষ্ট্যগুলি সরবরাহ করতে দেয় যা সম্ভবত আপনার প্রয়োজনগুলি পূরণ করে।');

-- --------------------------------------------------------

--
-- Table structure for table `meta_tag`
--

CREATE TABLE `meta_tag` (
  `meta_id` int(11) NOT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `page` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meta_tag`
--

INSERT INTO `meta_tag` (`meta_id`, `meta_title`, `meta_description`, `page`) VALUES
(1, 'Home || Sheba Bikroy', 'Home || Sheba Bikroy', 'home'),
(2, 'Home || Sheba Bikroy', 'Home || Sheba Bikroy', 'main_home\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `en_product_name` text DEFAULT NULL,
  `bn_product_name` text NOT NULL,
  `prev_price` text DEFAULT NULL,
  `price` text DEFAULT NULL,
  `en_product_description` text DEFAULT NULL,
  `bn_product_description` text DEFAULT NULL,
  `en_return` text DEFAULT NULL,
  `bn_return` text DEFAULT NULL,
  `en_short_desc` text DEFAULT NULL,
  `bn_short_desc` text DEFAULT NULL,
  `product_image` text DEFAULT NULL,
  `image_alt` text DEFAULT NULL,
  `product_slug` text DEFAULT NULL,
  `product_cat` text DEFAULT NULL,
  `product_sub_cat` text DEFAULT NULL,
  `area_id` text DEFAULT NULL,
  `status` text DEFAULT NULL,
  `stock` text DEFAULT NULL,
  `en_vendor_name` text DEFAULT NULL,
  `bn_vendor_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `en_product_name`, `bn_product_name`, `prev_price`, `price`, `en_product_description`, `bn_product_description`, `en_return`, `bn_return`, `en_short_desc`, `bn_short_desc`, `product_image`, `image_alt`, `product_slug`, `product_cat`, `product_sub_cat`, `area_id`, `status`, `stock`, `en_vendor_name`, `bn_vendor_name`) VALUES
(1, 'Nestle LACTOGEN 1 Infant Formula with Iron BIB', 'আয়রন বিআইবি সহ নেসলে ল্যাকটোজেন 1 শিশু সূত্র', '500', '400', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'k1mbzlzbhjb7x31kjymt.jpg', NULL, 'Nestle-LACTOGEN-1-Infant-Formula-with-Iron-BIB1', '1', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(2, 'Fortune Biryani Special Basmati Rice', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '300', '250', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'pbenxrv0ubznwyau2v8m.jpg', NULL, 'fortune-biryani-special-basmati-rice-5-kg2', '1', '2', '7', '1', '0', '9', 'বিক্রেতা এ'),
(3, 'Finis Fixol Toilet & Tiles Cleaner\r\n', ' Finis Fixol টয়লেট এবং টাইলস ক্লিনার', '200', '150', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'tsarakgmtkkceduer2ym.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr13', '1', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(4, 'Cooca Cola', 'কোকা কোলা', '600', '550', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'h2vdkkjcxlplbh7udorn.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-4', '1', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(5, 'Kheshari Dal', 'খেসারী ডাল', NULL, '1000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'yttgcaqg5xaw7q3bfvsg.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr35', '1', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(6, 'FAY Lily 3in1 Air Freshener', ' FAY লিলি 3in1 এয়ার ফ্রেশনার', NULL, '2000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'av7sur8tpvduoik9adll.png', NULL, 'fay-lily-3in1-air-freshener-300-ml46', '1', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(7, 'Nestle LACTOGEN 1 Infant Formula with Iron BIB', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '3000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'wve9cf5nd8bq9ovfv3wd.jpg', NULL, 'Nestle-LACTOGEN-1-Infant-Formula-with-Iron-BIB157', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(8, 'Fortune Biryani Special Basmati Rice', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '4000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'jxz6x6spgoeeafauk3oc.jpg', NULL, 'fortune-biryani-special-basmati-rice-5-kg168', '2', '2', '7', '1', '0', '9', 'বিক্রেতা এ'),
(9, 'Finis Fixol Toilet & Tiles Cleaner\r\n', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '5000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'ivgcpscjq1h8yuhat4u6.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr19', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(10, 'Cooca Cola', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '6000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'jhmxly3t9xglugw6bdek.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr210', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(11, 'Kheshari Dal', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '7000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'v7vm85vgzmovd2qul0dt.jpg', NULL, 'fixol-toilet-tile1s-cleaner-1-ltr311', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(12, 'FAY Lily 3in1 Air Freshener', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '1200', '1000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'lrrbstqxwwxiuhgoddd6.jpg', NULL, 'fay-lily-3in1-air-freshener-300-ml512', '2', '2', '7', '1', '0', '9', 'বিক্রেতা এ'),
(13, 'Nestle LACTOGEN 1 Infant Formula with Iron BIB', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '800', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'hd1leo86uj4ija3jvflx.jpg', NULL, 'Nestle-LACTOGEN-1-Infant-Formula-with-Iron-BIB613', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(14, 'Fortune Biryani Special Basmati Rice', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '1400', '700', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'vfabxnlp8ttoyalniwaw.jpg', NULL, 'fortune-biryani-special-basmati-rice-5-kg714', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(15, 'Finis Fixol Toilet & Tiles Cleaner\r\n', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '600', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'kw5zyiwnaub1d8p4m4pl.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr815', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(16, 'Cooca Cola', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '1600', '400', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'ednliqqw0ip1lcceb6i5.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr916', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(17, 'Kheshari Dal', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '300', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'jm9nctt0kjngdqsj5rpr.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr1017', '2', '2', '7', '1', '20', '9', 'বিক্রেতা এ');
INSERT INTO `product` (`id`, `en_product_name`, `bn_product_name`, `prev_price`, `price`, `en_product_description`, `bn_product_description`, `en_return`, `bn_return`, `en_short_desc`, `bn_short_desc`, `product_image`, `image_alt`, `product_slug`, `product_cat`, `product_sub_cat`, `area_id`, `status`, `stock`, `en_vendor_name`, `bn_vendor_name`) VALUES
(18, 'FAY Lily 3in1 Air Freshener', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '2000', '200', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'rakmvl26dpy5csobpayw.jpg', NULL, 'fay-lily-3in1-air-freshener-300-ml1118', '2', '2', '7', '1', '10', '9', 'বিক্রেতা এ'),
(19, 'Nestle LACTOGEN 1 Infant Formula with Iron BIB', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '500', '400', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'k1mbzlzbhjb7x31kjymt.jpg', NULL, 'Nestle-LACTOGEN-1-Infant-Formula-with-Iron-BIB154', '3', '2', '7', '1', '20', '9', 'বিক্রেতা এ'),
(20, 'Fortune Biryani Special Basmati Rice', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '300', '250', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'pbenxrv0ubznwyau2v8m.jpg', NULL, 'fortune-biryani-special-basmati-rice-5-kg251', '3', '2', '7', '1', '0', '9', 'বিক্রেতা এ'),
(21, 'Finis Fixol Toilet & Tiles Cleaner\r\n', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '200', '150', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'tsarakgmtkkceduer2ym.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr1350', '3', '2', '7', '1', '20', '10', 'বিক্রেতা এ'),
(22, 'Cooca Cola', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', '600', '550', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'bz329zgpssnhrtkkjpoh.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-4479', '3', '2', '7', '1', '20', '10', 'বিক্রেতা এ'),
(23, 'Kheshari Dal', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '1000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'yttgcaqg5xaw7q3bfvsg.jpg', NULL, 'fixol-toilet-tiles-cleaner-1-ltr48', '3', '2', '7', '1', '20', '10', 'বিক্রেতা এ'),
(24, 'FAY Lily 3in1 Air Freshener', 'ভাগ্য বিরিয়ানি স্পেশাল বাসমতি ভাত', NULL, '2000', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '<p>There are many types of polar rice in our country. However, the value of local polar rice is always different. This rice, which is very thin and has small grains, has a wonderful aroma. This&nbsp;<a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\">rice</a>&nbsp;has a great aroma if left as it is. Anyone will be fascinated by this fragrance. Insha-Allah, you will be fascinated by the smell of playing deshi polao rice. Our polao rice is procured from marginal farmers. So every grain of it is one hundred percent pure.</p>\r\n\r\n<p><strong>Product Type:</strong>&nbsp;Deshi Polao Rice</p>\r\n\r\n<p><strong>Type:</strong>&nbsp;Natural and Organic</p>\r\n', '<p> আমাদের দেশে অনেক ধরনের পোলার চাল আছে। যাইহোক, স্থানীয় পোলার চালের মূল্য সবসময় আলাদা। এই চাল, যা খুব পাতলা এবং ছোট শস্যযুক্ত, এর একটি দুর্দান্ত সুবাস রয়েছে। এই & nbsp; <a href=\"https://www.khaasfood.com/?s=rice&amp;post_type=product&amp;product_cat=0\"> ভাত </a> & nbsp; এর যেমন আছে তেমনি সুগন্ধ আছে। যে কেউ এই সুগন্ধে মুগ্ধ হবে। দেশী পোলাও ভাত খেলার গন্ধে মুগ্ধ হবেন ইনশা-আল্লাহ। আমাদের পোলাও চাল প্রান্তিক কৃষকদের কাছ থেকে সংগ্রহ করা হয়। সুতরাং এর প্রতিটি শস্য একশো শতাংশ বিশুদ্ধ। </p>\r\n\r\n<p> <strong> পণ্যের ধরণ: </strong> & nbsp; দেশি পোলাও ভাত </p>\r\n\r\n<p> <strong> ধরন: </strong> & nbsp; প্রাকৃতিক এবং জৈব </p>', '100 ml', '100 মিলি', 'av7sur8tpvduoik9adll.png', NULL, 'fay-lily-3in1-air-freshener-300-ml47', '3', '2', '7', '1', '20', '10', 'বিক্রেতা এ');

-- --------------------------------------------------------

--
-- Table structure for table `service_category`
--

CREATE TABLE `service_category` (
  `cat_id` int(11) NOT NULL,
  `cat_title` text DEFAULT NULL,
  `cat_icon` text DEFAULT NULL,
  `alt` text DEFAULT NULL,
  `cat_image` text DEFAULT NULL,
  `cat_banner` text DEFAULT NULL,
  `cat_slug` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `service_category`
--

INSERT INTO `service_category` (`cat_id`, `cat_title`, `cat_icon`, `alt`, `cat_image`, `cat_banner`, `cat_slug`) VALUES
(1, 'Grocery', NULL, NULL, 'icons/1.GroceryIcon.png', NULL, NULL),
(2, 'Drink', NULL, NULL, 'icons/2.DirnkIcon.png', NULL, NULL),
(3, 'Cleaning', NULL, NULL, 'icons/3.CleaningIcon.png', NULL, NULL),
(4, 'Health & Sefty', NULL, NULL, 'icons/4.HelthandseftyIcon.png', NULL, NULL),
(5, 'Body & BeautyCare', NULL, NULL, 'icons/5.Body&BeautycareIcon.png', NULL, NULL),
(6, 'Baby Health Care', NULL, NULL, 'icons/5.Body&BeautycareIcon.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `slider1`
--

CREATE TABLE `slider1` (
  `slider_id` int(11) NOT NULL,
  `slider_image` text DEFAULT NULL,
  `slider_alt` text DEFAULT NULL,
  `type` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `slider1`
--

INSERT INTO `slider1` (`slider_id`, `slider_image`, `slider_alt`, `type`) VALUES
(1, 'images/Cover-Page-01.png', 'SLider 1', 'slider1'),
(6, 'images/cover_image_2.jpg', 'Cover Image 2', 'slider2'),
(7, 'images/slider1.jpg', 'SLider 1', 'slider3'),
(8, 'images/slider3.jpg', 'Cover Image 2', 'slider3'),
(9, 'banner/slider.1-1.png', 'Cover Image 2', 'home_slider'),
(10, 'banner/slider.1-2.png', 'Cover Image 2', 'home_slider'),
(11, 'banner/slider-3.png', 'Cover Image 2', 'home_slider');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `sub_cat_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `sub_cat_name` text NOT NULL,
  `sub_category_bangla` text DEFAULT NULL,
  `sub_cat_slug` text NOT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `category_image` text DEFAULT NULL,
  `category_icon` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sub_category`
--

INSERT INTO `sub_category` (`sub_cat_id`, `cat_id`, `sub_cat_name`, `sub_category_bangla`, `sub_cat_slug`, `meta_title`, `meta_description`, `category_image`, `category_icon`) VALUES
(1, 1, 'Sub Category One', 'সাব ক্যাটাগরি ওয়ান', '', NULL, NULL, 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631246892/frozen-canned_bnkazi.webp', NULL),
(2, 1, 'Sub Category Two', 'সাব ক্যাটাগরি দুই', '', NULL, NULL, 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631246892/frozen-canned_bnkazi.webp', NULL),
(3, 1, 'Sub Category Three', 'সাব ক্যাটাগরি থ্রি', '', NULL, NULL, 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631246892/frozen-canned_bnkazi.webp', NULL),
(4, 2, 'Sub Category Four', 'সাব ক্যাটাগরি ফোর', '', NULL, NULL, 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631246892/frozen-canned_bnkazi.webp', NULL),
(7, 1, 'Test Subcategory Name', 'পরীক্ষার উপশ্রেণীর নাম', 'organic-food-is-so-important-for-our-health', 'Test Product', 'tset', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631246892/frozen-canned_bnkazi.webp', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631246890/snacks_rq3hjt.webp');

-- --------------------------------------------------------

--
-- Table structure for table `thana`
--

CREATE TABLE `thana` (
  `thana_id` int(11) NOT NULL,
  `district_id` int(11) DEFAULT NULL,
  `thana_name` text DEFAULT NULL,
  `bn_thana_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thana`
--

INSERT INTO `thana` (`thana_id`, `district_id`, `thana_name`, `bn_thana_name`) VALUES
(1, 1, 'Test Thana', 'টেস্ট থানা'),
(9, 8, 'Banani', 'বনানী');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` text COLLATE utf8_estonian_ci DEFAULT NULL,
  `number` text COLLATE utf8_estonian_ci DEFAULT NULL,
  `password` text COLLATE utf8_estonian_ci DEFAULT NULL,
  `email` text COLLATE utf8_estonian_ci DEFAULT NULL,
  `gender` text COLLATE utf8_estonian_ci DEFAULT NULL,
  `dob` text COLLATE utf8_estonian_ci DEFAULT NULL,
  `since` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `number`, `password`, `email`, `gender`, `dob`, `since`) VALUES
(1, 'Mehedi Hasan Sabuj', '01961892682', '78577fb7acbb19b2fa0c350bd53ea143cfbe34c0', NULL, NULL, NULL, '2021-09-10 11:33:32'),
(2, 'sujon', '01890653626', '46af56ebab083bde315810e0553a2f86ccf76535', NULL, NULL, NULL, '2021-06-20 12:14:04'),
(3, 'Mehedi Hasan Sabuj', '01628606201', '282438d446166261b5dc86af483567dde4aa95c1', NULL, NULL, NULL, '2021-06-29 06:10:41'),
(4, 'Mohiuddin98', '01926026101', '5a8815ba26cfd3a3f05cd1d6f29b6202fed0bab1', NULL, NULL, NULL, '2021-06-29 12:28:02'),
(5, 'sujon', '01980653626', '46af56ebab083bde315810e0553a2f86ccf76535', NULL, NULL, NULL, '2021-07-04 15:31:49'),
(6, 'Mehedi Hasan Sabuj', '01628606201', '78577fb7acbb19b2fa0c350bd53ea143cfbe34c0', NULL, NULL, NULL, '2021-09-10 11:37:42');

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE `vendor` (
  `vendor_id` int(11) NOT NULL,
  `shop_name` text DEFAULT NULL,
  `vendor_name` text DEFAULT NULL,
  `father_name` text DEFAULT NULL,
  `mother_name` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `mobile_number` text DEFAULT NULL,
  `nid_number` text DEFAULT NULL,
  `permanent_address` text DEFAULT NULL,
  `present_address` text DEFAULT NULL,
  `provider_photo` text DEFAULT NULL,
  `upload_nid` text DEFAULT NULL,
  `upload_trade_license` text DEFAULT NULL,
  `district` text DEFAULT NULL,
  `thana` text DEFAULT NULL,
  `area` text DEFAULT NULL,
  `product_categories` text DEFAULT NULL,
  `commision` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`vendor_id`, `shop_name`, `vendor_name`, `father_name`, `mother_name`, `email`, `mobile_number`, `nid_number`, `permanent_address`, `present_address`, `provider_photo`, `upload_nid`, `upload_trade_license`, `district`, `thana`, `area`, `product_categories`, `commision`, `status`) VALUES
(9, 'test', 'test', 'test', 'test', 'test@gmail.com', '+880162860620', '2855175465', 'test', 'fsdfdsfsdf', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631210108/snacks_avuum5.webp', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631210110/frozen-canned_hcfdf7.webp', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631210112/cooking_mzmghf.webp', '1,10', '1,9', '7,13', 'Drink & Beverage', '200', 1),
(10, 'Test Shop', 'Test Vendor', 'Test Father Name', 'Test Mother Name', 'mhsabuj1@gmail.com', '01628606201', '123456789', 'fdsfsdfdsfsd', 'fsdfsdfsdfsdf', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631210361/snacks_f2lpdx.webp', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631210364/meat-fish_vnsgpp.webp', 'https://res.cloudinary.com/dvxrcnzae/image/upload/v1631210366/frozen-canned_tgtvsi.webp', '8,10', '1,9', '7,13', 'Body & BeautyCare', '200', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`area_id`),
  ADD KEY `thana_id` (`thana_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand-_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `customer_sms`
--
ALTER TABLE `customer_sms`
  ADD PRIMARY KEY (`sms_id`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`info_id`);

--
-- Indexes for table `meta_tag`
--
ALTER TABLE `meta_tag`
  ADD PRIMARY KEY (`meta_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_category`
--
ALTER TABLE `service_category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `slider1`
--
ALTER TABLE `slider1`
  ADD PRIMARY KEY (`slider_id`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`sub_cat_id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `thana`
--
ALTER TABLE `thana`
  ADD PRIMARY KEY (`thana_id`),
  ADD KEY `district_id` (`district_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vendor`
--
ALTER TABLE `vendor`
  ADD PRIMARY KEY (`vendor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `area_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `sub_cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `thana`
--
ALTER TABLE `thana`
  MODIFY `thana_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `vendor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
