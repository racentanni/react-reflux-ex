import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMeme } from '../actions';

const MemesList = () => {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  return (
    <div>
      {memes.map((meme) => (
        <div key={meme.id}>
          <img src={meme.imageUrl} alt="meme" />
          <h2>{meme.topText}</h2>
          <h3>{meme.bottomText}</h3>
          <button onClick={() => dispatch(removeMeme(meme.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default MemesList;