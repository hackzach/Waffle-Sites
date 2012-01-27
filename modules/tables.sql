-- phpMyAdmin SQL Dump
-- version 2.11.11.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 27, 2012 at 11:46 AM
-- Server version: 5.1.55
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `freebsd`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
  `id` varchar(64) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `title` text COLLATE latin1_general_ci NOT NULL,
  `data` text COLLATE latin1_general_ci NOT NULL,
  `owner` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `friends` text COLLATE latin1_general_ci NOT NULL,
  `playcount` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `albums`
--
-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE IF NOT EXISTS `chat` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `from` varchar(255) NOT NULL DEFAULT '',
  `to` varchar(255) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  `sent` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `recd` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `to` (`to`),
  KEY `from` (`from`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `chat`
--


-- --------------------------------------------------------

--
-- Table structure for table `getid3_cache`
--

CREATE TABLE IF NOT EXISTS `getid3_cache` (
  `filename` varchar(255) NOT NULL DEFAULT '',
  `filesize` int(11) NOT NULL DEFAULT '0',
  `filetime` int(11) NOT NULL DEFAULT '0',
  `analyzetime` int(11) NOT NULL DEFAULT '0',
  `value` text NOT NULL,
  PRIMARY KEY (`filename`,`filesize`,`filetime`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `getid3_cache`
--

INSERT INTO `getid3_cache` (`filename`, `filesize`, `filetime`, `analyzetime`, `value`) VALUES
('1.7.7', -1, -1, -1, '1.7.7');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `id` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `uid` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `image` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `isprivate` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `images`
--


-- --------------------------------------------------------

--
-- Table structure for table `music`
--

CREATE TABLE IF NOT EXISTS `music` (
  `id` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `filename` text COLLATE latin1_general_ci NOT NULL,
  `track` text COLLATE latin1_general_ci NOT NULL,
  `title` text COLLATE latin1_general_ci NOT NULL,
  `artist` text COLLATE latin1_general_ci NOT NULL,
  `album` text COLLATE latin1_general_ci NOT NULL,
  `genre` text COLLATE latin1_general_ci NOT NULL,
  `date` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `permission` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `playcount` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `owner` text COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `music`
--
--
-- Table structure for table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` varchar(32) NOT NULL,
  `title` varchar(32) NOT NULL,
  `description` varchar(64) NOT NULL,
  `permissions` varchar(32) NOT NULL,
  `owner` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `description`, `permissions`, `owner`) VALUES
('index', 'index', '', '3', '0'),
('phpinfo', 'Server Information', 'View extensions installed on this system.', '4', '0'),
('konsole', 'Konsole', 'Test functions, code, and scripts as a Superuser.', '4', '0'),
('links', 'Navigation', 'Manage the links on this website.', '3', '0'),
('pages', 'Webpages', 'Manage the content on this website.', '3', '0'),
('scripts', 'Applications', 'Manage the server side code that corresponds to webpages.', '3', '0'),
('settings', 'Settings', 'Manage website configuration.', '4', '0'),
('users', 'Users', 'Manage registered users on this website.', '3', '0'),
('update', 'Update', 'Update the core software for this website.', '4', '0'),
('stegger', 'Image Hider', 'Hides files and data within images.', '3', '0'),
('search', 'Search', 'Search this site.', '3', '0'),
('rsa', 'Encryptor', 'Encrypt data with RSA.', '3', '0'),
('private', 'Private Profile', 'Template page for private profiles.', '3', '0'),
('post', 'Post Receiver', 'Receiver page for Facebook Posts.', '3', '0'),
('ports', 'Port Checker', 'Test whether this site is accessible to the world.', '3', '0'),
('player2', 'Player2', 'Mediaplayer test.', '3', '0'),
('music', 'Music', 'Music App index.', '3', '0'),
('login', 'Login', 'Login receiver page.', '3', '0'),
('live', 'Live Streams', 'Streamer page.', '3', '0'),
('license', 'License', 'Main license page for this website.', '3', '0'),
('inbox', 'Inbox', 'Mailbox for users.', '3', '0'),
('content', 'Content', 'Your personal website.', '2', '0'),
('graph', 'Graph', 'Facebook API application.', '3', '0'),
('friends', 'Friends', 'Facabook Friends API.', '3', '0'),
('logout', 'Logout', 'Logs out the user.', '4', '0'),
('success', 'Success', 'Deprecated Success page template.', '3', '0'),
('docs/jquery-ui', 'jQuery Documentation', 'Example page for jQuery UI.', '1', '1'),
('chat', 'Chat', 'Chat Application.', '3', '0'),
('blog', 'Blog', 'Blog Application.', '3', '0'),
('block', 'Block', 'Access Denied template page.', '3', '0'),
('authorize', 'Auth Receiver', 'Reciever Applicaiton for Facebook API.', '3', '0'),
('artists', 'Artists', 'Artists Application.', '3', '0'),
('albums', 'Albums', 'Albums Application.', '3', '0'),
('about', 'About', 'About this website.', '3', '0'),
('404', '404', '', '4', '1'),
('support', 'Support', 'Support Helpdesk Template.', '3', '0'),
('test', 'Test', 'testpage.', '3', '0'),
('test123', 'Test123', 'Testpage.', '3', '0'),
('uploads', 'Uploads', 'Uploader page.', '3', '0'),
('voice', 'Google Voice', 'GV Application.', '3', '0'),
('you', 'View Profile', 'View your profile.', '1', '0'),
('home', 'home', '', '4', '1'),
('edit', 'Edit Profile', 'Edit your profile.', '1', '0'),
('500', '500', '', '4', '1'),
('default', 'default', '', '4', '1'),
('403', '403', '', '4', '1'),
('testpage', 'testpage', '', '4', '1'),
('uploader', 'Uploader', 'Uploader Application.', '4', '0'),
('admin.bak', 'admin.bak', '', '4', '1'),
('bottom', 'bottom', '', '4', '1'),
('footer', 'footer', '', '4', '1'),
('ftp', 'ftp', '', '4', '1'),
('header', 'header', '', '4', '1'),
('left', 'left', '', '4', '1'),
('navbar.bak', 'navbar.bak', '', '4', '1'),
('navbar', 'navbar', '', '4', '1'),
('right', 'right', '', '4', '1'),
('template', 'template', '', '4', '1'),
('top', 'top', '', '4', '1'),
('vncserver', 'vncserver', '', '4', '1'),
('vncviewer', 'vncviewer', '', '4', '1'),
('style', 'style', '', '4', '1'),
('', '', '', '4', '1'),
('docs', 'docs', '', '4', '1'),
('', '', '', '4', '1'),
('', '', '', '4', '1'),
('admin', 'admin', '', '4', '1'),
('applet', 'applet', '', '4', '1'),
('main', 'main', '', '4', '1'),
('ads', 'ads', '', '4', '1'),
('styles', 'Styles', 'Edit CSS styles for this website.', '1', '0'),
('layout', 'Layout', 'Edit HTML templates for this website.', '1', '0'),
('style', 'Style.css', 'Main page stylesheet.', '1', '0');

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE IF NOT EXISTS `providers` (
  `id` varchar(32) NOT NULL,
  `Facebook` varchar(32) DEFAULT NULL,
  `Twitter` varchar(32) DEFAULT NULL,
  `Google` varchar(32) DEFAULT NULL,
  `LinkedIn` varchar(32) DEFAULT NULL,
  `Other` varchar(32) DEFAULT NULL,
  `PayPal` varchar(32) DEFAULT NULL,
  `Yahoo!` varchar(32) DEFAULT NULL,
  `Windows Live` varchar(32) DEFAULT NULL,
  `Salesforce` varchar(32) DEFAULT NULL,
  `Foursquare` varchar(32) DEFAULT NULL,
  `Orkut` varchar(32) DEFAULT NULL,
  `AOL` varchar(32) DEFAULT NULL,
  `Blogger` varchar(32) DEFAULT NULL,
  `Flickr` varchar(32) DEFAULT NULL,
  `Hyves` varchar(32) DEFAULT NULL,
  `Livejournal` varchar(32) DEFAULT NULL,
  `Mixi` varchar(32) DEFAULT NULL,
  `MyOpenID` varchar(32) DEFAULT NULL,
  `Myspace` varchar(32) DEFAULT NULL,
  `Netlog` varchar(32) DEFAULT NULL,
  `Verisign` varchar(32) DEFAULT NULL,
  `VZ-Netzwerke` varchar(32) DEFAULT NULL,
  `Wordpress` varchar(32) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `providers`
--
-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `name` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `id` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `password` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `email` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `hide_email` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `location` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `birthdate` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `gender` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `theme_bgcolor` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `theme_fontcolor` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `theme_font` varchar(32) COLLATE latin1_general_ci NOT NULL,
  `profile` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `website` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `theme_fontsize` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `profile_pic` varchar(128) COLLATE latin1_general_ci NOT NULL DEFAULT '/images/-noimage.jpg',
  `firstvisit` int(32) NOT NULL,
  `lastvisit` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `ip` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `level` varchar(32) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `status` text COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci COMMENT='userbase';

--
-- Dumping data for table `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `whitelist`
--

CREATE TABLE IF NOT EXISTS `whitelist` (
  `blank1` varchar(32) NOT NULL DEFAULT '',
  `blank2` varchar(32) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whitelist`
--

