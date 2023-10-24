import React from 'react';
import { EmotionItemTypes } from '../types/types';

const EmotionItem = (props: EmotionItemTypes) => {
  const { emotion_id, emotion_img, emotion_descript, onClick, isSelected } =
    props;

  return (
    <div
      className={[
        'EmotionItem',
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(' ')}
      onClick={() => onClick(emotion_id)}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
