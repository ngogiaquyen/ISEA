import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';
import Input from '../Input';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function FormGroup({ lable, requireId, requires, setRequires, placeholder, inputType, textarea, layout }) {
  const [inputValue, setInputValue] = useState('');
  const [areaValue, setAreaValue] = useState('');

  useEffect(() => {
    if (requireId >= 0) {
      setInputValue(requires[requireId].title);
      setAreaValue(requires[requireId].content);
    }
  }, [requires]);

  const handleChangeTextarea = (e) => {
    requires[requireId].content = e.target.value;
    setRequires(requires)
    setAreaValue(e.target.value);
    console.log(requires)
  };

  return (
    <div className={cx('wrapper', layout)}>
      <label>{lable}</label>
      <Input
        value={inputValue}
        date={inputType === 'date'}
        index={requireId}
        requires={requires}
        setRequires={setRequires}
        setValue={setInputValue}
        type={inputType}
        placeholder={placeholder}
      ></Input>
      {textarea && <textarea value={areaValue} className={cx('textarea')} onChange={handleChangeTextarea} />}
    </div>
  );
}

export default FormGroup;
