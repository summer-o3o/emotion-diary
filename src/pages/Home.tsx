import React, { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from '../Router';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';
import { DiaryTyoe } from '../types/types';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState<DiaryTyoe[]>([]);
  const [curDate, setCurDate] = useState(new Date());
  const headeText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1} 월`;

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `비밀 일기장`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter(it => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);
  console.log('data', data);
  console.log('diaryList', diaryList);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text="<" onClick={decreaseMonth} />}
        headText={headeText}
        rightChild={<MyButton text=">" onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
