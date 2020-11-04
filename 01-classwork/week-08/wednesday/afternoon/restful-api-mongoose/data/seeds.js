import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import musicData from './music.js';
import Music from '../models/music.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  musicData.map(async (musicItem) => {
    const musicResource = await Music.create({ ...musicItem });
    console.log(
      `The resource ${JSON.stringify(musicResource)} has been created`,
    );
  }),
);
