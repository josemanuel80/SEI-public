import { getListGameFactories } from '../models/game-factory.js';

export const listGameFactories = async (request, response) => {
  try {
    const gameFactories = await getListGameFactories();
    return response.status(200).send(gameFactories);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
