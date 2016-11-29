BEGIN;

DROP  TABLE IF EXISTS users cascade;

CREATE TABLE users (
  user_id         SERIAL         PRIMARY KEY NOT NULL,
  username    VARCHAR(100)   NOT NULL,
  password    VARCHAR(100)   NOT NULL,
  email       VARCHAR(100)   NOT NULL,
  signup_date DATE           NOT NULL
);

INSERT INTO  people(username, password, email, signup_date) VALUES('badger','BigBadBadger', 'contact@ThatBadger.com','2016-11-29');

DROP  TABLE IF EXISTS resources cascade;

CREATE TABLE resources (
  resource_id     SERIAL         PRIMARY KEY NOT NULL,
  resource_name   VARCHAR(100)   NOT NULL,
  resoure_url     VARCHAR(100)   NOT NULL,
  image_url       VARCHAR(100)   NOT NULL,
  creation_date   DATE           NOT NULL,
  user_id         INTEGER            NOT NULL
);

INSERT INTO  resources(resource_name,resource_url,image_url,creation_date,user_id) VALUES('badger.com','www.badger.com', 'gorgeous_badgers.jpg0','2016-11-29',1);

DROP  TABLE IF EXISTS reviews cascade;

CREATE TABLE reviews (
  review_id        SERIAL         PRIMARY KEY NOT NULL,
  review_content   VARCHAR(1000)   NOT NULL,
  rating           INTEGER    NOT NULL,
  creation_date    DATE            NOT NULL,
  resoure_id       INTEGER          NOT NULL,
  user_id          INTEGER         NOT NULL
);

INSERT INTO  reviews(review_content,rating,creation_date,resource_id, user_id) VALUES('badger badger badger badger badger','5','2016-11-29',1,1);


COMMIT;
