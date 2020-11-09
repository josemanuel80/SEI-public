INSERT INTO game_factories (name, location, market_value) VALUES 
  ('Nintendo', 'Osaka, Japan', 900000000),
  ('Konami', 'Tokio, Japan', 20000000),
  ('Square Enix', 'Shibuya, Japan', 10000000);


INSERT INTO games (game_factory_id, name, year, platforms, "PEGI", sales, genre) VALUES 
((SELECT game_factories.game_factory_id FROM game_factories WHERE LOWER(name) LIKE '%nintendo%'), 'Super Mario Bros. 3', 1990, 'NES', '3', 200000000000000000, 'platform' ),
((SELECT game_factories.game_factory_id FROM game_factories WHERE LOWER(name) LIKE '%konami%'), 'PES 2021', 2020, 'PS4, PC, PS5, Xbox', '3', 200000000000000000, 'sport' ),
((SELECT game_factories.game_factory_id FROM game_factories WHERE LOWER(name) LIKE '%square%'), 'Final Fantasy X', 2001, 'PS1, PS3, PS Vita, PS4, Xbox One', '12', 20000000000000000000, 'RPG' );