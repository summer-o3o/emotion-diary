import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../Router';
import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginData] = useState();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `${id}번 일기 수정  | 비밀 일기장`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        it => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert('없는 일기입니다');
        navigate('/', { replace: true });
      }
    }
  }, [id, diaryList]);
  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
