import { ButtonTypes } from '../types/types';

const MyButton = (props: ButtonTypes) => {
  const { text, type, onClick } = props;

  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';
  return (
    <button
      className={['Mybutton', `Mybutton_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
};
export default MyButton;
