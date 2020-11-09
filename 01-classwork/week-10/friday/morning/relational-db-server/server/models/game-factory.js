import GameFactory from '../db/queries/game-factories.js';

export const getListGameFactories = async () => {
  try {
    const gameFactories = await GameFactory.getAll();
    return gameFactories;
  } catch (error) {
    throw new Error(error);
  }
};
