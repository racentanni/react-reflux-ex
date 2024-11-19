import memesReducer from './memesReducer';
import { ADD_MEME, REMOVE_MEME } from '../actions';

describe('memesReducer', () => {
  it('should return the initial state', () => {
    expect(memesReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MEME', () => {
    const meme = { topText: 'Top', bottomText: 'Bottom', imageUrl: 'url' };
    const addAction = {
      type: ADD_MEME,
      payload: meme,
    };
    const newState = memesReducer([], addAction);
    expect(newState.length).toBe(1);
    expect(newState[0]).toMatchObject(meme);
  });

  it('should handle REMOVE_MEME', () => {
    const initialState = [
      { id: 1, topText: 'Top', bottomText: 'Bottom', imageUrl: 'url' },
    ];
    const removeAction = {
      type: REMOVE_MEME,
      payload: 1,
    };
    const newState = memesReducer(initialState, removeAction);
    expect(newState.length).toBe(0);
  });
});