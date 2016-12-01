BEGIN;

DROP  TABLE IF EXISTS users cascade;
DROP  TABLE IF EXISTS resources cascade;
DROP  TABLE IF EXISTS reviews cascade;
DROP  TABLE IF EXISTS categories cascade;

CREATE TABLE users (
  user_id         SERIAL         PRIMARY KEY NOT NULL,
  username    VARCHAR(100)   UNIQUE NOT NULL,
  password    VARCHAR(100)   NOT NULL,
  email       VARCHAR(100)   NOT NULL,
  signup_date DATE           NOT NULL
);

INSERT INTO users (username, password, email, signup_date) VALUES
('badger','$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'contact@ThatBadger.com','2016-11-29'),
('Cleop', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'Cleop@badger.com', NOW()),
('denesnori', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'denesnori@badger.com', NOW()),
('esraajb', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'esraajb@badger.com', NOW()),
('jsms90', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'jsms90@badger.com', NOW()),
('Jwhiles', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'Jwhiles@badger.com', NOW()),
('limeyb7', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'limeyb7@badger.com', NOW()),
('lucymonie', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'lucymonie@badger.com', NOW()),
('marisid', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'marisid@badger.com', NOW()),
('msachi', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'msachi@badger.com', NOW()),
('njsfield', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'njsfield@badger.com', NOW()),
('RhodesPeter', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'RhodesPeter@badger.com', NOW()),
('SavageWilliam', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'SavageWilliam@badger.com', NOW()),
('shireenzoaby', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'shireenzoaby@badger.com', NOW()),
('skibinska', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'skibinska@badger.com', NOW()),
('stevehopkinson', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'stevehopkinson@badger.com', NOW()),
('sofer', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'sofer@badger.com', NOW()),
('tbtommyb', '$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'tbtommyb@badger.com', NOW());


CREATE TABLE resources (
  resource_id     SERIAL         PRIMARY KEY NOT NULL,
  resource_name   VARCHAR(100)   NOT NULL,
  resource_url    VARCHAR(100)   NOT NULL,
  category_id     INTEGER        NOT NULL,
  image_url       VARCHAR(100)   NOT NULL,
  creation_date   DATE           NOT NULL,
  user_id         INTEGER        NOT NULL
);

INSERT into resources (resource_name, resource_url, category_id, image_url, creation_date, user_id) VALUES
('Learn Python The Hard Way (Website)', 'http://learnpythonthehardway.org/book/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Codecademy', 'https://www.codecademy.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Udacity', 'https://www.udacity.com/', 2, 'gorgeous_badgers.jpg',  NOW(), 1),
('Udemy', 'https://www.udemy.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('The Code Player', 'http://thecodeplayer.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Coder’s Guide', 'https://www.youtube.com/user/CodersGuide', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('DevTips', 'https://www.youtube.com/user/DevTipsForDesigners', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('LearnCode.academy', 'https://www.youtube.com/user/learncodeacademy', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('thenewboston', 'https://www.youtube.com/user/thenewboston', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('A List Apart', 'http://alistapart.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('CSS-Tricks', 'http://css-tricks.com', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('David Walsh', 'http://davidwalsh.name/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Codewars', 'http://www.codewars.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Scotch.io', 'https://scotch.io/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('SitePoint', 'http://www.sitepoint.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Tuts+', 'http://tutsplus.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Command Line Power User', 'http://commandlinepoweruser.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Conquering the Command Line', 'http://conqueringthecommandline.com/book', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Learn Command Line the Hard Way', 'http://cli.learncodethehardway.org/book/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Try Git', 'https://try.github.io/levels/1/challenges/1', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Git Immersion', 'http://gitimmersion.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Skillcrush’s Coding Bootcamp', 'https://skillcrush.com/skillcrush-10-day-bootcamp/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Learn CSS Layout', 'http://learnlayout.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Coursera', 'https://www.coursera.org/', 2, 'gorgeous_badgers.jpg',  NOW(), 1),
('Marksheet.io', 'http://marksheet.io/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Mozilla Developer Network', 'https://developer.mozilla.org/en-US/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('HTML5 Dog', 'http://www.htmldog.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Eloquent Javascript', 'http://eloquentjavascript.net/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Javascript.com', 'https://www.javascript.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('JavaScript for Cats', 'http://jsforcats.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Learn JS', 'http://www.learn-js.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('NodeSchool', 'http://nodeschool.io/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('That JS Dude', 'http://www.thatjsdude.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('The Node Beginner Book', 'http://www.nodebeginner.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('edX', 'https://www.edx.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('WordPress.tv', 'http://wordpress.tv/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('WPBeginner', 'http://www.wpbeginner.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('A Byte of Python', 'http://www.swaroopch.com/notes/python/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('LearnPython.org', 'http://www.learnpython.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Python Spot', 'https://pythonspot.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Learn Ruby the Hard Way', 'http://learnrubythehardway.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Rails For Zombies', 'http://railsforzombies.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Rails Tutorial', 'https://www.railstutorial.org/book', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('RubyMonk', 'https://rubymonk.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Free Code Camp', 'http://www.freecodecamp.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Try Ruby', 'http://tryruby.org/levels/1/challenges/0', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Learn SQL the Hard Way', 'http://sql.learncodethehardway.org/book/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('MongoDB University', 'https://university.mongodb.com/courses', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('MySQLtutorial.org', 'http://www.mysqltutorial.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('SQL for Web Nerds', 'http://philip.greenspun.com/sql/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Vertabelo', 'https://academy.vertabelo.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('HackDesign', 'https://hackdesign.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('UX Apprentice', 'http://www.uxapprentice.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('UXPin', 'https://www.uxpin.com/knowledge.html', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('CodeBuddies', 'http://hangouts.codebuddies.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('GA Dash', 'https://dash.generalassemb.ly/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('CodeNewbie', 'http://www.codenewbie.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Newbie Coder Warehouse', 'http://newbiecoderwarehouse.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('codebar', 'https://codebar.io/', 1, 'gorgeous_badgers.jpg',  NOW(), 1),
('Girl Develop It', 'https://www.girldevelopit.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Women Who Code', 'https://www.womenwhocode.com/', 1, 'gorgeous_badgers.jpg',  NOW(), 1),
('Khan Academy', 'https://www.khanacademy.org/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('MIT OpenCourseware', 'http://ocw.mit.edu/index.htm', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('The Odin Project', 'http://www.theodinproject.com/', 3, 'gorgeous_badgers.jpg',  NOW(), 1),
('Founders and Coders', 'http://www.foundersandcoders.com/', 1, 'gorgeous_badgers.jpg',  NOW(), 1),
('Coding for Everyone', 'http://codingforeveryone.foundersandcoders.org/', 1, 'gorgeous_badgers.jpg',  NOW(), 1);


CREATE TABLE reviews (
  review_id        SERIAL         PRIMARY KEY NOT NULL,
  review_content   VARCHAR(1000)   NOT NULL,
  rating           INTEGER    NOT NULL,
  creation_date    DATE            NOT NULL,
  modified_date    DATE           NOT NULL,
  resource_id       INTEGER          NOT NULL,
  status           INTEGER         NOT NULL,
  user_id          INTEGER         NOT NULL
);

INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 1 (badger)', 5, NOW(), NOW(), 1, 1, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 2 (nick)', 4, NOW(), NOW(), 1, 2, 11);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 3 (john)', 4, NOW(), NOW(), 1, 3, 6);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review (nori)', 3, NOW(), NOW(), 1, 3, 3);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review (emily)', 5, NOW(), NOW(), 1, 2, 7);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 6', 4, NOW(), NOW(), 1, 2, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 7', 5, NOW(), NOW(), 1, 1, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 8', 3, NOW(), NOW(), 1, 1, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 9', 2, NOW(), NOW(), 1, 2, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 10', 4, NOW(), NOW(), 1, 3, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 11', 5, NOW(), NOW(), 1, 1, 1);


CREATE TABLE categories (
  category_id         SERIAL         PRIMARY KEY NOT NULL,
  category_name            VARCHAR(100)   UNIQUE NOT NULL
);

INSERT into categories (category_name) VALUES ('Free offline course');
INSERT into categories (category_name) VALUES ('Paid offline course');
INSERT into categories (category_name) VALUES ('Free online course');
INSERT into categories (category_name) VALUES ('Paid online course');
INSERT into categories (category_name) VALUES ('Video tutorial');
INSERT into categories (category_name) VALUES ('Blog');
INSERT into categories (category_name) VALUES ('Coding challenges');
INSERT into categories (category_name) VALUES ('Book');


COMMIT;
