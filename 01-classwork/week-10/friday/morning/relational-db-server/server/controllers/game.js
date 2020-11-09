import { getGamesBy } from '../models/game.js';

export const listGames = async (request, response) => {
  const { query } = request;

  try {
    const games = await getGamesBy(query);
    return response.status(200).send(games);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({
      message,
    });
  }
};
