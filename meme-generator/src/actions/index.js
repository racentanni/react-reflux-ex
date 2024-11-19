export const ADD_MEME = 'ADD_MEME';
export const REMOVE_MEME = 'REMOVE_MEME';
export const UPDATE_MEME = 'UPDATE_MEME';

export const addMeme = (meme) => ({
  type: ADD_MEME,
  payload: meme,
});

export const removeMeme = (id) => ({
  type: REMOVE_MEME,
  payload: id,
});

export const updateMeme = (id, updatedMeme) => ({
  type: UPDATE_MEME,
  payload: { id, updatedMeme },
});