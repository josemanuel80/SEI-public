import { query } from '../index.js';

const getAll = async () => {
  const games = await query({
    tag: 'games.get-all',
    queryString: 'SELECT * FROM games',
  });
  return games;
};

const getByGameFactory = async (name) => {
  const games = await query({
    tag: 'games.get-by-game-factory',
    queryString: `SELECT
	*
FROM
	games
WHERE
	games.game_factory_id = (
		SELECT
			game_factories.game_factory_id
		FROM
			game_factories
		WHERE
			LOWER(game_factories."name") LIKE '%${name.toLowerCase()}%')`,
  });
  return games;
};

export default { getAll, getByGameFactory };
