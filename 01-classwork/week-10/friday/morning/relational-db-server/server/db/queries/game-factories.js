import { query } from '../index.js';

const getAll = async () => {
  const gameFactories = await query({
    tag: 'game-factories.get-all',
    queryString: `SELECT * FROM game_factories`,
  });

  return gameFactories;
};

export default { getAll };
