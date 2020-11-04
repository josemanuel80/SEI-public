import mongoose from 'mongoose';

const musicSchema = new mongoose.Schema(
  {
    title: String,
    artist: String,
  },
  {
    timestamps: true,
  },
);

const Music = mongoose.model('Music', musicSchema);

export const getAllMusic = async () => {
  try {
    return await Music.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getMusicResourceById = async (id) => {
  try {
    return await Music.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createMusicResource = async (data) => {
  try {
    return await Music.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMusicResource = async (id, data) => {
  try {
    return await Music.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteMusicResource = async (id) => {
  try {
    return await Music.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Music;
