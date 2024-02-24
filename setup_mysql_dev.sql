CREATE DATABASE IF NOT EXISTS Bookrave_dev;
CREATE USER IF NOT EXISTS 'younes_dev'@'localhost' IDENTIFIED BY 'Bookrave_pwd';
GRANT ALL PRIVILEGES ON `Bookrave_dev`.* TO 'younes_dev'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'younes_dev'@'localhost';
FLUSH PRIVILEGES;
