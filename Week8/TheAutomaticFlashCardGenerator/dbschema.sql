CREATE DATABASE IF NOT EXISTS FLASH_CARD_GENERATOR;
USE FLASH_CARD_GENERATOR;

CREATE TABLE IF NOT EXISTS category (
	id INT NOT NULL AUTO_INCREMENT,
    cat_id INT,
    category VARCHAR(25) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE IF NOT EXISTS topic (
	id INT NOT NULL AUTO_INCREMENT,
    cat_id INT,
    topic VARCHAR(25) NOT NULL,
    PRIMARY KEY(id)
    -- FOREIGN KEY (cat_id) REFERENCES `CATEGORY`(`cat_id`)
);

CREATE TABLE IF NOT EXISTS  card (
	id INT NOT NULL AUTO_INCREMENT,
    cat_id INT,
    prompt TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    PRIMARY KEY(id)
    -- FOREIGN KEY (cat_id) REFERENCES `CATEGORY`(`cat_id`)
);

