import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';
import Input from '../Input';
import { useEffect, useState } from 'react';
import Select from '../Input/Select';

const cx = classNames.bind(styles);

function FormGroup({
  lable,
  requireId,
  requires,
  setRequires,
  placeholder,
  inputType,
  textarea,
  selectData = [],
  layout,
  error,
  onChange,
}) {
  const [inputValue, setInputValue] = useState('');
  const [areaValue, setAreaValue] = useState('');

  useEffect(() => {
    if (requireId >= 0) {
      setInputValue(requires[requireId].title);
      setAreaValue(requires[requireId].content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requires]);

  const handleChangeTextarea = (e) => {
    requires[requireId].content = e.target.value;
    setRequires(requires);
    setAreaValue(e.target.value);
  };
  return (
    <div className={cx('wrapper', layout)}>
      <label className={cx("title")}>{lable}</label>
      {selectData.length === 0 && <Input
        value={inputValue}
        date={inputType === 'date'}
        index={requireId}
        requires={requires}
        setRequires={setRequires}
        setValue={setInputValue}
        type={inputType}
        placeholder={placeholder}
        error={error}
        onChange={onChange}
      />}
      {textarea && <textarea value={areaValue} className={cx('textarea')} onChange={handleChangeTextarea} />}
      {selectData.length > 0 && (
        <Select options={selectData} onChange={onChange}/>
      )}
      <p className={cx("error-message")}>{error}</p>
    </div>
  );
}

export default FormGroup;
