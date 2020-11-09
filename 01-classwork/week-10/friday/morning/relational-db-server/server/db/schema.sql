DROP TABLE IF EXISTS game_factories CASCADE;
DROP TABLE IF EXISTS games CASCADE;


CREATE TABLE game_factories (
  game_factory_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  location VARCHAR(255),
  market_value MONEY
);

CREATE TABLE games (
 game_factory_id INT REFERENCES game_factories(game_factory_id),
 name VARCHAR(255),
 game_id SERIAL PRIMARY KEY,
 year integer NOT NULL,
 platforms VARCHAR(255),
 "PEGI" VARCHAR(255),
 sales VARCHAR(255),
 genre VARCHAR(255)
);