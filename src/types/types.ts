import { ReactNode } from 'react';

export interface HeaderTypes {
  leftChild: ReactNode;
  headText: string;
  rightChild: ReactNode;
}

export interface ButtonTypes {
  text: string;
  type: string;
  onClick: () => void;
}

export interface EmotionItemTypes {
  emotion_id: number;
  emotion_img: string;
  emotion_descript: string;
  onClick: (emotion_id: number) => void;
  isSelected: boolean;
}

export interface DiaryTypes {
  content: string;
  date: Number;
  emotion: Number;
  id: Number;
}

export interface DiaryEditorTypes {
  isEdit: boolean;
  originData: {
    content: string;
    date: Number;
    emotion: Number;
    id: Number;
  };
}

export interface OnCreateTypes {
  date: number;
  content: string;
  emotion: number;
}
