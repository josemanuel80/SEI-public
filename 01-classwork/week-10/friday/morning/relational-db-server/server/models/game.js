import Games from '../db/queries/game.js';

const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};

export const getGamesBy = async (query) => {
  console.log(haveQuery(query));

  try {
    if (haveQuery) {
      const name = query['game-factory'];
      const gamesByCompany = Games.getByGameFactory(name);
      return gamesByCompany;
    }

    const games = await Games.getAll();
    return games;
  } catch (error) {
    throw new Error(error);
  }
};
