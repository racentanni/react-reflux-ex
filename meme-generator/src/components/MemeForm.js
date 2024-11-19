import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMeme, updateMeme } from '../actions';

const MemeForm = ({ memeId }) => {
  const dispatch = useDispatch();
  const meme = useSelector(state => state.memes.find(m => m.id === memeId)) || {};
  const [topText, setTopText] = useState(meme.topText || '');
  const [bottomText, setBottomText] = useState(meme.bottomText || '');
  const [imageUrl, setImageUrl] = useState(meme.imageUrl || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (memeId) {
      dispatch(updateMeme(memeId, { topText, bottomText, imageUrl }));
    } else {
      dispatch(addMeme({ topText, bottomText, imageUrl }));
    }
    setTopText('');
    setBottomText('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Top Text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bottom Text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">{memeId ? 'Update Meme' : 'Create Meme'}</button>
    </form>
  );
};

export default MemeForm;