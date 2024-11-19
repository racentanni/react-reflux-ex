import { ADD_MEME, REMOVE_MEME, UPDATE_MEME } from '../actions';

const initialState = [];

const memesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEME:
      return [...state, { ...action.payload, id: Date.now() }];
    case REMOVE_MEME:
      return state.filter(meme => meme.id !== action.payload);
    case UPDATE_MEME:
      return state.map(meme =>
        meme.id === action.payload.id ? { ...meme, ...action.payload.updatedMeme } : meme
      );
    default:
      return state;
  }
};

export default memesReducer;