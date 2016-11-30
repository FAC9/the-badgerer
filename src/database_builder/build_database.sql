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

INSERT INTO  users (username, password, email, signup_date) VALUES('badger','$2a$10$IJETvwsaxVYjxPDeRarqjOrYZQWFQCgQp6VohxK0N1JbBYxRpIz7e', 'contact@ThatBadger.com','2016-11-29');



CREATE TABLE resources (
  resource_id     SERIAL         PRIMARY KEY NOT NULL,
  resource_name   VARCHAR(100)   NOT NULL,
  resource_url    VARCHAR(100)   NOT NULL,
  category_id     INTEGER        NOT NULL,
  image_url       VARCHAR(100)   NOT NULL,
  creation_date   DATE           NOT NULL,
  user_id         INTEGER        NOT NULL
);

INSERT INTO  resources(resource_name,resource_url,category_id,image_url,creation_date,user_id) VALUES('badger.com','www.badger.com',1, 'gorgeous_badgers.jpg0','2016-11-29',1);
INSERT INTO  resources(resource_name,resource_url,category_id,image_url,creation_date,user_id) VALUES('codeacademy','www.codeacademy.com',1, 'gorgeous_badgers.jpg0','2016-11-29',1);
INSERT INTO  resources(resource_name,resource_url,category_id,image_url,creation_date,user_id) VALUES('codewars','www.codewars.com',1, 'gorgeous_badgers.jpg0','2016-11-29',1);


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

INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 1', 5, NOW(), NOW(), 1, 1, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 2', 4, NOW(), NOW(), 1, 2, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 3', 4, NOW(), NOW(), 1, 3, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 4', 3, NOW(), NOW(), 1, 3, 1);
INSERT INTO  reviews(review_content,rating,creation_date,modified_date,status,resource_id, user_id) VALUES('I am a review 5', 5, NOW(), NOW(), 1, 2, 1);
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

INSERT INTO  categories (category_name) VALUES('badger');


COMMIT;
