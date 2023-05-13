import React, { useEffect } from 'react';
import DiaryEditor from '../components/DiaryEditor';

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `새 일기  | 비밀 일기장`;
  }, []);

  return <DiaryEditor />;
};

export default New;
