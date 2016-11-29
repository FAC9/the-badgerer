BEGIN;

DROP  TABLE IF EXISTS users cascade;
DROP  TABLE IF EXISTS resources cascade;
DROP  TABLE IF EXISTS reviews cascade;
DROP  TABLE IF EXISTS types cascade;

CREATE TABLE users (
  user_id         SERIAL         PRIMARY KEY NOT NULL,
  username    VARCHAR(100)   UNIQUE NOT NULL,
  password    VARCHAR(100)   NOT NULL,
  email       VARCHAR(100)   NOT NULL,
  signup_date DATE           NOT NULL
);

INSERT INTO  users (username, password, email, signup_date) VALUES('badger','BigBadBadger', 'contact@ThatBadger.com','2016-11-29');



CREATE TABLE resources (
  resource_id     SERIAL         PRIMARY KEY NOT NULL,
  resource_name   VARCHAR(100)   NOT NULL,
  resource_url    VARCHAR(100)   NOT NULL,
  type_id         VARCHAr(100)   NOT NULL,
  image_url       VARCHAR(100)   NOT NULL,
  creation_date   DATE           NOT NULL,
  user_id         INTEGER        NOT NULL
);

INSERT INTO  resources(resource_name,resource_url,type_id,image_url,creation_date,user_id) VALUES('badger.com','www.badger.com',1, 'gorgeous_badgers.jpg0','2016-11-29',1);



CREATE TABLE reviews (
  review_id        SERIAL         PRIMARY KEY NOT NULL,
  review_content   VARCHAR(1000)   NOT NULL,
  rating           INTEGER    NOT NULL,
  creation_date    DATE            NOT NULL,
  resource_id       INTEGER          NOT NULL,
  user_id          INTEGER         NOT NULL
);

INSERT INTO  reviews(review_content,rating,creation_date,resource_id, user_id) VALUES('badger badger badger badger badger','5','2016-11-29',1,1);

CREATE TABLE types (
  type_id         SERIAL         PRIMARY KEY NOT NULL,
  type            VARCHAR(100)   UNIQUE NOT NULL
);

INSERT INTO  types (type) VALUES('badger');


COMMIT;
